<template>
    <form-container>
        <portal to="title">
            <page-title icon="image" v-text="form.name"></page-title>
        </portal>

        <portal to="actions">
            <div class="buttons">
                <ui-button variant="primary" v-modal:delete>Delete</ui-button>

                <ui-button v-modal:move-file>Move</ui-button>
                <ui-button v-modal:replace-file>Replace</ui-button>
                <ui-button @click.prevent="download">Download</ui-button>

                <ui-button @click.prevent="back">Go Back</ui-button>
                <ui-button variant="primary" @click.prevent="submit">Save</ui-button>
            </div>
        </portal>

        <portal to="modals">
            <move-file-modal></move-file-modal>

            <replace-file-modal
                :disk="disk"
                :file="file"
                @replaced="replacement => file = replacement">
            </replace-file-modal>

            <delete-file-modal
                :disk="disk"
                :file="file">
            </delete-file-modal>
        </portal>

        <div class="card" v-if="loaded" :key="file.name">
            <div class="card__body flex items-center justify-center">
                <div v-if="file.type == 'image'">
                    <ui-img
                        :src="fileSrc(file, 1500, 1500, 'max')"
                        :alt="file.alt"
                        background-color="#ffffff"
                        class="rounded">
                    </ui-img>
                </div>

                <div v-else-if="file.type == 'video'" class="w-full">
                    <video ref="player" controls crossorigin>
                        <source :src="file.url" :type="file.mimetype" size="576">
                    </video>
                </div>

                <div v-else-if="file.type == 'audio'">
                    <audio controls>
                        <source :src="file.url" :type="file.mimetype">
                    </audio>
                </div>

                <div v-else>
                    <ui-img
                        :src="'/vendor/fusion/img/' + file.type + '-small.svg'"
                        background-color="#ffffff"
                        :width="200"
                        :height="200"
                        :alt="file.alt">
                    </ui-img>

                    <div class="text-center px-6 py-3 rounded border border-gray-400 bg-gray-200 text-gray-800">
                        No preview available
                    </div>
                </div>
            </div>
        </div>

        <div class="card" v-if="file.type == 'video'">
            <div class="card__body text-center text-sm text-gray-800">
                If you intend on serving this video on your website, it's highly recommended that you use a 3rd party service such as <a href="">Youtube</a> or <a href="">Vimeo</a>.
            </div>
        </div>

        <template v-slot:sidebar>
            <div class="card">
                <div class="card__body">
                    <ui-slug-group
                        name="name"
                        label="Filename"
                        autofocus
                        required
                        autocomplete="off"
                        help="The filename dictates the Share URL below."
                        placeholder="Filename"
                        :has-error="form.errors.has('name')"
                        :error-message="form.errors.get('name')"
                        v-model="form.name">
                    </ui-slug-group>

                    <ui-input-group
                        name="title"
                        label="Title"
                        autocomplete="off"
                        help="The title targets the title html attributes, which is a nice-to-have feature."
                        placeholder="Title (optional)"
                        :has-error="form.errors.has('title')"
                        :error-message="form.errors.get('title')"
                        v-model="form.title">
                    </ui-input-group>

                    <ui-input-group
                        name="alt"
                        label="Alt"
                        autocomplete="off"
                        placeholder="Alt (optional)"
                        help="This value targets the alt html attributes, required for accessibility."
                        :has-error="form.errors.has('alt')"
                        :error-message="form.errors.get('alt')"
                        v-model="form.alt">
                    </ui-input-group>

                    <ui-textarea-group
                        name="caption"
                        label="Caption"
                        help="This caption is used for image captions to give users more information."
                        placeholder="Caption (optional)"
                        :has-error="form.errors.has('caption')"
                        :error-message="form.errors.get('caption')"
                        v-model="form.caption">
                    </ui-textarea-group>
                </div>
            </div>

            <div class="card">
                <div class="card__body">
                    <ui-input-group
                        name="share"
                        readonly
                        label="Share"
                        class="text-sm"
                        :value="file.url">
                    </ui-input-group>
                </div>
            </div>

            <ui-definition-list v-if="file.created_at">
                <ui-definition name="Size">
                    {{ file.bytes | bytes }}
                </ui-definition>

                <ui-definition name="Mimetype">
                    {{ file.mimetype }}
                </ui-definition>

                <ui-definition name="Dimensions" v-if="file.dimensions">
                    {{ file.dimensions.width }} x {{ file.dimensions.height }}
                </ui-definition>

                <ui-definition name="Last Modified">
                    {{ $moment(file.created_at.date).format('L') }}
                </ui-definition>
            </ui-definition-list>
        </template>
    </form-container>
