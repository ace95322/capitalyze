(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_player_audio-player_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/artist/EarningDetails.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/artist/EarningDetails.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixins_billing_billing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/billing/billing */ "./resources/js/mixins/billing/billing.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['artist'],
  mixins: [_mixins_billing_billing__WEBPACK_IMPORTED_MODULE_0__["default"]],
  computed: {
    totalSalesProfit: function totalSalesProfit() {
      return this.artist.sales.reduce(function (acc, val) {
        return acc + val.amount * val.artist_cut / 100;
      }, 0);
    },
    totalRoyaltiesProfit: function totalRoyaltiesProfit() {
      return this.artist.royalties.reduce(function (acc, val) {
        return acc + val.total_royalties * (val.price / 100);
      }, 0);
    },
    payedPayouts: function payedPayouts() {
      return this.artist.payouts.filter(function (payout) {
        return payout.status === "payed";
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialogs/admin/edit/Artist.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialogs/admin/edit/Artist.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _artist_EarningDetails_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../artist/EarningDetails.vue */ "./resources/js/components/artist/EarningDetails.vue");
/* harmony import */ var _data_coutries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../data/coutries */ "./resources/js/data/coutries.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["artist"],
  components: {
    ArtistEarningDetails: _artist_EarningDetails_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      editedArtist: this.artist,
      countriesList: _data_coutries__WEBPACK_IMPORTED_MODULE_1__["default"],
      firstCopy: JSON.parse(JSON.stringify(this.artist)),
      available_disk_space: this.artist.available_disk_space || this.$store.getters.getSettings.availableArtistDiskSpace,
      available_disk_space_unit: "MB",
      isLoading: false,
      defaultAvatarPath: "/storage/defaults/images/artist_avatar.png"
    };
  },
  methods: {
    imageReady: function imageReady(e) {
      this.artist.avatar = e;
    },
    closeWindow: function closeWindow() {
      var _this = this;

      var changed = false;

      if (JSON.stringify(this.editedArtist) != JSON.stringify(this.firstCopy)) {
        changed = true;
      }

      if (changed) {
        this.$confirm({
          message: "".concat(this.$t("Are you sure you wanna quit without saving the changes?")),
          button: {
            no: this.$t("Cancel"),
            yes: this.$t("Discard")
          },
          callback: function callback(confirm) {
            if (confirm) {
              _this.editedArtist = _this.firstCopy;

              _this.$emit("close");
            }
          }
        });
      } else {
        this.$emit("close");
      }
    },
    saveArtist: function saveArtist() {
      var _this2 = this;

      var formData = new FormData();
      this.isLoading = true;
      formData.append("firstname", this.editedArtist.firstname || "");
      formData.append("lastname", this.editedArtist.lastname || "");
      formData.append("displayname", this.editedArtist.displayname || "");
      formData.append("country", this.editedArtist.country || "");
      formData.append("phone", this.editedArtist.phone || "");
      formData.append("email", this.editedArtist.email || "");
      formData.append("address", this.editedArtist.address || "");
      formData.append("spotify_link", this.editedArtist.spotify_link || "");
      formData.append("youtube_link", this.editedArtist.youtube_link || "");
      formData.append("soundcloud_link", this.editedArtist.soundcloud_link || "");
      formData.append("itunes_link", this.editedArtist.itunes_link || "");

      if (this.available_disk_space_unit === "GB") {
        var available_disk_space = this.available_disk_space * 1024;
      } else if (this.available_disk_space_unit === "KB") {
        var available_disk_space = this.available_disk_space / 1024;
      } else {
        var available_disk_space = this.available_disk_space;
      }

      this.editedArtist.available_disk_space = available_disk_space;
      formData.append("available_disk_space", available_disk_space);

      if (this.editedArtist.avatar && this.editedArtist.avatar.data) {
        formData.append("avatar", this.editedArtist.avatar.data, this.editedArtist.avatar.title);
      } else if (this.editedArtist.avatar && !this.editedArtist.avatar.data) {
        // no avatar was picked, the value is stored as a string
        formData.append("avatar", this.editedArtist.avatar);
      } else {
        formData.append("avatar", this.defaultAvatarPath);
      }

      if (this.editedArtist["new"]) {
        axios.post("/api/admin/artists", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then(function (res) {
          _this2.$emit("updated");

          _this2.isLoading = false;
        })["catch"](function (e) {
          _this2.isLoading = false;
          _this2.errors = e.response.data.errors; // this.$notify({
          //     group: "foo",
          //     type: "error",
          //     title: this.$t("Error"),
          //     text: Object.values(e.response.data.errors).join(
          //         "<br />"
          //     )
          // });
        });
      } else {
        formData.append("_method", "PUT");
        axios.post("/api/admin/artists/" + this.editedArtist.id, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then(function () {
          _this2.$emit("updated");

          _this2.isLoading = false;
        })["catch"](function (e) {
          _this2.isLoading = false;
          _this2.errors = e.response.data.errors; // this.$notify({
          //     group: "foo",
          //     type: "error",
          //     title: this.$t("Error"),
          //     text: Object.values(e.response.data.errors).join(
          //         "<br />"
          //     )
          // });
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/single-items/TV.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/single-items/TV.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      smallScreen: true
    };
  },
  methods: {
    switchToSmallScreen: function switchToSmallScreen() {
      this.$emit("small-screen");
      this.smallScreen = true;
    },
    switchToTVScreen: function switchToTVScreen() {
      this.$emit("large-screen");
      this.smallScreen = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dialogs_admin_edit_Artist_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dialogs/admin/edit/Artist.vue */ "./resources/js/components/dialogs/admin/edit/Artist.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Artist: _dialogs_admin_edit_Artist_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      showAddMenu: false,
      showPlaylist: false,
      vol: this.volume // isTextOverflowed: false,

    };
  },
  computed: {
    fullScreenPlayer: {
      get: function get() {
        return this.fullScreenPlayerProp;
      },
      set: function set() {
        this.$emit("fullScreenPlayer");
      }
    },
    currentTitle: function currentTitle() {
      return this.currentAudio.title;
    }
  },
  // watch: {
  //     currentTitle() {
  //         return true
  //         // let element = document.getElementById('live-stream-title');
  //         // if( element ) {
  //         //     let elementWidth = element.clientWidth;
  //         //     if( elementWidth > 300 ) {
  //         //         this.isTextOverflowed =  true;
  //         //     } else {
  //         //         this.isTextOverflowed =  false;
  //         //     }
  //         // }
  //     }
  // },
  props: ["playlist", "currentAudio", "fullScreenPlayerProp", "getUp", "isLoading", "downloadLoading", "buttons", "volumebarInnerWidth", "playbackRate", "volumeButton", "isLiked", "isArtistFollowed", "isPodcastEpisode", "isCurrentAudioAStream", "isCurrentAudioAFileAudio", "volumeButton", "volume", "duration", "isPurchasable", "isOwned"]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_single_items_TV__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/single-items/TV */ "./resources/js/components/elements/single-items/TV.vue");
/* harmony import */ var _FooterPlayerLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FooterPlayerLayout */ "./resources/js/components/player/audio-player/FooterPlayerLayout.vue");
/* harmony import */ var _PhonePlayerLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PhonePlayerLayout */ "./resources/js/components/player/audio-player/PhonePlayerLayout.vue");
/* harmony import */ var _mixins_player_eventHandlers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../mixins/player/eventHandlers */ "./resources/js/mixins/player/eventHandlers.js");
/* harmony import */ var _mixins_player_playerActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../mixins/player/playerActions */ "./resources/js/mixins/player/playerActions.js");
/* harmony import */ var _mixins_player_progress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../mixins/player/progress */ "./resources/js/mixins/player/progress.js");
/* harmony import */ var _mixins_player_stream__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../mixins/player/stream */ "./resources/js/mixins/player/stream.js");
/* harmony import */ var _mixins_player_update__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../mixins/player/update */ "./resources/js/mixins/player/update.js");
/* harmony import */ var _mixins_player_volume__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../mixins/player/volume */ "./resources/js/mixins/player/volume.js");
/* harmony import */ var _mixins_player_youTube__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../mixins/player/youTube */ "./resources/js/mixins/player/youTube.js");
/* harmony import */ var _mixins_billing_billing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../mixins/billing/billing */ "./resources/js/mixins/billing/billing.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../helpers */ "./resources/js/helpers.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // mixins










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["playlist"],
  mixins: [_mixins_player_playerActions__WEBPACK_IMPORTED_MODULE_5__["default"], _mixins_player_eventHandlers__WEBPACK_IMPORTED_MODULE_4__["default"], _mixins_player_stream__WEBPACK_IMPORTED_MODULE_7__["default"], _mixins_player_update__WEBPACK_IMPORTED_MODULE_8__["default"], _mixins_player_progress__WEBPACK_IMPORTED_MODULE_6__["default"], _mixins_player_volume__WEBPACK_IMPORTED_MODULE_9__["default"], _mixins_player_youTube__WEBPACK_IMPORTED_MODULE_10__["default"], _mixins_billing_billing__WEBPACK_IMPORTED_MODULE_11__["default"]],
  components: {
    TV: _elements_single_items_TV__WEBPACK_IMPORTED_MODULE_1__["default"],
    FooterPlayerLayout: _FooterPlayerLayout__WEBPACK_IMPORTED_MODULE_2__["default"],
    PhonePlayerLayout: _PhonePlayerLayout__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.initPlayer();

              _this.startPlayer();

              _this.fetchCampaigns();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  data: function data() {
    return {
      hls: null,
      campaigns: [],
      audioPlayer: null,
      tracks_played: 0,
      streamPlayer: null,
      streamAudioElement: null,
      streamStats: null,
      downloadLoading: false,
      queue: [],
      audioStatus: null,
      playlistShownOnMobile: false,
      retryCount: 0,
      getUp: false,
      fullScreenPlayer: false,
      isLoading: true,
      canPlay: false,
      smallScreen: true,
      playbackRateDirection: "up",
      videoPlayer: null,
      videoStatus: null,
      volumeButton: "volume-medium",
      timeUpdater: null,
      metadataFetcher: null,
      playbackRate: 1,
      currentAudio: {
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
        isPlaying: false
      },
      buttons: {
        shuffle: false,
        loop: false
      }
    };
  },
  computed: {
    isPodcastEpisode: function isPodcastEpisode() {
      return Boolean(this.currentAudio.type === "episode");
    },
    isCurrentAudioAStream: function isCurrentAudioAStream() {
      return this.currentAudio.streamEndpoint;
    },
    isCurrentAudioAFileAudio: function isCurrentAudioAFileAudio() {
      return this.currentAudio.source_format === "file" || this.currentAudio.source_format === "audio_url";
    },
    isCurrentAudioAYoutubeVideo: function isCurrentAudioAYoutubeVideo() {
      return this.currentAudio.source_format === "yt_video";
    },
    isLiked: function isLiked() {
      var _this2 = this;

      return (this.$store.getters.getLikedSongs || []).some(function (x) {
        return x.id == _this2.currentAudio.id;
      });
    },
    isArtistFollowed: function isArtistFollowed() {
      var _this3 = this;

      return (this.$store.getters.getFollowedArtists || []).some(function (artist) {
        return artist.id === _this3.currentAudio.artist_id;
      });
    },
    isPurchasable: function isPurchasable() {
      return this.currentAudio.product && !this.isPurchased(this.currentAudio);
    },
    isOwned: function isOwned() {
      return this.currentAudio.artist && this.$store.getters.getUser && this.$store.getters.getUser.artist && this.currentAudio.artist.id === this.$store.getters.getUser.artist.id || this.currentAudio.product && this.isPurchased(this.currentAudio);
    },
    getPlayerStatus: function getPlayerStatus() {
      return this.$store.getters.getPlayerStatus;
    }
  },
  methods: {
    fetchCampaigns: function fetchCampaigns() {
      var _this4 = this;

      var user = this.$store.getters.getUser;

      var getCampaigns = function getCampaigns() {
        axios.get("/api/campaigns").then(function (res) {
          if (JSON.stringify(_this4.campaigns) !== JSON.stringify(res.data)) {
            _this4.campaigns = res.data;

            _this4.prepareCampaign(_this4.currentCampaignIndex);
          }
        });
      };

      if (user && user.id) {
        // this.playAdAfterXSongs = (this.isManager() && user.playAdAfterXSongs) ? user.playAdAfterXSongs :(
        //   user.managers && user.managers.length
        //     ? user.managers[0].playAdAfterXSongs
        //     : this.$store.getters.getSettings.playAdAfterXSongs );
        getCampaigns();
        setInterval(function () {
          getCampaigns();
        }, 60000);
      }
    },
    initPlayer: function initPlayer() {
      var _this5 = this;

      this.hls = new Hls(); // this.audioPlayer = new Audio();

      this.audioPlayer = document.getElementById("audio-player");
      this.volume = this.$store.getters.getSettings.playerVolume || 50;
      this.audioPlayer.preload = "metadata"; // attaching the events to their handlers

      this.initEventHandlers();
      setTimeout(function () {
        _this5.getUp = true;
      }, 100);
    },
    getRandomAudio: function getRandomAudio(length, index) {
      var randomAudio = Math.floor(Math.random() * length);
      if (randomAudio == index) return this.getRandomAudio(length, index);else return randomAudio;
    },
    addSongToPlaylist: function addSongToPlaylist(song_id) {
      if (this.$store.getters.getUser) {
        this.$store.commit("setAddSongToPlaylist", song_id);
      } else {
        this.loginOrCancel();
      }
    },
    startPlayer: function startPlayer() {
      if (this.playlist[0] !== this.queue[0]) {
        this.updateCurrentAudio(0, true);
      }

      this.queue = this.playlist;
    },
    purchase: function purchase() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this6.$store.getters.isLogged) {
                  _context2.next = 3;
                  break;
                }

                _context2.next = 3;
                return _helpers__WEBPACK_IMPORTED_MODULE_12__["default"].loginOrCancel();

              case 3:
                _this6.$store.commit("purchase/setSellingAsset", _this6.currentAudio);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  watch: {
    playbackRate: function playbackRate(val) {
      this.audioPlayer.playbackRate = val;
    },
    playlist: function playlist() {
      var _this7 = this;

      setTimeout(function () {
        _this7.startPlayer();
      }, 100);
    },
    audioStatus: function audioStatus(val) {
      if (this.$store.getters.getSettings.crossfade) {
        if (val === "starting") {
          this.easeVolumeRaise();
        } else if (val === "ending") {
          this.easeVolumeDrop();
        }
      }
    },
    getPlayerStatus: function getPlayerStatus(neu, old) {
      if (neu !== old && neu !== null) {
        this.playPause();
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.resetAudioElement();
    this.killStreamIfExists();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      showAddMenu: false,
      showPlaylist: false
    };
  },
  computed: {
    fullScreenPlayer: {
      get: function get() {
        return this.fullScreenPlayerProp;
      },
      set: function set() {
        this.$emit("fullScreenPlayer");
      }
    }
  },
  props: ["playlist", "currentAudio", "downloadLoading", "fullScreenPlayerProp", "getUp", "isLoading", "buttons", "volumebarInnerWidth", "playbackRate", "volumeButton", "isLiked", "isArtistFollowed", "isPodcastEpisode", "isCurrentAudioAStream", "volumeButton", "volume", "duration", "isPurchasable", "isOwned"]
});

/***/ }),

/***/ "./resources/js/mixins/player/eventHandlers.js":
/*!*****************************************************!*\
  !*** ./resources/js/mixins/player/eventHandlers.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    initEventHandlers: function initEventHandlers() {
      this.audioPlayer.onloadstart = this.onloadstart;
      this.audioPlayer.onerror = this.onerror;
      this.audioPlayer.onloadedmetadata = this.onloadmetadata;
      this.audioPlayer.oncanplay = this.oncanplay;
      this.audioPlayer.ontimeupdate = this.ontimeupdate;
      this.audioPlayer.onended = this.onended;
      this.audioPlayer.onwaiting = this.onwaiting;
      this.audioPlayer.oncanplaythrough = this.oncanplay;
    },
    onloadstart: function onloadstart() {
      this.isLoading = true;
    },
    onerror: function onerror() {
      if (!this.isRadioStation) {
        this.failedToPlay();
      }
    },
    onwaiting: function onwaiting() {
      this.isLoading = true;
    },
    onloadmetadata: function onloadmetadata() {
      // this.currentAudio.currentTime = "0:00";
      this.currentAudio.duration = this.audioPlayer.duration;
    },
    oncanplay: function oncanplay() {
      this.canPlay = true;
      this.isLoading = false;
    },
    ontimeupdate: function ontimeupdate() {
      // this.currentAudio.isPlaying = true
      this.updateTime(this.audioPlayer.currentTime, this.audioPlayer.duration);
    },
    onended: function onended() {
      var index;
      this.canPlay = false;
      this.tracks_played++;
      this.$store.commit("setCurrentlyPlayingTypeStatus", "pause");
      this.$store.commit("setPlayerStatus", null);
      this.currentAudio.isPlaying = false;

      if (this.$store.getters.getUser && this.$store.getters.getUser.id) {
        this.$store.dispatch("endPlay");
      }

      if (!this.buttons.loop) {
        if (this.buttons.shuffle && this.playlist.length > 1) {
          index = this.getRandomAudio(this.playlist.length, this.currentAudio.index);
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
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/mixins/player/playerActions.js":
/*!*****************************************************!*\
  !*** ./resources/js/mixins/player/playerActions.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    playPause: function playPause() {
      var _this = this;

      if (this.currentAudio.source_format === "yt_video") {
        if (!this.$store.getters.getSettings.allowVideos) {
          this.$notify({
            group: "foo",
            type: "warning",
            title: this.$t("Oops!"),
            text: this.$t("Sorry, you can not play YouTube videos.")
          });
        }

        if (this.videoStatus === 2 || this.videoPlayer.getCurrentTime() === 0 || this.videoStatus === 0) {
          this.videoPlayer.playVideo();
          this.$nextTick(function () {
            document.title = "\u25B6 " + _this.currentAudio.title + (_this.getMainArtist(_this.currentAudio) ? ' - ' + _this.getMainArtist(_this.currentAudio) : "");
          });
          this.$store.commit("setCurrentAudio", {
            id: this.currentAudio.id,
            type: this.currentAudio.type
          });
          this.$store.commit("setCurrentlyPlayingTypeStatus", 'play');
          this.currentAudio.isPlaying = true;

          if (this.videoPlayer.getCurrentTime() === 0) {
            this.$store.dispatch("registerPlay", {
              id: this.currentAudio.id,
              type: this.isPodcastEpisode ? "episode" : "song",
              label: this.currentAudio.title,
              artist_id: this.currentAudio.artist ? this.currentAudio.artist.id : '',
              duration: this.currentAudio.duration,
              origin: 'youtube'
            });
          }
        } else if (this.videoPlayer.getCurrentTime() > 0) {
          this.currentAudio.isPlaying = false;
          this.$store.commit("setCurrentlyPlayingTypeStatus", 'pause');
          this.$nextTick(function () {
            document.title = _this.currentAudio.title + (_this.getMainArtist(_this.currentAudio) ? ' - ' + _this.getMainArtist(_this.currentAudio) : "");
          });
          this.videoPlayer.pauseVideo();
        }
      } else if (this.currentAudio.source_format === "file") {
        if (this.audioPlayer.paused || this.audioPlayer.currentTime === 0) {
          var _int = setInterval(function () {
            if (_this.canPlay) {
              _this.audioPlayer.play();

              _this.$nextTick(function () {
                document.title = "\u25B6 " + _this.currentAudio.title + (_this.getMainArtist(_this.currentAudio) ? ' - ' + _this.getMainArtist(_this.currentAudio) : "");
              });

              _this.$store.commit("setCurrentAudio", {
                id: _this.currentAudio.id,
                type: _this.currentAudio.type
              });

              _this.$store.commit("setCurrentlyPlayingTypeStatus", 'play');

              _this.currentAudio.isPlaying = true;
              clearInterval(_int);
            }
          }, 200);

          if (this.audioPlayer.currentTime === 0) {
            this.$store.dispatch("registerPlay", {
              id: this.currentAudio.id,
              type: this.isPodcastEpisode ? "episode" : "song",
              label: this.currentAudio.title,
              artist_id: this.currentAudio.artist ? this.currentAudio.artist.id : '',
              duration: this.currentAudio.duration,
              origin: this.currentAudio.origin
            });
          }
        } else if (this.audioPlayer.currentTime > 0) {
          this.currentAudio.isPlaying = false;
          this.$store.commit("setCurrentAudio", null);
          this.$store.commit("setCurrentlyPlayingTypeStatus", 'pause');
          this.$nextTick(function () {
            document.title = _this.currentAudio.title + (_this.getMainArtist(_this.currentAudio) ? ' - ' + _this.getMainArtist(_this.currentAudio) : "");
          });
          this.audioPlayer.pause();
        }
      } else {
        // live stream
        if (this.streamPlayer) {
          if (this.streamPlayer.state == "stopped") {
            this.streamPlayer.play();
            this.$nextTick(function () {
              document.title = "\u25B6 " + _this.currentAudio.title;
            }); // current audio works of songs only

            this.$store.commit("setCurrentlyPlayingTypeStatus", 'play');
            this.$store.commit("setCurrentAudio", {
              id: this.currentAudio.id,
              type: this.currentAudio.type
            });
            this.currentAudio.isPlaying = true;

            if (this.audioPlayer.currentTime === 0) {
              this.$store.dispatch("registerPlay", {
                id: this.currentAudio.id,
                type: "radio-sation",
                label: this.currentAudio.title
              });
            }
          } else {
            this.currentAudio.isPlaying = false; // this.$store.commit("setCurrentAudio", null);

            this.$store.commit("setCurrentlyPlayingTypeStatus", 'pause');
            this.$nextTick(function () {
              document.title = _this.currentAudio.title;
            });
            this.streamPlayer.stop();
          }
        } else {
          if (this.audioPlayer.paused || this.audioPlayer.currentTime === 0) {
            this.audioPlayer.play();
            this.currentAudio.isPlaying = true;
            this.$nextTick(function () {
              document.title = "\u25B6 " + _this.currentAudio.title;
            });
            this.$store.commit("setCurrentAudio", {
              id: this.currentAudio.id,
              type: this.currentAudio.type
            });
            this.$store.commit("setCurrentlyPlayingTypeStatus", 'play');

            if (this.audioPlayer.currentTime === 0) {
              this.$store.dispatch("registerPlay", {
                id: this.currentAudio.id,
                type: "radio-sation",
                label: this.currentAudio.title
              });
            }
          } else if (this.audioPlayer.currentTime > 0) {
            this.currentAudio.isPlaying = false; // emitAnalyticsTime({
            //     name: 'stream_time',
            //     value: this.audioPlayer.currentTime,
            //     event_category: 'Radio Station - ' + this.currentAudio.title
            // })

            this.$store.commit("setCurrentAudio", null);
            this.$store.commit("setCurrentlyPlayingTypeStatus", 'pause');
            this.$nextTick(function () {
              document.title = _this.currentAudio.title;
            });
            this.audioPlayer.pause();
          }
        }
      }
    },
    rewindAudio: function rewindAudio(seconds) {
      this.audioPlayer.currentTime = this.audioPlayer.currentTime + seconds;

      if (this.currentAudio.source_format === "yt_video") {
        this.videoPlayer.seekTo(this.audioPlayer.currentTime);
      }
    },
    loopAudio: function loopAudio() {
      this.buttons.shuffle = false;
      this.buttons.loop = !this.buttons.loop;
    },
    shuffleAudio: function shuffleAudio() {
      this.buttons.loop = false;
      this.buttons.shuffle = !this.buttons.shuffle;
    },
    goNext: function goNext() {
      var index;
      this.tracks_played++;

      if (this.currentAudio.index == this.playlist.length - 1) {
        index = 0;
      } else {
        index = this.currentAudio.index + 1;
      }

      this.updateCurrentAudio(index, true);
    },
    goPrevious: function goPrevious() {
      var index;

      if (this.currentAudio.index == 0) {
        index = this.playlist.length - 1;
      } else {
        index = this.currentAudio.index - 1;
      }

      this.updateCurrentAudio(index, true);
    },
    switchScreenToSmall: function switchScreenToSmall() {
      this.smallScreen = true;
    },
    switchScreenToLarge: function switchScreenToLarge() {
      this.smallScreen = false;
    },
    like: function like(song) {
      if (this.isLiked) {
        this.$store.dispatch("dislike", song);
      } else {
        this.$store.dispatch("like", song);
      }
    },
    downloadAudio: function downloadAudio() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.downloadLoading = true;
                _context.prev = 1;
                _context.next = 4;
                return _this2.$store.dispatch("downloadAudio", {
                  id: _this2.currentAudio.id,
                  type: _this2.isPodcastEpisode ? "episode" : "song",
                  file_name: _this2.currentAudio.file_name
                });

              case 4:
                _context.next = 8;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](1);

              case 8:
                _this2.downloadLoading = false;

                if (_this2.$store.getters.getSettings.ga4 && _this2.$store.getters.getSettings.analytics_download_event) {
                  emitAnalyticsEvent({
                    action: 'file_download',
                    category: _this2.isPodcastEpisode ? "episode" : "song",
                    label: _this2.currentAudio.file_name
                  });
                }

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 6]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/mixins/player/progress.js":
/*!************************************************!*\
  !*** ./resources/js/mixins/player/progress.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    updateProgress: function updateProgress(event) {
      var progressBar = document.getElementById("progress-bar");

      if (this.isCurrentAudioAFileAudio) {
        var currentAudioDurationInSeconds = this.audioPlayer.duration;
        var currentTimeInSeconds = event.offsetX * currentAudioDurationInSeconds / progressBar.offsetWidth;
        this.audioPlayer.currentTime = currentTimeInSeconds;
      } else {
        var currentAudioDurationInSeconds = this.videoPlayer.getDuration();
        var currentTimeInSeconds = event.offsetX * currentAudioDurationInSeconds / progressBar.offsetWidth;
        this.videoPlayer.seekTo(currentTimeInSeconds);
      }
    },
    getDurationInHHMMSS: function getDurationInHHMMSS(duration) {
      if (isNaN(duration)) {
        return "-:--";
      }

      function addZeroBeforeSingleChar(i) {
        if (i < 10) {
          i = "0" + i;
        }

        return i;
      }

      var h = Math.floor(duration / 3600);
      duration %= 3600;
      var m = Math.floor(duration / 60);
      var s = Math.floor(duration % 60); // add a zero in front of numbers<10

      h = addZeroBeforeSingleChar(h);
      m = addZeroBeforeSingleChar(m);
      s = addZeroBeforeSingleChar(s);
      return (h !== "00" ? h + ":" : "") + m + ":" + s; // if( duration !== '-:--' ) {
      //     return this.moment(duration * 1000).format('mm:ss')
      // }
    },
    getTimeFormat: function getTimeFormat(secs) {
      var minutes = Math.floor(secs / 60);
      var seconds = secs % 60;
      return minutes + ":" + (Math.floor(seconds / 10) > 0 ? seconds : "0" + seconds);
    },
    adjustPlayspeed: function adjustPlayspeed() {
      this.playbackRateDirection == "up" ? this.playbackRate += 0.25 : this.playbackRate -= 0.25;

      if (this.playbackRate == 2) {
        this.playbackRateDirection = "down";
      } else if (this.playbackRate == 0.25) {
        this.playbackRateDirection = "up";
      }

      if (this.currentAudio.source_format === "yt_video") {
        this.videoPlayer.setPlaybackRate(this.playbackRate);
      }
    },
    updateProgressOnPhone: function updateProgressOnPhone(event) {
      var progressBar = document.getElementById("progress-bar_phone_layout");

      if (this.isCurrentAudioAFileAudio) {
        var seconds = event.offsetX * this.audioPlayer.duration / progressBar.offsetWidth;
        this.audioPlayer.currentTime = seconds;
      } else {
        var _seconds = event.offsetX * this.videoPlayer.getDuration() / progressBar.offsetWidth;

        this.videoPlayer.seekTo(_seconds);
      }
    },
    resetTime: function resetTime() {
      this.currentAudio.progress = 0;
      this.currentAudio.currentTime = this.currentAudio.currentTime;
    }
  }
});

/***/ }),

/***/ "./resources/js/mixins/player/stream.js":
/*!**********************************************!*\
  !*** ./resources/js/mixins/player/stream.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var icecast_metadata_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! icecast-metadata-player */ "./node_modules/icecast-metadata-player/src/IcecastMetadataPlayer.js");
/* harmony import */ var icecast_metadata_stats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! icecast-metadata-stats */ "./node_modules/icecast-metadata-stats/src/IcecastMetadataStats.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    afterPrepareForStream: function afterPrepareForStream(index) {
      var audio = this.playlist[index];
      this.currentAudio.title = audio.name;
      this.resetAudioElement();
    },
    playStream: function playStream() {
      this.afterPrepareForStream(this.currentAudio.index);
      this.initStreamPlayer(this.currentAudio);
    },
    killStreamIfExists: function killStreamIfExists() {
      this.streamAudioElement = null;

      if (this.streamPlayer) {
        this.streamPlayer.stop();
        this.streamPlayer.detachAudioElement();
        this.streamStats.stop();
        this.streamPlayer = null;
        this.streamStats = null;
      }
    },
    failedToPlay: function failedToPlay() {
      this.$notify({
        group: "foo",
        type: "warning",
        title: this.$t("Error"),
        text: this.$t("Failed to load the audio source")
      });

      if (this.queue.length > 1) {
        this.goNext();
      } else {
        this.$store.state.queue = []; // kill the stream

        this.killStreamIfExists();
      }
    },
    updateMetaData: function updateMetaData(source, stats) {
      if (source === "server") {
        this.currentAudio.title = stats.title;
        this.currentAudio.artist = stats.artist;
      } else {
        if (stats) {
          if (stats.icestats && stats.icestats.source && stats.icestats.source.title) {
            this.currentAudio.title = stats.icestats.source.title || this.currentAudio.name;
          } else if (stats.icy) {
            this.currentAudio.title = stats.icy.StreamTitle || this.currentAudio.name;
          } else if (stats.ogg) {
            if (stats.ogg.TITLE) {
              this.currentAudio.title = stats.ogg.TITLE || this.currentAudio.name;
            }

            if (stats.ogg.ARTIST) {
              this.currentAudio.artist = stats.ogg.ARTIST;
            }
          }

          document.title = "\u25B6 " + this.currentAudio.title;
        }
      }
    },
    getMetaDataUsingProxy: function getMetaDataUsingProxy(stationID) {
      var _this = this;

      axios.get("/api/get-stream-metadata-pr/" + stationID).then(function (res) {
        _this.updateMetaData("proxy", res.data);
      })["catch"](function () {
        return {};
      });
    },
    getMetaDataFromServer: function getMetaDataFromServer(stationID) {
      var _this2 = this;

      axios.get("/api/get-stream-metadata-sr/" + stationID, {}).then(function (res) {
        _this2.updateMetaData("server", res.data);
      })["catch"](function () {
        return {};
      });
    },
    startFetchMetadata: function startFetchMetadata(station) {
      if (station.statsSource === "endpoint") {
        this.metadataFetcher = setInterval(function x() {
          this.getMetaDataUsingProxy(station.id);
        }.bind(this), station.interval || 5000);
      } else {
        this.metadataFetcher = setInterval(function x() {
          this.getMetaDataFromServer(station.id);
        }.bind(this), station.interval || 5000);
      }
    },
    initStreamPlayer: function initStreamPlayer(station) {
      var _this3 = this;

      if (station.statsSource === "endpoint" && !station.proxy) {
        this.canPlay = true;
        this.isLoading = true;
        var timeInterval = 0;
        this.streamStats = new icecast_metadata_stats__WEBPACK_IMPORTED_MODULE_1__["default"](station.streamEndpoint, {
          sources: ["icestats", "ogg", "icy"],
          interval: 10,
          onStats: function onStats(stats) {
            _this3.updateMetaData("client", stats);
          }
        }); // creating new audio Element just for the volume since attaching the
        // audioPlayer causes bugs

        var volume = this.volume;
        this.streamAudioElement = new Audio();
        this.volume = volume;
        this.streamPlayer = new icecast_metadata_player__WEBPACK_IMPORTED_MODULE_0__["default"](station.statsEndpoint, {
          metadataTypes: station.metadata_types,
          audioElement: this.streamAudioElement,
          onRetry: function onRetry() {
            _this3.retryCount++;

            if (_this3.retryCount > 10) {
              _this3.failedToPlay();
            }
          },
          onPlay: function onPlay() {
            _this3.interval = setInterval(function () {
              timeInterval++;
              _this3.currentAudio.currentTime = _this3.getTimeFormat(timeInterval.toFixed(0));
            }, 1000);
            _this3.currentAudio.isStopped = false;
            _this3.currentAudio.isPlaying = true;
          },
          onStreamStart: function onStreamStart() {
            _this3.isLoading = false;
          },
          onLoading: function onLoading() {
            _this3.isLoading = true;
          },
          onStop: function onStop() {
            clearInterval(_this3.interval);
            _this3.currentAudio.isStopped = true;

            if (_this3.audioPlayer.paused) {
              _this3.currentAudio.isPlaying = false;
            }
          }
        });
        this.streamStats.start();
        this.streamPlayer.play();
      } else {
        this.startFetchMetadata(station);
        console.log(this.currentAudio.streamEndpoint);
        this.updateAudioElement(false, this.currentAudio.streamEndpoint).then(function () {
          _this3.playPause();
        });
      }

      this.$store.commit("setCurrentAudio", {
        id: this.currentAudio.id,
        type: this.currentAudio.type
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/mixins/player/update.js":
/*!**********************************************!*\
  !*** ./resources/js/mixins/player/update.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    updateCurrentAudio: function updateCurrentAudio(index, force) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var campaignsToPlay;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.isLoading = true;

                _this.reset();

                if (!(_this.campaigns.length && _this.tracks_played > 0 && !_this.$store.getters.getAdPlayed)) {
                  _context.next = 6;
                  break;
                }

                campaignsToPlay = _this.campaigns.filter(function (campaign) {
                  return campaign.playAfterXSongs == 1 || _this.tracks_played % campaign.playAfterXSongs == 0;
                }).splice(0, 1);

                if (!campaignsToPlay.length) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", _this.playCampaign(campaignsToPlay, 0, index, force));

              case 6:
                _context.next = 8;
                return _this.prepare(index);

              case 8:
                if (_this.$store.getters.getSettings.autoPlay && _this.$store.getters.getQueue.length < 2) {
                  _this.fetchSimilarities(index);
                }

                if (_this.$store.getters.getUser) {
                  _this.updateUserPlay(index);
                }

                if (!_this.isCurrentAudioAStream) {// await this.afterPrepareForNonStream(index);
                } else {
                  _this.afterPrepareForStream(index);
                }

                if (_this.isCurrentAudioAYoutubeVideo) {
                  _this.playYoutubeVideo(index, force);
                } else if (_this.isCurrentAudioAFileAudio) {
                  _this.playAudioFile(index, force);
                } else if (_this.isCurrentAudioAStream) {
                  _this.playStream(index, force);
                }

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    playCampaign: function playCampaign(campaigns, campaignIndex, trackIndex, force) {
      // if (this.campaigns[this.currentCampaignIndex]) {
      // this.switchToCampaignChannel();
      this.$store.commit("setCurrentCampaign", campaigns[campaignIndex]);
      var isThereANextCampagin = campaignIndex !== campaigns.length - 1;
      var nextCampaignIndex = campaignIndex + 1;
      this.audioPlayer.src = this.$store.getters.getCurrentCampaign.file;

      if (!isThereANextCampagin) {
        this.$store.commit("setAdPlayed", true);
      } // else {
      //     var audio = new Audio();
      //     audio.src = campaigns[nextCampaignIndex].file
      //     audio.load()
      // }


      this.$set(this.currentAudio, "title", this.$store.getters.getCurrentCampaign.name);

      if (this.$store.getters.getCurrentCampaign.banner && this.$store.getters.getCurrentCampaign.banner.length) {
        this.$set(this.currentAudio, "cover", this.$store.getters.getCurrentCampaign.banner);
      } else {
        this.$set(this.currentAudio, "cover", "");
      }

      this.$set(this.currentAudio, "campaign", true);
      this.audioPlayer.play();

      this.audioPlayer.onended = function () {
        this.$store.commit("setCurrentCampaign", null); // move to the next campaign

        if (isThereANextCampagin) {
          this.prepareCampaign(nextCampaignIndex);
          this.playCampaign(campaigns, nextCampaignIndex, trackIndex, force);
        } else {
          // this.switchToMusicChannel();
          this.updateCurrentAudio(trackIndex, force);
        }
      }.bind(this); // } 
      // else {
      //     this.$store.commit("setAdPlayed", true);
      //     this.updateCampaignIndex(0);
      //     this.updateCurrentAudio(trackIndex, force);
      // }

    },
    updateUserPlay: function updateUserPlay(index) {
      if (this.isCurrentAudioAStream) {
        var obj = {
          playlist: null,
          index: null,
          genre_id: null,
          radio: JSON.stringify(this.currentAudio)
        };
      } else {
        var obj = {
          playlist: JSON.stringify(this.playlist.map(function (track) {
            return track.id;
          })),
          index: index,
          genre_id: this.$store.getters.getCurrentlyPlayingType && this.$store.getters.getCurrentlyPlayingType.type === "genre" && this.$store.getters.getCurrentlyPlayingType.id ? this.$store.getters.getCurrentlyPlayingType.id : null
        };
      }

      axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/user/playing", obj);
    },
    prepareCampaign: function prepareCampaign(index) {// this.channels[2].player.src = this.campaigns[index].file;
      // this.channels[2].player.load();
    },
    updateCampaignIndex: function updateCampaignIndex(index) {
      this.currentCampaignIndex = index;
    },
    reset: function reset() {
      clearInterval(this.timeUpdater);
      clearInterval(this.metadataFetcher);
      this.initCurrentAudioObj();
      this.resetBasicValues();
      this.resetAudioElement();
      this.resetTime();
      this.killStreamIfExists(); // this.initCurrentAudioObj();
      // stop the video if it is mounted

      if (this.videoPlayer && this.videoPlayer.stopVideo) {
        this.videoPlayer.stopVideo();
      }
    },
    playAudioFile: function playAudioFile(index, force) {
      this.updateAudioElement(this.currentAudio.hls ? true : false, this.currentAudio.source);

      if (this.currentAudio.index !== 0 || force || this.buttons.shuffle) {
        this.playPause();
      }
    },
    // async afterPrepareForNonStream(index) {
    //     var audio = this.playlist[index];
    //     if( !audio.source ) {
    //         await this.getYoutubeVideoIfExists(audio.title);
    //         return;
    //     }
    //     return
    // },
    prepare: function prepare(index) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var audio, res, title, artist;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                audio = _this2.playlist[index];
                _this2.currentAudio.index = index; // updating the currentAudio with the new audio values

                Object.keys(audio).forEach(function (key) {
                  _this2.$set(_this2.currentAudio, key, audio[key]);
                });

                if (!(audio.type === "podcast" && audio.origin === "listenNotes")) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 6;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/podcast/" + audio.id);

              case 6:
                res = _context2.sent;
                audio = res.data;
                _context2.next = 19;
                break;

              case 10:
                if (!(!_this2.isCurrentAudioAStream && !_this2.currentAudio.source)) {
                  _context2.next = 18;
                  break;
                }

                title = _this2.currentAudio.title;
                artist = _this2.currentAudio.artists.length ? _this2.currentAudio.artists[0].name ? _this2.currentAudio.artists[0].name : _this2.currentAudio.artists[0].displayname : '';
                _context2.next = 15;
                return _this2.getYoutubeVideoIfExists(title, artist);

              case 15:
                _this2.currentAudio.source = _context2.sent;
                _context2.next = 19;
                break;

              case 18:
                if (_this2.isCurrentAudioAStream) {
                  _this2.currentAudio.source = _this2.currentAudio.streamEndpoint;
                }

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    initCurrentAudioObj: function initCurrentAudioObj() {
      this.currentAudio = {
        src: null,
        title: "",
        album: "",
        artist: "",
        progress: 0,
        duration: "-:--",
        currentTime: "0:00",
        streamEndpoint: null,
        videoCurrentTime: 0,
        isPlaying: false
      };
    },
    updateAudioElement: function updateAudioElement(hls, source) {
      var _this3 = this;

      this.canPlay = false;
      this.audioPlayer = document.getElementById("audio-player");
      this.initEventHandlers();
      return new Promise(function (res, rej) {
        if (hls && Hls.isSupported()) {
          _this3.initHLS(source + '?hls=true');

          _this3.hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
            this.canPlay = true;
            res();
          }.bind(_this3));
        } else {
          _this3.detachHLS().then(function () {
            _this3.audioPlayer.crossOrigin = "anonymous";
            _this3.audioPlayer.src = source;

            _this3.audioPlayer.load();

            console.log(_this3.audioPlayer.crossOrigin);
            console.log(source);
            res();
          });
        }
      }); // this.audioPlayer.crossOrigin = "anonymous";
      // this.audioPlayer.src = source;
      // this.hls.attachMedia(this.audioPlayer)
    },
    resetAudioElement: function resetAudioElement() {
      this.audioPlayer.pause();
    },
    resetBasicValues: function resetBasicValues() {
      // resetting basic keys
      this.currentAudio.isPlaying = false;
      this.currentAudio.duration = "-:--";
      this.currentAudio.source_format = null;
      this.currentAudio.file_name = null;
      this.currentAudio.source = null;
      this.currentAudio.progress = 0;
      this.currentAudio.currentTime = "0:00";
    },
    updateTime: function updateTime(currentTime, duration) {
      // updating the bar progress
      if (!this.isCurrentAudioAStream) {
        if (this.audioPlayer.duration === Infinity && !this.isCurrentAudioAYoutubeVideo) {
          this.currentAudio.duration = "live";
          this.currentAudio.progress = 100;
        } else if (currentTime < duration || currentTime == 0) {
          this.currentAudio.progress = currentTime / duration * 100;
        } else {
          this.currentAudio.progress = 0;
        }

        if (!isNaN(currentTime) && !isNaN(duration) && duration - currentTime <= 5) {
          this.audioStatus = "ending";
        } else if (!isNaN(currentTime) && !isNaN(duration) && currentTime >= 0 && currentTime <= 5) {
          this.audioStatus = "starting";
        } else {
          this.audioStatus = null;
        }

        if (this.currentAudio.isProduct && this.currentAudio.playSample && !this.isOwned) {
          // show purchase dialog after sample
          if (parseInt(this.audioPlayer.currentTime) > this.currentAudio.sampleSeconds) {
            this.audioPlayer.pause();
            this.$store.commit("updateQueue", []);
            this.$store.commit("setCurrentlyPlayingType", {
              type: "",
              id: null
            });
            this.$store.commit("purchase/setSellingAsset", this.currentAudio);
          }
        } // crossfade


        if (!isNaN(currentTime) && !isNaN(duration) && duration - currentTime <= this.currentAudio.sampleSeconds) {
          this.audioStatus = "ending";
        } else if (!isNaN(currentTime) && !isNaN(duration) && currentTime >= 0 && currentTime <= this.currentAudio.sampleSeconds) {
          this.audioStatus = "starting";
        } else {
          this.audioStatus = null;
        }
      } // updating the current time "xx:yy"


      this.$set(this.currentAudio, 'currentTime', this.getTimeFormat(currentTime.toFixed(0)));
    },
    easeVolumeRaise: function easeVolumeRaise() {
      var _this4 = this;

      var initVolume = this.volume;
      var dropDownVolume = setInterval(function () {
        _this4.volume = _this4.volume + _this4.volume / 20;

        if (_this4.volume >= initVolume) {
          clearInterval(dropDownVolume);
        }
      }, 250);
    },
    easeVolumeDrop: function easeVolumeDrop() {
      var _this5 = this;

      var initVolume = this.volume;
      this.volume = 0;
      var dropDownVolume = setInterval(function () {
        _this5.volume = _this5.volume - _this5.volume / 20;

        if (_this5.volume <= initVolume) {
          clearInterval(dropDownVolume);
        }
      }, 250);
    },
    getYoutubeVideoIfExists: function getYoutubeVideoIfExists(title, artist) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/track-source?title=' + title + '&artist=' + artist);

              case 3:
                res = _context3.sent;
                return _context3.abrupt("return", res.data);

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", null);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }))();
    },
    fetchSimilarities: function fetchSimilarities(index) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var audio;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                audio = _this6.playlist[index];
                axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/next-songs?id=' + audio.id + "&origin=" + audio.origin).then(function (res) {
                  if (res.data.length) {
                    _this6.$store.dispatch('updateQueue', {
                      content: res.data,
                      reset: false
                    });
                  }
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    initHLS: function initHLS(source) {
      if (this.hls) {
        this.hls.destroy();
      }

      this.hls = new Hls();

      if (source) {
        this.hls.loadSource(source);
      }

      this.hls.attachMedia(this.audioPlayer);
    },
    detachHLS: function detachHLS() {
      return new Promise(function (res, rej) {
        // if (Hls.isSupported() && this.hls && this.hls.media) {
        //     // this.hls.detachMedia();
        //     // this.hls.on(Hls.Events.MEDIA_DETACHED, function() {
        //     //     return res()  
        //     // });
        // } else {
        res(); // }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/mixins/player/volume.js":
/*!**********************************************!*\
  !*** ./resources/js/mixins/player/volume.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: {
    volume: {
      set: function set(val) {
        if (this.streamAudioElement) {
          this.streamAudioElement.volume = val / 100;
        } else if (this.videoPlayer && this.isCurrentAudioAYoutubeVideo) {
          this.videoPlayer.setVolume(val);
        } else {
          this.audioPlayer.volume = val / 100;
        }
      },
      get: function get() {
        if (this.streamAudioElement) {
          return Math.round(this.streamAudioElement.volume * 100);
        } else if (this.videoPlayer && this.videoPlayer.getVolume) {
          return this.videoPlayer.getVolume() || 70;
        } else {
          return Math.round(this.audioPlayer.volume * 100);
        }
      }
    }
  },
  methods: {
    muteAudio: function muteAudio() {
      if (this.audioPlayer.muted) {
        this.audioPlayer.muted = false;
        this.volumeButton = "volume-high";
      } else {
        this.audioPlayer.muted = true;
        this.volumeButton = "volume-off";
      }

      if (this.streamAudioElement) {
        if (this.streamAudioElement.muted) {
          this.streamAudioElement.muted = false;
          this.volumeButton = "volume-high";
        } else {
          this.volumeButton = "volume-off";
          this.streamAudioElement.muted = true;
        }
      }

      if (this.isCurrentAudioAYoutubeVideo) {
        if (!this.videoPlayer.isMuted()) {
          this.videoPlayer.mute();
          this.volumeButton = "volume-off";
        } else {
          this.volumeButton = "volume-high";
          this.videoPlayer.unMute();
        }
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/mixins/player/youTube.js":
/*!***********************************************!*\
  !*** ./resources/js/mixins/player/youTube.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    playYoutubeVideo: function playYoutubeVideo(index, force) {
      if (this.$store.getters.getSettings.allowVideos) {
        if (this.currentAudio.index !== 0 || force || this.buttons.shuffle) {
          this.setVideo(this.currentAudio.source, this.videoReadyCallback, this.videoStatusChangeCallback);
        }
      } else {
        // Sorry, can't play this song
        this.$notify({
          group: "foo",
          type: "warning",
          title: this.$t("Oops!"),
          text: this.$t("Sorry, you can not play YouTube videos.")
        });
      }
    },
    setVideo: function setVideo(youtube_id, readyCallback, stateChangedCallback) {
      var _this = this;

      if (!this.videoPlayer) {
        this.$nextTick(function () {
          _this.videoPlayer = new YT.Player("youtube_video_container", {
            width: "500",
            height: "305",
            videoId: youtube_id,
            events: {
              onReady: readyCallback,
              onStateChange: stateChangedCallback
            }
          });
        });
      } else {
        this.videoPlayer.loadVideoById(youtube_id, 0);
      }

      this.$store.commit("setCurrentAudio", this.currentAudio);
    },
    videoStatusChangeCallback: function videoStatusChangeCallback(event) {
      this.videoStatus = event.data;
    },
    videoReadyCallback: function videoReadyCallback(event) {
      this.currentAudio.duration = event.target.getDuration(); // update volume

      this.videoPlayer.setVolume(this.volume);
      this.isLoading = false;
      this.playPause();
    }
  },
  watch: {
    videoStatus: function videoStatus(val) {
      switch (val) {
        case -1:
          if (this.currentAudio.source_format === "yt_video") {
            this.isLoading = false;
          }

          break;

        case 0:
          this.onended();
          break;

        case 1:
          this.currentAudio.duration = this.videoPlayer.getDuration();
          this.isLoading = false;
          this.currentAudio.isPlaying = true;
          var self = this;

          var updateTime = function updateTime() {
            var oldTime = self.currentAudio.videoCurrentTime;

            if (self.videoPlayer && self.videoPlayer.getCurrentTime) {
              self.currentAudio.videoCurrentTime = self.videoPlayer.getCurrentTime();
            }

            if (self.currentAudio.videoCurrentTime !== oldTime) {
              self.updateTime(self.currentAudio.videoCurrentTime, self.videoPlayer.getDuration());
            }
          };

          this.timeUpdater = setInterval(updateTime, 100);
          break;

        case 2:
          clearInterval(this.timeUpdater);
          this.currentAudio.isPlaying = false;
          break;

        case 3:
          this.isLoading = true;
          break;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/buffer/node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = __webpack_require__.g.TYPED_ARRAY_SUPPORT !== undefined
  ? __webpack_require__.g.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}


/***/ }),

/***/ "./node_modules/buffer/node_modules/isarray/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/buffer/node_modules/isarray/index.js ***!
  \***********************************************************/
/***/ ((module) => {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/icecast-metadata-js/browser.js":
/*!*****************************************************!*\
  !*** ./node_modules/icecast-metadata-js/browser.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IcecastMetadataQueue": () => (/* reexport default from dynamic */ _src_IcecastMetadataQueue__WEBPACK_IMPORTED_MODULE_0___default.a),
/* harmony export */   "IcecastMetadataReader": () => (/* reexport default from dynamic */ _src_IcecastMetadataReader__WEBPACK_IMPORTED_MODULE_1___default.a),
/* harmony export */   "IcecastReadableStream": () => (/* reexport safe */ _src_IcecastReadableStream__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _src_IcecastMetadataQueue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/IcecastMetadataQueue */ "./node_modules/icecast-metadata-js/src/IcecastMetadataQueue.js");
/* harmony import */ var _src_IcecastMetadataQueue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_IcecastMetadataQueue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_IcecastMetadataReader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/IcecastMetadataReader */ "./node_modules/icecast-metadata-js/src/IcecastMetadataReader.js");
/* harmony import */ var _src_IcecastMetadataReader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_IcecastMetadataReader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_IcecastReadableStream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/IcecastReadableStream */ "./node_modules/icecast-metadata-js/src/IcecastReadableStream.js");







/***/ }),

/***/ "./node_modules/icecast-metadata-js/src/IcecastMetadataQueue.js":
/*!**********************************************************************!*\
  !*** ./node_modules/icecast-metadata-js/src/IcecastMetadataQueue.js ***!
  \**********************************************************************/
/***/ ((module) => {

/* Copyright 2020-2021 Ethan Halsall
    This file is part of icecast-metadata-js.

    icecast-metadata-js free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    icecast-metadata-js distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/

const noOp = () => {};

class IcecastMetadataQueue {
  /**
   * @description Schedules updates up to the millisecond for Icecast Metadata from the response body of an Icecast stream mountpoint
   * @description The accuracy of metadata updates is a direct relationship of the icyMetaInt
   * @param {Object} IcecastMetadataQueue constructor parameter
   * @param {number} [IcecastMetadataQueue.icyBr] Bitrate of audio stream used to increase accuracy when to updating metadata
   * @param {onMetadataUpdate} [IcecastMetadataQueue.onMetadataUpdate] Callback executed when metadata is scheduled to update
   * @param {onMetadataEnqueue} [IcecastMetadataQueue.onMetadataEnqueue] Callback executed when metadata is enqueued
   *
   * @callback onMetadataUpdate
   * @param {Object} metadata Object containing all metadata received.
   * @param {string} [metadata.StreamTitle] Title of the metadata update.
   * @param {string} [metadata.StreamUrl] Url (usually album art) of the metadata update.
   * @param {number} timestampOffset Total time buffered when the metadata was added
   * @param {number} timestamp Current time of the audio player when the metadata was added
   *
   * @callback onMetadataEnqueue
   * @param {Object} metadata Object containing all metadata received.
   * @param {string} [metadata.StreamTitle] Title of the metadata update.
   * @param {string} [metadata.StreamUrl] Url (usually album art) of the metadata update.
   * @param {number} timestampOffset Total time buffered when the metadata was added
   * @param {number} timestamp Current time of the audio player when the metadata was added
   *
   */
  constructor({ icyBr, onMetadataUpdate = noOp, onMetadataEnqueue = noOp }) {
    this._icyBr = icyBr;
    this._onMetadataUpdate = onMetadataUpdate;
    this._onMetadataEnqueue = onMetadataEnqueue;
    this._isInitialMetadata = true;
    this._metadataQueue = [];
  }

  /**
   * @description Returns the metadata queued for updates
   * @type {{metadata: string, time: number}[]} Queued metadata
   */
  get metadataQueue() {
    return this._metadataQueue.map(({ _timeoutId, ...rest }) => rest);
  }

  /**
   *
   * @param {object} metadata Metadata object returned from IcecastMetadataReader
   * @param {number} timestampOffset Total buffered audio in seconds
   * @param {number} [timestamp] Current time in the audio player
   */
  addMetadata({ metadata, stats }, timestampOffset, timestamp = 0) {
    /**
     * Metadata time is derived from the total number of stream bytes read
     * since the latest buffer input. The buffer offset should be the total
     * seconds of audio in the player buffer when the metadata was read.
     */
    this._enqueueMetadata(
      metadata,
      timestampOffset,
      timestamp + this.getTimeByBytes(stats.currentStreamPosition)
    );
  }

  /**
   * @description Calculates audio stream length based on bitrate
   * @param {number} bytesRead Number of bytes
   * @type {number} Seconds
   */
  getTimeByBytes(bytesRead) {
    return this._icyBr ? bytesRead / (this._icyBr * 125) : 0;
  }

  /**
   * @description Clears all metadata updates and empties the queue
   */
  purgeMetadataQueue() {
    this._metadataQueue.forEach((i) => clearTimeout(i._timeoutId));
    this._metadataQueue = [];
  }

  _enqueueMetadata(metadata, timestampOffset, timestamp) {
    const metadataPayload = {
      metadata,
      timestampOffset,
      timestamp,
    };

    this._metadataQueue.push(metadataPayload);
    this._onMetadataEnqueue(metadata, timestampOffset, timestamp);

    if (this._isInitialMetadata) {
      this._dequeueMetadata();
      this._isInitialMetadata = false;
    } else {
      metadataPayload._timeoutId = setTimeout(() => {
        this._dequeueMetadata();
      }, (timestampOffset - timestamp) * 1000); // trigger timeout relative to play position
    }
  }

  _dequeueMetadata() {
    const { metadata, timestampOffset, timestamp } =
      this._metadataQueue.shift();
    this._onMetadataUpdate(metadata, timestampOffset, timestamp);
  }
}

module.exports = IcecastMetadataQueue;


/***/ }),

/***/ "./node_modules/icecast-metadata-js/src/IcecastMetadataReader.js":
/*!***********************************************************************!*\
  !*** ./node_modules/icecast-metadata-js/src/IcecastMetadataReader.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* Copyright 2020-2021 Ethan Halsall
    This file is part of icecast-metadata-js.

    icecast-metadata-js free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    icecast-metadata-js distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/

const MetadataParser = __webpack_require__(/*! ./MetadataParser/MetadataParser */ "./node_modules/icecast-metadata-js/src/MetadataParser/MetadataParser.js");
const IcyMetadataParser = __webpack_require__(/*! ./MetadataParser/IcyMetadataParser */ "./node_modules/icecast-metadata-js/src/MetadataParser/IcyMetadataParser.js");
const OggMetadataParser = __webpack_require__(/*! ./MetadataParser/OggMetadataParser */ "./node_modules/icecast-metadata-js/src/MetadataParser/OggMetadataParser.js");
const DualMetadataParser = __webpack_require__(/*! ./MetadataParser/DualMetadataParser */ "./node_modules/icecast-metadata-js/src/MetadataParser/DualMetadataParser.js");

class IcecastMetadataReader {
  /**
   * @description Splits Icecast raw response into stream bytes and metadata key / value pairs.
   * @param {number} IcecastMetadataReader.icyMetaInt Interval in bytes of metadata updates returned by the Icecast server
   * @param {number} IcecastMetadataReader.icyCharacterEncoding Character encoding to use for ICY metadata (defaults to "utf-8")
   * @param {number} IcecastMetadataReader.icyDetectionTimeout Duration in milliseconds to search for metadata if icyMetaInt isn't passed in
   * @param {Array} IcecastMetadataReader.metadataTypes Types of metadata to capture: "icy" and/or "ogg"
   *
   * @callback onMetadata
   * @param {object} value Object containing Metadata and Statistics
   * @param {object} metadata Object containing the metadata received.
   * @param {string} [metadata.StreamTitle] (ICY) Title of the metadata update.
   * @param {string} [metadata.StreamUrl] (ICY) Url (usually album art) of the metadata update.
   * @param {string} [metadata.TITLE] (OGG) Url Title of the metadata update.
   * @param {object} stats Object containing statistics on how many bytes were read and the current read position.
   *
   * @callback onStream
   * @param {object} value Object containing Stream data and Statistics
   * @param {Uint8Array} stream Object containing the stream buffer.
   * @param {object} stats Object containing statistics on how many bytes were read and the current read position.
   *
   * @callback onMetadataFailed Called when metadata detection has failed and no metadata will be returned
   * @param {string} metadataType Metadata type that failed ("icy" or "ogg")
   *
   * @callback onError Called when an error is encountered
   * @param {string} message Error message
   */
  constructor({ metadataTypes = ["icy"], ...rest } = {}) {
    const hasIcy = metadataTypes.includes("icy");
    const hasOgg = metadataTypes.includes("ogg");

    if (hasIcy && hasOgg) this._metadataParser = new DualMetadataParser(rest);
    else if (hasOgg) this._metadataParser = new OggMetadataParser(rest);
    else if (hasIcy) this._metadataParser = new IcyMetadataParser(rest);
    else this._metadataParser = new MetadataParser(rest);
  }

  /**
   * @description Parses an already decoded ICY metadata string into key value pairs.
   * @param {string} metadataString ICY formatted metadata string. (i.e. "StreamTitle='A Title';")
   * @returns {object} Parsed metadata key value pairs. (i.e. {StreamTitle: "A Title"})
   */
  static parseIcyMetadata(string) {
    return IcyMetadataParser.parseIcyMetadata(string);
  }

  /**
   * @description Gets the ICY metadata interval for this instance.
   * @returns {number} ICY metadata interval in bytes.
   */
  get icyMetaInt() {
    return this._metadataParser.icyMetaInt;
  }

  /**
   * @description Returns an iterator that yields stream or metadata.
   * @param {Uint8Array} chunk Next chunk of data to read
   * @returns {Iterator} Iterator that operates over a raw icecast response.
   * @yields {object} Object containing stream or metadata.
   */
  *iterator(chunk) {
    yield* this._metadataParser.iterator(chunk);
  }

  /**
   * @description Reads all data in the passed in chunk and calls the onStream and onMetadata callbacks.
   * @param {Uint8Array} chunk Next chunk of data to read
   */
  readAll(chunk) {
    this._metadataParser.readAll(chunk);
  }

  /**
   * @description Returns an async iterator that yields stream or metadata and awaits the onStream and onMetadata callbacks.
   * @param {Uint8Array} chunk Next chunk of data to read
   * @returns {IterableIterator} Iterator that operates over a raw icecast response.
   * @yields {object} Object containing stream or metadata.
   */
  async *asyncIterator(chunk) {
    return yield* this._metadataParser.asyncIterator(chunk);
  }

  /**
   * @description Reads all data in the chunk and awaits the onStream and onMetadata callbacks.
   * @param {Uint8Array} chunk Next chunk of data to read
   */
  async asyncReadAll(chunk) {
    return this._metadataParser.asyncReadAll(chunk);
  }
}

module.exports = IcecastMetadataReader;


/***/ }),

/***/ "./node_modules/icecast-metadata-js/src/IcecastReadableStream.js":
/*!***********************************************************************!*\
  !*** ./node_modules/icecast-metadata-js/src/IcecastReadableStream.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IcecastReadableStream)
/* harmony export */ });
/* harmony import */ var _IcecastMetadataReader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IcecastMetadataReader */ "./node_modules/icecast-metadata-js/src/IcecastMetadataReader.js");
/* harmony import */ var _IcecastMetadataReader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_IcecastMetadataReader__WEBPACK_IMPORTED_MODULE_0__);
/* Copyright 2020-2021 Ethan Halsall
    This file is part of icecast-metadata-js.

    icecast-metadata-js free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    icecast-metadata-js distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/



const noOp = () => {};

/**
 * @description Browser ReadableStream wrapper for IcecastMetadataReader
 */
class IcecastReadableStream {
  /**
   * @param {ReadableStream} response ReadableStream for raw Icecast response data
   * @param {object} options Configuration options for IcecastMetadataReader
   * @see IcecastMetadataReader for information on the options parameter
   */
  constructor(response, { onStream = noOp, ...rest }) {
    let icecast;

    this._readableStream = new ReadableStream({
      async start(controller) {
        icecast = new (_IcecastMetadataReader__WEBPACK_IMPORTED_MODULE_0___default())({
          icyMetaInt: parseInt(response.headers.get("Icy-MetaInt")),
          ...rest,
          onStream: async (value) => {
            controller.enqueue(value.stream);
            return onStream(value);
          },
        });

        for await (const chunk of IcecastReadableStream.asyncIterator(
          response.body
        )) {
          await icecast.asyncReadAll(chunk);
        }

        controller.close();
      },
    });

    this._icecast = icecast;
  }

  /**
   * @returns Icecast Metadata Interval if it is present on this stream
   */
  get icyMetaInt() {
    return this._icecast.icyMetaInt;
  }

  /**
   * @returns The ReadableStream instance
   */
  get readableStream() {
    return this._readableStream;
  }

  /**
   * @description Starts reading from the response and processing stream and metadata.
   */
  async startReading() {
    try {
      for await (const i of IcecastReadableStream.asyncIterator(
        this._readableStream
      )) {
      }
    } catch (e) {
      if (e.name !== "AbortError") throw e;
    }
  }

  /**
   * @description Wraps a ReadableStream as an Async Iterator.
   * @param {ReadableStream} readableStream ReadableStream to convert to AsyncIterator
   * @returns {Symbol.asyncIterator} Async Iterator that wraps the ReadableStream
   */
  static asyncIterator(readableStream) {
    const reader = readableStream.getReader();
    return {
      [Symbol.asyncIterator]: () => ({
        next: () => reader.read(),
      }),
    };
  }
}


/***/ }),

/***/ "./node_modules/icecast-metadata-js/src/MetadataParser/DualMetadataParser.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/icecast-metadata-js/src/MetadataParser/DualMetadataParser.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* Copyright 2020-2021 Ethan Halsall
    This file is part of icecast-metadata-js.

    icecast-metadata-js free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    icecast-metadata-js distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/

const IcyMetadataParser = __webpack_require__(/*! ./IcyMetadataParser */ "./node_modules/icecast-metadata-js/src/MetadataParser/IcyMetadataParser.js");
const OggMetadataParser = __webpack_require__(/*! ./OggMetadataParser */ "./node_modules/icecast-metadata-js/src/MetadataParser/OggMetadataParser.js");

/**
 * @description Parses ICY and OGG metadata from an Icecast stream
 * @protected
 * @see IcecastMetadataReader
 */

class DualMetadataParser {
  constructor(params) {
    const { onStream, ...rest } = params;
    this._oggMetadataParser = new OggMetadataParser(params);
    this._icyMetadataParser = new IcyMetadataParser(rest);
  }

  get icyMetaInt() {
    return this._icyMetadataParser.icyMetaInt;
  }

  *iterator(chunk) {
    for (const value of this._icyMetadataParser.iterator(chunk)) {
      if (value.stream) {
        yield* this._oggMetadataParser.iterator(value.stream);
      } else {
        yield value;
      }
    }
  }

  readAll(chunk) {
    for (const value of this._icyMetadataParser.iterator(chunk)) {
      if (value.stream) {
        this._oggMetadataParser.readAll(value.stream);
      }
    }
  }

  async *asyncIterator(chunk) {
    for await (const value of this._icyMetadataParser.asyncIterator(chunk)) {
      if (value.stream) {
        for await (const oggValue of this._oggMetadataParser.asyncIterator(
          value.stream
        )) {
          yield oggValue;
        }
      } else {
        yield value;
      }
    }
  }

  async asyncReadAll(chunk) {
    for await (const value of this._icyMetadataParser.iterator(chunk)) {
      if (value.stream) {
        await this._oggMetadataParser.asyncReadAll(value.stream);
      }
    }
  }
}

module.exports = DualMetadataParser;


/***/ }),

/***/ "./node_modules/icecast-metadata-js/src/MetadataParser/IcyMetadataParser.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/icecast-metadata-js/src/MetadataParser/IcyMetadataParser.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* Copyright 2020-2021 Ethan Halsall
    This file is part of icecast-metadata-js.

    icecast-metadata-js free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    icecast-metadata-js distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/

const Decoder = (__webpack_require__(/*! util */ "./node_modules/util/util.js").TextDecoder) || TextDecoder;
const MetadataParser = __webpack_require__(/*! ./MetadataParser */ "./node_modules/icecast-metadata-js/src/MetadataParser/MetadataParser.js");

/**
 * @description Parses ICY metadata from an Icecast stream
 * @protected
 * @see IcecastMetadataReader
 */

class IcyMetadataParser extends MetadataParser {
  constructor({
    icyMetaInt,
    icyDetectionTimeout = 2000,
    icyCharacterEncoding = "utf-8",
    ...rest
  }) {
    super(rest);

    this._decoder = new Decoder(icyCharacterEncoding);
    this._icyMetaInt = icyMetaInt;
    this._icyDetectionTimeout = icyDetectionTimeout;

    this._generator = this._icyParser();
    this._generator.next();
  }

  *_icyParser() {
    if (yield* this._hasIcyMetadata()) {
      do {
        this._remainingData = this._icyMetaInt;
        yield* this._getStream();
        yield* this._getMetadataLength();
        if (this._remainingData) yield* this._getMetadata();
      } while (true);
    }

    this._remainingData = Infinity;
    yield* this._getStream();
  }

  static parseIcyMetadata(metadataString) {
    /**
     * Metadata is a string of key='value' pairs delimited by a semicolon.
     * The string is a fixed length and any unused bytes at the end are 0x00.
     * i.e. "StreamTitle='The Stream Title';StreamUrl='https://example.com';\0\0\0\0\0\0"
     */

    const metadataRegex = /(?<key>[^\0]+?)='(?<val>[^\0]*?)(;$|';|'$|$)/;
    const metadata = {};

    // [{key: "StreamTitle", val: "The Stream Title"}, {key: "StreamUrl", val: "https://example.com"}]
    for (const metadataElement of metadataString.match(
      new RegExp(metadataRegex, "g")
    ) || []) {
      const match = metadataElement.match(metadataRegex);
      if (match) metadata[match["groups"]["key"]] = match["groups"]["val"];
    }

    // {StreamTitle: "The Stream Title", StreamUrl: "https://example.com"}
    return metadata;
  }

  get icyMetaInt() {
    return this._icyMetaInt;
  }

  *_hasIcyMetadata() {
    if (this._icyMetaInt > 0) return true;
    if (!this._icyDetectionTimeout) return false;

    this._logError(
      "Passed in Icy-MetaInt is invalid. Attempting to detect ICY Metadata.",
      "See https://github.com/eshaz/icecast-metadata-js for information on how to properly request ICY Metadata."
    );

    // prettier-ignore
    const METADATA_SEARCH = [null,83,116,114,101,97,109,84,105,116,108,101,61]; // StreamTitle=
    const startTime = Date.now();
    let metaInt = 0;

    while (startTime + this._icyDetectionTimeout > Date.now()) {
      this._buffer = MetadataParser._concatBuffers(
        this._buffer,
        yield* this._readData()
      );

      // search for metadata
      detectMetadata: while (
        metaInt <
        this._buffer.length - METADATA_SEARCH.length
      ) {
        for (let i = 1; i < METADATA_SEARCH.length; i++) {
          if (this._buffer[i + metaInt] !== METADATA_SEARCH[i]) {
            metaInt++;
            continue detectMetadata;
          }
        }

        // found metadata
        // prettier-ignore
        this._logError(`Found ICY Metadata! Setting Icy-MetaInt to ${metaInt}.`);
        this._icyMetaInt = metaInt;

        return true;
      }
    }

    // prettier-ignore
    this._logError(
      "ICY Metadata not detected, but continuing anyway. Audio errors will occur if there is ICY metadata.",
      `Searched ${this._buffer.length} bytes for ${(Date.now() - startTime) / 1000} seconds.`,
      "Try increasing the `icyDetectionTimeout` value if ICY metadata is present in the stream."
    );
    this._onMetadataFailed("icy");

    return false;
  }

  *_getStream() {
    this._stats.currentStreamBytesRemaining = this._remainingData;

    while (this._remainingData) {
      this._addStream(yield* super._getNextValue());
    }
  }

  *_getMetadataLength() {
    this._remainingData = 1;

    do {
      this._remainingData = (yield* this._getNextValue())[0] * 16;
    } while (this._remainingData === 1);

    this._stats.addMetadataLengthBytes(1);
  }

  *_getMetadata() {
    this._stats.currentMetadataBytesRemaining = this._remainingData;

    const metadata = yield* this._getNextValue(this._remainingData);
    this._stats.addMetadataBytes(metadata.length);

    yield* this._sendMetadata(
      IcyMetadataParser.parseIcyMetadata(this._decoder.decode(metadata))
    );
  }
}

module.exports = IcyMetadataParser;


/***/ }),

/***/ "./node_modules/icecast-metadata-js/src/MetadataParser/MetadataParser.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/icecast-metadata-js/src/MetadataParser/MetadataParser.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* Copyright 2020-2021 Ethan Halsall
    This file is part of icecast-metadata-js.

    icecast-metadata-js free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    icecast-metadata-js distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/

const Stats = __webpack_require__(/*! ./Stats */ "./node_modules/icecast-metadata-js/src/MetadataParser/Stats.js");

const noOp = () => {};

/**
 * @description Passthrough parser
 * @protected
 * @see IcecastMetadataReader
 */

class MetadataParser {
  constructor(params) {
    this._remainingData = 0;
    this._currentPosition = 0;
    this._buffer = new Uint8Array(0);
    this._streamBuffer = [];
    this._streamBufferLength = 0;
    this._stats = new Stats();

    this._onStream = params.onStream || noOp;
    this._onMetadata = params.onMetadata || noOp;
    this._onMetadataFailed = params.onMetadataFailed || noOp;
    this._onError = params.onError || noOp;
    this._enableLogging = params.enableLogging || false;

    this._onStreamPromise = Promise.resolve();
    this._onMetadataPromise = Promise.resolve();
    this._generator = this._passThroughParser();
    this._generator.next();
  }

  *_passThroughParser() {
    this._remainingData = Infinity;
    while (true) {
      this._addStream(yield* this._getNextValue());
      yield* this._sendStream();
    }
  }

  static _concatBuffers(...buffers) {
    const length = buffers.reduce((acc, buf) => acc + buf.length, 0);

    return this._concatBuffersKnownLength(buffers, length);
  }

  static _concatBuffersKnownLength(buffers, length) {
    const buffer = new Uint8Array(length);

    buffers.reduce((offset, buf) => {
      buffer.set(buf, offset);
      return offset + buf.length;
    }, 0);

    return buffer;
  }

  *iterator(chunk) {
    for (
      let i = this._generator.next(chunk);
      i.value;
      i = this._generator.next()
    ) {
      yield i.value;
    }
  }

  readAll(chunk) {
    for (
      let i = this._generator.next(chunk);
      i.value;
      i = this._generator.next()
    ) {}
  }

  async *asyncIterator(chunk) {
    for (
      let i = this._generator.next(chunk);
      i.value;
      i = this._generator.next()
    ) {
      await this._onStreamPromise;
      await this._onMetadataPromise;
      yield i.value;
    }
  }

  async asyncReadAll(chunk) {
    for (
      let i = this._generator.next(chunk);
      i.value;
      i = this._generator.next()
    ) {
      await this._onStreamPromise;
      await this._onMetadataPromise;
    }
  }

  _logError(...messages) {
    if (this._enableLogging) {
      console.warn(
        "icecast-metadata-js",
        messages.reduce((acc, message) => acc + "\n  " + message, "")
      );
    }
    this._onError(...messages);
  }

  _addStream(stream) {
    this._streamBuffer.push(stream);
    this._streamBufferLength += stream.length;
  }

  *_sendStream() {
    if (this._streamBuffer.length) {
      const stream = MetadataParser._concatBuffersKnownLength(
        this._streamBuffer,
        this._streamBufferLength
      );
      this._streamBuffer = [];
      this._streamBufferLength = 0;

      this._stats.addStreamBytes(stream.length);

      const streamPayload = { stream, stats: this._stats.stats };

      this._onStreamPromise = this._onStream(streamPayload);
      yield streamPayload;
    }
  }

  *_sendMetadata(metadata) {
    yield* this._sendStream();

    const metadataPayload = {
      metadata,
      stats: this._stats.stats,
    };

    this._onMetadataPromise = this._onMetadata(metadataPayload);
    yield metadataPayload;
  }

  *_getNextValue(minLength = 0) {
    if (this._currentPosition === this._buffer.length) {
      this._buffer = yield* this._readData();
      this._currentPosition = 0;
    }

    while (this._buffer.length - this._currentPosition < minLength) {
      this._buffer = MetadataParser._concatBuffers(
        this._buffer,
        yield* this._readData()
      );
    }

    const value = this._buffer.subarray(
      this._currentPosition,
      (minLength || this._remainingData) + this._currentPosition
    );

    this._stats.addBytes(value.length);
    this._remainingData =
      value.length < this._remainingData
        ? this._remainingData - value.length
        : 0;

    this._currentPosition += value.length;

    return value;
  }

  *_readData() {
    yield* this._sendStream();

    let data;

    do {
      data = yield; // if out of data, accept new data in the .next() call
    } while (!data || data.length === 0);

    this._stats.addCurrentBytesRemaining(data.length);
    return data;
  }
}

module.exports = MetadataParser;


/***/ }),

/***/ "./node_modules/icecast-metadata-js/src/MetadataParser/OggMetadataParser.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/icecast-metadata-js/src/MetadataParser/OggMetadataParser.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* Copyright 2020-2021 Ethan Halsall
    This file is part of icecast-metadata-js.

    icecast-metadata-js free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    icecast-metadata-js distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/

const Decoder = (__webpack_require__(/*! util */ "./node_modules/util/util.js").TextDecoder) || TextDecoder;
const MetadataParser = __webpack_require__(/*! ./MetadataParser */ "./node_modules/icecast-metadata-js/src/MetadataParser/MetadataParser.js");

/**
 * @description Parses OGG metadata from an Icecast stream
 * @protected
 * @see IcecastMetadataReader
 */
class OggMetadataParser extends MetadataParser {
  constructor(params) {
    super(params);

    this._decoder = new Decoder("utf-8");
    this._generator = this._oggParser();
    this._generator.next();
    this._isContinuePacket = false;
  }

  *_oggParser() {
    if (yield* this._hasOggPage()) {
      const codecMatcher = yield* this._identifyCodec();
      if (codecMatcher) {
        while (yield* this._hasOggPage()) {
          if (!this._isContinuePacket) yield* this._getMetadata(codecMatcher);
          yield* this._getStream();
        }
      }
    }

    this._remainingData = Infinity;
    yield* this._getStream();
  }

  _getUint32(data, offset = 0) {
    return new DataView(
      Uint8Array.from([...data.subarray(offset, offset + 4)]).buffer
    ).getUint32(0, true);
  }

  _matchBytes(matchString, bytes) {
    return String.fromCharCode(...bytes).match(matchString);
  }

  *_hasOggPage() {
    // Bytes (1-4 of 28)
    // Frame sync (must equal OggS): `AAAAAAAA|AAAAAAAA|AAAAAAAA|AAAAAAAA`:
    // Byte (5 of 28) stream_structure_version
    // Byte (6 of 28)
    // * `00000...`: All zeros
    // * `.....C..`: (0 no, 1 yes) last page of logical bitstream (eos)
    // * `......D.`: (0 no, 1 yes) first page of logical bitstream (bos)
    // * `.......E`: (0 no, 1 yes) continued packet
    let syncBytes = [];
    while (syncBytes.length <= 65307) {
      // max ogg page size
      const bytes = yield* super._getNextValue(6); // Sync with OGG page without sending stream data
      if (
        bytes[0] === 0x4f &&
        bytes[1] === 0x67 &&
        bytes[2] === 0x67 &&
        bytes[3] === 0x53 &&
        !(bytes[5] & 0b11111000)
      ) {
        this._isContinuePacket = bytes[5] & 0b00000001;
        this._currentPosition -= 6;
        this._remainingData += 6;
        this._stats._totalBytesRead -= 6;
        this._stats._currentBytesRemaining += 6;
        break;
      }
      syncBytes.push(bytes[0]);

      this._currentPosition -= 4;
      this._stats._totalBytesRead -= 4;
      this._stats._currentBytesRemaining += 4;
    }

    if (syncBytes.length) this._addStream(Uint8Array.from(syncBytes));

    if (syncBytes.length > 65307) {
      this._logError(
        "This stream is not an OGG stream. No OGG metadata will be returned.",
        "See https://github.com/eshaz/icecast-metadata-js for information on OGG metadata."
      );
      this._onMetadataFailed("ogg");
      return false;
    }

    const baseOggPage = yield* this._getNextValue(27);
    // Byte (27 of 28)
    // * `JJJJJJJJ`: Number of page segments in the segment table
    const oggPageSegments = yield* this._getNextValue(baseOggPage[26]);

    this._remainingData = oggPageSegments.reduce(
      (acc, octet) => acc + octet,
      0
    );
    return true;
  }

  *_identifyCodec() {
    const data = yield* this._getNextValue(8);

    yield* this._getStream();

    if (this._matchBytes(/\x7fFLAC/, data.subarray(0, 5))) {
      return { regex: /^[\x84|\x04]/, length: 4 };
    } else if (this._matchBytes(/OpusHead/, data.subarray(0, 8))) {
      return { regex: /OpusTags/, length: 8 };
    } else if (this._matchBytes(/\x01vorbis/, data.subarray(0, 7))) {
      return { regex: /\x03vorbis/, length: 7 };
    }
  }

  *_getMetadata({ regex, length }) {
    if (this._matchBytes(regex, yield* this._getNextValue(length))) {
      yield* this._sendMetadata(yield* this._readVorbisComment());
    }
  }

  *_getStream() {
    while (this._remainingData) {
      yield* this._getNextValue();
    }
  }

  *_getNextValue(length) {
    const value = yield* super._getNextValue(length);

    this._addStream(value);
    return value;
  }

  *_readData() {
    const data = yield* super._readData();
    this._stats.currentStreamBytesRemaining = data.length;
    return data;
  }

  *_readVorbisComment() {
    /*
    1) [vendor_length] = read an unsigned integer of 32 bits
    2) [vendor_string] = read a UTF-8 vector as [vendor_length] octets
    3) [user_comment_list_length] = read an unsigned integer of 32 bits
    4) iterate [user_comment_list_length] times {
       5) [length] = read an unsigned integer of 32 bits
       6) this iteration's user comment = read a UTF-8 vector as [length] octets
    }
    7) [framing_bit] = read a single bit as boolean
    8) if ( [framing_bit] unset or end of packet ) then ERROR
    9) done.
    */
    const vendorStringLength = this._getUint32(yield* this._getNextValue(4));
    this._stats.addMetadataBytes(4);

    const vendorString = this._decoder.decode(
      yield* this._getNextValue(vendorStringLength)
    );
    this._stats.addMetadataBytes(vendorStringLength);

    const commentListLength = this._getUint32(yield* this._getNextValue(4));
    this._stats.addMetadataBytes(4);

    const comments = [];
    for (let i = 0; i < commentListLength; i++) {
      const commentLength = yield* this._getNextValue(4);
      this._stats.addMetadataBytes(4);

      comments.push(yield* this._getNextValue(this._getUint32(commentLength)));
      this._stats.addMetadataBytes(comments[comments.length - 1].length);
    }

    this._stats.currentMetadataBytesRemaining = 0;

    return comments.reduce(
      (metadata, comment) => {
        const delimiter = comment.indexOf(0x3d);
        // prettier-ignore
        const key = String.fromCharCode(...comment.subarray(0, delimiter)).toUpperCase();
        const val = this._decoder.decode(comment.subarray(delimiter + 1));

        metadata[key] = metadata[key] ? `${metadata[key]}; ${val}` : val;
        return metadata;
      },
      { VENDOR_STRING: vendorString }
    );
  }
}

module.exports = OggMetadataParser;


/***/ }),

/***/ "./node_modules/icecast-metadata-js/src/MetadataParser/Stats.js":
/*!**********************************************************************!*\
  !*** ./node_modules/icecast-metadata-js/src/MetadataParser/Stats.js ***!
  \**********************************************************************/
/***/ ((module) => {

/* Copyright 2020-2021 Ethan Halsall
    This file is part of icecast-metadata-js.

    icecast-metadata-js free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    icecast-metadata-js distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/

class Stats {
  constructor() {
    this._totalBytesRead = 0;
    this._streamBytesRead = 0;
    this._metadataLengthBytesRead = 0;
    this._metadataBytesRead = 0;

    this._currentBytesRemaining = 0;
    this._currentStreamBytesRemaining = 0;
    this._currentMetadataBytesRemaining = 0;
  }

  get stats() {
    return {
      totalBytesRead: this._totalBytesRead,
      streamBytesRead: this._streamBytesRead,
      metadataLengthBytesRead: this._metadataLengthBytesRead,
      metadataBytesRead: this._metadataBytesRead,
      currentBytesRemaining: this._currentBytesRemaining,
      currentStreamBytesRemaining: this._currentStreamBytesRemaining,
      currentMetadataBytesRemaining: this._currentMetadataBytesRemaining,
    };
  }

  set currentStreamBytesRemaining(bytes) {
    this._currentStreamBytesRemaining += bytes;
  }

  set currentMetadataBytesRemaining(bytes) {
    this._currentMetadataBytesRemaining = bytes;
  }

  addBytes(bytes) {
    this._totalBytesRead += bytes;
    this._currentBytesRemaining -= bytes;
  }

  addStreamBytes(bytes) {
    this._streamBytesRead += bytes;
    this._currentStreamBytesRemaining -= bytes;
  }

  addMetadataLengthBytes(bytes) {
    this._metadataLengthBytesRead += bytes;
  }

  addMetadataBytes(bytes) {
    this._metadataBytesRead += bytes;
    this._currentMetadataBytesRemaining -= bytes;
  }

  addCurrentBytesRemaining(bytes) {
    this._currentBytesRemaining += bytes;
  }
}

module.exports = Stats;


/***/ }),

/***/ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/browser.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/browser.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IcecastMetadataQueue": () => (/* reexport default from dynamic */ _src_IcecastMetadataQueue__WEBPACK_IMPORTED_MODULE_0___default.a),
/* harmony export */   "IcecastMetadataReader": () => (/* reexport default from dynamic */ _src_IcecastMetadataReader__WEBPACK_IMPORTED_MODULE_1___default.a),
/* harmony export */   "IcecastReadableStream": () => (/* reexport safe */ _src_IcecastReadableStream__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _src_IcecastMetadataQueue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/IcecastMetadataQueue */ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/IcecastMetadataQueue.js");
/* harmony import */ var _src_IcecastMetadataQueue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_IcecastMetadataQueue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_IcecastMetadataReader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/IcecastMetadataReader */ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/IcecastMetadataReader.js");
/* harmony import */ var _src_IcecastMetadataReader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_IcecastMetadataReader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_IcecastReadableStream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/IcecastReadableStream */ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/IcecastReadableStream.js");







/***/ }),

/***/ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/IcecastMetadataQueue.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/IcecastMetadataQueue.js ***!
  \**********************************************************************************************************/
/***/ ((module) => {

/* Copyright 2020-2021 Ethan Halsall
    This file is part of icecast-metadata-js.

    icecast-metadata-js free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    icecast-metadata-js distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/

const noOp = () => {};

class IcecastMetadataQueue {
  /**
   * @description Schedules updates up to the millisecond for Icecast Metadata from the response body of an Icecast stream mountpoint
   * @description The accuracy of metadata updates is a direct relationship of the icyMetaInt
   * @param {Object} IcecastMetadataQueue constructor parameter
   * @param {number} [IcecastMetadataQueue.icyBr] Bitrate of audio stream used to increase accuracy when to updating metadata
   * @param {onMetadataUpdate} [IcecastMetadataQueue.onMetadataUpdate] Callback executed when metadata is scheduled to update
   * @param {onMetadataEnqueue} [IcecastMetadataQueue.onMetadataEnqueue] Callback executed when metadata is enqueued
   *
   * @callback onMetadataUpdate
   * @param {Object} metadata Object containing all metadata received.
   * @param {string} [metadata.StreamTitle] Title of the metadata update.
   * @param {string} [metadata.StreamUrl] Url (usually album art) of the metadata update.
   * @param {number} timestampOffset Total time buffered when the metadata was added
   * @param {number} timestamp Current time of the audio player when the metadata was added
   *
   * @callback onMetadataEnqueue
   * @param {Object} metadata Object containing all metadata received.
   * @param {string} [metadata.StreamTitle] Title of the metadata update.
   * @param {string} [metadata.StreamUrl] Url (usually album art) of the metadata update.
   * @param {number} timestampOffset Total time buffered when the metadata was added
   * @param {number} timestamp Current time of the audio player when the metadata was added
   *
   */
  constructor({ icyBr, onMetadataUpdate = noOp, onMetadataEnqueue = noOp }) {
    this._icyBr = icyBr;
    this._onMetadataUpdate = onMetadataUpdate;
    this._onMetadataEnqueue = onMetadataEnqueue;
    this._isInitialMetadata = true;
    this._metadataQueue = [];
  }

  /**
   * @description Returns the metadata queued for updates
   * @type {{metadata: string, time: number}[]} Queued metadata
   */
  get metadataQueue() {
    return this._metadataQueue.map(({ _timeoutId, ...rest }) => rest);
  }

  /**
   *
   * @param {object} metadata Metadata object returned from IcecastMetadataReader
   * @param {number} timestampOffset Total buffered audio in seconds
   * @param {number} [timestamp] Current time in the audio player
   */
  addMetadata({ metadata, stats }, timestampOffset, timestamp = 0) {
    /**
     * Metadata time is derived from the total number of stream bytes read
     * since the latest buffer input. The buffer offset should be the total
     * seconds of audio in the player buffer when the metadata was read.
     */
    this._enqueueMetadata(
      metadata,
      timestampOffset,
      timestamp + this.getTimeByBytes(stats.currentStreamPosition)
    );
  }

  /**
   * @description Calculates audio stream length based on bitrate
   * @param {number} bytesRead Number of bytes
   * @type {number} Seconds
   */
  getTimeByBytes(bytesRead) {
    return this._icyBr ? bytesRead / (this._icyBr * 125) : 0;
  }

  /**
   * @description Clears all metadata updates and empties the queue
   */
  purgeMetadataQueue() {
    this._metadataQueue.forEach((i) => clearTimeout(i._timeoutId));
    this._metadataQueue = [];
  }

  _enqueueMetadata(metadata, timestampOffset, timestamp) {
    const metadataPayload = {
      metadata,
      timestampOffset,
      timestamp,
    };

    this._metadataQueue.push(metadataPayload);
    this._onMetadataEnqueue(metadata, timestampOffset, timestamp);

    if (this._isInitialMetadata) {
      this._dequeueMetadata();
      this._isInitialMetadata = false;
    } else {
      metadataPayload._timeoutId = setTimeout(() => {
        this._dequeueMetadata();
      }, (timestampOffset - timestamp) * 1000); // trigger timeout relative to play position
    }
  }

  _dequeueMetadata() {
    const { metadata, timestampOffset, timestamp } =
      this._metadataQueue.shift();
    this._onMetadataUpdate(metadata, timestampOffset, timestamp);
  }
}

module.exports = IcecastMetadataQueue;


/***/ }),

/***/ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/IcecastMetadataReader.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/IcecastMetadataReader.js ***!
  \***********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* Copyright 2020-2021 Ethan Halsall
    This file is part of icecast-metadata-js.

    icecast-metadata-js free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    icecast-metadata-js distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/

const MetadataParser = __webpack_require__(/*! ./MetadataParser/MetadataParser */ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/MetadataParser.js");
const IcyMetadataParser = __webpack_require__(/*! ./MetadataParser/IcyMetadataParser */ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/IcyMetadataParser.js");
const OggMetadataParser = __webpack_require__(/*! ./MetadataParser/OggMetadataParser */ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/OggMetadataParser.js");
const DualMetadataParser = __webpack_require__(/*! ./MetadataParser/DualMetadataParser */ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/DualMetadataParser.js");

class IcecastMetadataReader {
  /**
   * @description Splits Icecast raw response into stream bytes and metadata key / value pairs.
   * @param {number} IcecastMetadataReader.icyMetaInt Interval in bytes of metadata updates returned by the Icecast server
   * @param {number} IcecastMetadataReader.icyCharacterEncoding Character encoding to use for ICY metadata (defaults to "utf-8")
   * @param {number} IcecastMetadataReader.icyDetectionTimeout Duration in milliseconds to search for metadata if icyMetaInt isn't passed in
   * @param {Array} IcecastMetadataReader.metadataTypes Types of metadata to capture: "icy" and/or "ogg"
   *
   * @callback onMetadata
   * @param {object} value Object containing Metadata and Statistics
   * @param {object} metadata Object containing the metadata received.
   * @param {string} [metadata.StreamTitle] (ICY) Title of the metadata update.
   * @param {string} [metadata.StreamUrl] (ICY) Url (usually album art) of the metadata update.
   * @param {string} [metadata.TITLE] (OGG) Url Title of the metadata update.
   * @param {object} stats Object containing statistics on how many bytes were read and the current read position.
   *
   * @callback onStream
   * @param {object} value Object containing Stream data and Statistics
   * @param {Uint8Array} stream Object containing the stream buffer.
   * @param {object} stats Object containing statistics on how many bytes were read and the current read position.
   *
   * @callback onMetadataFailed Called when metadata detection has failed and no metadata will be returned
   * @param {string} metadataType Metadata type that failed ("icy" or "ogg")
   *
   * @callback onError Called when an error is encountered
   * @param {string} message Error message
   */
  constructor({ metadataTypes = ["icy"], ...rest } = {}) {
    const hasIcy = metadataTypes.includes("icy");
    const hasOgg = metadataTypes.includes("ogg");

    if (hasIcy && hasOgg) this._metadataParser = new DualMetadataParser(rest);
    else if (hasOgg) this._metadataParser = new OggMetadataParser(rest);
    else if (hasIcy) this._metadataParser = new IcyMetadataParser(rest);
    else this._metadataParser = new MetadataParser(rest);
  }

  /**
   * @description Parses an already decoded ICY metadata string into key value pairs.
   * @param {string} metadataString ICY formatted metadata string. (i.e. "StreamTitle='A Title';")
   * @returns {object} Parsed metadata key value pairs. (i.e. {StreamTitle: "A Title"})
   */
  static parseIcyMetadata(string) {
    return IcyMetadataParser.parseIcyMetadata(string);
  }

  /**
   * @description Gets the ICY metadata interval for this instance.
   * @returns {number} ICY metadata interval in bytes.
   */
  get icyMetaInt() {
    return this._metadataParser.icyMetaInt;
  }

  /**
   * @description Returns an iterator that yields stream or metadata.
   * @param {Uint8Array} chunk Next chunk of data to read
   * @returns {Iterator} Iterator that operates over a raw icecast response.
   * @yields {object} Object containing stream or metadata.
   */
  *iterator(chunk) {
    yield* this._metadataParser.iterator(chunk);
  }

  /**
   * @description Reads all data in the passed in chunk and calls the onStream and onMetadata callbacks.
   * @param {Uint8Array} chunk Next chunk of data to read
   */
  readAll(chunk) {
    this._metadataParser.readAll(chunk);
  }

  /**
   * @description Returns an async iterator that yields stream or metadata and awaits the onStream and onMetadata callbacks.
   * @param {Uint8Array} chunk Next chunk of data to read
   * @returns {IterableIterator} Iterator that operates over a raw icecast response.
   * @yields {object} Object containing stream or metadata.
   */
  async *asyncIterator(chunk) {
    return yield* this._metadataParser.asyncIterator(chunk);
  }

  /**
   * @description Reads all data in the chunk and awaits the onStream and onMetadata callbacks.
   * @param {Uint8Array} chunk Next chunk of data to read
   */
  async asyncReadAll(chunk) {
    return this._metadataParser.asyncReadAll(chunk);
  }
}

module.exports = IcecastMetadataReader;


/***/ }),

/***/ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/IcecastReadableStream.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/IcecastReadableStream.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IcecastReadableStream)
/* harmony export */ });
/* harmony import */ var _IcecastMetadataReader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IcecastMetadataReader */ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/IcecastMetadataReader.js");
/* harmony import */ var _IcecastMetadataReader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_IcecastMetadataReader__WEBPACK_IMPORTED_MODULE_0__);
/* Copyright 2020-2021 Ethan Halsall
    This file is part of icecast-metadata-js.

    icecast-metadata-js free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    icecast-metadata-js distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/



const noOp = () => {};

/**
 * @description Browser ReadableStream wrapper for IcecastMetadataReader
 */
class IcecastReadableStream {
  /**
   * @param {ReadableStream} response ReadableStream for raw Icecast response data
   * @param {object} options Configuration options for IcecastMetadataReader
   * @see IcecastMetadataReader for information on the options parameter
   */
  constructor(response, { onStream = noOp, ...rest }) {
    let icecast;

    this._readableStream = new ReadableStream({
      async start(controller) {
        icecast = new (_IcecastMetadataReader__WEBPACK_IMPORTED_MODULE_0___default())({
          icyMetaInt: parseInt(response.headers.get("Icy-MetaInt")),
          ...rest,
          onStream: async (value) => {
            controller.enqueue(value.stream);
            return onStream(value);
          },
        });

        for await (const chunk of IcecastReadableStream.asyncIterator(
          response.body
        )) {
          await icecast.asyncReadAll(chunk);
        }

        controller.close();
      },
    });

    this._icecast = icecast;
  }

  /**
   * @returns Icecast Metadata Interval if it is present on this stream
   */
  get icyMetaInt() {
    return this._icecast.icyMetaInt;
  }

  /**
   * @returns The ReadableStream instance
   */
  get readableStream() {
    return this._readableStream;
  }

  /**
   * @description Starts reading from the response and processing stream and metadata.
   */
  async startReading() {
    try {
      for await (const i of IcecastReadableStream.asyncIterator(
        this._readableStream
      )) {
      }
    } catch (e) {
      if (e.name !== "AbortError") throw e;
    }
  }

  /**
   * @description Wraps a ReadableStream as an Async Iterator.
   * @param {ReadableStream} readableStream ReadableStream to convert to AsyncIterator
   * @returns {Symbol.asyncIterator} Async Iterator that wraps the ReadableStream
   */
  static asyncIterator(readableStream) {
    const reader = readableStream.getReader();
    return {
      [Symbol.asyncIterator]: () => ({
        next: () => reader.read(),
      }),
    };
  }
}


/***/ }),

/***/ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/DualMetadataParser.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/DualMetadataParser.js ***!
  \***********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* Copyright 2020-2021 Ethan Halsall
    This file is part of icecast-metadata-js.

    icecast-metadata-js free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    icecast-metadata-js distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/

const IcyMetadataParser = __webpack_require__(/*! ./IcyMetadataParser */ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/IcyMetadataParser.js");
const OggMetadataParser = __webpack_require__(/*! ./OggMetadataParser */ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/OggMetadataParser.js");

/**
 * @description Parses ICY and OGG metadata from an Icecast stream
 * @protected
 * @see IcecastMetadataReader
 */

class DualMetadataParser {
  constructor(params) {
    const { onStream, ...rest } = params;
    this._oggMetadataParser = new OggMetadataParser(params);
    this._icyMetadataParser = new IcyMetadataParser(rest);
  }

  get icyMetaInt() {
    return this._icyMetadataParser.icyMetaInt;
  }

  *iterator(chunk) {
    for (const value of this._icyMetadataParser.iterator(chunk)) {
      if (value.stream) {
        yield* this._oggMetadataParser.iterator(value.stream);
      } else {
        yield value;
      }
    }
  }

  readAll(chunk) {
    for (const value of this._icyMetadataParser.iterator(chunk)) {
      if (value.stream) {
        this._oggMetadataParser.readAll(value.stream);
      }
    }
  }

  async *asyncIterator(chunk) {
    for await (const value of this._icyMetadataParser.asyncIterator(chunk)) {
      if (value.stream) {
        for await (const oggValue of this._oggMetadataParser.asyncIterator(
          value.stream
        )) {
          yield oggValue;
        }
      } else {
        yield value;
      }
    }
  }

  async asyncReadAll(chunk) {
    for await (const value of this._icyMetadataParser.iterator(chunk)) {
      if (value.stream) {
        await this._oggMetadataParser.asyncReadAll(value.stream);
      }
    }
  }
}

module.exports = DualMetadataParser;


/***/ }),

/***/ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/IcyMetadataParser.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/IcyMetadataParser.js ***!
  \**********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* Copyright 2020-2021 Ethan Halsall
    This file is part of icecast-metadata-js.

    icecast-metadata-js free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    icecast-metadata-js distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/

const Decoder = (__webpack_require__(/*! util */ "./node_modules/util/util.js").TextDecoder) || TextDecoder;
const MetadataParser = __webpack_require__(/*! ./MetadataParser */ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/MetadataParser.js");

/**
 * @description Parses ICY metadata from an Icecast stream
 * @protected
 * @see IcecastMetadataReader
 */

class IcyMetadataParser extends MetadataParser {
  constructor({
    icyMetaInt,
    icyDetectionTimeout = 2000,
    icyCharacterEncoding = "utf-8",
    ...rest
  }) {
    super(rest);

    this._decoder = new Decoder(icyCharacterEncoding);
    this._icyMetaInt = icyMetaInt;
    this._icyDetectionTimeout = icyDetectionTimeout;

    this._generator = this._icyParser();
    this._generator.next();
  }

  *_icyParser() {
    if (yield* this._hasIcyMetadata()) {
      do {
        this._remainingData = this._icyMetaInt;
        yield* this._getStream();
        yield* this._getMetadataLength();
        if (this._remainingData) yield* this._getMetadata();
      } while (true);
    }

    this._remainingData = Infinity;
    yield* this._getStream();
  }

  static parseIcyMetadata(metadataString) {
    /**
     * Metadata is a string of key='value' pairs delimited by a semicolon.
     * The string is a fixed length and any unused bytes at the end are 0x00.
     * i.e. "StreamTitle='The Stream Title';StreamUrl='https://example.com';\0\0\0\0\0\0"
     */

    const metadataRegex = /(?<key>[^\0]+?)='(?<val>[^\0]*?)(;$|';|'$|$)/;
    const metadata = {};

    // [{key: "StreamTitle", val: "The Stream Title"}, {key: "StreamUrl", val: "https://example.com"}]
    for (const metadataElement of metadataString.match(
      new RegExp(metadataRegex, "g")
    ) || []) {
      const match = metadataElement.match(metadataRegex);
      if (match) metadata[match["groups"]["key"]] = match["groups"]["val"];
    }

    // {StreamTitle: "The Stream Title", StreamUrl: "https://example.com"}
    return metadata;
  }

  get icyMetaInt() {
    return this._icyMetaInt;
  }

  *_hasIcyMetadata() {
    if (this._icyMetaInt > 0) return true;
    if (!this._icyDetectionTimeout) return false;

    this._logError(
      "Passed in Icy-MetaInt is invalid. Attempting to detect ICY Metadata.",
      "See https://github.com/eshaz/icecast-metadata-js for information on how to properly request ICY Metadata."
    );

    // prettier-ignore
    const METADATA_SEARCH = [null,83,116,114,101,97,109,84,105,116,108,101,61]; // StreamTitle=
    const startTime = Date.now();
    let metaInt = 0;

    while (startTime + this._icyDetectionTimeout > Date.now()) {
      this._buffer = MetadataParser._concatBuffers(
        this._buffer,
        yield* this._readData()
      );

      // search for metadata
      detectMetadata: while (
        metaInt <
        this._buffer.length - METADATA_SEARCH.length
      ) {
        for (let i = 1; i < METADATA_SEARCH.length; i++) {
          if (this._buffer[i + metaInt] !== METADATA_SEARCH[i]) {
            metaInt++;
            continue detectMetadata;
          }
        }

        // found metadata
        // prettier-ignore
        this._logError(`Found ICY Metadata! Setting Icy-MetaInt to ${metaInt}.`);
        this._icyMetaInt = metaInt;

        return true;
      }
    }

    // prettier-ignore
    this._logError(
      "ICY Metadata not detected, but continuing anyway. Audio errors will occur if there is ICY metadata.",
      `Searched ${this._buffer.length} bytes for ${(Date.now() - startTime) / 1000} seconds.`,
      "Try increasing the `icyDetectionTimeout` value if ICY metadata is present in the stream."
    );
    this._onMetadataFailed("icy");

    return false;
  }

  *_getStream() {
    this._stats.currentStreamBytesRemaining = this._remainingData;

    while (this._remainingData) {
      yield* this._sendStream(yield* super._getNextValue());
    }
  }

  *_getMetadataLength() {
    this._remainingData = 1;

    do {
      this._remainingData = (yield* this._getNextValue())[0] * 16;
    } while (this._remainingData === 1);

    this._stats.addMetadataLengthBytes(1);
  }

  *_getMetadata() {
    this._stats.currentMetadataBytesRemaining = this._remainingData;

    const metadata = yield* this._getNextValue(this._remainingData);
    this._stats.addMetadataBytes(metadata.length);

    yield* this._sendMetadata(
      IcyMetadataParser.parseIcyMetadata(this._decoder.decode(metadata))
    );
  }
}

module.exports = IcyMetadataParser;


/***/ }),

/***/ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/MetadataParser.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/MetadataParser.js ***!
  \*******************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* Copyright 2020-2021 Ethan Halsall
    This file is part of icecast-metadata-js.

    icecast-metadata-js free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    icecast-metadata-js distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/

const Stats = __webpack_require__(/*! ./Stats */ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/Stats.js");

const noOp = () => {};

/**
 * @description Passthrough parser
 * @protected
 * @see IcecastMetadataReader
 */

class MetadataParser {
  constructor(params) {
    this._remainingData = 0;
    this._currentPosition = 0;
    this._buffer = new Uint8Array(0);
    this._stats = new Stats();

    this._onStream = params.onStream || noOp;
    this._onMetadata = params.onMetadata || noOp;
    this._onMetadataFailed = params.onMetadataFailed || noOp;
    this._onError = params.onError || noOp;
    this._enableLogging = params.enableLogging || false;

    this._onStreamPromise = Promise.resolve();
    this._onMetadataPromise = Promise.resolve();
    this._generator = this._passThroughParser();
    this._generator.next();
  }

  *_passThroughParser() {
    this._remainingData = Infinity;
    while (true) {
      yield* this._sendStream(yield* this._getNextValue());
    }
  }

  static _concatBuffers(buf1, buf2) {
    const result = new Uint8Array(buf1.length + buf2.length);
    result.set(buf1);
    result.set(buf2, buf1.length);
    return result;
  }

  *iterator(chunk) {
    for (
      let i = this._generator.next(chunk);
      i.value;
      i = this._generator.next()
    ) {
      yield i.value;
    }
  }

  readAll(chunk) {
    for (
      let i = this._generator.next(chunk);
      i.value;
      i = this._generator.next()
    ) {}
  }

  async *asyncIterator(chunk) {
    for (
      let i = this._generator.next(chunk);
      i.value;
      i = this._generator.next()
    ) {
      await this._onStreamPromise;
      await this._onMetadataPromise;
      yield i.value;
    }
  }

  async asyncReadAll(chunk) {
    for (
      let i = this._generator.next(chunk);
      i.value;
      i = this._generator.next()
    ) {
      await this._onStreamPromise;
      await this._onMetadataPromise;
    }
  }

  _logError(...messages) {
    if (this._enableLogging) {
      console.warn(
        "icecast-metadata-js",
        messages.reduce((acc, message) => acc + "\n  " + message, "")
      );
    }
    this._onError(...messages);
  }

  *_sendStream(stream) {
    this._stats.addStreamBytes(stream.length);

    const streamPayload = { stream, stats: this._stats.stats };

    this._onStreamPromise = this._onStream(streamPayload);
    yield streamPayload;
  }

  *_sendMetadata(metadata) {
    const metadataPayload = {
      metadata,
      stats: this._stats.stats,
    };

    this._onMetadataPromise = this._onMetadata(metadataPayload);
    yield metadataPayload;
  }

  *_getNextValue(minLength = 0) {
    if (this._currentPosition === this._buffer.length) {
      this._buffer = yield* this._readData();
      this._currentPosition = 0;
    }

    while (this._buffer.length - this._currentPosition < minLength) {
      this._buffer = MetadataParser._concatBuffers(
        this._buffer,
        yield* this._readData()
      );
    }

    const value = this._buffer.subarray(
      this._currentPosition,
      (minLength || this._remainingData) + this._currentPosition
    );

    this._stats.addBytes(value.length);
    this._remainingData =
      value.length < this._remainingData
        ? this._remainingData - value.length
        : 0;

    this._currentPosition += value.length;

    return value;
  }

  *_readData() {
    let data;

    do {
      data = yield; // if out of data, accept new data in the .next() call
    } while (!data || data.length === 0);

    this._stats.addCurrentBytesRemaining(data.length);
    return data;
  }
}

module.exports = MetadataParser;


/***/ }),

/***/ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/OggMetadataParser.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/OggMetadataParser.js ***!
  \**********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* Copyright 2020-2021 Ethan Halsall
    This file is part of icecast-metadata-js.

    icecast-metadata-js free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    icecast-metadata-js distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/

const Decoder = (__webpack_require__(/*! util */ "./node_modules/util/util.js").TextDecoder) || TextDecoder;
const MetadataParser = __webpack_require__(/*! ./MetadataParser */ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/MetadataParser.js");

/**
 * @description Parses OGG metadata from an Icecast stream
 * @protected
 * @see IcecastMetadataReader
 */
class OggMetadataParser extends MetadataParser {
  constructor(params) {
    super(params);

    this._decoder = new Decoder("utf-8");
    this._generator = this._oggParser();
    this._generator.next();
    this._isContinuePacket = false;
  }

  *_oggParser() {
    if (yield* this._hasOggPage()) {
      const codecMatcher = yield* this._identifyCodec();
      if (codecMatcher) {
        while (yield* this._hasOggPage()) {
          if (!this._isContinuePacket) yield* this._getMetadata(codecMatcher);
          yield* this._getStream();
        }
      }
    }

    this._remainingData = Infinity;
    yield* this._getStream();
  }

  _getUint32(data, offset = 0) {
    return new DataView(
      Uint8Array.from([...data.subarray(offset, offset + 4)]).buffer
    ).getUint32(0, true);
  }

  _matchBytes(matchString, bytes) {
    return String.fromCharCode(...bytes).match(matchString);
  }

  *_hasOggPage() {
    // Bytes (1-4 of 28)
    // Frame sync (must equal OggS): `AAAAAAAA|AAAAAAAA|AAAAAAAA|AAAAAAAA`:
    // Byte (5 of 28) stream_structure_version
    // Byte (6 of 28)
    // * `00000...`: All zeros
    // * `.....C..`: (0 no, 1 yes) last page of logical bitstream (eos)
    // * `......D.`: (0 no, 1 yes) first page of logical bitstream (bos)
    // * `.......E`: (0 no, 1 yes) continued packet
    let syncBytes = [];
    while (syncBytes.length <= 65307) {
      // max ogg page size
      const bytes = yield* super._getNextValue(6); // Sync with OGG page without sending stream data
      if (
        bytes[0] === 0x4f &&
        bytes[1] === 0x67 &&
        bytes[2] === 0x67 &&
        bytes[3] === 0x53 &&
        !(bytes[5] & 0b11111000)
      ) {
        this._isContinuePacket = bytes[5] & 0b00000001;
        this._currentPosition -= 6;
        this._remainingData += 6;
        this._stats._totalBytesRead -= 6;
        this._stats._currentBytesRemaining += 6;
        break;
      }
      syncBytes.push(bytes[0]);

      this._currentPosition -= 4;
      this._stats._totalBytesRead -= 4;
      this._stats._currentBytesRemaining += 4;
    }

    if (syncBytes.length) yield* this._sendStream(Uint8Array.from(syncBytes));

    if (syncBytes.length > 65307) {
      this._logError(
        "This stream is not an OGG stream. No OGG metadata will be returned.",
        "See https://github.com/eshaz/icecast-metadata-js for information on OGG metadata."
      );
      this._onMetadataFailed("ogg");
      return false;
    }

    const baseOggPage = yield* this._getNextValue(27);
    // Byte (27 of 28)
    // * `JJJJJJJJ`: Number of page segments in the segment table
    const oggPageSegments = yield* this._getNextValue(baseOggPage[26]);

    this._remainingData = oggPageSegments.reduce(
      (acc, octet) => acc + octet,
      0
    );
    return true;
  }

  *_identifyCodec() {
    const data = yield* this._getNextValue(8);

    yield* this._getStream();

    if (this._matchBytes(/\x7fFLAC/, data.subarray(0, 5))) {
      return { regex: /^[\x84|\x04]/, length: 4 };
    } else if (this._matchBytes(/OpusHead/, data.subarray(0, 8))) {
      return { regex: /OpusTags/, length: 8 };
    } else if (this._matchBytes(/\x01vorbis/, data.subarray(0, 7))) {
      return { regex: /\x03vorbis/, length: 7 };
    }
  }

  *_getMetadata({ regex, length }) {
    if (this._matchBytes(regex, yield* this._getNextValue(length))) {
      yield* this._sendMetadata(yield* this._readVorbisComment());
    }
  }

  *_getStream() {
    while (this._remainingData) {
      yield* this._getNextValue();
    }
  }

  *_getNextValue(length) {
    const value = yield* super._getNextValue(length);

    yield* this._sendStream(value);
    return value;
  }

  *_readData() {
    const data = yield* super._readData();
    this._stats.currentStreamBytesRemaining = data.length;
    return data;
  }

  *_readVorbisComment() {
    /*
    1) [vendor_length] = read an unsigned integer of 32 bits
    2) [vendor_string] = read a UTF-8 vector as [vendor_length] octets
    3) [user_comment_list_length] = read an unsigned integer of 32 bits
    4) iterate [user_comment_list_length] times {
       5) [length] = read an unsigned integer of 32 bits
       6) this iteration's user comment = read a UTF-8 vector as [length] octets
    }
    7) [framing_bit] = read a single bit as boolean
    8) if ( [framing_bit] unset or end of packet ) then ERROR
    9) done.
    */
    const vendorStringLength = this._getUint32(yield* this._getNextValue(4));
    this._stats.addMetadataBytes(4);

    const vendorString = this._decoder.decode(
      yield* this._getNextValue(vendorStringLength)
    );
    this._stats.addMetadataBytes(vendorStringLength);

    const commentListLength = this._getUint32(yield* this._getNextValue(4));
    this._stats.addMetadataBytes(4);

    const comments = [];
    for (let i = 0; i < commentListLength; i++) {
      const commentLength = yield* this._getNextValue(4);
      this._stats.addMetadataBytes(4);

      comments.push(yield* this._getNextValue(this._getUint32(commentLength)));
      this._stats.addMetadataBytes(comments[comments.length - 1].length);
    }

    this._stats.currentMetadataBytesRemaining = 0;

    return comments.reduce(
      (metadata, comment) => {
        const delimiter = comment.indexOf(0x3d);
        // prettier-ignore
        const key = String.fromCharCode(...comment.subarray(0, delimiter)).toUpperCase();
        const val = this._decoder.decode(comment.subarray(delimiter + 1));

        metadata[key] = metadata[key] ? `${metadata[key]}; ${val}` : val;
        return metadata;
      },
      { VENDOR_STRING: vendorString }
    );
  }
}

module.exports = OggMetadataParser;


/***/ }),

/***/ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/Stats.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/Stats.js ***!
  \**********************************************************************************************************/
/***/ ((module) => {

/* Copyright 2020-2021 Ethan Halsall
    This file is part of icecast-metadata-js.

    icecast-metadata-js free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    icecast-metadata-js distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/

class Stats {
  constructor() {
    this._totalBytesRead = 0;
    this._streamBytesRead = 0;
    this._metadataLengthBytesRead = 0;
    this._metadataBytesRead = 0;

    this._currentBytesRemaining = 0;
    this._currentStreamBytesRemaining = 0;
    this._currentMetadataBytesRemaining = 0;
  }

  get stats() {
    return {
      totalBytesRead: this._totalBytesRead,
      streamBytesRead: this._streamBytesRead,
      metadataLengthBytesRead: this._metadataLengthBytesRead,
      metadataBytesRead: this._metadataBytesRead,
      currentBytesRemaining: this._currentBytesRemaining,
      currentStreamBytesRemaining: this._currentStreamBytesRemaining,
      currentMetadataBytesRemaining: this._currentMetadataBytesRemaining,
    };
  }

  set currentStreamBytesRemaining(bytes) {
    this._currentStreamBytesRemaining += bytes;
  }

  set currentMetadataBytesRemaining(bytes) {
    this._currentMetadataBytesRemaining = bytes;
  }

  addBytes(bytes) {
    this._totalBytesRead += bytes;
    this._currentBytesRemaining -= bytes;
  }

  addStreamBytes(bytes) {
    this._streamBytesRead += bytes;
    this._currentStreamBytesRemaining -= bytes;
  }

  addMetadataLengthBytes(bytes) {
    this._metadataLengthBytesRead += bytes;
  }

  addMetadataBytes(bytes) {
    this._metadataBytesRead += bytes;
    this._currentMetadataBytesRemaining -= bytes;
  }

  addCurrentBytesRemaining(bytes) {
    this._currentBytesRemaining += bytes;
  }
}

module.exports = Stats;


/***/ }),

/***/ "./node_modules/icecast-metadata-stats/src/IcecastMetadataStats.js":
/*!*************************************************************************!*\
  !*** ./node_modules/icecast-metadata-stats/src/IcecastMetadataStats.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IcecastMetadataStats)
/* harmony export */ });
/* harmony import */ var icecast_metadata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! icecast-metadata-js */ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/browser.js");
/**
 * @license
 * @see https://github.com/eshaz/icecast-metadata-js
 * @copyright 2021 Ethan Halsall
 *  This file is part of icecast-metadata-stats.
 *
 *  icecast-metadata-stats free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Lesser General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  icecast-metadata-stats distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public License
 *  along with this program.  If not, see <https://www.gnu.org/licenses/>
 */



const noOp = () => {};

const STOPPED = "stopped";
const RUNNING = "running";
const FETCHING = "fetching";

const p = new WeakMap();

// variables
const icyController = Symbol();
const icyFetchStatus = Symbol();

const oggController = Symbol();
const oggFetchStatus = Symbol();

const icestatsEndpoint = Symbol();
const icestatsController = Symbol();
const icestatsFetchStatus = Symbol();

const statsEndpoint = Symbol();
const statsController = Symbol();
const statsFetchStatus = Symbol();

const nextsongsEndpoint = Symbol();
const nextsongsController = Symbol();
const nextsongsFetchStatus = Symbol();

const sevenhtmlEndpoint = Symbol();
const sevenhtmlController = Symbol();
const sevenhtmlFetchStatus = Symbol();

const streamEndpoint = Symbol();
const icyMetaInt = Symbol();
const icyCharacterEncoding = Symbol();
const icyDetectionTimeout = Symbol();
const sources = Symbol();
const interval = Symbol();
const onStats = Symbol();
const onStatsFetch = Symbol();

const state = Symbol();
const intervalId = Symbol();

// methods
const fetchStats = Symbol();
const getStreamMetadata = Symbol();

class IcecastMetadataStats {
  /**
   * @constructor
   * @param {URL} endpoint Stream endpoint
   * @param {object} [options] Options object
   *
   * @callback [options.onStats] Called when the automatic query completes
   * @callback [options.onStatsFetch] Called when the automatic query begins
   * @param {Array} [options.sources] List of sources to automatically query ["icy", "ogg", "icestats", "stats", "sevenhtml", "nextsongs"]
   * @param {number} [options.interval] Time in seconds to wait between automatically queries
   * @param {URL} [options.icestatsEndpoint] Endpoint for the `status-json.xsl` source
   * @param {URL} [options.statsEndpoint] Endpoint for the `stats` source
   * @param {URL} [options.nextsongsEndpoint] Endpoint for the `nextsongs` source
   * @param {URL} [options.sevenhtmlEndpoint] Endpoint for the `7.html` source
   * @param {number} [options.icyMetaInt] Manually sets the ICY metadata interval
   * @param {string} [options.icyCharacterEncoding] Character encoding to use for ICY metadata (defaults to "utf-8")
   * @param {number} [options.icyDetectionTimeout] Time in milliseconds to search for ICY metadata
   */
  constructor(endpoint, options = {}) {
    const serverPath = endpoint.split("/").slice(0, -1).join("/");

    // prettier-ignore
    p.set(this, {
      [streamEndpoint]: endpoint,
      [icestatsEndpoint]: options.icestatsEndpoint || `${serverPath}/status-json.xsl`,
      [statsEndpoint] : options.statsEndpoint || `${serverPath}/stats`,
      [nextsongsEndpoint] : options.nextsongsEndpoint || `${serverPath}/nextsongs`,
      [sevenhtmlEndpoint] : options.sevenhtmlEndpoint || `${serverPath}/7.html`,
      [sources]: options.sources || [],
      [interval]: (options.interval || 30) * 1000,
      [onStats]: options.onStats || noOp,
      [onStatsFetch]: options.onStatsFetch || noOp,
      [icyMetaInt]: options.icyMetaInt,
      [icyCharacterEncoding]: options.icyCharacterEncoding,
      [icyDetectionTimeout]: options.icyDetectionTimeout,
      [icyController]: new AbortController(),
      [oggController]: new AbortController(),
      [icestatsController]: new AbortController(),
      [statsController]: new AbortController(),
      [nextsongsController]: new AbortController(),
      [sevenhtmlController]: new AbortController(),
      [state]: STOPPED,
    });
  }

  static xml2Json(xml) {
    const deserialize = (xml) =>
      new DOMParser().parseFromString(xml, "application/xml");

    const serialize = (element) => {
      if (!element.children.length) {
        return Number.isNaN(Number(element.innerHTML))
          ? element.innerHTML
          : Number(element.innerHTML);
      }

      const json = {};

      for (const child of element.children) {
        if (child.nodeName in json) {
          if (Array.isArray(json[child.nodeName])) {
            json[child.nodeName].push(serialize(child));
          } else {
            json[child.nodeName] = [json[child.nodeName], serialize(child)];
          }
        } else {
          json[child.nodeName] = serialize(child);
        }
      }

      return json;
    };

    return serialize(deserialize(xml));
  }

  /**
   * @returns The current state ["stopped", "running", "fetching"]
   */
  get state() {
    return p.get(this)[state];
  }

  /**
   * @returns The generated `status-json.xsl` endpoint
   */
  get icestatsEndpoint() {
    return p.get(this)[icestatsEndpoint];
  }

  /**
   * @returns The generated `stats` endpoint
   */
  get statsEndpoint() {
    return p.get(this)[statsEndpoint];
  }

  /**
   * @returns The generated `nextsongs` endpoint
   */
  get nextsongsEndpoint() {
    return p.get(this)[nextsongsEndpoint];
  }

  /**
   * @returns The generated `7.html` endpoint
   */
  get sevenhtmlEndpoint() {
    return p.get(this)[sevenhtmlEndpoint];
  }

  /**
   * @description Starts automatically fetching stats
   */
  start() {
    if (p.get(this)[state] === STOPPED) {
      p.get(this)[state] = RUNNING;

      this.fetch().then(p.get(this)[onStats]);

      p.get(this)[intervalId] = setInterval(() => {
        this.fetch().then(p.get(this)[onStats]);
      }, p.get(this)[interval]);
    }
  }

  /**
   * @description Stops automatically fetching stats and cancels any inprogress stats
   */
  stop() {
    if (p.get(this)[state] !== STOPPED) {
      p.get(this)[state] = STOPPED;

      clearInterval(p.get(this)[intervalId]);
      p.get(this)[icyController].abort();
      p.get(this)[oggController].abort();
      p.get(this)[icestatsController].abort();
      p.get(this)[statsController].abort();
      p.get(this)[sevenhtmlController].abort();
    }
  }

  /**
   * @description Manually fetches stats from the sources passed in to the `options.sources` parameter
   * @async
   * @returns {object} Object containing the stats from the sources
   */
  async fetch() {
    if (p.get(this)[state] !== FETCHING) {
      const oldState = p.get(this)[state];

      p.get(this)[state] = FETCHING;
      p.get(this)[onStatsFetch](p.get(this)[sources]);

      const promises = [];
      if (p.get(this)[sources].includes("icestats"))
        promises.push(this.getIcestats());
      if (p.get(this)[sources].includes("sevenhtml"))
        promises.push(this.getSevenhtml());
      if (p.get(this)[sources].includes("stats"))
        promises.push(this.getStats());
      if (p.get(this)[sources].includes("nextsongs"))
        promises.push(this.getNextsongs());
      if (p.get(this)[sources].includes("icy"))
        promises.push(this.getIcyMetadata());
      if (p.get(this)[sources].includes("ogg"))
        promises.push(this.getOggMetadata());

      const stats = await Promise.all(promises).then((stats) =>
        stats.reduce((acc, stat) => ({ ...acc, ...stat }), {})
      );

      p.get(this)[state] =
        p.get(this)[state] !== FETCHING ? p.get(this)[state] : oldState;

      return stats;
    }
  }

  /**
   * @description Fetches the data from the `/status-json.xsl` endpoint
   * @async
   * @returns {object} Object containing results of `/status-json.xsl`
   */
  async getIcestats() {
    return this[fetchStats]({
      status: icestatsFetchStatus,
      endpoint: icestatsEndpoint,
      controller: icestatsController,
      mapper: (res) => res.json(),
    }).then((stats) => ({ icestats: stats && stats.icestats }));
  }

  /*
  <HTML><meta http-equiv="Pragma" content="no-cache"></head><body>350,1,132,1000,41,128,Dj Mixes Sety</body></html>
  ,141,1000,50,128,Gra AutoPilot audycje Energy 2000</body></html>
  ,27,1000,8,128,Gra Wavelogic audycje Rave With The Wave</body></html>
  ,578,1000,233,128,youtube.com/RadioPartyOfficial</body></html>
  ,15,1000,5,64,youtube.com/RadioPartyOfficial</body></html>
  */

  // http://wiki.winamp.com/wiki/SHOUTcast_DNAS_Server_2_XML_Reponses#Equivalent_of_7.html
  // CURRENTLISTENERS STREAMSTATUS PEAKLISTENERS MAXLISTENERS UNIQUELISTENERS BITRATE SONGTITLE

  /**
   * @description Fetches the data from the `/7.html` endpoint
   * @async
   * @returns {object} Object containing results of `/7.html`
   */
  async getSevenhtml() {
    return this[fetchStats]({
      status: sevenhtmlFetchStatus,
      endpoint: sevenhtmlEndpoint,
      controller: sevenhtmlController,
      mapper: async (res) =>
        (await res.text()).match(/(.*?)<\/body>/gi).map((s) => {
          const stats = s
            .match(/(<body>|,)(?<stats>.*)<\/body>/i)
            .groups.stats.split(",");

          return stats.length === 7
            ? {
                StreamTitle: stats[6],
                currentListeners: parseInt(stats[4]),
                peakListeners: parseInt(stats[2]),
                maxListeners: parseInt(stats[3]),
                bitrate: parseInt(stats[5]),
                status: parseInt(stats[1]),
                serverListeners: parseInt(stats[0]),
              }
            : {
                StreamTitle: stats[4],
                currentListeners: parseInt(stats[2]),
                peakListeners: parseInt(stats[0]),
                maxListeners: parseInt(stats[1]),
                bitrate: parseInt(stats[3]),
              };
        }),
    }).then((sevenhtml) => ({
      sevenhtml,
    }));
  }

  // http://wiki.winamp.com/wiki/SHOUTcast_DNAS_Server_2_XML_Reponses#General_Server_Summary
  /**
   * @description Fetches the data from the `/stats` endpoint
   * @async
   * @returns {object} Object containing results of `/stats`
   */
  async getStats() {
    return this[fetchStats]({
      status: statsFetchStatus,
      endpoint: statsEndpoint,
      controller: statsController,
      mapper: async (res) =>
        IcecastMetadataStats.xml2Json(await res.text()).SHOUTCASTSERVER
          .STREAMSTATS,
    }).then((stats) => ({
      stats,
    }));
  }

  // http://wiki.winamp.com/wiki/SHOUTcast_DNAS_Server_2_XML_Reponses#Nextsongs
  /**
   * @description Fetches the data from the `/nextsongs` endpoint
   * @async
   * @returns {object} Object containing results of `/nextsongs`
   */
  async getNextsongs() {
    return this[fetchStats]({
      status: nextsongsFetchStatus,
      endpoint: nextsongsEndpoint,
      controller: nextsongsController,
      mapper: async (res) =>
        IcecastMetadataStats.xml2Json(await res.text()).SHOUTCASTSERVER
          .NEXTSONGS,
    }).then((nextsongs) => ({
      nextsongs,
    }));
  }

  /**
   * @description Fetches the first ICY metadata update from the stream
   * @async
   * @returns {object} Object containing ICY metadata
   */
  async getIcyMetadata() {
    return this[getStreamMetadata]({
      status: icyFetchStatus,
      endpoint: streamEndpoint,
      controller: icyController,
      metadataType: "icy",
      headers: { "Icy-MetaData": 1 },
    });
  }

  /**
   * @description Fetches the first Ogg metadata update from the stream
   * @async
   * @returns {object} Object containing Ogg metadata
   */
  async getOggMetadata() {
    return this[getStreamMetadata]({
      status: oggFetchStatus,
      endpoint: streamEndpoint,
      controller: oggController,
      metadataType: "ogg",
    });
  }

  async [getStreamMetadata]({
    status,
    endpoint,
    controller,
    headers,
    metadataType,
  }) {
    return this[fetchStats]({
      status,
      endpoint,
      controller,
      headers,
      mapper: async (res) =>
        new Promise((resolve) => {
          new icecast_metadata_js__WEBPACK_IMPORTED_MODULE_0__.IcecastReadableStream(res, {
            onMetadata: ({ metadata }) => {
              p.get(this)[controller].abort();
              resolve(metadata);
            },
            onMetadataFailed: () => {
              p.get(this)[controller].abort();
              resolve();
            },
            metadataTypes: metadataType,
            icyMetaInt: p.get(this)[icyMetaInt],
            icyCharacterEncoding: p.get(this)[icyCharacterEncoding],
            icyDetectionTimeout: p.get(this)[icyDetectionTimeout],
          }).startReading();
        }),
    }).then((metadata) => ({ [metadataType]: metadata }));
  }

  async [fetchStats]({ status, endpoint, controller, mapper, headers = {} }) {
    if (!p.get(this)[status]) {
      p.get(this)[status] = true;
      return fetch(p.get(this)[endpoint], {
        method: "GET",
        headers,
        signal: p.get(this)[controller].signal,
      })
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP Error ${res.status}`);
          return res;
        })
        .then(mapper)
        .catch((e) => {
          if (e.name !== "AbortError") {
            console.warn(`Failed to fetch ${p.get(this)[endpoint]}`, e);
          }
        })
        .finally(() => {
          p.get(this)[status] = false;
          p.get(this)[controller] = new AbortController();
        });
    }
  }
}


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/single-items/TV.vue?vue&type=style&index=0&id=53a28649&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/single-items/TV.vue?vue&type=style&index=0&id=53a28649&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/style-loader/dist/cjs.js):\nTypeError: (0 , _schemaUtils.validate) is not a function\n    at Object.loader (D:\\InforaamWork\\ipmx-indiemedia-plugin\\node_modules\\style-loader\\dist\\index.js:25:29)");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/style-loader/dist/cjs.js):\nTypeError: (0 , _schemaUtils.validate) is not a function\n    at Object.loader (D:\\InforaamWork\\ipmx-indiemedia-plugin\\node_modules\\style-loader\\dist\\index.js:25:29)");

/***/ }),

/***/ "./node_modules/vuetify/src/components/VSlider/VSlider.sass":
/*!******************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VSlider/VSlider.sass ***!
  \******************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/style-loader/dist/cjs.js):\nTypeError: (0 , _schemaUtils.validate) is not a function\n    at Object.loader (D:\\InforaamWork\\ipmx-indiemedia-plugin\\node_modules\\style-loader\\dist\\index.js:25:29)");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/style-loader/dist/cjs.js):\nTypeError: (0 , _schemaUtils.validate) is not a function\n    at Object.loader (D:\\InforaamWork\\ipmx-indiemedia-plugin\\node_modules\\style-loader\\dist\\index.js:25:29)");

/***/ }),

/***/ "./node_modules/util/node_modules/inherits/inherits_browser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/util/node_modules/inherits/inherits_browser.js ***!
  \*********************************************************************/
/***/ ((module) => {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/***/ ((module) => {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/util/node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;


/***/ }),

/***/ "./resources/js/components/artist/EarningDetails.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/artist/EarningDetails.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EarningDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EarningDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/artist/EarningDetails.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EarningDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dialogs/admin/edit/Artist.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/dialogs/admin/edit/Artist.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Artist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Artist.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialogs/admin/edit/Artist.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Artist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/elements/single-items/TV.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/elements/single-items/TV.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TV_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TV.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/single-items/TV.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TV_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterPlayerLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FooterPlayerLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterPlayerLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/player/audio-player/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/player/audio-player/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhonePlayerLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhonePlayerLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhonePlayerLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/elements/single-items/TV.vue?vue&type=style&index=0&id=53a28649&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/elements/single-items/TV.vue?vue&type=style&index=0&id=53a28649&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TV_vue_vue_type_style_index_0_id_53a28649_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TV.vue?vue&type=style&index=0&id=53a28649&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/single-items/TV.vue?vue&type=style&index=0&id=53a28649&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TV_vue_vue_type_style_index_0_id_53a28649_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TV_vue_vue_type_style_index_0_id_53a28649_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TV_vue_vue_type_style_index_0_id_53a28649_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TV_vue_vue_type_style_index_0_id_53a28649_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterPlayerLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FooterPlayerLayout.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterPlayerLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterPlayerLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterPlayerLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterPlayerLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhonePlayerLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhonePlayerLayout.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhonePlayerLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhonePlayerLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhonePlayerLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhonePlayerLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/components/artist/EarningDetails.vue?vue&type=template&id=5d46bc85&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/artist/EarningDetails.vue?vue&type=template&id=5d46bc85& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EarningDetails_vue_vue_type_template_id_5d46bc85___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EarningDetails_vue_vue_type_template_id_5d46bc85___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EarningDetails_vue_vue_type_template_id_5d46bc85___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EarningDetails.vue?vue&type=template&id=5d46bc85& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/artist/EarningDetails.vue?vue&type=template&id=5d46bc85&");


/***/ }),

/***/ "./resources/js/components/dialogs/admin/edit/Artist.vue?vue&type=template&id=4f5547ad&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/dialogs/admin/edit/Artist.vue?vue&type=template&id=4f5547ad& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Artist_vue_vue_type_template_id_4f5547ad___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Artist_vue_vue_type_template_id_4f5547ad___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Artist_vue_vue_type_template_id_4f5547ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Artist.vue?vue&type=template&id=4f5547ad& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialogs/admin/edit/Artist.vue?vue&type=template&id=4f5547ad&");


/***/ }),

/***/ "./resources/js/components/elements/single-items/TV.vue?vue&type=template&id=53a28649&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/elements/single-items/TV.vue?vue&type=template&id=53a28649&scoped=true& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TV_vue_vue_type_template_id_53a28649_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TV_vue_vue_type_template_id_53a28649_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TV_vue_vue_type_template_id_53a28649_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TV.vue?vue&type=template&id=53a28649&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/single-items/TV.vue?vue&type=template&id=53a28649&scoped=true&");


/***/ }),

/***/ "./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=template&id=4f0e5cda&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=template&id=4f0e5cda& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterPlayerLayout_vue_vue_type_template_id_4f0e5cda___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterPlayerLayout_vue_vue_type_template_id_4f0e5cda___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterPlayerLayout_vue_vue_type_template_id_4f0e5cda___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FooterPlayerLayout.vue?vue&type=template&id=4f0e5cda& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=template&id=4f0e5cda&");


/***/ }),

/***/ "./resources/js/components/player/audio-player/Index.vue?vue&type=template&id=50c4b64e&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/player/audio-player/Index.vue?vue&type=template&id=50c4b64e& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_50c4b64e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_50c4b64e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_50c4b64e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=50c4b64e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/Index.vue?vue&type=template&id=50c4b64e&");


/***/ }),

/***/ "./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=template&id=1c4cddf5&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=template&id=1c4cddf5& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhonePlayerLayout_vue_vue_type_template_id_1c4cddf5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhonePlayerLayout_vue_vue_type_template_id_1c4cddf5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhonePlayerLayout_vue_vue_type_template_id_1c4cddf5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhonePlayerLayout.vue?vue&type=template&id=1c4cddf5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=template&id=1c4cddf5&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/artist/EarningDetails.vue?vue&type=template&id=5d46bc85&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/artist/EarningDetails.vue?vue&type=template&id=5d46bc85& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { staticClass: "p-3" },
    [
      _c(
        "v-card-title",
        [
          _c(
            "v-icon",
            { staticClass: "mr-3", attrs: { color: "primary", "x-large": "" } },
            [_vm._v("$vuetify.icons.currency-usd")]
          ),
          _vm._v("\n        " + _vm._s(_vm.$t("Earnings")) + "\n        "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "total-earnings__value price bold success--text" },
            [
              _vm._v(
                "\n            " +
                  _vm._s(
                    _vm.price(_vm.artist.funds) + _vm.defaultCurrency.symbol
                  ) +
                  "\n        "
              ),
            ]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c("div", { staticClass: "title" }, [
            _vm._v("\n            " + _vm._s(_vm.$t("Details")) + "\n        "),
          ]),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "details" },
            [
              _c(
                "v-container",
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", lg: "6" } },
                        [
                          _c(
                            "v-card",
                            [
                              _c(
                                "v-container",
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c(
                                            "v-card-title",
                                            [
                                              _vm._v(
                                                "\n                                            " +
                                                  _vm._s(_vm.$t("Sales")) +
                                                  "\n                                            "
                                              ),
                                              _c("v-spacer"),
                                              _vm._v(" "),
                                              _c("v-spacer"),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "total-earnings__value bold price small success--text",
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                                " +
                                                      _vm._s(
                                                        _vm.price(
                                                          _vm.totalSalesProfit
                                                        ) +
                                                          _vm.defaultCurrency
                                                            .symbol
                                                      ) +
                                                      "\n                                            "
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("v-divider"),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("v-simple-table", {
                                            scopedSlots: _vm._u([
                                              {
                                                key: "default",
                                                fn: function () {
                                                  return [
                                                    _c("thead", [
                                                      _c("tr", [
                                                        _c(
                                                          "th",
                                                          {
                                                            staticClass:
                                                              "text-left",
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                            " +
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "Product"
                                                                  )
                                                                ) +
                                                                "\n                                                        "
                                                            ),
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "th",
                                                          {
                                                            staticClass:
                                                              "text-left",
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                            " +
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "License"
                                                                  )
                                                                ) +
                                                                "\n                                                        "
                                                            ),
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "th",
                                                          {
                                                            staticClass:
                                                              "text-left",
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                            " +
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "Price"
                                                                  )
                                                                ) +
                                                                "\n                                                        "
                                                            ),
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "th",
                                                          {
                                                            staticClass:
                                                              "text-left",
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                            " +
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "Earned"
                                                                  )
                                                                ) +
                                                                "\n                                                        "
                                                            ),
                                                          ]
                                                        ),
                                                      ]),
                                                    ]),
                                                    _vm._v(" "),
                                                    _c(
                                                      "tbody",
                                                      _vm._l(
                                                        _vm.artist.sales,
                                                        function (sale, n) {
                                                          return _c(
                                                            "tr",
                                                            { key: n },
                                                            [
                                                              _c(
                                                                "td",
                                                                [
                                                                  _c(
                                                                    "v-list-item",
                                                                    [
                                                                      _c(
                                                                        "v-list-item-avatar",
                                                                        {
                                                                          staticClass:
                                                                            "asset-shadow",
                                                                          attrs:
                                                                            {
                                                                              width:
                                                                                "35",
                                                                              height:
                                                                                "35",
                                                                              rounded:
                                                                                "0",
                                                                            },
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "img",
                                                                            {
                                                                              attrs:
                                                                                {
                                                                                  src: sale.cover,
                                                                                },
                                                                            }
                                                                          ),
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "v-list-item-content",
                                                                        [
                                                                          _c(
                                                                            "v-list-item-title",
                                                                            [
                                                                              _vm._v(
                                                                                _vm._s(
                                                                                  sale.itemTitle
                                                                                )
                                                                              ),
                                                                            ]
                                                                          ),
                                                                        ],
                                                                        1
                                                                      ),
                                                                    ],
                                                                    1
                                                                  ),
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "td",
                                                                {
                                                                  staticClass:
                                                                    "text-left",
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                            " +
                                                                      _vm._s(
                                                                        sale.priceName
                                                                      ) +
                                                                      "\n                                                        "
                                                                  ),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "td",
                                                                {
                                                                  staticClass:
                                                                    "text-left",
                                                                },
                                                                [
                                                                  _c(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "price success--text bold",
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\n                                                                " +
                                                                          _vm._s(
                                                                            _vm.price(
                                                                              sale.amount
                                                                            ) +
                                                                              sale.priceSymbol
                                                                          ) +
                                                                          "\n                                                            "
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "td",
                                                                {
                                                                  staticClass:
                                                                    "text-left",
                                                                },
                                                                [
                                                                  _c(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "price success--text bold",
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\n                                                                " +
                                                                          _vm._s(
                                                                            _vm.price(
                                                                              (sale.amount *
                                                                                sale.artist_cut) /
                                                                                100
                                                                            ) +
                                                                              sale.priceSymbol
                                                                          ) +
                                                                          "\n                                                            "
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          )
                                                        }
                                                      ),
                                                      0
                                                    ),
                                                  ]
                                                },
                                                proxy: true,
                                              },
                                            ]),
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", lg: "6" } },
                        [
                          _c(
                            "v-card",
                            [
                              _c(
                                "v-container",
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c(
                                            "v-card-title",
                                            [
                                              _vm._v(
                                                "\n                                            " +
                                                  _vm._s(_vm.$t("Royalties")) +
                                                  "\n                                            "
                                              ),
                                              _c("v-spacer"),
                                              _vm._v(" "),
                                              _c("v-spacer"),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "total-earnings__value price small bold success--text",
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                                " +
                                                      _vm._s(
                                                        _vm.price(
                                                          _vm.totalRoyaltiesProfit
                                                        ) +
                                                          _vm.defaultCurrency
                                                            .symbol
                                                      ) +
                                                      "\n                                            "
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("v-divider"),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("v-simple-table", {
                                            scopedSlots: _vm._u([
                                              {
                                                key: "default",
                                                fn: function () {
                                                  return [
                                                    _c("thead", [
                                                      _c("tr", [
                                                        _c(
                                                          "th",
                                                          {
                                                            staticClass:
                                                              "text-left",
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                            " +
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "Total Plays"
                                                                  )
                                                                ) +
                                                                "\n                                                        "
                                                            ),
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "th",
                                                          {
                                                            staticClass:
                                                              "text-left",
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                            " +
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "Artist Royalty"
                                                                  )
                                                                ) +
                                                                "\n                                                        "
                                                            ),
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "th",
                                                          {
                                                            staticClass:
                                                              "text-left",
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                            " +
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "Total"
                                                                  )
                                                                ) +
                                                                "\n                                                        "
                                                            ),
                                                          ]
                                                        ),
                                                      ]),
                                                    ]),
                                                    _vm._v(" "),
                                                    _c(
                                                      "tbody",
                                                      _vm._l(
                                                        _vm.artist.royalties,
                                                        function (
                                                          royaltyGroup,
                                                          i
                                                        ) {
                                                          return _c(
                                                            "tr",
                                                            { key: i },
                                                            [
                                                              _c("td", [
                                                                _vm._v(
                                                                  "\n                                                            " +
                                                                    _vm._s(
                                                                      royaltyGroup.total_royalties
                                                                    ) +
                                                                    "\n                                                        "
                                                                ),
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("td", [
                                                                _vm._v(
                                                                  "\n                                                            " +
                                                                    _vm._s(
                                                                      _vm.price(
                                                                        royaltyGroup.price
                                                                      ) +
                                                                        _vm
                                                                          .defaultCurrency
                                                                          .symbol
                                                                    ) +
                                                                    "\n                                                            " +
                                                                    _vm._s(
                                                                      "(" +
                                                                        _vm.$t(
                                                                          "for each 100 play"
                                                                        ) +
                                                                        ")"
                                                                    ) +
                                                                    "\n                                                        "
                                                                ),
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("td", [
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "price success--text bold",
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\n                                                                " +
                                                                        _vm._s(
                                                                          _vm.price(
                                                                            royaltyGroup.total_royalties *
                                                                              (royaltyGroup.price /
                                                                                100)
                                                                          ) +
                                                                            _vm
                                                                              .defaultCurrency
                                                                              .symbol
                                                                        ) +
                                                                        "\n                                                            "
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]),
                                                            ]
                                                          )
                                                        }
                                                      ),
                                                      0
                                                    ),
                                                  ]
                                                },
                                                proxy: true,
                                              },
                                            ]),
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c(
                            "v-card",
                            [
                              _c("v-card-title", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.$t("Previous Payouts")) +
                                    "\n                            "
                                ),
                              ]),
                              _vm._v(" "),
                              _vm.payedPayouts && _vm.payedPayouts.length
                                ? _c("v-simple-table", {
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function () {
                                            return [
                                              _c("thead", [
                                                _c("tr", [
                                                  _c(
                                                    "th",
                                                    {
                                                      staticClass: "text-left",
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                                Payout N°\n                                            "
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "th",
                                                    {
                                                      staticClass: "text-left",
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                                Date\n                                            "
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "th",
                                                    {
                                                      staticClass: "text-left",
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                                Amount\n                                            "
                                                      ),
                                                    ]
                                                  ),
                                                ]),
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "tbody",
                                                _vm._l(
                                                  _vm.payedPayouts,
                                                  function (payout) {
                                                    return _c(
                                                      "tr",
                                                      { key: payout.id },
                                                      [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "text-left",
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                " +
                                                                _vm._s(
                                                                  payout.id
                                                                ) +
                                                                "\n                                            "
                                                            ),
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "text-left",
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                " +
                                                                _vm._s(
                                                                  _vm
                                                                    .moment(
                                                                      payout.created_at
                                                                    )
                                                                    .format(
                                                                      "ll"
                                                                    )
                                                                ) +
                                                                "\n                                            "
                                                            ),
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "text-left bold error--text",
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                " +
                                                                _vm._s(
                                                                  -_vm.price(
                                                                    payout.amount
                                                                  ) +
                                                                    _vm
                                                                      .defaultCurrency
                                                                      .symbol
                                                                ) +
                                                                "\n                                            "
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    )
                                                  }
                                                ),
                                                0
                                              ),
                                            ]
                                          },
                                          proxy: true,
                                        },
                                      ],
                                      null,
                                      false,
                                      1689849607
                                    ),
                                  })
                                : _c("div", { staticClass: "text-center" }, [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(_vm.$t("No previous payouts")) +
                                        "\n                            "
                                    ),
                                  ]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c(
                            "v-card",
                            [
                              _c("v-card-title", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.$t("Summary")) +
                                    "\n                            "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("v-simple-table", {
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function () {
                                      return [
                                        _c("thead", [
                                          _c("tr", [
                                            _c("th", {
                                              staticClass: "text-center",
                                            }),
                                            _vm._v(" "),
                                            _c("th", {
                                              staticClass: "text-center",
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "th",
                                              { staticClass: "text-right" },
                                              [
                                                _vm._v(
                                                  "\n                                                " +
                                                    _vm._s(
                                                      _vm.$t("Account Funds")
                                                    ) +
                                                    "\n                                            "
                                                ),
                                              ]
                                            ),
                                          ]),
                                        ]),
                                        _vm._v(" "),
                                        _c("tbody", [
                                          _c("tr", [
                                            _c("td"),
                                            _vm._v(" "),
                                            _c("td"),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              {
                                                staticClass:
                                                  "text-right bold success--text",
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                                " +
                                                    _vm._s(
                                                      _vm.price(
                                                        _vm.artist.funds
                                                      ) +
                                                        _vm.defaultCurrency
                                                          .symbol
                                                    ) +
                                                    "\n                                            "
                                                ),
                                              ]
                                            ),
                                          ]),
                                        ]),
                                      ]
                                    },
                                    proxy: true,
                                  },
                                ]),
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialogs/admin/edit/Artist.vue?vue&type=template&id=4f5547ad&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialogs/admin/edit/Artist.vue?vue&type=template&id=4f5547ad& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("edit-dialog", {
    attrs: { loading: _vm.isLoading, editing: "artist" },
    on: { callToAction: _vm.saveArtist, cancel: _vm.closeWindow },
    scopedSlots: _vm._u([
      {
        key: "body",
        fn: function () {
          return [
            _c(
              "v-container",
              [
                _c(
                  "v-row",
                  [
                    _c(
                      "v-col",
                      { attrs: { cols: "auto" } },
                      [
                        _c("upload-image", {
                          attrs: {
                            source: _vm.artist.avatar || _vm.defaultAvatarPath,
                          },
                          on: {
                            imageReady: function ($event) {
                              return _vm.imageReady($event)
                            },
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      [
                        _c(
                          "v-container",
                          [
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "6" } },
                                  [
                                    _c("v-text-field", {
                                      attrs: { label: _vm.$t("Displayname") },
                                      model: {
                                        value: _vm.editedArtist.displayname,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.editedArtist,
                                            "displayname",
                                            $$v
                                          )
                                        },
                                        expression: "editedArtist.displayname",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                !_vm.editedArtist.new
                                  ? [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", sm: "6" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: _vm.$t("Firstname"),
                                            },
                                            model: {
                                              value: _vm.editedArtist.firstname,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.editedArtist,
                                                  "firstname",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "editedArtist.firstname",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", sm: "6" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: _vm.$t("Lastname"),
                                            },
                                            model: {
                                              value: _vm.editedArtist.lastname,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.editedArtist,
                                                  "lastname",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "editedArtist.lastname",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", sm: "6" } },
                                        [
                                          _c("v-select", {
                                            attrs: {
                                              label: _vm.$t("Country"),
                                              items: _vm.countriesList,
                                            },
                                            model: {
                                              value: _vm.editedArtist.country,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.editedArtist,
                                                  "country",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "editedArtist.country",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", sm: "6" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: { label: _vm.$t("Address") },
                                            model: {
                                              value: _vm.editedArtist.address,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.editedArtist,
                                                  "address",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "editedArtist.address",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", sm: "6" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: { label: _vm.$t("Phone") },
                                            model: {
                                              value: _vm.editedArtist.phone,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.editedArtist,
                                                  "phone",
                                                  $$v
                                                )
                                              },
                                              expression: "editedArtist.phone",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", sm: "6" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: { label: _vm.$t("Email") },
                                            model: {
                                              value: _vm.editedArtist.email,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.editedArtist,
                                                  "email",
                                                  $$v
                                                )
                                              },
                                              expression: "editedArtist.email",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ]
                                  : _vm._e(),
                              ],
                              2
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm.editedArtist.user
                      ? _c(
                          "v-col",
                          { attrs: { cols: "12" } },
                          [
                            _c(
                              "v-card",
                              [
                                _c("v-card-title", [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(_vm.$t("Storage Space")) +
                                      "\n                            "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("v-divider"),
                                _vm._v(" "),
                                _c(
                                  "v-card-text",
                                  [
                                    _c(
                                      "v-container",
                                      [
                                        _c(
                                          "v-row",
                                          [
                                            _c(
                                              "v-col",
                                              { attrs: { cols: "9" } },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: _vm.$t("Size"),
                                                    type: "number",
                                                    messages: _vm.editedArtist
                                                      .used_disk_space
                                                      ? (
                                                          _vm.editedArtist
                                                            .used_disk_space /
                                                          1024 /
                                                          1024
                                                        ).toFixed(1) +
                                                        " MB " +
                                                        this.$t("used already.")
                                                      : "",
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.available_disk_space,
                                                    callback: function ($$v) {
                                                      _vm.available_disk_space =
                                                        $$v
                                                    },
                                                    expression:
                                                      "available_disk_space",
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              { attrs: { cols: "3" } },
                                              [
                                                _c("veutify-select", {
                                                  attrs: {
                                                    type: "number",
                                                    items: ["MB", "GB", "KB"],
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.available_disk_space_unit,
                                                    callback: function ($$v) {
                                                      _vm.available_disk_space_unit =
                                                        $$v
                                                    },
                                                    expression:
                                                      "\n                                                    available_disk_space_unit\n                                                ",
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        )
                      : _vm._e(),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-row",
                  [
                    _c("edit-external-links", {
                      attrs: { item: _vm.editedArtist },
                      on: {
                        spotify_link: function ($event) {
                          _vm.editedArtist.spotify_link = $event
                        },
                        youtube_link: function ($event) {
                          _vm.editedArtist.youtube_link = $event
                        },
                        soundcloud_link: function ($event) {
                          _vm.editedArtist.soundcloud_link = $event
                        },
                        itunes_link: function ($event) {
                          _vm.editedArtist.itunes_link = $event
                        },
                        deezer_link: function ($event) {
                          _vm.editedArtist.deezer_link = $event
                        },
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.$store.getters.getSettings.saas && !_vm.editedArtist.new
                  ? _c(
                      "v-row",
                      [
                        _c("ArtistEarningDetails", {
                          attrs: { artist: _vm.artist },
                        }),
                      ],
                      1
                    )
                  : _vm._e(),
              ],
              1
            ),
          ]
        },
        proxy: true,
      },
    ]),
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/single-items/TV.vue?vue&type=template&id=53a28649&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/single-items/TV.vue?vue&type=template&id=53a28649&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: { "small-screen": _vm.smallScreen }, attrs: { id: "container" } },
    [
      _c("div", { attrs: { id: "monitor" } }, [
        _c(
          "div",
          { staticClass: "small-screen__icon" },
          [
            !_vm.smallScreen
              ? _c(
                  "v-icon",
                  {
                    attrs: { title: _vm.$t("Small Window"), dark: "" },
                    on: { click: _vm.switchToSmallScreen },
                  },
                  [_vm._v("$vuetify.icons.fullscreen-exit")]
                )
              : _c(
                  "v-icon",
                  { attrs: { dark: "" }, on: { click: _vm.switchToTVScreen } },
                  [_vm._v("$vuetify.icons.fullscreen")]
                ),
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { attrs: { id: "monitorscreen" } }, [_vm._t("default")], 2),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=template&id=4f0e5cda&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=template&id=4f0e5cda& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "epico_footer-layout",
      style: {
        transform: !_vm.getUp
          ? "translateY(120px)"
          : _vm.fullScreenPlayer
          ? "translateY(-50px)"
          : "translateY(0px)",
        opacity: _vm.fullScreenPlayer ? 0.5 : 1,
      },
      attrs: { id: "player-wrapper" },
    },
    [
      _c("div", { staticClass: "epico_player-main-container" }, [
        _c(
          "div",
          { staticClass: "epico_audio-info epico_audio-info-u500h" },
          [
            _c(
              "div",
              { staticClass: "plus-container" },
              [
                _c("song-menu", {
                  attrs: {
                    item: _vm.currentAudio,
                    icon: "plus",
                    isOnPlayer: true,
                    closeOnContentClick: true,
                    disabled: _vm.currentAudio.campaign,
                  },
                  on: {
                    close: function ($event) {
                      return _vm.$store.commit("setSongMenu", null)
                    },
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "chevron-up-container px-3 pb-1",
                on: {
                  click: function ($event) {
                    _vm.fullScreenPlayer = true
                  },
                },
              },
              [
                _c("v-icon", { staticClass: "pointer" }, [
                  _vm._v("$vuetify.icons.chevron-up"),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "v-card",
              {
                staticClass: "song-img transparent ml-2",
                attrs: { elevation: "0" },
              },
              [
                _c("v-img", {
                  staticClass: "img",
                  attrs: { src: _vm.currentAudio.cover, "aspect-ratio": "1" },
                  scopedSlots: _vm._u([
                    {
                      key: "placeholder",
                      fn: function () {
                        return [
                          _c(
                            "v-row",
                            {
                              staticClass: "fill-height ma-0",
                              attrs: { align: "center", justify: "center" },
                            },
                            [
                              _c(
                                "content-placeholders",
                                {
                                  staticStyle: { width: "100%" },
                                  attrs: { rounded: true },
                                },
                                [_c("content-placeholders-img")],
                                1
                              ),
                            ],
                            1
                          ),
                        ]
                      },
                      proxy: true,
                    },
                  ]),
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "infos" },
              [
                !_vm.isCurrentAudioAStream
                  ? _c("div", { staticClass: "current-info" }, [
                      _vm.currentAudio.album &&
                      _vm.currentAudio.album.title !== _vm.currentAudio.title
                        ? _c(
                            "div",
                            { staticClass: "audio-album max-1-lines" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "router-link",
                                  attrs: {
                                    to: {
                                      name: "album",
                                      params: { id: _vm.currentAudio.album.id },
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(_vm.currentAudio.album.title) +
                                      "\n                        "
                                  ),
                                ]
                              ),
                            ],
                            1
                          )
                        : _vm.currentAudio.podcast
                        ? _c(
                            "div",
                            { staticClass: "audio-album max-1-lines" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "router-link",
                                  attrs: {
                                    title: _vm.currentAudio.podcast.title,
                                    to: {
                                      name: "podcast",
                                      params: {
                                        id: _vm.currentAudio.podcast.id,
                                      },
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(_vm.currentAudio.podcast.title) +
                                      "\n                        "
                                  ),
                                ]
                              ),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "audio-title max-1-lines",
                          attrs: { title: _vm.currentAudio.title },
                        },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "router-link",
                              attrs: {
                                title: _vm.currentAudio.title,
                                to: {
                                  name: _vm.currentAudio.type,
                                  params: { id: _vm.currentAudio.id },
                                },
                              },
                            },
                            [_vm._v(_vm._s(_vm.currentAudio.title))]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      !_vm.isCurrentAudioAStream
                        ? _c(
                            "div",
                            { staticClass: "audio-artists max-1-lines" },
                            [
                              _c("artists", {
                                attrs: { artists: _vm.currentAudio.artists },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                    ])
                  : _c("div", { staticClass: "current-info" }, [
                      _c(
                        "div",
                        { staticClass: "now-playing" },
                        [
                          _vm.isLoading
                            ? [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(_vm.$t("Loading")) +
                                    "...\n                        "
                                ),
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          !_vm.isLoading && _vm.currentAudio.title
                            ? [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(_vm.$t("Now Playing")) +
                                    "\n                        "
                                ),
                              ]
                            : _vm._e(),
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "live-stream-title-container" },
                        [
                          _c("div", { staticClass: "hiding-box-left" }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "live-stream-title",
                              class: {
                                slideAnimation:
                                  _vm.currentAudio.title &&
                                  _vm.currentAudio.title.length > 25,
                              },
                              attrs: { id: "live-stream-title" },
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(
                                    _vm.currentAudio.title ||
                                      _vm.currentAudio.name
                                  ) +
                                  "\n                        "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "hiding-box-right" }),
                        ]
                      ),
                      _vm._v(" "),
                      _vm.currentAudio.artist
                        ? _c(
                            "div",
                            { staticClass: "audio-artists max-1-lines" },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.currentAudio.artist) +
                                  "\n                    "
                              ),
                            ]
                          )
                        : _vm._e(),
                    ]),
                _vm._v(" "),
                !_vm.isCurrentAudioAStream &&
                !_vm.$store.getters.getSettings.disableRegistration &&
                _vm.currentAudio.type !== "episode" &&
                !_vm.currentAudio.campaign
                  ? [
                      _vm.isLiked
                        ? _c(
                            "v-btn",
                            {
                              staticClass: "align-center ml-2",
                              attrs: { icon: "", small: "" },
                              on: {
                                click: function ($event) {
                                  return _vm.$emit("like", _vm.currentAudio)
                                },
                              },
                            },
                            [
                              _c(
                                "v-icon",
                                {
                                  attrs: {
                                    small: "",
                                    color: "primary",
                                    title: _vm.$t("Dislike"),
                                  },
                                },
                                [_vm._v("$vuetify.icons.heart")]
                              ),
                            ],
                            1
                          )
                        : _c(
                            "v-btn",
                            {
                              staticClass: "align-center ml-2",
                              attrs: { icon: "", small: "" },
                              on: {
                                click: function ($event) {
                                  return _vm.$emit("like", _vm.currentAudio)
                                },
                              },
                            },
                            [
                              _c(
                                "v-icon",
                                { attrs: { title: _vm.$t("Like"), small: "" } },
                                [_vm._v("$vuetify.icons.heart-outline")]
                              ),
                            ],
                            1
                          ),
                    ]
                  : _vm._e(),
              ],
              2
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "epico_main-control-section" }, [
          _c("div", { staticClass: "epico_progressbar-container" }, [
            !_vm.isCurrentAudioAStream
              ? _c(
                  "div",
                  {
                    staticClass: "epico_progressbar epico_progressbar-u500h",
                    attrs: { id: "progress-bar" },
                    on: {
                      click: function ($event) {
                        !_vm.currentAudio.campaign
                          ? _vm.$emit("updateProgress", $event)
                          : ""
                      },
                    },
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "epico_progressbar-inner",
                        style: { width: _vm.currentAudio.progress + "%" },
                      },
                      [_c("span", { staticClass: "epico_progress-circle" })]
                    ),
                  ]
                )
              : _c(
                  "div",
                  {
                    staticClass: "epico_progressbar epico_progressbar-u500h",
                    attrs: { id: "progress-bar" },
                    on: {
                      click: function ($event) {
                        return _vm.$emit("updateProgress", $event)
                      },
                    },
                  },
                  [
                    _c("div", {
                      staticClass: "epico_progressbar-inner",
                      style: { width: "100%" },
                    }),
                  ]
                ),
            _vm._v(" "),
            _c("span", {
              staticClass: "epico_loading-circle",
              staticStyle: { opacity: "0" },
            }),
            _vm._v(" "),
            _c("div", { staticClass: "times" }, [
              _c("span", { staticClass: "current-audio-time" }, [
                _vm._v(
                  "\n                        " +
                    _vm._s(_vm.currentAudio.currentTime) +
                    "\n                    "
                ),
              ]),
              _vm._v(" "),
              !_vm.isCurrentAudioAStream
                ? _c("span", {
                    staticClass: "current-audio-duration",
                    domProps: { textContent: _vm._s(_vm.duration) },
                  })
                : _c("div", { staticClass: "live-animation" }, [
                    _c("div", { staticClass: "align-center" }, [
                      _c(
                        "svg",
                        {
                          staticClass: "blinking",
                          attrs: { height: "20", width: "13" },
                        },
                        [
                          _c("circle", {
                            attrs: { cx: "5", cy: "10", r: "3", fill: "red" },
                          }),
                        ]
                      ),
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.$t("Live")) +
                          "\n                        "
                      ),
                    ]),
                  ]),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "play-next-previous-container" },
            [
              !_vm.isCurrentAudioAStream
                ? [
                    !_vm.isPodcastEpisode
                      ? _c(
                          "button",
                          {
                            staticClass: "repeat-button",
                            class: { activeButton: _vm.buttons.loop },
                            attrs: {
                              disabled:
                                _vm.currentAudio.campaign ||
                                _vm.currentAudio.campaign,
                              title: _vm.$t("Loop"),
                            },
                            on: {
                              click: function ($event) {
                                return _vm.$emit("loopAudio")
                              },
                            },
                          },
                          [
                            _c(
                              "v-icon",
                              {
                                attrs: {
                                  color: _vm.buttons.loop
                                    ? "primary"
                                    : "textContMedium",
                                },
                              },
                              [_vm._v("$vuetify.icons.refresh")]
                            ),
                          ],
                          1
                        )
                      : _c(
                          "button",
                          {
                            staticClass: "random-button",
                            class: { activeButton: _vm.buttons.shuffle },
                            attrs: {
                              disabled:
                                _vm.playlist.length <= 1 ||
                                _vm.currentAudio.campaign,
                              title: _vm.$t("Shuffle"),
                            },
                            on: {
                              click: function ($event) {
                                return _vm.$emit("shuffleAudio")
                              },
                            },
                          },
                          [
                            _c(
                              "v-icon",
                              {
                                attrs: {
                                  size: 20,
                                  color: _vm.buttons.shuffle
                                    ? "primary"
                                    : "textContMedium",
                                },
                              },
                              [_vm._v("$vuetify.icons.shuffle-variant")]
                            ),
                          ],
                          1
                        ),
                    _vm._v(" "),
                    !_vm.isPodcastEpisode
                      ? _c(
                          "button",
                          {
                            staticClass: "previous-button",
                            attrs: {
                              title: _vm.$t("Previous"),
                              disabled:
                                !_vm.playlist[_vm.currentAudio.index - 1] ||
                                _vm.currentAudio.campaign,
                            },
                            on: {
                              click: function ($event) {
                                return _vm.$emit("goPrevious")
                              },
                            },
                          },
                          [
                            _c(
                              "v-icon",
                              { attrs: { color: "textContMedium" } },
                              [_vm._v("$vuetify.icons.skip-previous")]
                            ),
                          ],
                          1
                        )
                      : _c(
                          "button",
                          {
                            staticClass:
                              "epico_previous-button epico_rewind-button",
                            attrs: {
                              title: _vm.$t("Rewind"),
                              disabled: _vm.currentAudio.campaign,
                            },
                            on: {
                              click: function ($event) {
                                return _vm.$emit("rewindAudio", -10)
                              },
                            },
                          },
                          [
                            _c(
                              "v-icon",
                              { attrs: { color: "textContMedium" } },
                              [_vm._v("$vuetify.icons.rewind-10")]
                            ),
                          ],
                          1
                        ),
                  ]
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "play-button-container" },
                [
                  _vm.isLoading
                    ? [
                        _c(
                          "div",
                          { staticClass: "progress-circl" },
                          [
                            _c("v-progress-circular", {
                              staticClass: "loading-circle-e",
                              attrs: {
                                size: 39,
                                width: 5,
                                color: "primary",
                                indeterminate: "",
                              },
                            }),
                          ],
                          1
                        ),
                      ]
                    : [
                        !_vm.currentAudio.isPlaying &&
                        !_vm.currentAudio.campaign
                          ? _c(
                              "button",
                              {
                                staticClass: "play-button",
                                attrs: {
                                  disabled: _vm.currentAudio.campaign,
                                  title: _vm.$t("Play") + "/" + _vm.$t("Pause"),
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.$emit("playPause")
                                  },
                                },
                              },
                              [
                                _c(
                                  "v-icon",
                                  {
                                    attrs: {
                                      size: "54",
                                      large: "",
                                      color: _vm.$vuetify.theme.dark
                                        ? "textContMedium"
                                        : "primary",
                                    },
                                  },
                                  [_vm._v("$vuetify.icons.play-circle")]
                                ),
                              ],
                              1
                            )
                          : _c(
                              "button",
                              {
                                staticClass: "play-button",
                                on: {
                                  click: function ($event) {
                                    return _vm.$emit("playPause")
                                  },
                                },
                              },
                              [
                                _c(
                                  "v-icon",
                                  {
                                    attrs: {
                                      size: "54",
                                      large: "",
                                      color: _vm.$vuetify.theme.dark
                                        ? "textContMedium"
                                        : "primary",
                                    },
                                  },
                                  [_vm._v("$vuetify.icons.pause-circle")]
                                ),
                              ],
                              1
                            ),
                      ],
                ],
                2
              ),
              _vm._v(" "),
              !_vm.isCurrentAudioAStream
                ? [
                    !_vm.isPodcastEpisode
                      ? _c(
                          "button",
                          {
                            staticClass: "next-button",
                            attrs: {
                              title: _vm.$t("Next"),
                              disabled:
                                !_vm.playlist[_vm.currentAudio.index + 1] ||
                                _vm.currentAudio.campaign,
                            },
                            on: {
                              click: function ($event) {
                                return _vm.$emit("goNext")
                              },
                            },
                          },
                          [
                            _c(
                              "v-icon",
                              { attrs: { color: "textContMedium" } },
                              [_vm._v("$vuetify.icons.skip-next")]
                            ),
                          ],
                          1
                        )
                      : _c(
                          "button",
                          {
                            staticClass:
                              "epico_next-button epico_forwrad-button",
                            attrs: {
                              disabled: _vm.currentAudio.campaign,
                              title: _vm.$t("Rewind"),
                            },
                            on: {
                              click: function ($event) {
                                return _vm.$emit("rewindAudio", +30)
                              },
                            },
                          },
                          [
                            _c(
                              "v-icon",
                              { attrs: { color: "textContMedium" } },
                              [_vm._v("$vuetify.icons.fast-forward-30")]
                            ),
                          ],
                          1
                        ),
                    _vm._v(" "),
                    !_vm.isPodcastEpisode
                      ? _c(
                          "button",
                          {
                            staticClass: "random-button",
                            class: { activeButton: _vm.buttons.shuffle },
                            attrs: {
                              disabled:
                                _vm.playlist.length <= 1 ||
                                _vm.currentAudio.campaign,
                            },
                            on: {
                              click: function ($event) {
                                return _vm.$emit("shuffleAudio")
                              },
                            },
                          },
                          [
                            _c(
                              "v-icon",
                              {
                                attrs: {
                                  title: _vm.$t("Shuffle"),
                                  size: "20",
                                  color: _vm.buttons.shuffle
                                    ? "primary"
                                    : "textContMedium",
                                },
                              },
                              [_vm._v("$vuetify.icons.shuffle-variant")]
                            ),
                          ],
                          1
                        )
                      : _c(
                          "button",
                          {
                            staticClass: "playback_rate__button",
                            attrs: {
                              title: _vm.$t("Play Speed"),
                              disabled: _vm.currentAudio.campaign,
                            },
                            on: {
                              click: function ($event) {
                                return _vm.$emit("adjustPlayspeed")
                              },
                            },
                          },
                          [
                            _c(
                              "span",
                              {
                                staticClass: "playback_rate",
                                attrs: {
                                  color:
                                    _vm.playbackRate > 1
                                      ? "primary"
                                      : "textContMedium",
                                },
                              },
                              [_vm._v(_vm._s(_vm.playbackRate) + "x")]
                            ),
                          ]
                        ),
                  ]
                : _vm._e(),
            ],
            2
          ),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "epico_option-section epico_option-section-u500h" },
          [
            _c("div", { staticClass: "epico_option-section__group" }, [
              _c(
                "div",
                { staticClass: "btn-group d-flex align-center" },
                [
                  _vm.isOwned && _vm.currentAudio.isProduct
                    ? _c("div", { staticClass: "owned-icon" }, [
                        _c(
                          "div",
                          {
                            staticClass: "premium",
                            attrs: { title: _vm.$t("Premium") },
                          },
                          [
                            _c("v-icon", { attrs: { color: "#FFA500" } }, [
                              _vm._v("$vuetify.icons.crown"),
                            ]),
                          ],
                          1
                        ),
                      ])
                    : _vm.isPurchasable
                    ? _c(
                        "div",
                        { staticClass: "purchase-button" },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "mr-2",
                              attrs: {
                                "x-small": "",
                                title: _vm.$t("Purchase"),
                                color: "#FF8F00",
                                dark: "",
                                fab: "",
                                dense: "",
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.$emit("showPurchaseDialog")
                                },
                              },
                            },
                            [_c("v-icon", [_vm._v("$vuetify.icons.cart")])],
                            1
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isCurrentAudioAFileAudio &&
                  _vm.currentAudio.origin === "local" &&
                  !_vm.$store.getters.getSettings.hideDownloadButton
                    ? _c(
                        "div",
                        { staticClass: "download-button" },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "mr-2",
                              attrs: {
                                "x-small": "",
                                title: _vm.$t("Download"),
                                color: "primary",
                                disabled: _vm.downloadLoading,
                                fab: "",
                                loading: _vm.downloadLoading,
                                dense: "",
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.$emit("downloadAudio")
                                },
                              },
                            },
                            [
                              _c("v-icon", [
                                _vm._v("$vuetify.icons.download-circle"),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.playlist.length > 1
                    ? _c(
                        "v-chip",
                        {
                          staticClass: "ma-2",
                          attrs: { outlined: "", small: "" },
                          on: {
                            click: function ($event) {
                              _vm.showPlaylist = !_vm.showPlaylist
                            },
                          },
                        },
                        [
                          _c(
                            "v-icon",
                            { attrs: { left: "", color: "textContMedium" } },
                            [_vm._v("$vuetify.icons.playlist-play")]
                          ),
                          _vm._v(" "),
                          _vm.$store.getters.getScreenWidth > 900
                            ? _c("span", [_vm._v(_vm._s(_vm.$t("Queue")))])
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "v-icon",
                            {
                              style: {
                                transform: _vm.showPlaylist
                                  ? "rotate(0deg)"
                                  : "rotate(180deg)",
                              },
                            },
                            [_vm._v("$vuetify.icons.chevron-up")]
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
                ],
                1
              ),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "epico_volume-button-container" },
              [
                _c(
                  "v-btn",
                  {
                    attrs: { icon: "", small: "" },
                    on: {
                      click: function ($event) {
                        return _vm.$emit("mute", $event)
                      },
                    },
                  },
                  [
                    _c("v-icon", { attrs: { color: "textContMedium" } }, [
                      _vm._v("$vuetify.icons." + _vm._s(_vm.volumeButton)),
                    ]),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "epico_volumebar-container epico_volumebar-container-u500h",
                  },
                  [
                    _c("v-slider", {
                      attrs: {
                        "thumb-color": "primary",
                        "tick-size": "50",
                        disabled: _vm.currentAudio.campaign,
                        "thumb-size": "22",
                        "hide-details": "",
                        "thumb-label": true,
                      },
                      on: {
                        change: function ($event) {
                          return _vm.$emit("volume", _vm.vol)
                        },
                      },
                      model: {
                        value: _vm.vol,
                        callback: function ($$v) {
                          _vm.vol = $$v
                        },
                        expression: "vol",
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "epico_play-circle-phone-layout" }, [
          !_vm.currentAudio.isPlaying
            ? _c(
                "button",
                {
                  staticClass: "play-button",
                  attrs: { title: _vm.$t("Play") + "/" + _vm.$t("Pause") },
                  on: {
                    click: function ($event) {
                      return _vm.$emit("playPause")
                    },
                  },
                },
                [
                  _c("v-progress-circular", {
                    staticClass: "progress-circle",
                    attrs: {
                      rotate: -90,
                      size: 36,
                      width: 5,
                      value: _vm.isCurrentAudioAStream
                        ? 100
                        : _vm.currentAudio.progress,
                      color: "primary",
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _c(
                        "v-icon",
                        {
                          attrs: {
                            size: "50",
                            large: "",
                            color: _vm.$vuetify.theme.dark
                              ? "textContMedium"
                              : "primary",
                          },
                        },
                        [_vm._v("$vuetify.icons.play-circle")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              )
            : _c(
                "button",
                {
                  staticClass: "play-button",
                  on: {
                    click: function ($event) {
                      return _vm.$emit("playPause")
                    },
                  },
                },
                [
                  _c("v-progress-circular", {
                    staticClass: "progress-circle",
                    attrs: {
                      rotate: -90,
                      size: 36,
                      width: 5,
                      value: _vm.isCurrentAudioAStream
                        ? 100
                        : _vm.currentAudio.progress,
                      color: "primary",
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _c(
                        "v-icon",
                        {
                          attrs: {
                            size: "50",
                            large: "",
                            color: _vm.$vuetify.theme.dark
                              ? "textContMedium"
                              : "primary",
                          },
                        },
                        [_vm._v("$vuetify.icons.pause-circle")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
        ]),
      ]),
      _vm._v(" "),
      _vm.playlist.length > 1
        ? _c("div", { staticClass: "epico_playlist-container" }, [
            _c(
              "div",
              {
                staticClass: "epico_playlist-ul-wrapper",
                style: {
                  transform: _vm.showPlaylist
                    ? "translateY(0em)"
                    : "translateY(100%) ",
                },
              },
              [
                _c(
                  "ul",
                  { staticClass: "epico_playlist-ul" },
                  _vm._l(_vm.playlist, function (audio, i) {
                    return _c(
                      "li",
                      {
                        key: i,
                        staticClass: "epico_playlist-audio",
                        class: { "active-Song": _vm.currentAudio.index == i },
                        on: {
                          click: function ($event) {
                            return _vm.$emit("updateCurrentAudio", [i, true])
                          },
                        },
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "audio-cover" },
                          [
                            _c(
                              "v-img",
                              {
                                staticClass: "img",
                                attrs: { src: audio.cover },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "placeholder",
                                      fn: function () {
                                        return [
                                          _c(
                                            "div",
                                            { staticClass: "fill-height" },
                                            [
                                              _c(
                                                "content-placeholders",
                                                { attrs: { rounded: true } },
                                                [
                                                  _c(
                                                    "content-placeholders-img"
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                        ]
                                      },
                                      proxy: true,
                                    },
                                  ],
                                  null,
                                  true
                                ),
                              },
                              [
                                _vm._v(" "),
                                _vm.$store.getters.isCurrentlyPlaying(audio)
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "dark-layer absolute fill justify-align-center",
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "epico_music-is-playing-container white-bars",
                                          },
                                          [
                                            _c("span"),
                                            _vm._v(" "),
                                            _c("span"),
                                            _vm._v(" "),
                                            _c("span"),
                                          ]
                                        ),
                                      ]
                                    )
                                  : _vm._e(),
                              ]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "audio-title max-1-lines" }, [
                          _vm._v(
                            "\n                        " +
                              _vm._s(audio.title) +
                              "\n                    "
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "audio-artist max-1-lines",
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                              },
                            },
                          },
                          [
                            _c("artists", {
                              attrs: { artists: audio.artists },
                            }),
                          ],
                          1
                        ),
                      ]
                    )
                  }),
                  0
                ),
              ]
            ),
          ])
        : _vm._e(),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/Index.vue?vue&type=template&id=50c4b64e&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/Index.vue?vue&type=template&id=50c4b64e& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "audio-player-container" } },
    [
      _vm.$store.getters.getSettings.allowVideos
        ? _c(
            "TV",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value:
                    _vm.currentAudio.source_format === "yt_video" &&
                    !_vm.$store.getters.getSettings.disableVideo &&
                    (_vm.fullScreenPlayer
                      ? _vm.fullScreenPlayer && !_vm.playlistShownOnMobile
                      : true),
                  expression:
                    "\n      currentAudio.source_format === 'yt_video' &&\n      !$store.getters.getSettings.disableVideo &&\n      (fullScreenPlayer ? fullScreenPlayer && !playlistShownOnMobile : true)\n    ",
                },
              ],
              staticClass: "video-tv",
              class: {
                "small-screen": _vm.smallScreen || _vm.fullScreenPlayer,
                "phone-layout": _vm.fullScreenPlayer,
              },
              on: {
                "small-screen": _vm.switchScreenToSmall,
                "large-screen": _vm.switchScreenToLarge,
              },
            },
            [
              _c("div", {
                class: { smallScreenVideo: _vm.smallScreen },
                attrs: { id: "youtube_video_container" },
              }),
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("phone-player-layout", {
        style: {
          transform:
            "translateY(" + (_vm.fullScreenPlayer ? "0%" : "100%") + ")",
        },
        attrs: {
          currentAudio: _vm.currentAudio,
          playlist: _vm.playlist,
          getUp: _vm.getUp,
          isLoading: _vm.isLoading,
          playbackRate: _vm.playbackRate,
          isLiked: _vm.isLiked,
          isArtistFollowed: _vm.isArtistFollowed,
          isPodcastEpisode: _vm.isPodcastEpisode,
          isCurrentAudioAStream: _vm.isCurrentAudioAStream,
          isCurrentAudioAFileAudio: _vm.isCurrentAudioAFileAudio,
          downloadLoading: _vm.downloadLoading,
          volumeButton: _vm.volumeButton,
          duration: _vm.getDurationInHHMMSS(_vm.currentAudio.duration),
          buttons: _vm.buttons,
          volume: _vm.volume,
          fullScreenPlayerProp: _vm.fullScreenPlayer,
          isPurchasable: _vm.isPurchasable,
          isOwned: _vm.isOwned,
        },
        on: {
          updateCurrentAudio: function ($event) {
            return _vm.updateCurrentAudio($event[0], $event[1])
          },
          playPause: _vm.playPause,
          adjustPlayspeed: _vm.adjustPlayspeed,
          rewindAudio: function ($event) {
            return _vm.rewindAudio($event)
          },
          fullScreenPlayer: function ($event) {
            _vm.fullScreenPlayer = false
          },
          goNext: _vm.goNext,
          goPrevious: _vm.goPrevious,
          like: _vm.like,
          showPlaylist: function ($event) {
            _vm.playlistShownOnMobile = $event
          },
          mute: _vm.muteAudio,
          downloadAudio: _vm.downloadAudio,
          showPurchaseDialog: _vm.purchase,
          addSongToPlaylist: _vm.addSongToPlaylist,
          updateProgressOnPhone: _vm.updateProgressOnPhone,
          loopAudio: _vm.loopAudio,
          shuffleAudio: _vm.shuffleAudio,
        },
      }),
      _vm._v(" "),
      _c("footer-player-layout", {
        attrs: {
          getUp: _vm.getUp,
          playlist: _vm.playlist,
          isLoading: _vm.isLoading,
          playbackRate: _vm.playbackRate,
          isLiked: _vm.isLiked,
          isArtistFollowed: _vm.isArtistFollowed,
          isPodcastEpisode: _vm.isPodcastEpisode,
          isCurrentAudioAStream: _vm.isCurrentAudioAStream,
          isCurrentAudioAFileAudio: _vm.isCurrentAudioAFileAudio,
          downloadLoading: _vm.downloadLoading,
          volumeButton: _vm.volumeButton,
          duration: _vm.getDurationInHHMMSS(_vm.currentAudio.duration),
          buttons: _vm.buttons,
          volume: _vm.volume,
          fullScreenPlayerProp: _vm.fullScreenPlayer,
          currentAudio: _vm.currentAudio,
          isPurchasable: _vm.isPurchasable,
          isOwned: _vm.isOwned,
        },
        on: {
          volume: function ($event) {
            _vm.volume = $event
          },
          mute: _vm.muteAudio,
          fullScreenPlayer: function ($event) {
            _vm.fullScreenPlayer = true
          },
          updateCurrentAudio: function ($event) {
            return _vm.updateCurrentAudio($event[0], $event[1])
          },
          downloadAudio: _vm.downloadAudio,
          showPurchaseDialog: _vm.purchase,
          playPause: _vm.playPause,
          adjustPlayspeed: _vm.adjustPlayspeed,
          rewindAudio: function ($event) {
            return _vm.rewindAudio($event)
          },
          goNext: _vm.goNext,
          goPrevious: _vm.goPrevious,
          like: _vm.like,
          addSongToPlaylist: _vm.addSongToPlaylist,
          updateProgress: _vm.updateProgress,
          loopAudio: _vm.loopAudio,
          shuffleAudio: _vm.shuffleAudio,
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=template&id=1c4cddf5&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=template&id=1c4cddf5& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "small-screen-player" }, [
    _c("div", { staticClass: "epico_phone-layout-full" }, [
      _c("div", { staticClass: "epico_player-container" }, [
        _c("div", { staticClass: "epico_playlist-container" }, [
          _c(
            "ul",
            {
              staticClass: "epico_playlist-ul",
              style: { maxHeight: _vm.showPlaylist ? "45vh" : "0px" },
            },
            _vm._l(_vm.playlist, function (audio, i) {
              return _c(
                "li",
                {
                  key: i,
                  staticClass: "epico_playlist-audio",
                  class: { "active-Song": _vm.currentAudio.index == i },
                  on: {
                    click: function ($event) {
                      return _vm.$emit("updateCurrentAudio", [i, true])
                    },
                  },
                },
                [
                  _c(
                    "div",
                    { staticClass: "audio-cover" },
                    [
                      _c(
                        "v-img",
                        {
                          staticClass: "img",
                          attrs: {
                            src: audio.cover,
                            width: "50",
                            height: "50",
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "placeholder",
                                fn: function () {
                                  return [
                                    _c(
                                      "div",
                                      { staticClass: "fill-height" },
                                      [
                                        _c(
                                          "content-placeholders",
                                          { attrs: { rounded: true } },
                                          [_c("content-placeholders-img")],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ]
                                },
                                proxy: true,
                              },
                            ],
                            null,
                            true
                          ),
                        },
                        [
                          _vm._v(" "),
                          _vm.$store.getters.isCurrentlyPlaying(audio)
                            ? _c(
                                "div",
                                {
                                  staticClass:
                                    "dark-layer absolute fill justify-align-center",
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "epico_music-is-playing-container white-bars",
                                    },
                                    [
                                      _c("span"),
                                      _vm._v(" "),
                                      _c("span"),
                                      _vm._v(" "),
                                      _c("span"),
                                    ]
                                  ),
                                ]
                              )
                            : _vm._e(),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "audio-title text-center max-1-lines" },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(audio.title) +
                          "\n                        "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "audio-artist max-1-lines",
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                        },
                      },
                    },
                    [_c("artists", { attrs: { artists: audio.artists } })],
                    1
                  ),
                ]
              )
            }),
            0
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "epico_playlist-text-container px-3" },
            [
              _c(
                "button",
                {
                  staticClass: "epico_chevron-down",
                  on: {
                    click: function ($event) {
                      _vm.fullScreenPlayer = false
                    },
                  },
                },
                [
                  _c("v-icon", { attrs: { large: "" } }, [
                    _vm._v("$vuetify.icons.chevron-down"),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _vm.hasPermission("Download songs") &&
              _vm.currentAudio.source_format === "file" &&
              !_vm.$store.getters.getSettings.hideDownloadButton
                ? _c(
                    "div",
                    { staticClass: "download-button" },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "mr-2",
                          attrs: {
                            "x-small": "",
                            title: _vm.$t("Download"),
                            color: "primary",
                            disabled: _vm.downloadLoading,
                            fab: "",
                            loading: _vm.downloadLoading,
                            dense: "",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.$emit("downloadAudio")
                            },
                          },
                        },
                        [
                          _c("v-icon", [
                            _vm._v("$vuetify.icons.download-circle"),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.isOwned && _vm.currentAudio.isProduct
                ? _c("div", { staticClass: "owned-icon" }, [
                    _c(
                      "div",
                      {
                        staticClass: "premium",
                        attrs: { title: _vm.$t("Premium") },
                      },
                      [
                        _c("v-icon", { attrs: { color: "#FFA500" } }, [
                          _vm._v("$vuetify.icons.crown"),
                        ]),
                      ],
                      1
                    ),
                  ])
                : _vm.isPurchasable
                ? _c(
                    "div",
                    { staticClass: "purchase-button" },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "mr-2",
                          attrs: {
                            "x-small": "",
                            title: _vm.$t("Purchase"),
                            color: "#FF8F00",
                            dark: "",
                            fab: "",
                            dense: "",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.$emit("showPurchaseDialog")
                            },
                          },
                        },
                        [_c("v-icon", [_vm._v("$vuetify.icons.cart")])],
                        1
                      ),
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.playlist.length > 1
                ? _c(
                    "v-chip",
                    {
                      staticClass: "ma-2",
                      attrs: { outlined: "" },
                      on: {
                        click: function ($event) {
                          _vm.showPlaylist = !_vm.showPlaylist
                          _vm.$emit("showPlaylist", _vm.showPlaylist)
                        },
                      },
                    },
                    [
                      _c(
                        "v-icon",
                        { attrs: { left: "", color: "textContMedium" } },
                        [_vm._v("$vuetify.icons.playlist-music")]
                      ),
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.$t("Queue")) +
                          "\n                        "
                      ),
                      _c(
                        "v-icon",
                        {
                          style: {
                            transform: _vm.showPlaylist
                              ? "rotate(0deg)"
                              : "rotate(180deg)",
                          },
                          attrs: { color: "textContMedium" },
                        },
                        [_vm._v("$vuetify.icons.chevron-up")]
                      ),
                    ],
                    1
                  )
                : _vm._e(),
            ],
            1
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "epico_player-main-container" }, [
          _c(
            "div",
            {
              staticClass: "epico_image-section",
              style: {
                opacity:
                  _vm.currentAudio.source_format === "yt_video" &&
                  !_vm.$store.getters.getSettings.disableVideo
                    ? 0
                    : 1,
              },
            },
            [
              _c("v-img", {
                staticClass: "img",
                attrs: { src: _vm.currentAudio.cover, "aspect-ratio": "1" },
                scopedSlots: _vm._u([
                  {
                    key: "placeholder",
                    fn: function () {
                      return [
                        _c(
                          "v-row",
                          {
                            staticClass: "fill-height ma-0",
                            attrs: { align: "center", justify: "center" },
                          },
                          [
                            _c(
                              "content-placeholders",
                              {
                                staticStyle: { width: "100%" },
                                attrs: { rounded: true },
                              },
                              [_c("content-placeholders-img")],
                              1
                            ),
                          ],
                          1
                        ),
                      ]
                    },
                    proxy: true,
                  },
                ]),
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "epico_details-section" }, [
            !_vm.isCurrentAudioAStream
              ? _c("div", { staticClass: "epico_audio-info" }, [
                  _vm.currentAudio.album &&
                  _vm.currentAudio.album.title !== _vm.currentAudio.title
                    ? _c(
                        "div",
                        { staticClass: "audio-album max-1-lines" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "router-link",
                              attrs: {
                                to: {
                                  name: "album",
                                  params: { id: _vm.currentAudio.album.id },
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.currentAudio.album.title) +
                                  "\n                            "
                              ),
                            ]
                          ),
                        ],
                        1
                      )
                    : _vm.currentAudio.podcast
                    ? _c(
                        "div",
                        { staticClass: "audio-album max-1-lines" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "router-link",
                              attrs: {
                                title: _vm.currentAudio.podcast.title,
                                to: {
                                  name: "podcast",
                                  params: { id: _vm.currentAudio.podcast.id },
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.currentAudio.podcast.title) +
                                  "\n                            "
                              ),
                            ]
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "epico_audio-title",
                      on: {
                        click: function ($event) {
                          return _vm.$emit("fullScreenPlayer")
                        },
                      },
                    },
                    [
                      !_vm.isPodcastEpisode
                        ? _c(
                            "router-link",
                            {
                              staticClass: "router-link",
                              attrs: {
                                to: {
                                  name: "song",
                                  params: { id: _vm.currentAudio.id },
                                },
                              },
                            },
                            [_vm._v(_vm._s(_vm.currentAudio.title))]
                          )
                        : [_vm._v(_vm._s(_vm.currentAudio.title))],
                    ],
                    2
                  ),
                  _vm._v(" "),
                  !_vm.isCurrentAudioAStream
                    ? _c(
                        "div",
                        { staticClass: "audio-artists max-1-lines" },
                        [
                          _c("artists", {
                            attrs: { artists: _vm.currentAudio.artists },
                          }),
                        ],
                        1
                      )
                    : _vm._e(),
                ])
              : _c("div", { staticClass: "epico_audio-info" }, [
                  _c(
                    "div",
                    { staticClass: "now-playing" },
                    [
                      _vm.isLoading
                        ? [
                            _vm._v(
                              "\n                                " +
                                _vm._s(_vm.$t("Loading")) +
                                "...\n                            "
                            ),
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.isLoading && _vm.currentAudio.title
                        ? [
                            _vm._v(
                              "\n                                " +
                                _vm._s(_vm.$t("Now Playing")) +
                                "\n                            "
                            ),
                          ]
                        : _vm._e(),
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "live-stream-title-container" }, [
                    _c("div", { staticClass: "hiding-box-left" }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "live-stream-title no-wrap",
                        class: {
                          slideAnimation:
                            _vm.currentAudio.title &&
                            _vm.currentAudio.title.length > 25,
                        },
                        attrs: { id: "live-stream-title" },
                      },
                      [
                        _vm._v(
                          "\n                                " +
                            _vm._s(
                              _vm.currentAudio.title || _vm.currentAudio.name
                            ) +
                            "\n                            "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "hiding-box-right" }),
                  ]),
                  _vm._v(" "),
                  _vm.currentAudio.artist
                    ? _c("p", { staticClass: "epico_audio-artist" }, [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.currentAudio.artist) +
                            "\n                        "
                        ),
                      ])
                    : _vm._e(),
                ]),
            _vm._v(" "),
            _c("div", { staticClass: "epico_control-section" }, [
              _c("div", { staticClass: "epico_progressbar-container" }, [
                !_vm.isCurrentAudioAStream
                  ? _c(
                      "div",
                      {
                        staticClass: "epico_progressbar",
                        attrs: { id: "progress-bar_phone_layout" },
                        on: {
                          click: function ($event) {
                            return _vm.$emit("updateProgressOnPhone", $event)
                          },
                        },
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "epico_progressbar-inner",
                            style: {
                              width: _vm.currentAudio.progress + "%",
                            },
                          },
                          [_c("span", { staticClass: "epico_progress-circle" })]
                        ),
                      ]
                    )
                  : _c(
                      "div",
                      {
                        staticClass: "epico_progressbar",
                        attrs: { id: "progress-bar_phone_layout" },
                        on: {
                          click: function ($event) {
                            return _vm.$emit("updateProgressOnPhone", $event)
                          },
                        },
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "epico_progressbar-inner",
                            style: {
                              width: "100%",
                            },
                          },
                          [_c("span", { staticClass: "epico_progress-circle" })]
                        ),
                      ]
                    ),
                _vm._v(" "),
                _c("span", { staticClass: "epico_loading-circle" }),
                _vm._v(" "),
                _c("span", { staticClass: "epico_current-audio-time" }, [
                  _vm._v(_vm._s(_vm.currentAudio.currentTime)),
                ]),
                _vm._v(" "),
                !_vm.isCurrentAudioAStream
                  ? _c("span", {
                      staticClass: "epico_current-audio-duration",
                      domProps: { textContent: _vm._s(_vm.duration) },
                    })
                  : _c(
                      "span",
                      {
                        staticClass:
                          "live-animation epico_current-audio-duration",
                      },
                      [
                        _c("div", { staticClass: "align-center" }, [
                          _c(
                            "svg",
                            {
                              staticClass: "blinking",
                              attrs: { height: "20", width: "13" },
                            },
                            [
                              _c("circle", {
                                attrs: {
                                  cx: "5",
                                  cy: "10",
                                  r: "3",
                                  fill: "red",
                                },
                              }),
                            ]
                          ),
                          _vm._v(
                            "\n                                    " +
                              _vm._s(_vm.$t("Live")) +
                              "\n                                "
                          ),
                        ]),
                      ]
                    ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "epico_main-control-section" }, [
                _c(
                  "div",
                  { staticClass: "epico_play-next-previous-container" },
                  [
                    !_vm.isPodcastEpisode && !_vm.isCurrentAudioAStream
                      ? _c(
                          "button",
                          {
                            staticClass: "epico_previous-button",
                            attrs: {
                              disabled:
                                !_vm.playlist[_vm.currentAudio.index - 1] ||
                                _vm.currentAudio.campaign,
                              title: _vm.$t("Previous"),
                            },
                            on: {
                              click: function ($event) {
                                return _vm.$emit("goPrevious")
                              },
                            },
                          },
                          [
                            _c(
                              "v-icon",
                              { attrs: { color: "textContMedium" } },
                              [_vm._v("$vuetify.icons.skip-previous")]
                            ),
                          ],
                          1
                        )
                      : _vm.isPodcastEpisode
                      ? _c(
                          "button",
                          {
                            staticClass:
                              "epico_previous-button epico_rewind-button",
                            attrs: {
                              disabled: _vm.currentAudio.campaign,
                              title: _vm.$t("Rewind"),
                            },
                            on: {
                              click: function ($event) {
                                return _vm.$emit("rewindAudio", -10)
                              },
                            },
                          },
                          [
                            _c(
                              "v-icon",
                              { attrs: { color: "textContMedium" } },
                              [_vm._v("$vuetify.icons.rewind-10")]
                            ),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "epico_btn epico_play-button epico_no-border",
                        attrs: { disabled: _vm.currentAudio.campaign },
                      },
                      [
                        _vm.isLoading
                          ? [
                              _vm.isLoading
                                ? _c("v-progress-circular", {
                                    attrs: {
                                      size: 60,
                                      width: 5,
                                      color: "primary",
                                      indeterminate: "",
                                    },
                                  })
                                : _vm._e(),
                            ]
                          : [
                              !_vm.currentAudio.isPlaying &&
                              !_vm.currentAudio.campaign
                                ? _c(
                                    "button",
                                    {
                                      staticClass: "play-button",
                                      attrs: {
                                        title: _vm.$t("Play"),
                                        disabled: _vm.currentAudio.campaign,
                                      },
                                      on: {
                                        click: function ($event) {
                                          return _vm.$emit("playPause")
                                        },
                                      },
                                    },
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          attrs: {
                                            size: "60",
                                            color: _vm.$vuetify.theme.dark
                                              ? "textContMedium"
                                              : "primary",
                                          },
                                        },
                                        [_vm._v("$vuetify.icons.play-circle")]
                                      ),
                                    ],
                                    1
                                  )
                                : _c(
                                    "button",
                                    {
                                      staticClass: "play-button",
                                      attrs: {
                                        title: _vm.$t("Pause"),
                                        disabled: _vm.currentAudio.campaign,
                                      },
                                      on: {
                                        click: function ($event) {
                                          return _vm.$emit("playPause")
                                        },
                                      },
                                    },
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          attrs: {
                                            size: "60",
                                            color: _vm.$vuetify.theme.dark
                                              ? "textContMedium"
                                              : "primary",
                                          },
                                        },
                                        [_vm._v("$vuetify.icons.pause-circle")]
                                      ),
                                    ],
                                    1
                                  ),
                            ],
                      ],
                      2
                    ),
                    _vm._v(" "),
                    !_vm.isPodcastEpisode && !_vm.isCurrentAudioAStream
                      ? _c(
                          "button",
                          {
                            staticClass: "epico_next-button",
                            attrs: {
                              disabled:
                                !_vm.playlist[_vm.currentAudio.index + 1] ||
                                _vm.currentAudio.campaign,
                              title: _vm.$t("Next"),
                            },
                            on: {
                              click: function ($event) {
                                return _vm.$emit("goNext")
                              },
                            },
                          },
                          [
                            _c(
                              "v-icon",
                              { attrs: { color: "textContMedium" } },
                              [_vm._v("$vuetify.icons.skip-next")]
                            ),
                          ],
                          1
                        )
                      : _vm.isPodcastEpisode
                      ? _c(
                          "button",
                          {
                            staticClass:
                              "epico_next-button epico_forwrad-button",
                            attrs: { title: _vm.$t("Rewind") },
                            on: {
                              click: function ($event) {
                                return _vm.$emit("rewindAudio", +30)
                              },
                            },
                          },
                          [
                            _c(
                              "v-icon",
                              { attrs: { color: "textContMedium" } },
                              [_vm._v("$vuetify.icons.fast-forward-30")]
                            ),
                          ],
                          1
                        )
                      : _vm._e(),
                  ]
                ),
              ]),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "epico_option-section" },
              [
                _c(
                  "div",
                  { staticClass: "plus-container" },
                  [
                    _c("song-menu", {
                      attrs: {
                        item: _vm.currentAudio,
                        icon: "plus",
                        disabled: _vm.currentAudio.campaign,
                        isOnPlayer: true,
                        closeOnContentClick: true,
                      },
                      on: {
                        close: function ($event) {
                          return _vm.$store.commit("setSongMenu", null)
                        },
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                !_vm.isPodcastEpisode &&
                !_vm.isCurrentAudioAStream & !_vm.currentAudio.campaign
                  ? _c(
                      "button",
                      { staticClass: "epico_shuffle-button" },
                      [
                        _c(
                          "v-icon",
                          {
                            attrs: {
                              title: _vm.$t("Shuffle"),
                              disabled: _vm.currentAudio.campaign,
                              color: _vm.buttons.shuffle
                                ? "primary"
                                : "textContMedium",
                            },
                            on: {
                              click: function ($event) {
                                return _vm.$emit("shuffleAudio")
                              },
                            },
                          },
                          [_vm._v("$vuetify.icons.shuffle-variant")]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                !_vm.isCurrentAudioAStream &&
                !_vm.$store.getters.getSettings.disableRegistration &&
                _vm.currentAudio.type !== "episode"
                  ? [
                      _vm.isLiked
                        ? _c(
                            "v-btn",
                            {
                              staticClass: "align-center",
                              attrs: { icon: "", small: "" },
                              on: {
                                click: function ($event) {
                                  return _vm.$emit("like", _vm.currentAudio)
                                },
                              },
                            },
                            [
                              _c(
                                "v-icon",
                                {
                                  attrs: {
                                    color: "primary",
                                    title: _vm.$t("Dislike"),
                                  },
                                },
                                [_vm._v("$vuetify.icons.heart")]
                              ),
                            ],
                            1
                          )
                        : _c(
                            "v-btn",
                            {
                              staticClass: "align-center",
                              attrs: { icon: "", small: "" },
                              on: {
                                click: function ($event) {
                                  return _vm.$emit("like", _vm.currentAudio)
                                },
                              },
                            },
                            [
                              _c(
                                "v-icon",
                                { attrs: { title: _vm.$t("Like") } },
                                [_vm._v("$vuetify.icons.heart-outline")]
                              ),
                            ],
                            1
                          ),
                    ]
                  : _vm._e(),
                _vm._v(" "),
                !_vm.isPodcastEpisode && !_vm.isCurrentAudioAStream
                  ? _c(
                      "button",
                      {
                        staticClass: "epico_repeat-button",
                        attrs: { disabled: _vm.currentAudio.campaign },
                      },
                      [
                        _c(
                          "v-icon",
                          {
                            attrs: {
                              color: _vm.buttons.loop
                                ? "primary"
                                : "textContMedium",
                              title: _vm.$t("Loop"),
                            },
                            on: {
                              click: function ($event) {
                                return _vm.$emit("loopAudio")
                              },
                            },
                          },
                          [_vm._v("$vuetify.icons.refresh")]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "epico_volume-button-container" },
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: {
                          icon: "",
                          disabled: _vm.currentAudio.campaign,
                          small: "",
                        },
                        on: {
                          click: function ($event) {
                            return _vm.$emit("mute", $event)
                          },
                        },
                      },
                      [
                        _c("v-icon", { attrs: { color: "textContMedium" } }, [
                          _vm._v("$vuetify.icons." + _vm._s(_vm.volumeButton)),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              2
            ),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/artist/EarningDetails.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/artist/EarningDetails.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EarningDetails_vue_vue_type_template_id_5d46bc85___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EarningDetails.vue?vue&type=template&id=5d46bc85& */ "./resources/js/components/artist/EarningDetails.vue?vue&type=template&id=5d46bc85&");
/* harmony import */ var _EarningDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EarningDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/artist/EarningDetails.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VContainer.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/VDivider.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/VListItem.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/VListItemAvatar.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/VSimpleTable.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VSpacer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EarningDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EarningDetails_vue_vue_type_template_id_5d46bc85___WEBPACK_IMPORTED_MODULE_0__.render,
  _EarningDetails_vue_vue_type_template_id_5d46bc85___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
;














_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["default"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__.VCardText,VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__.VCardTitle,VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["default"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__["default"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["default"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["default"],VListItemAvatar: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["default"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_12__.VListItemContent,VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_12__.VListItemTitle,VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_13__["default"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_14__["default"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_15__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/artist/EarningDetails.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dialogs/admin/edit/Artist.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/dialogs/admin/edit/Artist.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Artist_vue_vue_type_template_id_4f5547ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Artist.vue?vue&type=template&id=4f5547ad& */ "./resources/js/components/dialogs/admin/edit/Artist.vue?vue&type=template&id=4f5547ad&");
/* harmony import */ var _Artist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Artist.vue?vue&type=script&lang=js& */ "./resources/js/components/dialogs/admin/edit/Artist.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VContainer.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/VDivider.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/VSelect.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Artist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Artist_vue_vue_type_template_id_4f5547ad___WEBPACK_IMPORTED_MODULE_0__.render,
  _Artist_vue_vue_type_template_id_4f5547ad___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
;









_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["default"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__.VCardText,VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__.VCardTitle,VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["default"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__["default"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["default"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["default"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dialogs/admin/edit/Artist.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/elements/single-items/TV.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/elements/single-items/TV.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TV_vue_vue_type_template_id_53a28649_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TV.vue?vue&type=template&id=53a28649&scoped=true& */ "./resources/js/components/elements/single-items/TV.vue?vue&type=template&id=53a28649&scoped=true&");
/* harmony import */ var _TV_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TV.vue?vue&type=script&lang=js& */ "./resources/js/components/elements/single-items/TV.vue?vue&type=script&lang=js&");
/* harmony import */ var _TV_vue_vue_type_style_index_0_id_53a28649_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TV.vue?vue&type=style&index=0&id=53a28649&lang=scss&scoped=true& */ "./resources/js/components/elements/single-items/TV.vue?vue&type=style&index=0&id=53a28649&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TV_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TV_vue_vue_type_template_id_53a28649_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _TV_vue_vue_type_template_id_53a28649_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "53a28649",
  null
  
)

/* vuetify-loader */
;

_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_5__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/elements/single-items/TV.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/player/audio-player/FooterPlayerLayout.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/player/audio-player/FooterPlayerLayout.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FooterPlayerLayout_vue_vue_type_template_id_4f0e5cda___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FooterPlayerLayout.vue?vue&type=template&id=4f0e5cda& */ "./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=template&id=4f0e5cda&");
/* harmony import */ var _FooterPlayerLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterPlayerLayout.vue?vue&type=script&lang=js& */ "./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=script&lang=js&");
/* harmony import */ var _FooterPlayerLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FooterPlayerLayout.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/VChip.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/VImg.js");
/* harmony import */ var vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VProgressCircular */ "./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VSlider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VSlider */ "./node_modules/vuetify/lib/components/VSlider/VSlider.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FooterPlayerLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FooterPlayerLayout_vue_vue_type_template_id_4f0e5cda___WEBPACK_IMPORTED_MODULE_0__.render,
  _FooterPlayerLayout_vue_vue_type_template_id_4f0e5cda___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
;








_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["default"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["default"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_7__["default"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__["default"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_9__["default"],VProgressCircular: vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_10__["default"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__["default"],VSlider: vuetify_lib_components_VSlider__WEBPACK_IMPORTED_MODULE_12__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/player/audio-player/FooterPlayerLayout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/player/audio-player/Index.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/player/audio-player/Index.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_50c4b64e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=50c4b64e& */ "./resources/js/components/player/audio-player/Index.vue?vue&type=template&id=50c4b64e&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/player/audio-player/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_50c4b64e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_50c4b64e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/player/audio-player/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/player/audio-player/PhonePlayerLayout.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/player/audio-player/PhonePlayerLayout.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PhonePlayerLayout_vue_vue_type_template_id_1c4cddf5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhonePlayerLayout.vue?vue&type=template&id=1c4cddf5& */ "./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=template&id=1c4cddf5&");
/* harmony import */ var _PhonePlayerLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhonePlayerLayout.vue?vue&type=script&lang=js& */ "./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=script&lang=js&");
/* harmony import */ var _PhonePlayerLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PhonePlayerLayout.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/VChip.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/VImg.js");
/* harmony import */ var vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VProgressCircular */ "./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PhonePlayerLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PhonePlayerLayout_vue_vue_type_template_id_1c4cddf5___WEBPACK_IMPORTED_MODULE_0__.render,
  _PhonePlayerLayout_vue_vue_type_template_id_1c4cddf5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
;






_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["default"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__["default"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__["default"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_8__["default"],VProgressCircular: vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_9__["default"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/player/audio-player/PhonePlayerLayout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VSlider/VSlider.js":
/*!****************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VSlider/VSlider.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_components_VSlider_VSlider_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VSlider/VSlider.sass */ "./node_modules/vuetify/src/components/VSlider/VSlider.sass");
/* harmony import */ var _src_components_VSlider_VSlider_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSlider_VSlider_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../VInput */ "./node_modules/vuetify/lib/components/VInput/index.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../transitions */ "./node_modules/vuetify/lib/components/transitions/index.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
/* harmony import */ var _mixins_loadable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/loadable */ "./node_modules/vuetify/lib/mixins/loadable/index.js");
/* harmony import */ var _directives_click_outside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/click-outside */ "./node_modules/vuetify/lib/directives/click-outside/index.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/console */ "./node_modules/vuetify/lib/util/console.js");
 // Components


 // Mixins


 // Directives

 // Helpers



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_util_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])(_VInput__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_loadable__WEBPACK_IMPORTED_MODULE_3__["default"]
/* @vue/component */
).extend({
  name: 'v-slider',
  directives: {
    ClickOutside: _directives_click_outside__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  mixins: [_mixins_loadable__WEBPACK_IMPORTED_MODULE_3__["default"]],
  props: {
    disabled: Boolean,
    inverseLabel: Boolean,
    max: {
      type: [Number, String],
      default: 100
    },
    min: {
      type: [Number, String],
      default: 0
    },
    step: {
      type: [Number, String],
      default: 1
    },
    thumbColor: String,
    thumbLabel: {
      type: [Boolean, String],
      default: undefined,
      validator: v => typeof v === 'boolean' || v === 'always'
    },
    thumbSize: {
      type: [Number, String],
      default: 32
    },
    tickLabels: {
      type: Array,
      default: () => []
    },
    ticks: {
      type: [Boolean, String],
      default: false,
      validator: v => typeof v === 'boolean' || v === 'always'
    },
    tickSize: {
      type: [Number, String],
      default: 2
    },
    trackColor: String,
    trackFillColor: String,
    value: [Number, String],
    vertical: Boolean
  },
  data: () => ({
    app: null,
    oldValue: null,
    thumbPressed: false,
    mouseTimeout: -1,
    isFocused: false,
    isActive: false,
    noClick: false,
    startOffset: 0
  }),
  computed: {
    classes() {
      return { ..._VInput__WEBPACK_IMPORTED_MODULE_2__["default"].options.computed.classes.call(this),
        'v-input__slider': true,
        'v-input__slider--vertical': this.vertical,
        'v-input__slider--inverse-label': this.inverseLabel
      };
    },

    internalValue: {
      get() {
        return this.lazyValue;
      },

      set(val) {
        val = isNaN(val) ? this.minValue : val; // Round value to ensure the
        // entire slider range can
        // be selected with step

        const value = this.roundValue(Math.min(Math.max(val, this.minValue), this.maxValue));
        if (value === this.lazyValue) return;
        this.lazyValue = value;
        this.$emit('input', value);
      }

    },

    trackTransition() {
      return this.thumbPressed ? this.showTicks || this.stepNumeric ? '0.1s cubic-bezier(0.25, 0.8, 0.5, 1)' : 'none' : '';
    },

    minValue() {
      return parseFloat(this.min);
    },

    maxValue() {
      return parseFloat(this.max);
    },

    stepNumeric() {
      return this.step > 0 ? parseFloat(this.step) : 0;
    },

    inputWidth() {
      const inputWidth = (this.roundValue(this.internalValue) - this.minValue) / (this.maxValue - this.minValue) * 100;
      return isNaN(inputWidth) ? 0 : inputWidth;
    },

    trackFillStyles() {
      const startDir = this.vertical ? 'bottom' : 'left';
      const endDir = this.vertical ? 'top' : 'right';
      const valueDir = this.vertical ? 'height' : 'width';
      const start = this.$vuetify.rtl ? 'auto' : '0';
      const end = this.$vuetify.rtl ? '0' : 'auto';
      const value = this.isDisabled ? `calc(${this.inputWidth}% - 10px)` : `${this.inputWidth}%`;
      return {
        transition: this.trackTransition,
        [startDir]: start,
        [endDir]: end,
        [valueDir]: value
      };
    },

    trackStyles() {
      const startDir = this.vertical ? this.$vuetify.rtl ? 'bottom' : 'top' : this.$vuetify.rtl ? 'left' : 'right';
      const endDir = this.vertical ? 'height' : 'width';
      const start = '0px';
      const end = this.isDisabled ? `calc(${100 - this.inputWidth}% - 10px)` : `calc(${100 - this.inputWidth}%)`;
      return {
        transition: this.trackTransition,
        [startDir]: start,
        [endDir]: end
      };
    },

    showTicks() {
      return this.tickLabels.length > 0 || !!(!this.isDisabled && this.stepNumeric && this.ticks);
    },

    numTicks() {
      return Math.ceil((this.maxValue - this.minValue) / this.stepNumeric);
    },

    showThumbLabel() {
      return !this.isDisabled && !!(this.thumbLabel || this.$scopedSlots['thumb-label']);
    },

    computedTrackColor() {
      if (this.isDisabled) return undefined;
      if (this.trackColor) return this.trackColor;
      if (this.isDark) return this.validationState;
      return this.validationState || 'primary lighten-3';
    },

    computedTrackFillColor() {
      if (this.isDisabled) return undefined;
      if (this.trackFillColor) return this.trackFillColor;
      return this.validationState || this.computedColor;
    },

    computedThumbColor() {
      if (this.thumbColor) return this.thumbColor;
      return this.validationState || this.computedColor;
    }

  },
  watch: {
    min(val) {
      const parsed = parseFloat(val);
      parsed > this.internalValue && this.$emit('input', parsed);
    },

    max(val) {
      const parsed = parseFloat(val);
      parsed < this.internalValue && this.$emit('input', parsed);
    },

    value: {
      handler(v) {
        this.internalValue = v;
      }

    }
  },

  // If done in as immediate in
  // value watcher, causes issues
  // with vue-test-utils
  beforeMount() {
    this.internalValue = this.value;
  },

  mounted() {
    // Without a v-app, iOS does not work with body selectors
    this.app = document.querySelector('[data-app]') || (0,_util_console__WEBPACK_IMPORTED_MODULE_5__.consoleWarn)('Missing v-app or a non-body wrapping element with the [data-app] attribute', this);
  },

  methods: {
    genDefaultSlot() {
      const children = [this.genLabel()];
      const slider = this.genSlider();
      this.inverseLabel ? children.unshift(slider) : children.push(slider);
      children.push(this.genProgress());
      return children;
    },

    genSlider() {
      return this.$createElement('div', {
        class: {
          'v-slider': true,
          'v-slider--horizontal': !this.vertical,
          'v-slider--vertical': this.vertical,
          'v-slider--focused': this.isFocused,
          'v-slider--active': this.isActive,
          'v-slider--disabled': this.isDisabled,
          'v-slider--readonly': this.isReadonly,
          ...this.themeClasses
        },
        directives: [{
          name: 'click-outside',
          value: this.onBlur
        }],
        on: {
          click: this.onSliderClick,
          mousedown: this.onSliderMouseDown,
          touchstart: this.onSliderMouseDown
        }
      }, this.genChildren());
    },

    genChildren() {
      return [this.genInput(), this.genTrackContainer(), this.genSteps(), this.genThumbContainer(this.internalValue, this.inputWidth, this.isActive, this.isFocused, this.onFocus, this.onBlur)];
    },

    genInput() {
      return this.$createElement('input', {
        attrs: {
          value: this.internalValue,
          id: this.computedId,
          disabled: true,
          readonly: true,
          tabindex: -1,
          ...this.$attrs
        }
      });
    },

    genTrackContainer() {
      const children = [this.$createElement('div', this.setBackgroundColor(this.computedTrackColor, {
        staticClass: 'v-slider__track-background',
        style: this.trackStyles
      })), this.$createElement('div', this.setBackgroundColor(this.computedTrackFillColor, {
        staticClass: 'v-slider__track-fill',
        style: this.trackFillStyles
      }))];
      return this.$createElement('div', {
        staticClass: 'v-slider__track-container',
        ref: 'track'
      }, children);
    },

    genSteps() {
      if (!this.step || !this.showTicks) return null;
      const tickSize = parseFloat(this.tickSize);
      const range = (0,_util_helpers__WEBPACK_IMPORTED_MODULE_6__.createRange)(this.numTicks + 1);
      const direction = this.vertical ? 'bottom' : this.$vuetify.rtl ? 'right' : 'left';
      const offsetDirection = this.vertical ? this.$vuetify.rtl ? 'left' : 'right' : 'top';
      if (this.vertical) range.reverse();
      const ticks = range.map(index => {
        const children = [];

        if (this.tickLabels[index]) {
          children.push(this.$createElement('div', {
            staticClass: 'v-slider__tick-label'
          }, this.tickLabels[index]));
        }

        const width = index * (100 / this.numTicks);
        const filled = this.$vuetify.rtl ? 100 - this.inputWidth < width : width < this.inputWidth;
        return this.$createElement('span', {
          key: index,
          staticClass: 'v-slider__tick',
          class: {
            'v-slider__tick--filled': filled
          },
          style: {
            width: `${tickSize}px`,
            height: `${tickSize}px`,
            [direction]: `calc(${width}% - ${tickSize / 2}px)`,
            [offsetDirection]: `calc(50% - ${tickSize / 2}px)`
          }
        }, children);
      });
      return this.$createElement('div', {
        staticClass: 'v-slider__ticks-container',
        class: {
          'v-slider__ticks-container--always-show': this.ticks === 'always' || this.tickLabels.length > 0
        }
      }, ticks);
    },

    genThumbContainer(value, valueWidth, isActive, isFocused, onFocus, onBlur, ref = 'thumb') {
      const children = [this.genThumb()];
      const thumbLabelContent = this.genThumbLabelContent(value);
      this.showThumbLabel && children.push(this.genThumbLabel(thumbLabelContent));
      return this.$createElement('div', this.setTextColor(this.computedThumbColor, {
        ref,
        key: ref,
        staticClass: 'v-slider__thumb-container',
        class: {
          'v-slider__thumb-container--active': isActive,
          'v-slider__thumb-container--focused': isFocused,
          'v-slider__thumb-container--show-label': this.showThumbLabel
        },
        style: this.getThumbContainerStyles(valueWidth),
        attrs: {
          role: 'slider',
          tabindex: this.isDisabled ? -1 : this.$attrs.tabindex ? this.$attrs.tabindex : 0,
          'aria-label': this.$attrs['aria-label'] || this.label,
          'aria-valuemin': this.min,
          'aria-valuemax': this.max,
          'aria-valuenow': this.internalValue,
          'aria-readonly': String(this.isReadonly),
          'aria-orientation': this.vertical ? 'vertical' : 'horizontal'
        },
        on: {
          focus: onFocus,
          blur: onBlur,
          keydown: this.onKeyDown
        }
      }), children);
    },

    genThumbLabelContent(value) {
      return this.$scopedSlots['thumb-label'] ? this.$scopedSlots['thumb-label']({
        value
      }) : [this.$createElement('span', [String(value)])];
    },

    genThumbLabel(content) {
      const size = (0,_util_helpers__WEBPACK_IMPORTED_MODULE_6__.convertToUnit)(this.thumbSize);
      const transform = this.vertical ? `translateY(20%) translateY(${Number(this.thumbSize) / 3 - 1}px) translateX(55%) rotate(135deg)` : `translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)`;
      return this.$createElement(_transitions__WEBPACK_IMPORTED_MODULE_7__.VScaleTransition, {
        props: {
          origin: 'bottom center'
        }
      }, [this.$createElement('div', {
        staticClass: 'v-slider__thumb-label-container',
        directives: [{
          name: 'show',
          value: this.isFocused || this.isActive || this.thumbLabel === 'always'
        }]
      }, [this.$createElement('div', this.setBackgroundColor(this.computedThumbColor, {
        staticClass: 'v-slider__thumb-label',
        style: {
          height: size,
          width: size,
          transform
        }
      }), [this.$createElement('div', content)])])]);
    },

    genThumb() {
      return this.$createElement('div', this.setBackgroundColor(this.computedThumbColor, {
        staticClass: 'v-slider__thumb'
      }));
    },

    getThumbContainerStyles(width) {
      const direction = this.vertical ? 'top' : 'left';
      let value = this.$vuetify.rtl ? 100 - width : width;
      value = this.vertical ? 100 - value : value;
      return {
        transition: this.trackTransition,
        [direction]: `${value}%`
      };
    },

    onSliderMouseDown(e) {
      var _e$target;

      e.preventDefault();
      this.oldValue = this.internalValue;
      this.isActive = true;

      if ((_e$target = e.target) != null && _e$target.matches('.v-slider__thumb-container, .v-slider__thumb-container *')) {
        this.thumbPressed = true;
        const domRect = e.target.getBoundingClientRect();
        const touch = 'touches' in e ? e.touches[0] : e;
        this.startOffset = this.vertical ? touch.clientY - (domRect.top + domRect.height / 2) : touch.clientX - (domRect.left + domRect.width / 2);
      } else {
        this.startOffset = 0;
        window.clearTimeout(this.mouseTimeout);
        this.mouseTimeout = window.setTimeout(() => {
          this.thumbPressed = true;
        }, 300);
      }

      const mouseUpOptions = _util_helpers__WEBPACK_IMPORTED_MODULE_6__.passiveSupported ? {
        passive: true,
        capture: true
      } : true;
      const mouseMoveOptions = _util_helpers__WEBPACK_IMPORTED_MODULE_6__.passiveSupported ? {
        passive: true
      } : false;
      const isTouchEvent = ('touches' in e);
      this.onMouseMove(e);
      this.app.addEventListener(isTouchEvent ? 'touchmove' : 'mousemove', this.onMouseMove, mouseMoveOptions);
      (0,_util_helpers__WEBPACK_IMPORTED_MODULE_6__.addOnceEventListener)(this.app, isTouchEvent ? 'touchend' : 'mouseup', this.onSliderMouseUp, mouseUpOptions);
      this.$emit('start', this.internalValue);
    },

    onSliderMouseUp(e) {
      e.stopPropagation();
      window.clearTimeout(this.mouseTimeout);
      this.thumbPressed = false;
      const mouseMoveOptions = _util_helpers__WEBPACK_IMPORTED_MODULE_6__.passiveSupported ? {
        passive: true
      } : false;
      this.app.removeEventListener('touchmove', this.onMouseMove, mouseMoveOptions);
      this.app.removeEventListener('mousemove', this.onMouseMove, mouseMoveOptions);
      this.$emit('mouseup', e);
      this.$emit('end', this.internalValue);

      if (!(0,_util_helpers__WEBPACK_IMPORTED_MODULE_6__.deepEqual)(this.oldValue, this.internalValue)) {
        this.$emit('change', this.internalValue);
        this.noClick = true;
      }

      this.isActive = false;
    },

    onMouseMove(e) {
      if (e.type === 'mousemove') {
        this.thumbPressed = true;
      }

      this.internalValue = this.parseMouseMove(e);
    },

    onKeyDown(e) {
      if (!this.isInteractive) return;
      const value = this.parseKeyDown(e, this.internalValue);
      if (value == null || value < this.minValue || value > this.maxValue) return;
      this.internalValue = value;
      this.$emit('change', value);
    },

    onSliderClick(e) {
      if (this.noClick) {
        this.noClick = false;
        return;
      }

      const thumb = this.$refs.thumb;
      thumb.focus();
      this.onMouseMove(e);
      this.$emit('change', this.internalValue);
    },

    onBlur(e) {
      this.isFocused = false;
      this.$emit('blur', e);
    },

    onFocus(e) {
      this.isFocused = true;
      this.$emit('focus', e);
    },

    parseMouseMove(e) {
      const start = this.vertical ? 'top' : 'left';
      const length = this.vertical ? 'height' : 'width';
      const click = this.vertical ? 'clientY' : 'clientX';
      const {
        [start]: trackStart,
        [length]: trackLength
      } = this.$refs.track.getBoundingClientRect();
      const clickOffset = 'touches' in e ? e.touches[0][click] : e[click]; // It is possible for left to be NaN, force to number

      let clickPos = Math.min(Math.max((clickOffset - trackStart - this.startOffset) / trackLength, 0), 1) || 0;
      if (this.vertical) clickPos = 1 - clickPos;
      if (this.$vuetify.rtl) clickPos = 1 - clickPos;
      return parseFloat(this.min) + clickPos * (this.maxValue - this.minValue);
    },

    parseKeyDown(e, value) {
      if (!this.isInteractive) return;
      const {
        pageup,
        pagedown,
        end,
        home,
        left,
        right,
        down,
        up
      } = _util_helpers__WEBPACK_IMPORTED_MODULE_6__.keyCodes;
      if (![pageup, pagedown, end, home, left, right, down, up].includes(e.keyCode)) return;
      e.preventDefault();
      const step = this.stepNumeric || 1;
      const steps = (this.maxValue - this.minValue) / step;

      if ([left, right, down, up].includes(e.keyCode)) {
        const increase = this.$vuetify.rtl ? [left, up] : [right, up];
        const direction = increase.includes(e.keyCode) ? 1 : -1;
        const multiplier = e.shiftKey ? 3 : e.ctrlKey ? 2 : 1;
        value = value + direction * step * multiplier;
      } else if (e.keyCode === home) {
        value = this.minValue;
      } else if (e.keyCode === end) {
        value = this.maxValue;
      } else {
        const direction = e.keyCode === pagedown ? 1 : -1;
        value = value - direction * step * (steps > 100 ? steps / 10 : 10);
      }

      return value;
    },

    roundValue(value) {
      if (!this.stepNumeric) return value; // Format input value using the same number
      // of decimals places as in the step prop

      const trimmedStep = this.step.toString().trim();
      const decimals = trimmedStep.indexOf('.') > -1 ? trimmedStep.length - trimmedStep.indexOf('.') - 1 : 0;
      const offset = this.minValue % this.stepNumeric;
      const newValue = Math.round((value - offset) / this.stepNumeric) * this.stepNumeric + offset;
      return parseFloat(Math.min(newValue, this.maxValue).toFixed(decimals));
    }

  }
}));
//# sourceMappingURL=VSlider.js.map

/***/ }),

/***/ "./node_modules/web-worker/cjs/browser.js":
/*!************************************************!*\
  !*** ./node_modules/web-worker/cjs/browser.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
module.exports = Worker;

/***/ }),

/***/ "./node_modules/codec-parser/index.js":
/*!********************************************!*\
  !*** ./node_modules/codec-parser/index.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_CodecParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/CodecParser.js */ "./node_modules/codec-parser/src/CodecParser.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_src_CodecParser_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/codec-parser/src/CodecParser.js":
/*!******************************************************!*\
  !*** ./node_modules/codec-parser/src/CodecParser.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CodecParser)
/* harmony export */ });
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ "./node_modules/codec-parser/src/utilities.js");
/* harmony import */ var _codecs_HeaderCache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./codecs/HeaderCache.js */ "./node_modules/codec-parser/src/codecs/HeaderCache.js");
/* harmony import */ var _codecs_mpeg_MPEGParser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./codecs/mpeg/MPEGParser.js */ "./node_modules/codec-parser/src/codecs/mpeg/MPEGParser.js");
/* harmony import */ var _codecs_aac_AACParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./codecs/aac/AACParser.js */ "./node_modules/codec-parser/src/codecs/aac/AACParser.js");
/* harmony import */ var _codecs_flac_FLACParser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./codecs/flac/FLACParser.js */ "./node_modules/codec-parser/src/codecs/flac/FLACParser.js");
/* harmony import */ var _containers_ogg_OggParser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/ogg/OggParser.js */ "./node_modules/codec-parser/src/containers/ogg/OggParser.js");
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of codec-parser.
    
    codec-parser is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    codec-parser is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/








const noOp = () => {};

class CodecParser {
  constructor(mimeType, { onCodecUpdate, onCodec, enableLogging } = {}) {
    this._inputMimeType = mimeType;
    this._onCodec = onCodec || noOp;
    this._onCodecUpdate = onCodecUpdate;
    this._enableLogging = enableLogging;

    this._generator = this._getGenerator();
    this._generator.next();
  }

  /**
   * @public
   * @returns The detected codec
   */
  get codec() {
    return this._parser.codec;
  }

  /**
   * @public
   * @description Generator function that yields any buffered CodecFrames and resets the CodecParser
   * @returns {Iterable<CodecFrame|OggPage>} Iterator that operates over the codec data.
   * @yields {CodecFrame|OggPage} Parsed codec or ogg page data
   */
  *flush() {
    this._flushing = true;

    for (let i = this._generator.next(); i.value; i = this._generator.next()) {
      yield i.value;
    }

    this._flushing = false;

    this._generator = this._getGenerator();
    this._generator.next();
  }

  /**
   * @public
   * @description Generator function takes in a Uint8Array of data and returns a CodecFrame from the data for each iteration
   * @param {Uint8Array} chunk Next chunk of codec data to read
   * @returns {Iterable<CodecFrame|OggPage>} Iterator that operates over the codec data.
   * @yields {CodecFrame|OggPage} Parsed codec or ogg page data
   */
  *parseChunk(chunk) {
    for (
      let i = this._generator.next(chunk);
      i.value;
      i = this._generator.next()
    ) {
      yield i.value;
    }
  }

  /**
   * @public
   * @description Parses an entire file and returns all of the contained frames.
   * @param {Uint8Array} fileData Coded data to read
   * @returns {Array<CodecFrame|OggPage>} CodecFrames
   */
  parseAll(fileData) {
    return [...this.parseChunk(fileData), ...this.flush()];
  }

  /**
   * @private
   */
  *_getGenerator() {
    this._headerCache = new _codecs_HeaderCache_js__WEBPACK_IMPORTED_MODULE_1__["default"](this._onCodecUpdate);

    if (this._inputMimeType.match(/aac/)) {
      this._parser = new _codecs_aac_AACParser_js__WEBPACK_IMPORTED_MODULE_3__["default"](this, this._headerCache, this._onCodec);
    } else if (this._inputMimeType.match(/mpeg/)) {
      this._parser = new _codecs_mpeg_MPEGParser_js__WEBPACK_IMPORTED_MODULE_2__["default"](this, this._headerCache, this._onCodec);
    } else if (this._inputMimeType.match(/flac/)) {
      this._parser = new _codecs_flac_FLACParser_js__WEBPACK_IMPORTED_MODULE_4__["default"](this, this._headerCache, this._onCodec);
    } else if (this._inputMimeType.match(/ogg/)) {
      this._parser = new _containers_ogg_OggParser_js__WEBPACK_IMPORTED_MODULE_5__["default"](this, this._headerCache, this._onCodec);
    } else {
      throw new Error(`Unsupported Codec ${mimeType}`);
    }

    this._frameNumber = 0;
    this._currentReadPosition = 0;
    this._totalBytesIn = 0;
    this._totalBytesOut = 0;
    this._totalSamples = 0;
    this._sampleRate = undefined;

    this._rawData = new Uint8Array(0);

    // start parsing out frames
    while (true) {
      const frame = yield* this._parser.parseFrame();
      if (frame) yield frame;
    }
  }

  /**
   * @protected
   * @param {number} minSize Minimum bytes to have present in buffer
   * @returns {Uint8Array} rawData
   */
  *readRawData(minSize = 0, readOffset = 0) {
    let rawData;

    while (this._rawData.length <= minSize + readOffset) {
      rawData = yield;

      if (this._flushing) return this._rawData.subarray(readOffset);

      if (rawData) {
        this._totalBytesIn += rawData.length;
        this._rawData = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.concatBuffers)(this._rawData, rawData);
      }
    }

    return this._rawData.subarray(readOffset);
  }

  /**
   * @protected
   * @param {number} increment Bytes to increment codec data
   */
  incrementRawData(increment) {
    this._currentReadPosition += increment;
    this._rawData = this._rawData.subarray(increment);
  }

  /**
   * @protected
   */
  mapCodecFrameStats(frame) {
    this._sampleRate = frame.header.sampleRate;

    frame.header.bitrate = Math.round(frame.data.length / frame.duration) * 8;
    frame.frameNumber = this._frameNumber++;
    frame.totalBytesOut = this._totalBytesOut;
    frame.totalSamples = this._totalSamples;
    frame.totalDuration = (this._totalSamples / this._sampleRate) * 1000;
    frame.crc32 = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.crc32)(frame.data);

    this._headerCache.checkCodecUpdate(
      frame.header.bitrate,
      frame.totalDuration
    );

    this._totalBytesOut += frame.data.length;
    this._totalSamples += frame.samples;
  }

  /**
   * @protected
   */
  mapFrameStats(frame) {
    if (frame.codecFrames) {
      // Ogg container
      frame.codecFrames.forEach((codecFrame) => {
        frame.duration += codecFrame.duration;
        frame.samples += codecFrame.samples;
        this.mapCodecFrameStats(codecFrame);
      });

      frame.totalSamples = this._totalSamples;
      frame.totalDuration = (this._totalSamples / this._sampleRate) * 1000 || 0;
      frame.totalBytesOut = this._totalBytesOut;
    } else {
      this.mapCodecFrameStats(frame);
    }
  }

  /**
   * @private
   */
  _log(logger, messages) {
    if (this._enableLogging) {
      const stats = [
        `codec:         ${this.codec}`,
        `inputMimeType: ${this._inputMimeType}`,
        `readPosition:  ${this._currentReadPosition}`,
        `totalBytesIn:  ${this._totalBytesIn}`,
        `totalBytesOut: ${this._totalBytesOut}`,
      ];

      const width = Math.max(...stats.map((s) => s.length));

      messages.push(
        `--stats--${"-".repeat(width - 9)}`,
        ...stats,
        "-".repeat(width)
      );

      logger(
        "codec-parser",
        messages.reduce((acc, message) => acc + "\n  " + message, "")
      );
    }
  }

  /**
   * @protected
   */
  logWarning(...messages) {
    this._log(console.warn, messages);
  }

  /**
   * @protected
   */
  logError(...messages) {
    this._log(console.error, messages);
  }
}


/***/ }),

/***/ "./node_modules/codec-parser/src/codecs/CodecFrame.js":
/*!************************************************************!*\
  !*** ./node_modules/codec-parser/src/codecs/CodecFrame.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CodecFrame)
/* harmony export */ });
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals.js */ "./node_modules/codec-parser/src/globals.js");
/* harmony import */ var _containers_Frame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/Frame.js */ "./node_modules/codec-parser/src/containers/Frame.js");
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of codec-parser.
    
    codec-parser is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    codec-parser is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/




class CodecFrame extends _containers_Frame_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  static *getFrame(Header, Frame, codecParser, headerCache, readOffset) {
    const header = yield* Header.getHeader(
      codecParser,
      headerCache,
      readOffset
    );

    if (header) {
      const frameLength = _globals_js__WEBPACK_IMPORTED_MODULE_0__.headerStore.get(header).frameLength;
      const samples = _globals_js__WEBPACK_IMPORTED_MODULE_0__.headerStore.get(header).samples;

      const frame = (yield* codecParser.readRawData(
        frameLength,
        readOffset
      )).subarray(0, frameLength);

      return new Frame(header, frame, samples);
    } else {
      return null;
    }
  }

  constructor(header, data, samples) {
    super(header, data);

    this.header = header;
    this.samples = samples;
    this.duration = (samples / header.sampleRate) * 1000;
    this.frameNumber = null;
    this.totalBytesOut = null;
    this.totalSamples = null;
    this.totalDuration = null;

    _globals_js__WEBPACK_IMPORTED_MODULE_0__.frameStore.get(this).length = data.length;
  }
}


/***/ }),

/***/ "./node_modules/codec-parser/src/codecs/CodecHeader.js":
/*!*************************************************************!*\
  !*** ./node_modules/codec-parser/src/codecs/CodecHeader.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CodecHeader)
/* harmony export */ });
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals.js */ "./node_modules/codec-parser/src/globals.js");
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of codec-parser.
    
    codec-parser is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    codec-parser is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/



class CodecHeader {
  /**
   * @private
   */
  constructor(header) {
    _globals_js__WEBPACK_IMPORTED_MODULE_0__.headerStore.set(this, header);

    this.bitDepth = header.bitDepth;
    this.bitrate = null; // set during frame mapping
    this.channels = header.channels;
    this.channelMode = header.channelMode;
    this.sampleRate = header.sampleRate;
  }
}


/***/ }),

/***/ "./node_modules/codec-parser/src/codecs/HeaderCache.js":
/*!*************************************************************!*\
  !*** ./node_modules/codec-parser/src/codecs/HeaderCache.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderCache)
/* harmony export */ });
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of codec-parser.
    
    codec-parser is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    codec-parser is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/

class HeaderCache {
  constructor(onCodecUpdate) {
    this._onCodecUpdate = onCodecUpdate;
    this.reset();
  }

  enable() {
    this._isEnabled = true;
  }

  reset() {
    this._headerCache = new Map();
    this._codecUpdateData = new WeakMap();
    this._codecShouldUpdate = false;
    this._bitrate = null;
    this._isEnabled = false;
  }

  checkCodecUpdate(bitrate, totalDuration) {
    if (this._onCodecUpdate) {
      if (this._bitrate !== bitrate) {
        this._bitrate = bitrate;
        this._codecShouldUpdate = true;
      }

      if (this._codecShouldUpdate) {
        this._onCodecUpdate(
          {
            bitrate,
            ...this._codecUpdateData.get(
              this._headerCache.get(this._currentHeader)
            ),
          },
          totalDuration
        );
      }

      this._codecShouldUpdate = false;
    }
  }

  updateCurrentHeader(key) {
    if (this._onCodecUpdate && key !== this._currentHeader) {
      this._codecShouldUpdate = true;
      this._currentHeader = key;
    }
  }

  getHeader(key) {
    const header = this._headerCache.get(key);

    if (header) {
      this.updateCurrentHeader(key);
    }

    return header;
  }

  setHeader(key, header, codecUpdateFields) {
    if (this._isEnabled) {
      this.updateCurrentHeader(key);

      this._headerCache.set(key, header);
      this._codecUpdateData.set(header, codecUpdateFields);
    }
  }
}


/***/ }),

/***/ "./node_modules/codec-parser/src/codecs/Parser.js":
/*!********************************************************!*\
  !*** ./node_modules/codec-parser/src/codecs/Parser.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Parser)
/* harmony export */ });
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals.js */ "./node_modules/codec-parser/src/globals.js");
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of codec-parser.
    
    codec-parser is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    codec-parser is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/



/**
 * @abstract
 * @description Abstract class containing methods for parsing codec frames
 */
class Parser {
  constructor(codecParser, headerCache) {
    this._codecParser = codecParser;
    this._headerCache = headerCache;
  }

  *syncFrame() {
    let frame;

    do {
      frame = yield* this.Frame.getFrame(
        this._codecParser,
        this._headerCache,
        0
      );
      if (frame) return frame;
      this._codecParser.incrementRawData(1); // increment to continue syncing
    } while (true);
  }

  /**
   * @description Searches for Frames within bytes containing a sequence of known codec frames.
   * @param {boolean} ignoreNextFrame Set to true to return frames even if the next frame may not exist at the expected location
   * @returns {Frame}
   */
  *fixedLengthFrameSync(ignoreNextFrame) {
    let frame = yield* this.syncFrame();
    const frameLength = _globals_js__WEBPACK_IMPORTED_MODULE_0__.frameStore.get(frame).length;

    if (
      ignoreNextFrame ||
      this._codecParser._flushing ||
      // check if there is a frame right after this one
      (yield* this.Header.getHeader(
        this._codecParser,
        this._headerCache,
        frameLength
      ))
    ) {
      this._headerCache.enable(); // start caching when synced

      this._codecParser.incrementRawData(frameLength); // increment to the next frame
      this._codecParser.mapFrameStats(frame);
      return frame;
    }

    this._codecParser.logWarning(
      `Missing frame frame at ${frameLength} bytes from current position.`,
      "Dropping current frame and trying again."
    );
    this._headerCache.reset(); // frame is invalid and must re-sync and clear cache
    this._codecParser.incrementRawData(1); // increment to invalidate the current frame
  }
}


/***/ }),

/***/ "./node_modules/codec-parser/src/codecs/aac/AACFrame.js":
/*!**************************************************************!*\
  !*** ./node_modules/codec-parser/src/codecs/aac/AACFrame.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AACFrame)
/* harmony export */ });
/* harmony import */ var _CodecFrame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CodecFrame.js */ "./node_modules/codec-parser/src/codecs/CodecFrame.js");
/* harmony import */ var _AACHeader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AACHeader.js */ "./node_modules/codec-parser/src/codecs/aac/AACHeader.js");
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of codec-parser.
    
    codec-parser is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    codec-parser is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/




class AACFrame extends _CodecFrame_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static *getFrame(codecParser, headerCache, readOffset) {
    return yield* super.getFrame(
      _AACHeader_js__WEBPACK_IMPORTED_MODULE_1__["default"],
      AACFrame,
      codecParser,
      headerCache,
      readOffset
    );
  }

  constructor(header, frame, samples) {
    super(header, frame, samples);
  }
}


/***/ }),

/***/ "./node_modules/codec-parser/src/codecs/aac/AACHeader.js":
/*!***************************************************************!*\
  !*** ./node_modules/codec-parser/src/codecs/aac/AACHeader.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AACHeader)
/* harmony export */ });
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globals.js */ "./node_modules/codec-parser/src/globals.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities.js */ "./node_modules/codec-parser/src/utilities.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants.js */ "./node_modules/codec-parser/src/constants.js");
/* harmony import */ var _CodecHeader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CodecHeader.js */ "./node_modules/codec-parser/src/codecs/CodecHeader.js");
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of codec-parser.
    
    codec-parser is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    codec-parser is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/

/*
https://wiki.multimedia.cx/index.php/ADTS

AAAAAAAA AAAABCCD EEFFFFGH HHIJKLMM MMMMMMMM MMMOOOOO OOOOOOPP (QQQQQQQQ QQQQQQQQ)

AACHeader consists of 7 or 9 bytes (without or with CRC).
Letter  Length (bits)  Description
A  12  syncword 0xFFF, all bits must be 1
B  1   MPEG Version: 0 for MPEG-4, 1 for MPEG-2
C  2   Layer: always 0
D  1   protection absent, Warning, set to 1 if there is no CRC and 0 if there is CRC
E  2   profile, the MPEG-4 Audio Object Type minus 1
F  4   MPEG-4 Sampling Frequency Index (15 is forbidden)
G  1   private bit, guaranteed never to be used by MPEG, set to 0 when encoding, ignore when decoding
H  3   MPEG-4 Channel Configuration (in the case of 0, the channel configuration is sent via an inband PCE)
I  1   originality, set to 0 when encoding, ignore when decoding
J  1   home, set to 0 when encoding, ignore when decoding
K  1   copyrighted id bit, the next bit of a centrally registered copyright identifier, set to 0 when encoding, ignore when decoding
L  1   copyright id start, signals that this frame's copyright id bit is the first bit of the copyright id, set to 0 when encoding, ignore when decoding
M  13  frame length, this value must include 7 or 9 bytes of header length: FrameLength = (ProtectionAbsent == 1 ? 7 : 9) + size(AACFrame)
O  11  Buffer fullness // 0x7FF for VBR
P  2   Number of AAC frames (RDBs) in ADTS frame minus 1, for maximum compatibility always use 1 AAC frame per ADTS frame
Q  16  CRC if protection absent is 0 
*/







const mpegVersion = {
  0b00000000: "MPEG-4",
  0b00001000: "MPEG-2",
};

const layer = {
  0b00000000: "valid",
  0b00000010: _constants_js__WEBPACK_IMPORTED_MODULE_2__.bad,
  0b00000100: _constants_js__WEBPACK_IMPORTED_MODULE_2__.bad,
  0b00000110: _constants_js__WEBPACK_IMPORTED_MODULE_2__.bad,
};

const protection = {
  0b00000000: _constants_js__WEBPACK_IMPORTED_MODULE_2__.sixteenBitCRC,
  0b00000001: _constants_js__WEBPACK_IMPORTED_MODULE_2__.none,
};

const profile = {
  0b00000000: "AAC Main",
  0b01000000: "AAC LC (Low Complexity)",
  0b10000000: "AAC SSR (Scalable Sample Rate)",
  0b11000000: "AAC LTP (Long Term Prediction)",
};

const sampleRates = {
  0b00000000: _constants_js__WEBPACK_IMPORTED_MODULE_2__.rate96000,
  0b00000100: _constants_js__WEBPACK_IMPORTED_MODULE_2__.rate88200,
  0b00001000: _constants_js__WEBPACK_IMPORTED_MODULE_2__.rate64000,
  0b00001100: _constants_js__WEBPACK_IMPORTED_MODULE_2__.rate48000,
  0b00010000: _constants_js__WEBPACK_IMPORTED_MODULE_2__.rate44100,
  0b00010100: _constants_js__WEBPACK_IMPORTED_MODULE_2__.rate32000,
  0b00011000: _constants_js__WEBPACK_IMPORTED_MODULE_2__.rate24000,
  0b00011100: _constants_js__WEBPACK_IMPORTED_MODULE_2__.rate22050,
  0b00100000: _constants_js__WEBPACK_IMPORTED_MODULE_2__.rate16000,
  0b00100100: _constants_js__WEBPACK_IMPORTED_MODULE_2__.rate12000,
  0b00101000: _constants_js__WEBPACK_IMPORTED_MODULE_2__.rate11025,
  0b00101100: _constants_js__WEBPACK_IMPORTED_MODULE_2__.rate8000,
  0b00110000: _constants_js__WEBPACK_IMPORTED_MODULE_2__.rate7350,
  0b00110100: _constants_js__WEBPACK_IMPORTED_MODULE_2__.reserved,
  0b00111000: _constants_js__WEBPACK_IMPORTED_MODULE_2__.reserved,
  0b00111100: "frequency is written explicitly",
};

// prettier-ignore
const channelMode = {
  0b000000000: { channels: 0, description: "Defined in AOT Specific Config" },
  /*
  'monophonic (mono)'
  'stereo (left, right)'
  'linear surround (front center, front left, front right)'
  'quadraphonic (front center, front left, front right, rear center)'
  '5.0 surround (front center, front left, front right, rear left, rear right)'
  '5.1 surround (front center, front left, front right, rear left, rear right, LFE)'
  '7.1 surround (front center, front left, front right, side left, side right, rear left, rear right, LFE)'
  */
  0b001000000: { channels: 1, description: _constants_js__WEBPACK_IMPORTED_MODULE_2__.monophonic },
  0b010000000: { channels: 2, description: (0,_constants_js__WEBPACK_IMPORTED_MODULE_2__.getChannelMapping)(2,_constants_js__WEBPACK_IMPORTED_MODULE_2__.channelMappings[0][0]) },
  0b011000000: { channels: 3, description: (0,_constants_js__WEBPACK_IMPORTED_MODULE_2__.getChannelMapping)(3,_constants_js__WEBPACK_IMPORTED_MODULE_2__.channelMappings[1][3]), },
  0b100000000: { channels: 4, description: (0,_constants_js__WEBPACK_IMPORTED_MODULE_2__.getChannelMapping)(4,_constants_js__WEBPACK_IMPORTED_MODULE_2__.channelMappings[1][3],_constants_js__WEBPACK_IMPORTED_MODULE_2__.channelMappings[3][4]), },
  0b101000000: { channels: 5, description: (0,_constants_js__WEBPACK_IMPORTED_MODULE_2__.getChannelMapping)(5,_constants_js__WEBPACK_IMPORTED_MODULE_2__.channelMappings[1][3],_constants_js__WEBPACK_IMPORTED_MODULE_2__.channelMappings[3][0]), },
  0b110000000: { channels: 6, description: (0,_constants_js__WEBPACK_IMPORTED_MODULE_2__.getChannelMapping)(6,_constants_js__WEBPACK_IMPORTED_MODULE_2__.channelMappings[1][3],_constants_js__WEBPACK_IMPORTED_MODULE_2__.channelMappings[3][0],_constants_js__WEBPACK_IMPORTED_MODULE_2__.lfe), },
  0b111000000: { channels: 8, description: (0,_constants_js__WEBPACK_IMPORTED_MODULE_2__.getChannelMapping)(8,_constants_js__WEBPACK_IMPORTED_MODULE_2__.channelMappings[1][3],_constants_js__WEBPACK_IMPORTED_MODULE_2__.channelMappings[2][0],_constants_js__WEBPACK_IMPORTED_MODULE_2__.channelMappings[3][0],_constants_js__WEBPACK_IMPORTED_MODULE_2__.lfe), },
};

class AACHeader extends _CodecHeader_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  static *getHeader(codecParser, headerCache, readOffset) {
    const header = {};

    // Must be at least seven bytes. Out of data
    const data = yield* codecParser.readRawData(7, readOffset);

    // Check header cache
    const key = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.bytesToString)([
      data[0],
      data[1],
      data[2],
      (data[3] & 0b11111100) | (data[6] & 0b00000011), // frame length, buffer fullness varies so don't cache it
    ]);
    const cachedHeader = headerCache.getHeader(key);

    if (!cachedHeader) {
      // Frame sync (all bits must be set): `11111111|1111`:
      if (data[0] !== 0xff || data[1] < 0xf0) return null;

      // Byte (2 of 7)
      // * `1111BCCD`
      // * `....B...`: MPEG Version: 0 for MPEG-4, 1 for MPEG-2
      // * `.....CC.`: Layer: always 0
      // * `.......D`: protection absent, Warning, set to 1 if there is no CRC and 0 if there is CRC
      header.mpegVersion = mpegVersion[data[1] & 0b00001000];

      header.layer = layer[data[1] & 0b00000110];
      if (header.layer === _constants_js__WEBPACK_IMPORTED_MODULE_2__.bad) return null;

      const protectionBit = data[1] & 0b00000001;
      header.protection = protection[protectionBit];
      header.length = protectionBit ? 7 : 9;

      // Byte (3 of 7)
      // * `EEFFFFGH`
      // * `EE......`: profile, the MPEG-4 Audio Object Type minus 1
      // * `..FFFF..`: MPEG-4 Sampling Frequency Index (15 is forbidden)
      // * `......G.`: private bit, guaranteed never to be used by MPEG, set to 0 when encoding, ignore when decoding
      header.profileBits = data[2] & 0b11000000;
      header.sampleRateBits = data[2] & 0b00111100;
      const privateBit = data[2] & 0b00000010;

      header.profile = profile[header.profileBits];

      header.sampleRate = sampleRates[header.sampleRateBits];
      if (header.sampleRate === _constants_js__WEBPACK_IMPORTED_MODULE_2__.reserved) return null;

      header.isPrivate = Boolean(privateBit);

      // Byte (3,4 of 7)
      // * `.......H|HH......`: MPEG-4 Channel Configuration (in the case of 0, the channel configuration is sent via an inband PCE)
      header.channelModeBits = ((data[2] << 8) | data[3]) & 0b111000000;
      header.channelMode = channelMode[header.channelModeBits].description;
      header.channels = channelMode[header.channelModeBits].channels;

      // Byte (4 of 7)
      // * `HHIJKLMM`
      // * `..I.....`: originality, set to 0 when encoding, ignore when decoding
      // * `...J....`: home, set to 0 when encoding, ignore when decoding
      // * `....K...`: copyrighted id bit, the next bit of a centrally registered copyright identifier, set to 0 when encoding, ignore when decoding
      // * `.....L..`: copyright id start, signals that this frame's copyright id bit is the first bit of the copyright id, set to 0 when encoding, ignore when decoding
      header.isOriginal = Boolean(data[3] & 0b00100000);
      header.isHome = Boolean(data[3] & 0b00001000);
      header.copyrightId = Boolean(data[3] & 0b00001000);
      header.copyrightIdStart = Boolean(data[3] & 0b00000100);
      header.bitDepth = 16;
      header.samples = 1024;

      // Byte (7 of 7)
      // * `......PP` Number of AAC frames (RDBs) in ADTS frame minus 1, for maximum compatibility always use 1 AAC frame per ADTS frame
      header.numberAACFrames = data[6] & 0b00000011;

      const {
        length,
        channelModeBits,
        profileBits,
        sampleRateBits,
        frameLength,
        samples,
        numberAACFrames,
        ...codecUpdateFields
      } = header;
      headerCache.setHeader(key, header, codecUpdateFields);
    } else {
      Object.assign(header, cachedHeader);
    }

    // Byte (4,5,6 of 7)
    // * `.......MM|MMMMMMMM|MMM.....`: frame length, this value must include 7 or 9 bytes of header length: FrameLength = (ProtectionAbsent == 1 ? 7 : 9) + size(AACFrame)
    header.frameLength =
      ((data[3] << 11) | (data[4] << 3) | (data[5] >> 5)) & 0x1fff;
    if (!header.frameLength) return null;

    // Byte (6,7 of 7)
    // * `...OOOOO|OOOOOO..`: Buffer fullness
    const bufferFullnessBits = ((data[5] << 6) | (data[6] >> 2)) & 0x7ff;
    header.bufferFullness =
      bufferFullnessBits === 0x7ff ? "VBR" : bufferFullnessBits;

    return new AACHeader(header);
  }

  /**
   * @private
   * Call AACHeader.getHeader(Array<Uint8>) to get instance
   */
  constructor(header) {
    super(header);

    this.copyrightId = header.copyrightId;
    this.copyrightIdStart = header.copyrightIdStart;
    this.bufferFullness = header.bufferFullness;
    this.isHome = header.isHome;
    this.isOriginal = header.isOriginal;
    this.isPrivate = header.isPrivate;
    this.layer = header.layer;
    this.length = header.length;
    this.mpegVersion = header.mpegVersion;
    this.numberAACFrames = header.numberAACFrames;
    this.profile = header.profile;
    this.protection = header.protection;
  }

  get audioSpecificConfig() {
    // Audio Specific Configuration
    // * `000EEFFF|F0HHH000`:
    // * `000EE...|........`: Object Type (profileBit + 1)
    // * `.....FFF|F.......`: Sample Rate
    // * `........|.0HHH...`: Channel Configuration
    // * `........|.....0..`: Frame Length (1024)
    // * `........|......0.`: does not depend on core coder
    // * `........|.......0`: Not Extension
    const header = _globals_js__WEBPACK_IMPORTED_MODULE_0__.headerStore.get(this);

    const audioSpecificConfig =
      ((header.profileBits + 0x40) << 5) |
      (header.sampleRateBits << 5) |
      (header.channelModeBits >> 3);

    const bytes = new Uint8Array(2);
    new DataView(bytes.buffer).setUint16(0, audioSpecificConfig, false);
    return bytes;
  }
}


/***/ }),

/***/ "./node_modules/codec-parser/src/codecs/aac/AACParser.js":
/*!***************************************************************!*\
  !*** ./node_modules/codec-parser/src/codecs/aac/AACParser.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AACParser)
/* harmony export */ });
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/codec-parser/src/codecs/Parser.js");
/* harmony import */ var _AACFrame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AACFrame.js */ "./node_modules/codec-parser/src/codecs/aac/AACFrame.js");
/* harmony import */ var _AACHeader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AACHeader.js */ "./node_modules/codec-parser/src/codecs/aac/AACHeader.js");
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of codec-parser.
    
    codec-parser is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    codec-parser is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/





class AACParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(codecParser, headerCache, onCodec) {
    super(codecParser, headerCache);
    this.Frame = _AACFrame_js__WEBPACK_IMPORTED_MODULE_1__["default"];
    this.Header = _AACHeader_js__WEBPACK_IMPORTED_MODULE_2__["default"];

    onCodec(this.codec);
  }

  get codec() {
    return "aac";
  }

  *parseFrame() {
    return yield* this.fixedLengthFrameSync();
  }
}


/***/ }),

/***/ "./node_modules/codec-parser/src/codecs/flac/FLACFrame.js":
/*!****************************************************************!*\
  !*** ./node_modules/codec-parser/src/codecs/flac/FLACFrame.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FLACFrame)
/* harmony export */ });
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globals.js */ "./node_modules/codec-parser/src/globals.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities.js */ "./node_modules/codec-parser/src/utilities.js");
/* harmony import */ var _CodecFrame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CodecFrame.js */ "./node_modules/codec-parser/src/codecs/CodecFrame.js");
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of codec-parser.
    
    codec-parser is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    codec-parser is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/





class FLACFrame extends _CodecFrame_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  static getFrameFooterCrc16(data) {
    return (data[data.length - 2] << 8) + data[data.length - 1];
  }

  // check frame footer crc
  // https://xiph.org/flac/format.html#frame_footer
  static checkFrameFooterCrc16(data) {
    const expectedCrc16 = FLACFrame.getFrameFooterCrc16(data);
    const actualCrc16 = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.flacCrc16)(data.subarray(0, -2));

    return expectedCrc16 === actualCrc16;
  }

  constructor(data, header, streamInfo) {
    header.streamInfo = streamInfo;
    header.crc16 = FLACFrame.getFrameFooterCrc16(data);

    super(header, data, _globals_js__WEBPACK_IMPORTED_MODULE_0__.headerStore.get(header).samples);
  }
}


/***/ }),

/***/ "./node_modules/codec-parser/src/codecs/flac/FLACHeader.js":
/*!*****************************************************************!*\
  !*** ./node_modules/codec-parser/src/codecs/flac/FLACHeader.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FLACHeader)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants.js */ "./node_modules/codec-parser/src/constants.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities.js */ "./node_modules/codec-parser/src/utilities.js");
/* harmony import */ var _CodecHeader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CodecHeader.js */ "./node_modules/codec-parser/src/codecs/CodecHeader.js");
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of codec-parser.
    
    codec-parser is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    codec-parser is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/

/*
https://xiph.org/flac/format.html

AAAAAAAA AAAAAABC DDDDEEEE FFFFGGGH 
(IIIIIIII...)
(JJJJJJJJ|JJJJJJJJ)
(KKKKKKKK|KKKKKKKK)
LLLLLLLLL

FLAC Frame Header
Letter  Length (bits)  Description
A   13  11111111|11111
B   1   Reserved 0 - mandatory, 1 - reserved
C   1   Blocking strategy, 0 - fixed, 1 - variable
D   4   Block size in inter-channel samples
E   4   Sample rate
F   4   Channel assignment
G   3   Sample size in bits
H   1   Reserved 0 - mandatory, 1 - reserved
I   ?   if(variable blocksize)
           <8-56>:"UTF-8" coded sample number (decoded number is 36 bits) [4]
        else
           <8-48>:"UTF-8" coded frame number (decoded number is 31 bits) [4]
J   ?   if(blocksize bits == 011x)
            8/16 bit (blocksize-1)
K   ?   if(sample rate bits == 11xx)
            8/16 bit sample rate
L   8   CRC-8 (polynomial = x^8 + x^2 + x^1 + x^0, initialized with 0) of everything before the crc, including the sync code
        
*/





const getFromStreamInfo = "get from STREAMINFO metadata block";

const blockingStrategy = {
  0b00000000: "Fixed",
  0b00000001: "Variable",
};

const blockSize = {
  0b00000000: _constants_js__WEBPACK_IMPORTED_MODULE_0__.reserved,
  0b00010000: 192,
  // 0b00100000: 576,
  // 0b00110000: 1152,
  // 0b01000000: 2304,
  // 0b01010000: 4608,
  // 0b01100000: "8-bit (blocksize-1) from end of header",
  // 0b01110000: "16-bit (blocksize-1) from end of header",
  // 0b10000000: 256,
  // 0b10010000: 512,
  // 0b10100000: 1024,
  // 0b10110000: 2048,
  // 0b11000000: 4096,
  // 0b11010000: 8192,
  // 0b11100000: 16384,
  // 0b11110000: 32768,
};
for (let i = 2; i < 16; i++)
  blockSize[i << 4] = i < 6 ? 576 * 2 ** (i - 2) : 2 ** i;

const sampleRate = {
  0b00000000: getFromStreamInfo,
  0b00000001: _constants_js__WEBPACK_IMPORTED_MODULE_0__.rate88200,
  0b00000010: _constants_js__WEBPACK_IMPORTED_MODULE_0__.rate176400,
  0b00000011: _constants_js__WEBPACK_IMPORTED_MODULE_0__.rate192000,
  0b00000100: _constants_js__WEBPACK_IMPORTED_MODULE_0__.rate8000,
  0b00000101: _constants_js__WEBPACK_IMPORTED_MODULE_0__.rate16000,
  0b00000110: _constants_js__WEBPACK_IMPORTED_MODULE_0__.rate22050,
  0b00000111: _constants_js__WEBPACK_IMPORTED_MODULE_0__.rate24000,
  0b00001000: _constants_js__WEBPACK_IMPORTED_MODULE_0__.rate32000,
  0b00001001: _constants_js__WEBPACK_IMPORTED_MODULE_0__.rate44100,
  0b00001010: _constants_js__WEBPACK_IMPORTED_MODULE_0__.rate48000,
  0b00001011: _constants_js__WEBPACK_IMPORTED_MODULE_0__.rate96000,
  // 0b00001100: "8-bit sample rate (in kHz) from end of header",
  // 0b00001101: "16-bit sample rate (in Hz) from end of header",
  // 0b00001110: "16-bit sample rate (in tens of Hz) from end of header",
  0b00001111: _constants_js__WEBPACK_IMPORTED_MODULE_0__.bad,
};

/* prettier-ignore */
const channelAssignments = {
  /*'
  'monophonic (mono)'
  'stereo (left, right)'
  'linear surround (left, right, center)'
  'quadraphonic (front left, front right, rear left, rear right)'
  '5.0 surround (front left, front right, front center, rear left, rear right)'
  '5.1 surround (front left, front right, front center, LFE, rear left, rear right)'
  '6.1 surround (front left, front right, front center, LFE, rear center, side left, side right)'
  '7.1 surround (front left, front right, front center, LFE, rear left, rear right, side left, side right)'
  */
  0b00000000: {channels: 1, description: _constants_js__WEBPACK_IMPORTED_MODULE_0__.monophonic},
  0b00010000: {channels: 2, description: (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.getChannelMapping)(2,_constants_js__WEBPACK_IMPORTED_MODULE_0__.channelMappings[0][0])},
  0b00100000: {channels: 3, description: (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.getChannelMapping)(3,_constants_js__WEBPACK_IMPORTED_MODULE_0__.channelMappings[0][1])},
  0b00110000: {channels: 4, description: (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.getChannelMapping)(4,_constants_js__WEBPACK_IMPORTED_MODULE_0__.channelMappings[1][0],_constants_js__WEBPACK_IMPORTED_MODULE_0__.channelMappings[3][0])},
  0b01000000: {channels: 5, description: (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.getChannelMapping)(5,_constants_js__WEBPACK_IMPORTED_MODULE_0__.channelMappings[1][1],_constants_js__WEBPACK_IMPORTED_MODULE_0__.channelMappings[3][0])},
  0b01010000: {channels: 6, description: (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.getChannelMapping)(6,_constants_js__WEBPACK_IMPORTED_MODULE_0__.channelMappings[1][1],_constants_js__WEBPACK_IMPORTED_MODULE_0__.lfe,_constants_js__WEBPACK_IMPORTED_MODULE_0__.channelMappings[3][0])},
  0b01100000: {channels: 7, description: (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.getChannelMapping)(7,_constants_js__WEBPACK_IMPORTED_MODULE_0__.channelMappings[1][1],_constants_js__WEBPACK_IMPORTED_MODULE_0__.lfe,_constants_js__WEBPACK_IMPORTED_MODULE_0__.channelMappings[3][4],_constants_js__WEBPACK_IMPORTED_MODULE_0__.channelMappings[2][0])},
  0b01110000: {channels: 8, description: (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.getChannelMapping)(8,_constants_js__WEBPACK_IMPORTED_MODULE_0__.channelMappings[1][1],_constants_js__WEBPACK_IMPORTED_MODULE_0__.lfe,_constants_js__WEBPACK_IMPORTED_MODULE_0__.channelMappings[3][0],_constants_js__WEBPACK_IMPORTED_MODULE_0__.channelMappings[2][0])},
  0b10000000: {channels: 2, description: `${_constants_js__WEBPACK_IMPORTED_MODULE_0__.stereo} (left, diff)`},
  0b10010000: {channels: 2, description: `${_constants_js__WEBPACK_IMPORTED_MODULE_0__.stereo} (diff, right)`},
  0b10100000: {channels: 2, description: `${_constants_js__WEBPACK_IMPORTED_MODULE_0__.stereo} (avg, diff)`},
  0b10110000: _constants_js__WEBPACK_IMPORTED_MODULE_0__.reserved,
  0b11000000: _constants_js__WEBPACK_IMPORTED_MODULE_0__.reserved,
  0b11010000: _constants_js__WEBPACK_IMPORTED_MODULE_0__.reserved,
  0b11100000: _constants_js__WEBPACK_IMPORTED_MODULE_0__.reserved,
  0b11110000: _constants_js__WEBPACK_IMPORTED_MODULE_0__.reserved,
}

const bitDepth = {
  0b00000000: getFromStreamInfo,
  0b00000010: 8,
  0b00000100: 12,
  0b00000110: _constants_js__WEBPACK_IMPORTED_MODULE_0__.reserved,
  0b00001000: 16,
  0b00001010: 20,
  0b00001100: 24,
  0b00001110: _constants_js__WEBPACK_IMPORTED_MODULE_0__.reserved,
};

class FLACHeader extends _CodecHeader_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  // https://datatracker.ietf.org/doc/html/rfc3629#section-3
  //    Char. number range  |        UTF-8 octet sequence
  //    (hexadecimal)    |              (binary)
  // --------------------+---------------------------------------------
  // 0000 0000-0000 007F | 0xxxxxxx
  // 0000 0080-0000 07FF | 110xxxxx 10xxxxxx
  // 0000 0800-0000 FFFF | 1110xxxx 10xxxxxx 10xxxxxx
  // 0001 0000-0010 FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
  static decodeUTF8Int(data) {
    if (data[0] > 0xfe) {
      return null; // length byte must have at least one zero as the lsb
    }

    if (data[0] < 0x80) return { value: data[0], length: 1 };

    // get length by counting the number of msb that are set to 1
    let length = 1;
    for (let zeroMask = 0x40; zeroMask & data[0]; zeroMask >>= 1) length++;

    let idx = length - 1,
      value = 0,
      shift = 0;

    // sum together the encoded bits in bytes 2 to length
    // 1110xxxx 10[cccccc] 10[bbbbbb] 10[aaaaaa]
    //
    //    value = [cccccc] | [bbbbbb] | [aaaaaa]
    for (; idx > 0; shift += 6, idx--) {
      if ((data[idx] & 0xc0) !== 0x80) {
        return null; // each byte should have leading 10xxxxxx
      }
      value |= (data[idx] & 0x3f) << shift; // add the encoded bits
    }

    // read the final encoded bits in byte 1
    //     1110[dddd] 10[cccccc] 10[bbbbbb] 10[aaaaaa]
    //
    // value = [dddd] | [cccccc] | [bbbbbb] | [aaaaaa]
    value |= (data[idx] & (0x7f >> length)) << shift;

    return { value, length };
  }

  static getHeaderFromUint8Array(data, headerCache) {
    const codecParserStub = {
      readRawData: function* () {
        return data;
      },
    };

    return FLACHeader.getHeader(codecParserStub, headerCache, 0).next().value;
  }

  static *getHeader(codecParser, headerCache, readOffset) {
    // Must be at least 6 bytes.
    let data = yield* codecParser.readRawData(6, readOffset);

    // Bytes (1-2 of 6)
    // * `11111111|111110..`: Frame sync
    // * `........|......0.`: Reserved 0 - mandatory, 1 - reserved
    if (data[0] !== 0xff || !(data[1] === 0xf8 || data[1] === 0xf9)) {
      return null;
    }

    const header = {};

    // Check header cache
    const key = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.bytesToString)(data.subarray(0, 4));
    const cachedHeader = headerCache.getHeader(key);

    if (!cachedHeader) {
      // Byte (2 of 6)
      // * `.......C`: Blocking strategy, 0 - fixed, 1 - variable
      header.blockingStrategyBits = data[1] & 0b00000001;
      header.blockingStrategy = blockingStrategy[header.blockingStrategyBits];

      // Byte (3 of 6)
      // * `DDDD....`: Block size in inter-channel samples
      // * `....EEEE`: Sample rate
      header.blockSizeBits = data[2] & 0b11110000;
      header.sampleRateBits = data[2] & 0b00001111;

      header.blockSize = blockSize[header.blockSizeBits];
      if (header.blockSize === _constants_js__WEBPACK_IMPORTED_MODULE_0__.reserved) {
        return null;
      }

      header.sampleRate = sampleRate[header.sampleRateBits];
      if (header.sampleRate === _constants_js__WEBPACK_IMPORTED_MODULE_0__.bad) {
        return null;
      }

      // Byte (4 of 6)
      // * `FFFF....`: Channel assignment
      // * `....GGG.`: Sample size in bits
      // * `.......H`: Reserved 0 - mandatory, 1 - reserved
      if (data[3] & 0b00000001) {
        return null;
      }

      const channelAssignment = channelAssignments[data[3] & 0b11110000];
      if (channelAssignment === _constants_js__WEBPACK_IMPORTED_MODULE_0__.reserved) {
        return null;
      }

      header.channels = channelAssignment.channels;
      header.channelMode = channelAssignment.description;

      header.bitDepth = bitDepth[data[3] & 0b00001110];
      if (header.bitDepth === _constants_js__WEBPACK_IMPORTED_MODULE_0__.reserved) {
        return null;
      }
    } else {
      Object.assign(header, cachedHeader);
    }

    // Byte (5...)
    // * `IIIIIIII|...`: VBR block size ? sample number : frame number
    header.length = 5;

    // check if there is enough data to parse UTF8
    data = yield* codecParser.readRawData(header.length + 8, readOffset);

    const decodedUtf8 = FLACHeader.decodeUTF8Int(data.subarray(4));
    if (!decodedUtf8) {
      return null;
    }

    if (header.blockingStrategyBits) {
      header.sampleNumber = decodedUtf8.value;
    } else {
      header.frameNumber = decodedUtf8.value;
    }

    header.length += decodedUtf8.length;

    // Byte (...)
    // * `JJJJJJJJ|(JJJJJJJJ)`: Blocksize (8/16bit custom value)
    if (header.blockSizeBits === 0b01100000) {
      // 8 bit
      if (data.length < header.length)
        data = yield* codecParser.readRawData(header.length, readOffset);

      header.blockSize = data[header.length - 1] + 1;
      header.length += 1;
    } else if (header.blockSizeBits === 0b01110000) {
      // 16 bit
      if (data.length < header.length)
        data = yield* codecParser.readRawData(header.length, readOffset);

      header.blockSize =
        (data[header.length - 1] << 8) + data[header.length] + 1;
      header.length += 2;
    }

    header.samples = header.blockSize;

    // Byte (...)
    // * `KKKKKKKK|(KKKKKKKK)`: Sample rate (8/16bit custom value)
    if (header.sampleRateBits === 0b00001100) {
      // 8 bit
      if (data.length < header.length)
        data = yield* codecParser.readRawData(header.length, readOffset);

      header.sampleRate = data[header.length - 1] * 1000;
      header.length += 1;
    } else if (header.sampleRateBits === 0b00001101) {
      // 16 bit
      if (data.length < header.length)
        data = yield* codecParser.readRawData(header.length, readOffset);

      header.sampleRate = (data[header.length - 1] << 8) + data[header.length];
      header.length += 2;
    } else if (header.sampleRateBits === 0b00001110) {
      // 16 bit
      if (data.length < header.length)
        data = yield* codecParser.readRawData(header.length, readOffset);

      header.sampleRate =
        ((data[header.length - 1] << 8) + data[header.length]) * 10;
      header.length += 2;
    }

    // Byte (...)
    // * `LLLLLLLL`: CRC-8
    if (data.length < header.length)
      data = yield* codecParser.readRawData(header.length, readOffset);

    header.crc = data[header.length - 1];
    if (header.crc !== (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.crc8)(data.subarray(0, header.length - 1))) {
      return null;
    }

    if (!cachedHeader) {
      const {
        blockingStrategyBits,
        frameNumber,
        sampleNumber,
        samples,
        sampleRateBits,
        blockSizeBits,
        crc,
        length,
        ...codecUpdateFields
      } = header;
      headerCache.setHeader(key, header, codecUpdateFields);
    }
    return new FLACHeader(header);
  }

  /**
   * @private
   * Call FLACHeader.getHeader(Array<Uint8>) to get instance
   */
  constructor(header) {
    super(header);

    this.crc16 = null; // set in FLACFrame
    this.blockingStrategy = header.blockingStrategy;
    this.blockSize = header.blockSize;
    this.frameNumber = header.frameNumber;
    this.sampleNumber = header.sampleNumber;
    this.streamInfo = null; // set during ogg parsing
  }
}


/***/ }),

/***/ "./node_modules/codec-parser/src/codecs/flac/FLACParser.js":
/*!*****************************************************************!*\
  !*** ./node_modules/codec-parser/src/codecs/flac/FLACParser.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FLACParser)
/* harmony export */ });
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globals.js */ "./node_modules/codec-parser/src/globals.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/codec-parser/src/codecs/Parser.js");
/* harmony import */ var _FLACFrame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FLACFrame.js */ "./node_modules/codec-parser/src/codecs/flac/FLACFrame.js");
/* harmony import */ var _FLACHeader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FLACHeader.js */ "./node_modules/codec-parser/src/codecs/flac/FLACHeader.js");
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of codec-parser.
    
    codec-parser is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    codec-parser is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/






const MIN_FLAC_FRAME_SIZE = 2;
const MAX_FLAC_FRAME_SIZE = 512 * 1024;

class FLACParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(codecParser, onCodecUpdate) {
    super(codecParser, onCodecUpdate);
    this.Frame = _FLACFrame_js__WEBPACK_IMPORTED_MODULE_2__["default"];
    this.Header = _FLACHeader_js__WEBPACK_IMPORTED_MODULE_3__["default"];
  }

  get codec() {
    return "flac";
  }

  *_getNextFrameSyncOffset(offset) {
    const data = yield* this._codecParser.readRawData(2, 0);
    const dataLength = data.length - 2;

    while (offset < dataLength) {
      // * `11111111|111110..`: Frame sync
      // * `........|......0.`: Reserved 0 - mandatory, 1 - reserved
      const firstByte = data[offset];
      if (firstByte === 0xff) {
        const secondByte = data[offset + 1];
        if (secondByte === 0xf8 || secondByte === 0xf9) break;
        if (secondByte !== 0xff) offset++; // might as well check for the next sync byte
      }
      offset++;
    }

    return offset;
  }

  *parseFrame() {
    // find the first valid frame header
    do {
      const header = yield* _FLACHeader_js__WEBPACK_IMPORTED_MODULE_3__["default"].getHeader(
        this._codecParser,
        this._headerCache,
        0
      );

      if (header) {
        // found a valid frame header
        // find the next valid frame header
        let nextHeaderOffset =
          _globals_js__WEBPACK_IMPORTED_MODULE_0__.headerStore.get(header).length + MIN_FLAC_FRAME_SIZE;

        while (nextHeaderOffset <= MAX_FLAC_FRAME_SIZE) {
          if (
            this._codecParser._flushing ||
            (yield* _FLACHeader_js__WEBPACK_IMPORTED_MODULE_3__["default"].getHeader(
              this._codecParser,
              this._headerCache,
              nextHeaderOffset
            ))
          ) {
            // found a valid next frame header
            let frameData = yield* this._codecParser.readRawData(
              nextHeaderOffset
            );

            if (!this._codecParser._flushing)
              frameData = frameData.subarray(0, nextHeaderOffset);

            // check that this is actually the next header by validating the frame footer crc16
            if (_FLACFrame_js__WEBPACK_IMPORTED_MODULE_2__["default"].checkFrameFooterCrc16(frameData)) {
              // both frame headers, and frame footer crc16 are valid, we are synced (odds are pretty low of a false positive)
              const frame = new _FLACFrame_js__WEBPACK_IMPORTED_MODULE_2__["default"](frameData, header);

              this._headerCache.enable(); // start caching when synced
              this._codecParser.incrementRawData(nextHeaderOffset); // increment to the next frame
              this._codecParser.mapFrameStats(frame);

              return frame;
            }
          }

          nextHeaderOffset = yield* this._getNextFrameSyncOffset(
            nextHeaderOffset + 1
          );
        }

        this._codecParser.logWarning(
          `Unable to sync FLAC frame after searching ${nextHeaderOffset} bytes.`
        );
        this._codecParser.incrementRawData(nextHeaderOffset);
      } else {
        // not synced, increment data to continue syncing
        this._codecParser.incrementRawData(
          yield* this._getNextFrameSyncOffset(1)
        );
      }
    } while (true);
  }

  parseOggPage(oggPage) {
    if (oggPage.pageSequenceNumber === 0) {
      // Identification header

      this._headerCache.enable();
      this._streamInfo = oggPage.data.subarray(13);
    } else if (oggPage.pageSequenceNumber === 1) {
      // Vorbis comments
    } else {
      oggPage.codecFrames = _globals_js__WEBPACK_IMPORTED_MODULE_0__.frameStore.get(oggPage)
        .segments.map((segment) => {
          const header = _FLACHeader_js__WEBPACK_IMPORTED_MODULE_3__["default"].getHeaderFromUint8Array(
            segment,
            this._headerCache
          );

          if (header) {
            return new _FLACFrame_js__WEBPACK_IMPORTED_MODULE_2__["default"](segment, header, this._streamInfo);
          } else {
            this._codecParser.logWarning(
              "Failed to parse Ogg FLAC frame",
              "Skipping invalid FLAC frame"
            );
          }
        })
        .filter((frame) => Boolean(frame));
    }

    return oggPage;
  }
}


/***/ }),

/***/ "./node_modules/codec-parser/src/codecs/mpeg/MPEGFrame.js":
/*!****************************************************************!*\
  !*** ./node_modules/codec-parser/src/codecs/mpeg/MPEGFrame.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MPEGFrame)
/* harmony export */ });
/* harmony import */ var _CodecFrame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CodecFrame.js */ "./node_modules/codec-parser/src/codecs/CodecFrame.js");
/* harmony import */ var _MPEGHeader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MPEGHeader.js */ "./node_modules/codec-parser/src/codecs/mpeg/MPEGHeader.js");
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of codec-parser.
    
    codec-parser is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    codec-parser is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/




class MPEGFrame extends _CodecFrame_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static *getFrame(codecParser, headerCache, readOffset) {
    return yield* super.getFrame(
      _MPEGHeader_js__WEBPACK_IMPORTED_MODULE_1__["default"],
      MPEGFrame,
      codecParser,
      headerCache,
      readOffset
    );
  }

  constructor(header, frame, samples) {
    super(header, frame, samples);
  }
}


/***/ }),

/***/ "./node_modules/codec-parser/src/codecs/mpeg/MPEGHeader.js":
/*!*****************************************************************!*\
  !*** ./node_modules/codec-parser/src/codecs/mpeg/MPEGHeader.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MPEGHeader)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants.js */ "./node_modules/codec-parser/src/constants.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities.js */ "./node_modules/codec-parser/src/utilities.js");
/* harmony import */ var _metadata_ID3v2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../metadata/ID3v2.js */ "./node_modules/codec-parser/src/metadata/ID3v2.js");
/* harmony import */ var _CodecHeader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CodecHeader.js */ "./node_modules/codec-parser/src/codecs/CodecHeader.js");
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of codec-parser.
    
    codec-parser is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    codec-parser is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/







// http://www.mp3-tech.org/programmer/frame_header.html

const bitrateMatrix = {
  // bits | V1,L1 | V1,L2 | V1,L3 | V2,L1 | V2,L2 & L3
  0b00000000: [_constants_js__WEBPACK_IMPORTED_MODULE_0__.free, _constants_js__WEBPACK_IMPORTED_MODULE_0__.free, _constants_js__WEBPACK_IMPORTED_MODULE_0__.free, _constants_js__WEBPACK_IMPORTED_MODULE_0__.free, _constants_js__WEBPACK_IMPORTED_MODULE_0__.free],
  0b00010000: [32, 32, 32, 32, 8],
  // 0b00100000: [64,   48,  40,  48,  16,],
  // 0b00110000: [96,   56,  48,  56,  24,],
  // 0b01000000: [128,  64,  56,  64,  32,],
  // 0b01010000: [160,  80,  64,  80,  40,],
  // 0b01100000: [192,  96,  80,  96,  48,],
  // 0b01110000: [224, 112,  96, 112,  56,],
  // 0b10000000: [256, 128, 112, 128,  64,],
  // 0b10010000: [288, 160, 128, 144,  80,],
  // 0b10100000: [320, 192, 160, 160,  96,],
  // 0b10110000: [352, 224, 192, 176, 112,],
  // 0b11000000: [384, 256, 224, 192, 128,],
  // 0b11010000: [416, 320, 256, 224, 144,],
  // 0b11100000: [448, 384, 320, 256, 160,],
  0b11110000: [_constants_js__WEBPACK_IMPORTED_MODULE_0__.bad, _constants_js__WEBPACK_IMPORTED_MODULE_0__.bad, _constants_js__WEBPACK_IMPORTED_MODULE_0__.bad, _constants_js__WEBPACK_IMPORTED_MODULE_0__.bad, _constants_js__WEBPACK_IMPORTED_MODULE_0__.bad],
};

const calcBitrate = (idx, interval, intervalOffset) =>
  8 *
    (((idx + intervalOffset) % interval) + interval) *
    (1 << ((idx + intervalOffset) / interval)) -
  8 * interval * ((interval / 8) | 0);

// generate bitrate matrix
for (let i = 2; i < 15; i++)
  bitrateMatrix[i << 4] = [
    i * 32, //                V1,L1
    calcBitrate(i, 4, 0), //  V1,L2
    calcBitrate(i, 4, -1), // V1,L3
    calcBitrate(i, 8, 4), //  V2,L1
    calcBitrate(i, 8, 0), //  V2,L2 & L3
  ];

const v1Layer1 = 0;
const v1Layer2 = 1;
const v1Layer3 = 2;
const v2Layer1 = 3;
const v2Layer23 = 4;

const bands = "bands ";
const to31 = " to 31";
const layer12ModeExtensions = {
  0b00000000: bands + 4 + to31,
  0b00010000: bands + 8 + to31,
  0b00100000: bands + 12 + to31,
  0b00110000: bands + 16 + to31,
};

const intensityStereo = "Intensity stereo ";
const msStereo = ", MS stereo ";
const on = "on";
const off = "off";
const layer3ModeExtensions = {
  0b00000000: intensityStereo + off + msStereo + off,
  0b00010000: intensityStereo + on + msStereo + off,
  0b00100000: intensityStereo + off + msStereo + on,
  0b00110000: intensityStereo + on + msStereo + on,
};

const layer = "Layer ";
const layers = {
  0b00000000: { description: _constants_js__WEBPACK_IMPORTED_MODULE_0__.reserved },
  0b00000010: {
    description: "Layer III",
    framePadding: 1,
    modeExtensions: layer3ModeExtensions,
    v1: {
      bitrateIndex: v1Layer3,
      samples: 1152,
    },
    v2: {
      bitrateIndex: v2Layer23,
      samples: 576,
    },
  },
  0b00000100: {
    description: "Layer II",
    framePadding: 1,
    modeExtensions: layer12ModeExtensions,
    samples: 1152,
    v1: {
      bitrateIndex: v1Layer2,
    },
    v2: {
      bitrateIndex: v2Layer23,
    },
  },
  0b00000110: {
    description: "Layer I",
    framePadding: 4,
    modeExtensions: layer12ModeExtensions,
    samples: 384,
    v1: {
      bitrateIndex: v1Layer1,
    },
    v2: {
      bitrateIndex: v2Layer1,
    },
  },
};

const mpegVersion = "MPEG Version ";
const isoIec = "ISO/IEC ";
const v2 = "v2";
const v1 = "v1";
const mpegVersions = {
  0b00000000: {
    description: `${mpegVersion}2.5 (later extension of MPEG 2)`,
    layers: v2,
    sampleRates: {
      0b00000000: _constants_js__WEBPACK_IMPORTED_MODULE_0__.rate11025,
      0b00000100: _constants_js__WEBPACK_IMPORTED_MODULE_0__.rate12000,
      0b00001000: _constants_js__WEBPACK_IMPORTED_MODULE_0__.rate8000,
      0b00001100: _constants_js__WEBPACK_IMPORTED_MODULE_0__.reserved,
    },
  },
  0b00001000: { description: _constants_js__WEBPACK_IMPORTED_MODULE_0__.reserved },
  0b00010000: {
    description: `${mpegVersion}2 (${isoIec}13818-3)`,
    layers: v2,
    sampleRates: {
      0b00000000: _constants_js__WEBPACK_IMPORTED_MODULE_0__.rate22050,
      0b00000100: _constants_js__WEBPACK_IMPORTED_MODULE_0__.rate24000,
      0b00001000: _constants_js__WEBPACK_IMPORTED_MODULE_0__.rate16000,
      0b00001100: _constants_js__WEBPACK_IMPORTED_MODULE_0__.reserved,
    },
  },
  0b00011000: {
    description: `${mpegVersion}1 (${isoIec}11172-3)`,
    layers: v1,
    sampleRates: {
      0b00000000: _constants_js__WEBPACK_IMPORTED_MODULE_0__.rate44100,
      0b00000100: _constants_js__WEBPACK_IMPORTED_MODULE_0__.rate48000,
      0b00001000: _constants_js__WEBPACK_IMPORTED_MODULE_0__.rate32000,
      0b00001100: _constants_js__WEBPACK_IMPORTED_MODULE_0__.reserved,
    },
  },
};

const protection = {
  0b00000000: _constants_js__WEBPACK_IMPORTED_MODULE_0__.sixteenBitCRC,
  0b00000001: _constants_js__WEBPACK_IMPORTED_MODULE_0__.none,
};

const emphasis = {
  0b00000000: _constants_js__WEBPACK_IMPORTED_MODULE_0__.none,
  0b00000001: "50/15 ms",
  0b00000010: _constants_js__WEBPACK_IMPORTED_MODULE_0__.reserved,
  0b00000011: "CCIT J.17",
};

const channelModes = {
  0b00000000: { channels: 2, description: _constants_js__WEBPACK_IMPORTED_MODULE_0__.stereo },
  0b01000000: { channels: 2, description: "joint " + _constants_js__WEBPACK_IMPORTED_MODULE_0__.stereo },
  0b10000000: { channels: 2, description: "dual channel" },
  0b11000000: { channels: 1, description: _constants_js__WEBPACK_IMPORTED_MODULE_0__.monophonic },
};

class MPEGHeader extends _CodecHeader_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  static *getHeader(codecParser, headerCache, readOffset) {
    const header = {};

    // check for id3 header
    const id3v2Header = yield* _metadata_ID3v2_js__WEBPACK_IMPORTED_MODULE_2__["default"].getID3v2Header(
      codecParser,
      headerCache,
      readOffset
    );

    if (id3v2Header) {
      // throw away the data. id3 parsing is not implemented yet.
      yield* codecParser.readRawData(id3v2Header.length, readOffset);
      codecParser.incrementRawData(id3v2Header.length);
    }

    // Must be at least four bytes.
    const data = yield* codecParser.readRawData(4, readOffset);

    // Check header cache
    const key = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.bytesToString)(data.subarray(0, 4));
    const cachedHeader = headerCache.getHeader(key);
    if (cachedHeader) return new MPEGHeader(cachedHeader);

    // Frame sync (all bits must be set): `11111111|111`:
    if (data[0] !== 0xff || data[1] < 0xe0) return null;

    // Byte (2 of 4)
    // * `111BBCCD`
    // * `...BB...`: MPEG Audio version ID
    // * `.....CC.`: Layer description
    // * `.......D`: Protection bit (0 - Protected by CRC (16bit CRC follows header), 1 = Not protected)

    // Mpeg version (1, 2, 2.5)
    const mpegVersion = mpegVersions[data[1] & 0b00011000];
    if (mpegVersion.description === _constants_js__WEBPACK_IMPORTED_MODULE_0__.reserved) return null;

    // Layer (I, II, III)
    const layerBits = data[1] & 0b00000110;
    if (layers[layerBits].description === _constants_js__WEBPACK_IMPORTED_MODULE_0__.reserved) return null;
    const layer = {
      ...layers[layerBits],
      ...layers[layerBits][mpegVersion.layers],
    };

    header.mpegVersion = mpegVersion.description;
    header.layer = layer.description;
    header.samples = layer.samples;
    header.protection = protection[data[1] & 0b00000001];

    header.length = 4;

    // Byte (3 of 4)
    // * `EEEEFFGH`
    // * `EEEE....`: Bitrate index. 1111 is invalid, everything else is accepted
    // * `....FF..`: Sample rate
    // * `......G.`: Padding bit, 0=frame not padded, 1=frame padded
    // * `.......H`: Private bit.
    header.bitrate = bitrateMatrix[data[2] & 0b11110000][layer.bitrateIndex];
    if (header.bitrate === _constants_js__WEBPACK_IMPORTED_MODULE_0__.bad) return null;

    header.sampleRate = mpegVersion.sampleRates[data[2] & 0b00001100];
    if (header.sampleRate === _constants_js__WEBPACK_IMPORTED_MODULE_0__.reserved) return null;

    header.framePadding = data[2] & 0b00000010 && layer.framePadding;
    header.isPrivate = Boolean(data[2] & 0b00000001);

    header.frameLength = Math.floor(
      (125 * header.bitrate * header.samples) / header.sampleRate +
        header.framePadding
    );
    if (!header.frameLength) return null;

    // Byte (4 of 4)
    // * `IIJJKLMM`
    // * `II......`: Channel mode
    // * `..JJ....`: Mode extension (only if joint stereo)
    // * `....K...`: Copyright
    // * `.....L..`: Original
    // * `......MM`: Emphasis
    const channelModeBits = data[3] & 0b11000000;
    header.channelMode = channelModes[channelModeBits].description;
    header.channels = channelModes[channelModeBits].channels;

    header.modeExtension = layer.modeExtensions[data[3] & 0b00110000];
    header.isCopyrighted = Boolean(data[3] & 0b00001000);
    header.isOriginal = Boolean(data[3] & 0b00000100);

    header.emphasis = emphasis[data[3] & 0b00000011];
    if (header.emphasis === _constants_js__WEBPACK_IMPORTED_MODULE_0__.reserved) return null;

    header.bitDepth = 16;

    // set header cache
    const { length, frameLength, samples, ...codecUpdateFields } = header;

    headerCache.setHeader(key, header, codecUpdateFields);
    return new MPEGHeader(header);
  }

  /**
   * @private
   * Call MPEGHeader.getHeader(Array<Uint8>) to get instance
   */
  constructor(header) {
    super(header);

    this.bitrate = header.bitrate;
    this.emphasis = header.emphasis;
    this.framePadding = header.framePadding;
    this.isCopyrighted = header.isCopyrighted;
    this.isOriginal = header.isOriginal;
    this.isPrivate = header.isPrivate;
    this.layer = header.layer;
    this.modeExtension = header.modeExtension;
    this.mpegVersion = header.mpegVersion;
    this.protection = header.protection;
  }
}


/***/ }),

/***/ "./node_modules/codec-parser/src/codecs/mpeg/MPEGParser.js":
/*!*****************************************************************!*\
  !*** ./node_modules/codec-parser/src/codecs/mpeg/MPEGParser.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MPEGParser)
/* harmony export */ });
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/codec-parser/src/codecs/Parser.js");
/* harmony import */ var _MPEGFrame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MPEGFrame.js */ "./node_modules/codec-parser/src/codecs/mpeg/MPEGFrame.js");
/* harmony import */ var _MPEGHeader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MPEGHeader.js */ "./node_modules/codec-parser/src/codecs/mpeg/MPEGHeader.js");
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of codec-parser.
    
    codec-parser is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    codec-parser is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/





class MPEGParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(codecParser, headerCache, onCodec) {
    super(codecParser, headerCache);
    this.Frame = _MPEGFrame_js__WEBPACK_IMPORTED_MODULE_1__["default"];
    this.Header = _MPEGHeader_js__WEBPACK_IMPORTED_MODULE_2__["default"];

    onCodec(this.codec);
  }

  get codec() {
    return "mpeg";
  }

  *parseFrame() {
    return yield* this.fixedLengthFrameSync();
  }
}


/***/ }),

/***/ "./node_modules/codec-parser/src/codecs/opus/OpusFrame.js":
/*!****************************************************************!*\
  !*** ./node_modules/codec-parser/src/codecs/opus/OpusFrame.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OpusFrame)
/* harmony export */ });
/* harmony import */ var _CodecFrame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CodecFrame.js */ "./node_modules/codec-parser/src/codecs/CodecFrame.js");
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of codec-parser.
    
    codec-parser is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    codec-parser is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/



class OpusFrame extends _CodecFrame_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(data, header) {
    super(
      header,
      data,
      ((header.frameSize * header.frameCount) / 1000) * header.sampleRate
    );
  }
}


/***/ }),

/***/ "./node_modules/codec-parser/src/codecs/opus/OpusHeader.js":
/*!*****************************************************************!*\
  !*** ./node_modules/codec-parser/src/codecs/opus/OpusHeader.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OpusHeader)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants.js */ "./node_modules/codec-parser/src/constants.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities.js */ "./node_modules/codec-parser/src/utilities.js");
/* harmony import */ var _CodecHeader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CodecHeader.js */ "./node_modules/codec-parser/src/codecs/CodecHeader.js");
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of codec-parser.
    
    codec-parser is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    codec-parser is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/

/*
https://tools.ietf.org/html/rfc7845.html
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|      'O'      |      'p'      |      'u'      |      's'      |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|      'H'      |      'e'      |      'a'      |      'd'      |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|  Version = 1  | Channel Count |           Pre-skip            |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                     Input Sample Rate (Hz)                    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|   Output Gain (Q7.8 in dB)    | Mapping Family|               |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+               :
|                                                               |
:               Optional Channel Mapping Table...               :
|                                                               |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

Letter  Length (bits)  Description
A  64  Magic Signature - OpusHead
B  8   Version number - 00000001
C  8   Output channel count (unsigned)
D  16  Pre-skip (unsigned, little endian)
E  32  Sample rate (unsigned, little endian)
F  16  Output Gain (signed, little endian)
G  8   Channel Mapping family (unsigned)

// if(channel mapping !== 0)
H  8   Stream count (unsigned)
I  8   Coupled Stream Count (unsigned)
J  8*C Channel Mapping
*/






/* prettier-ignore */
const channelMappingFamilies = {
  0b00000000: _constants_js__WEBPACK_IMPORTED_MODULE_0__.vorbisOpusChannelMapping.slice(0,2),
    /*
    0: "monophonic (mono)"
    1: "stereo (left, right)"
    */
  0b00000001: _constants_js__WEBPACK_IMPORTED_MODULE_0__.vorbisOpusChannelMapping
    /*
    0: "monophonic (mono)"
    1: "stereo (left, right)"
    2: "linear surround (left, center, right)"
    3: "quadraphonic (front left, front right, rear left, rear right)"
    4: "5.0 surround (front left, front center, front right, rear left, rear right)"
    5: "5.1 surround (front left, front center, front right, rear left, rear right, LFE)"
    6: "6.1 surround (front left, front center, front right, side left, side right, rear center, LFE)"
    7: "7.1 surround (front left, front center, front right, side left, side right, rear left, rear right, LFE)"
    */
};

const silkOnly = "SILK-only";
const celtOnly = "CELT-only";
const hybrid = "Hybrid";

const narrowBand = "narrowband";
const mediumBand = "medium-band";
const wideBand = "wideband";
const superWideBand = "super-wideband";
const fullBand = "fullband";

//  0 1 2 3 4 5 6 7
// +-+-+-+-+-+-+-+-+
// | config  |s| c |
// +-+-+-+-+-+-+-+-+
const configTable = {
  0b00000000: { mode: silkOnly, bandwidth: narrowBand, frameSize: 10 },
  0b00001000: { mode: silkOnly, bandwidth: narrowBand, frameSize: 20 },
  0b00010000: { mode: silkOnly, bandwidth: narrowBand, frameSize: 40 },
  0b00011000: { mode: silkOnly, bandwidth: narrowBand, frameSize: 60 },
  0b00100000: { mode: silkOnly, bandwidth: mediumBand, frameSize: 10 },
  0b00101000: { mode: silkOnly, bandwidth: mediumBand, frameSize: 20 },
  0b00110000: { mode: silkOnly, bandwidth: mediumBand, frameSize: 40 },
  0b00111000: { mode: silkOnly, bandwidth: mediumBand, frameSize: 60 },
  0b01000000: { mode: silkOnly, bandwidth: wideBand, frameSize: 10 },
  0b01001000: { mode: silkOnly, bandwidth: wideBand, frameSize: 20 },
  0b01010000: { mode: silkOnly, bandwidth: wideBand, frameSize: 40 },
  0b01011000: { mode: silkOnly, bandwidth: wideBand, frameSize: 60 },
  0b01100000: { mode: hybrid, bandwidth: superWideBand, frameSize: 10 },
  0b01101000: { mode: hybrid, bandwidth: superWideBand, frameSize: 20 },
  0b01110000: { mode: hybrid, bandwidth: fullBand, frameSize: 10 },
  0b01111000: { mode: hybrid, bandwidth: fullBand, frameSize: 20 },
  0b10000000: { mode: celtOnly, bandwidth: narrowBand, frameSize: 2.5 },
  0b10001000: { mode: celtOnly, bandwidth: narrowBand, frameSize: 5 },
  0b10010000: { mode: celtOnly, bandwidth: narrowBand, frameSize: 10 },
  0b10011000: { mode: celtOnly, bandwidth: narrowBand, frameSize: 20 },
  0b10100000: { mode: celtOnly, bandwidth: wideBand, frameSize: 2.5 },
  0b10101000: { mode: celtOnly, bandwidth: wideBand, frameSize: 5 },
  0b10110000: { mode: celtOnly, bandwidth: wideBand, frameSize: 10 },
  0b10111000: { mode: celtOnly, bandwidth: wideBand, frameSize: 20 },
  0b11000000: { mode: celtOnly, bandwidth: superWideBand, frameSize: 2.5 },
  0b11001000: { mode: celtOnly, bandwidth: superWideBand, frameSize: 5 },
  0b11010000: { mode: celtOnly, bandwidth: superWideBand, frameSize: 10 },
  0b11011000: { mode: celtOnly, bandwidth: superWideBand, frameSize: 20 },
  0b11100000: { mode: celtOnly, bandwidth: fullBand, frameSize: 2.5 },
  0b11101000: { mode: celtOnly, bandwidth: fullBand, frameSize: 5 },
  0b11110000: { mode: celtOnly, bandwidth: fullBand, frameSize: 10 },
  0b11111000: { mode: celtOnly, bandwidth: fullBand, frameSize: 20 },
};

class OpusHeader extends _CodecHeader_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  static getHeaderFromUint8Array(data, packetData, headerCache) {
    const header = {};

    // get length of header
    // Byte (10 of 19)
    // * `CCCCCCCC`: Channel Count
    header.channels = data[9];
    // Byte (19 of 19)
    // * `GGGGGGGG`: Channel Mapping Family
    header.channelMappingFamily = data[18];

    header.length =
      header.channelMappingFamily !== 0 ? 21 + header.channels : 19;

    if (data.length < header.length)
      throw new Error("Out of data while inside an Ogg Page");

    // Page Segment Bytes (1-2)
    // * `AAAAA...`: Packet config
    // * `.....B..`:
    // * `......CC`: Packet code
    const packetMode = packetData[0] & 0b00000011;
    const packetLength = packetMode === 3 ? 2 : 1;

    // Check header cache
    const key =
      (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.bytesToString)(data.subarray(0, header.length)) +
      (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.bytesToString)(packetData.subarray(0, packetLength));
    const cachedHeader = headerCache.getHeader(key);

    if (cachedHeader) return new OpusHeader(cachedHeader);

    // Bytes (1-8 of 19): OpusHead - Magic Signature
    if (key.substr(0, 8) !== "OpusHead") {
      return null;
    }

    // Byte (9 of 19)
    // * `00000001`: Version number
    if (data[8] !== 1) return null;

    header.data = Uint8Array.from(data.subarray(0, header.length));

    const view = new DataView(header.data.buffer);

    header.bitDepth = 16;

    // Byte (10 of 19)
    // * `CCCCCCCC`: Channel Count
    // set earlier to determine length

    // Byte (11-12 of 19)
    // * `DDDDDDDD|DDDDDDDD`: Pre skip
    header.preSkip = view.getUint16(10, true);

    // Byte (13-16 of 19)
    // * `EEEEEEEE|EEEEEEEE|EEEEEEEE|EEEEEEEE`: Sample Rate
    header.inputSampleRate = view.getUint32(12, true);
    // Opus is always decoded at 48kHz
    header.sampleRate = _constants_js__WEBPACK_IMPORTED_MODULE_0__.rate48000;

    // Byte (17-18 of 19)
    // * `FFFFFFFF|FFFFFFFF`: Output Gain
    header.outputGain = view.getInt16(16, true);

    // Byte (19 of 19)
    // * `GGGGGGGG`: Channel Mapping Family
    // set earlier to determine length
    if (!header.channelMappingFamily in channelMappingFamilies) return null;

    header.channelMode =
      channelMappingFamilies[header.channelMappingFamily][header.channels - 1];
    if (!header.channelMode) return null;

    if (header.channelMappingFamily !== 0) {
      // * `HHHHHHHH`: Stream count
      header.streamCount = data[19];

      // * `IIIIIIII`: Coupled Stream count
      header.coupledStreamCount = data[20];

      // * `JJJJJJJJ|...` Channel Mapping table
      header.channelMappingTable = data.subarray(21, header.channels + 21);
    }

    const packetConfig = configTable[0b11111000 & packetData[0]];
    header.mode = packetConfig.mode;
    header.bandwidth = packetConfig.bandwidth;
    header.frameSize = packetConfig.frameSize;

    // https://tools.ietf.org/html/rfc6716#appendix-B
    switch (packetMode) {
      case 0:
        // 0: 1 frame in the packet
        header.frameCount = 1;
        break;
      case 1:
      // 1: 2 frames in the packet, each with equal compressed size
      case 2:
        // 2: 2 frames in the packet, with different compressed sizes
        header.frameCount = 2;
        break;
      case 3:
        // 3: an arbitrary number of frames in the packet
        header.isVbr = Boolean(0b10000000 & packetData[1]);
        header.hasOpusPadding = Boolean(0b01000000 & packetData[1]);
        header.frameCount = 0b00111111 & packetData[1];
        break;
      default:
        return null;
    }

    // set header cache
    const {
      length,
      data: headerData,
      channelMappingFamily,
      ...codecUpdateFields
    } = header;

    headerCache.setHeader(key, header, codecUpdateFields);

    return new OpusHeader(header);
  }

  /**
   * @private
   * Call OpusHeader.getHeader(Array<Uint8>) to get instance
   */
  constructor(header) {
    super(header);

    this.data = header.data;
    this.bandwidth = header.bandwidth;
    this.channelMappingFamily = header.channelMappingFamily;
    this.channelMappingTable = header.channelMappingTable;
    this.coupledStreamCount = header.coupledStreamCount;
    this.frameCount = header.frameCount;
    this.frameSize = header.frameSize;
    this.hasOpusPadding = header.hasOpusPadding;
    this.inputSampleRate = header.inputSampleRate;
    this.isVbr = header.isVbr;
    this.mode = header.mode;
    this.outputGain = header.outputGain;
    this.preSkip = header.preSkip;
    this.streamCount = header.streamCount;
  }
}


/***/ }),

/***/ "./node_modules/codec-parser/src/codecs/opus/OpusParser.js":
/*!*****************************************************************!*\
  !*** ./node_modules/codec-parser/src/codecs/opus/OpusParser.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OpusParser)
/* harmony export */ });
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globals.js */ "./node_modules/codec-parser/src/globals.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/codec-parser/src/codecs/Parser.js");
/* harmony import */ var _OpusFrame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OpusFrame.js */ "./node_modules/codec-parser/src/codecs/opus/OpusFrame.js");
/* harmony import */ var _OpusHeader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OpusHeader.js */ "./node_modules/codec-parser/src/codecs/opus/OpusHeader.js");
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of codec-parser.
    
    codec-parser is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    codec-parser is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/






class OpusParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(codecParser, headerCache) {
    super(codecParser, headerCache);
    this.Frame = _OpusFrame_js__WEBPACK_IMPORTED_MODULE_2__["default"];
    this.Header = _OpusHeader_js__WEBPACK_IMPORTED_MODULE_3__["default"];

    this._identificationHeader = null;
  }

  get codec() {
    return "opus";
  }

  /**
   * @todo implement continued page support
   */
  parseOggPage(oggPage) {
    if (oggPage.pageSequenceNumber === 0) {
      // Identification header

      this._headerCache.enable();
      this._identificationHeader = oggPage.data;
    } else if (oggPage.pageSequenceNumber === 1) {
      // OpusTags
    } else {
      oggPage.codecFrames = _globals_js__WEBPACK_IMPORTED_MODULE_0__.frameStore.get(oggPage).segments.map((segment) => {
        const header = _OpusHeader_js__WEBPACK_IMPORTED_MODULE_3__["default"].getHeaderFromUint8Array(
          this._identificationHeader,
          segment,
          this._headerCache
        );

        if (header) return new _OpusFrame_js__WEBPACK_IMPORTED_MODULE_2__["default"](segment, header);

        this._codecParser.logError(
          "Failed to parse Ogg Opus Header",
          "Not a valid Ogg Opus file"
        );
      });
    }

    return oggPage;
  }
}


/***/ }),

/***/ "./node_modules/codec-parser/src/codecs/vorbis/VorbisFrame.js":
/*!********************************************************************!*\
  !*** ./node_modules/codec-parser/src/codecs/vorbis/VorbisFrame.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VorbisFrame)
/* harmony export */ });
/* harmony import */ var _CodecFrame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CodecFrame.js */ "./node_modules/codec-parser/src/codecs/CodecFrame.js");
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of codec-parser.
    
    codec-parser is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    codec-parser is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/



class VorbisFrame extends _CodecFrame_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(data, header, samples) {
    super(header, data, samples);
  }
}


/***/ }),

/***/ "./node_modules/codec-parser/src/codecs/vorbis/VorbisHeader.js":
/*!*********************************************************************!*\
  !*** ./node_modules/codec-parser/src/codecs/vorbis/VorbisHeader.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VorbisHeader)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants.js */ "./node_modules/codec-parser/src/constants.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities.js */ "./node_modules/codec-parser/src/utilities.js");
/* harmony import */ var _CodecHeader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CodecHeader.js */ "./node_modules/codec-parser/src/codecs/CodecHeader.js");
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of codec-parser.
    
    codec-parser is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    codec-parser is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/

/*

1  1) [packet_type] : 8 bit value
2  2) 0x76, 0x6f, 0x72, 0x62, 0x69, 0x73: the characters ’v’,’o’,’r’,’b’,’i’,’s’ as six octets

Letter bits Description
A      8    Packet type
B      48   Magic signature (vorbis)
C      32   Version number
D      8    Channels
E      32   Sample rate
F      32   Bitrate Maximum (signed)
G      32   Bitrate Nominal (signed)
H      32   Bitrate Minimum (signed)
I      4    blocksize 1
J      4    blocksize 0
K      1    Framing flag
*/






const blockSizes = {
  // 0b0110: 64,
  // 0b0111: 128,
  // 0b1000: 256,
  // 0b1001: 512,
  // 0b1010: 1024,
  // 0b1011: 2048,
  // 0b1100: 4096,
  // 0b1101: 8192
};
for (let i = 0; i < 8; i++) blockSizes[i + 6] = 2 ** (6 + i);

class VorbisHeader extends _CodecHeader_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  static getHeaderFromUint8Array(data, headerCache) {
    // Must be at least 30 bytes.
    if (data.length < 30)
      throw new Error("Out of data while inside an Ogg Page");

    // Check header cache
    const key = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.bytesToString)(data.subarray(0, 30));
    const cachedHeader = headerCache.getHeader(key);
    if (cachedHeader) return new VorbisHeader(cachedHeader);

    const header = { length: 30 };

    // Bytes (1-7 of 30): /01vorbis - Magic Signature
    if (key.substr(0, 7) !== "\x01vorbis") {
      return null;
    }

    header.data = Uint8Array.from(data.subarray(0, 30));
    const view = new DataView(header.data.buffer);

    // Byte (8-11 of 30)
    // * `CCCCCCCC|CCCCCCCC|CCCCCCCC|CCCCCCCC`: Version number
    header.version = view.getUint32(7, true);
    if (header.version !== 0) return null;

    // Byte (12 of 30)
    // * `DDDDDDDD`: Channel Count
    header.channels = data[11];
    header.channelMode =
      _constants_js__WEBPACK_IMPORTED_MODULE_0__.vorbisOpusChannelMapping[header.channels - 1] || "application defined";

    // Byte (13-16 of 30)
    // * `EEEEEEEE|EEEEEEEE|EEEEEEEE|EEEEEEEE`: Sample Rate
    header.sampleRate = view.getUint32(12, true);

    // Byte (17-20 of 30)
    // * `FFFFFFFF|FFFFFFFF|FFFFFFFF|FFFFFFFF`: Bitrate Maximum
    header.bitrateMaximum = view.getInt32(16, true);

    // Byte (21-24 of 30)
    // * `GGGGGGGG|GGGGGGGG|GGGGGGGG|GGGGGGGG`: Bitrate Nominal
    header.bitrateNominal = view.getInt32(20, true);

    // Byte (25-28 of 30)
    // * `HHHHHHHH|HHHHHHHH|HHHHHHHH|HHHHHHHH`: Bitrate Minimum
    header.bitrateMinimum = view.getInt32(24, true);

    // Byte (29 of 30)
    // * `IIII....` Blocksize 1
    // * `....JJJJ` Blocksize 0
    header.blocksize1 = blockSizes[(data[28] & 0b11110000) >> 4];
    header.blocksize0 = blockSizes[data[28] & 0b00001111];
    if (header.blocksize0 > header.blocksize1) return null;

    // Byte (29 of 30)
    // * `00000001` Framing bit
    if (data[29] !== 0x01) return null;

    header.bitDepth = 32;

    {
      // set header cache
      const { length, data, version, ...codecUpdateFields } = header;
      headerCache.setHeader(key, header, codecUpdateFields);
    }

    return new VorbisHeader(header);
  }

  /**
   * @private
   * Call VorbisHeader.getHeader(Array<Uint8>) to get instance
   */
  constructor(header) {
    super(header);

    this.bitrateMaximum = header.bitrateMaximum;
    this.bitrateMinimum = header.bitrateMinimum;
    this.bitrateNominal = header.bitrateNominal;
    this.blocksize0 = header.blocksize0;
    this.blocksize1 = header.blocksize1;
    this.data = header.data;
    this.vorbisComments = null; // set during ogg parsing
    this.vorbisSetup = null; // set during ogg parsing
  }
}


/***/ }),

/***/ "./node_modules/codec-parser/src/codecs/vorbis/VorbisParser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/codec-parser/src/codecs/vorbis/VorbisParser.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VorbisParser)
/* harmony export */ });
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globals.js */ "./node_modules/codec-parser/src/globals.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities.js */ "./node_modules/codec-parser/src/utilities.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/codec-parser/src/codecs/Parser.js");
/* harmony import */ var _VorbisFrame_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VorbisFrame.js */ "./node_modules/codec-parser/src/codecs/vorbis/VorbisFrame.js");
/* harmony import */ var _VorbisHeader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VorbisHeader.js */ "./node_modules/codec-parser/src/codecs/vorbis/VorbisHeader.js");
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of codec-parser.
    
    codec-parser is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    codec-parser is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/







class VorbisParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(codecParser, headerCache) {
    super(codecParser, headerCache);
    this.Frame = _VorbisFrame_js__WEBPACK_IMPORTED_MODULE_3__["default"];

    this._identificationHeader = null;

    this._mode = {
      count: 0,
    };
    this._prevBlockSize = 0;
    this._currBlockSize = 0;
  }

  get codec() {
    return "vorbis";
  }

  parseOggPage(oggPage) {
    const oggPageSegments = _globals_js__WEBPACK_IMPORTED_MODULE_0__.frameStore.get(oggPage).segments;

    if (oggPage.pageSequenceNumber === 0) {
      // Identification header

      this._headerCache.enable();
      this._identificationHeader = oggPage.data;
    } else if (oggPage.pageSequenceNumber === 1) {
      // gather WEBM CodecPrivate data
      if (oggPageSegments[1]) {
        this._vorbisComments = oggPageSegments[0];
        this._vorbisSetup = oggPageSegments[1];

        this._mode = this._parseSetupHeader(oggPageSegments[1]);
      }
    } else {
      oggPage.codecFrames = oggPageSegments.map((segment) => {
        const header = _VorbisHeader_js__WEBPACK_IMPORTED_MODULE_4__["default"].getHeaderFromUint8Array(
          this._identificationHeader,
          this._headerCache
        );

        if (header) {
          header.vorbisComments = this._vorbisComments;
          header.vorbisSetup = this._vorbisSetup;

          return new _VorbisFrame_js__WEBPACK_IMPORTED_MODULE_3__["default"](
            segment,
            header,
            this._getSamples(segment, header)
          );
        }

        this._codecParser.logError(
          "Failed to parse Ogg Vorbis Header",
          "Not a valid Ogg Vorbis file"
        );
      });
    }

    return oggPage;
  }

  _getSamples(segment, header) {
    const byte = segment[0] >> 1;

    const blockFlag = this._mode[byte & this._mode.mask];

    // is this a large window
    if (blockFlag) {
      this._prevBlockSize =
        byte & this._mode.prevMask ? header.blocksize1 : header.blocksize0;
    }

    this._currBlockSize = blockFlag ? header.blocksize1 : header.blocksize0;

    const samples = (this._prevBlockSize + this._currBlockSize) >> 2;
    this._prevBlockSize = this._currBlockSize;

    return samples;
  }

  // https://gitlab.xiph.org/xiph/liboggz/-/blob/master/src/liboggz/oggz_auto.c
  // https://github.com/FFmpeg/FFmpeg/blob/master/libavcodec/vorbis_parser.c
  /*
   * This is the format of the mode data at the end of the packet for all
   * Vorbis Version 1 :
   *
   * [ 6:number_of_modes ]
   * [ 1:size | 16:window_type(0) | 16:transform_type(0) | 8:mapping ]
   * [ 1:size | 16:window_type(0) | 16:transform_type(0) | 8:mapping ]
   * [ 1:size | 16:window_type(0) | 16:transform_type(0) | 8:mapping ]
   * [ 1:framing(1) ]
   *
   * e.g.:
   *
   * MsB         LsB
   *              <-
   * 0 0 0 0 0 1 0 0
   * 0 0 1 0 0 0 0 0
   * 0 0 1 0 0 0 0 0
   * 0 0 1|0 0 0 0 0
   * 0 0 0 0|0|0 0 0
   * 0 0 0 0 0 0 0 0
   * 0 0 0 0|0 0 0 0
   * 0 0 0 0 0 0 0 0
   * 0 0 0 0|0 0 0 0
   * 0 0 0|1|0 0 0 0 |
   * 0 0 0 0 0 0 0 0 V
   * 0 0 0|0 0 0 0 0
   * 0 0 0 0 0 0 0 0
   * 0 0 1|0 0 0 0 0
   *
   * The simplest way to approach this is to start at the end
   * and read backwards to determine the mode configuration.
   *
   * liboggz and ffmpeg both use this method.
   */
  _parseSetupHeader(setup) {
    const bitReader = new _utilities_js__WEBPACK_IMPORTED_MODULE_1__.BitReader(setup);
    const failedToParseVorbisStream = "Failed to read Vorbis stream";
    const failedToParseVorbisModes = ", failed to parse vorbis modes";

    let mode = {
      count: 0,
    };

    // sync with the framing bit
    while ((bitReader.read(1) & 0x01) !== 1) {}

    let modeBits;
    // search in reverse to parse out the mode entries
    // limit mode count to 63 so previous block flag will be in first packet byte
    while (mode.count < 64 && bitReader.position > 0) {
      const mapping = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.reverse)(bitReader.read(8));
      if (
        mapping in mode &&
        !(mode.count === 1 && mapping === 0) // allows for the possibility of only one mode
      ) {
        this._codecParser.logError(
          "received duplicate mode mapping" + failedToParseVorbisModes
        );
        throw new Error(failedToParseVorbisStream);
      }

      // 16 bits transform type, 16 bits window type, all values must be zero
      let i = 0;
      while (bitReader.read(8) === 0x00 && i++ < 3) {} // a non-zero value may indicate the end of the mode entries, or invalid data

      if (i === 4) {
        // transform type and window type were all zeros
        modeBits = bitReader.read(7); // modeBits may need to be used in the next iteration if this is the last mode entry
        mode[mapping] = modeBits & 0x01; // read and store mode -> block flag mapping
        bitReader.position += 6; // go back 6 bits so next iteration starts right after the block flag
        mode.count++;
      } else {
        // transform type and window type were not all zeros
        // check for mode count using previous iteration modeBits
        if ((((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.reverse)(modeBits) & 0b01111110) >> 1) + 1 !== mode.count) {
          this._codecParser.logError(
            "mode count did not match actual modes" + failedToParseVorbisModes
          );
          throw new Error(failedToParseVorbisStream);
        }

        break;
      }
    }

    // mode mask to read the mode from the first byte in the vorbis frame
    mode.mask = (1 << Math.log2(mode.count)) - 1;
    // previous window flag is the next bit after the mode mask
    mode.prevMask = (mode.mask | 0x1) + 1;

    return mode;
  }
}


/***/ }),

/***/ "./node_modules/codec-parser/src/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/codec-parser/src/constants.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reserved": () => (/* binding */ reserved),
/* harmony export */   "bad": () => (/* binding */ bad),
/* harmony export */   "free": () => (/* binding */ free),
/* harmony export */   "none": () => (/* binding */ none),
/* harmony export */   "sixteenBitCRC": () => (/* binding */ sixteenBitCRC),
/* harmony export */   "channelMappings": () => (/* binding */ channelMappings),
/* harmony export */   "lfe": () => (/* binding */ lfe),
/* harmony export */   "monophonic": () => (/* binding */ monophonic),
/* harmony export */   "stereo": () => (/* binding */ stereo),
/* harmony export */   "getChannelMapping": () => (/* binding */ getChannelMapping),
/* harmony export */   "vorbisOpusChannelMapping": () => (/* binding */ vorbisOpusChannelMapping),
/* harmony export */   "rate192000": () => (/* binding */ rate192000),
/* harmony export */   "rate176400": () => (/* binding */ rate176400),
/* harmony export */   "rate96000": () => (/* binding */ rate96000),
/* harmony export */   "rate88200": () => (/* binding */ rate88200),
/* harmony export */   "rate64000": () => (/* binding */ rate64000),
/* harmony export */   "rate48000": () => (/* binding */ rate48000),
/* harmony export */   "rate44100": () => (/* binding */ rate44100),
/* harmony export */   "rate32000": () => (/* binding */ rate32000),
/* harmony export */   "rate24000": () => (/* binding */ rate24000),
/* harmony export */   "rate22050": () => (/* binding */ rate22050),
/* harmony export */   "rate16000": () => (/* binding */ rate16000),
/* harmony export */   "rate12000": () => (/* binding */ rate12000),
/* harmony export */   "rate11025": () => (/* binding */ rate11025),
/* harmony export */   "rate8000": () => (/* binding */ rate8000),
/* harmony export */   "rate7350": () => (/* binding */ rate7350)
/* harmony export */ });
const reserved = "reserved";
const bad = "bad";
const free = "free";
const none = "none";
const sixteenBitCRC = "16bit CRC";

// channel mappings
const mappingJoin = ", ";

const front = "front";
const side = "side";
const rear = "rear";
const left = "left";
const center = "center";
const right = "right";

// prettier-ignore
/*
[
  [
    "left, right",
    "left, right, center",
    "left, center, right",
    "center, left, right",
    "center"
  ],
  [
    "front left, front right",
    "front left, front right, front center",
    "front left, front center, front right",
    "front center, front left, front right",
    "front center"
  ],
  [
    "side left, side right",
    "side left, side right, side center",
    "side left, side center, side right",
    "side center, side left, side right",
    "side center"
  ],
  [
    "rear left, rear right",
    "rear left, rear right, rear center",
    "rear left, rear center, rear right",
    "rear center, rear left, rear right",
    "rear center"
  ]
]
*/
const channelMappings = 
  [
    "", 
    front + " ",
    side + " ",
    rear + " "
  ].map((x) =>
  [
    [left, right],
    [left, right, center],
    [left, center, right],
    [center, left, right],
    [center],
  ].flatMap((y) => y.map((z) => x + z).join(mappingJoin))
);

const lfe = "LFE";
const monophonic = "monophonic (mono)";
const stereo = "stereo";
const surround = "surround";

const channels = [
  monophonic,
  stereo,
  `linear ${surround}`,
  "quadraphonic",
  `5.0 ${surround}`,
  `5.1 ${surround}`,
  `6.1 ${surround}`,
  `7.1 ${surround}`,
];

const getChannelMapping = (channelCount, ...mappings) =>
  `${channels[channelCount - 1]} (${mappings.join(mappingJoin)})`;

// prettier-ignore
const vorbisOpusChannelMapping = [
  monophonic,
  getChannelMapping(2,channelMappings[0][0]),
  getChannelMapping(3,channelMappings[0][2]),
  getChannelMapping(4,channelMappings[1][0],channelMappings[3][0]),
  getChannelMapping(5,channelMappings[1][2],channelMappings[3][0]),
  getChannelMapping(6,channelMappings[1][2],channelMappings[3][0],lfe),
  getChannelMapping(7,channelMappings[1][2],channelMappings[2][0],channelMappings[3][4],lfe),
  getChannelMapping(8,channelMappings[1][2],channelMappings[2][0],channelMappings[3][0],lfe),
]

// sampleRates
const rate192000 = 192000;
const rate176400 = 176400;
const rate96000 = 96000;
const rate88200 = 88200;
const rate64000 = 64000;
const rate48000 = 48000;
const rate44100 = 44100;
const rate32000 = 32000;
const rate24000 = 24000;
const rate22050 = 22050;
const rate16000 = 16000;
const rate12000 = 12000;
const rate11025 = 11025;
const rate8000 = 8000;
const rate7350 = 7350;


/***/ }),

/***/ "./node_modules/codec-parser/src/containers/Frame.js":
/*!***********************************************************!*\
  !*** ./node_modules/codec-parser/src/containers/Frame.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Frame)
/* harmony export */ });
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals.js */ "./node_modules/codec-parser/src/globals.js");
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of codec-parser.
    
    codec-parser is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    codec-parser is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/



/**
 * @abstract
 */
class Frame {
  constructor(header, data) {
    _globals_js__WEBPACK_IMPORTED_MODULE_0__.frameStore.set(this, { header });

    this.data = data;
  }
}


/***/ }),

/***/ "./node_modules/codec-parser/src/containers/ogg/OggPage.js":
/*!*****************************************************************!*\
  !*** ./node_modules/codec-parser/src/containers/ogg/OggPage.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OggPage)
/* harmony export */ });
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globals.js */ "./node_modules/codec-parser/src/globals.js");
/* harmony import */ var _Frame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Frame.js */ "./node_modules/codec-parser/src/containers/Frame.js");
/* harmony import */ var _OggPageHeader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OggPageHeader.js */ "./node_modules/codec-parser/src/containers/ogg/OggPageHeader.js");
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of codec-parser.
    
    codec-parser is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    codec-parser is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/





class OggPage extends _Frame_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  static *getFrame(codecParser, headerCache, readOffset) {
    const header = yield* _OggPageHeader_js__WEBPACK_IMPORTED_MODULE_2__["default"].getHeader(
      codecParser,
      headerCache,
      readOffset
    );

    if (header) {
      const frameLength = _globals_js__WEBPACK_IMPORTED_MODULE_0__.headerStore.get(header).frameLength;
      const headerLength = _globals_js__WEBPACK_IMPORTED_MODULE_0__.headerStore.get(header).length;
      const totalLength = headerLength + frameLength;

      const rawData = (yield* codecParser.readRawData(totalLength, 0)).subarray(
        0,
        totalLength
      );

      const frame = rawData.subarray(headerLength, totalLength);

      return new OggPage(header, frame, rawData);
    } else {
      return null;
    }
  }

  constructor(header, frame, rawData) {
    super(header, frame);

    _globals_js__WEBPACK_IMPORTED_MODULE_0__.frameStore.get(this).length = rawData.length;

    this.codecFrames = [];
    this.rawData = rawData;
    this.absoluteGranulePosition = header.absoluteGranulePosition;
    this.crc32 = header.pageChecksum;
    this.duration = 0;
    this.isContinuedPacket = header.isContinuedPacket;
    this.isFirstPage = header.isFirstPage;
    this.isLastPage = header.isLastPage;
    this.pageSequenceNumber = header.pageSequenceNumber;
    this.samples = 0;
    this.streamSerialNumber = header.streamSerialNumber;
  }
}


/***/ }),

/***/ "./node_modules/codec-parser/src/containers/ogg/OggPageHeader.js":
/*!***********************************************************************!*\
  !*** ./node_modules/codec-parser/src/containers/ogg/OggPageHeader.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OggPageHeader)
/* harmony export */ });
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globals.js */ "./node_modules/codec-parser/src/globals.js");
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of codec-parser.
    
    codec-parser is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    codec-parser is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/

/*
https://xiph.org/ogg/doc/framing.html

AAAAAAAA AAAAAAAA AAAAAAAA AAAAAAAA BBBBBBBB 00000CDE

(LSB)                                                             (MSB)
FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF
GGGGGGGG GGGGGGGG GGGGGGGG GGGGGGGG
HHHHHHHH HHHHHHHH HHHHHHHH HHHHHHHH
IIIIIIII IIIIIIII IIIIIIII IIIIIIII

JJJJJJJJ
LLLLLLLL...

Ogg Page Header
Letter  Length (bits)  Description
A   32  0x4f676753, "OggS"
B   8   stream_structure_version
C   1   (0 no, 1 yes) last page of logical bitstream (eos)
D   1   (0 no, 1 yes) first page of logical bitstream (bos)
E   1   (0 no, 1 yes) continued packet

F   64  absolute granule position
G   32  stream serial number
H   32  page sequence no
I   32  page checksum
J   8   Number of page segments in the segment table
L   n   Segment table (n=page_segments+26).
        Segment table values sum to the total length of the packet.
        Last value is always < 0xFF. Last lacing value will be 0x00 if evenly divisible by 0xFF.
        
*/



class OggPageHeader {
  static *getHeader(codecParser, headerCache, readOffset) {
    const header = {};

    // Must be at least 28 bytes.
    let data = yield* codecParser.readRawData(28, readOffset);

    // Bytes (1-4 of 28)
    // Frame sync (must equal OggS): `AAAAAAAA|AAAAAAAA|AAAAAAAA|AAAAAAAA`:
    if (
      data[0] !== 0x4f || // O
      data[1] !== 0x67 || // g
      data[2] !== 0x67 || // g
      data[3] !== 0x53 //    S
    ) {
      return null;
    }

    // Byte (5 of 28)
    // * `BBBBBBBB`: stream_structure_version
    header.streamStructureVersion = data[4];

    // Byte (6 of 28)
    // * `00000CDE`
    // * `00000...`: All zeros
    // * `.....C..`: (0 no, 1 yes) last page of logical bitstream (eos)
    // * `......D.`: (0 no, 1 yes) first page of logical bitstream (bos)
    // * `.......E`: (0 no, 1 yes) continued packet
    const zeros = data[5] & 0b11111000;
    if (zeros) return null;

    header.isLastPage = Boolean(data[5] & 0b00000100);
    header.isFirstPage = Boolean(data[5] & 0b00000010);
    header.isContinuedPacket = Boolean(data[5] & 0b00000001);

    const view = new DataView(Uint8Array.from(data.subarray(0, 28)).buffer);

    // Byte (7-14 of 28)
    // * `FFFFFFFF|FFFFFFFF|FFFFFFFF|FFFFFFFF|FFFFFFFF|FFFFFFFF|FFFFFFFF|FFFFFFFF`
    // * Absolute Granule Position

    /**
     * @todo Safari does not support getBigInt64, but it also doesn't support Ogg
     */
    try {
      header.absoluteGranulePosition = view.getBigInt64(6, true);
    } catch {}

    // Byte (15-18 of 28)
    // * `GGGGGGGG|GGGGGGGG|GGGGGGGG|GGGGGGGG`
    // * Stream Serial Number
    header.streamSerialNumber = view.getInt32(14, true);

    // Byte (19-22 of 28)
    // * `HHHHHHHH|HHHHHHHH|HHHHHHHH|HHHHHHHH`
    // * Page Sequence Number
    header.pageSequenceNumber = view.getInt32(18, true);

    // Byte (23-26 of 28)
    // * `IIIIIIII|IIIIIIII|IIIIIIII|IIIIIIII`
    // * Page Checksum
    header.pageChecksum = view.getInt32(22, true);

    // Byte (27 of 28)
    // * `JJJJJJJJ`: Number of page segments in the segment table
    const pageSegmentTableLength = data[26];
    header.length = pageSegmentTableLength + 27;

    data = yield* codecParser.readRawData(header.length, readOffset); // read in the page segment table

    header.frameLength = 0;
    header.pageSegmentTable = [];
    header.pageSegmentBytes = data.subarray(27, header.length);

    for (let i = 0, segmentLength = 0; i < pageSegmentTableLength; i++) {
      const segmentByte = header.pageSegmentBytes[i];

      header.frameLength += segmentByte;
      segmentLength += segmentByte;

      if (segmentByte !== 0xff || i === pageSegmentTableLength - 1) {
        header.pageSegmentTable.push(segmentLength);
        segmentLength = 0;
      }
    }

    return new OggPageHeader(header);
  }

  /**
   * @private
   * Call OggPageHeader.getHeader(Array<Uint8>) to get instance
   */
  constructor(header) {
    _globals_js__WEBPACK_IMPORTED_MODULE_0__.headerStore.set(this, header);

    this.absoluteGranulePosition = header.absoluteGranulePosition;
    this.isContinuedPacket = header.isContinuedPacket;
    this.isFirstPage = header.isFirstPage;
    this.isLastPage = header.isLastPage;
    this.pageSegmentTable = header.pageSegmentTable;
    this.pageSequenceNumber = header.pageSequenceNumber;
    this.pageChecksum = header.pageChecksum;
    this.streamSerialNumber = header.streamSerialNumber;
  }
}


/***/ }),

/***/ "./node_modules/codec-parser/src/containers/ogg/OggParser.js":
/*!*******************************************************************!*\
  !*** ./node_modules/codec-parser/src/containers/ogg/OggParser.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OggParser)
/* harmony export */ });
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globals.js */ "./node_modules/codec-parser/src/globals.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities.js */ "./node_modules/codec-parser/src/utilities.js");
/* harmony import */ var _codecs_Parser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../codecs/Parser.js */ "./node_modules/codec-parser/src/codecs/Parser.js");
/* harmony import */ var _OggPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OggPage.js */ "./node_modules/codec-parser/src/containers/ogg/OggPage.js");
/* harmony import */ var _OggPageHeader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OggPageHeader.js */ "./node_modules/codec-parser/src/containers/ogg/OggPageHeader.js");
/* harmony import */ var _codecs_flac_FLACParser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../codecs/flac/FLACParser.js */ "./node_modules/codec-parser/src/codecs/flac/FLACParser.js");
/* harmony import */ var _codecs_opus_OpusParser_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../codecs/opus/OpusParser.js */ "./node_modules/codec-parser/src/codecs/opus/OpusParser.js");
/* harmony import */ var _codecs_vorbis_VorbisParser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../codecs/vorbis/VorbisParser.js */ "./node_modules/codec-parser/src/codecs/vorbis/VorbisParser.js");
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of codec-parser.
    
    codec-parser is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    codec-parser is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/












class OggParser extends _codecs_Parser_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(codecParser, headerCache, onCodec) {
    super(codecParser, headerCache);

    this._onCodec = onCodec;
    this.Frame = _OggPage_js__WEBPACK_IMPORTED_MODULE_3__["default"];
    this.Header = _OggPageHeader_js__WEBPACK_IMPORTED_MODULE_4__["default"];
    this._codec = null;
    this._continuedPacket = new Uint8Array();

    this._pageSequenceNumber = 0;
  }

  get codec() {
    return this._codec || "";
  }

  _updateCodec(codec, Parser) {
    if (this._codec !== codec) {
      this._parser = new Parser(this._codecParser, this._headerCache);
      this._codec = codec;
      this._onCodec(codec);
    }
  }

  _checkForIdentifier({ data }) {
    const idString = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.bytesToString)(data.subarray(0, 8));

    switch (idString) {
      case "fishead\0":
      case "fisbone\0":
      case "index\0\0\0":
        return false; // ignore ogg skeleton packets
      case "OpusHead":
        this._updateCodec("opus", _codecs_opus_OpusParser_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
        return true;
      case /^\x7fFLAC/.test(idString) && idString:
        this._updateCodec("flac", _codecs_flac_FLACParser_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
        return true;
      case /^\x01vorbis/.test(idString) && idString:
        this._updateCodec("vorbis", _codecs_vorbis_VorbisParser_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
        return true;
    }
  }

  _checkPageSequenceNumber(oggPage) {
    if (
      oggPage.pageSequenceNumber !== this._pageSequenceNumber + 1 &&
      this._pageSequenceNumber > 1 &&
      oggPage.pageSequenceNumber > 1
    ) {
      this._codecParser.logWarning(
        "Unexpected gap in Ogg Page Sequence Number.",
        `Expected: ${this._pageSequenceNumber + 1}, Got: ${
          oggPage.pageSequenceNumber
        }`
      );
    }

    this._pageSequenceNumber = oggPage.pageSequenceNumber;
  }

  *parseFrame() {
    const oggPage = yield* this.fixedLengthFrameSync(true);

    this._checkPageSequenceNumber(oggPage);

    const oggPageStore = _globals_js__WEBPACK_IMPORTED_MODULE_0__.frameStore.get(oggPage);
    const { pageSegmentBytes, pageSegmentTable } = _globals_js__WEBPACK_IMPORTED_MODULE_0__.headerStore.get(
      oggPageStore.header
    );

    let offset = 0;

    oggPageStore.segments = pageSegmentTable.map((segmentLength) =>
      oggPage.data.subarray(offset, (offset += segmentLength))
    );

    if (pageSegmentBytes[pageSegmentBytes.length - 1] === 0xff) {
      // continued packet
      this._continuedPacket = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.concatBuffers)(
        this._continuedPacket,
        oggPageStore.segments.pop()
      );
    } else if (this._continuedPacket.length) {
      oggPageStore.segments[0] = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.concatBuffers)(
        this._continuedPacket,
        oggPageStore.segments[0]
      );

      this._continuedPacket = new Uint8Array();
    }

    if (this._codec || this._checkForIdentifier(oggPage)) {
      const frame = this._parser.parseOggPage(oggPage);
      this._codecParser.mapFrameStats(frame);
      return frame;
    }
  }
}


/***/ }),

/***/ "./node_modules/codec-parser/src/globals.js":
/*!**************************************************!*\
  !*** ./node_modules/codec-parser/src/globals.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "headerStore": () => (/* binding */ headerStore),
/* harmony export */   "frameStore": () => (/* binding */ frameStore)
/* harmony export */ });
const headerStore = new WeakMap();
const frameStore = new WeakMap();


/***/ }),

/***/ "./node_modules/codec-parser/src/metadata/ID3v2.js":
/*!*********************************************************!*\
  !*** ./node_modules/codec-parser/src/metadata/ID3v2.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ID3v2)
/* harmony export */ });
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of codec-parser.
    
    codec-parser is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    codec-parser is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/

// https://id3.org/Developer%20Information

class ID3v2 {
  static *getID3v2Header(codecParser, headerCache, readOffset) {
    const header = { headerLength: 10 };

    let data = yield* codecParser.readRawData(3, readOffset);
    // Byte (0-2 of 9)
    // ID3
    if (data[0] !== 0x49 || data[1] !== 0x44 || data[2] !== 0x33) return null;

    data = yield* codecParser.readRawData(header.headerLength, readOffset);

    // Byte (3-4 of 9)
    // * `BBBBBBBB|........`: Major version
    // * `........|BBBBBBBB`: Minor version
    header.version = `id3v2.${data[3]}.${data[4]}`;

    // Byte (5 of 9)
    // * `....0000.: Zeros (flags not implemented yet)
    if (data[5] & 0b00001111) return null;

    // Byte (5 of 9)
    // * `CDEF0000`: Flags
    // * `C.......`: Unsynchronisation (indicates whether or not unsynchronisation is used)
    // * `.D......`: Extended header (indicates whether or not the header is followed by an extended header)
    // * `..E.....`: Experimental indicator (indicates whether or not the tag is in an experimental stage)
    // * `...F....`: Footer present (indicates that a footer is present at the very end of the tag)
    header.unsynchronizationFlag = Boolean(data[5] & 0b10000000);
    header.extendedHeaderFlag = Boolean(data[5] & 0b01000000);
    header.experimentalFlag = Boolean(data[5] & 0b00100000);
    header.footerPresent = Boolean(data[5] & 0b00010000);

    // Byte (6-9 of 9)
    // * `0.......|0.......|0.......|0.......`: Zeros
    if (
      data[6] & 0b10000000 ||
      data[7] & 0b10000000 ||
      data[8] & 0b10000000 ||
      data[9] & 0b10000000
    )
      return null;

    // Byte (6-9 of 9)
    // * `.FFFFFFF|.FFFFFFF|.FFFFFFF|.FFFFFFF`: Tag Length
    // The ID3v2 tag size is encoded with four bytes where the most significant bit (bit 7)
    // is set to zero in every byte, making a total of 28 bits. The zeroed bits are ignored,
    // so a 257 bytes long tag is represented as $00 00 02 01.
    header.dataLength =
      (data[6] << 21) | (data[7] << 14) | (data[8] << 7) | data[9];

    header.length = header.headerLength + header.dataLength;

    return new ID3v2(header);
  }

  constructor(header) {
    this.version = header.version;
    this.unsynchronizationFlag = header.unsynchronizationFlag;
    this.extendedHeaderFlag = header.extendedHeaderFlag;
    this.experimentalFlag = header.experimentalFlag;
    this.footerPresent = header.footerPresent;
    this.length = header.length;
  }
}


/***/ }),

/***/ "./node_modules/codec-parser/src/utilities.js":
/*!****************************************************!*\
  !*** ./node_modules/codec-parser/src/utilities.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "crc8": () => (/* binding */ crc8),
/* harmony export */   "flacCrc16": () => (/* binding */ flacCrc16),
/* harmony export */   "crc32": () => (/* binding */ crc32),
/* harmony export */   "reverse": () => (/* binding */ reverse),
/* harmony export */   "concatBuffers": () => (/* binding */ concatBuffers),
/* harmony export */   "bytesToString": () => (/* binding */ bytesToString),
/* harmony export */   "BitReader": () => (/* binding */ BitReader)
/* harmony export */ });
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of codec-parser.
    
    codec-parser is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    codec-parser is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/

const getCrcTable = (crcTable, crcInitialValueFunction, crcFunction) => {
  for (let byte = 0; byte < crcTable.length; byte++) {
    let crc = crcInitialValueFunction(byte);

    for (let bit = 8; bit > 0; bit--) crc = crcFunction(crc);

    crcTable[byte] = crc;
  }
  return crcTable;
};

const crc8Table = getCrcTable(
  new Uint8Array(256),
  (b) => b,
  (crc) => (crc & 0x80 ? 0x07 ^ (crc << 1) : crc << 1)
);

const flacCrc16Table = [
  getCrcTable(
    new Uint16Array(256),
    (b) => b << 8,
    (crc) => (crc << 1) ^ (crc & (1 << 15) ? 0x8005 : 0)
  ),
];

const crc32Table = [
  getCrcTable(
    new Uint32Array(256),
    (b) => b,
    (crc) => (crc >>> 1) ^ ((crc & 1) * 0xedb88320)
  ),
];

// build crc tables
for (let i = 0; i < 15; i++) {
  flacCrc16Table.push(new Uint16Array(256));
  crc32Table.push(new Uint32Array(256));

  for (let j = 0; j <= 0xff; j++) {
    flacCrc16Table[i + 1][j] =
      flacCrc16Table[0][flacCrc16Table[i][j] >>> 8] ^
      (flacCrc16Table[i][j] << 8);

    crc32Table[i + 1][j] =
      (crc32Table[i][j] >>> 8) ^ crc32Table[0][crc32Table[i][j] & 0xff];
  }
}

const crc8 = (data) => {
  let crc = 0;
  const dataLength = data.length;

  for (let i = 0; i !== dataLength; i++) crc = crc8Table[crc ^ data[i]];

  return crc;
};

const flacCrc16 = (data) => {
  const dataLength = data.length;
  const crcChunkSize = dataLength - 16;
  let crc = 0;
  let i = 0;

  while (i <= crcChunkSize) {
    crc ^= (data[i++] << 8) | data[i++];
    crc =
      flacCrc16Table[15][crc >> 8] ^
      flacCrc16Table[14][crc & 0xff] ^
      flacCrc16Table[13][data[i++]] ^
      flacCrc16Table[12][data[i++]] ^
      flacCrc16Table[11][data[i++]] ^
      flacCrc16Table[10][data[i++]] ^
      flacCrc16Table[9][data[i++]] ^
      flacCrc16Table[8][data[i++]] ^
      flacCrc16Table[7][data[i++]] ^
      flacCrc16Table[6][data[i++]] ^
      flacCrc16Table[5][data[i++]] ^
      flacCrc16Table[4][data[i++]] ^
      flacCrc16Table[3][data[i++]] ^
      flacCrc16Table[2][data[i++]] ^
      flacCrc16Table[1][data[i++]] ^
      flacCrc16Table[0][data[i++]];
  }

  while (i !== dataLength)
    crc = ((crc & 0xff) << 8) ^ flacCrc16Table[0][(crc >> 8) ^ data[i++]];

  return crc;
};

const crc32 = (data) => {
  const dataLength = data.length;
  const crcChunkSize = dataLength - 16;
  let crc = 0;
  let i = 0;

  while (i <= crcChunkSize)
    crc =
      crc32Table[15][(data[i++] ^ crc) & 0xff] ^
      crc32Table[14][(data[i++] ^ (crc >>> 8)) & 0xff] ^
      crc32Table[13][(data[i++] ^ (crc >>> 16)) & 0xff] ^
      crc32Table[12][data[i++] ^ (crc >>> 24)] ^
      crc32Table[11][data[i++]] ^
      crc32Table[10][data[i++]] ^
      crc32Table[9][data[i++]] ^
      crc32Table[8][data[i++]] ^
      crc32Table[7][data[i++]] ^
      crc32Table[6][data[i++]] ^
      crc32Table[5][data[i++]] ^
      crc32Table[4][data[i++]] ^
      crc32Table[3][data[i++]] ^
      crc32Table[2][data[i++]] ^
      crc32Table[1][data[i++]] ^
      crc32Table[0][data[i++]];

  while (i !== dataLength)
    crc = crc32Table[0][(crc ^ data[i++]) & 0xff] ^ (crc >>> 8);

  return crc ^ -1;
};

const concatBuffers = (...buffers) => {
  const buffer = new Uint8Array(
    buffers.reduce((acc, buf) => acc + buf.length, 0)
  );

  buffers.reduce((offset, buf) => {
    buffer.set(buf, offset);
    return offset + buf.length;
  }, 0);

  return buffer;
};

const bytesToString = (bytes) => String.fromCharCode(...bytes);

// prettier-ignore
const reverseTable = [0x0,0x8,0x4,0xc,0x2,0xa,0x6,0xe,0x1,0x9,0x5,0xd,0x3,0xb,0x7,0xf];
const reverse = (val) =>
  (reverseTable[val & 0b1111] << 4) | reverseTable[val >> 4];

class BitReader {
  constructor(data) {
    this._data = data;
    this._pos = data.length * 8;
  }

  set position(position) {
    this._pos = position;
  }

  get position() {
    return this._pos;
  }

  read(bits) {
    const byte = Math.floor(this._pos / 8);
    const bit = this._pos % 8;
    this._pos -= bits;

    const window =
      (reverse(this._data[byte - 1]) << 8) + reverse(this._data[byte]);

    return (window >> (7 - bit)) & 0xff;
  }
}




/***/ }),

/***/ "./node_modules/icecast-metadata-player/src/EventTargetPolyfill.js":
/*!*************************************************************************!*\
  !*** ./node_modules/icecast-metadata-player/src/EventTargetPolyfill.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventTargetPolyfill)
/* harmony export */ });
// support for Safari 13
// https://stackoverflow.com/a/58209729/14911733

class EventTargetPolyfill {
  constructor() {
    this._listeners = [];
  }

  hasEventListener(type, listener) {
    return this._listeners.some(
      (item) => item.type === type && item.listener === listener
    );
  }

  addEventListener(type, listener, options = {}) {
    if (!this.hasEventListener(type, listener)) {
      this._listeners.push({ type, listener, options });
    }
    // console.log(`${this}-listeners:`,this._listeners);
    return this;
  }

  removeEventListener(type, listener) {
    const index = this._listeners.findIndex(
      (item) => item.type === type && item.listener === listener
    );
    if (index >= 0) this._listeners.splice(index, 1);
    return this;
  }

  removeEventListeners() {
    this._listeners = [];
    return this;
  }

  dispatchEvent(evt) {
    this._listeners
      .filter((item) => item.type === evt.type)
      .forEach((item) => {
        const {
          type,
          listener,
          options: { once },
        } = item;
        listener.call(this, evt);
        if (once === true) this.removeEventListener(type, listener);
      });
    return this;
  }
}


/***/ }),

/***/ "./node_modules/icecast-metadata-player/src/FrameQueue.js":
/*!****************************************************************!*\
  !*** ./node_modules/icecast-metadata-player/src/FrameQueue.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FrameQueue)
/* harmony export */ });
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global.js */ "./node_modules/icecast-metadata-player/src/global.js");


class FrameQueue {
  constructor(icecast) {
    this.CACHE_DURATION = 300000; // milliseconds of burst on connect data

    this._icecast = icecast;

    this.initSync();
    this.initQueue();
  }

  initSync() {
    this._syncQueue = [];
    this._alignIndex = 0;
    this._syncIndex = 0;
  }

  initQueue() {
    this._queue = [];
    this._queueDuration = 0;
  }

  add({ crc32, duration }) {
    this._queue.push({ crc32, duration });
    this._queueDuration += duration;

    if (this._queueDuration >= this.CACHE_DURATION) {
      const { duration } = this._queue.shift();
      this._queueDuration -= duration;
    }
  }

  addAll(frames) {
    frames.forEach((frame) => this.add(frame));
  }

  /*
  Aligns the queue with a new incoming data by aligning the crc32 hashes 
  and then returning only the frames that do not existing on the queue.
  
                   old data | common data  | new data
  (old connection) ------------------------|
  (new connection)          |------------------>
                             ^^^^^^^^^^^^^^ ^^^^
                              (sync)         (frames to return)
  */

  /**
   *
   * @param {Array<CodecFrame|OggPage>} frames
   * @returns Array with frames as first element, boolean indicating if the sync was successful as the second element
   */
  sync(frames) {
    this._syncQueue.push(...frames);

    // find the index of the element in the queue that aligns with the sync queue
    align_queues: while (this._alignIndex < this._queue.length) {
      while (
        this._syncIndex < this._syncQueue.length &&
        this._alignIndex + this._syncIndex < this._queue.length
      ) {
        if (
          this._syncQueue[this._syncIndex].crc32 !==
          this._queue[this._alignIndex + this._syncIndex].crc32 // failed to match
        ) {
          this._syncIndex = 0; // reset sync queue index and start over
          this._alignIndex++;
          continue align_queues;
        }
        this._syncIndex++;
      }
      break; // full match, queues are aligned
    }

    // no matching data (not synced)
    if (this._alignIndex === this._queue.length) {
      // prettier-ignore
      this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_0__.fireEvent](
        _global_js__WEBPACK_IMPORTED_MODULE_0__.event.WARN,
        "Reconnected successfully after retry event.",
        "Found no overlapping frames from previous request.",
        "Unable to sync old and new request."
      );

      const syncQueue = this._syncQueue;
      this.initSync();
      this.initQueue(); // clear queue since there is a gap in data
      return [syncQueue, false];
    }

    const sliceIndex = this._queue.length - this._alignIndex;

    // new frames (synced)
    if (this._syncQueue.length > sliceIndex) {
      // prettier-ignore
      this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_0__.fireEvent](
          _global_js__WEBPACK_IMPORTED_MODULE_0__.event.WARN,
          "Reconnected successfully after retry event.",
          `Found ${sliceIndex} frames (${(this._queue
            .slice(this._alignIndex)
            .reduce((acc, { duration }) => acc + duration, 0) / 1000).toFixed(3)} seconds) of overlapping audio data in new request.`,
          "Synchronized old and new request."
        );

      const newFrames = this._syncQueue.slice(sliceIndex);
      this.initSync();
      return [newFrames, true];
    }

    // no new frames yet
    return [[], false];
  }
}


/***/ }),

/***/ "./node_modules/icecast-metadata-player/src/IcecastMetadataPlayer.js":
/*!***************************************************************************!*\
  !*** ./node_modules/icecast-metadata-player/src/IcecastMetadataPlayer.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IcecastMetadataPlayer)
/* harmony export */ });
/* harmony import */ var icecast_metadata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! icecast-metadata-js */ "./node_modules/icecast-metadata-js/browser.js");
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global.js */ "./node_modules/icecast-metadata-player/src/global.js");
/* harmony import */ var _EventTargetPolyfill_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventTargetPolyfill.js */ "./node_modules/icecast-metadata-player/src/EventTargetPolyfill.js");
/* harmony import */ var _PlayerFactory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlayerFactory.js */ "./node_modules/icecast-metadata-player/src/PlayerFactory.js");
/* harmony import */ var _players_MediaSourcePlayer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./players/MediaSourcePlayer.js */ "./node_modules/icecast-metadata-player/src/players/MediaSourcePlayer.js");
/* harmony import */ var _players_HTML5Player_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./players/HTML5Player.js */ "./node_modules/icecast-metadata-player/src/players/HTML5Player.js");
/* harmony import */ var _players_WebAudioPlayer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./players/WebAudioPlayer.js */ "./node_modules/icecast-metadata-player/src/players/WebAudioPlayer.js");
/**
 * @license
 * @see https://github.com/eshaz/icecast-metadata-js
 * @copyright 2021 Ethan Halsall
 *  This file is part of icecast-metadata-player.
 *
 *  icecast-metadata-player free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Lesser General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  icecast-metadata-player distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public License
 *  along with this program.  If not, see <https://www.gnu.org/licenses/>
 */










let EventClass;

try {
  new EventTarget();
  EventClass = EventTarget;
} catch {
  EventClass = _EventTargetPolyfill_js__WEBPACK_IMPORTED_MODULE_2__["default"];
}

const playbackMethod = Symbol();
const playerFactory = Symbol();
const playerResetPromise = Symbol();
const events = Symbol();
const playerState = Symbol();

const onAudioPause = Symbol();
const onAudioPlay = Symbol();
const onPlay = Symbol();
const onAudioError = Symbol();
const onAudioWaiting = Symbol();

const resetPlayback = Symbol();
const retryAttempt = Symbol();
const retryTimeoutId = Symbol();

class IcecastMetadataPlayer extends EventClass {
  /**
   * @constructor
   * @param {string} endpoint Endpoint of the Icecast compatible stream
   * @param {object} options Options object
   * @param {HTMLAudioElement} options.audioElement Audio element to play the stream
   * @param {Array} options.metadataTypes Array of metadata types to parse
   * @param {number} options.bufferLength Seconds of audio to buffer before starting playback
   * @param {number} options.icyMetaInt ICY metadata interval
   * @param {string} options.icyCharacterEncoding Character encoding to use for ICY metadata (defaults to "utf-8")
   * @param {number} options.icyDetectionTimeout ICY metadata detection timeout
   * @param {number} options.retryTimeout Number of seconds to wait before giving up on retries
   * @param {number} options.retryDelayRate Percentage of seconds to increment after each retry (how quickly to increase the back-off)
   * @param {number} options.retryDelayMin Minimum number of seconds between retries (start of the exponential back-off curve)
   * @param {number} options.retryDelayMax Maximum number of seconds between retries (end of the exponential back-off curve)
   * @param {boolean} options.enableLogging Set to `true` to enable warning and error logging to the console
   * @param {string} options.playbackMethod Sets the preferred playback method (mediasource (default), html5, webaudio)
   *
   * @callback options.onMetadata Called with metadata when synchronized with the audio
   * @callback options.onMetadataEnqueue Called with metadata when discovered on the response
   * @callback options.onError Called with message(s) when a fallback or error condition is met
   * @callback options.onWarn Called with message(s) when a warning condition is met
   * @callback options.onPlay Called when the audio element begins playing
   * @callback options.onLoad Called when stream request is started
   * @callback options.onStreamStart Called when stream requests begins to return data
   * @callback options.onBuffer Called when the audio buffer is being filled
   * @callback options.onStream Called when stream data is sent to the audio element
   * @callback options.onStreamEnd Called when the stream request completes
   * @callback options.onStop Called when the stream is completely stopped and all cleanup operations are complete
   * @callback options.onRetry Called when a connection retry is attempted
   * @callback options.onRetryTimeout Called when when connections attempts have timed out
   * @callback options.onCodecUpdate Called when the audio codec information has changed
   */
  constructor(url, options = {}) {
    super();

    _global_js__WEBPACK_IMPORTED_MODULE_1__.p.set(this, {
      // options
      [_global_js__WEBPACK_IMPORTED_MODULE_1__.endpoint]: url,
      [_global_js__WEBPACK_IMPORTED_MODULE_1__.audioElement]: options.audioElement || new Audio(),
      [_global_js__WEBPACK_IMPORTED_MODULE_1__.bufferLength]: options.bufferLength || 1,
      [_global_js__WEBPACK_IMPORTED_MODULE_1__.icyMetaInt]: options.icyMetaInt,
      [_global_js__WEBPACK_IMPORTED_MODULE_1__.icyCharacterEncoding]: options.icyCharacterEncoding,
      [_global_js__WEBPACK_IMPORTED_MODULE_1__.icyDetectionTimeout]: options.icyDetectionTimeout,
      [_global_js__WEBPACK_IMPORTED_MODULE_1__.metadataTypes]: options.metadataTypes || ["icy"],
      [_global_js__WEBPACK_IMPORTED_MODULE_1__.hasIcy]: (options.metadataTypes || ["icy"]).includes("icy"),
      [_global_js__WEBPACK_IMPORTED_MODULE_1__.enableLogging]: options.enableLogging || false,
      [_global_js__WEBPACK_IMPORTED_MODULE_1__.enableCodecUpdate]:
        Boolean(options.onCodecUpdate) || options.enableCodecUpdate,
      [_global_js__WEBPACK_IMPORTED_MODULE_1__.retryDelayRate]: (options.retryDelayRate || 0.1) + 1,
      [_global_js__WEBPACK_IMPORTED_MODULE_1__.retryDelayMin]: (options.retryDelayMin || 0.5) * 1000,
      [_global_js__WEBPACK_IMPORTED_MODULE_1__.retryDelayMax]: (options.retryDelayMax || 2) * 1000,
      [_global_js__WEBPACK_IMPORTED_MODULE_1__.retryTimeout]: (options.retryTimeout || 30) * 1000,
      [playbackMethod]: options.playbackMethod,
      // callbacks
      [events]: {
        [_global_js__WEBPACK_IMPORTED_MODULE_1__.event.PLAY]: options.onPlay || _global_js__WEBPACK_IMPORTED_MODULE_1__.noOp,
        [_global_js__WEBPACK_IMPORTED_MODULE_1__.event.LOAD]: options.onLoad || _global_js__WEBPACK_IMPORTED_MODULE_1__.noOp,
        [_global_js__WEBPACK_IMPORTED_MODULE_1__.event.STREAM_START]: options.onStreamStart || _global_js__WEBPACK_IMPORTED_MODULE_1__.noOp,
        [_global_js__WEBPACK_IMPORTED_MODULE_1__.event.BUFFER]: options.onBuffer || _global_js__WEBPACK_IMPORTED_MODULE_1__.noOp,
        [_global_js__WEBPACK_IMPORTED_MODULE_1__.event.STREAM]: options.onStream || _global_js__WEBPACK_IMPORTED_MODULE_1__.noOp,
        [_global_js__WEBPACK_IMPORTED_MODULE_1__.event.STREAM_END]: options.onStreamEnd || _global_js__WEBPACK_IMPORTED_MODULE_1__.noOp,
        [_global_js__WEBPACK_IMPORTED_MODULE_1__.event.METADATA]: options.onMetadata || _global_js__WEBPACK_IMPORTED_MODULE_1__.noOp,
        [_global_js__WEBPACK_IMPORTED_MODULE_1__.event.METADATA_ENQUEUE]: options.onMetadataEnqueue || _global_js__WEBPACK_IMPORTED_MODULE_1__.noOp,
        [_global_js__WEBPACK_IMPORTED_MODULE_1__.event.CODEC_UPDATE]: options.onCodecUpdate || _global_js__WEBPACK_IMPORTED_MODULE_1__.noOp,
        [_global_js__WEBPACK_IMPORTED_MODULE_1__.event.STOP]: options.onStop || _global_js__WEBPACK_IMPORTED_MODULE_1__.noOp,
        [_global_js__WEBPACK_IMPORTED_MODULE_1__.event.RETRY]: options.onRetry || _global_js__WEBPACK_IMPORTED_MODULE_1__.noOp,
        [_global_js__WEBPACK_IMPORTED_MODULE_1__.event.RETRY_TIMEOUT]: options.onRetryTimeout || _global_js__WEBPACK_IMPORTED_MODULE_1__.noOp,
        [_global_js__WEBPACK_IMPORTED_MODULE_1__.event.WARN]: (...messages) => {
          this[_global_js__WEBPACK_IMPORTED_MODULE_1__.logError](console.warn, options.onWarn, messages);
        },
        [_global_js__WEBPACK_IMPORTED_MODULE_1__.event.ERROR]: (...messages) => {
          this[_global_js__WEBPACK_IMPORTED_MODULE_1__.logError](console.error, options.onError, messages);
        },
      },
      // variables
      [_global_js__WEBPACK_IMPORTED_MODULE_1__.icecastMetadataQueue]: new icecast_metadata_js__WEBPACK_IMPORTED_MODULE_0__.IcecastMetadataQueue({
        onMetadataUpdate: (...args) => this[_global_js__WEBPACK_IMPORTED_MODULE_1__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_1__.event.METADATA, ...args),
        onMetadataEnqueue: (...args) =>
          this[_global_js__WEBPACK_IMPORTED_MODULE_1__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_1__.event.METADATA_ENQUEUE, ...args),
      }),
      [_global_js__WEBPACK_IMPORTED_MODULE_1__.codecUpdateQueue]: new icecast_metadata_js__WEBPACK_IMPORTED_MODULE_0__.IcecastMetadataQueue({
        onMetadataUpdate: (...args) =>
          this[_global_js__WEBPACK_IMPORTED_MODULE_1__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_1__.event.CODEC_UPDATE, ...args),
      }),
      [resetPlayback]: () => {
        clearTimeout(_global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[retryTimeoutId]);
        this.removeEventListener(
          _global_js__WEBPACK_IMPORTED_MODULE_1__.event.STREAM_START,
          _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[resetPlayback]
        );
        _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_1__.audioElement].removeEventListener(
          "waiting",
          _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[onAudioWaiting]
        );

        if (this.state !== _global_js__WEBPACK_IMPORTED_MODULE_1__.state.RETRYING) {
          _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_1__.audioElement].pause();
          _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_1__.icecastMetadataQueue].purgeMetadataQueue();
          _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_1__.codecUpdateQueue].purgeMetadataQueue();
          _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[playerResetPromise] = _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)
            [playerFactory].player.reset();
        }
      },
      // audio element event handlers
      [onAudioPlay]: () => {
        this.play();
      },
      [onAudioPause]: () => {
        this.stop();
      },
      [onAudioError]: (e) => {
        const errors = {
          1: "MEDIA_ERR_ABORTED The fetching of the associated resource was aborted by the user's request.",
          2: "MEDIA_ERR_NETWORK Some kind of network error occurred which prevented the media from being successfully fetched, despite having previously been available.",
          3: "MEDIA_ERR_DECODE Despite having previously been determined to be usable, an error occurred while trying to decode the media resource, resulting in an error.",
          4: "MEDIA_ERR_SRC_NOT_SUPPORTED The associated resource or media provider object (such as a MediaStream) has been found to be unsuitable.",
          5: "MEDIA_ERR_ENCRYPTED",
        };

        if (this.state !== _global_js__WEBPACK_IMPORTED_MODULE_1__.state.RETRYING) {
          this[_global_js__WEBPACK_IMPORTED_MODULE_1__.fireEvent](
            _global_js__WEBPACK_IMPORTED_MODULE_1__.event.ERROR,
            "The audio element encountered an error",
            errors[e.target.error.code] || `Code: ${e.target.error.code}`,
            `Message: ${e.target.error.message}`
          );

          this.stop();
        } else {
          _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[resetPlayback]();
        }
      },
      [onPlay]: () => {
        const audio = _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_1__.audioElement];

        if (
          this.state === _global_js__WEBPACK_IMPORTED_MODULE_1__.state.LOADING ||
          (!audio.loop &&
            this.state !== _global_js__WEBPACK_IMPORTED_MODULE_1__.state.STOPPING &&
            this.state !== _global_js__WEBPACK_IMPORTED_MODULE_1__.state.STOPPED)
        ) {
          audio.play();
          this[playerState] = _global_js__WEBPACK_IMPORTED_MODULE_1__.state.PLAYING;
        }
      },
    });

    this[_global_js__WEBPACK_IMPORTED_MODULE_1__.attachAudioElement]();
    this[playerState] = _global_js__WEBPACK_IMPORTED_MODULE_1__.state.STOPPED;

    _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[playerFactory] = new _PlayerFactory_js__WEBPACK_IMPORTED_MODULE_3__["default"](
      this,
      _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[playbackMethod],
      _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_1__.icyCharacterEncoding]
    );
  }

  /**
   * @description Checks for MediaSource and HTML5 support for a given codec
   * @param {string} type Codec / mime-type to check
   * @returns {mediasource: string, html5: string} Object indicating if the codec is supported by MediaSource or HTML5 audio
   */
  static canPlayType(type) {
    return {
      mediasource: _players_MediaSourcePlayer_js__WEBPACK_IMPORTED_MODULE_4__["default"].canPlayType(type),
      html5: _players_HTML5Player_js__WEBPACK_IMPORTED_MODULE_5__["default"].canPlayType(type),
      webaudio: _players_WebAudioPlayer_js__WEBPACK_IMPORTED_MODULE_6__["default"].canPlayType(type),
    };
  }

  /**
   * @returns {HTMLAudioElement} The audio element associated with this instance
   */
  get audioElement() {
    return _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_1__.audioElement];
  }

  /**
   * @returns {number} The ICY metadata interval in number of bytes for this instance
   */
  get icyMetaInt() {
    return _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[playerFactory].icyMetaInt;
  }

  /**
   * @returns {Array<Metadata>} Array of enqueued metadata objects in FILO order
   */
  get metadataQueue() {
    return _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_1__.icecastMetadataQueue].metadataQueue;
  }

  /**
   * @returns {string} The current state ("loading", "playing", "stopping", "stopped", "retrying")
   */
  get state() {
    return _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[playerState];
  }

  /**
   * @returns {string} The playback method ("mediasource", "webaudio", "html5")
   */
  get playbackMethod() {
    return _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[playerFactory].playbackMethod;
  }

  set [playerState](_state) {
    this.dispatchEvent(new CustomEvent(_state));
    _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[playerState] = _state;
  }

  [_global_js__WEBPACK_IMPORTED_MODULE_1__.attachAudioElement]() {
    // audio events
    const audio = _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_1__.audioElement];
    audio.addEventListener("pause", _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[onAudioPause]);
    audio.addEventListener("play", _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[onAudioPlay]);
    audio.addEventListener("error", _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[onAudioError]);
    this.addEventListener("play", _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[onPlay]);
  }

  /**
   * @description Remove event listeners from the audio element and this instance and stops playback
   */
  async detachAudioElement() {
    const audio = _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_1__.audioElement];
    audio.removeEventListener("pause", _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[onAudioPause]);
    audio.removeEventListener("play", _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[onAudioPlay]);
    audio.removeEventListener("error", _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[onAudioError]);
    this.removeEventListener("play", _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[onPlay]);

    await this.stop();
  }

  /**
   * @description Plays the Icecast stream
   * @async Resolves when the audio element is playing
   */
  async play() {
    if (this.state === _global_js__WEBPACK_IMPORTED_MODULE_1__.state.STOPPED) {
      _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_1__.abortController] = new AbortController();
      this[playerState] = _global_js__WEBPACK_IMPORTED_MODULE_1__.state.LOADING;
      this[_global_js__WEBPACK_IMPORTED_MODULE_1__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_1__.event.LOAD);

      // prettier-ignore
      const tryFetching = async () =>
        _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[playerFactory].playStream()
          .catch(async (e) => {
            if (e.name !== "AbortError") {
              if (await this[_global_js__WEBPACK_IMPORTED_MODULE_1__.shouldRetry](e)) {
                this[_global_js__WEBPACK_IMPORTED_MODULE_1__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_1__.event.RETRY);
                return tryFetching();
              }

              _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_1__.abortController].abort(); // stop fetch if is wasn't aborted

              if (
                _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[playerState] !== _global_js__WEBPACK_IMPORTED_MODULE_1__.state.STOPPING &&
                _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[playerState] !== _global_js__WEBPACK_IMPORTED_MODULE_1__.state.STOPPED
              ) {
                this[_global_js__WEBPACK_IMPORTED_MODULE_1__.fireEvent](
                  _global_js__WEBPACK_IMPORTED_MODULE_1__.event.ERROR,
                  e.message.match(/network|fetch|offline|codec/i) ? e : e.stack
                );
              }
            }
          });

      tryFetching().finally(() => {
        _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[resetPlayback]();

        this[_global_js__WEBPACK_IMPORTED_MODULE_1__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_1__.event.STOP);
        this[playerState] = _global_js__WEBPACK_IMPORTED_MODULE_1__.state.STOPPED;
      });

      await new Promise((resolve) => {
        this.addEventListener(_global_js__WEBPACK_IMPORTED_MODULE_1__.event.PLAY, resolve, { once: true });
      });
    }
  }

  /**
   * @description Stops playing the Icecast stream
   * @async Resolves the icecast stream has stopped
   */
  async stop() {
    if (this.state !== _global_js__WEBPACK_IMPORTED_MODULE_1__.state.STOPPED && this.state !== _global_js__WEBPACK_IMPORTED_MODULE_1__.state.STOPPING) {
      this[playerState] = _global_js__WEBPACK_IMPORTED_MODULE_1__.state.STOPPING;
      _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_1__.abortController].abort();

      await new Promise((resolve) => {
        this.addEventListener(_global_js__WEBPACK_IMPORTED_MODULE_1__.event.STOP, resolve, { once: true });
      });
    }
  }

  async [_global_js__WEBPACK_IMPORTED_MODULE_1__.shouldRetry](error) {
    if (_global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_1__.retryTimeout] === 0) return false;

    if (_global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[playerState] === _global_js__WEBPACK_IMPORTED_MODULE_1__.state.RETRYING) {
      // wait for retry interval
      await new Promise((resolve) => {
        this.addEventListener(_global_js__WEBPACK_IMPORTED_MODULE_1__.state.STOPPING, resolve, { once: true });

        const delay = Math.min(
          _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_1__.retryDelayMin] *
            _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_1__.retryDelayRate] ** _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[retryAttempt]++,
          _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_1__.retryDelayMax]
        ); // exponential backoff

        setTimeout(() => {
          this.removeEventListener(_global_js__WEBPACK_IMPORTED_MODULE_1__.state.STOPPING, resolve);
          resolve();
        }, delay + delay * 0.3 * Math.random()); // jitter
      });

      // ensure the retry hasn't been cancelled while waiting
      return _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[playerState] === _global_js__WEBPACK_IMPORTED_MODULE_1__.state.RETRYING;
    }

    if (
      _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[playerState] !== _global_js__WEBPACK_IMPORTED_MODULE_1__.state.STOPPING &&
      _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[playerState] !== _global_js__WEBPACK_IMPORTED_MODULE_1__.state.STOPPED &&
      (error.message.match(/network|fetch|offline|Error in body stream/i) ||
        error.name === "HTTP Response Error")
    ) {
      this[_global_js__WEBPACK_IMPORTED_MODULE_1__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_1__.event.ERROR, error);
      this[playerState] = _global_js__WEBPACK_IMPORTED_MODULE_1__.state.RETRYING;
      this.addEventListener(_global_js__WEBPACK_IMPORTED_MODULE_1__.event.STREAM_START, _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[resetPlayback], {
        once: true,
      });

      if (_global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_1__.hasIcy]) {
        this[_global_js__WEBPACK_IMPORTED_MODULE_1__.fireEvent](
          _global_js__WEBPACK_IMPORTED_MODULE_1__.event.WARN,
          "This stream was requested with ICY metadata.",
          'If there is a CORS preflight failure, try removing "icy" from the metadataTypes option.',
          "See https://github.com/eshaz/icecast-metadata-js#cors for more details."
        );
      }

      const audioWaiting = new Promise((resolve) => {
        _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[onAudioWaiting] = resolve;
        _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_1__.audioElement].addEventListener(
          "waiting",
          _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[onAudioWaiting],
          {
            once: true,
          }
        );
      });

      // wait for whichever is longer, audio element waiting or retry timeout
      _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[retryTimeoutId] = setTimeout(() => {
        audioWaiting.then(() => {
          if (_global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[playerState] === _global_js__WEBPACK_IMPORTED_MODULE_1__.state.RETRYING) {
            this[_global_js__WEBPACK_IMPORTED_MODULE_1__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_1__.event.RETRY_TIMEOUT);
            this.stop();
          }
        });
      }, _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_1__.retryTimeout]);

      _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[retryAttempt] = 0;
      return true;
    }

    return false;
  }

  [_global_js__WEBPACK_IMPORTED_MODULE_1__.fireEvent](event, ...args) {
    this.dispatchEvent(new CustomEvent(event, { detail: args }));
    _global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[events][event](...args);
  }

  [_global_js__WEBPACK_IMPORTED_MODULE_1__.logError](consoleFunction, callback, messages) {
    if (_global_js__WEBPACK_IMPORTED_MODULE_1__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_1__.enableLogging]) {
      consoleFunction(
        "icecast-metadata-js",
        messages.reduce((acc, message) => acc + "\n  " + message, "")
      );
    }
    if (callback) callback(...messages);
  }
}


/***/ }),

/***/ "./node_modules/icecast-metadata-player/src/PlayerFactory.js":
/*!*******************************************************************!*\
  !*** ./node_modules/icecast-metadata-player/src/PlayerFactory.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlayerFactory)
/* harmony export */ });
/* harmony import */ var icecast_metadata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! icecast-metadata-js */ "./node_modules/icecast-metadata-js/browser.js");
/* harmony import */ var codec_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! codec-parser */ "./node_modules/codec-parser/index.js");
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global.js */ "./node_modules/icecast-metadata-player/src/global.js");
/* harmony import */ var _players_Player_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./players/Player.js */ "./node_modules/icecast-metadata-player/src/players/Player.js");
/* harmony import */ var _players_HTML5Player_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./players/HTML5Player.js */ "./node_modules/icecast-metadata-player/src/players/HTML5Player.js");
/* harmony import */ var _players_MediaSourcePlayer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./players/MediaSourcePlayer.js */ "./node_modules/icecast-metadata-player/src/players/MediaSourcePlayer.js");
/* harmony import */ var _players_WebAudioPlayer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./players/WebAudioPlayer.js */ "./node_modules/icecast-metadata-player/src/players/WebAudioPlayer.js");









class PlayerFactory {
  constructor(icecast, preferredPlaybackMethod) {
    const instanceVariables = _global_js__WEBPACK_IMPORTED_MODULE_2__.p.get(icecast);

    this._icecast = icecast;
    this._enableLogging = instanceVariables[_global_js__WEBPACK_IMPORTED_MODULE_2__.enableLogging];
    this._enableCodecUpdate = instanceVariables[_global_js__WEBPACK_IMPORTED_MODULE_2__.enableCodecUpdate];
    this._audioElement = instanceVariables[_global_js__WEBPACK_IMPORTED_MODULE_2__.audioElement];
    this._endpoint = instanceVariables[_global_js__WEBPACK_IMPORTED_MODULE_2__.endpoint];
    this._metadataTypes = instanceVariables[_global_js__WEBPACK_IMPORTED_MODULE_2__.metadataTypes];
    this._icyMetaInt = instanceVariables[_global_js__WEBPACK_IMPORTED_MODULE_2__.icyMetaInt];
    this._icyCharacterEncoding = instanceVariables[_global_js__WEBPACK_IMPORTED_MODULE_2__.icyCharacterEncoding];
    this._icyDetectionTimeout = instanceVariables[_global_js__WEBPACK_IMPORTED_MODULE_2__.icyDetectionTimeout];

    this._hasIcy = instanceVariables[_global_js__WEBPACK_IMPORTED_MODULE_2__.hasIcy];

    this._preferredPlaybackMethod = preferredPlaybackMethod || "mediasource";
    this._playbackMethod = "";
    this._player = new _players_Player_js__WEBPACK_IMPORTED_MODULE_3__["default"](this._icecast);
    this._unprocessedFrames = [];
    this._codecParser = undefined;
    this._inputMimeType = "";
    this._codec = "";
  }

  get player() {
    return this._player;
  }

  get playbackMethod() {
    return this._playbackMethod;
  }

  get icyMetaInt() {
    return (
      this._icecastReadableStream && this._icecastReadableStream.icyMetaInt
    );
  }

  async playStream() {
    return this.fetchStream().then(async (res) => {
      this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_2__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_2__.event.STREAM_START);

      return this.readIcecastResponse(res).finally(() => {
        this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_2__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_2__.event.STREAM_END);
      });
    });
  }

  async fetchStream() {
    const res = await fetch(this._endpoint, {
      method: "GET",
      headers: this._hasIcy ? { "Icy-MetaData": 1 } : {},
      signal: _global_js__WEBPACK_IMPORTED_MODULE_2__.p.get(this._icecast)[_global_js__WEBPACK_IMPORTED_MODULE_2__.abortController].signal,
    });

    if (!res.ok) {
      const error = new Error(`${res.status} received from ${res.url}`);
      error.name = "HTTP Response Error";
      throw error;
    }

    return res;
  }

  async readIcecastResponse(res) {
    const inputMimeType = res.headers.get("content-type");

    const codecPromise = new Promise((onCodec) => {
      this._codecParser = new codec_parser__WEBPACK_IMPORTED_MODULE_1__["default"](inputMimeType, {
        onCodecUpdate:
          this._enableCodecUpdate &&
          ((...args) => this._player.onCodecUpdate(...args)),
        onCodec,
        enableLogging: this._enableLogging,
      });
    });

    this._icecastReadableStream = new icecast_metadata_js__WEBPACK_IMPORTED_MODULE_0__.IcecastReadableStream(res, {
      onMetadata: async (metadata) => {
        this._player.onMetadata(metadata);
      },
      onStream: async ({ stream }) => {
        this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_2__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_2__.event.STREAM, stream);

        const frames = [...this._codecParser.parseChunk(stream)];

        if (this._player.isAudioPlayer) {
          await this._player.onStream([...this._unprocessedFrames, ...frames]);

          this._unprocessedFrames = [];
        } else {
          this._unprocessedFrames.push(...frames);
        }
      },
      onError: (...args) => this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_2__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_2__.event.WARN, ...args),
      metadataTypes: this._metadataTypes,
      icyCharacterEncoding: this._icyCharacterEncoding,
      icyDetectionTimeout: this._icyDetectionTimeout,
      ...(this._icyMetaInt && { icyMetaInt: this._icyMetaInt }),
    });

    const icecastPromise = this._icecastReadableStream.startReading();

    if (!this._player.isAudioPlayer) {
      this._buildPlayer(inputMimeType, await codecPromise);
    }

    await icecastPromise;
  }

  _buildPlayer(inputMimeType, codec) {
    // in order of preference
    const { [this._preferredPlaybackMethod]: firstMethod, ...rest } = {
      mediasource: _players_MediaSourcePlayer_js__WEBPACK_IMPORTED_MODULE_5__["default"],
      webaudio: _players_WebAudioPlayer_js__WEBPACK_IMPORTED_MODULE_6__["default"],
      html5: _players_HTML5Player_js__WEBPACK_IMPORTED_MODULE_4__["default"],
    };

    for (const player of Object.values({ firstMethod, ...rest })) {
      const support = player.canPlayType(`${inputMimeType};codecs="${codec}"`);

      if (support === "probably" || support === "maybe") {
        this._playbackMethod = player.name;
        this._player = new player(this._icecast, inputMimeType, codec);
        break;
      }
    }

    if (!this._player) {
      throw new Error(
        `Your browser does not support this audio codec ${inputMimeType}${
          codec && `;codecs="${codec}"`
        }`
      );
    }
  }
}


/***/ }),

/***/ "./node_modules/icecast-metadata-player/src/global.js":
/*!************************************************************!*\
  !*** ./node_modules/icecast-metadata-player/src/global.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noOp": () => (/* binding */ noOp),
/* harmony export */   "p": () => (/* binding */ p),
/* harmony export */   "state": () => (/* binding */ state),
/* harmony export */   "event": () => (/* binding */ event),
/* harmony export */   "endpoint": () => (/* binding */ endpoint),
/* harmony export */   "metadataTypes": () => (/* binding */ metadataTypes),
/* harmony export */   "audioElement": () => (/* binding */ audioElement),
/* harmony export */   "bufferLength": () => (/* binding */ bufferLength),
/* harmony export */   "icyMetaInt": () => (/* binding */ icyMetaInt),
/* harmony export */   "icyCharacterEncoding": () => (/* binding */ icyCharacterEncoding),
/* harmony export */   "icyDetectionTimeout": () => (/* binding */ icyDetectionTimeout),
/* harmony export */   "enableLogging": () => (/* binding */ enableLogging),
/* harmony export */   "retryDelayRate": () => (/* binding */ retryDelayRate),
/* harmony export */   "retryDelayMin": () => (/* binding */ retryDelayMin),
/* harmony export */   "retryDelayMax": () => (/* binding */ retryDelayMax),
/* harmony export */   "retryTimeout": () => (/* binding */ retryTimeout),
/* harmony export */   "enableCodecUpdate": () => (/* binding */ enableCodecUpdate),
/* harmony export */   "fireEvent": () => (/* binding */ fireEvent),
/* harmony export */   "attachAudioElement": () => (/* binding */ attachAudioElement),
/* harmony export */   "shouldRetry": () => (/* binding */ shouldRetry),
/* harmony export */   "logError": () => (/* binding */ logError),
/* harmony export */   "hasIcy": () => (/* binding */ hasIcy),
/* harmony export */   "icecastMetadataQueue": () => (/* binding */ icecastMetadataQueue),
/* harmony export */   "codecUpdateQueue": () => (/* binding */ codecUpdateQueue),
/* harmony export */   "abortController": () => (/* binding */ abortController),
/* harmony export */   "SYNCED": () => (/* binding */ SYNCED),
/* harmony export */   "SYNCING": () => (/* binding */ SYNCING),
/* harmony export */   "NOT_SYNCED": () => (/* binding */ NOT_SYNCED),
/* harmony export */   "concatBuffers": () => (/* binding */ concatBuffers)
/* harmony export */ });
const noOp = () => {};
const p = new WeakMap();

const state = {
  LOADING: "loading",
  PLAYING: "playing",
  STOPPING: "stopping",
  STOPPED: "stopped",
  RETRYING: "retrying",
};

const event = {
  BUFFER: "buffer",
  PLAY: "play",
  LOAD: "load",
  STREAM_START: "streamstart",
  STREAM: "stream",
  STREAM_END: "streamend",
  METADATA: "metadata",
  METADATA_ENQUEUE: "metadataenqueue",
  CODEC_UPDATE: "codecupdate",
  STOP: "stop",
  RETRY: "retry",
  RETRY_TIMEOUT: "retrytimeout",
  WARN: "warn",
  ERROR: "error",
};

// options
const endpoint = Symbol();
const metadataTypes = Symbol();
const audioElement = Symbol();
const bufferLength = Symbol();
const icyMetaInt = Symbol();
const icyCharacterEncoding = Symbol();
const icyDetectionTimeout = Symbol();
const enableLogging = Symbol();
const retryDelayRate = Symbol();
const retryDelayMin = Symbol();
const retryDelayMax = Symbol();
const retryTimeout = Symbol();
const enableCodecUpdate = Symbol();

// methods
const fireEvent = Symbol();
const attachAudioElement = Symbol();
const shouldRetry = Symbol();
const logError = Symbol();

// variables
const hasIcy = Symbol();
const icecastMetadataQueue = Symbol();
const codecUpdateQueue = Symbol();
const abortController = Symbol();

// sync state
const SYNCED = Symbol();
const SYNCING = Symbol();
const NOT_SYNCED = Symbol();

const concatBuffers = (buffers) => {
  const buffer = new Uint8Array(
    buffers.reduce((acc, buf) => acc + buf.length, 0)
  );

  buffers.reduce((offset, buf) => {
    buffer.set(buf, offset);
    return offset + buf.length;
  }, 0);

  return buffer;
};


/***/ }),

/***/ "./node_modules/icecast-metadata-player/src/players/HTML5Player.js":
/*!*************************************************************************!*\
  !*** ./node_modules/icecast-metadata-player/src/players/HTML5Player.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HTML5Player)
/* harmony export */ });
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global.js */ "./node_modules/icecast-metadata-player/src/global.js");
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player.js */ "./node_modules/icecast-metadata-player/src/players/Player.js");



class HTML5Player extends _Player_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(icecast) {
    super(icecast);

    this._audioElement.crossOrigin = "anonymous";
    this._audioElement.loop = false;
    this._audioElement.preload = "none";

    this.reset();
  }

  static canPlayType(mimeType) {
    return super.canPlayType((type) => new Audio().canPlayType(type), mimeType);
  }

  static get name() {
    return "html5";
  }

  get isAudioPlayer() {
    return true;
  }

  get metadataTimestamp() {
    return this._frame
      ? (this._frame.totalDuration + this._metadataTimestampOffset) / 1000
      : 0;
  }

  get currentTime() {
    return (
      this._audioLoadedTimestamp &&
      (performance.now() - this._audioLoadedTimestamp) / 1000
    );
  }

  async reset() {
    this._frame = null;
    this._metadataLoadedTimestamp = performance.now();
    this._audioLoadedTimestamp = 0;
    this._metadataTimestampOffset = 0;
    this._firedPlay = false;

    this._audioElement.removeAttribute("src");
    this._audioElement.src = this._endpoint;

    if (
      this._icecast.state !== _global_js__WEBPACK_IMPORTED_MODULE_0__.state.STOPPING &&
      this._icecast.state !== _global_js__WEBPACK_IMPORTED_MODULE_0__.state.STOPPED
    ) {
      this._audioElement.addEventListener(
        "playing",
        () => {
          this._audioLoadedTimestamp = performance.now();
          this._metadataTimestampOffset =
            performance.now() - this._metadataLoadedTimestamp;
        },
        { once: true }
      );

      if (!this._firedPlay) {
        this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_0__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_0__.event.PLAY);
        this._firedPlay = true;
      }
    }
  }

  onStream(frames) {
    this._frame = frames[frames.length - 1] || this._frame;
  }
}


/***/ }),

/***/ "./node_modules/icecast-metadata-player/src/players/MediaSourcePlayer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/icecast-metadata-player/src/players/MediaSourcePlayer.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MediaSourcePlayer)
/* harmony export */ });
/* harmony import */ var mse_audio_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mse-audio-wrapper */ "./node_modules/mse-audio-wrapper/src/MSEAudioWrapper.js");
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global.js */ "./node_modules/icecast-metadata-player/src/global.js");
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player.js */ "./node_modules/icecast-metadata-player/src/players/Player.js");
/* harmony import */ var _FrameQueue_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FrameQueue.js */ "./node_modules/icecast-metadata-player/src/FrameQueue.js");






const BUFFER = 5; // seconds of audio to store in SourceBuffer
const BUFFER_INTERVAL = 5; // seconds before removing from SourceBuffer

class MediaSourcePlayer extends _Player_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(icecast, inputMimeType, codec) {
    super(icecast, inputMimeType, codec);

    this.reset();

    this._icecast.addEventListener(_global_js__WEBPACK_IMPORTED_MODULE_1__.event.RETRY, () => {
      this._syncState = _global_js__WEBPACK_IMPORTED_MODULE_1__.NOT_SYNCED;
    });
  }

  static canPlayType(mimeType) {
    const mapping = {
      mpeg: ['audio/mp4;codecs="mp3"'],
      aac: ['audio/mp4;codecs="mp4a.40.2"'],
      aacp: ['audio/mp4;codecs="mp4a.40.2"'],
      flac: ['audio/mp4;codecs="flac"'],
      ogg: {
        flac: ['audio/mp4;codecs="flac"'],
        opus: ['audio/mp4;codecs="opus"', 'audio/webm;codecs="opus"'],
        vorbis: ['audio/webm;codecs="vorbis"'],
      },
    };

    try {
      new MediaSource();
    } catch {
      return "";
    }
    if (MediaSource.isTypeSupported(mimeType)) return "probably";

    return super.canPlayType(MediaSource.isTypeSupported, mimeType, mapping);
  }

  static get name() {
    return "mediasource";
  }

  get isAudioPlayer() {
    return true;
  }

  get metadataTimestamp() {
    return (
      (this._mediaSource &&
        this._mediaSource.sourceBuffers.length &&
        Math.max(
          // work-around for WEBM reporting a negative timestampOffset
          this._mediaSource.sourceBuffers[0].timestampOffset,
          this._mediaSource.sourceBuffers[0].buffered.length
            ? this._mediaSource.sourceBuffers[0].buffered.end(0)
            : 0
        )) ||
      0
    );
  }

  get currentTime() {
    return this._audioElement.currentTime;
  }

  async reset() {
    this._syncState = _global_js__WEBPACK_IMPORTED_MODULE_1__.SYNCED;
    this._frameQueue = new _FrameQueue_js__WEBPACK_IMPORTED_MODULE_3__["default"](this._icecast);
    this._sourceBufferQueue = [];
    this._firedPlay = false;

    this._mediaSourcePromise = this._prepareMediaSource(
      this._inputMimeType,
      this._codec
    );

    await this._mediaSourcePromise;
  }

  async onStream(frames) {
    frames = frames.flatMap((frame) => frame.codecFrames || frame);

    if (frames.length) {
      switch (this._syncState) {
        case _global_js__WEBPACK_IMPORTED_MODULE_1__.NOT_SYNCED:
          this._frameQueue.initSync();
          this._syncState = _global_js__WEBPACK_IMPORTED_MODULE_1__.SYNCING;
        case _global_js__WEBPACK_IMPORTED_MODULE_1__.SYNCING:
          [frames] = this._frameQueue.sync(frames);
          if (frames.length) this._syncState = _global_js__WEBPACK_IMPORTED_MODULE_1__.SYNCED;
      }

      this._frameQueue.addAll(frames);

      // when frames are present, we should already know the codec and have the mse audio mimetype determined
      await (
        await this._mediaSourcePromise
      )(frames); // wait for the source buffer to be created
    }
  }

  async _prepareMediaSource(inputMimeType, codec) {
    if (MediaSource.isTypeSupported(inputMimeType)) {
      // pass the audio directly to MSE

      await this._createMediaSource(inputMimeType);

      return async (frames) =>
        this._appendSourceBuffer((0,_global_js__WEBPACK_IMPORTED_MODULE_1__.concatBuffers)(frames.map((f) => f.data)));
    } else {
      // wrap the audio into fragments before passing to MSE
      const wrapper = new mse_audio_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"](inputMimeType, {
        codec,
      });

      if (!MediaSource.isTypeSupported(wrapper.mimeType)) {
        this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_1__.fireEvent](
          _global_js__WEBPACK_IMPORTED_MODULE_1__.event.ERROR,
          `Media Source Extensions API in your browser does not support ${inputMimeType} or ${wrapper.mimeType}`,
          "See: https://caniuse.com/mediasource and https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API"
        );
        throw new Error(`Unsupported Media Source Codec ${wrapper.mimeType}`);
      }

      await this._createMediaSource(wrapper.mimeType);

      return async (codecFrames) => {
        const fragments = (0,_global_js__WEBPACK_IMPORTED_MODULE_1__.concatBuffers)([...wrapper.iterator(codecFrames)]);

        await this._appendSourceBuffer(fragments);
      };
    }
  }

  async _createMediaSource(mimeType) {
    await new Promise(async (resolve) => {
      this._mediaSource = new MediaSource();
      this._audioElement.loop = false;
      this._audioElement.src = URL.createObjectURL(this._mediaSource);

      this._mediaSource.addEventListener("sourceopen", resolve, {
        once: true,
      });
    });

    this._sourceBufferRemoved = 0;
    this._mediaSource.addSourceBuffer(mimeType).mode = "sequence";
  }

  async _waitForSourceBuffer() {
    return new Promise((resolve) => {
      this._mediaSource.sourceBuffers[0].addEventListener(
        "updateend",
        resolve,
        {
          once: true,
        }
      );
    });
  }

  async _appendSourceBuffer(chunk) {
    this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_1__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_1__.event.STREAM, chunk);

    if (!this._mediaSource.sourceBuffers.length) {
      this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_1__.fireEvent](
        _global_js__WEBPACK_IMPORTED_MODULE_1__.event.WARN,
        "Attempting to append audio, but MediaSource has not been or is no longer initialized",
        "Please be sure that `detachAudioElement()` was called and awaited before reusing the element with a new IcecastMetadataPlayer instance"
      );
    }

    if (
      this._icecast.state !== _global_js__WEBPACK_IMPORTED_MODULE_1__.state.STOPPING &&
      this._mediaSource.sourceBuffers.length
    ) {
      this._sourceBufferQueue.push(chunk);

      try {
        do {
          this._mediaSource.sourceBuffers[0].appendBuffer(
            this._sourceBufferQueue[0]
          );
          await this._waitForSourceBuffer();
          this._sourceBufferQueue.shift();
        } while (this._sourceBufferQueue.length);
      } catch (e) {
        if (e.name !== "QuotaExceededError") throw e;
      }

      if (!this._firedPlay) {
        if (this._bufferLength <= this.metadataTimestamp) {
          this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_1__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_1__.event.PLAY);
          this._firedPlay = true;
        } else {
          this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_1__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_1__.event.BUFFER, this.metadataTimestamp);
        }
      }

      if (
        this._audioElement.currentTime > BUFFER + this._bufferLength &&
        this._sourceBufferRemoved + BUFFER_INTERVAL * 1000 < Date.now()
      ) {
        this._sourceBufferRemoved = Date.now();
        this._mediaSource.sourceBuffers[0].remove(
          0,
          this._audioElement.currentTime - BUFFER + this._bufferLength
        );
        await this._waitForSourceBuffer();
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/icecast-metadata-player/src/players/Player.js":
/*!********************************************************************!*\
  !*** ./node_modules/icecast-metadata-player/src/players/Player.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global.js */ "./node_modules/icecast-metadata-player/src/global.js");


class Player {
  constructor(icecast, inputMimeType, codec) {
    const instanceVariables = _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(icecast);

    this._icecast = icecast;
    this._inputMimeType = inputMimeType;
    this._codec = codec;

    this._audioElement = instanceVariables[_global_js__WEBPACK_IMPORTED_MODULE_0__.audioElement];
    this._icecastMetadataQueue = instanceVariables[_global_js__WEBPACK_IMPORTED_MODULE_0__.icecastMetadataQueue];
    this._codecUpdateQueue = instanceVariables[_global_js__WEBPACK_IMPORTED_MODULE_0__.codecUpdateQueue];
    this._endpoint = instanceVariables[_global_js__WEBPACK_IMPORTED_MODULE_0__.endpoint];
    this._bufferLength = instanceVariables[_global_js__WEBPACK_IMPORTED_MODULE_0__.bufferLength];

    this._codecUpdateTimestamp = 0;
    this._codecUpdateOffset = 0;

    // set the audio element an empty source to enable the play button
    try {
      this._audioElement.removeAttribute("src");
      this._audioElement.srcObject = null;

      if (window.MediaSource) {
        // MediaSourcePlayer
        this._audioElement.src = URL.createObjectURL(new MediaSource());
      } else {
        // WebAudioPlayer
        this._mediaStream = new MediaStream();
        this._audioElement.srcObject = this._mediaStream;
      }
    } catch {
      // HTML5Player
      // mp3 32kbs silence
      this._audioElement.src =
        "data:audio/mpeg;base64,//sQxAAABFgC/SCEYACCgB9AAAAAppppVCAHBAEIgBByw9WD5+J8ufwxiDED" +
        "sMfE+D4fwG/RUGCx6VO4awVxV3qDtQNPiXKnZUNSwKuUDR6IgaeoGg7Fg6pMQU1FMy4xMDCqqqqqqqr/+xL" +
        "EB4PAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq" +
        "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo=";

      this._audioElement.loop = true;
    }
  }

  static parseMimeType(mimeType) {
    return mimeType.match(
      /^(?:application\/|audio\/|)(?<mime>[a-zA-Z]+)(?:$|;[ ]*codecs=(?:\'|\")(?<codecs>[a-zA-Z,]+)(?:\'|\"))/
    );
  }

  static canPlayType(codecChecker, mimeType, mapping) {
    const matches = Player.parseMimeType(mimeType);

    const checkCodecs = (codecs) =>
      codecs.reduce((acc, codec) => {
        if (acc === "") return "";

        const result = codecChecker(codec);

        if (!result) return "";
        if (result === "maybe" || acc === "maybe") return "maybe";
        if (result === true || result === "probably") return "probably";
      }, null);

    if (matches) {
      const { mime, codecs } = matches.groups;

      const mimeMapping = mapping && mapping[mime];

      // mapping is a raw codec
      if (!mimeMapping || Array.isArray(mimeMapping)) {
        return (
          checkCodecs(mimeMapping || [mimeType]) || // check with the codec
          checkCodecs([`audio/${mime}`]) // check as a raw mimetype
        );
      }

      // mapping ia a container
      if (typeof mimeMapping === "object") {
        if (codecs) {
          const mimeCodecs = codecs.split(",");

          // multiple codecs are not supported
          if (mimeCodecs.length > 1) return "";
          if (!mimeMapping[mimeCodecs[0]]) return "";

          return checkCodecs(mimeMapping[mimeCodecs[0]]);
        }
        // container exists in list but no codecs were specified
        return "maybe";
      }
    }

    // codec not in the list
    return "";
  }

  /**
   * @abstract
   */
  get isAudioPlayer() {
    return false;
  }

  /**
   * @interface
   */
  get metadataTimestamp() {
    return 0;
  }

  /**
   * @interface
   */
  get currentTime() {
    return 0;
  }

  /**
   * @interface
   */
  async reset() {}

  /**
   * @abstract
   */
  onStream(frames) {
    return frames;
  }

  /**
   * @abstract
   */
  onMetadata(metadata) {
    this._icecastMetadataQueue.addMetadata(
      metadata,
      this.metadataTimestamp,
      this.currentTime
    );
  }

  /**
   * @abstract
   */
  onCodecUpdate(codecData, updateTimestamp) {
    const currentTime = this.currentTime;

    // add previous offset when reconnecting
    if (updateTimestamp < currentTime)
      this._codecUpdateOffset += this._codecUpdateTimestamp;

    this._codecUpdateTimestamp = updateTimestamp;

    this._codecUpdateQueue.addMetadata(
      { metadata: codecData, stats: {} },
      (updateTimestamp + this._codecUpdateOffset) / 1000,
      currentTime
    );
  }
}


/***/ }),

/***/ "./node_modules/icecast-metadata-player/src/players/WebAudioPlayer.js":
/*!****************************************************************************!*\
  !*** ./node_modules/icecast-metadata-player/src/players/WebAudioPlayer.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WebAudioPlayer)
/* harmony export */ });
/* harmony import */ var opus_decoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! opus-decoder */ "./node_modules/opus-decoder/index.js");
/* harmony import */ var mpg123_decoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mpg123-decoder */ "./node_modules/mpg123-decoder/index.js");
/* harmony import */ var _FrameQueue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FrameQueue.js */ "./node_modules/icecast-metadata-player/src/FrameQueue.js");
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global.js */ "./node_modules/icecast-metadata-player/src/global.js");
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Player.js */ "./node_modules/icecast-metadata-player/src/players/Player.js");







class WebAudioPlayer extends _Player_js__WEBPACK_IMPORTED_MODULE_4__["default"] {
  constructor(icecast, inputMimeType, codec) {
    super(icecast, inputMimeType, codec);

    this._icecast.addEventListener(_global_js__WEBPACK_IMPORTED_MODULE_3__.event.RETRY, () => {
      this._syncState = _global_js__WEBPACK_IMPORTED_MODULE_3__.NOT_SYNCED;
    });
    this._icecast.addEventListener(_global_js__WEBPACK_IMPORTED_MODULE_3__.event.STREAM_START, () => {
      if (!this._wasmDecoder) this._getWasmDecoder();
    });

    this._getWasmDecoder();

    // set up audio context once
    // audio context needs to be reused for the life of this instance for safari compatibility
    this._getAudioContext();

    this.reset();
  }

  static canPlayType(mimeType) {
    const mapping = {
      mpeg: ["audio/mpeg"],
      ogg: {
        opus: ['audio/ogg;codecs="opus"'],
      },
    };

    if (!window.WebAssembly) return "";
    if (!(window.AudioContext || window.webkitAudioContext)) return "";
    if (!window.MediaStream) return "";

    return super.canPlayType(
      (codec) => codec === 'audio/ogg;codecs="opus"' || codec === "audio/mpeg",
      mimeType,
      mapping
    );
  }

  static get name() {
    return "webaudio";
  }

  get isAudioPlayer() {
    return true;
  }

  get metadataTimestamp() {
    return this._currentTime / 1000;
  }

  get currentTime() {
    return (Date.now() - this._startTime) / 1000 || 0;
  }

  _getWasmDecoder() {
    switch (this._codec) {
      case "mpeg":
        this._wasmDecoder = new mpg123_decoder__WEBPACK_IMPORTED_MODULE_1__.MPEGDecoderWebWorker();
        break;
      case "opus":
        this._wasmDecoder = new opus_decoder__WEBPACK_IMPORTED_MODULE_0__.OpusDecoderWebWorker();
        break;
    }

    this._wasmReady = this._wasmDecoder.ready;
  }

  _getAudioContext() {
    const audioContextParams = {
      latencyHint: "playback",
    };

    this._audioContext = window.AudioContext
      ? new AudioContext(audioContextParams)
      : new window.webkitAudioContext(audioContextParams);

    // hack for iOS to continue playing while locked
    this._audioContext
      .createScriptProcessor(2 ** 14, 2, 2)
      .connect(this._audioContext.destination);

    this._audioContext.resume();
    this._audioContext.onstatechange = () => {
      if (this._audioContext !== "running") this._audioContext.resume();
    };
  }

  async reset() {
    this._syncState = _global_js__WEBPACK_IMPORTED_MODULE_3__.SYNCED;
    this._syncSuccessful = false;
    this._frameQueue = new _FrameQueue_js__WEBPACK_IMPORTED_MODULE_2__["default"](this._icecast);

    this._currentTime = 0;
    this._decodedSample = 0;
    this._decodedSampleOffset = 0;
    this._sampleRate = 0;
    this._startTime = undefined;
    this._firedPlay = false;

    if (
      this._icecast.state === _global_js__WEBPACK_IMPORTED_MODULE_3__.state.STOPPING ||
      this._icecast.state === _global_js__WEBPACK_IMPORTED_MODULE_3__.state.STOPPED
    ) {
      if (this._wasmDecoder) {
        const decoder = this._wasmDecoder;
        this._wasmReady.then(() => {
          decoder.free();
        });
        this._wasmDecoder = null;
      }

      if (this._mediaStream) {
        // disconnect the currently playing media stream
        this._mediaStream.disconnect();
        this._mediaStream = null;
      }

      this._audioElement.srcObject = new MediaStream();
    }
  }

  async onStream(oggPages) {
    let frames = oggPages.flatMap((oggPage) => oggPage.codecFrames || oggPage);

    switch (this._syncState) {
      case _global_js__WEBPACK_IMPORTED_MODULE_3__.NOT_SYNCED:
        this._frameQueue.initSync();
        this._syncState = _global_js__WEBPACK_IMPORTED_MODULE_3__.SYNCING;
      case _global_js__WEBPACK_IMPORTED_MODULE_3__.SYNCING:
        [frames, this._syncSuccessful] = this._frameQueue.sync(frames);

        if (frames.length) {
          this._syncState = _global_js__WEBPACK_IMPORTED_MODULE_3__.SYNCED;

          if (!this._syncSuccessful) await this.reset();
        }
      case _global_js__WEBPACK_IMPORTED_MODULE_3__.SYNCED:
        if (frames.length) {
          this._currentTime = frames[frames.length - 1].totalDuration;

          await this._wasmReady;
          this._decodeAndPlay(frames);
        }
      default:
        this._frameQueue.addAll(frames); // always add frames
    }
  }

  async _decodeAndPlay(frames) {
    const { channelData, samplesDecoded, sampleRate } =
      await this._wasmDecoder.decodeFrames(frames.map((f) => f.data));

    if (
      this._icecast.state !== _global_js__WEBPACK_IMPORTED_MODULE_3__.state.STOPPING &&
      this._icecast.state !== _global_js__WEBPACK_IMPORTED_MODULE_3__.state.STOPPED &&
      samplesDecoded
    ) {
      this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_3__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_3__.event.STREAM, {
        channelData,
        samplesDecoded,
        sampleRate,
      });

      if (!this._sampleRate) {
        this._sampleRate = sampleRate;

        this._mediaStream = this._audioContext.createMediaStreamDestination();
        this._audioElement.srcObject = this._mediaStream.stream; // triggers canplay event
      }

      const decodeDuration =
        (this._decodedSample + this._decodedSampleOffset) / this._sampleRate;

      if (decodeDuration < this._audioContext.currentTime) {
        // audio context time starts incrementing immediately when it's created
        // offset needs to be accounted for to prevent overlapping sources
        this._decodedSampleOffset += Math.floor(
          this._audioContext.currentTime * this._sampleRate
        );
      }

      const audioBuffer = this._audioContext.createBuffer(
        channelData.length,
        samplesDecoded,
        this._sampleRate
      );

      channelData.forEach((channel, idx) =>
        audioBuffer.getChannelData(idx).set(channel)
      );

      const source = this._audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(this._mediaStream);
      source.start(decodeDuration);

      if (!this._firedPlay) {
        if (this._bufferLength <= this.metadataTimestamp) {
          this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_3__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_3__.event.PLAY);
          this._startTime = Date.now();
          this._firedPlay = true;
        } else {
          this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_3__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_3__.event.BUFFER, this.metadataTimestamp);
        }
      }

      this._decodedSample += samplesDecoded;
    }
  }
}


/***/ }),

/***/ "./node_modules/mpg123-decoder/index.js":
/*!**********************************************!*\
  !*** ./node_modules/mpg123-decoder/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MPEGDecoder": () => (/* reexport safe */ _src_MPEGDecoder_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "MPEGDecoderWebWorker": () => (/* reexport safe */ _src_MPEGDecoderWebWorker_js__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _src_MPEGDecoder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/MPEGDecoder.js */ "./node_modules/mpg123-decoder/src/MPEGDecoder.js");
/* harmony import */ var _src_MPEGDecoderWebWorker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/MPEGDecoderWebWorker.js */ "./node_modules/mpg123-decoder/src/MPEGDecoderWebWorker.js");






/***/ }),

/***/ "./node_modules/mpg123-decoder/src/EmscriptenWasm.js":
/*!***********************************************************!*\
  !*** ./node_modules/mpg123-decoder/src/EmscriptenWasm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmscriptenWASM)
/* harmony export */ });
/* **************************************************
 * This file is auto-generated during the build process.
 * Any edits to this file will be overwritten.
 ****************************************************/

class EmscriptenWASM {
constructor() {
var TINF_OK = 0;
var TINF_DATA_ERROR = -3;

const uint8Array = Uint8Array;
const uint16Array = Uint16Array;

function Tree() {
  this.t = new uint16Array(16); /* table of code length counts */
  this.trans = new uint16Array(288); /* code -> symbol translation table */
}

function Data(source, dest) {
  this.s = source;
  this.i = 0;
  this.t = 0;
  this.bitcount = 0;

  this.dest = dest;
  this.destLen = 0;

  this.ltree = new Tree(); /* dynamic length/symbol tree */
  this.dtree = new Tree(); /* dynamic distance tree */
}

/* --------------------------------------------------- *
 * -- uninitialized global data (static structures) -- *
 * --------------------------------------------------- */

var sltree = new Tree();
var sdtree = new Tree();

/* extra bits and base tables for length codes */
var length_bits = new uint8Array(30);
var length_base = new uint16Array(30);

/* extra bits and base tables for distance codes */
var dist_bits = new uint8Array(30);
var dist_base = new uint16Array(30);

/* special ordering of code length codes */
var clcidx = new uint8Array([
  16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
]);

/* used by tinf_decode_trees, avoids allocations every call */
var code_tree = new Tree();
var lengths = new uint8Array(288 + 32);

/* ----------------------- *
 * -- utility functions -- *
 * ----------------------- */

/* build extra bits and base tables */
const tinf_build_bits_base = (bits, base, delta, first) => {
  var i, sum;

  /* build bits table */
  for (i = 0; i < delta; ++i) bits[i] = 0;
  for (i = 0; i < 30 - delta; ++i) bits[i + delta] = (i / delta) | 0;

  /* build base table */
  for (sum = first, i = 0; i < 30; ++i) {
    base[i] = sum;
    sum += 1 << bits[i];
  }
};

/* build the fixed huffman trees */
const tinf_build_fixed_trees = (lt, dt) => {
  var i;

  /* build fixed length tree */
  for (i = 0; i < 7; ++i) lt.t[i] = 0;

  lt.t[7] = 24;
  lt.t[8] = 152;
  lt.t[9] = 112;

  for (i = 0; i < 24; ++i) lt.trans[i] = 256 + i;
  for (i = 0; i < 144; ++i) lt.trans[24 + i] = i;
  for (i = 0; i < 8; ++i) lt.trans[24 + 144 + i] = 280 + i;
  for (i = 0; i < 112; ++i) lt.trans[24 + 144 + 8 + i] = 144 + i;

  /* build fixed distance tree */
  for (i = 0; i < 5; ++i) dt.t[i] = 0;

  dt.t[5] = 32;

  for (i = 0; i < 32; ++i) dt.trans[i] = i;
};

/* given an array of code lengths, build a tree */
var offs = new uint16Array(16);

const tinf_build_tree = (t, lengths, off, num) => {
  var i, sum;

  /* clear code length count table */
  for (i = 0; i < 16; ++i) t.t[i] = 0;

  /* scan symbol lengths, and sum code length counts */
  for (i = 0; i < num; ++i) t.t[lengths[off + i]]++;

  t.t[0] = 0;

  /* compute offset table for distribution sort */
  for (sum = 0, i = 0; i < 16; ++i) {
    offs[i] = sum;
    sum += t.t[i];
  }

  /* create code->symbol translation table (symbols sorted by code) */
  for (i = 0; i < num; ++i) {
    if (lengths[off + i]) t.trans[offs[lengths[off + i]]++] = i;
  }
};

/* ---------------------- *
 * -- decode functions -- *
 * ---------------------- */

/* get one bit from source stream */
const tinf_getbit = (d) => {
  /* check if tag is empty */
  if (!d.bitcount--) {
    /* load next tag */
    d.t = d.s[d.i++];
    d.bitcount = 7;
  }

  /* shift bit out of tag */
  var bit = d.t & 1;
  d.t >>>= 1;

  return bit;
};

/* read a num bit value from a stream and add base */
const tinf_read_bits = (d, num, base) => {
  if (!num) return base;

  while (d.bitcount < 24) {
    d.t |= d.s[d.i++] << d.bitcount;
    d.bitcount += 8;
  }

  var val = d.t & (0xffff >>> (16 - num));
  d.t >>>= num;
  d.bitcount -= num;
  return val + base;
};

/* given a data stream and a tree, decode a symbol */
const tinf_decode_symbol = (d, t) => {
  while (d.bitcount < 24) {
    d.t |= d.s[d.i++] << d.bitcount;
    d.bitcount += 8;
  }

  var sum = 0,
    cur = 0,
    len = 0;
  var tag = d.t;

  /* get more bits while code value is above sum */
  do {
    cur = 2 * cur + (tag & 1);
    tag >>>= 1;
    ++len;

    sum += t.t[len];
    cur -= t.t[len];
  } while (cur >= 0);

  d.t = tag;
  d.bitcount -= len;

  return t.trans[sum + cur];
};

/* given a data stream, decode dynamic trees from it */
const tinf_decode_trees = (d, lt, dt) => {
  var hlit, hdist, hclen;
  var i, num, length;

  /* get 5 bits HLIT (257-286) */
  hlit = tinf_read_bits(d, 5, 257);

  /* get 5 bits HDIST (1-32) */
  hdist = tinf_read_bits(d, 5, 1);

  /* get 4 bits HCLEN (4-19) */
  hclen = tinf_read_bits(d, 4, 4);

  for (i = 0; i < 19; ++i) lengths[i] = 0;

  /* read code lengths for code length alphabet */
  for (i = 0; i < hclen; ++i) {
    /* get 3 bits code length (0-7) */
    var clen = tinf_read_bits(d, 3, 0);
    lengths[clcidx[i]] = clen;
  }

  /* build code length tree */
  tinf_build_tree(code_tree, lengths, 0, 19);

  /* decode code lengths for the dynamic trees */
  for (num = 0; num < hlit + hdist; ) {
    var sym = tinf_decode_symbol(d, code_tree);

    switch (sym) {
      case 16:
        /* copy previous code length 3-6 times (read 2 bits) */
        var prev = lengths[num - 1];
        for (length = tinf_read_bits(d, 2, 3); length; --length) {
          lengths[num++] = prev;
        }
        break;
      case 17:
        /* repeat code length 0 for 3-10 times (read 3 bits) */
        for (length = tinf_read_bits(d, 3, 3); length; --length) {
          lengths[num++] = 0;
        }
        break;
      case 18:
        /* repeat code length 0 for 11-138 times (read 7 bits) */
        for (length = tinf_read_bits(d, 7, 11); length; --length) {
          lengths[num++] = 0;
        }
        break;
      default:
        /* values 0-15 represent the actual code lengths */
        lengths[num++] = sym;
        break;
    }
  }

  /* build dynamic trees */
  tinf_build_tree(lt, lengths, 0, hlit);
  tinf_build_tree(dt, lengths, hlit, hdist);
};

/* ----------------------------- *
 * -- block inflate functions -- *
 * ----------------------------- */

/* given a stream and two trees, inflate a block of data */
const tinf_inflate_block_data = (d, lt, dt) => {
  while (1) {
    var sym = tinf_decode_symbol(d, lt);

    /* check for end of block */
    if (sym === 256) {
      return TINF_OK;
    }

    if (sym < 256) {
      d.dest[d.destLen++] = sym;
    } else {
      var length, dist, offs;
      var i;

      sym -= 257;

      /* possibly get more bits from length code */
      length = tinf_read_bits(d, length_bits[sym], length_base[sym]);

      dist = tinf_decode_symbol(d, dt);

      /* possibly get more bits from distance code */
      offs = d.destLen - tinf_read_bits(d, dist_bits[dist], dist_base[dist]);

      /* copy match */
      for (i = offs; i < offs + length; ++i) {
        d.dest[d.destLen++] = d.dest[i];
      }
    }
  }
};

/* inflate an uncompressed block of data */
const tinf_inflate_uncompressed_block = (d) => {
  var length, invlength;
  var i;

  /* unread from bitbuffer */
  while (d.bitcount > 8) {
    d.i--;
    d.bitcount -= 8;
  }

  /* get length */
  length = d.s[d.i + 1];
  length = 256 * length + d.s[d.i];

  /* get one's complement of length */
  invlength = d.s[d.i + 3];
  invlength = 256 * invlength + d.s[d.i + 2];

  /* check length */
  if (length !== (~invlength & 0x0000ffff)) return TINF_DATA_ERROR;

  d.i += 4;

  /* copy block */
  for (i = length; i; --i) d.dest[d.destLen++] = d.s[d.i++];

  /* make sure we start next block on a byte boundary */
  d.bitcount = 0;

  return TINF_OK;
};

/* inflate stream from source to dest */
const tinf_uncompress = (source, dest) => {
  var d = new Data(source, dest);
  var bfinal, btype, res;

  do {
    /* read final block flag */
    bfinal = tinf_getbit(d);

    /* read block type (2 bits) */
    btype = tinf_read_bits(d, 2, 0);

    /* decompress block */
    switch (btype) {
      case 0:
        /* decompress uncompressed block */
        res = tinf_inflate_uncompressed_block(d);
        break;
      case 1:
        /* decompress block with fixed huffman trees */
        res = tinf_inflate_block_data(d, sltree, sdtree);
        break;
      case 2:
        /* decompress block with dynamic huffman trees */
        tinf_decode_trees(d, d.ltree, d.dtree);
        res = tinf_inflate_block_data(d, d.ltree, d.dtree);
        break;
      default:
        res = TINF_DATA_ERROR;
    }

    if (res !== TINF_OK) throw new Error("Data error");
  } while (!bfinal);

  if (d.destLen < d.dest.length) {
    if (typeof d.dest.slice === "function") return d.dest.slice(0, d.destLen);
    else return d.dest.subarray(0, d.destLen);
  }

  return d.dest;
};

/* -------------------- *
 * -- initialization -- *
 * -------------------- */

/* build fixed huffman trees */
tinf_build_fixed_trees(sltree, sdtree);

/* build extra bits and base tables */
tinf_build_bits_base(length_bits, length_base, 4, 3);
tinf_build_bits_base(dist_bits, dist_base, 2, 1);

/* fix a special case */
length_bits[28] = 0;
length_base[28] = 258;
var Module = Module;

function out(text) {
 console.log(text);
}

function err(text) {
 console.error(text);
}

function ready() {}

Module = {};

function abort(what) {
 throw what;
}

for (var base64ReverseLookup = new Uint8Array(123), i = 25; i >= 0; --i) {
 base64ReverseLookup[48 + i] = 52 + i;
 base64ReverseLookup[65 + i] = i;
 base64ReverseLookup[97 + i] = 26 + i;
}

base64ReverseLookup[43] = 62;

base64ReverseLookup[47] = 63;

function base64Decode(b64) {
 var b1, b2, i = 0, j = 0, bLength = b64.length, output = new Uint8Array((bLength * 3 >> 2) - (b64[bLength - 2] == "=") - (b64[bLength - 1] == "="));
 for (;i < bLength; i += 4, j += 3) {
  b1 = base64ReverseLookup[b64.charCodeAt(i + 1)];
  b2 = base64ReverseLookup[b64.charCodeAt(i + 2)];
  output[j] = base64ReverseLookup[b64.charCodeAt(i)] << 2 | b1 >> 4;
  output[j + 1] = b1 << 4 | b2 >> 2;
  output[j + 2] = b2 << 6 | base64ReverseLookup[b64.charCodeAt(i + 3)];
 }
 return output;
}

Module["wasm"] = tinf_uncompress(((string) => {
  const output = new Uint8Array(string.length);

  let continued = false,
    byteIndex = 0,
    byte;

  for (let i = 0; i < string.length; i++) {
    byte = string.charCodeAt(i);

    if (byte === 13 || byte === 10) continue;

    if (byte === 61 && !continued) {
      continued = true;
      continue;
    }

    if (continued) {
      continued = false;
      byte -= 64;
    }

    output[byteIndex++] = byte < 42 && byte > 0 ? byte + 214 : byte - 42;
  }

  return output.subarray(0, byteIndex);
})(`ç7Æ§åÈùöf½vPÃJ%0wJjR^³¾ÄK®Ì¬,q@ÕPP®FfÇö6P¹ÃkûBÌ'îóSÉÕªæ9¤çÞÕï}ý¿ßoéé)%ÃP3=Jqùõ.¥×ç(é()à¬a =@Z2¬ f__?xF¨,¬½Xb£³.XïNËþN)¾ª~þÎ|Ò²ª½½fôtø]Eçã+U¬^[?x:cûX´Áí¬=}]i¾uÂ¥XÓl¯ ÔîÙè.þÓÿ,-#Øh:xoAÿìa°6L¨©_! EíaöÙ1Kéà	á.?¨3T«ZÔ¯|þÍçH^ÅgU¬è«tÍáIF´¤ ±óÔb4þE6qÕÕkß@ïÚ@îs>ñÏZ²í´¶JdÕOÂnsBÈºX²uÏJ´õ&°F/j=}0¿£ãD	ÜJ4äÞT±á°E\`¾UbGwq¿d=M»É"{|gÑ@(p>®ÍëðV¢qB6¼×ë)H°58°0é=}¼_Ò3­fvXæUI5Q!¸v&gá¨Q7&×© eíßñ¢ÿ¿xç(¸ ·¤è×eñpa'ðW£«±#Çn{³¸àpý¦è´¼ç»À	jæ^òÅâPòÑ[óÐüJ7ø9Øøt£bÀÀ DÇ0Í¨'Öèp(}w:Öt>B×x­»}~¦j=@üâ|ÐÏfß[Ìprl§ÙÉ7ÍÞ[Ô;íÍnÔ#áQÎríæ¡^9¿TÏ&fæ¼&Êá?Q¦¸Ø3übÉäDò÷á}çæØ·t×R7.(ÒÀ{ª¡ÚT7ýÜ_¢Ø³ÖvZD¥=J7$:ÏMÍ3ÎË«çÌù£b$êîÐ"¸N·¯¶(Ê=@UWw¦:NÆ&~ÈÇÎ%¸1/ÚtMQ	À§!rfû«'×S_\\&ÅtÍ¯Îór¤Êÿvåq$8Þ$ÂtME8FóyÈ6ñÝDßùÇ6ÙLqeÜØòIÇ6_ØØãØB)¬§í_y°Þ]'Úph[(MÌOß+¡/>3+ÇKjÓÍª^¯TN~û%Ù}oÖÑ¹ix¦ÕNJg-ÿ»ÄVÚVÔø?mû%»|Îûüx}¾±ð Ï@ª"Í%}¤O©LBO­\\OH¨¥øUå¹xFóô£ÝQÐÛc×Öµ¶@ßÂ«æ³ËÒñlá'ÁSÔµÔ{öíB¿à­ØÄà_ù?Å0.Q¥Cº^Î=@Ö^ÃWQèªÿs¦­¢)Dxxzn¤¡ÕQw´bÊÅö$ý|=J=MÜÞá²x¿¤/zXéR£R]gÚ©¬ô¥"¹aGw¥ýP:¾ w?^j!ÒJP÷ÝQÝ,Õ%Ö)%ÝhU¡cOx­=}6W×¹Ð{Pj)Ñ§½>ýgÃ7Ï·Þsü.×À 	¾	?aGÇ:Î3ó*æ|ú¾7õ«St1rDÏgtTÓ8«ÐaëÁú4K/K»Ñeðeÿt±¢Ñur¿\`Ó¬Ò!yYUÐ"¦ÚùÚC¦úT5±ïM8Þ<=@j¢aß¯[UN:ªÓpÊ?hÜÎÖ%tcÎÃNoUrÙfð´É8=MQUÝå¼­U¶?I½ë@^Õ4ÙÎXNüþÄYsU ë=@ïEü$äâà©N¢{/}'^!1ìTICT-ª{}UAZhdÜ'V]ûÖÓE#j8Sªüþ9=}rùÜ4ÿµ¼ÛÂ7%Åú :´ß-,Ü4?ÉÚiuE§#g4\\õú¾1ÙXCà)¥ìVdi²>¹zM,è·ØYß¼°G	ÒÊàG@¦%p/ú|w)\`¡¿ ]QÕ=M#:¿¼ùÌÚvwà!¿ðÜàb¤W=@¸½ð>X½=MWk=@\`;Ñ3;¥<E;¹Ä\`egýz%GïÒ0?¹à¼h·qSÆª]ôtlÉùÞÎÖ~ë3Õ²=}=MÎ¶æ°ý²WºÔ.@Zñ¥^=}øùt­á^WYpÐ!(GzJsù¨¿ îJ©³DÈq$Di\\¬¦5Ià_Æw""áuIw&}æe¥di,å¥(þ!¹C\`,qùRQóÊ{CkÈ¸úuúæ¢¼ægVyÜ²fØÝXU½×TòTÕwd¾ssLÕ%=}\`Ä>ÉÆJu·	ä<Ï' /?jäX>Ã.[I²¢+=@¦ûå=}$4ºf¯H÷tÖ¡¼Ï{~¡ápÏg¯MTsD°}¸ä´Ê8îDp=J.÷$´¾suz;»7UÙ8Ì×[NªÙÖLPv¶*ÇØC(·òÂÑ[·¸HòÔÉ=@ÞÄ)wcúÔ¬Âê2qJÿ^Û·ÜÔdpÍÉv__aÏDäcõíÖÈïÆW.#èË¦i´1kFPÉÂXlÝV÷»*÷Æbª%þá¦æUóÔJÞê¼2j¾,É@¨¶ï3UÎ¥U°µta1#¯¦Eª¥¡jÝÍUäëXè[ÊzäÓÖCÃ²zð	°B®ær³CÚqJf*>Öï5£Ý1ð2BC}êþMNâz«?.wðîÃ¸óDÐ."¤èN9²Ø9P?3Ø,ÛpòljÈP¨âã?]ÿ°|yq÷°§|°½K}6â"º<Ùçdü^¦Üø^V³ÂgÛ®Â_ÄºG[»ÏÙr³E¸x=@Bg\\§ÅèdpôÅ@¯Ëwþðo¥Ì¾Le³±ük>d¯àtßy	PµÜ°xËu¸¨Vòú8Ü}Àð¡WOs0T·2%T~Es¼Cõaõv,´Ñ÷UW*ýÄeÞ«WÝá}OÎi9m´@û\`6d:uìËËÍqQ²ÜeVÍk{&Ç¸?k5ïâã¿¢l'-#j5e¸[¡÷?T¤Ä·÷(tÑM¬SÐd0fÌÑóÎ^¾xN@S$1 AÇüR Sd{Þ_ÕÕEî>=}5LTÑd?Æ6bÇ¬ÕË÷þÌð]G@yr·pRC[o~¯f<*n¢UrÏ'3éÂ-¬­hÌpÇ¹_)¿·ÞA2äüüWñÅ¸÷t(¾;52;_>	îâµÝäáâ0÷ñ-¡\`*uøMf;EÏn=@Ø8,äà¹=}Ø@=MhL\\^f*£Q{NÕ2ÿ-lTïöGjc!@n«µ(@"ìç+"ßò	ÿRÐÒÍoÿÍ=@éLGãóK2$ÜÍMGsaÕa¨ï1 ^3¹j·3y¾ý0]ÄÀ«ÖDÃpFvt0såÔ1ñG05,.@qC®¢W %ó»ºQ¶®n1o}#i7Ô¯?+ÓåÑíï¸Y-s@z³â3"àóo[Æ½¯GÆÒ´:x¯À	À¿=@{§Æ)Ósn¥±å©ñ­xÊ_=}Ô±©¡¶âÛÉûKzH+l-äVÊgyÚ¼¶Í·óR4 T[l9¬n¹R¹ÙÆqÇ=Mø2y3oQà=M«fÙ=}YøH¹µ=JÞG{s¨e  àmýê[r:èñp7z²ÌuÀ=M_!*Ak¡äù;ÝärâÜÇòg$ÍHËÄ'áË ÌR_,¦0KHÓô7¹¸sá\`Q{»þ×úàä=}<¹Ð¥úÑNÌþ~Æ!î$ZÆúÃÐI<.&ð¹xÈ&ÛíãîÀmâüéð	"ºdZ¨=MäFIÃ'ëU9¥#u¤É¤&wñ8GhÄZO|)Niv3qà)ë¡(óI½¨!áh!ai2øOç ¿©íáçÕ¡Àí(-)°E&¶h.±R»Ð=MnÅAw­qÂ=} 2IÑG©#ë9)u6¢£:vûÀig'£q2#!êúr(Ñq(óÒñ±vôéQÑuFaá7Çé°Iàïµ=JÓÕ±ýüËêk¼ìS#.iÒcr¦eÂÀQìT#9æýT³=MyHåÕÍ&¿o#Uµ­±ÓË&©=@ä¢Uõ#Ê":f¸~¿¸¹b!_=J¨»H¸éóò=@pÅÁZÁ¥*(W¢æâp/('ØrA£zìó÷@­é¼\\¾åY=@&QØÆ¸q\`î)=Mój6ÏÜå·QzdúpãÁwñ>x0éÊGîÏ¶A|D8PSòN\\ðOBl²òÞnF¸æïAýæbÕA3	°A+ÔÍ¦1c"6âú¸°<7¹zñêó1Xªíc%tö[áC±ÒÒC[¥6KpÍà%;¥Eõq@¥uËÑò±e@lfnµ¡E2µ¸Íb²N^êÚª½î¸lZFÔÞÌuÆæb%oæå\\î¾A±/¡VøC =@ZFÌáÐº´ç5õºú¸ç×@Ñü·{=@¶=@âáßEÍß'pBÿ àÞëçÜ[äîçB Á¶XÍñÞ=Mü\`r¸²S3d+èÐ²+$ZA<çðu@3BÁÁØ\`K¸ÒÏg°W\\6ÙaýìµSÊ³S=MËwjM1:)qlGbÒÌ8,¹!¸yGàOÜMö=}dïÂÓu=}&ú¨ 6ùT³À¨G9sÅ=JO¡ÕµZ©Ø4F=@øO3°Wùùÿí#ÝçðZ2ÔÍqqXã%µºö§Õ=MþjÛðd³ñHòÂ¡²Lª=@²z£ÚÈúOíÚ&½m2)r}°§mÏûD~*ü:ÍVtÆÐ1Yÿc\\×¤=}ã]É^u£Úí \`Íú ²P=@Ë5(&]ëø{ha ¸àF¸áöòddibHT#â¿öúû/ÕÄÎÿÏF3GrFû.i¶Mc;:ðÅª|=@öRG¦@N´íÄ:E%Èø¢?Ú¯>±Á8ÌÄ{y¤mÎÍaàÿû¾W)Tj²¼2ØH}Í¡ábÕaù\\do´LûIsÊ¹´(r¼¼Ü@É6¨xû\`-¥­éGíNÛ« 	KUDï^þ¿$ÍÂ?Í=}çJü½/x¹!n2dÛ¿Rt"¿÷z/Õ=MÚoº6ß59ýoJm)â=JÀfNäw°ÎJ©ÅÅ67³óäSl´ÍGp1*øòB6'N+|½ÞL_mÂgÐ\`mq´\\nlEáõ§¸è6&¨"pf;y<¤û½Mý£9µ¶]ô0n«>%1íÅ²Ê{»·»V\\&p£Êw >ü®=@æpG#tÀQvªfT2Õ¸x'H°.·à$=J%\`)ÑJ®h"Ëu=MAáBKÀD>Düà)!­!¦Ö!»ãâ%Öù¥z~Þy°	¥¹¨IÙ((ýùH'	KY)ë±þ·íIyøÑX±Ëfâ|Ü½QQÙCþ¢iªùým¸Qi´ÌLB[MÈ´¾AÝÏJän7àXÊänÇ©~ÁìOq~¯Gnÿêk³S¸;q~ÅþÎûòù69k>ß³Yn«WÔõ}}ãÿ,«ÿáÎ´ä@Ô.Â=}Æø1Oðc[O@CÏÞ¡T¥íh*­Ò3y¹gCÜ>ÌsºÌ8¬²ÃÃì/[JÉ¬Éó;¨~¸ïÅ0@cdmÀ­f%øU%Êùo)²m]<æë5$¨­ÌÑI[Ñ>Á¯w´~aS8³ÏÜA|c	Uk/l{mHñubÈ³§aÏ'ðE¹%ä¶6-uecÎ1{ó_ì5c1ÎëãûbfXõÀ÷÷\`0.aí=Js=@_½ÿ\`mà0.f=@óv6«ÛÝg=@·ÃÖÜC|ò}©fÕÜè÷:w@e®ª¸q© =@v ¼÷º.àßâ¹wÎ¯fD=Jv\`ÞCºWàÀÇ×qSc½×VsëãÁÛe[­&Ùh½©!EUý]Ü÷PWÓ­Ç¥þ®$WNnÚÖ¤Wï²\\oJyÆó¾Ý~6:AØx%þèÈ÷º¡+Cøt1VU:[ÂÈg½{vÜ7ò8ã÷{Mi(«¼jee)Ô¥£(!ÜP)¬¥cQ©ìçæV)æ¥££(â¥Åi! üö!©¹ãyBã¦èëÖdÁ+d^½ÉÚvê 6[&%XXePÉèNiÜ_\\3#÷ùä> èîFÝ#ÞÂßÜ5Ü5Ü¦\\ûIóvtENwÓ£ï6­þ½ ùÐ~;Ó©°XÑk$Ü¡PÏö¿æÿ}4u#ÄÃõÜÃ^hacÑh·|5lJ?µÓ¼8Ñ\`Ö^÷àÓ9"jDµÕYùi,T5×PGÄÇõ$Ã~7îð¿Ã?Vu3=J(qZ¿n¡Pw"Ã4a^]üì&Ê=}ÒJ<G«a;ÊÇ@ëSûÕ7¾Ô%Ú~79µ=}ÁÖîí0XUùLØèJ§óV}Ôpáùß?5QÅ8ÎE¾ÚÅÇõäÏvÕÿêÿun§À#_Ñ.Í=MaÚ«Å36ã$±Òé+E\\JJÃç-çï³ðbUg\`WÝêý/z·oWj8JoÝÖHpÛÈ8Ò"8üSð,énj+¾		{é,ñzI\`â´aÆx§&áÆúÁè¶ÓÓz¦pD3p=}¾ÒÍ»/yÊtkêÈ\\zz{æ{Zh<3¢áþÂç^F{N¾OÂ8SvqW5j*Lz/^´FnaÖ>ÛÅ#ÚÃ9îàbÒÍ²Ónä_ìBGOóÁ?Oqêyxí¼´¢¦âö¿¦ÃïsÓ2ÐÆèþºýló1~Ü²5uêaÄM¤å¼¿öZáU£Õï³ÉÒÑi½àdhÒ¼á?OJJ¨B/rÆ}¾FÒ>Ié÷?æ÷4uàÙû~~=@n ðÂÒýSüïùo%6Ï²g#Û¯!¿¦^Þ÷ttPo¡äñ7æI%Ì.@xÁ´½ú7]bÏ2ÉQ±tH)Ì¢g"%6Ñ?Æ0õQçßûÆ|mÐ¹C;É$&XsÅ¶4r¢á1N¡ q¿Ó=M¯ßÈT3I«|zð§.@ÞòB8dþêp¦à¤¿[ñW;Ì-ïæôcüÐaÛz4«Gr"DFkN°°GºÎº9«M·¹»´fÿfFÁ@÷¬ñeõ-Øh<t=Jü+uïÌÞlD.W;W=@Åâj¢Ú2Ñ«=M'/!àTð\`c÷Ç-¨óî®,FG&D&Iô&eÆ.ýo/EvÞÎN;ÃUá Ùº]°1 úñ Ó½ÖÛyÏê$k¬Æá-råýJÌHI­Lßb=@ÔQÚ_FÈ\\P~S)ÙQy(ú$É%ÑÕðYËÅq8¡ùã1=}_À-oyçjÆÄd½/Á	$åyÆÝH|Éü­ØUIÇå&!h$ûøö÷ø(I§F"ÀX=JqIÌ¯#rh§"Í^Ë\`eÕsO]!²NfÀü^¸4'ïDS­á©aÃ	3íÂéné=@q)=J¥ð,U©×)<ëÞ;L8aôb/=@Mzë#~¥i}{ÒÆ¥»ÔüéÝ2HxªÉõ¤òá¶¸ÙòDqÔ³&â¾ÙgÔt;·hôxÅÅ¿øA¯Úûú-b<@øþÖí©Á¹¦!ÙÆå&ðÉs(úäyæsg)è¿ê°^º9*Ô^Ô:r]ùVSÒ¯9Oc)ªÈ$øç½ý$'Ý/X)=MÁ(Á±Íªà<1«b½p©úÏ~iDÞ\`ÄÇwº[	Nþr»Æ^++ª£[½«\\d¤_F.dè¼0Ôà!ã¿#I¦¶Ù©Cèm-üè÷Â'§Z-_èô%PÞ®¥Ýé,D¾O&CÇH=}ÅeÄN¥¬Ûg¼å~>ºNAÈ=}ZáÁzwyP^Tø6õ}6^óÐÑQR.åýô"ÍÝ|³àòÐÑQ\`BoTõëq¹'Ö0ª÷hÎ¢MZ^=@<±©¼l©Á%oAù!)#9CE)	ö=M·óð±ùÿÔóþÅ{]lG6VT°D^©S';P=JóáþR8Óì:2·+Ó}^ú¢[I£ÌxBØúq¼'2x~(Æ^aFi$xFá¾«¼Å>ý[ÌGÙûñå;M°ÍWZeð8ÿ¸hdñq½cú~A¬î[@ê\\ó\\ úÎÒ¼Nj·¯s¼¡íÅ÷)¾OBìØiò¥%ÕðºØ2¥ÁîÑ5ûè«óØm× k¤Wb,ýAH¡SÚ#	Q ù2¼RIË>R±óà\`M4c±>s^«:Ðÿú.6D_³BÆ ¾[?ç=J	ïÍ0£\\Ä	+¸½þS«mêö¨¿}ü­QåÇ·7]Ð­ÄnúTº3¬ëËzd¶>ö{:ÓôàèÅ¯Ï_ñ®×.ýÆ2=Móì®DDL¶{Ûb·\`F½lÆ}w}KÐQvt[Þ¶þ¼¾p5ð[v4O>Öt«Ã¬¿Báxë´ÎxëÔ®¬¿èÌo»ëTlG³iSÃl<ZÙ^Q>tÈ=}úGª{öÏãÜ}ÄWQ½_÷i=}¶d´Ò2ý&¤¶ ¨ùp#Ãh/dû?²ODÞµàZ=}J}N£²ÅúqÊKcòì¦tN¼¤¾ ZF¨[QVgÞÓyñé|7«EÄp	óòNM´ªwwyp*#×ÐyÊyÄ\`Øwü6þÄºü{XÄeµüÞV×<cª×ýc½ÐÃjÝôÅ¼¯s½0dîz»¡$cÅ=}òGxj@Lxê±gxºþ÷³Ìmø>Sí ÆzIÆL9å=}âÆx»|þ«"r	µÄZóöyúQ]4£EÍË\`a·ìÁÓÅqrÂXÆB<r¥6}ùBögéo\`à¤fçEÅOÃNpoñX¾vÝ´K²ON8ZÜSA0¬Æ¨ØO3B?k¬þ·ÈÙZÍ=J-üîpì@V'TçÞÚå49×Á=@4bìk² °Ûæ5æOÞ»Tø¼Xõ,|ÛWo[WOªÿ.|¹Dü(/â£ªå³¨ÉÀ®¬w){¼ÛÖLÒ{Ä/K%&S|çÞüL÷lpYìÖ\\ªz{¸Ú7Ï7Ö¾]ßvëqD4õ{ÏßÀP8ZlwýÛ=@²°\\ÌHgÎX¡ítíÀaÔÓ%lIcxN<{Yjrò°$B»7¾3-ÄÏüÕ#»L&L·=MFª>G÷µØ|á?=Jlbep×9LÔB³_ØÜÞtãÒo:xh^w]îa7òw¦¥ÖW|9¡[Ê®\`SßªfÿÎòÿxEúxö$C$&}ÒáæÄqéð=@doü#Ïeq9(±:Ó=JÖ¼re#ußUäGr¥uYFwÃýP4MBHo´áDo¯»G2bç#5´¡3\\_Ýå0s÷Ä%W:®Ù·ï"Õð&¤¶ZÄÁ<Sù$Æºõ)#Ø^-ýð7ñ ¸:±oÉXq^Á©cB¿"©gU¤UgggUT4n¢ï´$´ï´¼ÂË¤ÒÑÝLkDí°©HØa$>=M-ªÒ~úñL2À5CþîY7ÁUíu¹º\\Nðl;¢*Öÿj6liA0·ëLªÂÒ[úÃïÌvjý¯J¸é°Coñg-z8öÊ_r!3&F]=J_Ä;4¸BfÌH¤{EÞlÓë»Å<­ºá"=Jd¾¢SF¦ÊÑð´û\\öu1îäæWË}pkf{Õå+á2¬}ÕðÊêóë0qÔa[?0û Mäzc®mÁá«°lá:lÃûx:÷\`ê®-øã]ÉLhÚÂ©ÙÂ&!³¢z!ìæDrÅ÷Ö¿ÇÐs¯sÿ×K0²ü*3Õ«I=@M]ýÙ#õÐÂ*ZÛl¸td^3z´<ªLé@-]â9Ö}:ÒK7Dtà_núJÁ¿¯oÈª»'H5iÕm-1*CJÙ§­KÔÖ+Ø»vJFm±,Ö-lÓR²ç{°°Ý>=}®íb$ ý6-í*mÅ T½Qè8@å0H6ÚÇF´8ýÔo¬Ê4?Â¼¾%¦}ö{BII-@\`bFºfúÑ-Ý¾ø$Àó®ªÏÄ¨Ú³»tzJçòôT GU¯:ÅMr·gÞNXÑõÂº½|³ºÍáî{ýð+WÎÍs=Jt5X pÿ^4>1è°VÝäÌ7Q8LR»ç{ÿÔ-º|¥úNXÐÏä¶jxº Ã¾è1ýa]*DkrÞüwAÌLÙ(Ý­sçÐ2¢"mR;Qu¾@³ÖwI,Ò­[®w¡®Ì¼ÀÓW[>Àµ6©Ø°ÁÐÎCØx¬4kËhû·´½S<"N Î>­¢r2$pÔRnjî´óo_jDÁ¿ñnj¦ûÜ«_Þhâ°ãÂ^KXtDR=}ÆSã«8XüøôröÖYsDÀPfÀ¿¹²oCÓÓÅµ"Î0]¬k*¾¢ºÞp-È³$ÑLÙKRþ§µ^.é=Mí=Jà§¹© ×E¨EróÇ2¨±´áyI7zdÊÂN¯pÙ'Ôa¨Ö£'Í±9ç¬=Mòê%4É&R=JÍ T¡TØï3æWM\` ëí=}ÙmIO=J¢ç1 ¯þZ1¡¹gôrXzlÕÅf²P¾øÏt@¹mN5ÿ½È&@^zé	¸_ÉÈk¡ÆZ|ÂT¹cïÛZ=JÙR?ä0«SÊ¦(z=}(=}³=M·yîÄ¾Æh~/?~ûÕìÔöÁFÁî=@þÝNª;×]¤ÈÇ¶_í´×ïF±¤ÿavìJEz~ä|6¦Ç½&lþ!Jzw±ä/º¿òtdÝÓXaOe*zÕºâ-¢¢ô#÷sÝZ0è¿±ÝëïMa"{B\`óQÜ ìyË\\fSfØüÃøa¦jÎ|ÐÄírEµ¬áF(ª©wÓ=M¾£Þz1rJ$î'×«¬,,úô¨»ìBßñ,BÝkXPD¢Nt¥¡Ei=JÕü@DÏ¾|ä wädÕõ}XâÚs0 «K9¿pä5àæÆ¦à\\MU·mÅÈå4ËöÐ6Ì]YÞ®¤µêÙÙ=@Vþ­b«Ï÷[KI~«F-ËµJrQÁ.,ÌÔÎöî|LT>IÔS±ÊxM6CéTwB /ß¾ý+$õ|üø^²9¶-É@B.^Ìk·­Ä_@^^9Ppp$modvgFkòTç =}×=}ÖVµc«ÖVÄõÆ|Î,Q¹,X?àÛ¸^xR}ÕJµÀoàvþÍÇu=@=M»¸¢$_²^!ïÙkBÃË7ô*PÊ¿[wo\`òI¥ûQdÁ=@v¥=M/C\\º|7?fù4³^.µáË\\-öþU÷×t±LÃ°iÖÉÛ¸ÓÖ¨g²§Ëg=@ëÿÐV@ü¯Z9ûìxk°eÕJÉ)n0mÌûo-»=@À¿ÕjÚH#ÜdÏvÀI¬(6·Êñ-÷åÌÔùáôðUÌKLkvÿZ¤MG¢i³½?¹;sû/£xì°}ÑSotÅvKá;m®8ÐÄ>O©¶Ð­äXhHVÍoÊ1#cEÍ=M«¤ýÚ	í+ì­Qé©Ù÷wp³ÿ{ÃÐ9£êI%5uòÔÓ·ÍRé\`¤³/¥ñûGÂ#­Î[ÈSÏ<!ºU=J ýï\\WöÐzHóÐFj±oD·æE¥ß¾:	Æö\`ø7´S_ù\`u"þ>PÔÿ,±cÎEÇ¦¤2îà¿]SRõ"¢Þ»f§àfÄñÂäÖï?âºQ9gªÂã²¯ÊxWñ«;6½ë«ûkÒÒdUö¡kè)u²âPÜBÇ1_¶=Má\`doöom£;ÝÅFhË=Mòäºx§{±ð\`»ÜpOÃÇýLZ¬&OV­	¼öD°s*½3bZÀtRc°rE>2Ôü» °ûd½Âo§¢eFg\`HA´><åC³&çyæeL©ùð Ø\`ìdj}·­.7)0û9åêÒ[¾rsgÑ @Æ_ñ«m¿9iºvxè\\d"OÅ[/NmÝú."oaAW-Üñªö¸Ô}Ã±ÿ.ði0îk(-9vy[É´=}ÞÖµ8E´Hzrb±tî§Ð6hæi YÐôuæäg]³föË=McZ¶h8[ïBõ·ÉpØjTóL>=MfrvøîÕcxNæþ{ÃÍÐ8¹î7KTAeb[ñ òJC¬2¾ÇWbuåôµL·}}ÂßÁ¸¾±=}1K§£9ù&«ñ·géü¼¦î¯Ñ%¦"í(åÎ[X-X¢íÑây)ø§eFj1Me«x¡zÖê87,ê7F¹úÄ/âI=}~ý§=@pù(ÏÉ,ñ(6Áztx¶Ïá°1H×:Èz%½D³­yN5F¾¤ªhT:;)ÎTáËTp²g¦®s¾À)µV6·+8Z_0#Êy@Ø°Ì¦]p. XùI")ö\`YlðÚý¶"qãé9pY¾½ÒÛ¦¯æK¯mËû@Á¸ì#\`¶ìmÎw:Å2P)ÔV?OQ!O¿f¡Ø¼èYè<:<ÐmâL#½qJØ	j$s5ú­±­wêoÏ1é=MÀ-Rdý0hò÷iÎüF{±s=Jo_Ö¦ýÒêÁyc6»ô8ðWÚËñyAîp×Çæ¨+ê7íÍËG²,ªj	Õoxæ[L­	3*ñDñ\\<ÉÌ¤pÉXO©­¼×Ëaz¦ßåäé?!¼1\`\`OÅ(/Ó»FyÂq/1¾=}I£*_xlÅÌ7÷µcØj=Jâ,£møKzúX­ÙéEó°ºoóaôòv Î2ÐPÓæÂu=J¿kl½}0}Æ.@Ï@Å"ÜP7¬¯~ìMdéµm\\×æ½:4®¸^ãæám¥f-ë#rËwZÌ1óBC5èÊCF±âD<eyRðA£ÃÃô×¶\`Ò]å3¢A[FÉ²=Jrñ®xUí§·@Ó¦aé±ðEp¢ã2}¢íÚÐ<´=J½÷cFëI]ÑAÊ]M­bnÃ ÅkÎZ5ÏñÀíÊ=MA«õÔXQAC/Ñ¢YùÚ#k'Æâ£µ]];Âcpöä»Ómà@ã·jCÅLìêéXFÜÛºÄÙÊZî©bC\`Ô=@t=@\\F3×4ã1ðOiÙEhüEÒ³mï ÒH·H::ú¸ÿÊ¢LÄèÜ}¡ÆaúÒÑÍ1çÜíc,$üÖó^Þö6CÐÌãíiAuüc÷[ý&b§F@Z8è¶³5d®Vuëà-f/Æ6ëac'D£ã:BhC°Ç/¼î6Õ¾1=@¼¼ð7Ñp}îì6°\`cÅìs[¬@j¸@î¼e½ìÖ]ël[õvÞ. eà=}tÁÊ¦ÃÍî£¹cêéöîÁOÌV% U08æãD_Ø8kxWÆ×9À89ù%6á]rícé=Mk3Ûcòcþy½"SÜËëbbIfsLi~ÌT»¯½JÍ»¾Ào+w9#ß²çy/j[3G7D´Éoù=}£=Jì)ë+ù|;<)rØäþNGqÔ ðÙôuUQiò~ïPTai]þés'Å'EqáE¸/ÚÂè<P±9Æec c*ºxòMB??ÇªYD=}ñvyq=M0äVÎþûÁ¦¢°«ÒÜCÛZBÉjjä.>?£ÆT}*V¨Ñmau_Ù=@e,LzH;Í­Xç*b]H¼b)q·@=@Íõßðëv¬ñ<Õ÷S·´Bu 5_³Ù_,qèMßx=J5å¤¥ xOý@Ò¡þ\\eÝ¶½cØ§áBÑz²]Á¸è=@u,mî÷¯þÐJÜó¼Â(ÝMLäÇ·¾d<ÏÇÜ&ØyÚ=M9ÑPeËþÁGÉicôeLSÇÜ°£ËJU¿J7ó¾&£~Çaw7	Ñ=}ëé2²kèî|1»5Ó­r¬ù=MJÜ»aÆøúSx¤©|1»ç58LeUÈGy=M{Øàdgf ÅÌÎ!£Æo@ÉÒÓýH=M0¢Ké¡5£Ð¥dndL¨OÙGæ½áÝXÇÅt=@0xçúñMð¸fqOhLbÃ=J#ÆnÜqK=@9K=@kcl9¨»¡&]Ú/´ýïì@¿Yª&:´aÇÝÜU\`SKéqÔb®¼äáMÈM6SÛo½Ä[é°âÂ[ýculÌsáé@#W(âg:A§6£{Æ!³}h¢°æZ$¦di#Ôò¨¹aÄG²üiòRîºrÏòÓ¸FÂî¼&qxv>«Vc0vG4¼êãh°24îÐGa,0l8ù¢ºÐ7Î³Ö©y1¥Ýh#Ö­÷[Uqø%VwàÏ·ÓÊHOp¾TÂ'\\wÔö/éâÔ~Åtic«Ä4è$üZ>NsàÄ hms0±Ý28ý=}5Þò¤8[Éõ¥Ýÿñ±½ÅÑ­.Û­³?I8e÷ÏRwcfÜ76Ï+QGf=@<û}ÓEø¹®æ³Ð­%_±ÇéS)@ÿ\\Ý_DxÆ8åhp0~rÑËËI=@Ýg+ê¨ÿwUü eJAÉOÿ7.jÎì*ì£"þA2w¥Ïd (=@tqJýÀN39Ó¶bûUÙ;dÌî5ÿZtÀï+)0ÍxoIlµæ³3À¸«s=@°¸ÜÂÒÖ:1ØÌ^­ûî{ÆdÆ8kÃ	z26§*­8©¾ï|D½<ås=JWçêÌ^u%L¢³ûcúÎgB»ÃN£A»Ù{6¸Z<»k­.¨=@Í+'Ïo­íÞuÕpÅ Ü@xÄ=M·ÁçÌg#v«Mbô|[ ¸ÃdÜ4Ä®¥FÈËÄÀBRÜÒ¨'Z«rmÏF±×àOë¸ªJñÚý=M\\=@·ØIH!ã@åXÎÀÚ|õÓ¾ÝGñùÖæ¼øÓPü$èíËlÙÍÍÈZ)£iÑ,oåémr&YsÆ¡=@õt=J1m8dnêÀÝ#¹ò1Oy´FâóS±dÇ,rûfÓbQªòXGéýþB#÷ýkFáwûK´òûmÂ6ãOôG?´,=J¼Ýo8f,ÒbïÃ Æûo«ÿó¼1ÍbÆêób°òïQáDàO^¼'´s«Æ2Ü¸ó"ý"á]1¯ª;º3#nsÀy(¼Ç	Û¬UÍ¹ç!¶Q¨3×hX¥sÃZµÔ"¾Ï&&í!îêè	Æ¿CùáqyÑWú(f§ä$oÐ$b(YÔ9|um)åÍh	MãÑ1Þ¢Ù!\\Ë9¥v5Ù¥dZÞßàÔüo&¼=M¹:îÎÖx®Qº¸Ü«³"Ã¿À<té\\(=}(«¨Û=}ÿô×8xiþ«yÚødÐiýÓí\`uó5~ÊA£û?rxeS¼ÜQÑ?ÖIÓJXRHZø¦æÃ{N<4GySý®he± fÉ[µM-vîác/ZcFÎûª},àI1>SÜôíÌk±ñ¼E¤7í[R=JÜR;º_IÏÇÕ¶Qa	MBÃù§pPÑÛ¦ö!â¹Ô¯p÷At¼Ùaì'42õ/Få¹öÉ³S÷Äg^Ao×~ÊÒÿïvúp·ßïÝêcõãùÔÿÄDÁ¿ÃBÒÒ)wy}ÝÚµn\`-v=}mØ3Vkí<Ò{Z;,Þ?µ»Ì-Y9W%X®å=@òØsø¿ÀfbDöNÍñï{^ãô¡¬_å§['Ø(ÿ=@UÚßÕ]Mç&¯óï¼ì\`âì|\\òÉ?ÙÅ×[Ü­¡ïó(ÅÿM)8¬ÜÔàÆÁz&@k\\,ÂÖLW*æhã?Z5©¥/ü£ÕXT_-¥³2hÑÐÃâ%yáäydï=}p(ý8!ófýíjihó²úÝ*!Éx½cgÍá÷®©äí§üÇúÝë ÉàQåÞl}/i<d%±Ï¢½yëXlY)°Ì%þ_$yå5ýO0Ñ)û.%þÚ=@#yeµ°Ñ=@Q(ýY?Éy$y¢ë Çö%|ßyÁë]ê¥%ß©Lå@Í=Jov)½Q)tF@ó»OzzòtænêðÅ\\ãTl§,ìx*ëF$n¡²+èGO:Q?bõv=@[aAL¹vn9;»NÕ'nÌ ûÛÊhà-Iô³3ñcÛ¯H´Ç&£3vwxYðå½ºb3²x7ðÝ-á¾¤jóS3{pÐ\`ï$G¤»TV!3<³~	=}¸TÎLI¢ñÅÀªôwïn£É(´¥³I[=}PÌ&YAYIÚæìTäçhg(ïÖWº¹ØD»!?Zðt¢ðüA¸8¹;-kÒhòÂI¢Á×Ò'º¿pUH¼ÀYyAyu-ýÎÙk(t½ÔiÊ~é=}¯XëwqÖÞ=}èÄzÛC)Ï÷*_·G-¸ÜÏ;ve;æðûÄÂùN}ó=MÚ¡Ù¡áú ÚzJgoO¥¡>l'­Ú,13p4³#khÚVn(¥=@ò³w}hcö­8´ú\\Kñha0üø!8í %¾3ý­;¦Vb[8bX«ÿ  ü¢kë·´ìRzVøcôéJãàÃI<¾ Ä¯!DÆ*Î~éU/\\5U!o¸}hX¡Vþ}\`QT¹-Ìo{bC[Æñ=}ÝâTì°\\¤AøÉvyµíÆiÃì³tÇO\`QB5x~Vø#a»ëfÿJßÍÓÐíÑ²øð|àòp<TZsD¬DMüÎ+þð6äpVÃ®­>üû 5WañR~+w6d¶«<¿ÿH;äè^Ç9EaNô5ÏÅPÃ¸×Â¹Cdh«5,QWg¸/<IÔþt=@ï÷5ÛØé_©@=J¿FÏ¡ÞB·¡ãLz*8GG¦»ì©å±_â´^=@µä­ÑYÿlIíÁ¯âú¤^øP;P¤²S$Gæä÷àèÑ÷ççÍOêÕþHÄYélb¼X«Ö?ºÜé{ä\`ÍÌ´Øa ¬²µÜ¸Y$ç%GÁc=@ç:wjÒÏvGz[iZnÎO¥¹$r@{¤ 'X4ø,¡»à¯=@µ=Jü¢X¸S×ý_àLSålo	Dqûß¼G$8NiG7vod¦ÌÑx64ø|¤=@l;	²¢¥C½@?&>$Îb²«Ùî6Doo':'6¸[]EG]WEt¥²£±,éó&°rÚaoi°½j=}L«W[Î>çñ4Uî¬þWc{Ø¾ÝÔdÏõ.0\\¸¢ ÐÖÛwSkÅ~èI÷Öîêd5u.!¾ÆzÞ"K ºÜÄ±&Ni[´ºÏùyã¡xYEohðÆþþTßZÖ«úö7ÓM£K÷ª4 ZðÁ;^eÎ1%¯=MqÔÈ *H^E6©Ï7üÄD÷ÿ¿\`æýçæû\`ü äºÐóØ>½û2	q7öOºÑMù/â2êØuçô]ìxH©=MÐô­ÏO¹¸-´	4åÊ2¸f¼\`â3b¼µÞ¼ñD3 ¤ýâJJ¯ÏKíR©¾ùSEeöÞhÔ]$ãÛø#CÐs¦ìT?ûó/ËD\`¬5ì´¶{+Â¨^Å9³ôn:ÜÚ/9#äÇÎàä<Zvñ°Ú×Äÿ­I·A_}EðëÌW0»-îä¯¼×Ðpac~QÊsÑ,·CÁ2BÝ/ûö£r37ãÜjÐÕKæâ×A°ü»ùt¥Ç¨°°¢·5Üÿ¢SÎ/\\zJ2iyk×0w7|F<Å$ç×è|E=}Ì9Ce!Ï³vßè×yP®¢·07ùð|HÀ]ZÐz\`òæTgyv&KÐðA\\ö´q@½ãµè»ï	©áË¬xå®$ÀXKL@WËè <¥{uòÕª3ç²O}­5=}Â_\\áìÿyI Ë¼shÂaûòÊ^«yý¾(ÏwK{}ëÄü)æwÛO+ý./O¦:øI£HøtùÇÚÈÂVÀ¬»WÌë}áã&^ÎSå×owoÌ5A{Ñ¾ôÔýíãIÉo{h¤Ú6÷&"'}EÉÒÉ	'}J¹qNãÁÊÐÐýM5¡ù«²Í UbmqP¾HnF"g5m¦¨Æç±ÐX©Ðúëý8ÐÇÖï0ö·)¤åÂ»ÁÎäQÍÙ¡¢C:· Qmsº;H9WýJV-G«±øÚu³ðÜgt HBä8Y6/ÏÂÐ¾"¿ÔÕ6yÇÄOý¼§êúÒ-HÕ-PÐYªÿ%ù²ÿ©üXiýXÇXnVÄXÄ!ä^þXvA<£ËL9Yìº'«ßÅÑÍ$©õ@Þ;z'Þ2Ò¨.®u9KÊô¢×¼Þ³éRÝäÈ§,#G¬S)8K{±hå8Óh©±^©ì8Ó²A·²µÈê%òªcfÊshúËGÖ=@¾Èï{³PkW_Y¥âìsË1fG¢vÕÓûÁ=@Ó§Ð5qàÜâ~éô7ùøãÎ<Â¡þnï¦agøÓEOÏÅ	ÆAÒÊRS>ò¶@O,y=}¥®¶*0çø§_c²´Êyª8Ç1#Ðx£#©úéÅgS¸#\\wW÷: ô6úÃ° åDG? W®i<øbi(¨ï"{/ô'È|ÆWµf[b¥09/ÈFærL{ü[ÐF ë¥ü$Ø¾õ'¥þÌæáVYÂU¾d4Û9_ï<¢wA÷ü'ªG·ó½)3û>eTê~ Zóôlh3/½¶äöW´Oµüÿ/v\\êVlÓÿÔìí¼ìîë6yÆ_EÐpï$ÿ=@NÉÓnãlü >KÙêøÂe2ú¨ÑqLÌuâ%SýÐÄ8H³!Û]Ù!Üú?£öE¬ÆµiNldRÊûH/Ûr&RÆ£>¤d¶8»ßâð{ºvûáDT9¡ü/-Í-ø5ëSÕÎ,x®¢båù6¡1Æ"¦[b½I-x2­ÝXöê¥[ÆY¨0WÃÿÇ]Òé6\\'¶ýìýªÑ\`ýù*Ñ¶{ze)±Í°)ýË0£¶ãwvzh½äèåhx(d8=}EPr"Jöy&?Ò.=J¢µ±Û§ýÂBÕÞÁÏ×§2AtLÈ° ty¹s·Ã+ÚÉ«Gg3wPìbp=M	ß7ÑC)rkM=M¦¢bÕ) p«ìBÕêA¸ÏÖzÏ¼'.ªnÂÄDpxÊæ4!ÆduþÐXµø=@w+bPÝUä@p3cÍ«Þs1P¿7tØÞ­³1ë¢äêOì2°ývÐÁb«í =MÃû¦.ÜVír¹¨Ó8¤kÕCKV¶hm¼fCÍO=}§Ol0=JI!ûsôpØÜ¼Y6»°&5éCÜÞÞæ Ü»#«fäÝØå=J·máeMÝÅ{«eðÉ	Á0#¦ªÆ{X#G2¹¥Xÿ@}4Ú}_Ý5ÓÌOÜùÍ#èewçøGN¸àËÕLÌEøÞàr³Ò¶Uçµ¡\`:ÊKìå¢Q¶µ¡ûAÙ7ä\`0¼®îA0giAÇ¸Ý"¡¸Ýb0<Ým/úîdéÓyªíåö¶T¹.'ì«4cå	ß5¸òùLÐcN¼ÈÇ#Â=MìY /Ãá¸å÷Nýõ÷Î7	cáoÏ¡<úµ°^k¡Ê¨Ésnü®NÏu¨NÆ	H÷à-8Óñép9qkùFñÆáAý¢îEòÿ¤éb§& ¿×°c\`þ8ü´p¸Â§ýî³J<8c9ýô°³W*¬<ÔEÈ²ö¯½q¥qøý\`½¡aÛeµy¦tÍA"#hYô/ðáYî%Än=}Hï%Üm&óÖÁ=}l¤£}ßÞ%rÀT»ë6ÆyÙ¼ýQºY÷=@mÚqnø£ßÿq·íoà(ÆÔ uÿß'ýéi,sièkcÇ1¦à!½¦éé"ÁÁè($=Môò åûþ¦u(úfm@èéú± J7±ÝüQw=@§ñj2us9sfð~X¤"(  FïyØ%9M9çí?<|@ôÏÌi(ÿç b$Qie¥©ìi%©æ%y$ÔÁç%$E¬ÖQ©aÉ&"Éþ¦Û(§¿mZÌl´Áûâ&ËÞ¤)'NÞµ?ã¯Õ]§(?&¥ÛE¶Í%	 Í"üÙ=@)=M¡àlý©8©Û)"¯Ùî]Â4Û¬¹aX´ûQÇç6½ÓäÇ(Þ¦©Ëíä§2ÊÌGû8=@¦ÝóÚé©B41ëbÙõ¢)Å¿Gg|gÍ3Äy	!'OÛ]²£»I,ñÝþéXÑ Ù¥Ç%*½dû^có,½Ôuþ|iEE«½ç=MÓ@¨¿hµòHj-Ë\\?òÃæà^±y MÛ%ÝúQ»6eeI¶ÅºÁwdü:Üöà©¦ïéfaÌbÀôU ¨Îðt"Vh]q(½æ'á³9iäa\`çÃée Éói#Ívº©ø¹þÑã\\%óq1 ¨÷_å¿a	²çiµóÄ´±h¤#Ï%³±9+s%¶U|v'ÊR+á´ýS!¼=@ =M58´8Aî@ã´T,ÜÍ,tñYÊ1=M|®%¬åMºýz@§ò¦ß¢÷÷Yw ÌaóeËýñ-À#F#t£îUÆø<ª!_¦Òõ	ÀBóñ¢fÅ¸Ø:íá±õø©vÃ4ÍJ7ÚåýUöÁ¥Ádfc|Ã¶ªËü{ÖJµõUÍFûZM[eå¼çjiYZÔ¿±8h~¦nNi}%Êf=}f=J­"U'h{zÞ¹}§w/oØi=MªÞïý¶)ÔòÎq¹æ=J=Jî~3¬@·@þ,ÏMhÅÆ5y{COx	Øû´ásÄôúNñZ1pN^<¨vCúãÈ	vç)ÚMV¹.ó«ð"e)­	\\ºxeiÁ¢Tæj¶Âñ¦µ·C¾¶ÅMoÜ'éÕ¯xýÄskW@¾áSû×yÄ_ÔÕÇIÚù=JâgÝj&'/ãòL¸çÄ_&e¨óO¥[eÃÓùgùZrqxd=}¬F.\`RÃ9¡Ä¹KO\\Âî)ö«n~Ço¥)p_ùO¤¸\\å,øÁG?B-ö?öå4Ð)@¨öTR·[ÿÙ1Êåd{_Áj¾òwTèìæÈ=MZþFôQ5±hc> ì/k$ôþX9Ìhó*Ø~«Rª\\ÿOGÃ°L^úo»¦ö5»K;Udé¢±®åQ«=MçMVç¦ÔhCx>aw·ö·cv,í?¥jéÍ|!s¡ý[TÀþ}µã=@<µùlë"HaLl³<IÕÈàPhgt- ×<àqøÃ½gFQyØ»Ö\\Ç¡\\¯ûYcIsÉºØÄì§éMsÁ^e<èøø{ö<¿À<Ý!7ø}ÀzlF	+×ÁcDýþJÄ{#áL5ÝéÐl5áö7T~ÆgXZ¥R»°$5¾IÂPQÀD-ÊðXNeqF$ÖC|aIí0Â(gÉÁP¯÷¸fi×ö¤p3-å/&Ç·â°º#¢(ñ1©¡Ð¬ÿ¸o©$ö#qXóýýØÁiÛoø¤£AkJÙ(yË´ÆÍ=@ ¥]ð?÷5¾7cN#t§[ÚG¾9E(J·²ozÊÒ¯p¾WLÅ×.Ãicº@E%/F¥nåÿ¯U ¨L:	¸è#ÐrÞú¾Ô´qâgØ«väDÍ÷Ã,Ýã! (UnÐÚ÷	øQ½-á7é#¢4º*6\\¡4q¢rÁ=M­Bôl÷¦ßÿØ<ÛngO¦ËÁµ¼èZ=M\`¶g>ýÈ§c±$Ä>Ýx-ôéçN</xcÅl]ü ¨ ëÃ´£[©0IZE:½³Ñ	[Yµø½KC)(¿÷øé»=@¯é	%5é'Ó	=@b×N»ÅNy{ùëÑj,5ÿDÅäÔ)þéç!)Ë÷@TyrÂ!¥uÔÿÅ«kæFùcþ£µqAãÕëH'Ö0þUF+,-ôa1ÍdÁâé@´¯çowW­óbt-r3§Ë&ÉY«Õ	FµTS),0Ñå?ìôr¹)o¤"×O³ÏúâcmÐ»c,v(E¶ä©FÂ¦rdËÖø»àÔÜQÙ/$,/kËh-|ÖØqZCá/Ê,Ûìé Ý#oÔo¸éãa±ôÚ.ßôÚ>¥>g=@MvF_Æ 2?¤¿®øÈÅNÜ\`¢è³óÚ¶ºú\`9ÍälÏ'Õ´OøpKì=M$ZgÑÊXÅå´ßí8Ñ¼Âµ0¤ÇLXSâ/=@þ!Ãm3]+ ÙØ¡VÏyßãW¶£çEÄÎUgáa×\\5é¸{Áû=@Í{rÍúoÝ{·C©¿=M>¥ñ¢4ÑZø	 ÍeÈõedCTÆ×ôV<å*ê"°%fAy!rWP¦Iz2S°Æ¯¿fKýøg	¤=@:Üñ¡þ3Elc.í&¬µ°äú&º¦ÈpiE#M)Ñ÷Á£É5mìÛ×ñÀY²ÞåP÷SÊç"Ü&3°¯ó=M*=JÏrþpµ	Ð^5^áÉ>Ò 9Â!ø¶jÍrg4§T¬?$þýÖ¢­þóÊM4®Í5(ÿÎu3^Þ;4a<þçÄ]ÂÉF"MaR¶´·ÓS@1¡0VÆÄ3g_JtGÉï?Æ#ñ9ÑÃ­oå©Ý"@)òçIøe´|(GI¹yeÏÜ|Ó|¨õËA÷ºòâà(«áÊH¡òù+ÿ?wú,)î\`Íàuß®ÈdB·\`s½ñaè5¨|LüÃòX|üL^»AÓe[ôõp?Q\`Ï3e?&B£º)$¡a]¦þÃ\`£vßºmöx²"Qì&«5Ò2ÉOVíåûy;Ô		*z¯í1\`3qÜC{B6ÛNº9®Õ¯ùÇZÅZOÁØÅ;çc<5÷©KO%q±ÝµÉ¾Þ¥iäÒçSðÏAçL¨¸îf_+â»Ûm»7=@²ß¡+É)]±1¡qÓg!Â	ÕÈíµü=@ÇécY¤Eä7÷¡ÌX7§QA|\`72õjÙÔ¼s¶¶­Ç­BFÞÃIc¸k^ñ=}ëò7¸Þö=J:p=Jó^ö)=J¦<=MðD{Hê9Öl©=@Ä o;1ßu­þÝäª=}ÔD»ñ9®ZøÁFêú3ñþ¡âÕÛ±iØqg=}°0¦Nu®þa¬ü£«9ùé=M9i4E1ëp}uÑ4\`ÀçWqP	¡HàcÑôÀ÷S³×úvF7øé;#ý¬0­\`çiÏ!''¨êµøÊá@»³@ÓÚÈ"Dà©çãlFI¬Ëßªëe¼APüpJç\`pa¢E´?¢Mãº"* ýsÃõÆÉ¹.=MFW?)#5ò=J1´Hÿ0|Iõõ\\DL:ëµéÅÍ4f¶ÖÐ2åyôâïXå!scºÓ^¥ t+½?^ÆãÓæMÅúVÔ·gºð"=JuYÆÂ¸£ÇT½íîÐXúÔÏ-î_Oê¶O¦ø pï,ès^ +¾ÜCC¾ ÒXÐü7gA¸=JYlñð4»¸×àÙ,l¡ÃEZÿJ}ýÀ° BYòG\`ÙCÀèÂæõToð5VAfuüF6+©nÔN\`MÕ{÷=}?KÔdÍä÷wÈF{(9ÂÕ³,kBs¾pÎêäucë9 <=M¦û~ä^áäÞþï©Ï|A)'; i uÏÊ~4ì|IMXåû_ìl>É4îÌÜsÌQÏl¬Ñµ.*,äeë·8âð!sê-<Êä=Ml	Ï¶b£½i,q£ÀióÈVd¢Ãà$(¥àqöa8õzoéÚ£Ýãp%eÿ°1Ü÷ÿø&@3ñ×¿ýØýQL÷¦8Àøæ²oy'¹Ðß?òF]Àâ¿fSRà"|¼~öªÑ®L´ê¡-à5å³ãPL²W©sJù4\`6æ¢iÁÑ¶çºfáX=Jg©å&ÊGs¤ÝËf¼n½±¨ÈE^ã§WÉ!U©¬+ú=M¶ãµrbñjÈ#b½Ø®ø~ÖeVzÚ!$Hhæ¨~a{ýXñ·TÓ6èâ¼&ïb£w¡tó÷MF©Ñ)]¡+ ¿'éÖ¡ÀeÃV½vª]ÁJ=}¼j422]Pª:+?ÕÌl¶S@l0.µDJ.ÔK\`o¯JCC@/;tÊ²î,¬¬B4nJéù!£ã½3<$q©È!V(hhõ!8f=Mnrü¹J÷igâû Ùî9t_5Ô6gKqý;9÷fQJIÄÇ«\\!6/õ®t´VnJYSÊÁn¿":Ã(å«SP1b¨Ä}ößÝ=Mª-ö¹BbC8p^È]ÍVûSÐ·MäPhë¨ZÄKVÞÂ·4>×>	}$ñäÁzÙÊ¥ÚºïµÁú{ô«ÇNÄ¼ftÐ¾YxùüÿQ1]}´ÊªÖ?QÇüÒ*VÔÃk:øýuóLB¾ã,NH>K$¸ËÒ½éÉ}A\\(ÚVÌÑ5uµ@)ä0(öëëõK³x4UòmõVX³½Ð!l¾ö¼Oç]R"Òt\`pW>û7ÇñéL Í>ï=@^¨æô¥õ¬ á]"!(Õù,WîÙûÄv$±ÄîþKsOöáÐ×(Ëäq|ëyU"p3×:÷¹b-N§$¬JÅ/Â°?¶ú=@P@tÏ@æ=@5ûækFÍe}6ùÚùkvpQ°ßþ¬áÕYÅA-Dhó4úzùtc =MâçâÈ89+ºB§	¨¡mÐîÑ>fÈÆù ¼à=J-üøú5EÙ(hôÝhíÙXd0·¸â4¤s}î|?Us7O Ö($#PbNo(Î®sÎÉl?\`J°NdyX¡oÐ¥<ã´º±Ëìcûú4c¸ë+¸ÖiëhAHOeã·ÌjQq?ÜÎúªò¡=}®õ$ÆÝ·Dú2b¼Ìß´¯+éÑv«Ï]Ál3§ü¢ÿõàÅ]äE=}vV,<U=M5Id&s¥sDïÁ|ôj¦ö×°o«ù4ÐN´Tp=JäÍ!Äm;ÍLÔ[)®:Èó$=M¤ÕÇáëX-=M4Äãïµ§¥´|#5"ÍÏÄ7§,2Ù0j¤Ï¡Ø×ýàJ*{¯ãr@î¿!£×A(=@lCþVÒëntÜ:$3¢ÂrãMVgC¡^âüÑØÞö]ò¦ç+k0¸´«T§/YÐ|p5Þè6w"ÍÌ|YiÙèá¹ÆÖï°ûýz}°vv]±1ö°\`$î²$ÙØæªý«¨óvaëÒÅíuQ­y\`kÒÈÊ=}Õ©XþN;qe´zïsí³èHhåfÞô·´Í·ÜìpSi_=M|9P7®w=Mþû1Z·¦c]G}¥¶/®:¯á8³ï\\åÃBh§ÀÒA¯\`~q±>?¥LW¥ \\¥|é6«[ßÝ|Øù)Ç=J¼®\`5í{ó,¥jÁJ/ B´îWq´scQºå²ùMÏDüútÜ<Û,áïù¡tHõ.ãÃê"3ý7+/8zV$>Å«=M½GÈ:Ë¤Þ¦ÛÀÒ5/ßr{»WLGBèÍa+ZÌ×¸XÛò&&ÜFÃ¨ßj¸ß§üñ'v ¤>xðZçoßé{¹Ê5\\~%w2£1ÞªoÊé-qv\\»º[·¼QþÈYÁþùr¢úIz|ÛjkÃÌ&²Á]øzõ3w/ h]¿"ÿö¿ç@ÀWäKß_$@Ç±=JÏoX548ÑEp³Ö2×,ýEÉ(»{é*3ÓZKi	¶£îs!4+"£SèIy¦U|º?ÀÂSà çNd<. ¥dÙ<Én×Ê½æJwåÝÐ pÄ:TUTÝ;é|Å§ý=M@5á±ñäEÈ1æm)ÿ§IÔ¬ö 'Þñ(ýÌççûü%ÌÞk­m=JX¿¬àO­ÚëÕ£=MÁBTEmBMäßvoçÛÖ{³}©RÍ±Usrb#Pÿ«ØQÿ3¾Æ¢:ß8ÿÃs¯Ûw²øWUSöf·sgßC´Õ¸RÖ¸°sGaEåT"7ß4$\`Ñ(ò$U\\'Úk\`¡nE³2SÅ3R=}öâºae=Jé:ægCÃ^uå³2ËéNÃ·qm%bËaûØXÖx#²¯kÁ\`2ÔT1wÔMéWÊ¼hoÐ.Fþ\`rB[æÎèÌÓu¯zé;ër´ï¡³¨ò\\¾CH:õj´Ò¢S¾]®aðÒ¸RÇÇ»JÞñÀ ßCcf¼ÄÚ÷LîÅ©Ñücöee§Ue]8wDÎ(þ7õÕ4²S|ÜjÑ*´Õ¨2°Vê!LhpØ_h{1ïlq@â<ßç8Ï¸á?;ý|sDWTÓöoaWÀP}¢wþ±Ã ßôT¢9ß³v0òO©XKInQwDÁþõÐ@HB+¸ÕWöã×@[oöºÐHî]ã«ãÕWMí¾áv§$¹hz^m0²ßýsejpýdq£°t=}¢ül^=}Û#q=}¿7¤ÞE¸æ¼B~3î@}\\ìj/8a/ôk=}<wwú|×@0ß $æUº°ÃåxÂ°åDÀÂ°ÃòßÐ!óölÅ\\Ú=@xÿs²S³t d´ìYÃ_Ôd]ý2ò³¤'~Ë©/éV^¾J(_üOëUáéË9ªÞ¢ÞhµÑÊñs@V5èÝ{6g©²ðFÁ¾°ëä°æ®AQæï&íCêô6â§ÚÏî#õN.0×÷|ØÅ²´¨"ÇQ¼7ëv¿0&<ÓÒ/±DÜóÅæÌÄYUICsb!àÞ3[ÔN¥!÷^ÝñlÊþ\\ö¨=MOùÖ¤¼ô¤O§5ÃPDàWKùûÈPó^óJ=@º~´¢ß6\`v¼ëd\\ú!@ä¼ðO¼cZXürüPbe	cKõ=M½èdú-Êêæk÷ÿô%ýªs»´²y¹ F«AcJ9Ú'bM=Jf$TDë\\¶PòWþ¥fÉõó'·:Ï=}öô2¬.-fp +­nÞ; ÓM&¢ÓpvòÕ¯Vgïd«3yfÑ>k]áãAmå:Ê©6{½=MË©òõÒ>yÖç^xøáÚ"¡mª$Ù ¢¤Ü	×NE¼X½w2Ë±¡õá{X*pXÐñå¶ú4@ùùvRâÿ7TÂ¹Þ£Ý}¬lÂNÙQ;)oyÞcÍõØh5Iù®Î»I!BÇì£Ù	ù¥;'éódPe¦±³â\\uoâ¬Ûùn¬+6õÜÖØv=@´Vç=}>~,KîàøV vËÓÝ½¹I¾È¯³&.LpÿOIù_¢$ó¨<ûË®³ÿÏ-Ã{ðVÄv¬öêLéãXÿÅ[NmoAöZi¼>EDÅjºÃ<)Hg=@mPìÜBêC/kÄ s§E&x>Îi¥ª&"ªEµ\`îéngÒ)F<HýG93ÿ>þÖUí9h=J°³9òj®=}YûïëÒ£Ü70p|uÉ¨|'cÈ\`ÕíÝ½d+×ö¬nM¸Öñ4]z=}Ì ÂcÝèaWk¹¨DÛþjÕæ6w5ºfªÏIVn ÚY6Js¢\`Ó­îE~=J¶î¬Óuá·ÌARo7Ì=M?PûàsÉ­¦cCñVî}Ç=J~Vÿ7r ieÍó«-ÈÒjHÃ2År:ÚúÝÜª¿sè8ýÊ;mó\\IVIá¤[ÁÀú>ê-¦Õ$üá¨§(´$Û}Ü3õ¸¸¼L³ÐtWÔt)z47=Jzø x$=MG=@m)úO~wÿÅ# uàÈ¸ºè§ÙËÿé6ÐÃy\`?øêmz³åßzKã£{ÒñÄ^~º°" Á1=}{é¡ ÖVed·®JëÂ|à$«û,ÿÝÞ¨Eû~am=@ äI\\ç»åÍ/ºa ,ämò¸¯@ÇÛVº±¦¦0q?þFÍB71;oÂjv&W¹ëf×\`FWY¯ÀaæÈÝ9È¶ôãÞäÉ"¥àÁÕÜËLøU_@Mä0'Öí]4þjèçÙàtn¹°Õ½Ä q~%ùðZVÿ!Åj§2çD´´=J\\pÍi¯½º=@D¸ö%õ\`ùÓr@.':¾ÎÞï¼Ú/©­Ç¦ûT\`Èâfá¢Tc©ã]ïAF=MÉ;tôh	8Ks3-F,Ûã±ØöCA®øàêµî²Òþ'#¿ÊoóÐfUVOåO9HN8|@½©ìn¯3ñkÂ%Wöm¦ëµc+|#lÜ@Îø°×î4ÙKh=MïÆìÞ¿~"6¾ó7´ÇNÏ.fÈù+j»#í8ñ_g	Híóeï´)¤ýBñ ìØ¬sMbÂjÌjtÈ}iW­ìFFÛ9ÅïnÇZ³¬¦¿' \\ÏÞ-nºµ	eÕÒpt)¨eY¿Pñ¼üt[À4Au¡~ýî_ÉòôLÀ½ [Ö¿Ø[öÐ¼[vT½~ÎÂ¶ê´ªÏ¶|²£=MñÖwV¤Õ°b!^Ö¯"¬iÚSwÚG6U}¹\`Ö7hÖùìBrVGµÒºnûELjÌß»wµ¹Ç_ÛõÆ=}äp^|¾±ñ<5-y7]KI[mZ­ç¸«Ö>dÌ#Z¾¸×ª.«4O¥»x8Ê®	ñ^ÆË55U>í# «Ü&Ô.¿6ÓOmÀWRÜN]ì¾=@ëÀlÀ$®?ßFÆõX&$ÐC­î¨?©¿-~uæÃüWrN08¢Ò²a/(­ÈÆ=}Ã"o]{Â6¶âÐãófø/ON¢,U*b*_n2R|æû,z¦såsøÖòlîcðáJÈ³!ÿVR¢&¥­WÝº­LX~@b=}"»V¹Åî+T´Z!DVÛ~73´CÏ¢+ÐÝ=J4EXJ=})ÔOhG@ÿvýjÉ]ûC/ôö\\¨®ì°h»9ó3½àÒ³×::_òÕsâP:Jðf<ôCdÝÚúµò5ÐþaùZHç:wmÔN@\`"<-Cüwõ®Ì7d ¸÷lçM>Ánè<7ü6zÂOí¤#¤ÐÆÆÒÕ=M¯L½yr¼:5ÅÍ_¹O&¼}Ñ¸dÎôW<cÙIíîàTJÆÈÂáÝ>5óf$~½¸ÄxôkÅC*R^÷ejü=@°¤ÌM2QâöPÆÛÆ-Ïz·í§Ý-b-;ÂDhw_ÄUü$çÅ0tµÌþ¡sñ¦Ê6êâ°	âôJ@,]Bß¢Vù[RVz[ôDáð|ãøGuj¸øI±¦Æ>ª6¥ÛÚ´ö¾§%"±%ñc®/Û|áJºG#3¸[_ñ\`¡^k56TðÈ<-~ÆÁÞÆðÿxLOÆüy¶À\`_fÙöf&Â"ä­÷öã¤»}óÃLéä_Ì8Ò®d>¾zïªÒ¨CeV>&¯-SrOYßÜSvóñ§ÛÊnd¤½på'bØ#§6lq?U]è¸Õ2arS]=J´MwrTnåÚëà%@ÒEß®d³¥¡_Ði­ôt[c¨é5Í'^/À2¨Î{ðë Ïåæ¿ò7¯E}B%>çºû!å>)~¡Mc=}»÷Ä²¦V9ëÿò%3Zk¸rÀu_x[=Md¿J.þ3{àßµÈaF?+ªQà$/ùÃ}´¢¼8*¿"cwBÕEy,Ý]@¯­7J+nÉ>ä:½¥Åîh¾h+.áÚl¼¿=JÃ)¶b¡gCÏÑßÈw¦ÕZ¡$ôí°²aë+/l	ò*Y§´<ÂÜ|N4>Èº­îfÐ2Á(÷°»â³£ÙôÛ ñÇð2oI"DvÚºWdS°V\\úEØÒcÚ³&æÜbë¨+Áí6®=@o'a#D§¸OýXµ.[¼ü¦3Ý=MT¤¤¡9ë¸\\§»¾·2_ùC	©~QÈþh^éè¿déÅ-î´õRÑ=MÐtÀöÜ¨ÖëÙ«:NDf%,Ät/¼öEÐ¬okìv{ØÂahKt¼%^ÄPÏÝyÂ^=}]§_sÉ=M÷%ðá1ÁÎ=Jà¾%õO(¼½Éµ"Õ"HWÝx6c²/m	~6;×BTzÖc}]¾Á 9º0Äìo=Jµ´ø¯ÂôØXÁb¢Æ-¸/+Z¥6ôp¨§þaËÁðÚ°äÝSç¯S²â¯¸¬Æc¾¥Å£§ÆqÇIÒ±c/ÂÜo¯=}ì¡M!ñ@´ß&vè²?þ#¯¸Û³3BöÏ$ï¼\`e\`i	N=}¥Uóµë^\\gc#OØ»ÖR aqAÓw	¿á%#ïÑnýÈ¥µqÆwâH|P´-z	q%/ËÍ:f{Í"¯AWÎù³è¡ýé+x¿J?×-ì4þOÏñ©¢Ã()»¢¬:-ÓU¢ª^Ä°9©øwX¡qRl2Uò¡;½|Ú=JðÐõ±s*¨¼Ûþø0yÖ"©}[ÂÏu¡=Mrÿ£oG÷YibÁ¬=J¶UÏ:PÛýïæ[flÁE´Ñö±@'b¹íNÅ^-m¬±´â%L#vXlÂóñ}\\XKßûmå©ÛbqVR¾AæAÐì8vWKqu8f¬<®"ñªá=MheÖî()²b:üsIËôh´3©´s÷ó5ÆÀ¡è#Ghñ¹@ôÙq©)%ôZ§¯¢h®J÷H=J÷Zá;jÓÀ¢KOC¨m^ä:à&~ë[É\`ít¬Hx¡UN\`õ¨S~vt¡Á¦¸ö>g³Aªz?ï·Ç  åüoýZBM£ÕTv¼ÄçÆ{b{}Ç=M7 ¢Éãÿn/öü²AãUp7ElôïÁSÓµßóï_s"Ç´ëÅ ¤TJèôèí¤À¿¯S5-jËBém¨k£æhuéøýp îç  ²üÜÎ,_îòÇÿú(<síóHU®÷=MÅ~ËÊüSfzë[DxÏ/âÍ3Û)^¬À¶ÝûaET©1ùLGBúÿªDëþ¹i´EØÊ8uÊcêµ0m!4Á2EÜsEìîab=M}_¹òæ$=MÖ<ÑBN¾±I5\`Ðúj}ö}¿ÙÁb&(ÒK	.½HZ6D¥åì]±;dg2\\MhL¢­;ög¸)T|óN×5\`ªRüÁ=Jê Iû¢ß:>Sp2Zøº¢}¨S&ªÔ¬Ë¹LÀõv b²üdwÜvÜ;¥Í¸ìûq3ðaÀH0º}¯B)ë9;$â³Ýp®½´¤:©#2LÐ}Ò*g÷ ðµ>¦%ç4Îk¤õ=MÌB0Biðîl?&ÖDÔÙb"ÛÑI^2]°/\\iÏzåóþVüWáÉõ·ÁÑ1cHb{óÕc		µÕÛø5¥±¤v¢Ù£Ùâ´´%^sùSg±Ù gñ3©ûÏúRö¬PÇXÅDSØqô÷_ÕéJ7¸ß"!²_ì8¡Ò«êÉ¯¸p\`ßlÓ²V±¨Cò|²4­#«híYRè(ÛJÂ=@þ±óìE¥<QQ&³}ø?füþÌÒ_E ,ý¶¬ÁÉ7l =}ýpÅôå·¯¦*Và®Îd^¿°Ç÷bR\`µc»¦¢¿e@TRKyEâ´1eÅÑ÷Ë¨(É	¨õ=M«çYaáîêl1tAìsË©=}_Ø¡S²´¶öEbn§ºÛ®Y\\Zâ·5v©ò¢:âÐÔR.7=}Gõz;¼ûr·¯ö¦/'Áë´p*w»v¹«rûÖÏSÂ=M&ì\`oëü"ï°\`õÛ<Ú¼Û%=}\\\\óAµ×8¸È¸y9AYMB¹êé#þ¶øá%ÞBÉ]äô)HEié÷Ý#W^?»©¬é¢8IÄ\`ÔñåÜåVó²Ñ&¼ÏÐÉodl«l¹@ÚÞuÿÀÅN#¾é}V>c/ö=}¸ß¸F±%Æxó;¶U½=MÿþÅJ¸÷úçþ&]ó:"°ÓP;îùv0],êX³væfV±"¸dà®TcÈOàüºå*/tçê ¾×za/hxrbjjÐãe¨#C#®ë°îUÆ:¸0¿½+8ÇÎ³ìO|P®ÀºÍÊØ¼@ìÖ5¹2ò®G·&_F­Ë½£ö³¡ÚPåL2íHÒÂÀeOßÖJ+½DöIÆÍÏôa£(=JJýýaUc¥$°§áÿ¿k^QB§~UOÄÕí÷ÓËû#sêøtM~À2.¨WLÝsrgOá"eÀÔFóéíõÍkOWA=@:ÅO,cüúÇEz~Áín´w®§L+m=MáºÄ'Í°úùSPC§['»CõsÇy7Â¨ºn R£Pè=Mÿ½AÒ²¨Òír&-ö\`ÝôkZ°¸Yrp-wºL(h	ÒZHYz%Ü*ó.D¿n*«øIWU8#$Bõ¸\`ü·Þ5NÔû_ôh083?¶-QÝHÆÃûnK!Ç¹éE_°-¹Ù/¨XÐ\\<ÕF3#\\@~#wdx[_º¢®!ø#Õ°éq:K\\+Ñ\\ò_¢©>ªé¡r¾c:Ò¤VL½E¤µY÷_:		»=@)r¦ZÞK=}ØmÖEÇÙÓâ>f	®Í°g6ñu­á ËÙÓ´ÉräðÙ»c2OvÞ©ÊÒ=}=}%úÂ»mc8"×j£¶Ï	ù·rõ¹¾´ºý´lÈy¬CþÀfqö-O¨t{À:RäûËé=}(4qNÜçír2äº£ö¥U2ÅBÞýÙ5bm4uoþmßô=MÁ<Õ"§dK¦gB¶ÈLIÊùÿmä¦²+Ø@<@Sª°^±m¿mí°¤ËM¬zîN°³R¸÷<oTÎ*WBb3òÙasÆj:vÎÇí,9©ó\\o­ÅO.áæ®£ÖFµ=M¼0ñëÞõ¡dkìxw[þI3¾ÆøìÍ×Ô-ÏµlÁí¹ÛL\`ý<~¤c1YNBlüàCS\\DËzÐVwJFÂZÝ65"=JÒ£yÙ¾dîqWÀÜ²ßÊ«¨1õQëÈÏM®Ù¦ýÐy9=Mê/úC¸gU'0MÍUPóå·ý8@ÄP¨¬£R=MªâÃ]îw.îwüHQlËá¬üJì~ÍIóø=JaT|á=}ßA®MËXÂ\\ëªÁËÈG8 ²\`:àÁL¦2%J²¯Q¼dXyÏì ÏÇ×R©ª\`â©Ô AAv=Mæwî"xSösÅ¹øÓDºÍú®Â kíb)ÛZKÔ7­ý«#>Ü½OÏ{Òô¤1^#·e1ßñþWI»'~êAýv<F\\|0vM6ÄVIÃ+N#2Úq#VOIEXR+¥ë¬¹¡ÀPÙþ;oæ·Ah÷8D<Þ\`á9ã&j;=Mh[ë[Ç]F$¾.&Aêã8ug¤ðIsIËýMv'®¸È+tçó§©°ÄÜlyð=Mº©3ýËûÿäÙå8.5JÖÂa¦cÝ½ÈÞ¯rá9[¿0¤ôØ\\ø»+û\`õFÊsËÈürzzÜ¡=@\`~ÿÚõ\`~=MOwujÉ»0("CE¥qÍÿÖ6ÞAFç»%ÄpðjñêýDlè?O>è&VIHÄ=}ÙãW;ñâ@k¥=J°Á'0K2ÕF8+k¤ÆURÙõ=}pÆQêÄÊú³UÀ"mèB+H*z­=}=M|Ö´´û½cÓ^.ÙóÔ±¼.×n:M­vZñz¡±B®ÃæHpÿçBoGÜÓ«8äÐú®ºä2r_ú.ÜÍ¢Ð¡À×Ó]¯;M[*ÈBV¾áÿ@ñ»~ãk36[á6ÉYC K¿	CXÙ<Mò7ÂóGv #·uËJ¹a¸6u£GÆé%aûrLÏ?ÿÙ*¦ñú[=MøÂçÅåÜb¯~¹R»ÕFq¶4Ê¥TZ$ Ú«5ë½íÂ=MÀåMÆøU¾oÎ8°ò2=Jùµ÷Þù57A÷Ié9c=J¹	±ñ]"=M!¤à	1ÏÈi¨©¸Ø"§t"=M!3öIééz5'((ä	IÎ­&(ªØ1=@N¯k@þmÓ?Âb7ÿp­§Q\`_æ½Ü÷òg?½ÿÔÌw{Z$~KA¡=@dÖÒìVð[s»Ã	Ó9üjÕfÊ_b5¡8t~ìÇ'ýe}íÇ¯ÇÈ¨¤ âýÉ³ìÇcGå¼ðOç5Ôdçc4¨eçÏt?ÁÛÄSp¤ñYï¤ñÒÁVíA½$Çvy¤IPÍóÐ%Üè Ì4X0«¢W¼Ì4Ìòïµ¦óµóR!Wx¾gKDí¯,dýWýfäQiÆ$n²Ê[Þ=M\\j8´ÔáÐÝÎÂ ýã¬Â×sFÃWÕÙê"Y·ª?;Ñï0¾;«Þiã÷b[¢ü]ôÊ!¸<·ÇíÐõxJ(¶eB®ðK¯4l ÄBÌA÷ªðÄw»7SûÈÈæ¥õäõã H	U($ýïû¥yº(äñé«PÅb)æØv"#³©BÄX½ªfî|>jÊ»t#dÝ¹²[¥ªåHç=M>ÑUêÑ¥¢ÿÌìm¶a¶~eFñBF,kB¨Z47ÌYeMnÎ*I³5,ã	/en£»gó°ÊÂRÁèà×­q¶eoÑ2nÕ|ª¬C24.ÿ´sõÚpJy6ÁÌ¨¼YV<k¸,Ö_î	ÛTPêAêâ¬=}ìk¦=M¦j¦Ê½¨8õÀ7:°¦³îEHºúà*xcvDæR.ÐÓÔ5åê'^d+®õx\\Ù¯Mò²üï-Ð­OÁQ\` nÿí,î°èÛÛUZÍ1ªÝå´%0÷$.·áJ=}dðw¹Ö¿ü±a;¢}0Ë'úûX>/Åy¥¶Ôì*6µjøÀ~U^cZ8Ë¨lÚ¡E)íàê²àhúÃýàf\\»r³Èd4À{aÐ¨ýJi.dü´å=@Zº=MHj=M·£DnÕ>¢V¤§((j.<ÖXz¬/M=Jù¸ÕÒ4$q(Ý7¹CÒ:ù)°qåcÝ®'Cz'@ÌLZqd}/,Õ26=@Ð,3<Y-/pIPx^^u6à¡ßkëT§ÆÔc9Cºn+ÏQ]ÃDÚyæT° <Àr=@ã?dLÖØb¿ôÖ:sâ.mJ}|Ógïó÷Ö*¶ñYîøHUîh8_ÕÍn¨áÅþ^.dzpá¯ô!Ów\`]»ö<É?»Q $üI¯Þð?of³ÄÚOÐs·ã{BóÆ%µU]£Í­Ø_zOYÑÌBi£{1µ~{>D5Aµ%2Ü*ÂU@EÈ"eyRÒ=@íÃ|\`Lò$Îmºn2-b¾=}$Y@ÁG	 ¢Á,Cff~F37á\\Çtwü_ÄBþV¸´f«äæäàPîôþvwä	â§O7°àÕcÌß¬¶¸y@ÇàµbWNR~ERßI±÷G¨âú; òðjÆ WHCäzÜÎc²E2«ÈÃÈlþþ+¯íOæUºtö<$&Z:OãOYÛöXw]Urc}iÛ[/ÅZÛÍ4oãwäÝoçÙsÂàc¬7.KÒÜ²y×ÝÄº îà½÷<i7¯y50{¹wî¼Q/ÊÊ+W½@;Ä?@JS5¿ËüFùVý^)Øv\\ú^TÝd×ñ[3Ç7ÇÝ}Ã*aüáÃì¦y$Ä³ÀNnð[Ì=@±¯c S=@1ñnÄVÀ°ªs\\4\\tÄ»ËÖÿPQ/P>³<eÁ^;%/eDí-SruÃÜë¾LY³Uö¸Ì BÚru{Às°L%Øý] *ùÂ¶)¨<sÇlþ^ûJ²Â´ñ T8fçkß g	þn¬;=@À-C0ÉVÎ®ì;vÃCòåXÝÍÞïÐ·Øv@»×WöÆé=@ZFúù­-íïãrmU3ÙNó:óæûï¼p7òRâ}g>pÚ©?£°=@:<p$ô´ã4ªÍ¯+ySìÍÃ¿¾jL÷EJûRÐ2mlY£(ºéfý7.I0¾cÎ	+ïú¹4qð}ÀSI39=J=}foz-B/K{êL½áIlÕ¥p·$éò¹µ¥p'AT]p.IôbLM°lmHõ3©¯ÝR%õÕ­Üa®o59÷ìò£ÁÈ¢ý /=JDH­0³þÙdÎ8jB³80Êë+EðF¢Áâ·oZdæç1ôbÝNûþ´>ûÖ²«qªÛ«Ns=JÌVû­ÉP"4@&dÕõbÑî´è:=@/mä|Ãh	=}mj¤ý´û2òÕøÈûÕý8³ý¢E]£y^lñVS[=}s©äQÎBC´ÎÿNFÜ¡r»ó~Ä¦ãæ5ËåÓxÖ@¥âD£ßÌÞ£à=M[Ò@í,.Z@\\Øý>^ì±ö6^ÿîFRwêº-Gû0*^Å²íµæ¿Þ ÕPìe_¯u77í	ùEÀÞ2u\`©­@¿ço4ï·Rÿá²¡Þ¬\`,}ÈÔ]·ó¯ðÒðRØßÑÉÑ£a"ÎK\\Ó°z]_î7»b\\r2îøMBþDLKÞ!A¸ËG\`yÖGoVHÕÉÿ·ïÃþ/~§¶²7ü;P¿AÙk¥³ä+=MÓ¸V=JcFzBúEh¶ã1dì´5egÒNIuä¶¡²¿Y3vE©¶:/}öJJ}Ô÷å1#C^Á÷ný°ÎÖ\\|@A|f)ÒFÐB(ÆºGöÎ_ábhoÇí{!Ú6½bXOîöÿ}=}ãr©©$Ôu@3Ô=MÀûÀYÀ$(\`ñw¼ÚcYÄyµgÿplþ­Ü\`TBsàÄÙ_ìV_©ÞÑ	ßè»À³]W¼³RwÊ['¤zaÉ«8KÑ;ùÉð\`.¦.mýL  4Å×Û¡°=@ÿFo÷oFÀ·Ô:ùã¯ÜrÕèÆT?Äö5k>zÓ=}ÒË(óV!ÿf»2$TisèWÙÝWañn©?XãZòÕÝy7¤@Dèebñ{X{{q¥Þ¨Ðê5/<4ü,÷!Y=J*Â¾s_ÿ·öoÐ¢ßÃ=@øó5±Õ¦óà=@?·dj)¸,[=M×ò¼p°Ð"ñ¬±WÁÖ=@Ñ$"¾@ùO=MþQk=@YD¹ ùJægy?9RëèócúUw@ÅG2ûI=JÛ=J=M-bºÓ+{Þl ýÇæ{Çì6ns|WWö¼v>m}ï¿²6àõLK{Íåð=@1G»F6ËDþß^Ý4Låìæ2@æ^8ßÚOW¿ïÆ.F§ö*;½ÛÞu¦»ÿ6=}ÏzíÄ*±Wðâ«.ùL×Ó¯1øÚD´"A%ï¥=}Õuãk+úrWz.ÇdU¥oÜ :ZÁèlÇ¨ÿo"iãÜqÜ²µ=@XhæÚa{lÅ»°J\\ê	¶¾/A/µüTQ½tXÝÂ¶Vlß6}µÒßo+¶Ê$¶màäEtÚÐÜ±ÚHxü¬KÁGÁKk=}OÐvÞ¢{·È]cuújòis·K]ã'IKËÐ4_IÉ=JîC÷{ÃÞÑCïÑscÂ¿X^¸ú~]M=JsH¿5tl\`î»ÝPê¡n9ÇGWLË@=}3ý\\=}²»èFßÖ·X%:/-êä@Êk¯¯«ûGÈ×§t}¥½üÒ ï)oíFt¥Ùßb8¢]Å1¾ÓÁåsÆ¨öºZÒZuü´+k"\`XU¢r3cßµ½ÆöorYÕ,âWK¡?xäq;aPòqìªRú½=J·ÖÊ#»d=Júk·½H»òØJ>æù!ÊÎ9pJÙæâàÇVøÖ²¡Øâ}\\­é=MÒÇAñoÝ«V(IÕ£[èÌ÷ øa¦£Ý·¬'q×@¹¿a))y)¡±51¥ÖÇk,g¡&->ÚÆ\\Öú¨R¡ §ïé-WkÊnî¬3Ì"°â¯W°/R=}ÅÅeÅÙ8o¯¿HöpËu keä¨Pò_erÓ}\`o-åàÛN=@:$Em~*ÔiT{W{U¶ÌGHäW0Æ¸ºjpª°·jg[y\`jãRJ ÞZÙ¼~\`íìÆ)Jöa¦¹mâe;ßmE¤ìJÚ[z×I¨]s¶VÏ§.Æ\`[²ÿÆ=J²&WgU~¼tÉ¸Õç¤VUÈÐX,û+xåpà,ÿÉ pgä®ë,kqÁK¤²ã´0A^qv@|Æ¸©,èX@|É;à£×·:p2e%¹¯¡±;=MÜdf±íÌdq:ÊÙ¢PÞ¤þI%Ðg°'rFÄºãDÕeà7t$àÈãÇæ·ËP¶½Ò¾r#=@MîÉU}%Ï­^$?ÉÔ9H/j=M d½ØÝ¡^ÿãJáÍÚåvð3iîvAÖ¶QÂÞ³«SÄ=MÝÇöcÚ}rÀ3;Â]ïø1s³÷±&òÑ_dÅ=@\`^ÿwîÊËNÅ¯;á5v3Åù.³õÑò$ó­]x:%Ö#w2ûð>÷ËEcÀökX¦8àÿdjVü=}·I	Y(ýãÙ\`N7ùöäzÜ^¼óñfaÒ_Sß"Ç3aõ\`»ÚÌsQsàøæ°QH°ð©W¬sã=}õÚZ8´Ký­îøv¡ðNÜnHÇt{/GÐÍð6e¡¨m\\_îAtõoýëàmI¯þÜ-7=@³¤#¯ÓÕ5 mæËÂÌÊÀ<dKp=M6jÇ"¬®ñ5f¿4ÚX9¶,LÆî\`¥nø¹Faz¥·ÏÖz®îY§\\)[wk=JnÂ»zyuS{ãxkSêÞ3v¢±f×¿l'ÆÙÊ¾UÜ}x×ý»7Þ8ýÐ/°ùmÅï!d!Æá[ìØÎn?¾«á<>wP1·Ë[ZýPØîNú×{.Õe|ÿ$ '¶É=J®VÖÄrÓÛCIÜs!§Ö\`&r;ß¡ÜâÚCââÖt¼ZÓ¡üÝ5«Q»=Jü=}äË¾Óó´Qø(¾RÁ¤þ5ÐY×qG%m\`þ5ÓäKg}ã¡)O&Ò|¿yOú»P=M[Õ\`f=}ÑïÁHØ¤ÅÓn³½ÂVº³½£ßìºNÏgÚ=MÒÇAñowÆ+£nÆûâìT}á¢©2iNOQ\\&?ÖµYÞäåç¦K{®lwè*yÓßÓ0^E*-¢*.í-bÛ0¾×+×ZL8þõ±ÊV2áM8Ä\\"'Ä¯3:Mý'wÂ(×e(£õ|oZôÿÏÿXWõV!¹«»ùfÝÞtHdáØødßOª¨ì¬Fî³wÐ"hª&¶Lb2Ùõ¯s¯Ðßc	3Ø6%¯*±®ÞÙ[ò­±Ü*ýû^N£uVºqXC¢påòì$aUv­´­ñJæwúÞµ$!Ö© ¾z'w¶ÇªºrGo/KætÀðÆ­ÍpvnÆêtÿÐ6O²L³ÅqDÞad] Ð¼¯ä×LE·«í(Aà0ð_Húã¨ñkd-ÀZWÒ°O=M¼	_ö4sGmï­­ºxÑ=MÇRPÏøvê=@Ü÷õ<ôZ¯ûø(?B÷3Zu;\\>Ïès=MÄ&Àâ=}³ÿôÞ£=@vE&Ì·³º4z§Ð@Í8Ê½Ý¯{¦ÃcwÅÂ=}&Ø$J¦^WÍÛvåìrÚ.Â)ÄCÐÂóÒQ©ÅÎ(eô¼äÁÏY,ÃÞCU ¼v¾X°Óvn¼Ãx«)7ÌF°tKÁËpd@r\\ ¬¾3í=JCeµß±éí g\\¯D¿ØÈvèÖUPÝXõýãutã½Jä2ç8>C×}Fx{&Y®ô-Ùë«î«=}õL×ØðÍNîØ,£USÁÝýµ}!-rµ/ÿ#ÌÿÃÅG¦'¦&Oÿ&	viTÂñºg%Xù]\`ib	&fÔçæ¢	^û=MÃCª>Ä±aC3mo¿Úü|ÐàÇ¤Ïµ´Òg=M)ÆÙØïâÕa(&"é]þÞ! ðï´ïg.4¢âÙL/ÕÔw(Ç÷Ñ?B.¦ÃíØõ¯¨{U:Ð{ç³ÐÿLò4¢ K Ähx:+|$ChÕ¯-?©2ðRó9à_BÜsÖÆÐ%Êcð¦ífÎôn|G6N¥=M 1èeèLH9ð^:/h{=}µÍG8ËøüãõA'mðNí³u¶x5Úè¹´ø*cþ2@^µÚaçKúwIë³^¨HÐ!^êò®stPÊø:!ý÷R³f;Óà=Ml}ß{L ÔÀÇ'kÕFñOÛÔLKS]±=MÀ¹WeÅtº³F)dáÎÙÌ3%:9f(ûLßÉw4½«:Õæ¼=JWÁøk]æ¨Ô/a­¡6s^=M$\\}jëx_2*\\½ùÊêÜUüÖ;2Jy×;\\§d¯B®?PÙxÝ¤¾Ù³Ò¢É²dwíÇ5ÔÄý­$îWõ=J\`ÀÖ|=J½®à<lÌzK»=@ÿLªZ=@},Û¨G!{ú¸Ï	dÃûG\\.[xøÇ®µÁhÉ³²+±¾|úáûý=J µ^ÎyëVîC&\\Î6fÌ) :#ÛÞ°Å.µ¿,#G?iÇH?Ák­NÃªÿ£âv³iD3¿ª¡¾d ®µA{ñÓu¤sòth®m¶ÐèØáÙÚæg¦¢Ë4i£Üñ=JÈP?s}@2"Ý<®Å#u´ubti2ªs"H­¹Ï\`vÌ\`s»¾ÿ3\\oÛ4±q¡÷=Jê¢U÷ýé ;	dM=@\`î÷¶Â¶ðpP­Ù»ðEÕûöW{ó\\Ë·Dþ:º)è8i¥û'\`GsCÑH£Ü÷øÞMèy­s÷r@c)=@V·ÊÌl~o´zï·ñ²yÜ¤a\\¶»2_ió*´iØ73ëÎÿ<;1KLgjÝVä3Rì@Y·oÁReXq! ÁÄÛ­!îYzövèÄ0´>-¸PzP'Ð¹Ù1:àF[@arÌ-=M¯ÒnÁu³/þ­QèÎÇ¢kfycXaåqÑ	ÛÆÿ}ÇðAÌd7eÅ{hÞz ¹puIÙ/cè|=JúlC,ªìäÐcYÌúDß­ï@RºRmÏ­û>ß²d%:ù3!%ÄD¡F^÷~8øQ°æì;0QuýöðÄk,î¹ùñõ+íÒwÐPöGÁOÿDC×YÐCõéÏçðY]±»Ù±ç=@»$.rË$<#&×Ë¯r&³þ¹Ç²C	Ç.êUÔÙæ:]ÏßväÝ§vwÇ3ÿ2¶ÊÒíªmÁþ¤¹h*W àm«jýàÓýfhä·¨fbò½ÌP8ö±ì3â=Jlô7Õô>ìÖ?öâ¯ÂQ´·¶õþ=}}ÌD-µ@!úÌÈºâ"4²ÃáyµÙÒÆdoNXã¦Gø¦ºâÈõoäêåAµî£=@BFW>0´ÊWRV m.fµ-ôjÍp?QÚ\`¹Õ9/¼ùl«^ïE2J³jÅëËÄéBÉRâB sô4æU\\óÜ\`«UZí{[¥5xa©ÃÊj\`·%=M=@=@rÆØS=J.K	°~°³©óÑaæR=}]ö;$/ÕàúÚ½V@\\c6]ÁY»Wãl·D«&¿1µêPÂò\\CùS½@o§>6±éÍ\\ÂCñ/|êÖöOÈ"þ+øª¸r|EØá.ÏA:/÷îª<Z°oµsUõWPBIÒô¡>w1óÛ?âi¼@­¾ÂºÒze,u÷[4wûKédv«M\\Æ/oºuÀ8õj;PoÒdÞRYÆ6kSLvÔ8Ý4ÑuÂ­/W­¯«¦IO°ñ¬ÀÄ=}Q_A=J¢ó R	Q¢SÂ²)4yWW´mÚ·}YPÍ:ºaÎ*PlLU°uÔàPpWÍ=@Sb+«õÌ*JYD-zÞTÓAÆ0áñá éV²µ=JöÄÓ+ UIÊÌyNÚ-JM=@1\`V?zÌTâÓóÀ¼^ti)É£Ò:¬Hiì%{_å]'Dú5ê©b@,S-h@,Í\\	¿ýPø41ÞÊÎ-ýkIóB©iÞAd+xÖÔN +Ùé\`e/GH.VxørvQÐ@Ä<LÃêg^öºáÌïbo°l×ÁE­qêRcu Ûüã!àb>Uß<-águá6dFMmÃb~s³¡uõ´Ð+Ü\`/û¡ñ³ãÊh¾sbI¾3¨H-ªIÖq2ÈÁ!Q¸#{Â· eBi2p8qGíSçbÆhîËè)ìíkíÃÆÀé«3JZjeéyýªÔjùà=}¿Ù³¤xi'CP~g~JõÁÓ­V¥º_Ï¹ÀA~8Íù:ëy=@Eýq=JDØ®úTkµ¼íTË0,ÞÈAÍªíà/,,d³¹ÜôÊð8­UÞâM@S|^XÄÍqÁs$º/Òç»¸PÔtO«£D­5ûJp2?Z#J­ùô±®öÂ\`O§=}sÝÌZv2Yôý@¬ÿðîÁ[ExtSèy§~®=M%º ¦InPÊö?1ÔqÈ©cÅ{ùõ£RÆ~7<Ï²Ô8Yvq^§eb\\ó=J¨°Óªe=Jác$g_È½Ô¨dîüJÊ(SQ£F­WûÊ,Å¡6L5í0PnßÿWÛ¾Â=}ýÌX.-±Ã/Ú.rÌ#ÎåËÃâ$³ÑA\`¬17ÉZt§åMFXÜÕw«»³"­Y3û,[a×;¾¾	ð*kg»&ú5U/nÁÓÂ=}Ä4 >dFÒhLt°é9YaÐY=Mà»¬¸®\\Ëµ·Ö¸07ù]ÍÇÄJÔ?Á*½t=J¨=MÝ£Ijë7çû[z#¾QxvÀ®8VS{C'8À±Ho*Z,/äÜi&ÈbBê·\`=}ZHÎ«£[86¦©P~Ð8±QbßÌÆÖ1ë-÷_°Òåãï×ú°½VX²"Ò'­å¶#°g°Î¦Nm\\Æã¥¨$ØúâCØ{YXîÞíd¸m6]ÖXîÑpC=M'6£5½-{.¥ëÏ=Jü.ü¤t#Üg´×¦AxµY%èZC+=}(Ä½¯ë¥3'l2ÊÙW	aóI]ôxâH^ê>Ùú­ïÒæcwF}.4ÃLþZ]Ü\`Ð"Hø x]sç;ïù$=Jf¬¥·ö+«YëH9HHQxú ª§ôËí&+Ðõ«DÜi¿~Z(¤\\Hz¸³7¸õÔQÄ=Mþöf¬±ïw¾¯±ñÊ]A¬ç9Ì S¨á°¸=} zA#-Z¸¿<ëY\\éRDØçÚÈ/±G)èÀïHLÁ¦¿ÈYþFütgÃ®ë(: s&&û)£ø=}éWï¨ÀiC<iç& Ñx<YácufyAEá$Í¹Áéå9 V<a¤ÉV;äDÉ_l-ì¸w½hùMØUÏÊ+uD¡EPè¼øãºZMº°|JçõÖá7dñËv¢KAG=J(1N5ÉCê×øÞ1hÉd ¬ã¿ûï)µ=MàÖ	HJÂ&ÚPlªt«§ÝVM#ÞXÒ]b®Dòd¬cöyÖuÓAÓcÊÒeÒ¹÷r{?9Á´;FW×¹Ü=}tïfx¿çé?2¾ô°¢ªÚÖ£Ê,ãÛXéíàå¬Zè×ÏÛ§YéæÀ'\\\\L¤âÕýRÊËcòøü|½½ÀÏ|[KÊíÏ5Øuu¿«¿äO!ÜuOH=M\\x~ñ×¥\`>Àï=M	q>rQ¤52DCÍcÅMÍãRk¹75,Í?¯jµü^òZüøì#m|d@9óõ°µIÃ7\\ãÔSk7®¶n8>Óc(À¦Ã%Ëa>NW½1çóëZÏúÉ?fuëtçò°TéØâváNr"SI¥G2à ÝP½ÕÈ8r1èO:ÿ=Jÿ=}*r=}ÕÔâ§¼vÅ½Ô@ zÿÊ6z½K´Iø~Ùçbè/,°9Ýðz.\\P[kø4^ÊÖ3ÅwÕ|H}S@0JO7ÕbAÍÐ¨·Z: ÐQ^ej­;]{.¢éãAÉàÇöýÒÊd£4i|ÿ§Îôz;ZºJpe|Wí?s¼ªrIÞ¥·?¬s£ÛØV¼Fî<BÖA*£Ý6Ï.üCHå\\9°EÁ=MyÈo ßÒúuÍµôd8Û0=@"?sh¡ØYDÝwåè|!fm©õ(±ô¯%)Î¡Pùc,ðò}OöYÁ({­?É7'nVYéá°ÉÁ'ççéá°IéÖjHFR4JÁ=Mµ)û,¡iåïXïyÉ!½AVYy¶²õRzüív$3S=M³ýÄÁ¼±'e9«'ÿ%Ä&æ%e=JBÔ×Å>KíÛô©¨Ô´Ä@_Xãlûï² ¡h(!Õ©¡sÞRMÚ"ËYiÔò'yaOA4À+ÎþÛ8{ÛhY¾½D¶ÑÓç½SÑ9Ç%;9©ýîg§%×hèS=Móo3oöv´Âc£;=@D©8ØA#wÓ»jÙfùZQ-3 ·¥Ô¯çÛÅÿ¸U´ÍØS­À_w=@³Pw¤iøb½±w8t«Y×AEàCï9¦¦ëkñføÞØüöÐs0#J5QÌÌnSÓlPW±Ö§8ÚÜ´µLÜYOâóÔÀmIâQió¾ZØâd	úaà4IiÙ>%¬ë{ÖÁH´Á Þ=}t.Ó ¯(¹HÀ©ÈÎºÁXËDrÐ½ú/ÍÕÏ´óéÖæ	¼\\ \`hõ.ð¸Qy,@N©=@øØ]¹UèÞZð"|¶X4¡üq¨¨¼)L0Kã9'ðéèÒ\\%]¹	èk ô×ÅG·¿´È!E0%?Mñm]g>E¥xP^ßVÒÝ@Ö×MÞ+¥h{Kú@ndTï!=}¡ÔÔJoSOmï¯uba3=@«<Å¶G;àg*çvxùP#xÐÊ3Þ(d./zí/+£¼?PlüÇ«â8ÊösH9Ø/¼G[Ml¢L×;¸¶M3QPrµò>øR3±>AÍ-43¼z×_.VôâQ.bû9Ò>õ: ;N(¨)¢\`;Nf Ø¾LèÈïÓ	.=MÚþÐÓoõ#·ÅÇ8Ï|[J.-U³áFü¼­ÝÝ¦Écq{]z*Ù{oùà°¾8V"»µ©¬c¬Rk%÷Jº[vz1æ>øÜ¨Èû,Óáñzá£¡+< gfY/tæm¥K³[mÝðYk^øx¶ö.Z8Îx.ÛcfämîkfÚa55½²ô2ãçGÇVÔµñûàbûo=}Ú´7vlM£bL³rW8Ó¯~%ªÐ÷S*ßjÎ½£ð/ñMt7Û"2löUÍRzÅNK½Î&è¡8&L¢èÚCÉ¢7KÇå¡=Jï%ôÉÂ\\HüÑ¹ÞQ9&ñKgè=JIBâ ë'w9G&àµY&§¼ÞÆµÑl$§ðØö1hDôÅi åÉ¢=}å¯¢!í¹©¥øÑ 3¯1·G¥ðiWç{fa &i©E½!C¦mm¨&KçÏbâM	"cQ¯gñ8¤Y	"aÍKÇ¥}Á8äw¼¨=J¾&=MIÉ¤£¼(Ð=}aÙcm¤^â	÷5éåc£è=Jªàç¡"ÈºÔÛm=M-È(ÙÎ&ìá=@ÑÉ8áøC¥m¹	Ý"¨éëw)è(ÈÓsäå¹(ü£¥®¢	ËE g$ªºf¡e¡è=@;Kcýeè\\=MÃá®³ÿë©ã=JÚu%r	àAØ&Õ%&¼)EiÃ%)vr¹_À¥Sè^£(åwåÛúM®)¨­ù÷&¡EèAü	HDfúv	!ñs§ He$­÷D<üñnwÑv%üaÉtèIÂ	é#ïìfç iåÊ&¸ÓKçÏy%¦'â!2ï©Bb1¡bêº¸6¨¡ùâ^ÎWid ¸IG  º(H­§I£ó-MKç#ªÛçõÙ¦¨¨ô)'hÉÎA6ÀDfÓK§ÿkeaEü©'ë¡fÑXâWÎaè%E¹Äãó!y$9÷¦	s£]05ya§ ùOÉh"$q£1¨E)íÐ)"ã	'ØKçÏùç¹¦ü¯K§­\\$íËºdüg¥®ºhÛf'h±l$­0Ù(=@ìY©\\ÎÍØëù§Y(§r¹a8&QyB#rÆeàÙ¥mrÉ^¶Ñ)=MÐ»½$aZäêë¨ÄÎIHâÈá©U¹¯Ä#I¤ä$Í)FüñvI'\`fÉ]"ßX {rÉ^Ò¢ï¨K§î1Ig$W3­8De"¹¦ #ld¡ê!ÉÄ%ûKçãÂ¡'#éØ8û8%äg)%&5m¤æ^æ¦°©tôI%=JñXã¨õðºýhâÍ=@¤rÙU6¨Ñ'Å1m$¾ð\`¡	óôØ·	ý	"nBéØÛWñÈ'êÏ]m¤u£ó!i¡	/óÀÛ§\`¥!a@±¸ÛYf¡ô;ñ±1]"Í÷%Ó9¯=@aÉ¥yGûðßI#¦¢è=@­áçWµÙ6¹0=@Ø#'YÌ½­w)òÇi4ê¾£l#ëºh«mè¸¡v¥dÎ^¸dÙò/wé5C¦¸£ñ°À©Ðç#ý%®)X­ïU&G±P1Yâùé£rHFâ&§Ü£7($mÍK§Ä=}áÇ&øY®"]-	!(Ùé@üà7ëie¥Kg$Å«íéÇ©äild$íÐÅDé)Ñ¹°så¶góÓ%§#ºÈd§Õ¸¦ÒóúëqÙ&íþOÙ4©f"yxiéml$í­	!¹§vrYC%qh^_I2MÅ8e$ iél$ÐÛ©!	¨K§üýÅHÿ?)r¨=JeyeÃEl¤=@ë 9©ëüI±[©BÂ¤ ù?©bÎA)Ê%£Ü!ãºH§}¦õd©I=@Å¡íò« 2=@QÀiÚ±1±-8)eH=}üÉì¨	9°Ç-1§ÜYÆDüÅÈE"þêÆìçA®³iã_h=MÕmä×f=@ý59"rC	Þ ùùåifg$õô½å_	ìmÉN Ï³£ü!\`ç'ãº(©§1~eT2oëØMt>V²ôÊÒÌ¥¶8\\J,-|/uD_DVÛÁBµ·{>¥³_ÛL Dô¡ç\`ø©øã!h))ÉQçéÿéßèàô^¾¼åðåÿ0³A¡Þ¶ôÙÉ4&¸ª+«Ôr¦øÍªMeµ~gµiÂ\\®#Ø}M³%Æ9²\\è²îÁÜ%üö¹OhPÁ#ª¬#v<NÊþÕùÒb³\\¢Ù´Ù¦ ²îA	ucciÓnb×è+±°éÞöº"jpieNËp	Æ>ÉdI×á0æI)Päõ@³I¤Å\\[$½~³Ñ2@£ð[³6¥þÓæîyèw£ v	r&%ü°?Õ]¤X©Nå£V¹yØ9©ÑûêïHh£Ér¨¤<úçå=Ms{³=MáªaÖç~xSø°¦Í}W<aÈÑï#sÆ$È!I_¾"ÿå+(è×éÈ?ÌÏ©:úmäsñðº»=@ÙíÜ³%\`>aVæîù¤B@Æ_ ×¦Eõ}P%éÃRVg¡ÅWño6U¹ðhè~÷4E¶U$¤¤³úMùÂÕeO¨Ý¼Ë{C¹ÿ8sÉùÜ¥I	OÈ¦MêáëY¿¢'*)5f¾"^Çÿ)[¥r¦õ}lñÝ§Ô]ç77Ößõ{­ü±w_UET@GÞNçÜîÁ^[PÃ1%u&zsµ¥Û{ô1uQÁK´·×©UoWi(Ø	ÁrÆ ù£}¾îy@[>äàë«<):%ïß¶[<yWcgñ³ÉYÛùR)ël³)Â~"îß<IÓ¥ó;Þ ¥C¾Dz"¨³QAàòïÁÑß$50c¯¿)Pm$SQÔ0Ø)Åî~Üâ¶áÞb'pÍù$½èvTÚ&!±ÿµÓ¢pÆãÀ=MTò"XÀO!ÿWïí\`/r&c­%EË÷O¸õS¯@÷ãé½îù%à¹éÜîav±6=@þ×çÜÉî¥7Ã³Tä·úµ)£ÅÂIPu&huéü7sfèÛoé"÷uUOØá]ö\\)à¥î@³Q1DÈØTÄÇÐ¹,Øg¦ÎîAAáÖï?³%âC¸¯¾ó²%wUÄP9)hy³8ÚF»!$Ø°òVø±Ä^Û¡©{ç´Õ¢Uc?79à¹Ó)àèî\`Ê.Yå:W)õ>¿7Éâ­ïCI0¿¢ÜÍï×ðÎÂ«<éjêÈWuðtæ«áOù$CØ÷¾âhéK(öãñuOÐÆoáW(Ú7££7f'¨ãâíµÔSèW7±|$±ãEYufØ´Åßq¤iúYóçÊ)ða§O7¥¦­q.çºáÝ¢¯Éû¢Åé'åíOì[kÑô_O¨÷|%ÁùÙa¾¢=MÀu]¥F=@+÷6{oÏñ¼"¹¿6fá"_·¿¢áJmë§Yã9Á"yuëGÑÞÞÚä§U	Ce^uùå	è¾­çUÜmuüÌ³IÝþÉd¡£³ùâÐ>¥q7t¸fâÖ$|ï7X!	¨÷Ïþa0Ññ¥csFd­ñäi8ÙN½xÀWÈOõÐúquûÞ_Å^¼¢'¾á}}\\áá½¢Y9õDGq#±tfÝÉå­¥$s\\¦õÝGq#1Åãí<I{ðIQëÁ@Õë¹ÿ£ûä]&=JQ¹½(ïÆ¨=}'±l=}~edÎ×y&mçÞÿYX|øç~¨öû¤û¬F¯RÀô~ÉíÑ»bSLð=}¼3µ3Ó&z#hy1i»qÂ\\pEx¾OôCkæþæH)¤(Ê§\\iôaw'=M&kTeþÜ=}}/l3s%©ÿ0ßÖÊ§¿GÐ@$!Ôéð	]QI°	å¤2?3>Óö (jÎcfüFÃb2¿#+ÉXh-ýÏÜyAh¥%6Ö]zùJÎÔØsØ3ZE÷L1l¬lúKÒSÄ±^kõÊëÒ49|ÞQl=}wËÛ{PÝhfBüåpqû±qpqqÄMs$+»³§BÂÎI´¹_OZXh\`p.½ãåZ§éN^EÐa¶8¹×Õ¹aå(KÖ©æhP\`¶ÿ'KLÒe§æ[ûN4$m?Ì;Ë­<w3©8ÄÈ?ØÀ>÷4Ãª;·wc:_¢æóÎ9¹·¹[Ptü=}L1USL=}<nYâ°ÓM÷$úòn<¾´IECYÜ¡ÅÀwÖ9]oE¿8³ÖÑ¹]°¯³Ì.ÐÏ5µ?Kd/Ó§FØc³Õ=@¼o=}%Â¶Ã³Ð³ÐÚV|MöÛÌB»à\\þþÂ¾üñ°ßçpùwmá5èmå=JÊW­mÄ  ,þ¨&Auz¤åÇ[V\\	~újD§~79"±Ëw¼âh»ûÐiÑõB°Ý®è¡IÍc¬­MbWf\\hK{ûÔw}§©}¦lÖã´ÈG´ÙÌZ´§½¢ÍÃ6ÆºÓ3³Pv'éR	RqOË§~ÆSv¶\`]nÄ=M¼<ÕsDïPo½}v¤ÍèÕ\`¤|¶BY<²y\\!\`P´XÐ§¼cöBirÉBuè5]¯D÷$òÂò¬÷ðzo4·ûû¼{=}ÜLððpOZm¾ÒØPwN±Oz%æ»û¸w~PhPüü5#ùxEG´ZpÕMWäòåÃôh-§&Í1SMÛ3Ðn jp×ÄaØû	É¶ò{gåpIv^wÚÖ=J>I¬Ýf¶'·»ûNûÓÐ5u|B»ü_ò%9ÞùTw.Ê´hs»÷ Ðb8ÌìyênûØ$Ú°O²IN|ÜÍûÝÌNÃÍ.³§vFâ²rÝBç±Î=M\`îÃ¶{¬$+Û!nàëîæ»3Sß8ó[L?ÜÌú7së,þ©P¿bmÒòP¶»g¾BGÏ!ú>v_#-ÍÜ"Öü?CCF]Õ}LOjt7È^¢J§¬ó>Oüñzs»w',¾®Þ¼Æ£ív3»;ÌÀß{?l'°o°±½ÏnÝ¢XÖnÎRÆpoÿÛVv(Ó%yÊï?Á0(.EæÞ±Ä> |ÝÃì¨tôGY±ÐQ_	¯£ãÇ­÷2µ4*ÍÇ¦®Ú	£3/oüÀqÂöÐ"ò'Ó~ÁÑFW Ø§¬zÀ=JlQþJþPB2w2K® ®Ø®H®zlNK°ºvÂxjZPOðÿ6ÍWZïMÜ°éIL´uW£ûÌß¬D·m1Ò=J«³2´x¶· ­[ú	ùÙP¬ßlr:Lx\\ù(»tÔs£òLÜln=@ÝÃ v:þ±Üý2ó®®cË1^b´}]É$(+hr¢YÇ®á®a<µ-ä®Á®A®®Ñ®ñ®q®±®1®å®®E®®ìoìcìCì3ì{ì+ìHl4U-Wc;8d<^RK³:m2QNPÞK^Q²ÙD.:&2h®ô.a¬5ËfËVË¶.ÖQ~N¢ô(®p®=@®H.]NEìdìks½=Jötpy²OöOQfQâ»å=}Ð=}¸<\\Zuìk¬mäÃ®®6¬1#äI1Ká7ú¼Z½»zÀvslòJ¾N±:p:=@:x;H=}SAÏ3Ø.¡¬ÈJ¦A¶esvZ;ô;¸ÜÆ¬¿¹Oª:ïä¹ÚWÏ2gðC! p³ÛätòJÆP}QmöNm®»Cæò6áó2ó2·É×!ò2=MÈ×?ò6©á¼C\\ò63!×%¥üe\\ïçÅöíx©Wo¢¾ß(ïgxPã¢Ãf¢³=Mj"´6ÍMöâê3O3¸.ìJì§ì¢ðáöaº#ùÜÆÚÕÕ1õ g	 \\AàÍDþªÅêàdÚ1rõ8ëÑÎã/%¨5ú8=J{?ç- xØ¸zÄ=}Øëªu¸¡e¸Êi¦.Züö¨x)8	¸¾<ñ0Ú´öÈ²ö¿ªý¤¸yª×¯Åsê¾MF½}êî)Ú=J<gTËqWK]?§5Ý\\Vá8 dòÙmßìdTÔí¥G¿þCG8Àý]£÷B{±h¿¢vRôcý÷'ÒåðaËèC«=}ð/B=Jé>\\ó_\\\\,7¼§¶¤ã4Qÿ7­fóÒ«jÁùÃº)W¡Ii AKºùvçåøþEå¢A:òlpÔ}~a©oF{ÞÂ¢ücAq³¼ãt«çWb8 ouªþM¢=JJFÆnàimú\`ðUa©^mkCMý¯yÃÔiÃ£Ùcõb×æÃ±Ãx^ ù:Þ·É9íÄå¦¨õ#ÙDÎ(®Ýà"÷­a¾÷QÝïHÕGpËÝ­Xý+ä!#Ë¥*äñ/Ëå2äþìFÌ)S#T9vyÄ(ã(ø)éiéTÿÉø)¡&))¢ËÞÞ"©1))&Ç)'¡&©Á(#¡¿ê)?ûð)(Æ'Ó&)ý=M)é)Æ%ÏB­)#)ýñaÑè=}©=M)BYôyyØcµßæªh)µÉm;XªUâôì[A¢"V(íÂí¨eqCê¿ZhóY2Õ Wµ]$&ÕçÀ¯¹W s^N¨Ñ=}Jü´åÂÝ;U¶wXñÚTÒ³jÞjaÂ[@uÚ9éç½³Ø«"l8©àà  #AXÌ¶µéÀ5oOÂý±Y~=Må*;ÒÅM\\kq¡$¹ß£Ëd,â*/§ã}'W \`´¼þPA X=M{ÿù¹ßjfèø$~û7=@Ý¯µ=}ÛÉÌ÷¹ãKÆõ_	Y£ÌÓdaèjÄoÅlcáÔ(·e®Á$Âà"+!ÙÒUM[SAY6íÍÄ-J;½Û4±µ½Q#ÂÁ~Ó®ÛÓOôÔ=@6yÕ÷¹güµß×ì?|\`óKEúÛ¾u¶$Ñµñ¢¸¯ÝØÏL=}W÷{ÅÍS=@AÎO±ÕW.ûfMÚ­'ù{½ÞÓíl)_cÅ»oÅc¹éÐiÍ\`·É~Ø¹ðBÈör¢¿WýÁ#H¹©Øäã,/\\¨Ñþ=M	ÊáQø§"Z¡^£"f]{¡¡!ÅSOêøxZ³\\¿Â¸öÕBÛpS=@T¯à@@uÖ=@3oL¦úÿQ½aá-!÷÷5<Äøø0 ôYé×MÅùJéççË& ÚÒWí5[Æ+Ú÷òü\`i¯íÄãdG»e¡f£î©V>Ê(Ãéó¦yy&Ðô%£iSfó·b£yÀ!ì£[bøwdX¹O#²=}[côðÈJ±H¬¦A7<¡ûgXþÓâµ<¡Û½R/Ð=MãüX\`îóñå¤¡º¡Oiteî0ËbÎý0kMêKº'ï8©³ç} Û´ÚÏz&ÈÙ?!Ünâ52|"y;oÔÊ½VÎ&ÝérÐ5t¨3±×kaÖ¡Ö!ÖyâGÐP×«´þîèÖ=@Ì8NëoëFãÃSà´ÜU<éeN¥À{7Òòu»Wq×f³0BMtzÞ\`þ/mg­	RÏnZ=MeÊgÙß"C;tîøÚ\\þ°à³®pÒKå²WÎ¨á­¢sUS¹·Êm·Êñ{S}0¨}ü¤ÏMWvZMÈoµ¿Ñ F \`ÿnMOÞ7~sàsÞRr3÷í¸§%tàwÞ±	äyãò Ò§nsÙß9a@ùÛ¡HÜ¡Þà.Í@ý´ê@²ZûLûHQ/ÕxMÏ±®QÐ¸BIû4ûPßVûÈÌ6û ûÂyEÙû=@ìgöwú1t9³>-:ë>'ûsÉnå~£tnQ°ÅzÅ~5f+w¾ûÉçC=MxeÏû?pË³RkzR$ÿËÝ[´=M»Ü£¹âIeÈ"â!ÇN=@u»\`:ç ['£N'LÖk@¡¹±B7_ñÑ#§ÆUtòY=@¹Óy|ô;Þ5ôã¿µ¸ÜÏÇJ$jÏE) «=JÐ gÈJ¤jÍÜb%lÎ}$súMðbÅM5üâ{bUc/ïÝPGTlÒ4ÍtãÔô·?¾&¬-~=M>,É{ÒÎú	Ë!=MHZSQ|Ø¸§q|ÔàKÈ'JWÈoÙd ¬ËwÜ%Ñ[ëÀÞ4TmÝÐ{r«=J-VÆÊ­\`K+¿BLN{ÿz¬¤ká9_w-ª¹¾-Kµßbû-"õªÃ ÃØÃ{ÃÅ\\=@ÚpÑz@¸t:MÕôÎ	%+9èqòz(GQ²ëS5]õ®âñr¶Ä)W¸ý--V|èËáß³Ôãéì°FM&ª¯tév2$´Ù>LÛr{Iïu5GYÚåóâ/âÊîçêG	Ñ$µ%;$	ùB}ÉZ¯ï-_f÷c4óhh¶YÚ3G°¦^³h®c­=JÀ_h=@Hy¹gO"Â"8|Î¹ï:âËÞ'dÉÕv¶ÿ8Ü§?gB5°Tc8Ì?ÛsPcV;w²Z=J<qn÷]B,°ÉpÏ&×¦(Æ1Fn6p=@Ùî¦°}tv+Æä³'^óócºÿD¯É¢7Ê±Rì Ìå	¬3R­u/f0ì^=M×Ó®÷ÆÿÒ_ÖêJ$[Pì¢øNþþ¿³WqNÙõ2-[xvh9ÊT»á^\`RcF[9ÐàÕXÀ<´æ¤ûiïÒÍ4	ScË9çuß/ûFUË¡×|¤ÿþÈÂË®5c ZÄ©þ3Ü_O[3áÑÉß\`Í)T¤{ÿw:ðÝòR¤ÒÒU^¸Òw7zÆle|Ó¹Íéß Ð=}1¡/~5Z¼ù Æ; ô¨àñKÖ­%®¸:üÙÀS^ªº(ttø°þ­ï>Jôþà/>yè©¦¨?ó¾ãJwt(Pï4\`ú´qö»sAÜø­I¾¡_gfvnóA|ß(¶	vd=@=}©uA-tçú2µÜ¢hô&lÃ%Hp:©¯totåÿDÕ®l4×Äµ%~øV¢ê25Îþ9Q 1	õ»il#A!5Â¬=@ôý2ó©póùz^ç2å·6¥tZMl®f×	Ú»ú-|WÞ«ÿD¬Åvfô7n¶<)U°\\¡oq&u¶ü_hAs£HìYfäQÕÑ±Jm<Ù3R%và&5ÓiÇÏyçÁ:ôhÏ*K	%[[õ Ölu°m¾¼pr#o¬-ÒKþHB¶¿îR|êl?ªíú^Dáz98R^ËhóS)R)Å¾ÂÆË5óêpo1¾-q-ßfKlY6~·=M{ÀÏWøÀ#¹Ï§[wKÎ¼d4wUDïÈX"<q×ygÏ9]­®¼¾_pr à!±Ð=}þ9ÈÞuÎî=}cÛ½ÓU.ÀW@HÉ#iÚÉA=@	yÀJªÔ/.@tùp¯þLYh~N,®Õ=@Ý&X&èÄÜÖpü 5Yrr§[¤-r4ãéP)l _VÑ!Áý); épÐOØ<Eqò£O3©ÕaS§Øtâñ=MUà;Þþlüuú"ÞQz(®g=MÒ\`Üh®!Ù¤¨l¡ÒÈ¬úRìâyeØÅ±¢ÊþÛµnY}&J£u"3{3IxÓi¼ã±û ýÁô@~ÍRùþyl»b»¥K>F÷Ëq@úzÓs·ßÈDËú9	THÔ2õß9ÕÀþ*Ô¯§,;î:¨ï¦Ó»o" ôèº¢ÈUga®ùSÏa=JWÚoqßÄ*«3ejAàòuOQ(ªVÏåég±\\Ô£KÜCmÆ|Pâº=JÜÜË_Ö=@^oi~{^í@ïý{!R¤]µ?þ+çÚFì$ÎÕçWÎ¢;EówÕß/Àóþì]ÔîþoØÃXò®pïVôçÔ-ð*ô÷cYµÊ¸:ÏÁ£liÒ -Ë3hà)'ÓKtTÓ¯PÂð?P;d°Dj¿)1¯ýô¹|ÅÇÖ®^|e*[=}NRÈ­#¯&g+>ù1¯yJÞêÑªTl5ÒO-Ô&ÕjQ$*C§Þ)¾9ºý(+jÇ)&M%òÆnÕ©É¼&á´é²K!Ä¶©oÕ×sèPÔ	çÀæ¯ÑWt;@àfGÒKcÁzg´ÉO!3·JNÿ*ñK?¯ÏJ~ùkE=@;=}(¬D¥>$0AÜ¦-UÆÖ'2Õ¿Nf/pÊ|MÜ*4TP/±C)/ÏGÑî=@|õÚ^'*÷1:!:è@@ÂÿìBø?¢BÃdký0ÔQÊð%5	)åÜ'©«HªáöYf©ÿ$5>h)½Éõ:	5v¢"¨¼|EJurÍà:­Ùß1c!¥Ru;\`ß"2IËÈ¼(qXFÀ|p]}2#AË­b:!ï¾á|0a{Ñ²å5\`ôä_Ùjö9èËXòÈ£áÊZ¸ËìQ"Iz¨q§Ê,9²C¯º$g	ü¤xòé)AHª)»!òcÕüÉýf~µO&§	=}¾<î6JhþïfK5zdîæ·?]¨ÿÓ§*ÿIÑ'?ÀÙÓdjÖ/3)´ºà}vÑiÞ#ÉT)ñüÙ×©òÛjS³/Ï9í?Õ²Ãnh¹ä¬JµGR÷rÃ	@ºFòIPQSÄåluHÓ¿S9ôÌ¡kG|3RÎm-lÜ*HËx+q°CZÙ¢Û×ªÆH'3D±Âý3ÑdåMç5®toêt®]Ûô_qOÆÿ:÷Ùì(¨¾Ã49ôìmC7³AßpËøÔ" B µmúÈ"¤GÞI1	hÙ­sgñê=M·/Ùõí?õlzÎM\`3[âI¹äÍs×BI!¥±¥<gb2íºQ¢QYÞÅ²¡{!{¨myÂ,ÉÇZ§=}fE/§ô3"gÉ±EÕõ5=M¿è·YÄÚâyvú1ó×yï'5F®íÕ<Z¤Ynwxoó§wfL7 ¡YÍYvé9Uô¦­ðý{ÜSV9Þ«wU6Ù¹çÿxUcÖd6RA2µ©«îýM¢\\ØV°xÕªè¿°A"¢9ª}çp|*ütXêä§¥{Ï?)5ßwÍÉaIÂ±D¦ÙËæ\`¡&/,<ÿ)gì@¢KH$D­©¶x¡ºæ=}'¤+Uñ"Í|ïÍ"*z»ñ½¦Ï{6VßLæöî!Ä"²[oå=}¥¡Yf¡Fû¨ {)VÆÙÆmÁ¤(6Æ ªñåâÏ?8FÓ8åEøâdR´ÑàëÝÜU{¡~W=}ÍGm[äÃ8YÐ ñäIqÊçÑ=@Ì;4qÆëÄ"Ëm_(¶¦HõØ¢´ù1¶êüçÍ6B¹³3-Û¨aîÈÝê¥of	§>}ph¬È2f<¶MA&=JÛ^ DÑê*U0ñPÛÙhF	B×\`xÁÈÍø£Y¾õ{[î'&e´0èêy¼ÛxD8è ê\`]ÛÑJÔ¬m]¶¡&@mzõL^ÇÛAmÔm(¸[²c7{¡ôí!aB,k­Ø=M£ð.ÇcE¹ë¤¥9ÍúÝÑI ¨R²\`M^$ïaî¾HÿÛòE|´ÙUO=@ñôÊ*"öØ9Ô&/wvmÇÚ&3Ù°×ªãf@ciìþÃUÚ£$uÆ	@Qg¯¨x7æ"b\` ­êÈúMaèÆZ,G£Ì TøApÿûç<l$Ço1]F!êoN´¯),!æ5úMyEØ¡3!%ñâaïûfBôäêa»Èb¥ÖU=@+ýØ!ï"5=}zOÈUÎõ jÃ¢í!î	å=M¨é2	F7ÂÇhDuùpÍÃIz"0ë¶d5ºHaCïá«pgbÿØ¶ù½AÍ&a]zXéÇæÈÉë©KWûIËõÇfä=}1Qq0@Æ¨Ä1÷½=JÑÁâÜ=}#´×ë.á2EwÝ7>Æ4ØkÏ¥Û(9"÷;[¥ë¥ár^Eã¹°'=MÁÒ\\¦ÌøæòÙ¡ì#Þ¢[I8Ö%6KqÀ=Mâç9ön¤íhR%4$y¨®h½'Ï"åßò/Iº)o®ß4ñmÅ×^#ÊÑt!÷ N¤0¹Ù]Ú\`1½Lù{QæÛï¯ÅÞ6Çu©/é=M 2¢9o¡Wm·´¢wSÞ\`×ìgõzé:ä9f¸´$òÎfÂzfH1ÞqÖ#dHg*á¬§Aáw"8i,Ñ¿ï°QÂf¡9ü=@7êAÔñFr¨¸Im$z)>Ææ<­1õíüyôÇ÷ÚØ'"ÓH¢¤ðóí[t}:mä¨1qY·ááhìÏvv+a%qí _yNñu]!ºð;ÂAð²DT[@×V!Sy¶CÝLê¡¡¡¶c6hCøb2ØðbF!]¦¸í9zÀêP$PäÏYp¯Ð2f·É¹kÆÛcÌdï dÞE¨´Dy ËÒãQ¤"îÁÍð^¦9 Á(0Ò?wâL©ÞhèB$ÛóC~»9Å	^n»µq[söéÞ1µór'Fe@Ññû;M´gðßæ{öK6	.wëâ­AÌ©ìº3_V=}¡YnÉè×ûì?0Sb8ÈIÆ¯,×Ðj¡/À³aJ©@¸?Ï¨"ôy/ÃS·ìIéñðþ½ÛCôçU²9Ó7ë :7h°:ùá"òK§@®ËZifXïÜBúVLñ=MµoÛÍ*Ä¾¬¸sg,C1§ÿHR"Kô.\`®	b¢¨â±eéh­õúM²Ç5 &A\\=@}¥Gi¨bªÙ ¹nn×²=M/2¶I¬-o$ÿ³ÿvòêÀíeCáï·/ºâÍ<7=MÓ±=}{êÓ4pÀò¹]ËðÌë'íX4¨®5ÞéR´seà	!¸Q^ö±ÕdÔWbÖJFQ¢Màw~^+©è«;ïD.¤§µLg¹­m5¥(8}ï=J$Tâ¡ 6·qéÉlÿ±{×¸;(?DÍ¯mB#hIßµøÍ'[2ÃeCG¸ëÕ=MÎH"?8OékÓâ²Æ?0áçzéB{Î:Ègâ!qÊ´a¡6lîþ#Â{=M;8A	0Á#â=@c/qIê#êìr6âhe~Òü.ÉÇí¯ëÚÚmT¹§µxàú9Â=J1)X²"$\\d­{(bh@°ã_\`ã¬²Þ0ýðñB[¨OðáÆ·aÑ&zðP6Cÿ,x~j­oÁãquÖµ²17»ãJ-Æ³K;õÚ=M%ë"3T¹q¡nÝGT¢·ñÞpì·âßVÄéÍaHô>d¬'QôbÝi4i«u¨jý'Íz~B90÷n=Mb¢ßF¬TÏúáMðåwíêª3ßPD¬§!ì#§æ´J9ö7ýüôZ¦ç+ÀË8=@ \\ý¥Md÷V³È"- 9aÍLglFkÒBhÞL4Ù¸¿YÐÌÑeÒî8ýî8¯OõÅßB¿UèsaìÃIÓ¡;pY#89zô¶àD{ÿiq=}!&üÿmØ8ê%GË4%OMRÕøt0Å!ôágEQ´=MHóÄæ@ñj¤ßg\`zF9sH$G×Ø­ïÛÝÁ{a¢t±{iµÖÙ<)yÆóÅø0òÊËìoFµ@XÌÓüôÀUÙÙ=JLì'Q)Å©©÷U8Ù²	Óî¯æê¿FØ:ïÁZdxL4åª÷øcD@laªYî;$;ÌîNÑ] Ý#Uìw»L_¢¦¶f«ÎÆ«»¯[h¡h(ýgeZÀA1´fLú°Ç&®c\\=}CîSÆöÊ>Ò2¤ê&!ekÙ¢¡<þ¾­·ÚØÃõ}ÂÐJõÇ)«ÅL«ç¢#£/ÉCL7¹úf=JçÆ¢M£WI ¹(³í¸f-?ÞîÌRÒ¼èÊ]6­\\¢¡|hfÊ¾=@TÞ]ôXßß£Éî¹©Ôã¡z=@ÕQÒÍðëw¢BrÆ]Aÿ}ÇÓÆ÷ÏÂ{T¿Ó~½ô}Ã_¿®Ï¼Ê~\`È=}K¿'ÃôPÐ@?ÇMb;",q[ßN«Ñî|£æ^ß6«IFr[ý~¨j¦Ø=}¼Öi·ÑÛ(^=@Éð$ý©Dy'Öi·ÑÛ(^=@©°ÑÛ¨è@Æ©Ñ8#Ãii(&îÞLãÁyÆ<vNIkiÏFtI¦ÇKt½QDg"ú\\:kÁÂêÐkÃ"TÉéõOÂoi³=MNÉY<rFÁ@ÿ9M»bXè@3ºô±VW³~\`##¬^Q)&vÜf<õ]âIÏAé©PgÜü}Üüµ9]³fýõ&Èn#¦[%éV)	sí)tÁp°©[«´ã»ñ-ðß¢4Voî'=JÍæÒtKhÇmñ(I`), new Uint8Array(107486));

var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;

function UTF8ArrayToString(heap, idx, maxBytesToRead) {
 var endIdx = idx + maxBytesToRead;
 var endPtr = idx;
 while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;
 if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
  return UTF8Decoder.decode(heap.subarray(idx, endPtr));
 } else {
  var str = "";
  while (idx < endPtr) {
   var u0 = heap[idx++];
   if (!(u0 & 128)) {
    str += String.fromCharCode(u0);
    continue;
   }
   var u1 = heap[idx++] & 63;
   if ((u0 & 224) == 192) {
    str += String.fromCharCode((u0 & 31) << 6 | u1);
    continue;
   }
   var u2 = heap[idx++] & 63;
   if ((u0 & 240) == 224) {
    u0 = (u0 & 15) << 12 | u1 << 6 | u2;
   } else {
    u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heap[idx++] & 63;
   }
   if (u0 < 65536) {
    str += String.fromCharCode(u0);
   } else {
    var ch = u0 - 65536;
    str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
   }
  }
 }
 return str;
}

function UTF8ToString(ptr, maxBytesToRead) {
 return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
}

var HEAP8, HEAP16, HEAP32, HEAPU8, HEAPU16, HEAPU32, HEAPF32, HEAPF64;

var wasmMemory, buffer, wasmTable;

function updateGlobalBufferAndViews(b) {
 buffer = b;
 HEAP8 = new Int8Array(b);
 HEAP16 = new Int16Array(b);
 HEAP32 = new Int32Array(b);
 HEAPU8 = new Uint8Array(b);
 HEAPU16 = new Uint16Array(b);
 HEAPU32 = new Uint32Array(b);
 HEAPF32 = new Float32Array(b);
 HEAPF64 = new Float64Array(b);
}

function _emscripten_memcpy_big(dest, src, num) {
 HEAPU8.copyWithin(dest, src, src + num);
}

function abortOnCannotGrowMemory(requestedSize) {
 abort("OOM");
}

function _emscripten_resize_heap(requestedSize) {
 var oldSize = HEAPU8.length;
 requestedSize = requestedSize >>> 0;
 abortOnCannotGrowMemory(requestedSize);
}

var ENV = {};

function getExecutableName() {
 return "./this.program";
}

function getEnvStrings() {
 if (!getEnvStrings.strings) {
  var lang = (typeof navigator === "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
  var env = {
   "USER": "web_user",
   "LOGNAME": "web_user",
   "PATH": "/",
   "PWD": "/",
   "HOME": "/home/web_user",
   "LANG": lang,
   "_": getExecutableName()
  };
  for (var x in ENV) {
   if (ENV[x] === undefined) delete env[x]; else env[x] = ENV[x];
  }
  var strings = [];
  for (var x in env) {
   strings.push(x + "=" + env[x]);
  }
  getEnvStrings.strings = strings;
 }
 return getEnvStrings.strings;
}

function writeAsciiToMemory(str, buffer, dontAddNull) {
 for (var i = 0; i < str.length; ++i) {
  HEAP8[buffer++ >> 0] = str.charCodeAt(i);
 }
 if (!dontAddNull) HEAP8[buffer >> 0] = 0;
}

var SYSCALLS = {
 mappings: {},
 buffers: [ null, [], [] ],
 printChar: function(stream, curr) {
  var buffer = SYSCALLS.buffers[stream];
  if (curr === 0 || curr === 10) {
   (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
   buffer.length = 0;
  } else {
   buffer.push(curr);
  }
 },
 varargs: undefined,
 get: function() {
  SYSCALLS.varargs += 4;
  var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
  return ret;
 },
 getStr: function(ptr) {
  var ret = UTF8ToString(ptr);
  return ret;
 },
 get64: function(low, high) {
  return low;
 }
};

function _environ_get(__environ, environ_buf) {
 var bufSize = 0;
 getEnvStrings().forEach(function(string, i) {
  var ptr = environ_buf + bufSize;
  HEAP32[__environ + i * 4 >> 2] = ptr;
  writeAsciiToMemory(string, ptr);
  bufSize += string.length + 1;
 });
 return 0;
}

function _environ_sizes_get(penviron_count, penviron_buf_size) {
 var strings = getEnvStrings();
 HEAP32[penviron_count >> 2] = strings.length;
 var bufSize = 0;
 strings.forEach(function(string) {
  bufSize += string.length + 1;
 });
 HEAP32[penviron_buf_size >> 2] = bufSize;
 return 0;
}

function _fd_close(fd) {
 return 0;
}

function _fd_read(fd, iov, iovcnt, pnum) {
 var stream = SYSCALLS.getStreamFromFD(fd);
 var num = SYSCALLS.doReadv(stream, iov, iovcnt);
 HEAP32[pnum >> 2] = num;
 return 0;
}

function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {}

function _fd_write(fd, iov, iovcnt, pnum) {
 var num = 0;
 for (var i = 0; i < iovcnt; i++) {
  var ptr = HEAP32[iov >> 2];
  var len = HEAP32[iov + 4 >> 2];
  iov += 8;
  for (var j = 0; j < len; j++) {
   SYSCALLS.printChar(fd, HEAPU8[ptr + j]);
  }
  num += len;
 }
 HEAP32[pnum >> 2] = num;
 return 0;
}

var asmLibraryArg = {
 "c": _emscripten_memcpy_big,
 "d": _emscripten_resize_heap,
 "e": _environ_get,
 "f": _environ_sizes_get,
 "a": _fd_close,
 "h": _fd_read,
 "b": _fd_seek,
 "g": _fd_write
};

function initRuntime(asm) {
 asm["j"]();
}

var imports = {
 "a": asmLibraryArg
};

var _malloc, _free, _mpeg_frame_decoder_create, _mpeg_decode_interleaved, _mpeg_frame_decoder_destroy;

WebAssembly.instantiate(Module["wasm"], imports).then(function(output) {
 var asm = output.instance.exports;
 _malloc = asm["k"];
 _free = asm["l"];
 _mpeg_frame_decoder_create = asm["m"];
 _mpeg_decode_interleaved = asm["n"];
 _mpeg_frame_decoder_destroy = asm["o"];
 wasmTable = asm["p"];
 wasmMemory = asm["i"];
 updateGlobalBufferAndViews(wasmMemory.buffer);
 initRuntime(asm);
 ready();
});

this.ready = new Promise(resolve => {
 ready = resolve;
}).then(() => {
 this.HEAP = buffer;
 this._malloc = _malloc;
 this._free = _free;
 this._mpeg_frame_decoder_create = _mpeg_frame_decoder_create;
 this._mpeg_decode_interleaved = _mpeg_decode_interleaved;
 this._mpeg_frame_decoder_destroy = _mpeg_frame_decoder_destroy;
});
}}

/***/ }),

/***/ "./node_modules/mpg123-decoder/src/MPEGDecodedAudio.js":
/*!*************************************************************!*\
  !*** ./node_modules/mpg123-decoder/src/MPEGDecodedAudio.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MPEGDecodedAudio)
/* harmony export */ });
class MPEGDecodedAudio {
  constructor(channelData, samplesDecoded, sampleRate) {
    this.channelData = channelData;
    this.samplesDecoded = samplesDecoded;
    this.sampleRate = sampleRate;
  }
}


/***/ }),

/***/ "./node_modules/mpg123-decoder/src/MPEGDecoder.js":
/*!********************************************************!*\
  !*** ./node_modules/mpg123-decoder/src/MPEGDecoder.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MPEGDecoder)
/* harmony export */ });
/* harmony import */ var _MPEGDecodedAudio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MPEGDecodedAudio.js */ "./node_modules/mpg123-decoder/src/MPEGDecodedAudio.js");
/* harmony import */ var _EmscriptenWasm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmscriptenWasm.js */ "./node_modules/mpg123-decoder/src/EmscriptenWasm.js");



let wasm;

class MPEGDecoder {
  constructor(_MPEGDecodedAudio, _EmscriptenWASM) {
    this._ready = new Promise((resolve) =>
      this._init(_MPEGDecodedAudio, _EmscriptenWASM).then(resolve)
    );
  }

  static concatFloat32(buffers, length) {
    const ret = new Float32Array(length);

    let offset = 0;
    for (const buf of buffers) {
      ret.set(buf, offset);
      offset += buf.length;
    }

    return ret;
  }

  _allocateTypedArray(length, TypedArray) {
    const pointer = this._api._malloc(TypedArray.BYTES_PER_ELEMENT * length);
    const array = new TypedArray(this._api.HEAP, pointer, length);
    return [pointer, array];
  }

  // injects dependencies when running as a web worker
  async _init(_MPEGDecodedAudio, _EmscriptenWASM) {
    if (!this._api) {
      const isWebWorker = _MPEGDecodedAudio && _EmscriptenWASM;

      if (isWebWorker) {
        // use classes injected into constructor parameters
        this._MPEGDecodedAudio = _MPEGDecodedAudio;
        this._EmscriptenWASM = _EmscriptenWASM;

        // running as a webworker, use class level singleton for wasm compilation
        this._api = new this._EmscriptenWASM();
      } else {
        // use classes from es6 imports
        this._MPEGDecodedAudio = _MPEGDecodedAudio_js__WEBPACK_IMPORTED_MODULE_0__["default"];
        this._EmscriptenWASM = _EmscriptenWasm_js__WEBPACK_IMPORTED_MODULE_1__["default"];

        // use a global scope singleton so wasm compilation happens once only if class is instantiated
        if (!wasm) wasm = new this._EmscriptenWASM();
        this._api = wasm;
      }
    }

    await this._api.ready;

    this._sampleRate = 0;

    // input buffer
    this._inDataPtrSize = 2 ** 18;
    [this._inDataPtr, this._inData] = this._allocateTypedArray(
      this._inDataPtrSize,
      Uint8Array
    );

    // output buffer
    this._outputLength = 1152 * 512;
    [this._leftPtr, this._leftArr] = this._allocateTypedArray(
      this._outputLength,
      Float32Array
    );
    [this._rightPtr, this._rightArr] = this._allocateTypedArray(
      this._outputLength,
      Float32Array
    );

    // input decoded bytes pointer
    [this._decodedBytesPtr, this._decodedBytes] = this._allocateTypedArray(
      1,
      Uint32Array
    );

    // sample rate
    [this._sampleRateBytePtr, this._sampleRateByte] = this._allocateTypedArray(
      1,
      Uint32Array
    );

    this._decoder = this._api._mpeg_frame_decoder_create();
  }

  get ready() {
    return this._ready;
  }

  async reset() {
    this.free();
    await this._init();
  }

  free() {
    this._api._mpeg_frame_decoder_destroy(this._decoder);

    this._api._free(this._decoder);
    this._api._free(this._inDataPtr);
    this._api._free(this._decodedBytesPtr);
    this._api._free(this._leftPtr);
    this._api._free(this._rightPtr);
    this._api._free(this._sampleRateBytePtr);
  }

  _decode(data, decodeInterval) {
    if (!(data instanceof Uint8Array))
      throw Error(
        `Data to decode must be Uint8Array. Instead got ${typeof data}`
      );

    this._inData.set(data);
    this._decodedBytes[0] = 0;

    const samplesDecoded = this._api._mpeg_decode_interleaved(
      this._decoder,
      this._inDataPtr,
      data.length,
      this._decodedBytesPtr,
      decodeInterval,
      this._leftPtr,
      this._rightPtr,
      this._outputLength,
      this._sampleRateBytePtr
    );

    this._sampleRate = this._sampleRateByte[0];

    return new this._MPEGDecodedAudio(
      [
        this._leftArr.slice(0, samplesDecoded),
        this._rightArr.slice(0, samplesDecoded),
      ],
      samplesDecoded,
      this._sampleRate
    );
  }

  decode(data) {
    let left = [],
      right = [],
      samples = 0;

    for (
      let offset = 0;
      offset < data.length;
      offset += this._decodedBytes[0]
    ) {
      const { channelData, samplesDecoded } = this._decode(
        data.subarray(offset, offset + this._inDataPtrSize),
        48
      );

      left.push(channelData[0]);
      right.push(channelData[1]);
      samples += samplesDecoded;
    }

    return new this._MPEGDecodedAudio(
      [
        MPEGDecoder.concatFloat32(left, samples),
        MPEGDecoder.concatFloat32(right, samples),
      ],
      samples,
      this._sampleRate
    );
  }

  decodeFrame(mpegFrame) {
    return this._decode(mpegFrame, mpegFrame.length);
  }

  decodeFrames(mpegFrames) {
    let left = [],
      right = [],
      samples = 0;

    for (const frame of mpegFrames) {
      const { channelData, samplesDecoded } = this.decodeFrame(frame);

      left.push(channelData[0]);
      right.push(channelData[1]);
      samples += samplesDecoded;
    }

    return new this._MPEGDecodedAudio(
      [
        MPEGDecoder.concatFloat32(left, samples),
        MPEGDecoder.concatFloat32(right, samples),
      ],
      samples,
      this._sampleRate
    );
  }
}


/***/ }),

/***/ "./node_modules/mpg123-decoder/src/MPEGDecoderWebWorker.js":
/*!*****************************************************************!*\
  !*** ./node_modules/mpg123-decoder/src/MPEGDecoderWebWorker.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MPEGDecoderWebWorker)
/* harmony export */ });
/* harmony import */ var web_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web-worker */ "./node_modules/web-worker/cjs/browser.js");
/* harmony import */ var _EmscriptenWasm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmscriptenWasm.js */ "./node_modules/mpg123-decoder/src/EmscriptenWasm.js");
/* harmony import */ var _MPEGDecodedAudio_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MPEGDecodedAudio.js */ "./node_modules/mpg123-decoder/src/MPEGDecodedAudio.js");
/* harmony import */ var _MPEGDecoder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MPEGDecoder.js */ "./node_modules/mpg123-decoder/src/MPEGDecoder.js");
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")["Buffer"];






let sourceURL;

class MPEGDecoderWebWorker extends web_worker__WEBPACK_IMPORTED_MODULE_0__ {
  constructor() {
    if (!sourceURL) {
      const webworkerSourceCode =
        "'use strict';" +
        // dependencies need to be manually resolved when stringifying this function
        `(${((_MPEGDecoder, _MPEGDecodedAudio, _EmscriptenWASM) => {
          // We're in a Web Worker
          const decoder = new _MPEGDecoder(_MPEGDecodedAudio, _EmscriptenWASM);

          const detachBuffers = (buffer) =>
            Array.isArray(buffer)
              ? buffer.map((buffer) => new Uint8Array(buffer))
              : new Uint8Array(buffer);

          self.onmessage = ({ data: { id, command, mpegData } }) => {
            switch (command) {
              case "ready":
                decoder.ready.then(() => {
                  self.postMessage({
                    id,
                  });
                });
                break;
              case "free":
                decoder.free();
                self.postMessage({
                  id,
                });
                break;
              case "reset":
                decoder.reset().then(() => {
                  self.postMessage({
                    id,
                  });
                });
                break;
              case "decode":
              case "decodeFrame":
              case "decodeFrames":
                const { channelData, samplesDecoded, sampleRate } = decoder[
                  command
                ](detachBuffers(mpegData));

                self.postMessage(
                  {
                    id,
                    channelData,
                    samplesDecoded,
                    sampleRate,
                  },
                  // The "transferList" parameter transfers ownership of channel data to main thread,
                  // which avoids copying memory.
                  channelData.map((channel) => channel.buffer)
                );
                break;
              default:
                this.console.error(
                  "Unknown command sent to worker: " + command
                );
            }
          };
        }).toString()})(${_MPEGDecoder_js__WEBPACK_IMPORTED_MODULE_3__["default"]}, ${_MPEGDecodedAudio_js__WEBPACK_IMPORTED_MODULE_2__["default"]}, ${_EmscriptenWasm_js__WEBPACK_IMPORTED_MODULE_1__["default"]})`;

      const type = "text/javascript";
      try {
        // browser
        sourceURL = URL.createObjectURL(
          new Blob([webworkerSourceCode], { type })
        );
      } catch {
        // nodejs
        sourceURL = `data:${type};base64,${Buffer.from(
          webworkerSourceCode
        ).toString("base64")}`;
      }
    }

    super(sourceURL);

    this._id = Number.MIN_SAFE_INTEGER;
    this._enqueuedOperations = new Map();

    this.onmessage = ({ data }) => {
      this._enqueuedOperations.get(data.id)(data);
      this._enqueuedOperations.delete(data.id);
    };
  }

  static _getMPEGDecodedAudio({ channelData, samplesDecoded, sampleRate }) {
    return new _MPEGDecodedAudio_js__WEBPACK_IMPORTED_MODULE_2__["default"](channelData, samplesDecoded, sampleRate);
  }

  async _postToDecoder(command, mpegData) {
    return new Promise((resolve) => {
      this.postMessage({
        command,
        id: this._id,
        mpegData,
      });

      this._enqueuedOperations.set(this._id++, resolve);
    });
  }

  get ready() {
    return this._postToDecoder("ready");
  }

  async free() {
    await this._postToDecoder("free").finally(() => {
      this.terminate();
    });
  }

  async reset() {
    await this._postToDecoder("reset");
  }

  async decode(data) {
    return this._postToDecoder("decode", data).then(
      MPEGDecoderWebWorker._getMPEGDecodedAudio
    );
  }

  async decodeFrame(data) {
    return this._postToDecoder("decodeFrame", data).then(
      MPEGDecoderWebWorker._getMPEGDecodedAudio
    );
  }

  async decodeFrames(data) {
    return this._postToDecoder("decodeFrames", data).then(
      MPEGDecoderWebWorker._getMPEGDecodedAudio
    );
  }
}


/***/ }),

/***/ "./node_modules/mse-audio-wrapper/src/MSEAudioWrapper.js":
/*!***************************************************************!*\
  !*** ./node_modules/mse-audio-wrapper/src/MSEAudioWrapper.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MSEAudioWrapper)
/* harmony export */ });
/* harmony import */ var codec_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! codec-parser */ "./node_modules/codec-parser/index.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./node_modules/mse-audio-wrapper/src/constants.js");
/* harmony import */ var _containers_isobmff_ISOBMFFContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/isobmff/ISOBMFFContainer.js */ "./node_modules/mse-audio-wrapper/src/containers/isobmff/ISOBMFFContainer.js");
/* harmony import */ var _containers_webm_WEBMContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/webm/WEBMContainer.js */ "./node_modules/mse-audio-wrapper/src/containers/webm/WEBMContainer.js");
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of mse-audio-wrapper.
    
    mse-audio-wrapper is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    mse-audio-wrapper is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/








const noOp = () => {};

class MSEAudioWrapper {
  /**
   * @description Wraps audio data into media source API compatible containers
   * @param {string} mimeType Mimetype of the audio data to wrap
   * @param {string} options.codec Codec of the audio data to wrap
   * @param {object} options.preferredContainer Preferred audio container to output if multiple containers are available
   * @param {number} options.minBytesPerSegment Minimum number of bytes to process before returning a media segment
   * @param {number} options.minFramesPerSegment Minimum number of frames to process before returning a media segment
   * @param {number} options.minBytesPerSegment Minimum number of bytes to process before returning a media segment
   * @param {boolean} options.enableLogging Set to true to enable debug logging
   */
  constructor(mimeType, options = {}) {
    this._inputMimeType = mimeType;

    this.PREFERRED_CONTAINER = options.preferredContainer || _constants_js__WEBPACK_IMPORTED_MODULE_1__.WEBM;
    this.MIN_FRAMES = options.minFramesPerSegment || 4;
    this.MAX_FRAMES = options.maxFramesPerSegment || 50;
    this.MIN_FRAMES_LENGTH = options.minBytesPerSegment || 1022;
    this.MAX_SAMPLES_PER_SEGMENT = Infinity;

    this._onMimeType = options.onMimeType || noOp;

    if (options.codec) {
      this._container = this._getContainer(options.codec);
      this._onMimeType(this._mimeType);
    }

    this._frames = [];
    this._codecParser = new codec_parser__WEBPACK_IMPORTED_MODULE_0__["default"](mimeType, {
      onCodec: (codec) => {
        this._container = this._getContainer(codec);
        this._onMimeType(this._mimeType);
      },
      onCodecUpdate: options.onCodecUpdate,
      enableLogging: options.enableLogging,
    });
  }

  /**
   * @public
   * @returns The mimetype being returned from MSEAudioWrapper
   */
  get mimeType() {
    return this._mimeType;
  }

  /**
   * @public
   * @returns The mimetype of the incoming audio data
   */
  get inputMimeType() {
    return this._inputMimeType;
  }

  /**
   * @public
   * @description Returns an iterator for the passed in codec data.
   * @param {Uint8Array | Array<Frame>} chunk Next chunk of codec data to read
   * @returns {Iterator} Iterator that operates over the codec data.
   * @yields {Uint8Array} Movie Fragments containing codec frames
   */
  *iterator(chunk) {
    if (chunk.constructor === Uint8Array) {
      yield* this._processFrames(
        [...this._codecParser.parseChunk(chunk)].flatMap(
          (frame) => frame.codecFrames || frame
        )
      );
    } else if (Array.isArray(chunk)) {
      yield* this._processFrames(chunk);
    }
  }

  /**
   * @private
   */
  *_processFrames(frames) {
    this._frames.push(...frames);

    if (this._frames.length) {
      const groups = this._groupFrames();

      if (groups.length) {
        if (!this._sentInitialSegment) {
          this._sentInitialSegment = true;

          yield this._container.getInitializationSegment(groups[0][0]);
        }
        for (const frameGroup of groups) {
          yield this._container.getMediaSegment(frameGroup);
        }
      }
    }
  }

  /**
   * @private
   */
  _groupFrames() {
    const groups = [[]];
    let currentGroup = groups[0];
    let samples = 0;

    for (const frame of this._frames) {
      if (
        currentGroup.length === this.MAX_FRAMES ||
        samples >= this.MAX_SAMPLES_PER_SEGMENT
      ) {
        samples = 0;
        groups.push((currentGroup = [])); // create new group
      }

      currentGroup.push(frame);
      samples += frame.samples;
    }

    // store remaining frames
    this._frames =
      currentGroup.length < this.MIN_FRAMES ||
      currentGroup.reduce((acc, frame) => acc + frame.data.length, 0) <
        this.MIN_FRAMES_LENGTH
        ? groups.pop()
        : [];

    return groups;
  }

  /**
   * @private
   */
  _getContainer(codec) {
    switch (codec) {
      case "mpeg":
        this._mimeType = `${_constants_js__WEBPACK_IMPORTED_MODULE_1__.AUDIO_MP4}"${_constants_js__WEBPACK_IMPORTED_MODULE_1__.MP3}"`;
        return new _containers_isobmff_ISOBMFFContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"](_constants_js__WEBPACK_IMPORTED_MODULE_1__.MP3);
      case "aac":
        this._mimeType = `${_constants_js__WEBPACK_IMPORTED_MODULE_1__.AUDIO_MP4}"${_constants_js__WEBPACK_IMPORTED_MODULE_1__.MP4A_40_2}`;
        return new _containers_isobmff_ISOBMFFContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"](_constants_js__WEBPACK_IMPORTED_MODULE_1__.MP4A_40_2);
      case "flac":
        this._mimeType = `${_constants_js__WEBPACK_IMPORTED_MODULE_1__.AUDIO_MP4}"${_constants_js__WEBPACK_IMPORTED_MODULE_1__.FLAC}"`;
        return new _containers_isobmff_ISOBMFFContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"](_constants_js__WEBPACK_IMPORTED_MODULE_1__.FLAC);
      case "vorbis":
        this._mimeType = `${_constants_js__WEBPACK_IMPORTED_MODULE_1__.AUDIO_WEBM}"${_constants_js__WEBPACK_IMPORTED_MODULE_1__.VORBIS}"`;

        this.MAX_SAMPLES_PER_SEGMENT = 32767;
        return new _containers_webm_WEBMContainer_js__WEBPACK_IMPORTED_MODULE_3__["default"](_constants_js__WEBPACK_IMPORTED_MODULE_1__.VORBIS);
      case "opus":
        if (this.PREFERRED_CONTAINER === _constants_js__WEBPACK_IMPORTED_MODULE_1__.WEBM) {
          this._mimeType = `${_constants_js__WEBPACK_IMPORTED_MODULE_1__.AUDIO_WEBM}"${_constants_js__WEBPACK_IMPORTED_MODULE_1__.OPUS}"`;

          this.MAX_SAMPLES_PER_SEGMENT = 32767;
          return new _containers_webm_WEBMContainer_js__WEBPACK_IMPORTED_MODULE_3__["default"](_constants_js__WEBPACK_IMPORTED_MODULE_1__.OPUS);
        }
        this._mimeType = `${_constants_js__WEBPACK_IMPORTED_MODULE_1__.AUDIO_MP4}"${_constants_js__WEBPACK_IMPORTED_MODULE_1__.OPUS}"`;
        return new _containers_isobmff_ISOBMFFContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"](_constants_js__WEBPACK_IMPORTED_MODULE_1__.OPUS);
    }
  }
}


/***/ }),

/***/ "./node_modules/mse-audio-wrapper/src/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/mse-audio-wrapper/src/constants.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MP4": () => (/* binding */ MP4),
/* harmony export */   "WEBM": () => (/* binding */ WEBM),
/* harmony export */   "MP3": () => (/* binding */ MP3),
/* harmony export */   "MP4A_40_2": () => (/* binding */ MP4A_40_2),
/* harmony export */   "FLAC": () => (/* binding */ FLAC),
/* harmony export */   "VORBIS": () => (/* binding */ VORBIS),
/* harmony export */   "OPUS": () => (/* binding */ OPUS),
/* harmony export */   "AUDIO_MP4": () => (/* binding */ AUDIO_MP4),
/* harmony export */   "AUDIO_WEBM": () => (/* binding */ AUDIO_WEBM),
/* harmony export */   "MSE_AUDIO_WRAPPER": () => (/* binding */ MSE_AUDIO_WRAPPER)
/* harmony export */ });
// containers
const MP4 = "mp4";
const WEBM = "webm";

// codecs
const MP3 = "mp3";
const MP4A_40_2 = "mp4a.40.2";
const FLAC = "flac";
const VORBIS = "vorbis";
const OPUS = "opus";

const audio = "audio/";
const codecs = ";codecs=";
const AUDIO_MP4 = audio + MP4 + codecs;
const AUDIO_WEBM = audio + WEBM + codecs;

const MSE_AUDIO_WRAPPER = "mse-audio-wrapper";


/***/ }),

/***/ "./node_modules/mse-audio-wrapper/src/containers/ContainerElement.js":
/*!***************************************************************************!*\
  !*** ./node_modules/mse-audio-wrapper/src/containers/ContainerElement.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContainerElement)
/* harmony export */ });
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of mse-audio-wrapper.
    
    mse-audio-wrapper is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    mse-audio-wrapper is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/

class ContainerElement {
  /**
   * @abstract
   * @description Container Object structure Abstract Class
   * @param {any} name Name of the object
   * @param {Array<Uint8>} [contents] Array of arrays or typed arrays, or a single number or typed array
   * @param {Array<ContainerElement>} [objects] Array of objects to insert into this object
   */
  constructor({ name, contents = [], children = [] }) {
    this._name = name;
    this._contents = contents;
    this._children = children;
  }

  /**
   * @description Converts a string to a byte array
   * @param {string} name String to convert
   * @returns {Uint8Array}
   */
  static stringToByteArray(name) {
    return [...name].map((char) => char.charCodeAt(0));
  }

  /**
   * @description Converts a JavaScript number to Uint32
   * @param {number} number Number to convert
   * @returns {Uint32}
   */
  static getFloat64(number) {
    const bytes = new Uint8Array(8);
    new DataView(bytes.buffer).setFloat64(0, number);
    return bytes;
  }

  /**
   * @description Converts a JavaScript number to Uint32
   * @param {number} number Number to convert
   * @returns {Uint32}
   */
  static getUint64(number) {
    const bytes = new Uint8Array(8);
    new DataView(bytes.buffer).setBigUint64(0, BigInt(number));
    return bytes;
  }

  /**
   * @description Converts a JavaScript number to Uint32
   * @param {number} number Number to convert
   * @returns {Uint32}
   */
  static getUint32(number) {
    const bytes = new Uint8Array(4);
    new DataView(bytes.buffer).setUint32(0, number);
    return bytes;
  }

  /**
   * @description Converts a JavaScript number to Uint16
   * @param {number} number Number to convert
   * @returns {Uint32}
   */
  static getUint16(number) {
    const bytes = new Uint8Array(2);
    new DataView(bytes.buffer).setUint16(0, number);
    return bytes;
  }

  /**
   * @description Converts a JavaScript number to Int16
   * @param {number} number Number to convert
   * @returns {Uint32}
   */
  static getInt16(number) {
    const bytes = new Uint8Array(2);
    new DataView(bytes.buffer).setInt16(0, number);
    return bytes;
  }

  static *flatten(array) {
    for (const item of array) {
      if (Array.isArray(item)) {
        yield* ContainerElement.flatten(item);
      } else {
        yield item;
      }
    }
  }

  /**
   * @returns {Uint8Array} Contents of this container element
   */
  get contents() {
    const buffer = new Uint8Array(this.length);
    const contents = this._buildContents();

    let offset = 0;

    for (const element of ContainerElement.flatten(contents)) {
      if (typeof element !== "object") {
        buffer[offset] = element;
        offset++;
      } else {
        buffer.set(element, offset);
        offset += element.length;
      }
    }

    return buffer;
  }

  /**
   * @returns {number} Length of this container element
   */
  get length() {
    return this._buildLength();
  }

  _buildContents() {
    return [
      this._contents,
      ...this._children.map((obj) => obj._buildContents()),
    ];
  }

  _buildLength() {
    let length;

    if (Array.isArray(this._contents)) {
      length = this._contents.reduce(
        (acc, val) => acc + (val.length === undefined ? 1 : val.length),
        0
      );
    } else {
      length = this._contents.length === undefined ? 1 : this._contents.length;
    }

    return length + this._children.reduce((acc, obj) => acc + obj.length, 0);
  }

  addChild(object) {
    this._children.push(object);
  }
}


/***/ }),

/***/ "./node_modules/mse-audio-wrapper/src/containers/isobmff/Box.js":
/*!**********************************************************************!*\
  !*** ./node_modules/mse-audio-wrapper/src/containers/isobmff/Box.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Box)
/* harmony export */ });
/* harmony import */ var _ContainerElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ContainerElement.js */ "./node_modules/mse-audio-wrapper/src/containers/ContainerElement.js");
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of mse-audio-wrapper.
    
    mse-audio-wrapper is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    mse-audio-wrapper is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/



class Box extends _ContainerElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @description ISO/IEC 14496-12 Part 12 ISO Base Media File Format Box
   * @param {string} name Name of the box (i.e. 'moov', 'moof', 'traf')
   * @param {object} params Object containing contents or child boxes
   * @param {Array<Uint8>} [params.contents] Array of bytes to insert into this box
   * @param {Array<Box>} [params.children] Array of child boxes to insert into this box
   */
  constructor(name, { contents, children } = {}) {
    super({ name, contents, children });
  }

  _buildContents() {
    return [
      ...this._lengthBytes,
      ..._ContainerElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].stringToByteArray(this._name),
      ...super._buildContents(),
    ];
  }

  _buildLength() {
    if (!this._length) {
      // length bytes + name length + content length
      this._length = 4 + this._name.length + super._buildLength();
      this._lengthBytes = _ContainerElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUint32(this._length);
    }

    return this._length;
  }
}


/***/ }),

/***/ "./node_modules/mse-audio-wrapper/src/containers/isobmff/ESTag.js":
/*!************************************************************************!*\
  !*** ./node_modules/mse-audio-wrapper/src/containers/isobmff/ESTag.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ESTag)
/* harmony export */ });
/* harmony import */ var _ContainerElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ContainerElement.js */ "./node_modules/mse-audio-wrapper/src/containers/ContainerElement.js");
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of mse-audio-wrapper.
    
    mse-audio-wrapper is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    mse-audio-wrapper is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/



class ESTag extends _ContainerElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(tagNumber, { contents, tags } = {}) {
    super({ name: tagNumber, contents, children: tags });
  }

  static getLength(length) {
    const bytes = _ContainerElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUint32(length);

    bytes.every((byte, i, array) => {
      if (byte === 0x00) {
        array[i] = 0x80;
        return true;
      }
      return false;
    });

    return bytes;
  }

  /**
   * @returns {Uint8Array} Contents of this stream descriptor tag
   */
  _buildContents() {
    return [this._name, ...this._lengthBytes, ...super._buildContents()];
  }

  _buildLength() {
    if (!this._length) {
      const length = super._buildLength();
      this._lengthBytes = ESTag.getLength(length);
      this._length = 1 + length + this._lengthBytes.length;
    }

    return this._length;
  }

  addTag(tag) {
    this.addChild(tag);
  }
}


/***/ }),

/***/ "./node_modules/mse-audio-wrapper/src/containers/isobmff/ISOBMFFContainer.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/mse-audio-wrapper/src/containers/isobmff/ISOBMFFContainer.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ISOBMFFContainer)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants.js */ "./node_modules/mse-audio-wrapper/src/constants.js");
/* harmony import */ var _ContainerElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ContainerElement.js */ "./node_modules/mse-audio-wrapper/src/containers/ContainerElement.js");
/* harmony import */ var _Box_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Box.js */ "./node_modules/mse-audio-wrapper/src/containers/isobmff/Box.js");
/* harmony import */ var _ESTag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ESTag.js */ "./node_modules/mse-audio-wrapper/src/containers/isobmff/ESTag.js");
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of mse-audio-wrapper.
    
    mse-audio-wrapper is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    mse-audio-wrapper is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/







/**
 * @description Fragmented ISO Base Media File Format Builder is a class to
 * wrap codec frames in a MP4 container for streaming MP3 / AAC compatibility in Firefox.
 */
class ISOBMFFContainer {
  constructor(codec) {
    this._codec = codec;
  }

  getCodecBox(header) {
    /**
     * @description Codec mapping for `esds` box
     * https://stackoverflow.com/questions/3987850/mp4-atom-how-to-discriminate-the-audio-codec-is-it-aac-or-mp3
     * https://web.archive.org/web/20180312163039/http://mp4ra.org/object.html
     * 0x40 - MPEG-4 Audio
     * 0x6b - MPEG-1 Audio (MPEG-1 Layers 1, 2, and 3)
     * 0x69 - MPEG-2 Backward Compatible Audio (MPEG-2 Layers 1, 2, and 3)
     * 0x67 - MPEG-2 AAC LC
     */
    switch (this._codec) {
      case _constants_js__WEBPACK_IMPORTED_MODULE_0__.MP3:
        return this.getMp4a(header, 0x6b);
      case _constants_js__WEBPACK_IMPORTED_MODULE_0__.MP4A_40_2:
        return this.getMp4a(header, 0x40);
      case _constants_js__WEBPACK_IMPORTED_MODULE_0__.OPUS:
        return this.getOpus(header);
      case _constants_js__WEBPACK_IMPORTED_MODULE_0__.FLAC:
        return this.getFlaC(header);
    }
  }

  getOpus(header) {
    // https://opus-codec.org/docs/opus_in_isobmff.html
    return new _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"]("Opus", {
      /* prettier-ignore */
      contents: [
        0x00,0x00,0x00,0x00,0x00,0x00, // reserved
        0x00,0x01, // data reference index
        0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00, // reserved
        0x00,header.channels, // channel count
        0x00,header.bitDepth, // PCM bitrate (16bit)
        0x00,0x00, // predefined
        0x00,0x00, // reserved
        _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"].getUint16(header.sampleRate),0x00,0x00, // sample rate 16.16 fixed-point
      ],
      children: [
        new _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"]("dOps", {
          /* prettier-ignore */
          contents: [0x00, // version
            header.channels, // output channel count
            _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"].getUint16(header.preSkip), // pre skip
            _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"].getUint32(header.inputSampleRate),// input sample rate
            _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"].getInt16(header.outputGain), // output gain
            header.channelMappingFamily, // channel mapping family int(8)
            (header.channelMappingFamily !== 0 ? [
              header.streamCount,
              header.coupledStreamCount,
              header.channelMappingTable // channel mapping table
            ] : [])
          ],
        }),
      ],
    });
  }

  getFlaC(header) {
    // https://github.com/xiph/flac/blob/master/doc/isoflac.txt
    return new _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"]("fLaC", {
      /* prettier-ignore */
      contents: [
        0x00,0x00,0x00,0x00,0x00,0x00, // reserved
        0x00,0x01, // data reference index
        0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00, // reserved
        0x00,header.channels, // channel count
        0x00,header.bitDepth, // PCM bitrate (16bit)
        0x00,0x00, // predefined
        0x00,0x00, // reserved
        _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"].getUint16(header.sampleRate),0x00,0x00, // sample rate 16.16 fixed-point
        /*
        When the bitstream's native sample rate is greater
        than the maximum expressible value of 65535 Hz,
        the samplerate field shall hold the greatest
        expressible regular division of that rate. I.e.
        the samplerate field shall hold 48000.0 for
        native sample rates of 96 and 192 kHz. In the
        case of unusual sample rates which do not have
        an expressible regular division, the maximum value
        of 65535.0 Hz should be used.
        */
      ],
      children: [
        new _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"]("dfLa", {
          /* prettier-ignore */
          contents: [
            0x00, // version
            0x00,0x00,0x00, // flags
            ...(header.streamInfo || [
              // * `A........` Last metadata block flag
              // * `.BBBBBBBB` BlockType
              0x80, // last metadata block, stream info
              0x00,0x00,0x22, // Length
              _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"].getUint16(header.blockSize), // maximum block size
              _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"].getUint16(header.blockSize), // minimum block size
              0x00,0x00,0x00, // maximum frame size
              0x00,0x00,0x00, // minimum frame size
              _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"].getUint32((header.sampleRate << 12) | (header.channels << 8) | ((header.bitDepth - 1) << 4)), // 20bits sample rate, 3bits channels, 5bits bitDepth - 1
              0x00,0x00,0x00,0x00, // total samples
              0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00 // md5 of stream
            ])
          ],
        }),
      ],
    });
  }

  getMp4a(header, esdsCodec) {
    const streamDescriptorTag = new _ESTag_js__WEBPACK_IMPORTED_MODULE_3__["default"](4, {
      /* prettier-ignore */
      contents: [
        esdsCodec,
        0x15, // stream type(6bits)=5 audio, flags(2bits)=1
        0x00,0x00,0x00, // 24bit buffer size
        0x00,0x00,0x00,0x00, // max bitrate
        0x00,0x00,0x00,0x00, // avg bitrate
      ],
    });

    // mp4a.40.2
    if (esdsCodec === 0x40) {
      streamDescriptorTag.addTag(
        new _ESTag_js__WEBPACK_IMPORTED_MODULE_3__["default"](5, {
          contents: header.audioSpecificConfig,
        })
      );
    }

    return new _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"]("mp4a", {
      /* prettier-ignore */
      contents: [0x00,0x00,0x00,0x00,0x00,0x00, // reserved
        0x00,0x01, // data reference index
        0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00, // reserved
        0x00,header.channels, // channel count
        0x00,0x10, // PCM bitrate (16bit)
        0x00,0x00, // Compression ID
        0x00,0x00, // Packet size
        _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"].getUint16(header.sampleRate),0x00,0x00], // sample rate unsigned floating point
      children: [
        new _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"]("esds", {
          contents: [0x00, 0x00, 0x00, 0x00],
          children: [
            new _ESTag_js__WEBPACK_IMPORTED_MODULE_3__["default"](3, {
              contents: [
                0x00,
                0x01, // ES_ID = 1
                0x00, // flags etc = 0
              ],
              tags: [
                streamDescriptorTag,
                new _ESTag_js__WEBPACK_IMPORTED_MODULE_3__["default"](6, {
                  contents: 0x02,
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }

  /**
   * @param {Header} header Codec frame
   * @returns {Uint8Array} Filetype and Movie Box information for the codec
   */
  getInitializationSegment({ header, samples }) {
    return new _ContainerElement_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
      children: [
        new _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"]("ftyp", {
          /* prettier-ignore */
          contents: [_Box_js__WEBPACK_IMPORTED_MODULE_2__["default"].stringToByteArray("iso5"), // major brand
            0x00,0x00,0x02,0x00, // minor version
            _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"].stringToByteArray("iso6mp41")], // compatible brands
        }),
        new _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"]("moov", {
          children: [
            new _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"]("mvhd", {
              /* prettier-ignore */
              contents: [0x00, // version
                0x00,0x00,0x00, // flags
                0x00,0x00,0x00,0x00, // creation time
                0x00,0x00,0x00,0x00, // modification time
                0x00,0x00,0x03,0xe8, // timescale
                0x00,0x00,0x00,0x00, // duration
                0x00,0x01,0x00,0x00, // rate
                0x01,0x00, // volume
                0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00, // reserved
                0x00,0x01,0x00,0x00, 0x00,0x00,0x00,0x00, 0x00,0x00,0x00,0x00, // a b u (matrix structure)
                0x00,0x00,0x00,0x00, 0x00,0x01,0x00,0x00, 0x00,0x00,0x00,0x00, // c d v
                0x00,0x00,0x00,0x00, 0x00,0x00,0x00,0x00, 0x40,0x00,0x00,0x00, // x y w
                0x00,0x00,0x00,0x00, // preview time
                0x00,0x00,0x00,0x00, // preview duration
                0x00,0x00,0x00,0x00, // poster time
                0x00,0x00,0x00,0x00, // selection time
                0x00,0x00,0x00,0x00, // selection duration
                0x00,0x00,0x00,0x00, // current time
                0x00,0x00,0x00,0x02], // next track
            }),
            new _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"]("trak", {
              children: [
                new _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"]("tkhd", {
                  /* prettier-ignore */
                  contents: [0x00, // version
                    0x00,0x00,0x03, // flags (0x01 - track enabled, 0x02 - track in movie, 0x04 - track in preview, 0x08 - track in poster)
                    0x00,0x00,0x00,0x00, // creation time
                    0x00,0x00,0x00,0x00, // modification time
                    0x00,0x00,0x00,0x01, // track id
                    0x00,0x00,0x00,0x00, // reserved
                    0x00,0x00,0x00,0x00, // duration
                    0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00, // reserved
                    0x00,0x00, // layer
                    0x00,0x01, // alternate group
                    0x01,0x00, // volume
                    0x00,0x00, // reserved
                    0x00,0x01,0x00,0x00, 0x00,0x00,0x00,0x00, 0x00,0x00,0x00,0x00, // a b u (matrix structure)
                    0x00,0x00,0x00,0x00, 0x00,0x01,0x00,0x00, 0x00,0x00,0x00,0x00, // c d v 
                    0x00,0x00,0x00,0x00, 0x00,0x00,0x00,0x00, 0x40,0x00,0x00,0x00, // x y w
                    0x00,0x00,0x00,0x00, // track width
                    0x00,0x00,0x00,0x00], // track height
                }),
                new _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"]("mdia", {
                  children: [
                    new _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"]("mdhd", {
                      /* prettier-ignore */
                      contents: [0x00, // version
                        0x00,0x00,0x00, // flags
                        0x00,0x00,0x00,0x00, // creation time (in seconds since midnight, January 1, 1904)
                        0x00,0x00,0x00,0x00, // modification time
                        _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"].getUint32(header.sampleRate), // time scale
                        0x00,0x00,0x00,0x00, // duration
                        0x55,0xc4, // language
                        0x00,0x00], // quality
                    }),
                    new _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"]("hdlr", {
                      /* prettier-ignore */
                      contents: [0x00, // version
                        0x00,0x00,0x00, // flags
                        _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"].stringToByteArray('mhlr'), // component type (mhlr, dhlr)
                        _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"].stringToByteArray('soun'), // component subtype (vide' for video data, 'soun' for sound data or ‘subt’ for subtitles)
                        0x00,0x00,0x00,0x00, // component manufacturer
                        0x00,0x00,0x00,0x00, // component flags
                        0x00,0x00,0x00,0x00, // component flags mask
                        0x00], // String that specifies the name of the component, terminated by a null character
                    }),
                    new _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"]("minf", {
                      children: [
                        new _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"]("stbl", {
                          children: [
                            new _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"]("stsd", {
                              // Sample description atom
                              /* prettier-ignore */
                              contents: [0x00, // version
                                0x00,0x00,0x00, // flags
                                0x00,0x00,0x00,0x01], // entry count
                              children: [this.getCodecBox(header)],
                            }),
                            new _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"]("stts", {
                              // Time-to-sample atom
                              /* prettier-ignore */
                              contents: [0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00],
                            }),
                            new _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"]("stsc", {
                              // Sample-to-chunk atom
                              /* prettier-ignore */
                              contents: [0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00],
                            }),
                            new _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"]("stsz", {
                              // Sample Size atom
                              /* prettier-ignore */
                              contents: [0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
                                0x00,0x00,0x00,0x00],
                            }),
                            new _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"]("stco", {
                              // Chunk Offset atom
                              /* prettier-ignore */
                              contents: [0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            new _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"]("mvex", {
              children: [
                new _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"]("trex", {
                  /* prettier-ignore */
                  contents: [0x00,0x00,0x00,0x00, // flags
                    0x00,0x00,0x00,0x01, // track id
                    0x00,0x00,0x00,0x01, // default_sample_description_index
                    _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"].getUint32(samples), // default_sample_duration
                    0x00,0x00,0x00,0x00, // default_sample_size;
                    0x00,0x00,0x00,0x00], // default_sample_flags;
                }),
              ],
            }),
          ],
        }),
      ],
    }).contents;
  }

  getSamplesPerFrame(frames) {
    return this._codec === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MP4A_40_2
      ? frames.map(({ data, header }) =>
          _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"].getUint32(data.length - header.length)
        )
      : frames.map(({ data }) => _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"].getUint32(data.length));
  }

  getFrameData(frames) {
    return this._codec === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MP4A_40_2
      ? frames.map(({ data, header }) => data.subarray(header.length))
      : frames.map(({ data }) => data);
  }

  /**
   * @description Wraps codec frames into a Movie Fragment
   * @param {Array<Frame>} frames Frames to contain in this Movie Fragment
   * @returns {Uint8Array} Movie Fragment containing the frames
   */
  getMediaSegment(frames) {
    return new _ContainerElement_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
      children: [
        new _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"]("moof", {
          children: [
            new _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"]("mfhd", {
              /* prettier-ignore */
              contents: [0x00,0x00,0x00,0x00, 0x00,0x00,0x00,0x00], // sequence number
            }),
            new _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"]("traf", {
              children: [
                new _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"]("tfhd", {
                  /* prettier-ignore */
                  contents: [0x00, // version
                    0b00000010,0x00,0b00000000, // flags
                    // * `AB|00000000|00CDE0FG`
                    // * `A.|........|........` default-base-is-moof
                    // * `.B|........|........` duration-is-empty
                    // * `..|........|..C.....` default-sample-flags-present
                    // * `..|........|...D....` default-sample-size-present
                    // * `..|........|....E...` default-sample-duration-present
                    // * `..|........|......F.` sample-description-index-present
                    // * `..|........|.......G` base-data-offset-present
                    0x00,0x00,0x00,0x01], // track id
                }),
                new _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"]("tfdt", {
                  /* prettier-ignore */
                  contents: [0x00, // version
                    0x00,0x00,0x00, // flags
                    0x00,0x00,0x00,0x00], // base media decode time
                }),
                new _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"]("trun", {
                  /* prettier-ignore */
                  contents: [0x00, // version
                    0x00,0b0000010,0b00000001, // flags
                    // * `ABCD|00000E0F`
                    // * `A...|........` sample‐composition‐time‐offsets‐present
                    // * `.B..|........` sample‐flags‐present
                    // * `..C.|........` sample‐size‐present
                    // * `...D|........` sample‐duration‐present
                    // * `....|.....E..` first‐sample‐flags‐present
                    // * `....|.......G` data-offset-present
                    _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"].getUint32(frames.length), // number of samples
                    _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"].getUint32(92 + frames.length * 4), // data offset
                    ...this.getSamplesPerFrame(frames)], // samples size per frame
                }),
              ],
            }),
          ],
        }),
        new _Box_js__WEBPACK_IMPORTED_MODULE_2__["default"]("mdat", {
          contents: this.getFrameData(frames),
        }),
      ],
    }).contents;
  }
}


/***/ }),

/***/ "./node_modules/mse-audio-wrapper/src/containers/webm/EBML.js":
/*!********************************************************************!*\
  !*** ./node_modules/mse-audio-wrapper/src/containers/webm/EBML.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EBML),
/* harmony export */   "id": () => (/* binding */ id)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants.js */ "./node_modules/mse-audio-wrapper/src/constants.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities.js */ "./node_modules/mse-audio-wrapper/src/utilities.js");
/* harmony import */ var _ContainerElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ContainerElement.js */ "./node_modules/mse-audio-wrapper/src/containers/ContainerElement.js");
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of mse-audio-wrapper.
    
    mse-audio-wrapper is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    mse-audio-wrapper is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/






class EBML extends _ContainerElement_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  /**
   * @description Extensible Binary Meta Language element
   * @param {name} name ID of the EBML element
   * @param {object} params Object containing contents or children
   * @param {boolean} [isUnknownLength] Set to true to use the unknown length constant for EBML
   * @param {Array<Uint8>} [params.contents] Array of bytes to insert into this box
   * @param {Array<Box>} [params.children] Array of children to insert into this box
   */
  constructor(name, { contents, children, isUnknownLength = false } = {}) {
    super({ name, contents, children });

    this._isUnknownLength = isUnknownLength;
  }

  /**
   * @description Converts a JavaScript number into a variable length EBML integer
   * @param {number} number Number to convert
   */
  static getUintVariable(number) {
    let buffer;

    if (number < 0x7f) {
      buffer = [0b10000000 | number];
    } else if (number < 0x3fff) {
      buffer = _ContainerElement_js__WEBPACK_IMPORTED_MODULE_2__["default"].getUint16(number);
      buffer[0] |= 0b01000000;
    } else if (number < 0x1fffff) {
      buffer = _ContainerElement_js__WEBPACK_IMPORTED_MODULE_2__["default"].getUint32(number).subarray(1);
      buffer[0] |= 0b00100000;
    } else if (number < 0xfffffff) {
      buffer = _ContainerElement_js__WEBPACK_IMPORTED_MODULE_2__["default"].getUint32(number);
      buffer[0] |= 0b00010000;
    } else if (number < 0x7ffffffff) {
      buffer = _ContainerElement_js__WEBPACK_IMPORTED_MODULE_2__["default"].getUint64(number).subarray(3);
      buffer[0] |= 0b00001000;
    } else if (number < 0x3ffffffffff) {
      buffer = _ContainerElement_js__WEBPACK_IMPORTED_MODULE_2__["default"].getUint64(number).subarray(2);
      buffer[0] |= 0b00000100;
    } else if (number < 0x1ffffffffffff) {
      buffer = _ContainerElement_js__WEBPACK_IMPORTED_MODULE_2__["default"].getUint64(number).subarray(1);
      buffer[0] |= 0b00000010;
    } else if (number < 0xffffffffffffff) {
      buffer = _ContainerElement_js__WEBPACK_IMPORTED_MODULE_2__["default"].getUint64(number);
      buffer[0] |= 0b00000001;
    } else if (typeof number !== "number" || isNaN(number)) {
      (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.logError)(
        `EBML Variable integer must be a number, instead received ${number}`
      );
      throw new Error(_constants_js__WEBPACK_IMPORTED_MODULE_0__.MSE_AUDIO_WRAPPER + ": Unable to encode WEBM");
    }

    return buffer;
  }

  _buildContents() {
    return [...this._name, ...this._lengthBytes, ...super._buildContents()];
  }

  _buildLength() {
    if (!this._length) {
      this._contentLength = super._buildLength();
      this._lengthBytes = this._isUnknownLength
        ? [0x01, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff] // unknown length constant
        : EBML.getUintVariable(this._contentLength);
      this._length =
        this._name.length + this._lengthBytes.length + this._contentLength;
    }

    return this._length;
  }
}

// https://tools.ietf.org/id/draft-lhomme-cellar-matroska-00.html
const id = {
  AlphaMode: [0x53, 0xc0],
  AspectRatioType: [0x54, 0xb3],
  AttachedFile: [0x61, 0xa7],
  AttachmentLink: [0x74, 0x46],
  Attachments: [0x19, 0x41, 0xa4, 0x69],
  Audio: [0xe1],
  BitDepth: [0x62, 0x64],
  BitsPerChannel: [0x55, 0xb2],
  Block: [0xa1],
  BlockAddID: [0xee],
  BlockAdditional: [0xa5],
  BlockAdditions: [0x75, 0xa1],
  BlockDuration: [0x9b],
  BlockGroup: [0xa0],
  BlockMore: [0xa6],
  CbSubsamplingHorz: [0x55, 0xb5],
  CbSubsamplingVert: [0x55, 0xb6],
  Channels: [0x9f],
  ChapCountry: [0x43, 0x7e],
  ChapLanguage: [0x43, 0x7c],
  ChapProcess: [0x69, 0x44],
  ChapProcessCodecID: [0x69, 0x55],
  ChapProcessCommand: [0x69, 0x11],
  ChapProcessData: [0x69, 0x33],
  ChapProcessPrivate: [0x45, 0x0d],
  ChapProcessTime: [0x69, 0x22],
  ChapString: [0x85],
  ChapterAtom: [0xb6],
  ChapterDisplay: [0x80],
  ChapterFlagEnabled: [0x45, 0x98],
  ChapterFlagHidden: [0x98],
  ChapterPhysicalEquiv: [0x63, 0xc3],
  Chapters: [0x10, 0x43, 0xa7, 0x70],
  ChapterSegmentEditionUID: [0x6e, 0xbc],
  ChapterSegmentUID: [0x6e, 0x67],
  ChapterStringUID: [0x56, 0x54],
  ChapterTimeEnd: [0x92],
  ChapterTimeStart: [0x91],
  ChapterTrack: [0x8f],
  ChapterTrackNumber: [0x89],
  ChapterTranslate: [0x69, 0x24],
  ChapterTranslateCodec: [0x69, 0xbf],
  ChapterTranslateEditionUID: [0x69, 0xfc],
  ChapterTranslateID: [0x69, 0xa5],
  ChapterUID: [0x73, 0xc4],
  ChromaSitingHorz: [0x55, 0xb7],
  ChromaSitingVert: [0x55, 0xb8],
  ChromaSubsamplingHorz: [0x55, 0xb3],
  ChromaSubsamplingVert: [0x55, 0xb4],
  Cluster: [0x1f, 0x43, 0xb6, 0x75],
  CodecDecodeAll: [0xaa],
  CodecDelay: [0x56, 0xaa],
  CodecID: [0x86],
  CodecName: [0x25, 0x86, 0x88],
  CodecPrivate: [0x63, 0xa2],
  CodecState: [0xa4],
  Colour: [0x55, 0xb0],
  ColourSpace: [0x2e, 0xb5, 0x24],
  ContentCompAlgo: [0x42, 0x54],
  ContentCompression: [0x50, 0x34],
  ContentCompSettings: [0x42, 0x55],
  ContentEncAlgo: [0x47, 0xe1],
  ContentEncKeyID: [0x47, 0xe2],
  ContentEncoding: [0x62, 0x40],
  ContentEncodingOrder: [0x50, 0x31],
  ContentEncodings: [0x6d, 0x80],
  ContentEncodingScope: [0x50, 0x32],
  ContentEncodingType: [0x50, 0x33],
  ContentEncryption: [0x50, 0x35],
  ContentSigAlgo: [0x47, 0xe5],
  ContentSigHashAlgo: [0x47, 0xe6],
  ContentSigKeyID: [0x47, 0xe4],
  ContentSignature: [0x47, 0xe3],
  CRC32: [0xbf],
  CueBlockNumber: [0x53, 0x78],
  CueClusterPosition: [0xf1],
  CueCodecState: [0xea],
  CueDuration: [0xb2],
  CuePoint: [0xbb],
  CueReference: [0xdb],
  CueRefTime: [0x96],
  CueRelativePosition: [0xf0],
  Cues: [0x1c, 0x53, 0xbb, 0x6b],
  CueTime: [0xb3],
  CueTrack: [0xf7],
  CueTrackPositions: [0xb7],
  DateUTC: [0x44, 0x61],
  DefaultDecodedFieldDuration: [0x23, 0x4e, 0x7a],
  DefaultDuration: [0x23, 0xe3, 0x83],
  DiscardPadding: [0x75, 0xa2],
  DisplayHeight: [0x54, 0xba],
  DisplayUnit: [0x54, 0xb2],
  DisplayWidth: [0x54, 0xb0],
  DocType: [0x42, 0x82],
  DocTypeReadVersion: [0x42, 0x85],
  DocTypeVersion: [0x42, 0x87],
  Duration: [0x44, 0x89],
  EBML: [0x1a, 0x45, 0xdf, 0xa3],
  EBMLMaxIDLength: [0x42, 0xf2],
  EBMLMaxSizeLength: [0x42, 0xf3],
  EBMLReadVersion: [0x42, 0xf7],
  EBMLVersion: [0x42, 0x86],
  EditionEntry: [0x45, 0xb9],
  EditionFlagDefault: [0x45, 0xdb],
  EditionFlagHidden: [0x45, 0xbd],
  EditionFlagOrdered: [0x45, 0xdd],
  EditionUID: [0x45, 0xbc],
  FieldOrder: [0x9d],
  FileData: [0x46, 0x5c],
  FileDescription: [0x46, 0x7e],
  FileMimeType: [0x46, 0x60],
  FileName: [0x46, 0x6e],
  FileUID: [0x46, 0xae],
  FlagDefault: [0x88],
  FlagEnabled: [0xb9],
  FlagForced: [0x55, 0xaa],
  FlagInterlaced: [0x9a],
  FlagLacing: [0x9c],
  Info: [0x15, 0x49, 0xa9, 0x66],
  LaceNumber: [0xcc],
  Language: [0x22, 0xb5, 0x9c],
  LuminanceMax: [0x55, 0xd9],
  LuminanceMin: [0x55, 0xda],
  MasteringMetadata: [0x55, 0xd0],
  MatrixCoefficients: [0x55, 0xb1],
  MaxBlockAdditionID: [0x55, 0xee],
  MaxCache: [0x6d, 0xf8],
  MaxCLL: [0x55, 0xbc],
  MaxFALL: [0x55, 0xbd],
  MinCache: [0x6d, 0xe7],
  MuxingApp: [0x4d, 0x80],
  Name: [0x53, 0x6e],
  NextFilename: [0x3e, 0x83, 0xbb],
  NextUID: [0x3e, 0xb9, 0x23],
  OutputSamplingFrequency: [0x78, 0xb5],
  PixelCropBottom: [0x54, 0xaa],
  PixelCropLeft: [0x54, 0xcc],
  PixelCropRight: [0x54, 0xdd],
  PixelCropTop: [0x54, 0xbb],
  PixelHeight: [0xba],
  PixelWidth: [0xb0],
  Position: [0xa7],
  PrevFilename: [0x3c, 0x83, 0xab],
  PrevSize: [0xab],
  PrevUID: [0x3c, 0xb9, 0x23],
  Primaries: [0x55, 0xbb],
  PrimaryBChromaticityX: [0x55, 0xd5],
  PrimaryBChromaticityY: [0x55, 0xd6],
  PrimaryGChromaticityX: [0x55, 0xd3],
  PrimaryGChromaticityY: [0x55, 0xd4],
  PrimaryRChromaticityX: [0x55, 0xd1],
  PrimaryRChromaticityY: [0x55, 0xd2],
  Range: [0x55, 0xb9],
  ReferenceBlock: [0xfb],
  ReferencePriority: [0xfa],
  SamplingFrequency: [0xb5],
  Seek: [0x4d, 0xbb],
  SeekHead: [0x11, 0x4d, 0x9b, 0x74],
  SeekID: [0x53, 0xab],
  SeekPosition: [0x53, 0xac],
  SeekPreRoll: [0x56, 0xbb],
  Segment: [0x18, 0x53, 0x80, 0x67],
  SegmentFamily: [0x44, 0x44],
  SegmentFilename: [0x73, 0x84],
  SegmentUID: [0x73, 0xa4],
  SilentTrackNumber: [0x58, 0xd7],
  SilentTracks: [0x58, 0x54],
  SimpleBlock: [0xa3],
  SimpleTag: [0x67, 0xc8],
  Slices: [0x8e],
  StereoMode: [0x53, 0xb8],
  Tag: [0x73, 0x73],
  TagAttachmentUID: [0x63, 0xc6],
  TagBinary: [0x44, 0x85],
  TagChapterUID: [0x63, 0xc4],
  TagDefault: [0x44, 0x84],
  TagEditionUID: [0x63, 0xc9],
  TagLanguage: [0x44, 0x7a],
  TagName: [0x45, 0xa3],
  Tags: [0x12, 0x54, 0xc3, 0x67],
  TagString: [0x44, 0x87],
  TagTrackUID: [0x63, 0xc5],
  Targets: [0x63, 0xc0],
  TargetType: [0x63, 0xca],
  TargetTypeValue: [0x68, 0xca],
  Timestamp: [0xe7],
  TimestampScale: [0x2a, 0xd7, 0xb1],
  TimeSlice: [0xe8],
  Title: [0x7b, 0xa9],
  TrackCombinePlanes: [0xe3],
  TrackEntry: [0xae],
  TrackJoinBlocks: [0xe9],
  TrackJoinUID: [0xed],
  TrackNumber: [0xd7],
  TrackOperation: [0xe2],
  TrackOverlay: [0x6f, 0xab],
  TrackPlane: [0xe4],
  TrackPlaneType: [0xe6],
  TrackPlaneUID: [0xe5],
  Tracks: [0x16, 0x54, 0xae, 0x6b],
  TrackTranslate: [0x66, 0x24],
  TrackTranslateCodec: [0x66, 0xbf],
  TrackTranslateEditionUID: [0x66, 0xfc],
  TrackTranslateTrackID: [0x66, 0xa5],
  TrackType: [0x83],
  TrackUID: [0x73, 0xc5],
  TransferCharacteristics: [0x55, 0xba],
  Video: [0xe0],
  Void: [0xec],
  WhitePointChromaticityX: [0x55, 0xd7],
  WhitePointChromaticityY: [0x55, 0xd8],
  WritingApp: [0x57, 0x41],
};


/***/ }),

/***/ "./node_modules/mse-audio-wrapper/src/containers/webm/WEBMContainer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/mse-audio-wrapper/src/containers/webm/WEBMContainer.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WEBMContainer)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants.js */ "./node_modules/mse-audio-wrapper/src/constants.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities.js */ "./node_modules/mse-audio-wrapper/src/utilities.js");
/* harmony import */ var _ContainerElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ContainerElement.js */ "./node_modules/mse-audio-wrapper/src/containers/ContainerElement.js");
/* harmony import */ var _EBML_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EBML.js */ "./node_modules/mse-audio-wrapper/src/containers/webm/EBML.js");
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of mse-audio-wrapper.
    
    mse-audio-wrapper is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    mse-audio-wrapper is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/







class WEBMContainer {
  constructor(codec) {
    switch (codec) {
      case _constants_js__WEBPACK_IMPORTED_MODULE_0__.OPUS: {
        this._codecId = "A_OPUS";
        this._getCodecSpecificTrack = (header) => [
          new _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"](_EBML_js__WEBPACK_IMPORTED_MODULE_3__.id.CodecDelay, {
            contents: _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"].getUint32(
              Math.round(header.preSkip * this._timestampScale)
            ),
          }), // OPUS codec delay
          new _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"](_EBML_js__WEBPACK_IMPORTED_MODULE_3__.id.SeekPreRoll, {
            contents: _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"].getUint32(Math.round(3840 * this._timestampScale)),
          }), // OPUS seek preroll 80ms
          new _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"](_EBML_js__WEBPACK_IMPORTED_MODULE_3__.id.CodecPrivate, { contents: header.data }), // OpusHead bytes
        ];
        break;
      }
      case _constants_js__WEBPACK_IMPORTED_MODULE_0__.VORBIS: {
        this._codecId = "A_VORBIS";
        this._getCodecSpecificTrack = (header) => [
          new _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"](_EBML_js__WEBPACK_IMPORTED_MODULE_3__.id.CodecPrivate, {
            contents: [
              0x02, // number of packets
              (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.xiphLacing)(header.data, header.vorbisComments),
              header.data,
              header.vorbisComments,
              header.vorbisSetup,
            ],
          }),
        ];
        break;
      }
    }
  }

  getInitializationSegment({ header }) {
    this._timestampScale = 1000000000 / header.sampleRate;

    return new _ContainerElement_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
      children: [
        new _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"](_EBML_js__WEBPACK_IMPORTED_MODULE_3__.id.EBML, {
          children: [
            new _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"](_EBML_js__WEBPACK_IMPORTED_MODULE_3__.id.EBMLVersion, { contents: 1 }),
            new _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"](_EBML_js__WEBPACK_IMPORTED_MODULE_3__.id.EBMLReadVersion, { contents: 1 }),
            new _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"](_EBML_js__WEBPACK_IMPORTED_MODULE_3__.id.EBMLMaxIDLength, { contents: 4 }),
            new _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"](_EBML_js__WEBPACK_IMPORTED_MODULE_3__.id.EBMLMaxSizeLength, { contents: 8 }),
            new _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"](_EBML_js__WEBPACK_IMPORTED_MODULE_3__.id.DocType, { contents: _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"].stringToByteArray(_constants_js__WEBPACK_IMPORTED_MODULE_0__.WEBM) }),
            new _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"](_EBML_js__WEBPACK_IMPORTED_MODULE_3__.id.DocTypeVersion, { contents: 4 }),
            new _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"](_EBML_js__WEBPACK_IMPORTED_MODULE_3__.id.DocTypeReadVersion, { contents: 2 }),
          ],
        }),
        new _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"](_EBML_js__WEBPACK_IMPORTED_MODULE_3__.id.Segment, {
          isUnknownLength: true,
          children: [
            new _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"](_EBML_js__WEBPACK_IMPORTED_MODULE_3__.id.Info, {
              children: [
                new _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"](_EBML_js__WEBPACK_IMPORTED_MODULE_3__.id.TimestampScale, {
                  contents: _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"].getUint32(
                    Math.floor(this._timestampScale) // Base timestamps on sample rate vs. milliseconds https://www.matroska.org/technical/notes.html#timestamps
                  ),
                }),
                new _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"](_EBML_js__WEBPACK_IMPORTED_MODULE_3__.id.MuxingApp, {
                  contents: _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"].stringToByteArray(_constants_js__WEBPACK_IMPORTED_MODULE_0__.MSE_AUDIO_WRAPPER),
                }),
                new _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"](_EBML_js__WEBPACK_IMPORTED_MODULE_3__.id.WritingApp, {
                  contents: _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"].stringToByteArray(_constants_js__WEBPACK_IMPORTED_MODULE_0__.MSE_AUDIO_WRAPPER),
                }),
              ],
            }),
            new _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"](_EBML_js__WEBPACK_IMPORTED_MODULE_3__.id.Tracks, {
              children: [
                new _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"](_EBML_js__WEBPACK_IMPORTED_MODULE_3__.id.TrackEntry, {
                  children: [
                    new _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"](_EBML_js__WEBPACK_IMPORTED_MODULE_3__.id.TrackNumber, { contents: 0x01 }),
                    new _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"](_EBML_js__WEBPACK_IMPORTED_MODULE_3__.id.TrackUID, { contents: 0x01 }),
                    new _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"](_EBML_js__WEBPACK_IMPORTED_MODULE_3__.id.FlagLacing, { contents: 0x00 }),
                    new _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"](_EBML_js__WEBPACK_IMPORTED_MODULE_3__.id.CodecID, {
                      contents: _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"].stringToByteArray(this._codecId),
                    }),
                    new _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"](_EBML_js__WEBPACK_IMPORTED_MODULE_3__.id.TrackType, { contents: 0x02 }), // audio
                    new _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"](_EBML_js__WEBPACK_IMPORTED_MODULE_3__.id.Audio, {
                      children: [
                        new _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"](_EBML_js__WEBPACK_IMPORTED_MODULE_3__.id.Channels, { contents: header.channels }),
                        new _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"](_EBML_js__WEBPACK_IMPORTED_MODULE_3__.id.SamplingFrequency, {
                          contents: _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"].getFloat64(header.sampleRate),
                        }),
                        new _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"](_EBML_js__WEBPACK_IMPORTED_MODULE_3__.id.BitDepth, { contents: header.bitDepth }),
                      ],
                    }),
                    ...this._getCodecSpecificTrack(header),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }).contents;
  }

  getMediaSegment(frames) {
    const offsetSamples = frames[0].totalSamples;

    return new _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"](_EBML_js__WEBPACK_IMPORTED_MODULE_3__.id.Cluster, {
      children: [
        new _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"](_EBML_js__WEBPACK_IMPORTED_MODULE_3__.id.Timestamp, {
          contents: _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"].getUintVariable(offsetSamples), // Absolute timecode of the cluster
        }),
        ...frames.map(
          ({ data, totalSamples }) =>
            new _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"](_EBML_js__WEBPACK_IMPORTED_MODULE_3__.id.SimpleBlock, {
              contents: [
                0x81, // track number
                _EBML_js__WEBPACK_IMPORTED_MODULE_3__["default"].getInt16(totalSamples - offsetSamples), // timestamp relative to cluster Int16
                0x80, // No lacing
                data, // ogg page contents
              ],
            })
        ),
      ],
    }).contents;
  }
}


/***/ }),

/***/ "./node_modules/mse-audio-wrapper/src/utilities.js":
/*!*********************************************************!*\
  !*** ./node_modules/mse-audio-wrapper/src/utilities.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logError": () => (/* binding */ logError),
/* harmony export */   "xiphLacing": () => (/* binding */ xiphLacing)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./node_modules/mse-audio-wrapper/src/constants.js");
/* Copyright 2020-2021 Ethan Halsall
    
    This file is part of mse-audio-wrapper.
    
    mse-audio-wrapper is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    mse-audio-wrapper is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/



const xiphLacing = (...buffers) =>
  buffers.flatMap((buffer) => {
    const lacing = [];
    for (let l = buffer.length; l >= 0; l -= 255) {
      lacing.push(l >= 255 ? 255 : l);
    }
    return lacing;
  });

const logError = (...messages) => {
  console.error(
    _constants_js__WEBPACK_IMPORTED_MODULE_0__.MSE_AUDIO_WRAPPER,
    messages.reduce((acc, message) => acc + "\n  " + message, "")
  );
};




/***/ }),

/***/ "./node_modules/opus-decoder/index.js":
/*!********************************************!*\
  !*** ./node_modules/opus-decoder/index.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpusDecoder": () => (/* reexport safe */ _src_OpusDecoder_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "OpusDecoderWebWorker": () => (/* reexport safe */ _src_OpusDecoderWebWorker_js__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _src_OpusDecoder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/OpusDecoder.js */ "./node_modules/opus-decoder/src/OpusDecoder.js");
/* harmony import */ var _src_OpusDecoderWebWorker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/OpusDecoderWebWorker.js */ "./node_modules/opus-decoder/src/OpusDecoderWebWorker.js");






/***/ }),

/***/ "./node_modules/opus-decoder/src/EmscriptenWasm.js":
/*!*********************************************************!*\
  !*** ./node_modules/opus-decoder/src/EmscriptenWasm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmscriptenWASM)
/* harmony export */ });
/* **************************************************
 * This file is auto-generated during the build process.
 * Any edits to this file will be overwritten.
 ****************************************************/

class EmscriptenWASM {
constructor() {
var TINF_OK = 0;
var TINF_DATA_ERROR = -3;

const uint8Array = Uint8Array;
const uint16Array = Uint16Array;

function Tree() {
  this.t = new uint16Array(16); /* table of code length counts */
  this.trans = new uint16Array(288); /* code -> symbol translation table */
}

function Data(source, dest) {
  this.s = source;
  this.i = 0;
  this.t = 0;
  this.bitcount = 0;

  this.dest = dest;
  this.destLen = 0;

  this.ltree = new Tree(); /* dynamic length/symbol tree */
  this.dtree = new Tree(); /* dynamic distance tree */
}

/* --------------------------------------------------- *
 * -- uninitialized global data (static structures) -- *
 * --------------------------------------------------- */

var sltree = new Tree();
var sdtree = new Tree();

/* extra bits and base tables for length codes */
var length_bits = new uint8Array(30);
var length_base = new uint16Array(30);

/* extra bits and base tables for distance codes */
var dist_bits = new uint8Array(30);
var dist_base = new uint16Array(30);

/* special ordering of code length codes */
var clcidx = new uint8Array([
  16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
]);

/* used by tinf_decode_trees, avoids allocations every call */
var code_tree = new Tree();
var lengths = new uint8Array(288 + 32);

/* ----------------------- *
 * -- utility functions -- *
 * ----------------------- */

/* build extra bits and base tables */
const tinf_build_bits_base = (bits, base, delta, first) => {
  var i, sum;

  /* build bits table */
  for (i = 0; i < delta; ++i) bits[i] = 0;
  for (i = 0; i < 30 - delta; ++i) bits[i + delta] = (i / delta) | 0;

  /* build base table */
  for (sum = first, i = 0; i < 30; ++i) {
    base[i] = sum;
    sum += 1 << bits[i];
  }
};

/* build the fixed huffman trees */
const tinf_build_fixed_trees = (lt, dt) => {
  var i;

  /* build fixed length tree */
  for (i = 0; i < 7; ++i) lt.t[i] = 0;

  lt.t[7] = 24;
  lt.t[8] = 152;
  lt.t[9] = 112;

  for (i = 0; i < 24; ++i) lt.trans[i] = 256 + i;
  for (i = 0; i < 144; ++i) lt.trans[24 + i] = i;
  for (i = 0; i < 8; ++i) lt.trans[24 + 144 + i] = 280 + i;
  for (i = 0; i < 112; ++i) lt.trans[24 + 144 + 8 + i] = 144 + i;

  /* build fixed distance tree */
  for (i = 0; i < 5; ++i) dt.t[i] = 0;

  dt.t[5] = 32;

  for (i = 0; i < 32; ++i) dt.trans[i] = i;
};

/* given an array of code lengths, build a tree */
var offs = new uint16Array(16);

const tinf_build_tree = (t, lengths, off, num) => {
  var i, sum;

  /* clear code length count table */
  for (i = 0; i < 16; ++i) t.t[i] = 0;

  /* scan symbol lengths, and sum code length counts */
  for (i = 0; i < num; ++i) t.t[lengths[off + i]]++;

  t.t[0] = 0;

  /* compute offset table for distribution sort */
  for (sum = 0, i = 0; i < 16; ++i) {
    offs[i] = sum;
    sum += t.t[i];
  }

  /* create code->symbol translation table (symbols sorted by code) */
  for (i = 0; i < num; ++i) {
    if (lengths[off + i]) t.trans[offs[lengths[off + i]]++] = i;
  }
};

/* ---------------------- *
 * -- decode functions -- *
 * ---------------------- */

/* get one bit from source stream */
const tinf_getbit = (d) => {
  /* check if tag is empty */
  if (!d.bitcount--) {
    /* load next tag */
    d.t = d.s[d.i++];
    d.bitcount = 7;
  }

  /* shift bit out of tag */
  var bit = d.t & 1;
  d.t >>>= 1;

  return bit;
};

/* read a num bit value from a stream and add base */
const tinf_read_bits = (d, num, base) => {
  if (!num) return base;

  while (d.bitcount < 24) {
    d.t |= d.s[d.i++] << d.bitcount;
    d.bitcount += 8;
  }

  var val = d.t & (0xffff >>> (16 - num));
  d.t >>>= num;
  d.bitcount -= num;
  return val + base;
};

/* given a data stream and a tree, decode a symbol */
const tinf_decode_symbol = (d, t) => {
  while (d.bitcount < 24) {
    d.t |= d.s[d.i++] << d.bitcount;
    d.bitcount += 8;
  }

  var sum = 0,
    cur = 0,
    len = 0;
  var tag = d.t;

  /* get more bits while code value is above sum */
  do {
    cur = 2 * cur + (tag & 1);
    tag >>>= 1;
    ++len;

    sum += t.t[len];
    cur -= t.t[len];
  } while (cur >= 0);

  d.t = tag;
  d.bitcount -= len;

  return t.trans[sum + cur];
};

/* given a data stream, decode dynamic trees from it */
const tinf_decode_trees = (d, lt, dt) => {
  var hlit, hdist, hclen;
  var i, num, length;

  /* get 5 bits HLIT (257-286) */
  hlit = tinf_read_bits(d, 5, 257);

  /* get 5 bits HDIST (1-32) */
  hdist = tinf_read_bits(d, 5, 1);

  /* get 4 bits HCLEN (4-19) */
  hclen = tinf_read_bits(d, 4, 4);

  for (i = 0; i < 19; ++i) lengths[i] = 0;

  /* read code lengths for code length alphabet */
  for (i = 0; i < hclen; ++i) {
    /* get 3 bits code length (0-7) */
    var clen = tinf_read_bits(d, 3, 0);
    lengths[clcidx[i]] = clen;
  }

  /* build code length tree */
  tinf_build_tree(code_tree, lengths, 0, 19);

  /* decode code lengths for the dynamic trees */
  for (num = 0; num < hlit + hdist; ) {
    var sym = tinf_decode_symbol(d, code_tree);

    switch (sym) {
      case 16:
        /* copy previous code length 3-6 times (read 2 bits) */
        var prev = lengths[num - 1];
        for (length = tinf_read_bits(d, 2, 3); length; --length) {
          lengths[num++] = prev;
        }
        break;
      case 17:
        /* repeat code length 0 for 3-10 times (read 3 bits) */
        for (length = tinf_read_bits(d, 3, 3); length; --length) {
          lengths[num++] = 0;
        }
        break;
      case 18:
        /* repeat code length 0 for 11-138 times (read 7 bits) */
        for (length = tinf_read_bits(d, 7, 11); length; --length) {
          lengths[num++] = 0;
        }
        break;
      default:
        /* values 0-15 represent the actual code lengths */
        lengths[num++] = sym;
        break;
    }
  }

  /* build dynamic trees */
  tinf_build_tree(lt, lengths, 0, hlit);
  tinf_build_tree(dt, lengths, hlit, hdist);
};

/* ----------------------------- *
 * -- block inflate functions -- *
 * ----------------------------- */

/* given a stream and two trees, inflate a block of data */
const tinf_inflate_block_data = (d, lt, dt) => {
  while (1) {
    var sym = tinf_decode_symbol(d, lt);

    /* check for end of block */
    if (sym === 256) {
      return TINF_OK;
    }

    if (sym < 256) {
      d.dest[d.destLen++] = sym;
    } else {
      var length, dist, offs;
      var i;

      sym -= 257;

      /* possibly get more bits from length code */
      length = tinf_read_bits(d, length_bits[sym], length_base[sym]);

      dist = tinf_decode_symbol(d, dt);

      /* possibly get more bits from distance code */
      offs = d.destLen - tinf_read_bits(d, dist_bits[dist], dist_base[dist]);

      /* copy match */
      for (i = offs; i < offs + length; ++i) {
        d.dest[d.destLen++] = d.dest[i];
      }
    }
  }
};

/* inflate an uncompressed block of data */
const tinf_inflate_uncompressed_block = (d) => {
  var length, invlength;
  var i;

  /* unread from bitbuffer */
  while (d.bitcount > 8) {
    d.i--;
    d.bitcount -= 8;
  }

  /* get length */
  length = d.s[d.i + 1];
  length = 256 * length + d.s[d.i];

  /* get one's complement of length */
  invlength = d.s[d.i + 3];
  invlength = 256 * invlength + d.s[d.i + 2];

  /* check length */
  if (length !== (~invlength & 0x0000ffff)) return TINF_DATA_ERROR;

  d.i += 4;

  /* copy block */
  for (i = length; i; --i) d.dest[d.destLen++] = d.s[d.i++];

  /* make sure we start next block on a byte boundary */
  d.bitcount = 0;

  return TINF_OK;
};

/* inflate stream from source to dest */
const tinf_uncompress = (source, dest) => {
  var d = new Data(source, dest);
  var bfinal, btype, res;

  do {
    /* read final block flag */
    bfinal = tinf_getbit(d);

    /* read block type (2 bits) */
    btype = tinf_read_bits(d, 2, 0);

    /* decompress block */
    switch (btype) {
      case 0:
        /* decompress uncompressed block */
        res = tinf_inflate_uncompressed_block(d);
        break;
      case 1:
        /* decompress block with fixed huffman trees */
        res = tinf_inflate_block_data(d, sltree, sdtree);
        break;
      case 2:
        /* decompress block with dynamic huffman trees */
        tinf_decode_trees(d, d.ltree, d.dtree);
        res = tinf_inflate_block_data(d, d.ltree, d.dtree);
        break;
      default:
        res = TINF_DATA_ERROR;
    }

    if (res !== TINF_OK) throw new Error("Data error");
  } while (!bfinal);

  if (d.destLen < d.dest.length) {
    if (typeof d.dest.slice === "function") return d.dest.slice(0, d.destLen);
    else return d.dest.subarray(0, d.destLen);
  }

  return d.dest;
};

/* -------------------- *
 * -- initialization -- *
 * -------------------- */

/* build fixed huffman trees */
tinf_build_fixed_trees(sltree, sdtree);

/* build extra bits and base tables */
tinf_build_bits_base(length_bits, length_base, 4, 3);
tinf_build_bits_base(dist_bits, dist_base, 2, 1);

/* fix a special case */
length_bits[28] = 0;
length_base[28] = 258;
var Module = Module;

function ready() {}

Module = {};

function abort(what) {
 throw what;
}

for (var base64ReverseLookup = new Uint8Array(123), i = 25; i >= 0; --i) {
 base64ReverseLookup[48 + i] = 52 + i;
 base64ReverseLookup[65 + i] = i;
 base64ReverseLookup[97 + i] = 26 + i;
}

base64ReverseLookup[43] = 62;

base64ReverseLookup[47] = 63;

function base64Decode(b64) {
 var b1, b2, i = 0, j = 0, bLength = b64.length, output = new Uint8Array((bLength * 3 >> 2) - (b64[bLength - 2] == "=") - (b64[bLength - 1] == "="));
 for (;i < bLength; i += 4, j += 3) {
  b1 = base64ReverseLookup[b64.charCodeAt(i + 1)];
  b2 = base64ReverseLookup[b64.charCodeAt(i + 2)];
  output[j] = base64ReverseLookup[b64.charCodeAt(i)] << 2 | b1 >> 4;
  output[j + 1] = b1 << 4 | b2 >> 2;
  output[j + 2] = b2 << 6 | base64ReverseLookup[b64.charCodeAt(i + 3)];
 }
 return output;
}

Module["wasm"] = tinf_uncompress(((string) => {
  const output = new Uint8Array(string.length);

  let continued = false,
    byteIndex = 0,
    byte;

  for (let i = 0; i < string.length; i++) {
    byte = string.charCodeAt(i);

    if (byte === 13 || byte === 10) continue;

    if (byte === 61 && !continued) {
      continued = true;
      continue;
    }

    if (continued) {
      continued = false;
      byte -= 64;
    }

    output[byteIndex++] = byte < 42 && byte > 0 ? byte + 214 : byte - 42;
  }

  return output.subarray(0, byteIndex);
})(`¾ç9¶§	#§))ööÅ6cÆÉYSr{NO{M´$mtÌRtÀ>KOãØ=@üèa°þº2:s{ËÕÒ·Lw\`l®ìj·¯AZÞ¸j¶°.åðì>íå.Sý½à4Ê)ÒÉ¡¥rówW§!È¥øÆeé	&(ÇôÁ¨SÓ~Tó±óüßU&Ù¤tãÔYi¤íùî(Ê9Èç¼æ<5ïüÙè£Ø¢<§ÙhaUüH'qÑ¦Ñ6Öó9ôÄìÉçt?¤ÓfÅRî½ÜýßuóÁT((_%%~Ô&§èüÒÈi×Ps×y¼sdtáüøOY^üudiçÚßèP×PÍÐK=Md×åçÎÈx_"tµÅ¿×ÿt¤Ðy¨Ks¼¤MsØÐýpÅëUh"©º ÅU#Yõ¿¼ATyQYlÈt0¿óÚÜOuTÇÉ(ãé{uÔl×g{eCR>ü¨ä>T]¨Î­ÖÄýÁµ¯±QílOu¥sÁY½]=MÔQmD¼U¿=M?èU¼kp¿~IxM~IÃÔåþWãº´?H®ºmôçÛ¼}ªú_×#_#_#©_%&d¡µÕÌ	w¡"w­	w!$ôä¡1ý­¨¡_g¡qýÍ¨¡_g¡!ØÐ!üÝ½m¤0æ=};ÙyvOÅÊy´Äp*=JãóýqSÑ«Ô@ßqðíðÙ5¿³q¹ÎOñUDiü=M¿þÔñUÿSËÓ|Q÷q_øòíØü'|å<T¶~øÅõ!KÕ?6²=@Ê~	®jãwLÒû2ÿË0Â3Þå:T'º ©ÆP?b£²ãÏKj\\V6¶´¼l¿zd#|Ç¦j½oý5=@PÉÕÈA&H¬*{Uh*MÌm­ÆmgØAþîYúrÁDÿÞÎ·4I?.¹+Û+ý{âi$¨ábä{OêY>µA:z¬ÿEÔ-É}¿åÔ^Ê5_,äÒjK4$áqÝÉÖrG=@Îû­õ£rÈäÎçnÊó;tNíºX6æíý4'uHáü=JVihæuÝdR'¤ãQ{O¿ËËÉoÏõ	iÔQU¥TeÙß¸[8ïY4")ëÙ)Ê\\ÆþÔýódgÞ&½åå±ý·$¥ä+\\Oï9"Çàe}V³z¯0-vÞOï­ôÃSðg)×ñ#k¹ÂÇ§¿ÆËüû#W iÕ»fdÿÜç$ÜÛm}WÙE<ìg©ËPÔÆÑßÖ9âpVëtÛ\\2´ç"Êá×æàðRþ1ïûkéÛÎÔËÖ7ÊÒA%¦àðq´9U­kq¿k@E-XÖ5ÆøD^V¬ÎA¤F>Ù'¿®ÀßZ#ÕÞKyLsRÛÉû´5rÏ)þ|ÞÇÓ7ÏB~¥áÍ'þDêÿ*»ØüÉc}¹|=@ÐSBo'B@c~ÿ¾z~¿²,!1'­üàÿßÂ÷BÃbuUÞ	»zÆ)v»êN´ôÖ@ÏÕ±¥g»¢riHèFXg]/MÐ¤éàNClÃúøÐâû¾]§wf¡Y[Åh·ß£þ&Ò}öRè£vÕÁ%Ï¢yAÝxÂ4÷ß@ÐX­dv×gÊ-ÖÃ´Çóq× l§&[Q[A"<­{1ù\\Ä9ú{}çLçZ¿°ôÃ5A4ù°XBcÇìÀò ¤$\\=}1°»4ã6Uoæ=Jä.Ä9ç(í~Ä³7¦Kn¯x©ßßaAIA=MwV=@/\\×ê±Ðüg¿æ¼ßSÎ¹:^CWÉÿ4ÆC>éÂa ¤Þ3 ìT¹«]v=@lÕWèô=}âIõ;èU|Æßá1üô[ ºõ7´¨3¨¤¨ðûç"Ûk=@Ýp×ßèÐl×Ûv~I²Òá¦Ý(÷´0\`ÂGmèú[D©=Mâ·°·\`DÄ¨nÐ¯Á©°# #É=}=J2=@´ôDZvËG¾/uÙC´D¤x¦=}¼&År<V#¨µ$ä~.ðÖíÄ=@\`Þ\`þq:Ãxë,YØæ¦K­Oä¡µ	ëÖmlÈ8YÿÌ¡RÌ0-Rs¬câ ¹UDq±ö	NíJÝE[_³èrÄ^Ér|ØD*PMp£';?¹¬¼.6;:W Ëd6=}ªúÖ±oòßÂgíBµ@oÝÒe¿Ö0Åb¿ \\sW2z¼jºól§(ÝR[¥ÑCRdN{q¬¸*I¨NùvÂaCæ©MÝ¡V=@oG÷ü±Ðª=}Î#K®{¶ùFÅOøE\\YâúSÙÌDF44<·¬T´!z'¶µ%¼ªú´¿¼©{Ã±ävTÅÖUjfÔ´À\`õr=}=}ðìMÂÆ:þñu=J$ü¿Õ2h2}Ú³ÓêX»uÿTêÞdþoâü5&¤8&fn|lDîzý2^Ð\\]KI3·´bõ^n>´Ño¡ÿ(óæý	&vÞÀ3¢Ëa¬1±<ðßI$<n¥­ÝUYjÜÒ´ÏFÕ<ãÔä¬ðbLísÙ@ÊDkH6-*X]ú¾Ö÷þlÔH\`¦ÄÇú~Ûm<r,Nz,½K£V8$%.YM.ûÉµDÔ÷I@<zðIzÆ¿O¤êJèÉW¥iÔfÍóÏÁß64BÒ"ñIuÙÕ²³ÞÔHDíuíÖÏ Oµ°H7pÛ%|òº@H§­pàðe1¥ÆbZçøø\\nHg*ô$\\µÔnF±o$|üÃ¯IkâÍgÃ.ÙëòÝèí=@úz5µ£,×Ö=M:lõUà2Ç´ïÝõË_=Jèú$u'· Oâ¤Ì¾ûÄVÞ×R=Jd:M:ÃÜ;nèu7ß^¬Ýw]=}7kAdp°o®­ÖBð÷QúV*ùùLcßÃþ¨ G³cP{>6=}¢^Y>×µÕÁÓçH@=J¶pz\\Þ[®ZÅ±æVe¹ØÚ*7i¯u©yrÂæÑ¦lÅ3ÒfÛÜìp¹3=}UaÜx¾¹wd01£Eà, Þ¸V¿Y´ÀÞíìYµÿêj3gû¨Ï¾Â×F{!ÏzqK<ÕZãCæÉ&Pþ	©=J!è)³áëj_þAãèä×§ùDOrb)S­TFÕ7^4àæÁïÔmà1$nàú_~è¤LV&pà·À;F*¥éT-Òö\`KÒJóá&¦YÕþ=}ÎÏ×ÁFv©ÛÅMkýñú«òèÉ7	ÙAí Ú=M{E³KöÛ1|E·Ü0\`.ËÍ»õ´o.)Ô''¦KVæw/&÷@v,¸æèKmI­Ðí'¥eÜdÿ¨úÛ¦K2õ°¥ûÈÃ~ó¦à»Ê[è7(%ðÝªá7à}LÜZac[W«ÆÎü>tB¶æÌ¯îsE?ýÚÏÊ¥¦ÖW¯/±Õðô1P¶nÌ;Ìk-Ò»Û³ÿÝÏTBÍõ÷P^­ã¦5$qZÙmþJdÔÐ_¢ÃeHødÐ+È´Z° Í°]¸ÅBCÉgÌ Ê]¿tô·?¡yUjöªäPgÐS?oÁÒÏt\`ÕÑmygÊ|qÈ¯U=@;õV_nókíA»c=@*¤ßð1zþv¦\`Ð)jÂà×m­:ì(3ëgMZ@'%«0£alQÎôCu'pEÊÃÝK÷E*ÿ¨|är}=M¼"aÒV)ØUùPJÆÏ¼v~ñnÌ[·¬¨=J4ýi=@½5O×°h=}Éøßñ6]@ºliöÓÂ"Ê¼O¾×<åo¼TÄG¢.ú§®pTKËCÒ{l6íõo©çtê$²5@æ@D,µS°6²ùïÍ$<¦ç®\`L¢EÓuv5;7=}ÞÚ´=@¡ç0UA°ú&N]Àmïô±Cs0E­À:)Sâ%íX=}ë2dÜ@¡µT¥ÑºÎrX4ù¿Ü8+À£élãõ£¥àç»°ªyGÙÊ/·õMõI~>úÖFs=}j|ì<|mCpòõ<V¡hÿÞU](ü\`cußIj3äºáOõÖ!p[îÎZÛé8ÜèôN­?®g 6q½ò¨-³8d7Ï=}ççq©¨Åï$áè)yUï)Qé'yÔ<"ÙwYVE'­ó9@ãÉ·àªDÊ5[,^þàÔaþ\`©'Õ|/EÚè?ç÷ha}mÒ	uü$¿_QuÅG¦Ìhó¿ÏõàÜÿ[tUÄû$D%q+¾þ©åî0~x]l­º¨lËægë eäÖag{²ÌÒwÞG^K¶i¥C7ûÇåÈf¡·Ä¡ÊÞp!oþæÐN3ZÓÞ{6ÿAjWÎPjYÛOü¸=}fuE¼èÃo=@Yô:Ê§X¡Z~=}ÒáÍ9¼¨És(ôuÿñÙý0D·³Ê	w	*ÃÝc	" }ïYq´Ï&Àz½ìò\`\\NÖì»Lç¾×kg~ÑÑ´Y?ÿ_¾/ßZ§0ÀØÇ¸\`ÖÉÔO0P{mýt¤|¦_ös>:Oümr	ÂÞwT%®ZáP¤ ôdGÆ(ö¯MGìýAÕtì;'eÝÉ]7Ü;ãÆ\`TZp$v|ü¹y[1wú(c§ù@¥÷&ÝPÅ\`@¡x«,Uü®2Ø¯HV D0&ûöJip:+ËæÏµ(£bg^×:0E½ÇïÉ_kPniÁy³1wSÍAÑ{£ïí}77|¦ßìô =}¿x=Mf±å£S·ÌèiÂ?8&AªY<úìCÝ&ö¯>Þ\\ås$;.tXÛüo(ÍÝ'ãÏ÷l¥áñd×Y=MàÐÏA¹É¾=JÓI$<s¿+R¥1Ò=}÷£ùS©¾øÆ iÉúÆ@3,»¨ÿª\\=M]'¤æòfÍWæîNB$ø6UKF¿ í#©ÒÂàr2ÌÓe&H%9ÎUÛê¤ß'O÷G¼¼$­emòøZõ¸+bRb¼«RSôé¬$@ì¨0©¸¶æÄè9õÜC×±¸7ÉÍcàè¥½Ä¨^¼°5ìöt$Óú:¤ùzúi:[·U¥)Óô<¡Ö:ü%ÈHæcÑc÷H[®ó¹Ê¸DïçÀwÈù$6ð@¤»wõO¤ xÍ­rïçü]þµ?éöifY½ý¯y® µ<ß£AfåãÄ2·DÕ¹´ÙôÅo¡byßD°Vº¼ãÓàoîÍH]X»y?ßÿÕþ£RËSb	&DY=@ÜÏâdm-äÅ¿×ãúÌEóµÕÒé»ÜénÝ½cÇüZû!Gò#9?é#IÌÃ_'Õ""Ñ?»êÀ¿üpÀÁDCá¨ë÷éx']]^òè8¿r,w¦_§yô±$køê¦¹Äo±(æ¥ÁGÉX¥÷{<ÒèÝÁ1ïÇëë4²_¤iU×ºàBóä¤õöìHÚ­Ð¥>e	Zå_ïo¨E/%7^>åÄ©!÷ø$jb\`÷M¡ÏEÍt@Dpw¦^^v@Ï»{Ó!ÂtaÁ£»»Ùî@b§»ûý@¸Áï¥R°hË¾»N·¬¢Ðÿq	füÔÂ;Ýpn)ñ$¤çîÂç8Üð+°Ëá0kÜ\`=JÁÐº	fG®À¼Ä¦õÄ¿1_&4)Æ5VAªs"çÎQøo¦&ñq´©¥ny\`´æèe|&)qú¯#ÌDT ëÆóq\\¸>Êó¥¦ ÇïyÏîYËÒûÕa@¢kÁØIÅUhdÆ_q6¦H#ç¬mt4>©ðU7÷iÔ6}Õ!åzÿ¡­e£m·'[97ÒgÉë=@üTç´­ñÅ¦7ïJU¶rB¬¦Ä¦ÿ!ºD?ódìvº~B,qÑvÅS<sÄYM6@ú¸}¨'jÙIGaØ6Px>× nJÆzËÿTÌN¯eVØ§qN	pÂ%ønòÇ½p®ý8ZpònècS&¢J?Æ[ã"=Mãk}N§0N]a+pâKæµhÄUq°ûFýDCí<zÛò9ÄÛcp$=}C¨d´W×#?ÔZÐªóÓnÕÎ&®Lb!zaìêa9qPé+]4,ÚpÈS¯¸a(ÕWj1THeV²5{ÿ'+d¬â=}Ôk-0m\\Cg´hì1xÍÒG*÷6©¬±Ç§ºwÓÝÅ¤³q7-Åwnî¯P) ®§ú)Æ>Ò¿"=JwH¦=@0~¿íJ{[ÊÆüü·z³{ ©xÉú!	:1p5Ú)ósÑ=JÜò=@Uºùz">Db0I-\`=M²wé£~wÏ¸=J¾Ä\`t+»BE\`Y±Ãmó1Ñ}®,å)K!ÙMöWmTÜ-%]UD56ze¹kÚéu¬èP(é¬UÅ¡ÿ¤'°ê²¹ Nv¶ØTÛÿÚ ¢¨:	3´ö>ø7®iªÎSükvôý(Z·/åàú¶ÊW±Ë5AK6M«Íý+àý-ý$l¾¬&¹y¤lÝÅg´+2=@µMyd9¯qYdÁ|.¥ñ|^4¬Ï~¤+E'úÊn>YFazÎn»t Ý\\ 8üm'ôna9¬aIIi$"=M¹{¦Êõ]?H#ª¿y«zSmM,T¹3±O\\Ï'Q0Yã¦²¾,Ì}=JÅ5-ºéæ+×:5sÛÐuIÔy\`Zq©¬d}­xÌ|Ï\\A³õÜ^ùVåÎÕ U!BcÚH[ÐX>9°\`«&DêVØAµÁö:üVx¶¨Éº³nà_­B~Eöp«t¡Ø%ñrF)pÄ¹¡XaÖÚHÀª6@9)AÞsUAB¾§oèg	Ñ]¹Û¹@9´IèP°SM=@Ì£smíÅ§¦è=@Gê{Sãx=}(Î/â5WmèA\`÷§ëR·~356&1¿è¹»	q;(=J ñÑ6&¡ÂV7)]nÍ[Gtö7Á~DMûRÁñÆq	6_ø"=@GïÉÊ¢ý	µB( ¬ .¾«ânÛÞ:2¤ïrfÂ\\*ÐÞù:D	Ì7|l=}¶é6@¦a.5¤ÄpB¿Có3¼æÆ pROã½ÃÛÂ1°SèNLðP´»»+¶ ;Æ "¥c,L÷e·ÍÛç+° ±WäíØi¡ò¹vàW?ðËgèÔ50\`Z=@awxÇ*ùÿfú¤VH¬N¨D6£«Ëç?â®@d~ê.¬T¶Jå H××4lKíÔòV: ÿütÀtæèÆß²àz¹ËÀn$,ÚpÞ¢1è@ìzë²¸{*¦bZã¿ ðy²d¬ñäoËkÈ4ú÷´+Ò >rà=J8¨Z¿a£La³³Ä'?éz[¶~Hãö5k-ÅC¼¬>XócQö2N%¥»i;So¹>jùïí÷\`ÔEÝYU¨ÂgB@þé/"ëfµD]NÄ;ælNP¥UoÌèwW7ôEñH­rflÃÒØ5cjzÀÚ¿ÚÄ£_³~öpôB/kææOÓí­_OâBXÃ9·Ì{×[ìu©>=@1ÍaëÛíÚ¶kYøò×°=@uáB*D¸K3¼°mÌ´M.¶çJtCQÔïQ·EJC{Ûßã94P7ær]?³%i+¨ÐAðÍOÐXñUé ã kÊHü¿%Ä?Ð7Áí=@>D>ÉÝsîVDZLÑú57þzÃÜkBÍû/.ª4×¨%ñÐáj¿rþ¶ Ï¿ú´Ï)ÍiE§éähAõ]HÓ)ëJ>(èÛl¶~ERðôãP%Ú¦uðY	]çÿXØ[ôõ6UËð\\9nG,³[§CùPx@»C~8¼o!³vT=@¶ÁòµÉrä0{%%}Ä[r$%@Àº1¡ëÏ\\(èªG¸ÀÍ[WS°Þm²öÑ¦¿ê(ÈóØxr÷Ï4á\\0­sTè¯¢J+l=}ePvÖ*m#sÈµ=}ÂýX(êÕlÖ%·áy×+Ôh#½¦JÄaLßîPÐ&:ô åw=}ÄOçÍwý¥#3ë5ù·é5¸®üÁÙ,Ù¬§×MÍî£Ø3%§FåU«Vôl¯!'e¢Er×næôqÃ3ÌI9µä³iy õ"\`¢>suè/]?Ç=J$ë	µÐæÓÆëm¦>P5Õ=Má"ëiî|ù)á©$wVO¼²=MUÎØRjÜDáßøimoéÀèÔCjÛÔO\` ´Ã0bEÜ÷êf¡ùî41¢1Ó¥nD|=M¼Ë¬·r=JXÁf¢#/×úËæuûËWæ¾ý¤òÏ2»§6+&ÁÝ{aû/iGvÚEUð³=@lX0q5üU(÷âVöÂa1%ÀÑµ±Ê¨Á£X6ËoÝ0ö,Í4Å¾i÷äM9K¿D-u0Fé¤ßÜBìXâaGþ¡ÜÖ´ÅoÜîÒÉàh,ã?bn«ÁÌ:çÄ¼äj½=MêaìËæ E©Ù"ow1çÒ­â¤å}Ö<ó\` Ü¢'ÐÁ5=M]áYAP¤TÐ0l«ïÍuP¤]³RõÍ¦Q¾þvH|!²ÔÔ¯2_(ßýGÍ3×_xöU$Ó±üCÂñsÜ0&XL°ÛOm¦ãç¿Ú-¿-±L5¾²>sÈÁá4$IU·îN}ì¿IÂ·¤s,ì£|wgHÅ(Fí¸Nìî±¡aÌ*»§zKØEãçì¤0íÒçe÷\`æ³]]ÁbªÌ,\`pÐ×Eñ[.WðUYåÏÅp=}áûÂõ7"8ûöF÷Ú!3©Ø*np1°.¸qµ­Kw]im´×Ï0û¶b! tVB°¯(Htrê}×NÎYdRH¥DäÑ-r!ô«SåSÃ4UàÚág^Ë¤Å=}Ú¤upû!¸WÆ\`Ñ>µÓØÿãEÜÅwC	LØÝíÎ6<ûµzXmXù-=}ÁéÀÿã6¶[ÑÐ/;F|¨oDöÏÚ7L±¹\`À­À¦çá¦Dé¶aôçÕ¦>Ié¸a§®mëÌTàwM,Ðzk|=@E¾Æ¶À3ñLÊà U=MÞµWÌY¡5;§ÜQìËA»äV±öú áXÜíäÝ¥ÃøÿÏÁÑuQåÁàÔuM¥jÁ ÊX ºX¿îïQÿ"ù¯öPãØâF®{cô.ãL^<¨ìßD[EÊýh¨\`³QlDù<ôgîZ|9£Sý²ib°iB1IEÆ¡9¶	g:?¤æô=M©æd$/2Iéå		CWèvµE§<Æx	e¨¡ÙéU¨Sí³(fèóLæÄ¡±ñ8Á¶¥¦*ÎóÌà1§]É©	FÅù$añqçèåñg¤¡¡¶	[¤¡±ð8·Ëÿå¦&XIçýØ®¡¢Aö«~Â½B=}yÜÝ[©ìô§¶à1C,¬ÝMÆZOZø¾Q4øg;£@.,e3Ü»¡þÝ¡SÀ¯ê«ÿôU$îBJêËC÷T¬=M¹©3xr¡zµÆ_mµKÉ¿¬*/ÃóêÅ7v|<©DaåÞîPótPÍÅª¦#ç/¾¶. íl@éåW¤ÐJGOImòl¡7³}CJÈGHàÌs)Î{¯BÄMuþF3=@?Eãùðªkñ´ï÷¹Ì÷úZÀ¼Öóéà³Ë°0÷ªø(ùeé¢_'Ø3±i¼ì¬E5_¸gÛåµËE<+¬Ë(ûâ;p;Î÷jkí¯uÁµi$âL·ÈGYçAB|4Îo7ä3w¥<dÎ´\\GI_{=MV}êOvsóÎKa2§ÅlqLq¾ï1Ë­|âÉV¬©óÆ=}C»?íÑÍZâ²æ¼¨UB+=}Z4=@ìýâeÐ@VüK8(G¾SZ!Ùz"k@ÃèCgSi¥wäÞñÑ¿àTXÇï7>Îj@îÍË:§z$µV4ÇÝ¼$Ý+ä@W EÉWóÿr:îNÌµ¤ïá6"ÙM!Æ[$[lIÞ=M>±Y=@I¹ýJlÔ©¬ß~ipÜ0!Ûõ½ÔìPj¥2EZ-¹oÈ@$áËmÉ|ÂS{{jÞ¿V7Ð´}ðÚRM{Â¿zÒÌ|l¯àd@[bIáÁ.@®uýµòÉêÐÃ]SÖIÓsÞå%3Õ=JH	·÷¯;æCfüá|ý²s	UýØÁXeú.¬ÙnêÜ$y[vÁãú\\÷Áu9èùÏ-Õü¬ÿêãþ|çþÚ¤è!Ó%íü læâFc4,ã¡Î?híì'Ol¹¹]^ºÂð¸c>E´ö]ÜKºj»kp8îQqÆ£´-ï¡»-C@³Æe\\IhØX=}	ï§2XÁîcð\\FÉ.¾_æå&à3@GðVX¶h³V$åÅu@7d9ÜíÚ%t ÖJ¾¦Û:¯YÉ·´£!âXF¦åòÈAð@pL¥[¨AÏ/é"å§=M¡%pó4åð §T¥+ÝÆgu¦²Ôl£òÍf$ÚÈc¹°>Ù°S!¡ðÔ¹¼EHäðt»ê>{=@;ÝX#7öQ>Ñv-sÄä~_¥9'<Ï¶æGµ×{¿«Ò©·}¥.¥guWL Ý¶ìïÅ&¯ç ã)Se½\`dó÷±2G\`2ÛÖÅö¥ú¦ÕêV=JüÏÜØÍ,ùDTaán4ÓD½ýîpny¢Kø¡ÔÏ³÷{¦L^²ÎºV]3×\`XáÇBQÛ|Jk¼[¹u'ð±(O·ÁaÛoý$ÊiÞC^Ð¼Ô9@ð°yõ§¸U3Cì]Q×P&~;¹Ê\`XthoÓ(õd^+lwÐÏ	:tfwâ[NBq?[ ]åþ\\\\Í:Ïd×êaÕPeJÁ;Ãy×,iè?ª$ä¼ò'¾Daù_Ã¿×æ?Yh"Û­^¼ÄhdêÖOWû§á³à4<=Jª)Z+Mlª¨'Oöþ!¤gÅÔþô¶¿AX]ðG³k3·íÜ¯7uó&:|?;õ'ðáþZ¥1t»	à6Á,9"&âfêE,©zÜx±gÐ¡ÞA";ôÒÔ*~ï;Ò#Ô8=}üë\\eo¡çâ$ûÄy¾c 9Ã/èÑ}Ñ>í¬Ù_C×¦ó@Þ'o]oîrTñf¤¥Ê_ÀJ>GNðeA»bð¶}R>ÿqcùY7j×CæR2ÃA:»Ä8tsÍ8XûM7CHçyuÍh#8Gv,·=@Ñ­Ôq* ü|a©yLÑäSÍ|½LòB kÓïf³2\\«º~OXhü'³I¬µÏÞ(½åV_¬Þ,$¦;8Öó#í^¼®$< E\\Ã½¾F0=@®LçX\`ò| ¹¸ØERïP/cb$êu¹7ô´À=MDZG6huüßÞÿfØ/Êå}ó(wz1 >Ê|Ü3ñÅô§~áËkbú©Ì,zdø|§@<ïhæýÚ kaòl÷T÷ñÎ¡»µÞ¸Y8° ¤,	s;è3xTçX¹¢zo\`å-»ÛD®Ð_SQË½pöµ6;%=}ªZ¢!ÿµ©åêÍ¨Æ.D	Øº^H9¦unUA´ÙávCðÍ=@>¸QÜFyL9aKðÎsy!åå+¡9ïé/IåØoÿËtDKvWgjW#6÷ÕâýÅÍb£ÁjZµ³ðñ¤W	.z3®øòüý7µ¥Ô/Ú"½fºùÃ½¼¹ø®q§êÅï ÞHÕ éÀa¼A0/eÓY(Þ£Ä"úCj´ÃD]O³j¼ÓÁ¬ÖÑÅ£q)SØÇÜñäõÌpÎoÉ&2¬}"rÚNì-Õ÷iìÓ(äÌ#k ¿TòßÚÝµ	=}o8{ê±qÌÙ=}zºÚ<8Ù¢ÛÆóãÑL#KÑ«ti]dqQïçsì5÷PÒ:(áòÑNÍáîuÊÊ¹!ÞÆùI\`u)n*°£Ôy=JvÕ´C\\õ/RàJpÛª$sÂ<©°Ì³¦1´CãÄ6$©é:éÙiL@¸Zjã²#Ü eM¸Z =}%=}4rmÎ+Y\\âu¢´vº©ñTðÂÒ ?¶m*®»Åì4´ÂÇuD 739y|"¡ 5Eâô¤NlÝFrOËdc>¶¶»¶ñý!Þ@Ä;Ðñ²£e>µh 	wã½E*î¾FÛh,õZ^Ê»±s!ÿËßH´y³,2^]Áf9£úp~gh\\¬²dKÐýY17ÿW=@íAïô2×ÇÇO×{j«á057uôÊz[¯(%H:+xeWàiÙcþRü¶GDïD*ëÐ|r'ä|Ì;ý,Ãf9ÈYÕ.ä)ÉÆO·Ðóô£8«jµ@æáV:µ¼uö©>±/ý$®{î5I=@P&m¼Xi;sù5mn>#YÇV¶«òpâÆo6Ä$ßé&jjò=MO ½=Jã8L£'L¾yÖiuîÑûZInkâQ×aË®Éä\`=Mðåè[	º 0:>±Ñq;8,Æ©=J=@¯-ña¨%ë©£!é%µ}±(î	Üù{KÒÃÜT	øh©GèJ´5hCBàs&jJ4Ik~¢(TqO(ºÌgIðû!k»LÏ£k³\\©Hæàx¿:¦ÐGî!±Sð,Èä¦-ÏN½=}Ý¾òí<ãûÐxÆO+Ä¶½ÞÆôÀÑÊÃMúäN®ÚóËY¦pW3ÁjNàùàQÀlÉd³20ÞþD¯\`ÔP¯0&yËò+÷°vú¾=JLH=M´Ï¾0Èi·ã¢«búõoµÀG@)lè´¹¡=}6uÐïAKÁµ~4W(¡\`K?æR#!2ÜÁÖ%É§²¡~´'Z¿®·i,Ãåçiy©ß4)Ñé#dÓä!üÎ	°åw*K¥6})Ã7õ}ÝfM¸ºtxqo¤û¡92§tbX68@\\Ä¹-òâÔPïü«ÿß'WÕ³¸£|LEÜp»±5ÜTx³ÀÐ=JÙªëu~5,Þä7:zú+{½ ­oJo;¿Tóª?ÓØ{ä.¬êqæS[AÂä.m1û»¶$íB40s¸ÛÏÀCÁ¿píümÚÙ<SêÙ\`þQÄôSÿ°ï°põÈ¾ÿØìÛÎT*hGÈYî®ù°OGóU6&ÏÄ{~á&Z;Àï¯P@«$Â¦WqJÞ=MUvÁÂYC¿2h¾¬²¥¶oh6yÛa[J~!s7?~Ô=Jß\`Úú)üÄ\\´J¤T(yuøÙ(¡)¼þk& !Á¿Ï»ÇÓÃÔ%Ù%t=MùàãÎ²üÄ¡N¦]V3whIghÓVq,NV[È³îFÿ½?^%¹âRÉ²~=JbVÒÐ^å¦yÏE@ÎM·[üÆ$?ªýÒ »´|VèáÐ³KpÁWEk#K²uáb\\?h=}ë$E½_«Nti×\`ß}óÐ8ç<Â=}C'*ðÆïV¯<»Þ&>tCÊÎQäñÏ\\^9j=@.þ2=J7g~,®÷º<§XrjäÚ+U¹º=}¬#<»ÜÇ{42~fÍ´×,BB	àÙ4ÎBëÞYÛsGµ#OõØ@éà7°n;ºÃ«þY@Õ¹ýæû=Mj=Mên5IîJá+ÇJC§|8÷üï-Ý©]wÎ3@+Ý^6Äá×[9J°Â,«).ûÈêÍVÜ*dÝ¶¸ë¼8CÌV¤=@>tKË®ÓÔÞM¤lH@ssà¬_ZÑuf¤=}~õÀ>I(³S»b é	îÏé÷x,W³ªFcv*Co+{vEÉB;q¾[ò­ÿ·pô­=@=M=}Æ=}ìu8ç>ãèMN{X]&jÆÎ³þõ¬óI(P¯rÎ/è]8Ò=J©kÍ8ß¡z¬Oê,I¾ñö¨º<óbÙw=}ÀTtEu\\Õ¸|PÖnooïÿéz"®Ï\`×=}èlA#Ü2\`/³ÀÌ%	<¸ T¯Úóúº¸Ø>å¿9wÒÓJäX8ÌmJíÏ7c}þkÒð´=J¹¼xíÝ^	{4¥²A¿6[#Èñ@.A¾äé[Òh£Ï%t6Qò?mWÜß´ºO¿ßuµÒû/AT#ãõ¥jn=Jè°51Á@KÍ­-X\\4äCðòâÍ¦eT»îÌ=@¯¢_É0½àò+5¤µZ?$!ÀÑÍS¥{Ü{¤¬-¯úÿü·T¨}U¯Qü>ák¨ÿMfm¡Y®õdLÕ9´*Ò=}¶¾44µ2ÇÐÉµ-Â¯å6sÙ¤s{7SxÑOy¦N¥=Mt¢Lp­*±V³}Ã°=}Cù9]~{üSrw/Y%¶®îÞÆ-ngwUmn|E·¾5Z[¥=M6n\`f[ªkìì=@-V.BÛa;lü£¶¼VÇoÈóõC-È*5h}8¯n¹úÀ¤t­´ÅFÒP¾KD6Üèrë3(e;ÀÝ${ï\\dÔ£U×2pØw³pÃEÅÀåjÞävÙìR%ø--öxuRMNiI ´¨Æ¥Q©TÆ9ygå§\\±N¿pÏÞ&]Ð4U@B¡aÇæ}ýýª0|ä+ADü×cúOÎ¹À&ü¶ÓÂEDt>3¾7ûG4Å\\³^õvLt]°¾æÌ¤ø=@©oMzÔgØ>QÂ?{°õ¸ÕÄü5*½vóì±ôF£Ì­ý@~Ø/ÅÐ½FqÀã&Ñ?MÝoMm9%¹sOÂÛ·ÜË\`Å¾2¬Ø=@½^N_¯Æ:^Î¹ÚûÍ® ¯õEÝbÛ;Y\\nÈ«/ûÌ¾é_ÃOÀöùLU¡¸ÑóÐF7=}wT9±DÛÀ. m<±£¬,¸ÅhA:õðOx>=@%d6Ó´){î8ÎqH¢â¤'JÇ²kÍL;J=}·Ó¼EiùòÉ8y±EX2 uªÿÉ¦yqñ8¥?Õ6yiY©Ã¢=JÅFjÍ8òù£ð\`Áì£Z©È+¸Kë÷&Æó¤ÅHØm£Ä,Øi¡ùýßgÁTù(´XçµäÞÜÓ©ÿà-[ÁB½dH»B»é<èÚ;èBÈ2ù\\FÙ°Ñ\`ì&p¢'yiÇ§KÆõÈ8yûú#Óv h4/¦ÿÂr½ú¤¹R¦=}	5¦Ì.[¥f-oPèÝñÿN[³$ÏÔXBÛdÆ2]Ä¶w	z$)_ðCßü¼<ÒÎ"·Î©Éó3 ùÝC¹åLÉwëYéè=Mé\`O!MPàø\\cfHõ8k>õ-ÜÍTí8ÐÛÿ/Àü|clë	×!Waü&ä®%Èår=M ÇO¦@Z£\`ÕpiUV¦ssÍ5 yäZÚûe«±?{=J¡Hâ=M¸exfUë£Ò¢´iA@PüàÜö¹÷Gt$*clVÙ+3°JY:?äP~ÞúÚ5phÅqú9PPnóW=}ËúÈÔb\\ÁÇZA4¡°­ ûºig¿þm{jb¼s$.«mF"$ô¸Ý¸ÿh®=@¼Y³x¥L¶-,´Ü&zMx®? DoýBA£ÕÞõôÏ­ <ÑÆZADU*	ÌïA\\ýL1mêâ2KÁÊ¼foÜML®	³èÒø{%c=@	é¨1d ¨ø<e>YàÝz=Jì=}+)ÖÈ£ogùòøl$²Ko;³%\`OHHÑ¸ÂßBÁ¹\`?â6[¶Ë!V¼%cÕ× {åhÙ£AëYì=M½AsxÔZ©lEöfI<­ô¬miø@4®ØfQb¹Çé$¹AuÞI$K9,Îë°e0*W	¬í@«=@K @ÝÈYe¦v6Ýz¼ánÂ*£:øÜÚw4?7Ï¥H3¡$~(ÆúíÉDÕ>ø[¿=Jôüúc=@¾ÈÙ¶ÈÉ±è÷±¥\`3=}þèéþÉ\\Oå¶¢#wß½xäÉ<|k¯O<Æìã%ÿ&&p Xè@r»#ra¬6îË¬£Ü6r%wª¾T©PÔ?ñÎn4zS°.?K&ÿzi/çAþÅ®ß|®.¾3Sí<ûL$$b=Mûj¦=Jæµác|3 nyÓt¶a\`å3j=@Z=} z«õÐhSÅ²þÄzÍ2øôË@*õÛe_ÝòJÅý<H£ÖÆÀíë{=MPùðïª(lµ¥#£¥ìâç¦Ìg[{h.0½¯Hï_ñ|òù+=J¶e²P\`=MÃjû·¡æ©È!ZXí}¥)LýçJtå&C4èrë1Ã{ëßvúèÊÊ©û5_WéÔeý1Ù¼×û)È!Ne5veXZ?ñnH»G@Ðëp\`êÉ=Môå\\#P'.Two?ªÇ}ZS¿CD%>}FY¬óßb³çuz!í)J¢¨®çôp²ö}ÝàüýÈùò=}õa 'ß\\Îùûw5Ztâ( f6ËFÙ·¡ëxÉ¹ª67²~\`,¥R/ùrM2H­	ú×HrI¦}g=@íñz©©þ³·Ä@!s¶7º÷ÊzM e7rP		CUKVî¨±ÆG²5q§ILÇàØÌJß§4»S&xµI«&¹~ùvçR=}¤Cx|´xeÖedBó,/9ö9ór¨Ék]!3-Õ½Ñ¬¸TfÙq´T´^yÈ wóö6´÷½QPr>f!V	#¨yâ¦É#êS¿¹æ°Ú	°eÖî/u"?6ï»ý>}%S³"kj	¶î¨þK'P´T¯1\`$Ý ÞrI9T<WÌËG<Qm¼UHN-{Ùá+Kð÷pÓ%å°t¥YiÎ'ä¾ùé}K137\`Ôïâ3×O.æ7Xw>	ï¡½ ¤U%¤4T?°?Þä;7çe{6ó òÃ9Ëñ6OßIÒæå'¨ý¸õðIÄ»oUè!PdV1Yñ~°Ei_ =M$±z¢²y©®=M©|Fê¥»3.y8hÄ9(b=@÷>#ja¥f4Äè÷Ä×á¸õ>^Méñýuj=@TFªú¸ÛP ÐvÙãoó9Â}´@äÇÕÍ²ÙËË]8D<»GLV6µ9¯kóÜïÞàvoK-mèÌÆ=JóMWá1#G³íí·ay/ú?kQ5Úãz8ó/vzþ.ÇðI³¦ôeÞf(dÕQf¼YÊÀÊ>âu¯ÄG:vt5©sýö	¨	ù5Û¾3tÅ©9;ÅbÕ3ÊYÂWüõÎrÞýö^È|¾-cÐvÐ Ý@ÍdIüsíXhûæ¢ùj·VûSÃv(ëÙ¥Ñ§i9¤$×u	IÄ²^lÈ3ü\`Yz<3G3n¹î­¦Â	ö8}rs×ÌC\`ô<Ù5ô¤L	9 Gº$¬pÈâêÀUôm\\ÍfÈÙ²J$¼ÌÒ»&)º0ÎUS?1øË?=}"\\i ðÝsXÛVðºÏ¹Û£rE>(Úý§ÁnúIÁGt$¤uôåµÁmþÏ5ï÷S,spsÃ?f|«­=JhÜéS©AÑb{Õï2S}î²	.8²&)Å=MoÇ¾q¾±µÛÇ{=}ÎÇ¼wvùªÚÀ7ûQÝøéwKÁÝÄHÂZ*_jZÖxQ>û£D¾x¸*¿Te¸¿ê¦±61Ð_·¸÷0õ_=@WòÖ9T§4*!áqQ²(¼xd$éÕ½íÎZ½ãØ26G}êÀ\`1C¸Ìz*sóGü\\FHÚøàµM$±õe(ñ´¯Y OV­J´eÖZ²sÎó/¼ÙôjÉÍÁÁbònòUe3UìmÚn§jám?alIàM¨º,Icèóz=@>ÏQñÖKÏÑ=J£K¨ lnSçò¼=J.R¨kÞ®{e\\c(=Mo½cà¡j£^6Flìó¼Ïx Ób:µBíÌÓÝ^ÈÏÂëÄ©:N|N°#G®°Ëàcüyr-sÞìK¿2L[ïÔkDÍ\\u'ñü¨Æo\\ä}Åf ¬ÁUm/ÀÅ3ê1"Ö:'BY¸ýYîòàÅñ¨kìê\`Omko*±+S\`à»I×ø?Ä±®ÝBZùI*&-Üý5shö»²è÷ªá|ÛÀIùÉN"Óp¸g3[üN=MÂ!ÚíÇ=JßDZâÄïtØÒNú³§À+-ó»øT,=J;ö,êeâTVþþpÇ¯¿;àl¼ª§-s¦¼¹¥FÜÞptòÌk23=MnHUuÉ\`åk9f¶@+ú»Æ]m$Æ1«%×êxÚÈQv®I-èên+éyy¸ÑR2\\i oR\`=J è´;çóWýªäcÆSÕÛ%LòFñÐkÄG^ó4Ô©ùìàN*ÀÕÈÒ]$«åK"yRyÀñn¶òò{=J:Ê®!'¶<Q»Bã=}àÇ÷}&M½R0ø[öÕº¡ÊÞJ*·bSO×hZ¡¹ÿ#RÅJÕ²ÙÆ÷ÉüÖÆü#rýòTWa>²Æu°ï<ísu_bD=}eüît\`Tóói±°³õíRñKª7MÈÚûrf{,çS³©nf-Ç½4o§Op=MoØæÂ+FðÝ9À°=}	%ÓöÙùDÒÀ·z·|­IùlìÐÓtÃ#:@»@óá¶^®àòv\\LZå¾Ä"VÝÒ/àÇ2Å}o&>mQkÊÒB1GR·ÚQ/¼àýÊQìªÞð|z6Ôºð8¢}lÎtÎAÇí3&r3bæ3a"Îð[ðÅÅÍ¸ÆÂ{Ø éü@IÅ;üº²q!îV­+å^ýå4bäOx§²}´%·Ö·Ö#nb¶]þzcjÿ¶Äîõí¬T""ïFa*'\\²Áa-Cndÿ¼=J¬³?Fý}Ë®ÏõB*eñá¶è×=J=Jgmdú±-í;ÏÜÛS©D¨OMÖOÞñÎjØ+(\`dÃL¾£TI7?³97*âohZ¾w=M\\ídé÷mzïI,ãÚ­mØªÝj×ëC|\\<úyõV¸=}6jØ6cêh´òÃI6Ã7c[°HøÊ¶®\\@b^y1Rª÷ <·þoÈaV~sM»,|v¼T¿wqio6F&#6t«Z8aIÝÍ7¿wåòyðøhrªµ^iE;h9]ývs(á3«òÇ\\ê g=MóZtÇTqÖÐÞåo1w6í^þpÍ¬v-WÞZ»__ÞV6uãvÍþ,=@zãyh¬i®%D§_2DÉ±d}xû+h¢Ì³ßrÍFõ+ðtîÖv"í*;%qêóh6=}w VÓ-î{Qè1¬RV>¯ ì=Mr>^;®jÀ­z­_e_û8è¿¦ÈMºR[·¤Ü4"_ê>ë"T¬ÆD/Èn=}T³¸hl¦µbI«ÿt<pÞ:BÝµYM=MRð"Z«ÄntgØÛ\`£n,ûÎ~áz¼]°"±Ý"F÷G ¸ìèu¦3®:aÓÌ­Ý/£KE·¿ÇÀúð9ñ,ðHû¸ÊNÔ\`	È¦j­àH¸ÈOxíÏ¬õ×ÔøHËØ4]31X};¬jz»yÖXÂyòÍàpj4±´ÚëåêúýoJ¦Û=MUCÃ	ßHöï@À6í«WÄÀ°ÒØøþMÐ$ße__Ìªt^tXjwÿeËg06Ã§yÕ0'½(³+ÄÑù^ç¤ß´ò>ü·h¦«·\\ö\`ð8µUó	G©¸Øí/õhGØéXjñáe_vÀaå1Î¡+÷ô7ð_@îvb@¤ãIGß&(J+¡Aù\`c¦rX4A´=}X.qlø¥kÅÄqÎ°)Ä<HÏT³&Q0í£ôWU'ºf±b­ÍßBªñ®yZ¾1FhÑ=@o¨CK¡No©»VbGä½X\\ÀsòàÅ¯0%=M89COñbË=J*%Ï¡å÷ÅÃ»nÜ¸uðËottu½zómí´ÝÈÊMAuLôö¥¢C÷uødñ:×¼n£/3ñÀÝùºÖ-+%øSÓhFÄAó«pY1Îýû¸WUÚôXòg¾<=@CpÉyÈxjë¥ÅMzT¾P;)ÑsP¦%*ã]LÅG®Ó×P9SÓøN­nôÊJð¿¬>/iñ¥4Ís¥§(¡±WSÔG?M(<ßíÐhês;R/Kñ9õðvhRr·ìeßÂ9Ý\\C>8BÊð&eÝ&¼x·Æ4§ò±lÞÏÏp,^;jåÈBU¼Jî®©îgXh<'¤lë¬´vÝé­=MtÖ|tQÓvÐøÅô"9ÖÉ]aÒ0âì~; ðÜj{¾4Þ6§tôÛí.m&h$$Íqü»#fH/p0æYûíë]Vá	ù#l¼MËÆÖù±ÁÃÆãzÆQ\\®õ ùÓg»oå3¹EeñÕz>}îNäËí°xgÈJÅ² 6³OæOPWu]\\F[jºã}ÿâpïpþ¾-<F tkñâï3ðr=Mkw¡tPàßpT»Cß¹ãNÏÆãWé=}0°N»p¤z¯e=MÌÜ£¯øíªsçÄxárê=M_L6dU°ftdEd=M-¤ì8Sæì3{õGYæÿä:¸ã\`	r XiD¸´vHÔð8hL²àíHû8 Dµnju3³çyc-µ£)QÓ°ß2h]Èpßóx@&xw[lR´<à3EÈá¾ËhÉ[ Qÿ3^n>ÝÀ£qYÑrßôõQaë£e¯^öû¢Rc'Ô¿éÈ=@YÏü0Ô=@Îcx¥q £âÆákäÙò©ÈÇ¬}ç«Wßvêß4þs3²³K6ÞìcÌýæÈcqf&æ°'Ý~¤þ¦ômÀjLÃ{ôùÎ¾=M¤Ñ.øà«»øw(4DÚ¶7]ú@¡*CÎ4Þbâ§ieÅA.ÿ9§0ÜÑmé^ïI_UûkwÖ}BaµáÉ(¸bXáÇagþBÍç½ÅµtÅ¢#Ó&Îþ;Eo>²ïg DU£kyAzl'ß}Wcn¾%ª-i÷×ècy»>¹p¹ûº5éÇ·wFß{¨h}qÍùP1ÿç¡,pnP|IÞäÌë·oýåÛ ûÕfÚPªXs=}0C=}KÄÖ>²ì7a	ÞÎåÞÌÿYÕ:·¶l÷£iÏ9ÄÃ=@ÈûäBcÆmÕyl&§äÝÜ]æÃ6{´ÔêI75ªÖÀ1Áemõ=@##áH"Me¹©{^xtbô#ª®²cª8g¨©WeIÜhMAy±BùËe·*Azë?ªùþ»Yâ p¯Yæi¾ýVóÑíÆhBíIo[Î¤"=}¢~äF(~ºÆònp®Qyd=}ÚÇ¶öh´Û=}]ñ^ïÉ¢QÞúöù%Þ@Û½Nþ<¶´ÿyUçÃ$\\fãÃBTÙ;[èÞí©Púñ=J@§ßäc;¤<Õ¦/ÉnqWlÿÒÇÇêSY>BÚ\\#,õWËÏI1óbÇÄÝeldc­éÜøÉ½]e}:¤¯Puàþèdø]Ðmé<ükLÔK©Y°eØ]ÆDîäÝ)CéËwU=}Q1n&.;	éûóèj]À#e"âyMIS É=@Ë$u½{àUeøûÃ×\`¢¹Ã á~åê=JOW üìÀõðF((Rôe	­ÎÄîêc3ònØo'!ú\\¡µ$´j@]cùáÂgïY5ùXÄÇ 9¢0¶½óòÔe<¯ @Mò¨ 3&<=M÷öÜ¯Y§eXx_&W¦}'fiåö4©½Ð8ªlàáBâ~àBÜÚ¥Úa}·Àíþ>ú2ddU8ãmuqæa¹,Ðõm-X	@yç÷Øtöõ;½Ð=J4¨SánÓ!£E=@=Mì´úâ"ãëdf<×ó¾¶V°¼À=JY«z×év¿9$ û³kûXé´:$(w÷öÏPTiõH?½ÓG&9!Iµ±?Å).8K^I5{p[Ý¨$S¥=}ÓÞw¶hN@Kå]$mª4{&£vY7!=JxÜïÖ¹TãÑ\`fNé8&'}(ÿÍäÅáÈ8Ó=Jzç¨ÂD>¹ÊhàªÎåÓ/%ÃÌUKq*5gMtïsÇXE?z;hwán¦cù¿ÙLRÆ®©V³·¾²=@!á%ÓÆºA·Y+& +¢ÄìWµ=M ¹{U¥û[OÆÀQ#	bHm¤öÛ¯þJV­E+b¬²­Jc3­)Èä;0Ò9W5åùÂ[¿ÛSj´¤ÂDõ©¶_äf(ßÜFÀ®À)rWá3êWOâÊkx§ßFÞÈ<\\v\`QËt<ÝQ-ËKÅ=@ºf|Ve=@kµµ=@{Îz7â>+¥H÷Aä)mË4\\û)/#;{çÕþ³fÖ7iÍÁ4æ*Íb8Ä½>PTì¸28,Wìû=MÌÙË©z¹æ³Q N=@Íj%×ì*²B°u/DìJB"ÛÕnLM$Ê4ÛÂG@7oXzæäôþ^bú\\Dæp^¢/VÂ@7ØOû=J>Dû=J¤u^ââ»q­Ñn­yû=Jî$´¿û=J´Þù¬_Fª{8öäq­åqZî>ü-K@Ý85þE2ESä)Ît¨½iþ£½yëFuÂÏÌÄ²ôL¦³5}¿=}rÔËTáÄÉ\\îHèò<:µX=}ú<ÕoìÖ¿É5?ÉÀ8pUPaÈûÄ	]Ñ@,	T¨ks¿¯:É÷º*.,ggêP³+V§ªH§*ouµ^+÷pÓZ=Mi5­mcÈ á·=@pÆzößJÜú²=}ÂûuÆrê³=}¬Ì¸=}óQn,x¾KJC®ðlÍb¬gP-Û¦|°*@éä¡´¬©wÞè¢¸Ù%¹ç¢>sag=}ÅÃâº®:Orú=J.¼XPâååu2H,n°*µYÄï§áïýo@!'xQè	¤)#ØÒö¡#ÓdÆ	Ëÿ¹Hjû$G,þ2¤)j9óÚ¦ÂM÷N=}¹;8=MÛïyÏ½¯^zÍÒÎ\`>·ÌÚq=}­n94Ý«¸0ªYûÇ7*ÄÑ [9ü¥nÚD_>«!AAl¬WÖfÈ¢!°ÌÂZÄ39©ªEÖÓ3R«ïrïq·F°ÙL O@$n8Û26¦û¼(jC^!j0ÝUmHK]<mxJÆ²rÄ<ë.}§ë@³}Í%FC!QýsËq29L]SÃ-½C²®zÎì?ßn×ãþ=@º;z¢÷lxÂ²¨NyvÚ>d¿2¯5±Ô	»òü~NÁ	\\ÐSÔÙÙÐbòx\`Üg¬1ª¸ñ	ÚTÛxÍh±²Îìá .Éò·U\`5Ù,0@>M¸r®]BË4éfNþ¦¿61.?±0×ÎP÷ûE³VK É¼ÌÅì\\	GØÏ¯¨d:Â´rÌ+¼Ý¹ú³4+æ·7Z|«ÛëÒý/®¨K8ç®ÛòsE®¢Òüy3*ky\\OÛ»¸³2"ZÁZÓJè8ýº_H+¬­A\\¤@E¤F,%A|@ËßxX+9¼&]Bo[=@;DpdÐÐS9E½m;¨Â°ÚÔêËÛg2ä(À/8$e*Ø®++s|PJºïñãAAv±(3f\\½Ö	­¥=JuC,¢%ÆÞ çnÊY{KO{'_l*\\ùÝB³èÂAÆæKºÚÇ)Â_"uMzµßü­=M»ÒcûtOþÈu¼$Âÿ·¶ÒÓK|ËFvüq~8sà1¤[zÝ%(Õ!KQgr%«p	¨-s_\`D¶ SºþP=}½lìÆu=}l@è¾=J}ßêlåQìJ?Ñ~ZÒ¤Ru	X±¼K±Ã	3r[«:cC±°ú;ÒNi;d£lk­«4¾/Õ¿ N¹Á$;|¹ðe2ÂvÌeìFQ=}(*8óoL«(3JZeë³7´ªã%úÎÊ	Luò)¯,ä¨½ÐX8÷xÔcýÕxÔGqE)ÀÜüx¼D«ÂVÌj·¤r]f_{øÛØ{v9Iõhª:»Z¼z5³oUãamé?5e|vG^üMøüÆ^@ÿÙy+ÊÑø2d¹m	5yqj=@Ê­{Ë9@Cl[Ä­2D²ZZ½ü-+D_í,ß:OÇÇ3FÐKK ¢¹VÍó&IOî³Â·ÅëÝ=}úTúKv.²v.tTøâÊEsüV&\\kÃ-À·n;ìã}ÂAÇ5¹)cÑIÎã´÷F³=JË(Rº}Ö-Öó:9¼*îNk2U­^jsNå"Ñ°.¨m74ØQ×ìÏv¾{º<GDQRWJ$µ&þòbHË°Pr.¿K^®(#Í9¯	HÒ5S=}ëôMOkÜ_î:öèûÎp'´²2üm6ùÀqFýYéÃzQ/D4\`\\åí0ÈëOCYGÃçËÎßüøçºr½Èm]g_0ËùÂ:#ÏM+	LûZ	CÉùÂCÈ¹¦?$ ê/Ò¹5<6ýÎ%+RÊdgØ)´¼hm%GäÏbV°ïùÐ÷[â'ýv%©!àIPºh'=@	ÑÉùòd³uÃ@uÿIí]ð¶Sh½í B hÕ³=}<Bh@6yÂ¶¥ýIÆl4­c,8Ñ_ßX7.N\\6Ûª,~OøÄjF\`b|ÂÃ@+°32.lÝírW&j¾0"¬a'»à«KÀ¨=J\\¯\`ÍåYÞür¹í<ÌEjµÕË%ìÝÝ$4¦Ke¬AôëO,ñ¯8²AìoF  xø®«²ßýDf~fk33ðd7µ«{Fü.®|´»46M|k\\l÷:ß,®>@~~9¯®_H¶jpLîC^UG²â^Ñ.z~5¤ÍkáÜ°ÿF"8Â+²u8\`W'l·~Ò©Îìo-wLy{²¯&<³ï¶mlÇìr=Mñ=MßC½øO=MVÚlÌs¬@>¸Âç°dûrFçxìjÆò­P¢é>|Ä#V¸ÇßeVrú=JÈêÜ«û,:~,î:<àlÿû¤î9úT±ª&K9Ï¾îë-×³,¶6ÆaRh¼M ;e^Æ2k6lF¬«Ë¼åe =}l<WoäjÞÐû²ü¶¿ê=Mz(åb¼Ý®y54<õh9ún¯du2mñ ÿîCÐÄìâïY÷{Ú¿æÞ½´ÑªÕ;AKÂÉn¡Ì¬°Ë¬¯q[½ÙsìÞ=}s{lú©bÌUd=@®bi\`îsf¯×17~«pXKÖ»9¶5³¸nñºþx0TA¢¡M$©×*?ÞdË45][^Í0ØOd=}ân^3ø­<Äú3Z@Ag»-9y§2p³äF\`­°é74ÉU!Â8¯®â~x@ìP=JU[°ó6ßcrü¯^¦Jj¡í}£l¦îs=M	(|jÐJ»nÌ«n,¸B[EÇ±0½Ä9®÷ª*{ËÃ²!¢"Å=}¿PdÁa{,vYø<Í{öp²5Ü½)è)Z¡ûFUn:\`HÞmf»ç±/¸ZJmO*G;F µú·òpüW.ýh¤jôQvÐûü:ÙÂyì><%ftn:ß¯ðÉl6dÔ=}2_%¢¢ô@'rSöÛoß1ZÌ´DÖU2U_AÜËºN\`¼AöÃ½ÿÃÞHn³dÎmHÛóãðÿ·ÆUd<úbý,\`H.2ÎÁ«$å{Jhnf-]ÿ@2$ÌÖMÂÇ¿§äÓ¯U4 ã2·jy2d8¶4Gk5­o¬ýË½_ênNây÷Æ°/¢×O/f,øõ^B_ÊÎ¯£öN(¶^!ò<=@M	{=@2òâìÐÉKZükîhEeQçuËkLÜ<«¯	]ÖêÅMa«Çplë\`aóÛº½¨}q/M!àÎAµãÍp°Òúz>­«=@_Ò=@l]ÇÎdNÓïz<=JÌI¯¤PÚ#î9¼§,ö\\	¾V:áC}»Ãå÷Á¼­KD¹J =MËïª01+ÞFC-ÿ85¸úwûÔv4ï®¬özé3NVÀàâàX9OÎlæ§.÷jE::ëÝ½.!t¼_gÞ9Îcjç%Ï4<Co0w}a¦acA£Lîü>>[	òúDÜºoÈÄ*y%×~AÅ_ügbÙò-ä$ËºmHæ9õuL'|å^7+«ø§j2:IÙórpÓãº×©vï0Ê=J&Ó87Óxø°±)QgxÛãOái'f'jð½×6áÀ)sMøÏ.TÕÈ-7D¾-§©ù+>(!FV·ûÀú\\|NÂË2ÓµóÜò$oÐçÄg~êÏÿÎ×0'[7=}LHCu/èWÅF7@ÅTK´«êcßOpO*sWæ*Kßdì+«^Òo'2üELyÐ=MUå×_ãIîWyÂÄëg5%þVr<¶l[yæM¼F<áH%@þººVD=J|^2XoK²aÉG¬mV<Z7Ñ>0Ä7¨tìvEl¯R®®K,j=}8oÒÃälÙ­àN 7×õ­ÕõýtX[éåOµÀXMÎ*0÷wÕ@AsR¯>ÿó²V¹ãßÝTâ-%6cÛ}ÑFÛíì.ðJFÃÌÎª:µ£?Êò§ZËV´+~²ì^Ï,ù4½}U/·¹¿½Kê?0ÓC½§KÔ;ÆÊiÂZËRî®DJ	Ö9uoIÏ¬C6ÐÝ1Á£^'CÁFL¤úScÀ=M=@,e*RWUëés,uô<¼iþ%¥ÀNÖJÑ:©}Ð	Ýn#2Ã:!L×)Mt)Øcã(q\`\`NÜK P¥%u½<÷DÂbûú::_N¥ø_¾)\`º/ÖOy) ýv©Iû)/V·x³7CÁ]ÜlÍÛGÊúYMrý~*¶ÖÆT#<MÂ]o5{è°¤n]-xµG*°ÄZ úo]DJ+³s¾PÎ¬8÷Ë"*$õKÿÑV7×Âx13¾~Kîtâhî#	kvÆwÓÃF;Ýn­NqqpÄå{t!}ªBÀöjKäÝ¥ÛKê¯bÎ¯þ½ð\\Wùl=M;ÌYe0E¯5õ6,þ=@3­QJN;ôj=Jmu°ë4 1Q=J q¢,ÌO=Mzp2]:ÇâóíV"¬µR3&YÛà0±T2nlFãµc,Åg«ð²©2áÔ>zjvG)+Ä3,FzèbV.RQãRò ¦9ÁNì^A-Ï«¡v.¯_Ç¨(K§J]²Q¼ZÇè<ÚÚ#%O+7dÁ=JøGèMªÄ^MÌY^Ö(<[,®b-ÌW*¾*Ãõ2Ý/w44(1çrXKÂ/×À¡\\ÞµJÝLæ¼eñï¿8Öm±4ÀJ\\ôØ,æêo½TÔº]äýQ3R_7lÃ¯D¼Üª½Ð+K¦´zöÎ«·#Â6¢Ö±ô'=@æ<Ñ2]ò,â4ùF¿jnnÊ	L0Vjê}<^by[²t=J·¡cúÛ/ÞÄÜEªP'~«j(ÊQ%c5¦dceË÷çb^ql´°ÉLFínm©hW¤¹jéo6¢ÍX*H*V^£iïá/8Bâ7qVc¯Ì7EwË>ÎA´òô»2ÇDò8Å*ÅË1Å¶A\\»@"åÃûä¸£7@>s|ÜRMº7ÙG=MN?e\`õ4Y7.3;YÅË=Mü=Mp	½7ÚVôjKej~.åÎÃêmzîÿPÏë%ÄKþw2_.i³·¯*q²ÙË7§S§2ûÖ=JvØ-+-v1Ér¸Ð\\Ïq·ý:Û¶ò\\T÷ìwÂº½VT9À+^Ò¥ª@Nuº8ÜüfU³nÊÆuMÆb-#*L­ZT¯XÑ Ú¤ü³X*ÞÙ÷ª½Ùq%zÆ»ÍÉwò¹ÚHÒíÐ*x ?Øôó=}	¦e=M7-»U#WÊéÒÉ²À=M ¥fb]ÌB«éB¯)>ùkµ±Wh(¬º(SHºSp\\'«¼io]û°ûI©¸0´«HÌ°©¶0åu´+73rm(cDÇJ0ä;ìÒ©¸pÈó;ÍA'3)Þ1g)>W¹@×=}'«ûio­ùp´û¸(n(ÞæÞÑiqõÑop©T(ÞJWDÖ¦Ê*!ùû®óWÓú9vÒ(SBBîÒo©Ô»¹²Ð÷wd=JÐ'éV:d²3å0,>K=M8ÒnðïlÄÐ½°à_(qü:"ISm^©P6û®)ÃXn=}(Ü:w"Éól^©Pµ)G#òL$éM5ÂÇ'a{ i¼¯BVzX:©¡Ú2ÃÜQ(­sad¥òÁïÇ\\ë^s¬F36þ=M2°¨.ø¬LÎ*^¬êúÒ¢È=M'¥.eW,þ&%28.©¶=JÎo)ñ2W¬!ip=@L"'.Wlè©¶jxÈr&u.éJËºªâù!0îËc0énÆ8÷PL~#ñ2Ý¸0ipúL~&ñ2çR0	ipZ;^ç)X¬Ý@ËipÿL>(ñ2¤Ý¯)õÂ=@ÄW!Â(Å¹í©iÐKåý§èºæ*l¨Ð.¤8[ÄÎpO^q	z×A®ÅªÿºÖÀZ+		ü	+ð¶Ý{\`=}Åpf¬0¥Pê­É³ÌVn´Z®~:"ø"q¼ixbõ-ÐÎ:ø3S¼LºIq!\\B3øÚÿó@]¾ÒßF.ÿ=JÔ31cwsâ@d} BbÞ¶ .ÁÞ«í ÆüüÚòã *¶icxu%§ÿQ¥F]Qq=}UÁeIÊ2Ê;Ýå¸UoÙbõöYÀEY"¸a_.ÓXBùZå2­ºË µZb{ÖÒ=@Uüåú æEÜ¢-¸Ml5êh¤Ö¹K]zÎ6ÿ§+Ù.Wo=MêK/@9sß+|®«2N«q3;ñÄÈò=@e¼@mæj1æl1ÿDAxn¶:3´\`|æïFzáäÁÛæa.mDKôt5®Q)zxÖ¼	(/;ES"¢Z®ý6ßKÃNÓA^ôf_ß=@cÈã!5D\\<Ói	þÊ|ºï«8µEäU£©4-È¶Ê³MÈÌîÙl$*U:gRI§)£%ùéÉÝIFûbÍ3\`õ+±b}Úì¼Â=JZÛkËR*/+8B8õ.³ëAÊÄw,ýsX¹°:ÿjtSÎ§b¼?µ·9âÜ÷KO¶¾¼ðED;FAKÊåÒð³<x3[Kç¶1ZbëòO0¶FpàUEÇ½6ëNgùH÷^Ý©!õsøJT°RnÀLrIr0ÚÓ®]ÆXûYË o^²ù{1O¸*©Tìg\`×$"=}Wxù¯úÂpgÜÐÕ»è\\nBÎv®piÊvÒêi<(~ ±L¬­K>*§0³SØB%QM&÷­5:X®!¢¼ýæ1­bTQFqviµÆÖõðL=JZñrjGLtTj@_%+¶ÊU=Jù®zÒLdÐÝ0ù9!1Ëä¿àÈq¾½(,$±°$PZ+Ì;^|=JÏ´2{	SÑ2lèp¢¾lFÐ³ØËL¾ÅÀ¥l\\w/=}*=}4£ÊK[Ly®¦!'E®=M¢Æb+¬D*²Á{ÁÊ"ÀA¨=MzÈüÄ¨!FÊU»N÷ÄªÇ¡7§J¥ñ?NÞ¯Cs-¼ TR2­PÎ[Uî&áz=}å5+e"üØgð¯e³wú	ODZÛ8opÄ®² ?2©làxõx²{r¹¯~9Ì··..5ö§ûTì¡1G.Êv	àÞÍ+,Ñ;Q0$ÏÍÂ½9ÔFú7>äélLJ:è&9³æügÝg×q°\`BÚø=}ÈÚXäî·KWÆB¹®6Cê5ÇKvCSº^&²zþ<øom¬.d\`ªM[Ê\`OµKülè:¬Ó,	©*¬èù¯ì!Ã:«tÃq~pJ5#ÛbK+ ²ìaoúÈ¤µ¨;¹çÝI,Býs ñÄÞf $(U%Û%!ñIÝI¥¹ó¤ÁÑØl"ú÷ú$3Þ$8ßì¯ß¨ª®á¦ééÕ·Nö×¦sFo<fl~O.¶Úfct×	³s)mòfsQõ=}Úp^bÑl*®uL*ÚWâ<c«±t¸Àsæ¶wøËZ"b}jùä½,åTÎÑ^0ÒhìÙinË55ûpwZÏ¼±ú"n	±,íQe²Û87ÍÙ:r?®û«Ù¦NÚ¯Ò*=}aè&òmW B>",ìL§£,[8.+&â¦Ê7¦¯½y¢}üjªÑk84ßjwò|¬¡m-Yy u=JlÄEÿ3¥6Ô´¥g+Jc®êT"IíoF¨IXî»ícä\`2ß=M%Ëo¶;§úñ2SVÐF=M©Ð]Þ³í\\ÄÝ^æ<l±Ú=JûuÊ7H$"hÐf«AY¤@°¤§íÞÓ³Ðë'¤÷Lä¸­dÄcÐ2¼ÐlßO%=JXyÃÝú ärUb!ã[æÑãO?²½»+ òTÞVú~o N¯ß«öÐ4¹µïÊÍñ:Q0pµ¶\`üÞ^²3÷JNI+Kn§m3QÈçüË /1ÞäTa¿OUU3½WÄV±=}PIÐª=Ml¶Ê:+ðGÀ7þ7ÙBHÎû8ç­:ib68ï¡JÆW-f|zQf5³Srý?:ÒãÓ:°ÿD1·ª!±:ÕT=Js=@½h.\\u®¢ZnËÏ/Ú¤ÊBÓÆ,yµQPÐ7XûP¯V]3PlY9®=Jþ«BÊúPªYÆJ5ay[ú°#xîI$'ØÍ®­xÜOúg)[í¼ÙôbÚk¡nòÇ.ÉS±´x82?0õ¬Z¬óÜÐ[$=@«?DWÒ=}â}ë6«»/*v@"q=@ÐÜ=}ÁöÔyïÜþqR7¼À:ç¬xi#;ÛËýpMqoö¹ÎÞM5Å?[iØKO 9Ï"èÈæ¨\`ñ@1¶ØZYì%ÎÑ¿ë3Â$Ý)R)R>Ï6@:í<òDAÒ[¦¬EÍäÌ¸ñÈ4"{¬=M6;=@%1;¼i-Í3òNn1×ós î-ç*mfU§¸/®ÐÏ+Y¨z8a?§l¨ºóÄrµ>FÐcp«mÚ-kDdFH9÷£ýk©=}¤$c¼ïêècY5=M/¢KV:wFðD68<BQ8ËÓZZ.¾«m®¸µóß*|J'LÞir#ÁZ]^gd>r*ãi.14=}J<bÔûõ J=JÚÔÈaãärVöÈÊ&Çü;£rñWd¶ëßzëx7ÕÀê2,hÞj²MÝ¡Á´¿¸*&2CDÉþo¸òsÅÕâìçt ïv¬Có©Ù¬àÀ@T®)çJ>è&Çþ8ëý21OFb»çW#×l©º=@ÀlpvG#7MÉ>Os½Ðzr¤öì=M¤²¶Ze¬Jë#OãåßÉ;yèÝ2Q5Á8]ìF2n°88bMö»Þä2¾Æ·j*ÃÈ½´\`aQ?l×Îug?ìÛÍõÓºG1#	2]x¯õ¿´ÀxTÌã}=@|«V¡TcÓ³ÎÌOT|+Íj×täÎBÒW^:_=@·¤¶eêþíÆÌGýè< ð,ë­#AJEªÉz«d6c5¡lÄé[vÓ}ê)|A£(ðtþýwÚz>¯r^¢aê;üyB¶@æ®£{WóäëWgîpÂ±öÁXg®£¨û¦ü§pÂÅw7Á×ÀJ«òI T*h®ÈxTÈrÀX~*!TXÑÎÏ>Åe?Ö×ã}û<÷sou^¡TøC°~Æí(;ÇÇ´Yþ4ÏMX|=}Á,&²d¶>//zCø|Vä¡Þª03ßm5Ógjo?	2Ó±èÞþ&{ùýõ=}úAñî]rF+å2AäT÷ØV&(È¯ò¥@LñV÷mj×~+-Ï)»\`ÏÖÏU4Ëåæ=}Ã¢xn@Ä-jÀHGò=J,¾DÞÌexøß]-¯D=@ND@<@7/k¶|OA¬cÒ±DU)y÷¨<øl|bn Ú3×Êåw"â÷h¾Ò°=@V7UåÝ'X}üD´39<ØènlµÜPÃC1'E§d^!e7W5Î7?åëiûàúÚï~x Õä1#ÊPÆ~o}<¼c«Êã±	¬Pú÷ì¶.öLN}ä!GÐ¯ÆT2×6÷·fsz*x7.irN>z_ÎËb@,óìn"ßk2lµ\`«³ñ«XYNÙnW¦&4Û¼½5qïøµ»ö=JV¡/-kÀãç2±zm2W<3ùöºþ8ÏggúÄ&jG×cÀ¬Ã4ol:Ösí'¥V·062nP.us  ÄÃK*¯lÍokûíÕ¦m³¹(¡¨·cTPÊ2¨!pz¢<§¹>$^Õ%ëMéÐ?ÓH0MMxkÐ0ã½üH:U52ë×45õ^´vÞïLYVh¯èBfzøî¢ðv·ÂÑÉ®±¦;V\`7EQJD®ÜÙÊSë:~\`éW2Cl°øÓþ=}Pe:a7;=Mþ{Y5hÌX3®]M=JUAð:84®9?YVÔónpòfó\`­üy"ÁP'^­ÿM8V¸¼Z=}¶ã;ý5W5^ÿÖÁ=JOY'ÁBÀéÎGéh¯ ½¨CÃºG_·FüQ	üóÖrÀjY«NwñD½Òc&ª£­¾_IE-»x¨ôé5½³!lBCÑÞ^;¹j¾xgn×¯®¬ÆÊäÅ×5ñ_¬)íßÍ?Ô\\3ªaPÍo.&Õ«/´½±¦ÄHD+é-hlB¾½Ô=}°Ì,2Óá|°J53uj@Å3òYËâÒ»5^L¯=}÷DÎMtÞQNG\\lJÕ3H¬ÿÛ¢B¦#²5¬·T¦ûD:þ2Nì¸üöªº>®uôØR_ºéïfTÄó¿^Ë?LâÖ>LÅ9òÇ­zþîëÂr÷vÐÎÄP?PhøÂrÆÃGjX<¸³\`I=M{ÆÕÇº·=J_cnsÄ*~ÒªI-HKkJÝ(ZLR¢Ý=}NRÈ°yì&ïôTÈLâ þs¥BHVV6ªTI>=@bí!:)Ã$=}ô/:\\=}5aÏBR=@î·Î-R$ØÏ\`VYÌ-*ûGp¾OÊ©{4^CO·¥.Û¸2¨£ÌßáUÓÒïó±"±O£Ìt+yF¤ó&î(¿ÎSãLÛ¥)¥,Ø=}8I²?õ²j¼Ké·l¦kNÕ(Ë"lç®k«ÈÄXI§#¯/ø25lC;Yrº£°Ç@ùeVpR'8ík9È;@PYÂ³¢#l,´àkÄRé)v@H<f}þ8icfêY\\Gï}ûpbñ2=}§®üWVuÎ=}»BSv[O"úOöz±jPtJS=J=M¶pïYJ9hìº: ³\`Ñ¢ëS* u¬Ù;öh.¤jÎmFéiÃ¦}=}ËY}mé3bûÚjå7jimÊ$îï¯/ý(¶-ÖûXVVgnª\`°2ÈXViSN/â»¡ª¾^ö½A.r!=Já±XM:Õò¶ÚÌ,Rþ¯äfNd·+"l>g><<Æ8.&âøA|bÎjdJÄM«4=@j-uaÞÉ-±£_]QÞØ(:³å!qËºL¾à=M>{îåO³ÑÄ-uÆMºÔéÙÐqZþØo=}<	¿Eºu|¼VQ¢^´Ò!Å»CÝçLÊEsnU¦L;Ó{ÁyjÈ,\`KÑýZm±ë»o[7xb#d;G«ü¤w]/%]ûllÏBå|âeÈB²?\\MVé0DKjÎ4iAK#ÞÈÂ+TðJxÑ«´µæ]ìîPHiéR¯øW=}Yµ\`Ï.«ù.µ­²+7_tf*ê¬K¢lý4Ëc2Í\`×-F»]ïû :þEÞî£<úìj·Lv¥VnË©,íç5*ÇsTäª¢ùÜ#Q2×«¹0Ax=@Ó=}2(GtÖ?_[7ym¡¯ÊPµ¸¬½¡Ç²8k®Cy·Iª5WûÞò´Ì=},Î\`ÌÍ·ÕfRi71ÅRJ¯Þªr,ñ^ÌHD·3,3¼53ëÌMi²{onúÂxÍµÒ½AäcW{thÖäÒ]æ²âO:áÎ²¹²ÁIÓ·Î|,*¬]ÛY­²[5º§G«­*Å(e»°Pü&J|ê¹@w1Ø3A*H¤rÓº\\âR²}]û]b®®ñõ%,K/PRª[I<Ä¸[?85pæJºµ»Éi1¥äBY5¼XnYÁ6Se}ÕßBu*Ò9SJ°Â=}ÚD5^*Oo:{JN®fZîS_Ä!v7k+Ì<ËòZIÙrõ=}we^ªßQZN~õwÒgùJ$úO!¥ìm\`èø7èuÄcDül¹ÖÊS ãæúà5NÀ.KÂy.¥8<<=}ý¿3K.­kk_{[=}B³ú zí7°^ta¨úfeLiëx"P2Êø"DáVë¸}v8[)><UÏ0taÛÿ×50|	c3+¼¼mªâDÎàCÁBÜø°í«VúmV¯0¼:'f½âR=}d$1Ñ¸þ4,=@ÛMÄ+Wc¿ÄvPPNânq÷«cGÇ2jnÕîGÐÎý»÷¯û{Úª¨óXRFýÊ5bbÜAâCÛßÓàù7o-kWÇub[±|9×MrDL¾ÝFXKªSaÛùÿMjaä¨Ûgë6ÚÔy×»¥UÉR&»õ¶ËÇ ÄÅ5Ç²½|I¢2Õyuâ¬µ@"[ ÂZ_âÇºµð±+¤Fd=Jï=JÀzaÝ±ËÌo$=Jµâ§Nx±øÎ,qz]¦«EN+8r=Mùì¾9¸¥/Z+Ç\`3É®^3ìÃ0ÐÂõ_lßªÐÔØÞA·FØ2«hÅ5þcgl¤=@	Míà)ÈøÿJÈD-Pñ?/+]Vô×]»c_­O­ÀTû«x¯i¹ÿ§]ü{Rºø+¿8hHü#&¡ßL\`m3*îªä9h.òôu^µàm%!×WHú5ÎÎ#Èù¦N¦q¨¯ôrH^ÄÚ°{ÂÚ%eÊ2½&Ot6gÛóXØr-þy@ß(&h#¯«¥pPÅ[\\4qJ·Qv²y}²kbÎ=};*:Bo¯ï4Ûº}CâC>"I®>@Ed©ÿ6øÚ[O§X«85¤@·ÌK±Â/]QYZBÍÂ=M-pþ-rûÐÄÛ^	l²ûl®=@Bòs©*JËe56 SPLp5#VüÊç²ò zMG¯ÖF¯}l£¶.O1%kÊ;Ý@:65ÇºLÄbõÓS Ã5@Xq÷õ+×®%øèYÊhÐ+Þ½ô=MøÏrÏW¡NÉÿYî¤ª+>A¹Qkð	Q8{«¨±ðÊ*¦OÐ6¯ÍÔä½vF6ßbbü­^ÆrìÊóHJIrkªðµM"å£©~¶@6qÔªhCµò÷ÌÈàm5àñLÅUKh+Pfpu³&BÀcÇ!Û;ÓT ©YQVÝÉdÏ­ÞNÐO#aQlÎ©æ:ì,KFÊëp-¬\`ÿOµ|ñË.sÁ!:=Ms¾­j8Mß0»º¥/o¤ì/ÃÚ°(,mÆ¥/¢ÇU¤ã)_¤cÇU¤)_¤¶ÉGFj)}ÄÊù²-n¯F´ÑGïd0ön÷zx2Ä=}X9âQ¢{O*relCZ:4ºkýe°èSÚl¤o=}ÔB´Pq{=}.+ÉÂ,ò¬9ÆFÆXgJn:N·y-hËÃÀ»¢Ò#L®7ÊÔY*°saM¥!ØÅût,ëÏ/W8´Ì¶®tÝÐ0m/þlåFHuZ­k¿â9Õ¿¡Q½Bë*wå3µý¦=@Oh7=MkW¿ïWò­+Ê^ìó3(=Jþ¯X^ï»#JÜÎÿùÍéxÌGÖz§>¡«qÓÏªÍE1ÕÕ¨A\`Áø²QeJçvbñKEgéË8?ä¿â¾ÇØa¯4¿âøXÃ]Ï=JÔÑ*pW/âúÚÿ=MdÑ*1Y8"W:¡Ý}:èG2F}@¡sbÎY+³é¶5qÄâ\`¢®rj,NK­«·q¸r!ÀNêÊòäéN·7¹Ç8³é}e=@rqüú~ÖÄÝ.[@òtm\\ÌçA3}û¥Ñ@Þ¦ÞË>¯Ð-Ø3cÖª6Ð½Jwç0ÍMKpPãP¸Ø°4«\`Ô­Ìî¶mÃ?ñA¼bþ8úQ2x5í¶^ÀÇ]6é/ÒQÆm!ì²\`Jï6Kï@ù²Àºû+}S¹ð+â<Så8ÄÇ¤ÎOó¤ô1RÈä=JgE.ü¤ñ½4Wê(Ì·[ð_Â¹Í<zìz):MÎ&N8Bì6â@U´Ð#®ò%uztüG¼a®3Á¾úÔFlyoA,lÝyIäÕÈ3K§þ>$bc\\¡;a>áÌbç9«¢mxtôÀ|[NÂk9xöS~Ç|ÞÒ&<ÍÜ?$XÄnÙk:ú¿ÓÇîKD*s{~1¼~×Þu¿<|ÉhÌÆºî³¤ô^åHÑ/åD,c=Jâr1½³oÞ¨Â§~³à²Çç;¦7ð!?YÞ<StRê(®ý¤¶<8ÛYS	ª£­3B{~|®8ÓÖMïu¾:ÓËlArVnúvþä4M;-z¶oÖL¿»@iKÄHÛø²~v¥CûÚ~¡ìÙ<ü[=Mî#B=@- ä;îæýþý(=@&z)]hëÊùe7¤kàHúðÔR+f<{WIæx>Ð²Ó7±rL>¡Ûò²%^möý¸Ùú:HÐ³q?yåj>V³ø¬Þ|Êï&_WÀÕ$Ø(À0S»'=Jm¦©´?¸¦.ý´-;Ð@¼M÷¢R¿j.Ï«û½$f* u2¿ì]ýÁsC¿âsÒ%.æ\\j&ûþ±½þ±[vfîöO9üJ¯Fî=@ó3wW^	ÒyZq3Æ5W¶­JQ¸íêV56òzÏÌg^*<R¢:&ÈPJM§üÚM¦F467-ä¼C\`OÅ0 ø;àòëÊÇ«uÂòq,R´¸¾o lbÂjÜ6.H8v7Ïý;Xs8âº«Ð¹¹FÜãþõdN =}´dvnPÀLRÏ¥;-m%²µ1jÙDevÖ0Q=@Pà;ÀÛ¡!Ü&¼g.³Þ>hJ:üÌbNã»vê¹*¬ÎbCÏb½~©ë§Çk.Òuýs=MS¼§ÆåQ¤=}(·u3UîúSS?:6¬WxÝ0Ò¿a2Yò2¤Ê¾5Ør½¶þ,!KàVÎQ6Úxód³h<$äÇÖ2NöGzMª¯ýÖâ2{¹¹ÂªCKITß¥£b=MKC>þ0üHKGÚqNÙ¯x=@ñoq§¬â½Q£E7x_á£X~JRèaJKX Dx£1äD³áà½3¬+Õ7p3EÉºXs=}@kîD5:z!<:zflWKNê_ûí9ë~té:ÏÖÑ{¤kªÊfê×¬0X­©6¬¦ñ ?5¤§6mÇVÔÒÆËlVn@Î­ý>0;Cÿ/òE7Ë+-uF<ÆóòþkÎPøGSSw±Àôr\\r×aÚê=@Ð¶Ó³r+ëÍñ½ÞbÉÏí~=}¤d~oòVSy<lêº0°I^-3v7Ëôý±T½%RsäÍ¶Gõ:Ú.\`Å¾Õ«=Jæ6D(ÒR-ó®µOÆ 8Dó¦	Ê|t_å©h½ÔºzjAôeúªÏafºVæ;íR|®H³£À¸=}wî³ôóÄTsn×¹È/,ïóï]Ûyãþë$òû$:J­FÎ¹zDÖsbÙrÈâ®9n+£kzÛ¦Xb=Jb\\åÎ¿mæÕ]±ÊýÊýÆn^1*?ú®>îø÷N>0¯1xá2bQAéo¼ß.ñÒq4þY2wsâ§ú¸?oi²XQÚQvì7«¡RN3	_à2Ür}<òzäu+¤uRZ»:lbøÑájm.~<G5ici=MüSnxdÄú=M<Ü?rMîÅ;Wéú¼öGälDANQ+âJÊòRf¢£ò°ì=}ÓºEopA¯-2vw-¥ò!ÍpìÀPS0½Ð¹ÉW=JpÖ;.<*ü>«g|L¬·4ÎDNP]Ú®ºÚîä­§1&n,×à\`!/O¡=}jÜ×í+Òt|Y=@\\Éjn~¥¼}\\;Áôs)TjÐ×gÄõ0B:awä>0¡YW=@Â mÈSyýgÄ÷\\®¶,Ñcäcc=Jà¡Zãô¼óëNEF¡ÏøEh¢¹Hå|õ6ÀN1òU:¶NÕÀJ(óÀÅÅUQX¶	=JÐ½ºJnYsð-'¯©ß0fëy´ÐÏp)ÝN"÷ÿ&$ï"ïøÝ'Ñù8IGÇ©ùb5inôÉ´ª6¢Ke¬ò;¯-IqÏÌ¬CÜ¶	èËjUÀ+' ÷øÕ'Y8Fie§$&û.77ÎÜÞ½*öRaÅW]µd©?ómÄÿ ) Ý~Òpµu8|Óo=@HóD#é	ï$yÝØºgòÔO(XÊOD¡b?Î^\`UTYuCô®Ù¶eÈüÊÖ:£|=@Y+s?ÝàÁëòåÖl¦ÇõÉ_vO'  e¥eI21È=JÞÅá¾ÜÁÇù$¼¿r¸RÉ}=@I·7OGôÄ9eÑ¡ÑÏ'p=@½ÖÁ0óTªL¡=@yÜtu©í/Í½'X%"g9¤rø¼=}=@ÍÖa²Gtaß´+0#øròº©ÃÂJød!rÔÞ$º¨Üf6¹PÇµ?awZPf¡äZ®þH_©ôdÆÌzãM·ÇVÛLõ¢$w±Ú7u	ùóX·æý µ>W"Í=Jµë1¬1¹9<SF¦[szÁÊÚÊU«ý,-ÉÅ¿Ù|èµ+­,ö+5@óåé¼)hééGèO¦Áù½êå«!Y¡Ù¨Èqf¬f°âIõ=M=@÷Íõ1TøVqöGýnÑm¸0qïÂ'åqðZEí6#BhÕ	á¿Ù§óÏëÉ8¦& Ëü±Ë¡æ¥!àa%eçëõqYTçÂ&&=@Ý´ùf§Îû½×¹'H¹¤Ñ±Hþ£¨ß%±ÿå¡áåvã}"øË§¥7â?¨÷oaeV¦·ma@B Íÿ7pE£ÂBraà¿VD=MvRG[Wcè}ÝÄ[´®"äcsY(¨¢ÐÑ¶sDþå}ÕpßÔn¿XZ^úùº¨¾Î'2:ÉÇ­ÉMdEmc®õÁ!o&tî%¡/z"óX=@­åëÙË'¼ÑºÙ¢¿ªyI÷?´¤j8Yõ8¾¥)Ðlçax·-èW~"ëJÿáÂhS óÛÚSÙûûå%qe=M±L£ÏÁËÿ6è	T¾"ö¹">:}ò(» áÕíÁÖùßUôçd.èÁÆådcg{_OÍëâ×u¤Zü¤{Íµ'®fIh#Pæ[Diö!ø×¨õVåíAë¨!7Xo¬§è~V»¿¿éÙ¹=@£_XÔ¦)èå9fÿ­i¶¢ÒÔ%A$^Öì¿ïpg[dDN½ã?0è>³Z<«(c¹¡öìÑâ¯~Ò	g ÐÍaç´îàH^ØÝ!Æ'uf$M@Õúâïyó}Ø{É{5àÉæ=MÖtÅë}IæÑ^\`$lÈ=Jü7¥8Åç "Éê=@hóÝ=@Gæ;~Ô}c¥õé· mÐØ©cÂ|áúÕ89×ÍêÓU8!3U}Õì1Ù£1ÀØP	Ø3¸¶ÂZ-£"¯ÀÓiÌq"ÕûÜyy9ôEØtý®cEx62Ý Å\`©=MãÅ£Gb¤MÁí´ð^i(À½¡§-õ¡xÈ"àÝ¡­4g^û=@M!§,uÛ'Ñ&Æ£WJÜ¨ùI@e"­ê¼äPù¦ôýúL[9Éé÷êW1¶Éá 	Ã¨kÅ·Èßùå/LÕ^_ëÀÍ!DöP$f¡¤\`§ïÙ@E=}íx°ýx}bh$ïvÏwýÆyÃßåáÆ\`bW d¹¢5vÖ·(ÐÈ¢d¯ÏKÈ{hÇøc¡Ð8µa=J=}Nãå´\`qÅW¤eÙ}IøöÞëÍ¾òS;÷XuÄJé/R/]W T~^îUHLh5%ØÍvµ'¬¦NÑGøÇÄ­V};%5îÇbÄ	ÃÑÌÇ8=MxcÑRõ4u]¿éÞ0Gp#dÑb\`¥Åc'ª7"Þq#Ècq£ÝpÒ¦î£«ó/1»!x¾&1ÑXÆ÷ÐóÀ×§ìw7ÇdäÆ ã£#Þò­d4ä>ÜÃÍV~ÍxwyvÅÁâVãX+ô#±2×­h¡­<¡×$ú5xpS9´ BÏ^ÛÀÏÀOFc¾² U<ã _;¸ké©k×<;ÂÓ\`É(²ä¹lõÉA_7qt_õ¤¡ò¡Wüî\\´=@Ó±bC8ÄHÄIÌ!æûý!b¿&ëSýæüfú¦@çúô£Oü7ÜÆoµÞë¥ib'Û_g×ÑwD=@¹ÓFÛvÓòoL4A695ð®\`ô|=@ayHææy=M}0âÌ#£¥£dÏ=}QÑù(É±~|ã××ëêYÙèxÝmÚZ&gæºH_ÔÍßZ÷ì±&bü[¥¡ÆZ=M½¤×=@é %ç	¥£ù#å yBÜ(ÆXß #ÏQçÝ!AÙ)_ìþ§©×¨=M"#yæ£üõñXxçsm gÛáÛ¤®Õ=@×=M)ç"_Àéaü®#©È¾]Mb×Ö(ôÙ'"ÐÜÇ"jw]'"=}Q=M \`H=Mí·Ç­Rø½7G5bmåiÉÃ5äû8ýó\`s¥áxñ«Ð(_Ùü¹ßíÁ%Ì{E=Mt÷òtÍé{tÙÉ½Ö?ÔÑ]¦¼3vÏ-,§ê³ùsZ?K¼Xûw¸^sü*ÝNç*M=}Ls·:J~¿Î2¸è/õòÃõàÈã(ïiÌlÐ0ÐVá!"¿QÂUDÞ½d¨øÔQèZ%®Á7e u'°¶½É¤¢AR}ãkâÎÛÝÀd£=M¯WÎvÿðÇ0ÎwÞK=Mî¿Qxh/ôE CÂd(%ù(@«_¡å¹¨,³t¢ï°%8GiÈ=}È?×~Ñ=M×¨!YGmunAÁ^ëÄ±YÞ¢/?µl®=MÖÙqø«OÌà\`v$´G±Yh÷Ì' §¼ðÌæQØgR¸ÿGa¢ö%x§9VÛÕÈ³=}×õb£Óå¢~çÀç±¸Ãß!ÛéÈb¥.ÀÙâmÙþiW	}á¦O¿°Ç1ÑwÃé¤%«]Écã0?DÅä¢ý(ýÉ¥.¿|DàµuF]§ópî¿ñØïße¦ær)ÃÝ¤=M¼Pøá!îÿQXHëoõÿúÉz)UygY|Ók%¨S½Ù¡ð5QáÚüÅ Gf¤0$=M·X;ÛßiìÖÉ¡Èä#üíéjá¹î[ýÀ©!4XW±Ãuag( Uù=JÜÿvrÇ"ýùÒ¦«Oß½²2Å»5aÉ&ÏáY[ñw±(¤_h]³á.ÐcåbYêþ!ìj¦(+õ,v|k"Ö^aàì\\ø£Æzî3Ü¾ð\\jo$â¸ásh3 h¸aÜýÐSx%ÄYÿÒ×u>ÀHAÄ¢KiÄ¢ÈÂ\\[§ÿRhÆªS?À=Mãü8¡g¸üz#ÌVöYz%²#Ü4õ]wÀbyvÁmòKïc¹Îõ45w\`vªkÀ«uçGg£VZ_àqgdeö^1#ÌOèá´=@\\é%â¹mxëÒMÿQH³ÜmCÓæSø{À÷ØÅe1M8g×¯%m»\\ÏwåÃû¨=MÆÓÿ°L©tûïÃ=@h¥áA«X%;cª¡uÍiÒÌ8kÒª¡º¥á«XÇÇEÄåNãú¼\\:ÊÑÃA!½ØÁûÐÕñMrÁ,¿=JGÙ¤ávi<_¶Ï´h~´£!ïÚÆ·mõoäBÇ·"Ð¨³L'AÒWW]ûÌ· -¦ÐË?æönf¹L¾ap=@$ÇèßåU¨a&«HV·aE²aA²yf|'ëçÆ%]YALH¿µtqÉ±Ai';k©ÝÉÿìü£ÍÝjAÏðÀò­ttI­óEúlßÄÙJ¨W»aÏj[R¯n!XÃLa×	ût~eôæ}YÁ½ØÝæÚiÈü*â*u¢Pð©¼u¡üq,{S²ÌÅ#3À?ò»¤;DóE\`êÂK¤E³muk!ã<R¤´é=M²ûz,&8ð]¤tyÞ¼\`Ýãûr6Ã0Äâ¶ü7G2Ð1Ú¼ÅQ¸ãûæã=M<19A	ßuñ°ÿôÀ¸V^Nbêý¾Ühiè!ñû­e×&£ î¨ç^ÒÍ¤~ZiIµ­çÇ{¾è=@7EÁ¢ñË'eÔSÛûß<ÄáCd¨ ¾O}u=@ÇoV%7áHõíídW¹Þ¥%sgÔî×Áº]½¨ ùÿÙ¿g¤BM í|Í"0åQ¨¹IQÂÅþ]Átn	KÿðOOP ÖÏùm± Ò"¯å öÇ^ ö9]Ð8¹5S/xlZÆ¥fS!®å¶ßÍøåÿÒM\`\`¿¿gÔ¯¿HµÚÚ[©æ^SXØ¹Á}pvBöÊ=}¤Ù}d#¯IÑÈgæ(ZW)] ¸'â¢l¹¨°àÈGé#eWû7|êú=}a =@ö@aV[&aiV(	jfN¢±E/ßIÉùpæíÅÕµIÉIRæýì&¢èßºg[;ááìGòTWeKÖóayÚ6á¥âß=}iøaÕ®¨öÔAôX=JGé¯" l÷Ì¿QûÍûÛÏ=M8ª³B|Ùlã¾».k®{TÖ6 ¼UhÆÜCÛ]k6¾4hì{Ç¦0æìCÚæûkh=JORë 86,'å[ÊÂEÿý'"«Cä_ið¬Íç'OVyIGÙärë&Ëë«#,$%#+¶÷·½M7RæØ)¡vçâ=M$æ57¥\\÷³Y·W=Mçä#!2Ö=}<£ã¹	ç§ÛÍq¨Îï4uËFÏTüüÉéØv®üUsE;°sMÕr9@ÃÏ¥üÕ%©kÊ Î½û|Î>ÜØãÞIùyø{pdéÌü·'up ¬>á¡qáüyH(Û=@'ä^Ù?Ô²éÁÅµ¥ÛùÇc&øÿ}¤ÿSJêÿq¹ÞæÀÙIãøî(_ÖË~VÖz(=J*iIy¡Ý½­¢£	#=}=}eWÄV×r>}\\i<ªJJ=}w»|PÙÑ	z£(¨&ÜKwUA7mn=}C7üçmTí¯}ØbÉEÌvºÁ5Üÿ¦¦¦¨!¬»gÅðÀU<ÄñíïV§%""þËu.âÅGßbihéìAN\`¹T=JP¿åÑ¹Å½Ï¯ì«h^ú	=@Ñ»¦ÈøPÔ<|dÐÇ2¤ìó§Ì4£¼0·àf|äzn¤füq¤ÝÕÀo$;qí÷ß·&Ïùy8ÏÀ!^tÉÈ'èâs¨a¥ý'=MÕqàTJ§£ ¡¤	Ä¯gÎÙÙHcÜw~Úµ{$ IeðXpûhçâ¨2yTë)6û=@Å%¨ÃûÙ3©ÌÑÙIÈgâ¦å&ÈxÞ#$ÿ]ÕAC=JtÇ6÷B¾Xwd¤¼WçõV§fÉîk$wõ*eí-Í>eý½ýuäÀê&"ü¸û·MVnß9¹X¸µÐ@%"þ»Wt%¬ù$üÈè_4£|£èæè.ÏÕBl­YÉÏu$±ÑÁ9&fÜç|êu¾ÑÁáxÃéÃJa1Ä/À¾=}Ïe¤¾UçV§$]Wì$m5iÍï»Þ´0Åuõe>^mt$ ðÂÄ+Rð¡!¹YûÁ4#i^YoWÿ-µ=}>@ø±qZ M²×öáyYØ&>_Ç\\ñî$ {¾çlÊµç\`Íç¥ÈçH]÷úÖlpsqTs!qoù=@ÀhB>' muTõ=MÍUäDúò®£=M­ö{TðéY·¥pí-ßêÁá!¸WGQô'=M5ð^UÏwÀ­µ1~9Aw­±àfè§¯*µ\`÷¨'&«o3´¢´kçëÚaã¤1YéwÙî´À	ÏÔ=@üèKµÑ¢Ö<Û7 ðÿQÎrÃÖ8ç16H$Ëp×d ò@íC®ûö8ºåoÀ³%©g$ïYN^A)®ÞI)rDx!ëøs*³Kh³¶S¸Å(Æ.>Ánù>ùÌé­Cîñ¸xæµÆ¢9åeÎgEÓª¤wpß=@Ñ.sÒrdRü¨eoD#>éQü'ZÛÆ¶;Ï½O©­¾ÄÆB	\\ìõn=@ütÀxbpúi	rY§½èDF+·6î@\\n¼è*ü ì¼~¼8ºÞss¤ªú8Õ®EÞÁì®.¦ë¤é#]© ð)5)Y&)[:«<+=}ë<<Û<<[¥J¢KªìÀ®-Ms4j*rëß¬j{ÊIÓ:l.,²sÊIÌCÓ6lc®42{2¿;²³[ÚLºT®Ä2ß;LþQÑÝ2·;ÄL^q³úÄfû»oclq®øN¢m¸ú=}ËalFlfl©®«2bç¾Z¹r³2í;¼²GkÚKÎK¶p"«¸:PJvl";Tì®Ã2iKöpÂµZIKì®Ï2iMÖj¯Ú°â_®72Å:àJm"/Qì®çÒ6à.2Ã2éL&pñc2q;¸MÆnb·@¡®2©Llâ¶?dìw®2¡;Mfn¢¶>cìu®2; T§n"¶¿8zïdª(qê,P³¿v2.=JãA'¹=J«=J¯=J­=Jµ=J¹:ª:²:¶:´j=}+®l2;2o;´MjxT¯z0ËF,¾ÏR.R=J:'¹oÒ´zGËPl®ä2;DL^p´úFËOl.MÎ¼ðG·SDQþþþþx~QôaH/ìwTaÇ2E:hLþ0;Vn¢µúBUÿ@.I:o4ìm®=@×xL~1»LÛì'°zI.3ËaÚÙ2i«¢tÿeµºªì/ïe´ZFî~F¥¹å2uk~ÇgûJÖÑ2åÛIÃ*,¹grc:Ã±I$7fTÀ»A4.aaIðN²±J¶:D@ØIj¦iÄ5,­0²¦kæ5lj­¾U¬^k¶=}ª%áE.#Þ.îl=@CnãÞ^ô,ìV8ìFH.0¬b=}Ê!@.4·#=}@ÙJüJüuÛÒ_þC®/Ë=@lþkÅª­I\`j_lÅéÜ/.BGà/Þ?à7Bnå+nGnE4Ìç/§û7§,°NÔA$Ò9$4®%52¡d2¡JdÛc2a0®E+ì1äªkâ\\2AVÎ9ì+$­Mjâ[JJ«JB*éªÙ¬wºñfß*£Xluz0:¡:0:q:Rp¾£]ô8¬¬ë=MÝ5­ämGkÖQkÖÿ9Ì±ú0Jþ	jÒyËøÊ·jÎkÎin«jù=JOjÅ¬b¹¬b±ij­Z¬ZÁèúhÄ¥²±=}W6[ ðÅJûBí¢ä¹;ñ°,¨îbqé]ÓôqI8q©;pgæ¹\`!q%$¤BÈÍ§hÌGÜÀKh²%j¨ÂRüZ3!¾ÏJ0lÞà»Ïmêuw-ãHñ(MÚÚ)ß¿Zrw6¼=MZR8V\`r&ZÓ0¨Ê{DR;pSÇ{D¡÷R#¥sà |ÄÇ©ÙÇg ûO£Òç2,)Y <µºüPdr!)º°±dt*¾Vj=MæÇN)hx|Ð½÷¼9]sI)^sàRÝ¾àúVko¹ár&Ìo¼du!¡duíµär¦Óµ¾ÃDaõñø\`õ7ü'ÏüñÌH|=@X9sØSc¾&1£söWÏ×À»°i»þf¼ßÌÙ^¸ÙÉ8Óq7©ó$ÿäéMÙªUÅyt%ºyIR#y4¼¢s0ªú§Ë8éFT|P2â	ÝªzôÖräËÚÛ®¾Þ2A¿FMµs(?µuÖ3S×s¨Ùr¢S³WTW£C¡WYØJ%¾Y¹¼hÙN¬ÍÏÞØ[¼=M¤o)òNñTóuÏ%ÉÕtíÁbÙK@Ø¯$À&wOò¤|Á$ü'¾°üqSt=}s8PcX#aSÛÑ×ÎÞÎ%¿Ë(OàÚÍûC	éwôümÜ O¹M§6Uhïµã¤7ðÓ3Kä1áE=@DöoÃÂÊ¯NoªwÊ^úD@\`=}@Ç²Üé½SÞV×³îó$<ZëBYÅ¶¼ÓÓÇÞð6=@)Ìç¾ÀJo¾vAÊ¬æÿLÃ(ÀL°âtOyw;óþ]¹¾£=@yÜð1rÐJw¿zS]O¼	?¼L=@A¿viÁ¾üØÀ»üd~¾v;[|n¿s}ô~]ÊSü·§QúyóþâéÞP\`{ÜXàs§ðu;ÕÑuÐ O£4sXé\\Uo"GÀü&X	º=@¶¤TÃ°©À\\÷â-ÁwÈ;Ä{èdÜféÇF;\`Ï·¼ýö¼ý¤Ù½wÀvcL#yhvøæMdBÚxòÖiêôÄÝ ×ëÒK÷ËKÊóÄ{þRQ\`Zôí1CwµEMÈBý¤	_ã×[Þ]ÁãÔÇ_Síø^³D!j%öñ7ò{ ;¡ ÅÈÑ6¡råýëÞ¸mî­iF½È¸ÃwÄbØCcýûþ¬ÍÑöÇÇvb×³§'ÔÂüüQÅLÙÂví´ÅipÄAöÐïW;Yðü$¬?_1@eÅ\`òXÃQäåµÆ[ÇTä)r¼L¸f]ÿÈY!Þýwgvy¥n¶=JSIcÃã×ÓÄp©£Ã¡à($eÔ¹SøgùD´f=@	^¹i§MP9]ã$"õu¡#õ7e_ëE£n"¸ªÞ¸gÙ#1Ø¥Pú¤zë=@Z!¨\\÷¼Él]'e±óoLq[®ÅT4yæ×êvÙ[pZ¤È50ü4"jö÷{Zä½ÏÉàCÎ=JvMJAÏ©dr7ºEÝrqéãtÜfÏåÑ§Ï¼}-Ï|GìÏùÇ´sEþüÏÎ=@?uðWÏ%tÖÊwÜøtÁ(èt3gL?d¤y¤ÂñN)àÎ&íý=@í¬=}ð]#Ø$½ôE =@x\`6ùb"ãh=M#·³ð¸OYEeñÿÞ¥&Éå%Ä9ÅàBÆµm«ÈF%	^Ú[}xpý9÷©ÈéÃ¥'«ÿ0®¡O0âÑWb[Ó¦Ù¶×ç¥°\`ö=}[	=Jg=M)ªÓ%ÿê¸á¬Ya99%í!ÿW¯ YDå[Éæ-tXXhËü²=M´XÔ:ÿèêÃÓbãàÍ©ýÙD=@Ûoü µùweùÓñÏ!¥p)ä=JY(á=}£%þjJ-ë1vñD%ßÊV¡\`r9=}·ü |cú+Xü÷e|Ù#ÎÑe5u3]Tt×ÿÁLh¾4¦ÂJïFX_X"rvè¤X(ÿ_#½°oE¦æQEe_ÝõFò×OÄdÆÆÇ"ý½STÁã õÿø ñâà!=M{Ôz§Ý$>Ö?Ú©lÄÉ4±:I ¡½¼q¿ä\\TÐÝß7µe_"(}ÇYß)û½ÝêºõÕÆ{¤ãòk#ÇÏöBI¸&üõY{|=Mà¼&¼ÀDòuõXctæëq=MêSµÜ¼FGwÇÐX"¨ã¿U_]Ýêè}åÁ7¤ÃZÔ¼¬t¿ä®ÿHb ©\`~¦Õªkw9_sHïæ=JÞª}ÄÎ(ÔNBVõ]Bfð ÑØ¬S¹×gÑå÷õUGjØ $ÌÀ_g@ØcgW©=Mfüu¦¡ñs	¾PV»8¨].õ·mY/Äô·eéã	ÔÈx¯LèÐnQ'é=J®wu´IZOsÄù¸Äÿë:½ÌY=}wa5I2_À7sÒ_ÔtõÀÇ¢w°Þµ¯F¹=J°*Îñý ºÃÆDÿ±Z)ýÐ7UäÒöw}ÝÉê½êº/õ8fyÔM½#r}#F³÷:>ÛéÎJ÷×óµ«)o/¢É¼j³û^.æÕeã4ìrsf.¦?(0ª¹V6hÜ=}ØñçD³7QÎY=}Óµ6lùêH,RqÎ°ºô?Q.¼É¾y4ílÎ>W_ª~$õGóxýÒÛ~Újy¼}³©'äß=@ÊÐß|Ã¯l¤DÀm%	Ì{D=@ôt@8 M³Á¾ÄbÊñ=@wEþ´·XÜz²é±]´_=@\`zùøÅ¡M1$äÅ=}pO9¶Û½¤_ÔnKúæÆ=}ñNOÏµpÔð~R^\`i§ô9à­% þÐ'ÄòÙnºæ¨ïÌc}Q¶xCdÊyá8WE}Ëµ¥Iû)Gôá°ÿiYÄÅÈ=@5Õ	góÜ8Tt=MXhh""yîß©§'ÛóÊtxçÙ~DÞ3á\`@Û¹¸æ<?çs¶ø!ÌÝÙ¨µ(\` &[ E´î¶czMÐç[H=}pï¶f]"=@?[ÿ[¿"³ÂÅð¢y¦I=Mê{ãð}T{´t½Dt¤]¯Ìvc^jfÐ^ex\`Ã¡À\\&LêÝ¿ôïªwôxe?¹çÓ{²ÜC»ut$Å´ýqôßÑÙ>±3É?ÿê¬bÚï=@ÄUUÄñµÕ%Ü,§,=Jûëþþ&¹¯ºÌ¶ßSó&5À!Ù¿qæ> Uu¦·Tÿ¯Ü}EÚåEÝÁ§ÅÛS?Ü9Ýà ýñ8øýìØVz¡ $¹Èö=Mr sF[È_ÜùvGêC0Û¶ ­üK¶ÉvW6ÅPÜ°Û°Ýë­pÚl¯¼'s± \\úd¯Fr­}ß+Óø~ $wTUBÅÂdìð÷ßÛ=}ö%Ú·%ýðpàÛÕyñEÅ"ëð¸¦àÛ5ö[õðJfj"´jî-M¢ÑôêY,®ªZÆjJ "-»ü6Nþ4ÑHâb[5xk÷ð¨käÉºñeôðLÉ%+Ø(?f)íðxþ»	HEõ±ÁJôæ©Ü·à½«\`\`ÞÕ·ÿ'Ôß\\\`\`Yöð¨ áÛy}ìqÓñ5Ó¢TÛh¿¿Â¿ôÄ|ËÈÓí~Àh¿gùÁôB|þ%S!=MSÖñÐ>p4E\\N¯çÈì ¿yÎÚ¡óÿIó=@¥\\¥aÃØ¿ö,ì½ÄsïNà§u<µÆÂîèxè{s¾<µãe¬ÿ]¬WÅ\\¬ÿ¬	pÚñ;Vü@â b]b¥¥beaÆ§æa¶OIðDÎ7­9¹&°Û×á=}ó7³Ö|L%ò<ÃS»eg¾?Â_¾¿a¾w8GôÌOÚT=}".@EÃêÖÙ°ÚmKm¯Ümâ­Û×­ë+­ú­q­Â!ôkÖköÆ:ÝéZºßÆ´íà-=@*=@¦*aªc®9Xh}$Ýº(ö¨¶×ñÄàñ $ÛÛ%´èVZf¥¨ÖY5BÁWWÁ·&g¸ßïÛpo=M¿5§»§L§ã	¥ÝÃsç'&çáçï+çfç#çgÑxgWåÈÔHÖvÇHÖ&½ ¹õ<Ó¦a ±aãØU|ÕUð©AhÔ5eE¯çÿÃO\`ögîÀ¹îD.¡¡ ñEµ ½dÚ+HGé¿ãtæ}Ëøa=MÛp	àú\`ï\`Öî»=@Özõ=@Ö=JöPßèià¨(WÒWµ¼Wö÷ÏÔ÷=}÷÷ðUwÃ×S=M¹ÄÚ±-ÄZåð~| TÕ;egä;õ²ÇÅúº§Ü^ý¨êüEZýþ$Ó§Ç|¹åþ¿QÿaÇÜ¹iþÍ7ÂWß\`¥ Û@egÎ@5©½g½oÔë(}­sé~]ÕÛü?ÕÛ¼EÕÜ#ÕÜIîÜøÛòrUõ%Ð4åÍ4U¦³ÛåB5ÑÚ=}ï> ¨k6FíþÎ=@{ÀúÔ\\]IÔî,õ~E@qÛçÀR]ÛL¦Õ,%Õ/ ¥q£@A|È7Ãz¸§§ÀcàSõÀu4Á»}uÝáÏï\`ÏuHóÐ®qÜw=MuÜytÚÞ°O×ïÖúúVùÌÖlïÌüÆLÖ±2 Ì.ÝÍZU}Â¿C²]/¯/³/Ô¥ÖbÝZiu#:ðØa3Ñ±Ü$8ËÖñ: ZU=JHö6»fºã3§Û[1,é*_hY½8"Ýð£&#h¨u°Yõ!gåi)í°d$ÚÅ×æÇ_ö ó½Õ=Mópø!IäÝ1?Â£\`OéU%\`ê¯Ãà÷öhßÚÚõöÖ]=}EEßñbÛÑFPiq=@Öµ-ÅéøÈ·¨ñö9p üêð¤Eüà\\æ6¬ÝôÔ 	>±¾-­iU±è¨~,ð§z\\U¥éF¬	RÕæ|@?§Óf&ÃÃ\\!=}kH©ÒÖÛhz¦¨çÑÙ¤d¢ÃÀ¼¦=J°ÎôÂ¤Ã#´ÚYÃut³w©TMXRI©(ms3&aÖì¶\\¥S=}tôº=Môqq¿lÇ¸R¯ùI|@(wÃÂÕNª'´©HØEÁË>)â£¥¹|$Ùôõe¿¼å©{È?Ø¾Æß£Ìn7ÎÊÞÒÝSã×\\W·\\T#å?ôxõ¿õ¾ÀT@VpW|ÔÊV'§È\\çüOùütÎ=MV	O6ï|ä\\(~{=@¹t=MØ½¿±PTýMPRK½ñS·È'Ê®_DÍö\\tÃÐåÁÔÖ¿Î&Â|Üz¬jï£ibOdÒÁüÙô­ÉdUÑEzTQ8à~Ï^}ôaiÕÙ?¾CT©£}IÓÌÆt³{pÀØÎæiÙ¶'rOTØÎ·zå?~Ð%$G4X9÷Ñ&ú³é=JÍö#ë}=@wõÌÆÎ^}¿ñÜL¶íî¡[-g¹S}víáx	éFuö#B=Mö}[%I¸£c]ëþg[é@ýá°Â#=Mð^éÞb»ã[Ós]GÉ>ó!möâi½6Iýåuö¯W÷ aÒC=M(bT[ì¬´¢îAõÑûÇ¦©¹HÞOwÍÌi\`¶(@Èaä²ûôØLì_0¡ ¿½5uµéÁ3%ÀnX	!ÕäÛu%ö¤ÝÙþ@ñ¶Ã£¦\\PQ¯¢RÃ;~WPïÔdC5÷×\\èÈËÈD¾ò¡pê»ÛCy=}©öRgÍ¯£CñV÷RðÏEE]fÐ&¼Öüè¶!8ÖÇ^=MröÃ¶9XþÃ_£eCfôB^#ðÿ\\I\\'WÍó¨­$ïýk×ÎÀÖÙà |Ö÷Íh$ÙÈÓ=}Ò=@ÆAÌ\`¢ÂçËºT·WÌØ&çâ$¥rS¦Á?þ ¿ÿÃ·>ßü¦Õ_o³ñîäº'7þ xwþ7ÅÕ­ß|AÕ@3Ò0ÌðÙØ0iÏ@UwIüàº§¬$¥¯¹³óÖG\`_nÄ©Þä¥BvÛ"=MþÅýPÒ©?ÉÎ8b\`´dîZwçèä¤Ñv_!q&V_÷¸¤óùÒ#ñ5þ§@Ó#7uþ8ÁÔ/M©}8WeßÓÈ¤ãtg^ ·]Çý¤pp#wþþ7ÉàÔQ%/za~M¿½¥þq ÓÍHÒíãDÂÓyiÊX8cÒx)Å$Ëì!-qþÚ$ñþA¸ÕÇxÔéfbÏ(\`=J¶D%Ö åd(æü/_'ÌÄ¿¨s'¡ç=J´DB¦w×Ûä$¥w_Ô¥"G'#Ø¤Lè-4¨Î°Y¢ÖX¥Ô¸r©ÐØ¥ËÀÃ"|Þ¥×=@r£ÍÈ¨%E)ç­ÔQßù÷Dÿ ¦}KM¥ùr&ø.Ã·_,É7æ\`M©ñ¸a7ÝwYá}G¢ïD¸fµMàï³I½-ö&ï]©gìIc5¢¢Mû=JðI=MÏååéfH¦ K9è£ÒQúµfïÑ¹X¦¢wI¨tH>õÙhß¨=MßÖ(&ô=}©aQY	IEêÈ0AÝØ,£Ù±«&JÊ|Zé]ÂÉ:ìi¿6GY®Pó&¹ú&& Ë&@Aøã?=Jà?=J5>çh@¦¨KèNÐZáYöÝ;fOÎ2Içé2!~¾AôTô9XVðI~XøTø©G¬9!TóáTó1·eoS¨fÊ^É%u(ÒkCÈé6!FÀiWñÐfy·æ	¿æ$Ê4¦«ohko(>ÉZ´	³§~³©sØö9âp=M¼ÈCCíi¹EDS&¯¹ñ"´Y¶Ã¯aßEi#Ç¼ÛæýÞpØÈÓôAßÓð	Øð9×ø	%¼1ðÄ¦ìîÄ¦Ë¥WWH<zÅyÅ!ù±ØÖíñpþ%=@ÿµ=MM\`=@=M°¼#Ñ·£Á<7¢þ°0fßmwmæM¨M¨QÒ[^Ù[Yý®ñyì­vw£{w#ÙÉÄÇ­Äf¹ÄÇÄùiÅ÷ÇÃW¢ËWãÞàO¹7ïÉvïéó×#Úë×£e×#Ü¢=M­¢¹\\#×Ï#ÙâcÏG	#ÚGiüæg\\éG¢õG"ñÖ8fÕqqPÔ=}ÜÎ=}©úÃ	ÃdÃéR	¯e÷ìq¨ì¡ô&¿AUú·AB·ÑðUþøEÖø©] =Jd!=JQÿHæmjyiÛQÉ¡ØQÙæAÙeØA	¢ÍAIÿÅyÄÅg÷YÛh^Õ9y©±Q³=M%ü=M¢1æè¦ó¹§£§£íò¢èf¨PÈQ.!=M=M%Ï¥%çx'£³'#±O'£ê½(&Ñ-¢ù»-"ÞÍ-âÅj¨ÙjßJÉ§©JI¦:\\:Yâ:Ái9Ï¿ë¦òëf'ê¨úb®Ø\`®±·CìE'd®É½=}"ÀêùOQpå=}¢.gRù]¾¹h¾Ùæd¾ó½òYÿyùñNÀ¥=}ãñõnHBIûBY\\BYÄc¶ÑæHðm56£6ð8Ù¨Cø)ä]Æ¥¤·=JÔ¶=J­=Mq¯qfé·=JÉ¹=JI&½¢Ôsf	NHÀÈîqwKá¼âÙ}\\fÃéÆö©yr ½#çóæ#ÿh"\\éH¾ìSS& S&}|4fa¯ù»ì©iÁìåfuö¾ô¥yaÍ}#ÔÓ¦y¦T9"K¿IÇÉô9sX±}#ÜõÓ&±Ó&A­·Á ÛY/ÕÌ·9×=M¯¢¢yEÁ=M Í&ë~E!=Mi×Ü¸¦òhE)aE)¾·ÑÚMæ'GE¹£=M§È"\`èç·'®!è"ë"Ç=MÉÚ!·ì¡÷qÛ7ì¨a)E§ð\\¡ÉÖNEU^êð^Û[ôðã«1á~=@TeüW¿X½ôÖSÖ»>\`t4¼ì¸¥Ù¤PÃÉ¾öuùiPÛ½½í sÖÔc³h¬a¬Ç¿qÚ<õ±Ý}±Ý×a°ÛUM°Û¤ÈíÂÔnA¿²^±Üe÷°Üm<å3Vû:×:=@' ùëÅ­«­þó«öî0ÜÜE1Úç£1ÚO$Ýe¹%Û³·$ÛÃ=MÃCùø!õf¸ðÛÇKlIEÜ·Ré¨!Ö)Èù±HVë Ï'9õÏÖw\`gË5Õáè]ÅÍ=}³Þ ý%ðãÃ}eà þÀ÷Sü°§ØÿÄ§=@´Wxó(þ¬ÇÆ÷ðÀÈôPì4ö<^í	aé^èÿéÿ©¦ÓõP©ÒíöÙÝP9ÛÜÄÚùÃÿÂ÷ÿ/òâÓé¿¿¯£o[ [Ùìð©´/Yá©¶Åä¿TÚÃXÃ'ÜV£C [Ó^EÝ>!²1XÀàoïµXï×ÌÖ÷Ç2\` âmK\`úéJUXÆÃP#¿ZÀ\\®'Föø_3¡Îj@ÝKªÃÁ'X#])ÿè¥'fu ÐA=@½Ç"Ç_DðøVã´¯Ç&ýîïeÛ±ÜMõrá±ô¸C¡B_Ã%cuáµþq·¡ôÇÙ¿ðR£GÈS_HUafHRyçT³á¾¿õ?Ï¿¼|=M£#½ôóÕÑ¿wQxRw I"ù±¾½¨&0ÞòzÎ´¥¾Eèe¿¶á¾ÏaUi×ÊVEçc¤¿|ÒîÕÞ~C¨ Ëí¼£ô"ôþÒ³ä¼!î¹´'ö³tÕtµ¦¾½pTe¼ø±R¥U!}¸(ü}ÓæÝü¤EOõåÃü"±$t_¾DGÕRXqÍ¾»¾Ý´S­h?zpß5ø}°0¢Tà@o(íx3!OºõÂ²§a¤$MÐ«BÑgå I]ðâbð´[¸_ðî¢Hµ¹C	^ä|[£löÁß°ÂCÑÍÉAß Õ ¸Cû¹ÓðõçÈå^ÿh"ÿ§áÅ\\A8ùÂló¢ßÍðÍ;m\\XDÁ;%_g=MrÅC¡ôÈ»»ÑÛ¶#C©&¨aÍ¡Caþsz¥¯äÒÉ¨|É õÕÀÚ5YWÎ\`·SËä)gÙÜd=@XÉ}uGHûzw	ÿ{çÇäAlõ¯U'ÿ»G±ÔíØQÕ÷\`ÐÓ¹ñÒ?5·1ÈÎ°ùÅÌieg½ä×üF	#º¯µþÂ=}uÿTIÁÕ­íÕÑÙ}Q~)ÄáoGÐ-~!{0Ô´Ã«P1ÿàç9ÕÇ}¹Ó»ýyÔ%ÀÈ{Ï÷éÕY!zñ' s¯ëÄÄ @æáþ_é	iÇ£ÊF©Öh$Ãd!ußý$aæ/ÿ¦=}iÓ±¦=Murâ~ïg·&ÄGY ìÈ©òGkÏ÷æf5¸q¢	HØ!ÂEYö­ÙÉóÑg #Ëõ«	¦#(@(æõ°ææÛKIÉfºÅ/=M¬#³Ë^g¶Qøùíí5Ù§4ílfhÐ;({hu[øÈ@¸¯tGL#Ã|&»ü&þÑ\\&ÙL"­#%[?â}o">a¨×î°nýÛ[¦A¯aFó"í#¢ÙÖ&ú³X	Ôô§	=Mp±D&Ê¡wLÞ@	{Þ\`éÐ8)MÔX)[ÐHaÛ$æÄüªñ~ò¾î¾ö±±a&ÄÐ&'±&þæ(Ã@¦êØÀæìÌ¦kèÎuEØ®ê $èG Ôgy)ã-!H»±ÿî!¢ÁØà"Ä"ØæSPÙä¬äg"¬g#±Õg#òCç¢|ß&ë&O§âbè)Fé\`åYSÈa$UÈYsñÅ¤ g=@ 1¹\\ªÙcaªÉ\\ºá§[ºtDî1D1Ù=M1ÀK:hõ¾ê=MðNÓ<â^2æìÇË&zÝn¡J»W\`¶ùvIð!¨Fð5áEøYGøy$·=J°ëM"M¢ó=JNHhZ³áÉî¹dQËW¼£ñ¯ó¦þ÷¨MV¯Q x_AÐ°A|">~O¿HºôVt¸ÐáY}£¬Ù·q~Ü!\`\`^ûð±wá9Õ¦°·yg=MUØ"}Öñgâñ&ðD&2òßÝÛqV£³·'þð°AáÛá}ÀI}ÃÏ¢TÃSÖsÇ>r\\UcÃçÀî\\ÜpÚ»·KéÇ]Æ/'[¶Ã±[ÙÌ³Öp·Ë§µ.=@Ê:ÛOÕ_1[Ù-hÑ+ûï¨ïÌ¢ÏwÀ³¥])°çÖÅgÕÃÊUÅþØ5¥Ò=}µYþ»?vù4Iõ¨íÄ=@ï¨H=@¬w¶¯^mù\`iê\\ØÿÁ)Öíæ¸þóÅÚ<}Ô[á Ô~? 6=@ÏôVà>=J«ãX5©@ÒNsVøä©Sìô·RöÀèRê8öù I851Û_Í,I'ÇÚfÖrYY\`¿e¨í¯O£~?Q ß±gåiøê´ò|8&ÒöÈ(3~Óèè<çÐ|òÙøUq½xUµÍôìéT-} Ë¦ås5ÕöbÝ\\bËüà¬ôÌ=}¿qU±%¹zl=M?¹ Ç¾²Ôw¿ÙK_¾º¡?¿¬é@À¹9|´zC¿¨ÉðFòbAÁØÂWAð¦ÈeT	$°[·ÃhDöA >Ù\`õiÕÁRM×§°yÇ3CFÀî]ì¤ô£½åÛÍ¸á$(ùz¯¥sÏ_=@Ñà©5¼ØÍ7-þÅ|~ÁÐiÒµ¸v|TøzgÁø{¥BAÕæí4=@ÖWûåþµMßòY1ÿõa¸ÓU¶ÿ«©Ô3ïÙÔYõ±ph~!±g©^é	)Î(x?ÕB#j1h)×=}ì	ù÷£pè&f¦§Äii}VIù¥\`²ñ!5ì#øÃ/#ºª2¨¢¨{hýå.	%mNY"æ^	ÒFèà,é'c´ÓH÷%·¢/¯y¤¸§ÆÈzèP)ÕHÐX¡ÉýºUE£Å£Äky	 ÞiÏàTà=MHà?Ñ´¡g!¡5¡=MÑ¸¹¤Õ¥ÐhæzÑb§H&VÈ¹RúÉá\\ªÙE\\º!Æf²8!9i÷v=JÓM±<[18=MOG°o±±	þ;fgL³åF-Ù	[ÃÉ©Âö'¤Ñ4Ù|M¿Èôyæu?EZìð¡ÖÝãæ=}E	8D3$wñCÿ¬£bá4áÛ´Í|×S¶voÐPÛ¿pÚi 6H³¯. èDòñhp ýð Oáw¡ ÆÊ¥'l~ÚÌMÅÚ5EÚ8ÝÚ=}_ÉÊ 6Õ<>ïõÜü5tÜµÚñµ4Z\`N®ïA9Ç¹%ZÁ°Ö]µÝÝ<½éS)¢Ïæ¦yÛg"uã¾\\èõ+Ïë=M¾L÷=@R·AYzèÈÄÔî	GÏÆdDÑ³~k#'ph­üÏÂv"[+õ!péxÛáöõ§¥!¡÷¨°¡ð¿6=MQÚWé ¨¶äæ¢Uß­kÔ¬'vßï#CÎ	þà±ùÔQÉEg©ÒHhÇàEä©íG¢¢Ò])Ý1{úÁsõñ°Éå/£Çño£µ	M£/"¿"½4)|àT	aæPyÃÁ¹Ãº19ôÁ@óåí9/=J»Çdá;"ïâÈÛIH¦èY}áiÙZJÜZiäO«sw¬°ú;íO=@É¼#ÑqS}TI|íðà"Ó\`XV$'õhZ¹:ÉP"NsõÏMü_óä\\q=@Hn=J\`§À=Ml\\õ+ËÆQ©¹»®[õã¾Öòßp ½éñ¢+$R"Þ¾eôgè ½éñR¯²ùJ£ÂÆT¹PÊÜÁñ)a	¦ë/5o>SÖ¢³¼Ou¿X}à#4?ÌT¸¸{BÝð×çp÷Ä¯çmMLõoï~³×Ý ¤7D_Ü GdÝ¡	¨-0ON8ytxGázÃÔßE\`àmg¤ñIf¢½ÐvyÉ_¡(ÉØéõà&#tEÞDaÂix)?\`	ÇÛ)ó	Yã£!ëáÉ§lU_fJl$ì¿E¡&¤Ï¹© òùsÄ^ïÀçéÇäýy(ë?àÇZ¶£uègù¡Ié¢ÅHÞïE If§=@ÍÉV;¤¸ÆçÈÉç#\\õ~Þé³ic§%ÇËÄ½ÐW	ìÇÁwïD9ÆÜ¤)¯ñ¸ÏÀUGôFå "Mñ¼W½$=MÓmø=}\`È£Iÿ (% ¿%Yd èlùÃ¥q9¤­ÇîÐE eÊYÌ)À=J	åág\`Ðj ÷A"¡$m± xµWv[å]]]¡iÛtk´Ëñd§î³öö}5}6g@'ÍÂ=@l>m¹ûÍ% ([àÚHm&e=JêØEP5{6g=@ûm±8åóä·Gûs9ââ»ê¼ESºÔòuT<>ºx¨s/|RV¹Á5u=MÏ1|WÒJÿ,ÞÀ½uh,~»+üCS|È0ÅBÕ·÷MÝX9ºùò¨ú±ãR¾ò?Ïcü1Ó¿æu/²Zi¶	µÜG8,ü¶FX·»rÿ_úÀÇwhReu§Ï=}|[£ÜvÄVg»ó¤ü¤ê9 ¿yòü:9ÓÖÆXÁ¿üÏa|]£åvX£õmi¦|Üo´ÀAòûü,µþxQá½ s#Ê£/.Çý:TÑkY\`7=@3£SþlÁìøÊÝÆSÅÉ>\`,=}j=}ÕzM°÷®sWI¿gÊã©@>cX/''Áú'	La°/¯±fzhU%í =M<"ô{Úì"2uª}"õíuÜgVj¨­?ì9+¯gë4ãdÖ\\Ü5kxìPqÒv)2²$ªWÕ9E7AchS%êdfV>¨¼õëø=MW7¨»Åí¤êqxºùõ«Ú?ã4¥¯¯6ÖhèìJm9%·jªÉ¿7|A*ºq+x¾5=J©õCvüäò1ÝþqdP?»QôoÎ³üMÓ¸æØM×ïÿqhP-wdQ¿ÀòÏÏCüUÓ³æL¿f[1Ç½tMÎéÎtf"sÇ1¶¾\`Hã·ÞqôU¹º)¼GÎHüKÓÊfXR·¯c7£ÏmScÀeNåt'Î}\\ioXKw»Ès7·-ÍT!½yó£ÎËü/*ú÷¼õuÝÎ¡|5£±lK»±ôAJS?½ÝLY¼?;dòÔk|ÏJö´MÖ¨¯ïñcií =MãTV¶#,Å=MÚ)ÂNA¯?÷Ö½ìHðLñóñY&8ºÃCþæ°ñ\`ãSÖæë*õÚ7ÃY°¯÷£¿ìPjx¼Yõ¸Úc65½K±×òTãPVFÈ*Ê­×ùÅv¿uìcVq\`ó7©=MP!ÁyõèÚ&#=}=@QÝ4Ú£9e¼Çu=M"ô³ÉZªØí@Ûöû½/Õ<X¡®xÚ½Ù½0CÍ·4_AÈú	Î±\`H¢	½\` )~rpó¿\`Ómµ¶w­öÿ9CIõ»wu\\fÉÐÜ\\!¦Ç½ôæXµt­¡èò¨d¯×ÙH±ùÈ«uóÖ²Ý¨\\¥åâd1Ê#¿~ÿe³G"×Ð¤Õ2 ]ÿÞ£bE×ÝD'BÕG=}f¶WuIÿrùp¹{=}å8ôÑ³#.²%$vM½±Ú¤©ö18Eöp~ÎD%6eX	^Dò gÕ\`Vhªõ{mÝ$[c£Ñdzfí¬Ë BÁ#f)çX¸5bÐ0÷¸Ü]ÔY\`Í÷/9áÈ?ò=JÔ	·7F"j'tA'Ã"}QÒëE¸ÛyÉ}%ame@ñêÁþí<9o×å£xf5ÀBÏXa©oãIÅJè1=@ÂG=MfMÊKEÈ±©2Ôùx@'Ü©0:aéØëì-l#ÿ·×##%_:!ï@]±á¹?C´ì4þ­ò=Ju %áf>½UpGUÚõtksøPÅHñ]°bFC¢ÁK7¸ÞBürÅK9¸æBòÅË6FR=}qBôò{°\\¾ÇË8FÒ=}ÖrfJ=@ì{°dþÇË7b¬Ëwb°Ë·b´Ë÷òn¶Ë7c|kÅÞ×¬\`/øû 4$ªÍY>3q	RM¸è|úF§ÑÊ9c$|kÉ×¬h/§øû!4ð*ñzZPbð°¬[¬ô/°RBmFsëÂB4ðBñ}ZbðÈ¬[ò[@?¶s¸ÛÓ¶¶/ÀTBíFëÂB4ðbñZcðè,D=JÊ//^ëkE4®­j]FÞ=}-DÊÏBú>1ïªðbW0^ñk¥[Êk8¶+wú^¾­ÍkÝ´&;¶M¤I=}üÌ´yÞu=}|¤nå¾hûXqÞu#=}|£² Ó¦nå~ÌTiûXÿ±ÁqÞuOÏ$=}|¥:|%:|¥;|%;|¥<|%<|¥=}|%=}|©:|):|©;|);|©<|)<|©=}|)=}ü¢JÏkÞu=M¯Áð9ûX·QÌDnå^² &;ü¢NÏsÞUðUÁðYûX·ÌD	nå^³ &=}<g:<§:<ç:<':<g;<§;<ç;4$-<g<<§<<ç<|Ê	¹È{F´uúå¾0Ïo|¾1o£|~0T5¿³ôpÎÜ|ÃÓ~1Ô5ÿ³pÎä|ÇÓþ0þ@þPþ\`þpþþþ þ°þÀþÐþàþðþ=@þþ þ1þAþQþaþqþþþ¡þ±þÁþÑþáþñþþþ!^0VúÂÊÛk®ð4·CDe^°VûÂÌÛo¶ðD·cD¥^0VüÂÎÛs¾ðT·Då^°VýÂÐÛwÆðd·£D%n-n5n=}nEnMnUn]nenmnun}nnnnn¥n­nµn½nÅnÍnÕnÝnå*§Ë5PD=M5Ñcjyyö7^q#³ã­:çf[¤#îm¸¨[AûÆÎyö^AC÷¤%²ã¸fç'îrÌèØÎc}©[ÁüÆÔ!¹Âøÿ%yöï^Q'UÄÝ(Ac÷$":g÷#$";+×3$"</×C$"=}3×S$">7×c$"?;×s$"@?×$"AC×d§²ß¸=@fÇ¨îrÌx×Î_}ÑiÛÀüÄÔýÑ÷ÿÖïÞPW=@Ý$Ac×$&J=@¤#m,î=}µ=J?²úIëu:yËùy¬JÈmÉé.Ylf³hé3¯¢@§(=}æ6^$&R¢G£#}lî=}Õ=J¿²üëu;yÏùù¬LÈuÉé/YpfÃhé5·¢\`§(AæF$$J¢g#m¬î=}µ=J?³þIëu<yÓÙy¬NÈ}é.YtfÓèè3¿¢§'=}æVÞ$$R¢£}ìî=}Õ=J¿³À¸^¯1øÞÂÈ=}7}¦Ù§Ìt¹ÂüQDÐ&²°S©ÌT9ûZ¿¹"-TYûZ¿ÉÂm^vMDÐ$<7}'³°Óg²°Ó§²°Óç²°Ó'²°Óg³°Ó§³°Óç³°Ó'³°Ói²°Ó©²°Óé²°Ó)²°Ói³°Ó©³°Óé³°Ó)³°f:7ý"JDÐl^v=M±Âð=}ûZ·YÌDní^(²)Ír^v=M½ÂðUûZ·ÌDùní^è)éÜøS\\´=Miæ=JÜ5°?lê+æÖåR¡z@k¨<zk®6«oô6Ò?ãlp¶S¶x{wjatÕwáò\\ÄÓÐÁw©jÉvývöfY  ñ¹c	°	#öÈt7uèu7u(u7ugr7u§r7uçr7u'r7ugs7u§s7uçs7u's7ugt7u§t7uçt7u'ÔÏÉÑÿ¥·¨éU!úù=Maä$Ü1'fÙ P¥þù%09ÒÝóCéÊøX[ú'®´·îr!ET <m¹Òt¶éÌYD¨pMD¨qQD¨rUD¨sYcÊ%S¿E¼Mä	|ãMcÎ%[¿¼ä}ãQcÒ%c¿Å¼Íä	}ãUcÖ%k¿¼=Mä~ãY_Ê%sE|Mä	~ßM_Î%{|äßQ_Ò%v	Ô¿ÄïK·ëºuZÖzvóäJU6³¾ëÜ@Ê61Æ\\ÎSb2_¤3¾~lÆ°cÃ¶^"=@6®UmÕ«·r\\ÖUÂSÕx2üÁvG°Sç8¢{IjÎ,8°,§¶-sXdò´Eò:fá ë¥È­"n=JF­ï«Î48Q2Á» Bûbm>k·¯EO=MF\\4W$?ñ²vú_¢zFXMËji=Jü2Aä/C«vë\`7dºÆe6n¿í ÀÊe«°=}\\7£³^4ÊRaR\`ÍD,X6ð¶{)S÷¥ÊaÅ>"ñÊ\`é[À/¿Ã¯õäö¹ðx=Mk"ö2÷|¸kohëOIxLÎN;½QMéZÑ¬©f9+³ìOV=MHU_ºº!K@FdP=Jö|6o£7¸¼´uôb¡ÜËM»WbÔ6jo¨ìÃRÆmr3.ðò²:ÿM~7)ÒÉi.,ÅÚ»ÉQè3Ú¶Ø´DaCL5üò­½Q]ó·_Rjõ=MÅ®ä¿E¸Ð1{ßÁ%lýL~7ló'¸àóÒ±è{I¤ÆjÉ×R~¯p;2¦Ò<­XH¾[Íð+b¯hSR~¹p«nþsv³Û·R=}rj%b{VÛWPä@LÄxve²T{Jø²´µâÞ;ÑnÔ°[u¾¹<ÃbFC[²oÿÜ¦/)G¸ä¤Á6\\Rûï}ÿxèµ!m³¯ÇÂ²ª¦ÏDé;Ìèa¡ê½c:Þô'gÞôjxàÃÝccNÑó£Ýå áÁ'°Û=M~ É³^ÇrU7](3ý·±	¨AL¼GÉÙ6=M}=@\\È­¯³_ëäôÄwÛÈ=@ÙYÝð(·æÈû¡'©Ø5Ú&ãôgºe¾aÂeÂ]ÂïôCÀ¤¹¢u¹P!å(B©ö°ë5ouåðÆAÇ(§íA¨ÁiÝåÊó}=MÓõòiÈãÑ	(=@þüg?Ï¿9þ@¥4µDg·È±sè.ì]EPax¯2¨æÞ=Jýzþ¼ÝQå_Ùú[ym{mÃaÙ[Ñ_çW=M°ù%¯W÷à¼GÃ·CSGóÑ¡øä¹ï"qìPìiAdåhû&èÍêa­ö;uÑ5ÕµÕTUDµ@¡%«8¹Íÿ¿\`ÞÉàxîßNÀÎÎfü¾Ã$Úá'¦©üªbfÒÃwpæ;äFÜÈ8CéYSå}WõaÉRÉcøe$FhïÍØïyð_uZQiÃÂÈþ©^âME¥Íµ9×Fø<­âÙé%­vKË;{û[Û!ñ<Iwrr­^ï÷sÖ'ïÕ$õ(0`), new Uint8Array(89506));

var HEAP8, HEAP16, HEAP32, HEAPU8, HEAPU16, HEAPU32, HEAPF32, HEAPF64;

var wasmMemory, buffer, wasmTable;

function updateGlobalBufferAndViews(b) {
 buffer = b;
 HEAP8 = new Int8Array(b);
 HEAP16 = new Int16Array(b);
 HEAP32 = new Int32Array(b);
 HEAPU8 = new Uint8Array(b);
 HEAPU16 = new Uint16Array(b);
 HEAPU32 = new Uint32Array(b);
 HEAPF32 = new Float32Array(b);
 HEAPF64 = new Float64Array(b);
}

function JS_cos(x) {
 return Math.cos(x);
}

function JS_exp(x) {
 return Math.exp(x);
}

function _emscripten_memcpy_big(dest, src, num) {
 HEAPU8.copyWithin(dest, src, src + num);
}

function abortOnCannotGrowMemory(requestedSize) {
 abort("OOM");
}

function _emscripten_resize_heap(requestedSize) {
 var oldSize = HEAPU8.length;
 requestedSize = requestedSize >>> 0;
 abortOnCannotGrowMemory(requestedSize);
}

var asmLibraryArg = {
 "b": JS_cos,
 "a": JS_exp,
 "c": _emscripten_memcpy_big,
 "d": _emscripten_resize_heap
};

function initRuntime(asm) {
 asm["f"]();
}

var imports = {
 "a": asmLibraryArg
};

var _opus_frame_decoder_create, _malloc, _opus_frame_decode_float_deinterleaved, _opus_frame_decoder_destroy, _free;

WebAssembly.instantiate(Module["wasm"], imports).then(function(output) {
 var asm = output.instance.exports;
 _opus_frame_decoder_create = asm["g"];
 _malloc = asm["h"];
 _opus_frame_decode_float_deinterleaved = asm["i"];
 _opus_frame_decoder_destroy = asm["j"];
 _free = asm["k"];
 wasmTable = asm["l"];
 wasmMemory = asm["e"];
 updateGlobalBufferAndViews(wasmMemory.buffer);
 initRuntime(asm);
 ready();
});

this.ready = new Promise(resolve => {
 ready = resolve;
}).then(() => {
 this.HEAP = buffer;
 this._malloc = _malloc;
 this._free = _free;
 this._opus_frame_decoder_create = _opus_frame_decoder_create;
 this._opus_frame_decode_float_deinterleaved = _opus_frame_decode_float_deinterleaved;
 this._opus_frame_decoder_destroy = _opus_frame_decoder_destroy;
});
}}

/***/ }),

/***/ "./node_modules/opus-decoder/src/OpusDecodedAudio.js":
/*!***********************************************************!*\
  !*** ./node_modules/opus-decoder/src/OpusDecodedAudio.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OpusDecodedAudio)
/* harmony export */ });
class OpusDecodedAudio {
  constructor(channelData, samplesDecoded) {
    this.channelData = channelData;
    this.samplesDecoded = samplesDecoded;
    this.sampleRate = 48000;
  }
}


/***/ }),

/***/ "./node_modules/opus-decoder/src/OpusDecoder.js":
/*!******************************************************!*\
  !*** ./node_modules/opus-decoder/src/OpusDecoder.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OpusDecoder)
/* harmony export */ });
/* harmony import */ var _OpusDecodedAudio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OpusDecodedAudio.js */ "./node_modules/opus-decoder/src/OpusDecodedAudio.js");
/* harmony import */ var _EmscriptenWasm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmscriptenWasm.js */ "./node_modules/opus-decoder/src/EmscriptenWasm.js");



let wasm;

class OpusDecoder {
  constructor(_OpusDecodedAudio, _EmscriptenWASM) {
    this._ready = new Promise((resolve) =>
      this._init(_OpusDecodedAudio, _EmscriptenWASM).then(resolve)
    );
  }

  static concatFloat32(buffers, length) {
    const ret = new Float32Array(length);

    let offset = 0;
    for (const buf of buffers) {
      ret.set(buf, offset);
      offset += buf.length;
    }

    return ret;
  }

  _allocateTypedArray(length, TypedArray) {
    const pointer = this._api._malloc(TypedArray.BYTES_PER_ELEMENT * length);
    const array = new TypedArray(this._api.HEAP, pointer, length);
    return [pointer, array];
  }

  // injects dependencies when running as a web worker
  async _init(_OpusDecodedAudio, _EmscriptenWASM) {
    if (!this._api) {
      const isWebWorker = _OpusDecodedAudio && _EmscriptenWASM;

      if (isWebWorker) {
        // use classes injected into constructor parameters
        this._OpusDecodedAudio = _OpusDecodedAudio;
        this._EmscriptenWASM = _EmscriptenWASM;

        // running as a webworker, use class level singleton for wasm compilation
        this._api = new this._EmscriptenWASM();
      } else {
        // use classes from es6 imports
        this._OpusDecodedAudio = _OpusDecodedAudio_js__WEBPACK_IMPORTED_MODULE_0__["default"];
        this._EmscriptenWASM = _EmscriptenWasm_js__WEBPACK_IMPORTED_MODULE_1__["default"];

        // use a global scope singleton so wasm compilation happens once only if class is instantiated
        if (!wasm) wasm = new this._EmscriptenWASM();
        this._api = wasm;
      }
    }

    await this._api.ready;

    this._decoder = this._api._opus_frame_decoder_create();

    // max size of stereo Opus packet 120ms @ 510kbs
    [this._inputPtr, this._input] = this._allocateTypedArray(
      (0.12 * 510000) / 8,
      Uint8Array
    );

    // max audio output of Opus packet 120ms @ 48000Hz
    [this._leftPtr, this._leftArr] = this._allocateTypedArray(
      120 * 48,
      Float32Array
    );
    [this._rightPtr, this._rightArr] = this._allocateTypedArray(
      120 * 48,
      Float32Array
    );
  }

  get ready() {
    return this._ready;
  }

  async reset() {
    this.free();
    await this._init();
  }

  free() {
    this._api._opus_frame_decoder_destroy(this._decoder);

    this._api._free(this._inputPtr);
    this._api._free(this._leftPtr);
    this._api._free(this._rightPtr);
  }

  decodeFrame(opusFrame) {
    if (!(opusFrame instanceof Uint8Array))
      throw Error(
        `Data to decode must be Uint8Array. Instead got ${typeof opusFrame}`
      );

    this._input.set(opusFrame);

    const samplesDecoded = this._api._opus_frame_decode_float_deinterleaved(
      this._decoder,
      this._inputPtr,
      opusFrame.length,
      this._leftPtr,
      this._rightPtr
    );

    return new this._OpusDecodedAudio(
      [
        this._leftArr.slice(0, samplesDecoded),
        this._rightArr.slice(0, samplesDecoded),
      ],
      samplesDecoded
    );
  }

  decodeFrames(opusFrames) {
    let left = [],
      right = [],
      samples = 0;

    opusFrames.forEach((frame) => {
      const { channelData, samplesDecoded } = this.decodeFrame(frame);

      left.push(channelData[0]);
      right.push(channelData[1]);
      samples += samplesDecoded;
    });

    return new this._OpusDecodedAudio(
      [
        OpusDecoder.concatFloat32(left, samples),
        OpusDecoder.concatFloat32(right, samples),
      ],
      samples
    );
  }
}


/***/ }),

/***/ "./node_modules/opus-decoder/src/OpusDecoderWebWorker.js":
/*!***************************************************************!*\
  !*** ./node_modules/opus-decoder/src/OpusDecoderWebWorker.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OpusDecoderWebWorker)
/* harmony export */ });
/* harmony import */ var web_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web-worker */ "./node_modules/web-worker/cjs/browser.js");
/* harmony import */ var _EmscriptenWasm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmscriptenWasm.js */ "./node_modules/opus-decoder/src/EmscriptenWasm.js");
/* harmony import */ var _OpusDecodedAudio_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OpusDecodedAudio.js */ "./node_modules/opus-decoder/src/OpusDecodedAudio.js");
/* harmony import */ var _OpusDecoder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OpusDecoder.js */ "./node_modules/opus-decoder/src/OpusDecoder.js");
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")["Buffer"];





let sourceURL;

class OpusDecoderWebWorker extends web_worker__WEBPACK_IMPORTED_MODULE_0__ {
  constructor() {
    if (!sourceURL) {
      const webworkerSourceCode =
        "'use strict';" +
        // dependencies need to be manually resolved when stringifying this function
        `(${((_OpusDecoder, _OpusDecodedAudio, _EmscriptenWASM) => {
          // We're in a Web Worker
          const decoder = new _OpusDecoder(_OpusDecodedAudio, _EmscriptenWASM);

          const detachBuffers = (buffer) =>
            Array.isArray(buffer)
              ? buffer.map((buffer) => new Uint8Array(buffer))
              : new Uint8Array(buffer);

          self.onmessage = ({ data: { id, command, opusData } }) => {
            switch (command) {
              case "ready":
                decoder.ready.then(() => {
                  self.postMessage({
                    id,
                  });
                });
                break;
              case "free":
                decoder.free();
                self.postMessage({
                  id,
                });
                break;
              case "reset":
                decoder.reset().then(() => {
                  self.postMessage({
                    id,
                  });
                });
                break;
              case "decodeFrame":
              case "decodeFrames":
                const { channelData, samplesDecoded, sampleRate } = decoder[
                  command
                ](detachBuffers(opusData));

                self.postMessage(
                  {
                    id,
                    channelData,
                    samplesDecoded,
                    sampleRate,
                  },
                  // The "transferList" parameter transfers ownership of channel data to main thread,
                  // which avoids copying memory.
                  channelData.map((channel) => channel.buffer)
                );
                break;
              default:
                this.console.error(
                  "Unknown command sent to worker: " + command
                );
            }
          };
        }).toString()})(${_OpusDecoder_js__WEBPACK_IMPORTED_MODULE_3__["default"]}, ${_OpusDecodedAudio_js__WEBPACK_IMPORTED_MODULE_2__["default"]}, ${_EmscriptenWasm_js__WEBPACK_IMPORTED_MODULE_1__["default"]})`;

      const type = "text/javascript";
      try {
        // browser
        sourceURL = URL.createObjectURL(
          new Blob([webworkerSourceCode], { type })
        );
      } catch {
        // nodejs
        sourceURL = `data:${type};base64,${Buffer.from(
          webworkerSourceCode
        ).toString("base64")}`;
      }
    }

    super(sourceURL);

    this._id = Number.MIN_SAFE_INTEGER;
    this._enqueuedOperations = new Map();

    this.onmessage = ({ data }) => {
      this._enqueuedOperations.get(data.id)(data);
      this._enqueuedOperations.delete(data.id);
    };
  }

  static _getOpusDecodedAudio({ channelData, samplesDecoded }) {
    return new _OpusDecodedAudio_js__WEBPACK_IMPORTED_MODULE_2__["default"](channelData, samplesDecoded);
  }

  async _postToDecoder(command, opusData) {
    return new Promise((resolve) => {
      this.postMessage({
        command,
        id: this._id,
        opusData,
      });

      this._enqueuedOperations.set(this._id++, resolve);
    });
  }

  get ready() {
    return this._postToDecoder("ready");
  }

  async free() {
    await this._postToDecoder("free").finally(() => {
      this.terminate();
    });
  }

  async reset() {
    await this._postToDecoder("reset");
  }

  async decodeFrame(data) {
    return this._postToDecoder("decodeFrame", data).then(
      OpusDecoderWebWorker._getOpusDecodedAudio
    );
  }

  async decodeFrames(data) {
    return this._postToDecoder("decodeFrames", data).then(
      OpusDecoderWebWorker._getOpusDecodedAudio
    );
  }
}


/***/ })

}]);