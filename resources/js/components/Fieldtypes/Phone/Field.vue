<template>
    <ui-input-group
        :name="field.handle"
        type="tel"
        :label="field.name"
        :help="field.help"
        :placeholder="field.settings.placeholder"
        :has-error="hasError(field.handle)"
        :error-message="errorMessage(field.handle)"
        v-model="model">
    </ui-input-group>
</template>

<script>
    import FieldMixin from '@/mixins/fieldtypes/field'

    export default {
        name: 'phone-fieldtype',

        mixins: [FieldMixin],
    }
</script>