</template>

<script>
    import Plyr                       from 'plyr'
    import Form                       from '../../services/Form'
    import FileHelperMixin            from '../../mixins/filehelper'
    import { mapActions, mapGetters } from 'vuex'

    export default {
        auth() {
            return {
                permission: 'files.view',
            }
        },

        head: {
            title() {
                return {
                    inner: this.file.name || 'Loading...'
                }
            }
        },

        mixins: [ FileHelperMixin ],

        data() {
            return {
                file: {},
                form: new Form,
                player: null,
                loaded: false,
            }
        },

        computed: {
            ...mapGetters({
                disk: 'filemanager/getDisk',
            })
        },

        watch: {
            file: {
                handler(value) {
                    this.$nextTick(() => {
                        this.player = new Plyr(this.$refs.player, {
                            title: this.file.name,
                            ratio: '16:9',
                            controls: [
                                'play-large',   // The large play button in the center
                                'restart',      // Restart playback
                                'play',         // Play/pause playback
                                'progress',     // The progress bar and scrubber for playback and buffering
                                'current-time', // The current time of playback
                                'duration',     // The full duration of the media
                                'mute',         // Toggle mute
                                'volume',       // Volume control
                                'captions',     // Toggle captions
                                'settings',     // Settings menu
                                'pip',          // Picture-in-picture (currently Safari only)
                                'airplay',      // Airplay (currently Safari only)
                                'fullscreen',   // Toggle fullscreen
                            ],
                            settings: ['quality', 'loop'],
                        })
                    })
                },
                deep: true
            },
        },

        methods: {
            ...mapActions({
                fetchDisk: 'filemanager/fetchDisk',
                toggleSelection: 'filemanager/toggleFileSelection',
            }),

            getFile(to, from, next) {
                axios.get(`/api/files/${to.params.disk}/${to.params.file}`)
                    .then((response) => {
                        this.file   = response.data.data
                        this.loaded = true
                        this.form   = new Form({
                            name: this.file.name,
                            title: this.file.title,
                            alt: this.file.alt,
                            caption: this.file.caption
                        })

                        this.toggleSelection(this.file.id)

                        this.$emit('updateHead')
                    })
            },

            submit() {
                this.form.patch(`/api/files/${this.disk.id}/${this.file.id}`)
                    .then((response) => {
                        this.file.name = this.form.name

                        toast('The file\'s information was successfully updated', 'success')
                    }).catch((error) => {
                        toast(error.response.data.message, 'danger')
                    })
            },

            back() {
                this.$router.push({name: 'file-manager.index'})
            },

            download() {
                axios({
                    url: `/api/files/${this.disk.id}/${this.file.id}/download`,
                    method: 'GET',
                    responseType: 'blob',
                }).then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', `${this.file.name}.${this.file.extension}`);
                    document.body.appendChild(link);
                    link.click();
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.fetchDisk(to.params.disk)
                vm.getFile(to, from, next)
            })
        },

        beforeRouteUpdate(to, from, next) {
            this.fetchDisk(to.params.disk)
            this.getFile(to, from, next)

            next()
        }
    }
</script>