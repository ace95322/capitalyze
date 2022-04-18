export default {
    methods: {
        initEventHandlers() {
            // this.videoPlayer.onLoad = this.onLoad;
            // this.videoPlayer.onStateChange = this.onStateChange;
            // this.videoPlayer.onEnded = this.onEnded;

            // this.videoPlayer.onloadstart = this.onloadstart;
            // this.videoPlayer.onloadstart = this.onloadstart;
            // this.videoPlayer.onerror = this.onerror;
            // this.videoPlayer.onloadedmetadata = this.onloadmetadata;
            // this.videoPlayer.oncanplay = this.oncanplay;
            // this.videoPlayer.ontimeupdate = this.ontimeupdate;
            this.videoPlayer.onended = this.onended;
            // this.videoPlayer.onwaiting = this.onwaiting;
            // this.videoPlayer.oncanplaythrough = this.oncanplay;
            // this.is_register_play_count = false;
        },
        // onLoad(){
        //     alert('on load event')
        // },
        // onStateChange(){
        //     alert("Video ended")
        // },
        // onEnded(){
        //     console.log("Video Ended")
        // }
        /*onloadstart() {
            this.isLoading = true;
            console.log("on load start")
        },
        onerror() {
            if (!this.isRadioStation) {
                // this.failedToPlay();
            }
        },
        onwaiting() {
            this.isLoading = true;
        },
        onloadmetadata() {
            // this.currentAudio.currentTime = "0:00";
            this.currentAudio.duration = this.videoPlayer.duration
        },
        oncanplay() {
            this.canPlay = true;
            this.isLoading = false;
        },
        ontimeupdate() {
            // this.currentAudio.isPlaying = true
            // this.updateTime(
            //     this.videoPlayer.currentTime,
            //     this.videoPlayer.duration
            // );
            console.log("on time update", this.videoPlayer.duration);
            // this.onapiCallRegisterPlayCount();
        },*/
        /*onapiCallRegisterPlayCount(){
            if(this.audioPlayer.currentTime >= 59 && this.audioPlayer.currentTime <= 60 && !this.is_register_play_count)
            {
                if (this.currentAudio.source_format === "yt_video") {
                    this.$store.dispatch("registerPlay", {
                        id: this.currentAudio.id,
                        type: this.isPodcastEpisode ? "episode" : "song",
                        label: this.currentAudio.title,
                        artist_id: this.currentAudio.artist ? this.currentAudio.artist.id : '',
                        duration: this.currentAudio.duration,
                        origin: 'youtube'
                    });
                } else if (this.currentAudio.source_format === "file") {
                    this.$store.dispatch("registerPlay", {
                        id: this.currentAudio.id,
                        type: this.isPodcastEpisode ? "episode" : "song",
                        label: this.currentAudio.title,
                        artist_id: this.currentAudio.artist ? this.currentAudio.artist.id : '',
                        duration: this.currentAudio.duration,
                        origin: this.currentAudio.origin
                    });
                } else {
                    this.$store.dispatch("registerPlay", {
                        id: this.currentAudio.id,
                        type: "radio-sation",
                        label: this.currentAudio.title
                    });
                }

                this.is_register_play_count = true;
            }
        },*/
        onended() {
            /*alert("Ended Data");
            var index;
            this.canPlay = false;
            this.tracks_played++;
            this.$store.commit("setCurrentlyPlayingTypeStatus", "pause");
            this.$store.commit("setPlayerStatus", null);
            this.currentAudio.isPlaying = false;*/
            if (this.$store.getters.getUser && this.$store.getters.getUser.id) {
                alert("End Data");
                this.$store.dispatch("endPlay");
            }
            /*if (!this.buttons.loop) {
                if (this.buttons.shuffle && this.playlist.length > 1) {
                    index = this.getRandomAudio(
                        this.playlist.length,
                        this.currentAudio.index
                    );
                    this.updateCurrentAudio(index);
                } else {
                    if (this.playlist.length !== this.currentAudio.index + 1) {
                        index = this.currentAudio.index + 1;
                    } else {
                        index = 0;
                    }
                    this.updateCurrentAudio(index);
                }
            } else {
                if (this.isCurrentAudioAFileAudio) {
                    index = this.currentAudio.index;
                    this.updateCurrentAudio(index, true);
                } else if (this.currentAudio.source_format === "yt_video") {
                    this.videoPlayer.seekTo(0);
                    this.videoPlayer.playVideo();
                }
            }*/
        }
    }
}
