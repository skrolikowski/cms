<template>
    <field-builder
        v-model="fields"
        @input="reorder">
    </field-builder>
</template>

<script>
    import fieldtype from '../../mixins/fieldtype'

    export default {
        name: 'replicator-fieldtype-settings',

        mixins: [fieldtype],

        data() {
        	return {
        		replicator: {}
        	}
        },

        computed: {
        	fields: {
        		get() {
        			return this.settings.fields || []
        		},
        		set(value) {
        			this.$set(this.settings.fields, value)
        		}
        	}
        },

        methods: {
        	reorder() {
                _.each(this.fields, (field, order) => field.order = order)
            }
        },

        created() {
        	if (this.settings.replicator)
        		axios.get(`/api/replicator/${this.settings.replicator}`)
        			.then((response) => {
        				this.replicator = response.data.data
        			})
			// if (this.settings.replicator)
			// 	axios.all([
			// 		axios.get(`/api/replicator/${this.settings.replicator}`)
			// 		axios.get('/api/fieldtypes'),
			// 	]).then(axios.spread((replicator, fieldtypes) => {
			// 		this.replicator = replicator.data.data
			// 		this.fieldtypes = fieldtypes.data.data
			// 	}))
			// else
			// 	axios.get('/api/fieldtypes')
			// 		.then((response) => this.fieldtypes = response.data.data)
        }
    }
</script>

