<template>
    <div class="browse-container content-page">
        <div class="icon-header">
            <div class="cover">
                <v-icon dark>$vuetify.icons.compass</v-icon>
            </div>
            <div class="title">
                <div class="headline">Video</div>
                <div class="sub">
                    Explore and listen to various genres & moods.
                </div>
            </div>
        </div>
        <div class="songs" >
            <div class="grid-layout">
                <div class="item" v-for="video in videos" :key="video.id">
                    <div class="content-item" v-if="video" >
                        <div class="content-item__header" >
                            <slot name="control-layer"></slot>
                            <div
                                class="control-layer"
                            >
                                <div class="buttons">
                                    <!-- Play/Pause Music -->
                                    <!-- <button
                                        class="button button-play mx-3"
                                        v-if="imIPlayingNow"
                                        @click.stop="pause"
                                    >
                                        <v-icon size="55" dark>$vuetify.icons.pause-circle</v-icon>
                                    </button> -->
                                    <button
                                        class="button button-play mx-3"
                                        @click="playVideo(video)"
                                    >
                                        <v-icon size="55" dark>$vuetify.icons.play-circle</v-icon>
                                    </button>
                                    <!-- v-else
                                        @click.stop="play(video, true)" -->
                                    <!-- <div
                                        class="button button-dots"
                                    >
                                        <song-menu
                                            :item="song"
                                            :dark="true"
                                            :closeOnContentClick="true"
                                            @close="$store.commit('setSongMenu', null)"
                                        ></song-menu>
                                    </div> -->

                                </div>
                            </div>
                            <div class="cover-layer">
                                <v-img :src="video.cover" class="img" aspect-ratio="1">
                                    <template v-slot:placeholder>
                                        <div class="song-expo-skeleton fill-height">
                                            <content-placeholders :rounded="true">
                                                <content-placeholders-img />
                                            </content-placeholders>
                                        </div>
                                    </template>
                                </v-img>
                                <div class="badges-layer">
                                <div class="badges">
                                    <div class="premium" :title="$t('Premium')" v-if="video.isProduct">
                                        <v-icon color="#FFA500">$vuetify.icons.crown</v-icon>
                                    </div>
                                    <div class="explicit" :title="$t('Explicit')" v-if="video.isExplicit">
                                        <div class="explicit__sign">
                                            E
                                        </div>
                                    </div>
                                    <div class="exclusive" :title="$t('Exclusive')" v-if="video.isExclusive">
                                        <v-btn x-small dense depressed color="primary">{{$t('Exclusive')}}</v-btn>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="content-item__body">
                            <router-link
                                class="content-item__body__title__container"
                                :to="{ name: 'video', params: { id: video.id } }"
                            >
                                <div class="content-item__body__type">
                                    {{$t('Video')}}
                                </div>
                                <div class="content-item__body__title max-2-lines">
                                    {{ video.title }}
                                </div>
                            </router-link>
                            <div class="artist max-1-lines">
                                <artists :artists="video.artists"></artists>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="selected_video" >
                <video id="video_player" :src="selected_video.source" controls width="100%">
                </video>
            </div>
            <div class="empty" v-if="videos && !videos.length">
                <empty-page
                    :headline="$t('No Content!')"
                    :sub="$t('Looks like there is no content yet for this genre.')"
                    img="peep-68.png"
                />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            videos: null,
            genre: null,
            errorStatus: null,
            selected_video: null
        };
    },
    computed : {
        imIPlayingNow() {
            return this.isCurrentlyPlaying(this.song);
        }
    },
    created() {
        this.fetchVideos();
    },
    methods: {
        playVideo(video){
            alert()
            this.selected_video = video;

        },
        fetchVideos() {
            axios.get("/api/videos").then((res) => {
                this.videos = res.data;
                console.log('this.videos', this.videos)
            });
        },
    }
}
</script>

<style lang="scss" scoped>
// @import "../../../../sass/player/pages/404-page";
// @import "../../../../sass/variables";
// .icon-header {
//     .cover {
//         background: linear-gradient(45deg, $color-secondary, $color-primary);
//     }
// }

// .gradient {
//     height: 40vh;
//     background: linear-gradient(180deg, rgba(13,0,36,0.2805497198879552) 0%, rgba(179,122,218,0.5018382352941176) 47%, rgba(232,215,244,1) 92%, rgba(255,255,255,1) 100%);
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
// }
</style>
