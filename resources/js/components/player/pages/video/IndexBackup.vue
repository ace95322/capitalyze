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
          v-show="this.selected_video.source_format != 'yt_video'"
          id="video_player"
          :src="selected_video.custom_source"
          controls
          autoplay
          width="420"
          height="315"
        ></video>
        <div v-show="this.selected_video.source_format == 'yt_video'" id="yt-player" autoplay></div>
        <!-- <youtube
         v-show="this.selected_video.source_format == 'yt_video'"
         :video-id="selected_video.source"
         @playing="playing"
         @ready="ready"
         :player-vars="{autoplay: 1}"></youtube> -->
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
      youtubePlayer: null,
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
    // this.onYouTubeIframeAPIReady();
  },
  async mounted() {
    window.videocompo = this;
    this.initPlayer();
  },
  methods: {
    initPlayer() {
      this.hls = new Hls();
      this.videoPlayer = document.getElementById("video_player");
      this.initEventHandlers();
    },
    playVideo(video) {
      this.selected_video = video;
      // console.log(video);
      this.selected_video.custom_source = video.source;
      destroyPlayer();
      if (this.selected_video.source_format == "yt_video") {
        this.selected_video.custom_source =
          "https://www.youtube.com/embed/" + video.source;
        newVideoInitialize(video.source);
      }
      //   console.log("this.videoPlayer => ", this.videoPlayer);
      //   this.createPlayCount();
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
          type: "video", //this.isPodcastEpisode ? "episode" : "video"
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
      });
    },
    ready(event) {
      this.youtubePlayer = event.target;
    },
    playing(event) {
      console.log("Playing => ", this.youtubePlayer);
    },
    youtubeRoyaltiesCount() {
      this.$store.dispatch("registerPlayAndRoyaltyCount", {
        id: this.selected_video.id,
        type: this.isPodcastEpisode ? "episode" : "video",
        label: this.selected_video.title,
        duration: this.selected_video.duration,
        origin: "youtube",
        artist_id: this.selected_video.artist
          ? this.selected_video.artist.id
          : "",
      });
    },
    // onYouTubeIframeAPIReady() {
    //   console.log("onYouTubeIframeAPIReady");
    //   loadPlayer("Xa0Q0J5tOP0");
    // },
    onPlayerStateChange(playerobj, data) {
      console.log("state chnge");
      //   console.log("playerobj",playerobj);
      //   console.log("data",data)
      //   playerobj.getCurrenttime()
    },
  },
};

var player;
function loadPlayer(videoId) {
  console.log("load player");
  //   window.onYouTubeIframeAPIReady = function () {
  // onYouTubePlayer();
//   console.log("onYouTubePlayerAPIReady", YT);
  player = new YT.Player("yt-player", {
    // videoId: "Xa0Q0J5tOP0",
    videoId: videoId,
    events: {
      onStateChange: onStateChange,
      // window.videocompo.onPlayerStateChange(player)
    },
  });
  //   };
  function onStateChange(evnt) {
    // console.log("evnt", evnt);
    // console.log("player", player.getCurrentTime());
    // if playing then call api after 60 seconds
    var myTimeout;
    var timer = 60;
    if(evnt.data == 1){

        if(player.getCurrentTime() < 60){
            myTimeout = setTimeout(function(){
                // alert("10 second over");
                // window.videocompo.testMethod()
                window.videocompo.youtubeRoyaltiesCount()
            }, (player.getCurrentTime() < 1 ? timer : (60 - Math.round(player.getCurrentTime())))*1000);
        }


    }else if(evnt.data == 2 || evnt.data == 3 || evnt.data == 0){ // paused & check playinng seconds & check timer second & call api
        clearTimeout(myTimeout);
    }
  }
}

function newVideoInitialize(videoId) {
  if(player){
      player.destroy();
  }

  loadPlayer(videoId);
}

function destroyPlayer(){
  if(player){
      player.destroy();
  }
}

// loadPlayer();
</script>
