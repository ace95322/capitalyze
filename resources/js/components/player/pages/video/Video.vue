<template>
  <div class="browse-container content-page">
    <div class="icon-header">
      <div class="cover">
        <v-icon dark>$vuetify.icons.compass</v-icon>
      </div>
      <div class="title">
        <div class="headline">Video</div>
        <div class="sub">Explore and listen to various genres & moods.</div>
      </div>
    </div>
    <div class="songs">
      <div v-show="selected_video.custom_source">
        <video
          id="video_player"
          :src="selected_video.custom_source"
          controls
          width="420"
          height="315"
        ></video>
      </div>
      <div class="grid-layout">
        <div class="item" v-for="video in videos" :key="video.id">
          <div class="content-item" v-if="video">
            <div class="content-item__header">
              <slot name="control-layer"></slot>
              <div class="control-layer">
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
                    <div
                      class="premium"
                      :title="$t('Premium')"
                      v-if="video.isProduct"
                    >
                      <v-icon color="#FFA500">$vuetify.icons.crown</v-icon>
                    </div>
                    <div
                      class="explicit"
                      :title="$t('Explicit')"
                      v-if="video.isExplicit"
                    >
                      <div class="explicit__sign">E</div>
                    </div>
                    <div
                      class="exclusive"
                      :title="$t('Exclusive')"
                      v-if="video.isExclusive"
                    >
                      <v-btn x-small dense depressed color="primary">{{
                        $t("Exclusive")
                      }}</v-btn>
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
                  {{ $t("Video") }}
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
//../../../mixins/player/videoE
// import videoEventHandlers from "../../../mixins/player/videoEventHandlers";
import videoEventHandlers from "../../../../mixins/player/videoEventHandlers";
export default {
  mixins: [videoEventHandlers],
  data() {
    return {
      hls: null,
      videos: null,
      genre: null,
      errorStatus: null,
      selected_video: {
        custom_source: "",
      },
      videoPlayer: null,
      currentVideo: {
        source: null,
        source_format: null,
        index: 0,
        title: "",
        album: "",
        artist: "",
        cover: "",
        progress: 0,
        duration: "-:--",
        currentTime: "0:00",
        videoCurrentTime: 0,
        isPlaying: false,
      },
    };
  },
  computed: {
    imIPlayingNow() {
      return this.isCurrentlyPlaying(this.song);
    },
  },
  async created() {
    this.fetchVideos();
  },
  async mounted() {
    this.initPlayer();
  },
  methods: {
    initPlayer() {
      this.hls = new Hls();
      this.videoPlayer = document.getElementById("video_player");
      console.log("video player obj", this.videoPlayer);
      this.initEventHandlers();
    },
    playVideo(video) {
      this.selected_video = video;
      console.log(video)
      this.selected_video.custom_source = video.source;

      if (this.selected_video.source_format == "yt_video") {
        this.selected_video.custom_source =
          "https://www.youtube.com/embed/" + video.source;
      }
      console.log("this.videoPlayer => ", this.videoPlayer);
      this.createPlayCount();
    },
    createPlayCount() {
      if (this.selected_video.source_format === "yt_video") {
        this.$store.dispatch("registerPlay", {
          id: this.selected_video.id,
          type: "video", //this.isPodcastEpisode ? "episode" : "video"
          label: this.selected_video.title,
          artist_id: this.selected_video.artist
            ? this.selected_video.artist.id
            : "",
          duration: this.videoPlayer.duration,
          origin: "youtube",
        });
      } else if (this.selected_video.source_format === "file") {
        this.$store.dispatch("registerPlay", {
          id: this.selected_video.id,
          type: "video",//this.isPodcastEpisode ? "episode" : "video"
          label: this.selected_video.title,
          artist_id: this.selected_video.artist
            ? this.selected_video.artist.id
            : "",
          duration: this.videoPlayer.duration,
          origin: this.videoPlayer.origin,
        });
      } else {
        this.$store.dispatch("registerPlay", {
          id: this.selected_video.id,
          type: "radio-sation",
          label: this.selected_video.title,
        });
      }
    },
    fetchVideos() {
      axios.get("/api/videos").then((res) => {
        this.videos = res.data;
        // console.log('this.videos', this.videos)
      });
    },
  },
};
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
