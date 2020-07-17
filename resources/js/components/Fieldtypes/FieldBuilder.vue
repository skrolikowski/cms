<template>
    <div>
        <div class="row">
            <div class="col mb-6 w-full flex justify-between">
                <h3>Fields</h3>
                <p-dropdown id="control-filter" right> Add Field
                    <template v-slot:menu>
                        <p-dropdown-link
                            v-for="(fieldtype, index) in fieldtypes"
                            :key="fieldtype.handle"
                            @click.prevent="add(fieldtype)">
                                <fa-icon :icon="fieldtype.icon" class="icon"></fa-icon>
                            {{ fieldtype.name }}
                        </p-dropdown-link>
                    </template>
                </p-dropdown>
            </div>
        </div>

        <div class="row">
            <div class="col w-full">
                <p v-if="fields.length == 0">Add a field to get started.</p>
                <p-sortable-list v-else v-model="fields" class="sortable-list">
                    <div class="col mb-6 w-full">
                        <p-sortable-item v-for="(field, index) in fields" :key="field.handle" class="mb-3 w-full">
                            <div class="section__field">
                                <div>
                                    <p-sortable-handle class="cursor-move inline-block">
                                        <fa-icon icon="grip-vertical" class="handle fa-fw text-gray-400 mr-3"></fa-icon>
                                    </p-sortable-handle>

                                    <fa-icon :icon="['fas', field.type.icon]" class="fa-fw mr-3"></fa-icon>
                                    <span class="mr-6 font-bold">{{ field.name }}</span>
                                    <span class="mr-6 font-mono text-xs">{{ field.handle }}</span>
                                    <span class="font-mono text-xs uppercase">{{ field.type.name }}</span>
                                </div>

                                <p-actions :id="field.handle + '_actions'">
                                    <p-dropdown-link @click.prevent="duplicate(index)">Duplicate</p-dropdown-link>
                                    <p-dropdown-link @click.prevent="edit(index)">Edit</p-dropdown-link>
                                    <p-dropdown-link @click.prevent="remove(index)">Delete</p-dropdown-link>
                                </p-actions>
                            </div>
                        </p-sortable-item>
                    </div>
                </p-sortable-list>
            </div>  
        </div>

        <portal to="modals">
            <field-editor
                v-model="field"
                @save="save"
                @close="close">
            </field-editor>
        </portal>
    </div>
</template>

<script>
    export default {
        name: 'fieldtypes-field-builder',

        components: {
            'field-editor': require('./FieldEditor').default
        },

        data() {
            return {
                fieldtypes: {},
                field: false,
            }
        },

        props: {
            value: {
                type: Array,
                required: false,
                default: () => []
            }
        },

        computed: {
            fields: {
                get() {
                    return this.value
                },

                set(value) {
                    this.$emit('input', value)
                }
            }
        },

        methods: {
            add(type, extra = {}) {
                let name       = this.rename(extra.name || type.name)
                let handle     = _.snakeCase(name)
                let help       = extra.help || ''
                let settings   = extra.settings ? _.cloneDeep(extra.settings, true) : _.cloneDeep(type.settings, true)
                let order      = this.fields.length
                let validation = extra.validation || ''

                this.fields.push({
                    type, name, handle, help, settings, order, validation
                })
            },

            duplicate(index) {
                let field = _.cloneDeep(this.fields[index])

                this.add(field.type, field)
            },

            remove(index) {
                this.fields.splice(index, 1)
            },

            edit(index) {
                this.field = this.fields[index]
            },

            save(handle, field) {
                this.fields.splice(this.findBy('handle', handle), 1, field)
                this.close()
            },

            close() {
                this.field = false
            },

            findBy(key, value) {
                return _.findIndex(this.fields, (field) => field[key] == value)
            },

            rename(original, name, count = 0) {
                name = original + (count ? ` ${count}` : '')

                if (this.findBy('name', name) != -1) {
                    return this.rename(original, name, ++count)
                }

                return name
            },
        },

        mounted() {
            axios.all([
                axios.get('/api/fieldtypes'),
            ]).then(axios.spread((fieldtypes) => {
                this.fieldtypes = fieldtypes.data.data
            }))
        },

        created() {
            bus().$on('add-field', (field) => {
                if (this.findBy('handle', field.handle) != -1) {
                    this.add(field.fieldtype, field)
                }
            })

            bus().$on('remove-field', (handle) => {
                let index = this.findBy('handle', handle)

                if (index > -1) {
                    this.remove(index)
                }
            })
        },

        beforeDestroy() {
            bus().$off('add-field')
            bus().$off('remove-field')
        }
    }
</script>
