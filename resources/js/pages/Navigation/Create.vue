<template>
    <div class="navigation-page">
        <portal to="title">
			<page-title icon="anchor">Create Navigation</page-title>
		</portal>

        <shared-form :form="form"></shared-form>
    </div>
</template>

<script>
    import Form       from '@/services/Form'
    import SharedForm from '@/pages/Navigation/SharedForm'

    export default {
        auth() {
            return {
                permission: 'navigation.create',
            }
        },

        head: {
            title() {
                return {
                    inner: 'Create Navigation'
                }
            }
        },

        data() {
            return {
                form: new Form({
                    name: '',
                    handle: '',
                    description: '',
                    sections: []
                }, true)
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                this.form.post('/api/navigation')
                    .then((response) => {
                        axios.post(`/api/blueprints/${response.data.blueprint.id}/sections`, { sections: this.form.sections })
                            .then((response) => {
                                toast('Navigation successfully saved', 'success')

                                this.$router.push('/navigation')
                            }).catch((response) => {
                                toast(response.message, 'failed')
                            })
                    }).catch((response) => {
                        toast(response.message, 'failed')
                    })
            }
        }
    }
</script>