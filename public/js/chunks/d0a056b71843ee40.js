(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_player_audio-player_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/artist/EarningDetails.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/artist/EarningDetails.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixins_billing_billing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/billing/billing */ "./resources/js/mixins/billing/billing.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['artist'],
  mixins: [_mixins_billing_billing__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      additional_pay: {}
    };
  },
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
    },
    totalAdditionalPay: function totalAdditionalPay() {
      var total_price = 0;

      if (this.artist.additional_pay.length > 0) {
        this.artist.additional_pay.map(function (value, key) {
          total_price += value.price / 100;
        });
      }

      return total_price;
    }
  },
  methods: {
    getAdditionalPay: function getAdditionalPay() {
      console.log('artist_id', this.artist);
    },
    deleteAdditionalPay: function deleteAdditionalPay(id, index) {
      var _this = this;

      var formData = new FormData();
      axios.post("/api/admin/additional-pay/" + id, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (res) {
        // this.artist = res.data;
        _this.artist.additional_pay.splice(index, 1);

        _this.$emit("updated");

        _this.isLoading = false;
      })["catch"](function (e) {
        _this.isLoading = false;
        _this.errors = e.response.data.errors; // this.$notify({
        //     group: "foo",
        //     type: "error",
        //     title: this.$t("Error"),
        //     text: Object.values(e.response.data.errors).join(
        //         "<br />"
        //     )
        // });
      });
    },
    storeAdditionalPay: function storeAdditionalPay() {
      var _this2 = this;

      var formData = new FormData();
      formData.append("price", this.additional_pay.price || "");
      formData.append("description", this.additional_pay.description || "");
      formData.append("artist_id", this.artist.id || "");
      axios.post("/api/admin/additional-pay", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (res) {
        console.log("response =>", res);
        console.log("push to array");
        console.log("artist => ", _this2.artist);

        _this2.artist.additional_pay.push(res.data); // this.artist.funds += this.additional_pay.price;


        _this2.additional_pay.price = null;
        _this2.additional_pay.description = null; // this.artist = res.data;

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
  },
  beforeMount: function beforeMount() {
    this.getAdditionalPay();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialogs/admin/edit/Artist.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialogs/admin/edit/Artist.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _artist_EarningDetails_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../artist/EarningDetails.vue */ "./resources/js/components/artist/EarningDetails.vue");
/* harmony import */ var _data_coutries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../data/coutries */ "./resources/js/data/coutries.js");


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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/single-items/TV.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/single-items/TV.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dialogs_admin_edit_Artist_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dialogs/admin/edit/Artist.vue */ "./resources/js/components/dialogs/admin/edit/Artist.vue");

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_single_items_TV__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../elements/single-items/TV */ "./resources/js/components/elements/single-items/TV.vue");
/* harmony import */ var _FooterPlayerLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterPlayerLayout */ "./resources/js/components/player/audio-player/FooterPlayerLayout.vue");
/* harmony import */ var _PhonePlayerLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PhonePlayerLayout */ "./resources/js/components/player/audio-player/PhonePlayerLayout.vue");
/* harmony import */ var _mixins_player_eventHandlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../mixins/player/eventHandlers */ "./resources/js/mixins/player/eventHandlers.js");
/* harmony import */ var _mixins_player_playerActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../mixins/player/playerActions */ "./resources/js/mixins/player/playerActions.js");
/* harmony import */ var _mixins_player_progress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../mixins/player/progress */ "./resources/js/mixins/player/progress.js");
/* harmony import */ var _mixins_player_stream__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../mixins/player/stream */ "./resources/js/mixins/player/stream.js");
/* harmony import */ var _mixins_player_update__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../mixins/player/update */ "./resources/js/mixins/player/update.js");
/* harmony import */ var _mixins_player_volume__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../mixins/player/volume */ "./resources/js/mixins/player/volume.js");
/* harmony import */ var _mixins_player_youTube__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../mixins/player/youTube */ "./resources/js/mixins/player/youTube.js");
/* harmony import */ var _mixins_billing_billing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../mixins/billing/billing */ "./resources/js/mixins/billing/billing.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../helpers */ "./resources/js/helpers.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



 // mixins










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["playlist"],
  mixins: [_mixins_player_playerActions__WEBPACK_IMPORTED_MODULE_4__["default"], _mixins_player_eventHandlers__WEBPACK_IMPORTED_MODULE_3__["default"], _mixins_player_stream__WEBPACK_IMPORTED_MODULE_6__["default"], _mixins_player_update__WEBPACK_IMPORTED_MODULE_7__["default"], _mixins_player_progress__WEBPACK_IMPORTED_MODULE_5__["default"], _mixins_player_volume__WEBPACK_IMPORTED_MODULE_8__["default"], _mixins_player_youTube__WEBPACK_IMPORTED_MODULE_9__["default"], _mixins_billing_billing__WEBPACK_IMPORTED_MODULE_10__["default"]],
  components: {
    TV: _elements_single_items_TV__WEBPACK_IMPORTED_MODULE_0__["default"],
    FooterPlayerLayout: _FooterPlayerLayout__WEBPACK_IMPORTED_MODULE_1__["default"],
    PhonePlayerLayout: _PhonePlayerLayout__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
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

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this6.$store.getters.isLogged) {
                  _context2.next = 3;
                  break;
                }

                _context2.next = 3;
                return _helpers__WEBPACK_IMPORTED_MODULE_11__["default"].loginOrCancel();

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
      this.is_register_play_count = false;
    },
    onloadstart: function onloadstart() {
      this.is_register_play_count = false;
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
      this.onapiCallRegisterPlayCount();
    },
    onapiCallRegisterPlayCount: function onapiCallRegisterPlayCount() {
      if (this.audioPlayer.currentTime >= 59 && !this.is_register_play_count) {
        if (this.currentAudio.source_format === "yt_video") {
          this.$store.dispatch("registerPlayAndRoyaltyCount", {
            id: this.currentAudio.id,
            type: this.isPodcastEpisode ? "episode" : "song",
            label: this.currentAudio.title,
            duration: this.currentAudio.duration,
            origin: 'youtube',
            artist_id: this.currentAudio.artist ? this.currentAudio.artist.id : ''
          });
        } else if (this.currentAudio.source_format === "file") {
          this.$store.dispatch("registerPlayAndRoyaltyCount", {
            id: this.currentAudio.id,
            type: this.isPodcastEpisode ? "episode" : "song",
            label: this.currentAudio.title,
            duration: this.currentAudio.duration,
            origin: this.currentAudio.origin,
            artist_id: this.currentAudio.artist ? this.currentAudio.artist.id : ''
          });
        } else {
          this.$store.dispatch("registerPlayAndRoyaltyCount", {
            id: this.currentAudio.id,
            type: "radio-sation",
            label: this.currentAudio.title
          });
        }

        this.is_register_play_count = true;
      }
    },
    onended: function onended() {
      var index;
      this.canPlay = false;
      this.tracks_played++;
      this.$store.commit("setCurrentlyPlayingTypeStatus", "pause");
      this.$store.commit("setPlayerStatus", null);
      this.currentAudio.isPlaying = false;
      /*if (this.$store.getters.getUser && this.$store.getters.getUser.id) {
          this.$store.dispatch("endPlay");
      }*/

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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    playPause: function playPause() {
      var _this = this;

      console.log("playPause", this.currentAudio);

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
          /*if (this.videoPlayer.getCurrentTime() === 0) {
              this.$store.dispatch("registerPlay", {
                  id: this.currentAudio.id,
                  type: this.isPodcastEpisode ? "episode" : "song",
                  label: this.currentAudio.title,
                  duration: this.currentAudio.duration,
                  origin: 'youtube',
                  artist_id: this.currentAudio.artist ? this.currentAudio.artist.id : '',
              });
          }*/
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
          /*if (this.audioPlayer.currentTime === 0) {
              this.$store.dispatch("registerPlay", {
                  id: this.currentAudio.id,
                  type: this.isPodcastEpisode ? "episode" : "song",
                  label: this.currentAudio.title,
                  duration: this.currentAudio.duration,
                  origin: this.currentAudio.origin,
                  artist_id: this.currentAudio.artist ? this.currentAudio.artist.id : ''
              });
          }*/

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
            /*if (this.audioPlayer.currentTime === 0) {
                this.$store.dispatch("registerPlay", {
                    id: this.currentAudio.id,
                    type: "radio-sation",
                    label: this.currentAudio.title
                });
            }*/
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

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    updateCurrentAudio: function updateCurrentAudio(index, force) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var campaignsToPlay;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
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

      axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/user/playing", obj);
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

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var audio, res, title, artist;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
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
                return axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/podcast/" + audio.id);

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
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var res;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/track-source?title=' + title + '&artist=' + artist);

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

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var audio;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                audio = _this6.playlist[index];
                axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/next-songs?id=' + audio.id + "&origin=" + audio.origin).then(function (res) {
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
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

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

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/***/ ((module) => {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/single-items/TV.vue?vue&type=style&index=0&id=53a28649&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/single-items/TV.vue?vue&type=style&index=0&id=53a28649&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#container[data-v-53a28649] {\n  max-width: 1024px;\n  margin: auto;\n  width: 800px;\n  height: 450px;\n}\n@media screen and (max-width: 900px) {\n#container[data-v-53a28649] {\n    width: 500px;\n    height: 300px;\n}\n}\n@media screen and (max-width: 600px) {\n#container[data-v-53a28649] {\n    width: 90%;\n}\n}\n@media screen and (max-width: 600px) {\n#container.small-screen.phone-layout[data-v-53a28649] {\n    width: 95%;\n    height: 300px;\n}\n}\n@media screen and (max-width: 600px) {\n#container.small-screen[data-v-53a28649] {\n    width: 95%;\n    height: 300px;\n}\n}\n#monitor[data-v-53a28649] {\n  background: #000;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  border-top: 3px solid #888;\n  padding: 2% 2% 4% 2%;\n  border-radius: 10px;\n  border-bottom-left-radius: 50% 2%;\n  border-bottom-right-radius: 50% 2%;\n  transition: margin-right 1s;\n}\n#monitor[data-v-53a28649]:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: 3%;\n  left: 36%;\n  height: 0.5%;\n  width: 28%;\n  background: #ddd;\n  border-radius: 50%;\n  box-shadow: 0 0 3px 0 white;\n}\n.small-screen__icon[data-v-53a28649] {\n  position: absolute;\n  top: 3px;\n  right: 3px;\n}\n#monitorscreen[data-v-53a28649] {\n  background-color: black;\n  width: 100%;\n  height: 100%;\n}\n#container.small-screen[data-v-53a28649] {\n  width: auto;\n  height: auto;\n}\n#container.small-screen #monitor[data-v-53a28649]:after {\n  display: none;\n}\n#container.small-screen #monitor[data-v-53a28649] {\n  background: transparent;\n  position: relative;\n  border-top: none;\n  margin: 0;\n  padding: 0;\n  border-radius: 0;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n#container.small-screen #monitorscreen[data-v-53a28649] {\n  background-color: transparent;\n  border-top: none;\n  border-radius: 0px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=style&index=0&id=4f0e5cda&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=style&index=0&id=4f0e5cda&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".play-button-container {\n  height: 3em;\n  width: 3em;\n  position: relative;\n  display: flex;\n  justify-content: center;\n}\n.play-button-container .progress-circle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.play-button-container .play-button {\n  margin: 0 !important;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-15.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15.use[3]!./node_modules/vuetify/src/components/VSlider/VSlider.sass":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-15.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15.use[3]!./node_modules/vuetify/src/components/VSlider/VSlider.sass ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".theme--light.v-slider .v-slider__track-background,\n.theme--light.v-slider .v-slider__track-fill,\n.theme--light.v-slider .v-slider__thumb {\n  background: rgba(0, 0, 0, 0.26);\n}\n\n.theme--dark.v-slider .v-slider__track-background,\n.theme--dark.v-slider .v-slider__track-fill,\n.theme--dark.v-slider .v-slider__thumb {\n  background: rgba(255, 255, 255, 0.2);\n}\n\n.v-slider {\n  cursor: default;\n  display: flex;\n  align-items: center;\n  position: relative;\n  flex: 1;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.v-slider input {\n  cursor: default;\n  padding: 0;\n  width: 100%;\n  display: none;\n}\n\n.v-slider__track-container {\n  position: absolute;\n  border-radius: 0;\n}\n\n.v-slider__track-background, .v-slider__track-fill {\n  position: absolute;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n\n.v-slider__thumb-container {\n  outline: none;\n  position: absolute;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  top: 50%;\n}\n.v-slider__thumb-container:hover .v-slider__thumb:before {\n  transform: scale(1);\n}\n\n.v-slider__thumb {\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  left: -6px;\n  top: 50%;\n  border-radius: 50%;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  transform: translateY(-50%);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.v-slider__thumb:before {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  content: \"\";\n  color: inherit;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: currentColor;\n  opacity: 0.3;\n  position: absolute;\n  left: -12px;\n  top: -12px;\n  transform: scale(0.1);\n  pointer-events: none;\n}\n.v-slider__thumb::after {\n  content: \"\";\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.v-slider__ticks-container {\n  position: absolute;\n}\n\n.v-slider__tick {\n  position: absolute;\n  opacity: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  border-radius: 0;\n}\n.v-slider__tick--filled {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.v-application--is-ltr .v-slider__tick:first-child .v-slider__tick-label {\n  transform: none;\n}\n.v-application--is-rtl .v-slider__tick:first-child .v-slider__tick-label {\n  transform: translateX(100%);\n}\n.v-application--is-ltr .v-slider__tick:last-child .v-slider__tick-label {\n  transform: translateX(-100%);\n}\n.v-application--is-rtl .v-slider__tick:last-child .v-slider__tick-label {\n  transform: none;\n}\n\n.v-slider__tick-label {\n  position: absolute;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  white-space: nowrap;\n}\n\n.v-slider__thumb-label-container {\n  position: absolute;\n  left: 0;\n  top: 0;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.v-slider__thumb-label {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  color: #fff;\n  width: 32px;\n  height: 32px;\n  border-radius: 50% 50% 0;\n  position: absolute;\n  left: 0;\n  bottom: 100%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.v-slider--horizontal {\n  min-height: 32px;\n  margin-left: 8px;\n  margin-right: 8px;\n}\n.v-slider--horizontal .v-slider__track-container {\n  width: 100%;\n  height: 2px;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.v-slider--horizontal .v-slider__track-background, .v-slider--horizontal .v-slider__track-fill {\n  height: 100%;\n}\n.v-slider--horizontal .v-slider__ticks-container {\n  left: 0;\n  height: 2px;\n  width: 100%;\n}\n.v-application--is-ltr .v-slider--horizontal .v-slider__tick:first-child .v-slider__tick-label {\n  transform: translateX(0%);\n}\n.v-application--is-rtl .v-slider--horizontal .v-slider__tick:first-child .v-slider__tick-label {\n  transform: translateX(0%);\n}\n.v-application--is-ltr .v-slider--horizontal .v-slider__tick:last-child .v-slider__tick-label {\n  transform: translateX(-100%);\n}\n.v-application--is-rtl .v-slider--horizontal .v-slider__tick:last-child .v-slider__tick-label {\n  transform: translateX(100%);\n}\n.v-slider--horizontal .v-slider__tick .v-slider__tick-label {\n  top: 8px;\n}\n.v-application--is-ltr .v-slider--horizontal .v-slider__tick .v-slider__tick-label {\n  transform: translateX(-50%);\n}\n.v-application--is-rtl .v-slider--horizontal .v-slider__tick .v-slider__tick-label {\n  transform: translateX(50%);\n}\n.v-slider--horizontal .v-slider__thumb-label {\n  transform: translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg);\n}\n.v-slider--horizontal .v-slider__thumb-label > * {\n  transform: rotate(-45deg);\n}\n\n.v-slider--vertical {\n  min-height: 150px;\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n.v-slider--vertical .v-slider__track-container {\n  height: 100%;\n  width: 2px;\n  left: 50%;\n  top: 0;\n  transform: translateX(-50%);\n}\n.v-slider--vertical .v-slider__track-background, .v-slider--vertical .v-slider__track-fill {\n  width: 100%;\n}\n.v-slider--vertical .v-slider__thumb-container {\n  left: 50%;\n}\n.v-slider--vertical .v-slider__ticks-container {\n  top: 0;\n  width: 2px;\n  height: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.v-application--is-ltr .v-slider--vertical .v-slider__tick .v-slider__tick-label, .v-application--is-ltr .v-slider--vertical .v-slider__tick:first-child .v-slider__tick-label, .v-application--is-ltr .v-slider--vertical .v-slider__tick:last-child .v-slider__tick-label {\n  transform: translateY(-50%);\n  left: 12px;\n}\n.v-application--is-rtl .v-slider--vertical .v-slider__tick .v-slider__tick-label, .v-application--is-rtl .v-slider--vertical .v-slider__tick:first-child .v-slider__tick-label, .v-application--is-rtl .v-slider--vertical .v-slider__tick:last-child .v-slider__tick-label {\n  transform: translateY(-50%);\n  right: 12px;\n}\n.v-slider--vertical .v-slider__thumb-label > * {\n  transform: rotate(-135deg);\n}\n\n.v-slider__thumb-container--focused .v-slider__thumb:before {\n  transform: scale(1);\n}\n\n.v-slider--active .v-slider__tick {\n  opacity: 1;\n}\n\n.v-slider__thumb-container--active .v-slider__thumb:before {\n  transform: scale(1.5) !important;\n}\n\n.v-slider--disabled {\n  pointer-events: none;\n}\n.v-slider--disabled .v-slider__thumb {\n  width: 8px;\n  height: 8px;\n  left: -4px;\n}\n.v-slider--disabled .v-slider__thumb:before {\n  display: none;\n}\n\n.v-slider__ticks-container--always-show .v-slider__tick {\n  opacity: 1;\n}\n\n.v-input__slider.v-input--is-readonly > .v-input__control {\n  pointer-events: none;\n}\n.v-application--is-ltr .v-input__slider .v-input__slot .v-label {\n  margin-left: 0;\n  margin-right: 12px;\n}\n.v-application--is-rtl .v-input__slider .v-input__slot .v-label {\n  margin-right: 0;\n  margin-left: 12px;\n}\n\n.v-application--is-ltr .v-input__slider--inverse-label .v-input__slot .v-label {\n  margin-right: 0;\n  margin-left: 12px;\n}\n.v-application--is-rtl .v-input__slider--inverse-label .v-input__slot .v-label {\n  margin-left: 0;\n  margin-right: 12px;\n}\n\n.v-input__slider--vertical {\n  align-items: center;\n}\n.v-application--is-ltr .v-input__slider--vertical {\n  flex-direction: column-reverse;\n}\n.v-application--is-rtl .v-input__slider--vertical {\n  flex-direction: column;\n}\n.v-input__slider--vertical .v-input__slot, .v-input__slider--vertical .v-input__prepend-outer, .v-input__slider--vertical .v-input__append-outer {\n  margin: 0;\n}\n.v-input__slider--vertical .v-messages {\n  display: none;\n}\n\n.v-input--has-state .v-slider__track-background {\n  opacity: 0.4;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=style&index=0&id=1c4cddf5&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=style&index=0&id=1c4cddf5&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.epico_audio-title {\n    text-align: center;\n    padding: 0 1em 1em 1em;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/simple-yenc/src/simple-yenc.js":
/*!*****************************************************!*\
  !*** ./node_modules/simple-yenc/src/simple-yenc.js ***!
  \*****************************************************/
/***/ ((module) => {

const encode = (byteArray) => {
  const charArray = [];

  for (const byte of byteArray) {
    let encoded = (byte + 42) % 256;

    if (
      encoded === 0 || //  NULL
      encoded === 10 || // LF
      encoded === 13 || // CR
      encoded === 61 //    =
    ) {
      charArray.push("=" + String.fromCharCode((encoded + 64) % 256));
    } else {
      charArray.push(String.fromCharCode(encoded));
    }
  }

  return charArray.join("");
};

const decode = (string) => {
  const htmlCodeOverrides = new Map();
  [
    ,
    8364,
    ,
    8218,
    402,
    8222,
    8230,
    8224,
    8225,
    710,
    8240,
    352,
    8249,
    338,
    ,
    381,
    ,
    ,
    8216,
    8217,
    8220,
    8221,
    8226,
    8211,
    8212,
    732,
    8482,
    353,
    8250,
    339,
    ,
    382,
    376,
  ].forEach((k, v) => htmlCodeOverrides.set(k, v));

  const output = new Uint8Array(string.length);

  let escaped = false,
    byteIndex = 0,
    byte,
    offset = 42, // default yEnc offset
    startIdx = 0;

  if (string.length > 13 && string.substring(0, 9) === "dynEncode") {
    const version = parseInt(string.substring(9, 11), 16);
    if (version === 0) {
      offset = parseInt(string.substring(11, 13), 16);
      startIdx = 13;
    }
  }

  const offsetReverse = 256 - offset;

  for (let i = startIdx; i < string.length; i++) {
    byte = string.charCodeAt(i);

    if (byte === 61 && !escaped) {
      escaped = true;
      continue;
    }

    if (byte > 255) {
      const htmlOverride = htmlCodeOverrides.get(byte);
      if (htmlOverride) byte = htmlOverride + 127;
    }

    if (escaped) {
      escaped = false;
      byte -= 64;
    }

    output[byteIndex++] =
      byte < offset && byte > 0 ? byte + offsetReverse : byte - offset;
  }

  return output.subarray(0, byteIndex);
};

const dynamicEncode = (byteArray, stringWrapper = '"') => {
  let shouldEscape,
    offsetLength = Infinity,
    offset = 0;

  if (stringWrapper === '"')
    shouldEscape = (byte1) =>
      byte1 === 0 || //  NULL
      byte1 === 8 || //  BS
      byte1 === 9 || //  TAB
      byte1 === 10 || // LF
      byte1 === 11 || // VT
      byte1 === 12 || // FF
      byte1 === 13 || // CR
      byte1 === 34 || // "
      byte1 === 92 || // \
      byte1 === 61; //   =;

  if (stringWrapper === "'")
    shouldEscape = (byte1) =>
      byte1 === 0 || //  NULL
      byte1 === 8 || //  BS
      byte1 === 9 || //  TAB
      byte1 === 10 || // LF
      byte1 === 11 || // VT
      byte1 === 12 || // FF
      byte1 === 13 || // CR
      byte1 === 39 || // '
      byte1 === 92 || // \
      byte1 === 61; //   =;

  if (stringWrapper === "`")
    shouldEscape = (byte1, byte2) =>
      byte1 === 61 || // =
      byte1 === 13 || // CR
      byte1 === 96 || // `
      (byte1 === 36 && byte2 === 123); // ${

  // search for the byte offset with the least amount of escape characters
  for (let o = 0; o < 256; o++) {
    let length = 0;

    for (let i = 0; i < byteArray.length; i++) {
      const byte1 = (byteArray[i] + o) % 256 | 0;
      const byte2 = (byteArray[i + 1] + o) % 256 | 0;

      if (shouldEscape(byte1, byte2)) length++;
      length++;
    }

    if (length < offsetLength) {
      offsetLength = length;
      offset = o;
    }
  }

  const charArray = [
    "dynEncode", // magic signature
    "00", // version 0x00 - 0xfe (0xff reserved)
    offset.toString(16).padStart(2, "0"), // best offset in bytes 0x00 - 0xff
  ];

  for (let i = 0; i < byteArray.length; i++) {
    const byte1 = (byteArray[i] + offset) % 256;
    const byte2 = (byteArray[i + 1] + offset) % 256;

    if (shouldEscape(byte1, byte2)) {
      charArray.push("=", String.fromCharCode((byte1 + 64) % 256));
    } else {
      charArray.push(String.fromCharCode(byte1));
    }
  }

  return charArray.join("");
};

// allows embedded javascript string template
const stringify = (rawString) =>
  rawString
    .replace(/[\\]/g, "\\\\")
    .replace(/[`]/g, "\\`")
    .replace(/\${/g, "\\${");

module.exports = {
  encode,
  dynamicEncode,
  decode,
  stringify,
};


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/single-items/TV.vue?vue&type=style&index=0&id=53a28649&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/single-items/TV.vue?vue&type=style&index=0&id=53a28649&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TV_vue_vue_type_style_index_0_id_53a28649_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TV.vue?vue&type=style&index=0&id=53a28649&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/single-items/TV.vue?vue&type=style&index=0&id=53a28649&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TV_vue_vue_type_style_index_0_id_53a28649_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TV_vue_vue_type_style_index_0_id_53a28649_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=style&index=0&id=4f0e5cda&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=style&index=0&id=4f0e5cda&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterPlayerLayout_vue_vue_type_style_index_0_id_4f0e5cda_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FooterPlayerLayout.vue?vue&type=style&index=0&id=4f0e5cda&lang=scss& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=style&index=0&id=4f0e5cda&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterPlayerLayout_vue_vue_type_style_index_0_id_4f0e5cda_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterPlayerLayout_vue_vue_type_style_index_0_id_4f0e5cda_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vuetify/src/components/VSlider/VSlider.sass":
/*!******************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VSlider/VSlider.sass ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_15_use_2_sass_loader_dist_cjs_js_clonedRuleSet_15_use_3_VSlider_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-15.use[1]!../../../../postcss-loader/dist/cjs.js??clonedRuleSet-15.use[2]!../../../../sass-loader/dist/cjs.js??clonedRuleSet-15.use[3]!./VSlider.sass */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-15.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15.use[3]!./node_modules/vuetify/src/components/VSlider/VSlider.sass");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_15_use_2_sass_loader_dist_cjs_js_clonedRuleSet_15_use_3_VSlider_sass__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_15_use_2_sass_loader_dist_cjs_js_clonedRuleSet_15_use_3_VSlider_sass__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=style&index=0&id=1c4cddf5&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=style&index=0&id=1c4cddf5&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhonePlayerLayout_vue_vue_type_style_index_0_id_1c4cddf5_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhonePlayerLayout.vue?vue&type=style&index=0&id=1c4cddf5&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=style&index=0&id=1c4cddf5&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhonePlayerLayout_vue_vue_type_style_index_0_id_1c4cddf5_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhonePlayerLayout_vue_vue_type_style_index_0_id_1c4cddf5_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/* harmony import */ var _FooterPlayerLayout_vue_vue_type_style_index_0_id_4f0e5cda_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FooterPlayerLayout.vue?vue&type=style&index=0&id=4f0e5cda&lang=scss& */ "./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=style&index=0&id=4f0e5cda&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



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
/* harmony import */ var _PhonePlayerLayout_vue_vue_type_style_index_0_id_1c4cddf5_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PhonePlayerLayout.vue?vue&type=style&index=0&id=1c4cddf5&lang=css& */ "./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=style&index=0&id=1c4cddf5&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



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

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/player/audio-player/PhonePlayerLayout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EarningDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EarningDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/artist/EarningDetails.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EarningDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Artist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Artist.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialogs/admin/edit/Artist.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Artist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TV_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TV.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/single-items/TV.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TV_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterPlayerLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FooterPlayerLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterPlayerLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhonePlayerLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhonePlayerLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhonePlayerLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/elements/single-items/TV.vue?vue&type=style&index=0&id=53a28649&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/elements/single-items/TV.vue?vue&type=style&index=0&id=53a28649&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TV_vue_vue_type_style_index_0_id_53a28649_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TV.vue?vue&type=style&index=0&id=53a28649&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/single-items/TV.vue?vue&type=style&index=0&id=53a28649&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=style&index=0&id=4f0e5cda&lang=scss&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=style&index=0&id=4f0e5cda&lang=scss& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterPlayerLayout_vue_vue_type_style_index_0_id_4f0e5cda_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FooterPlayerLayout.vue?vue&type=style&index=0&id=4f0e5cda&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=style&index=0&id=4f0e5cda&lang=scss&");


/***/ }),

/***/ "./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=style&index=0&id=1c4cddf5&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=style&index=0&id=1c4cddf5&lang=css& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhonePlayerLayout_vue_vue_type_style_index_0_id_1c4cddf5_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhonePlayerLayout.vue?vue&type=style&index=0&id=1c4cddf5&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=style&index=0&id=1c4cddf5&lang=css&");


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/artist/EarningDetails.vue?vue&type=template&id=5d46bc85&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/artist/EarningDetails.vue?vue&type=template&id=5d46bc85& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VContainer.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/VDivider.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/VListItem.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/VListItemAvatar.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/VSimpleTable.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VSpacer.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");

















var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__["default"], {
    staticClass: "p-3"
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__.VCardTitle, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    staticClass: "mr-3",
    attrs: {
      color: "primary",
      "x-large": ""
    }
  }, [_vm._v("$vuetify.icons.currency-usd")]), _vm._v("\n        " + _vm._s(_vm.$t("Earnings")) + "\n        "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__["default"]), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__["default"]), _vm._v(" "), _c("div", {
    staticClass: "total-earnings__value price bold success--text"
  }, [_vm._v("\n            " + _vm._s(_vm.price(_vm.artist.funds) + _vm.defaultCurrency.symbol) + "\n        ")])], 1), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__.VCardText, [_c("div", {
    staticClass: "title"
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Details")) + "\n        ")]), _vm._v(" "), _c(vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_4__["default"]), _vm._v(" "), _c("div", {
    staticClass: "details"
  }, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      cols: "12",
      lg: "6"
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      cols: "12"
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__.VCardTitle, [_vm._v("\n                                            " + _vm._s(_vm.$t("Sales")) + "\n                                            "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__["default"]), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__["default"]), _vm._v(" "), _c("div", {
    staticClass: "total-earnings__value bold price small success--text"
  }, [_vm._v("\n                                                " + _vm._s(_vm.price(_vm.totalSalesProfit) + _vm.defaultCurrency.symbol) + "\n                                            ")])], 1), _vm._v(" "), _c(vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_4__["default"])], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      cols: "12"
    }
  }, [_c(vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__["default"], {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn() {
        return [_c("thead", [_c("tr", [_c("th", {
          staticClass: "text-left"
        }, [_vm._v("\n                                                            " + _vm._s(_vm.$t("Product")) + "\n                                                        ")]), _vm._v(" "), _c("th", {
          staticClass: "text-left"
        }, [_vm._v("\n                                                            " + _vm._s(_vm.$t("License")) + "\n                                                        ")]), _vm._v(" "), _c("th", {
          staticClass: "text-left"
        }, [_vm._v("\n                                                            " + _vm._s(_vm.$t("Price")) + "\n                                                        ")]), _vm._v(" "), _c("th", {
          staticClass: "text-left"
        }, [_vm._v("\n                                                            " + _vm._s(_vm.$t("Earned")) + "\n                                                        ")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.artist.sales, function (sale, n) {
          return _c("tr", {
            key: n
          }, [_c("td", [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_9__["default"], [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["default"], {
            staticClass: "asset-shadow",
            attrs: {
              width: "35",
              height: "35",
              rounded: "0"
            }
          }, [_c("img", {
            attrs: {
              src: sale.cover
            }
          })]), _vm._v(" "), _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__.VListItemContent, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__.VListItemTitle, [_vm._v(_vm._s(sale.itemTitle))])], 1)], 1)], 1), _vm._v(" "), _c("td", {
            staticClass: "text-left"
          }, [_vm._v("\n                                                            " + _vm._s(sale.priceName) + "\n                                                        ")]), _vm._v(" "), _c("td", {
            staticClass: "text-left"
          }, [_c("div", {
            staticClass: "price success--text bold"
          }, [_vm._v("\n                                                                " + _vm._s(_vm.price(sale.amount) + sale.priceSymbol) + "\n                                                            ")])]), _vm._v(" "), _c("td", {
            staticClass: "text-left"
          }, [_c("div", {
            staticClass: "price success--text bold"
          }, [_vm._v("\n                                                                " + _vm._s(_vm.price(sale.amount * sale.artist_cut / 100) + sale.priceSymbol) + "\n                                                            ")])])]);
        }), 0)];
      },
      proxy: true
    }])
  })], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      cols: "12",
      lg: "6"
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      cols: "12"
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__.VCardTitle, [_vm._v("\n                                            " + _vm._s(_vm.$t("Royalties")) + "\n                                            "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__["default"]), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__["default"]), _vm._v(" "), _c("div", {
    staticClass: "total-earnings__value price small bold success--text"
  }, [_vm._v("\n                                                " + _vm._s(_vm.price(_vm.totalRoyaltiesProfit) + _vm.defaultCurrency.symbol) + "\n                                            ")])], 1), _vm._v(" "), _c(vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_4__["default"])], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      cols: "12"
    }
  }, [_c(vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__["default"], {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn() {
        return [_c("thead", [_c("tr", [_c("th", {
          staticClass: "text-left"
        }, [_vm._v("\n                                                            " + _vm._s(_vm.$t("Total Plays")) + "\n                                                        ")]), _vm._v(" "), _c("th", {
          staticClass: "text-left"
        }, [_vm._v("\n                                                            " + _vm._s(_vm.$t("Artist Royalty")) + "\n                                                        ")]), _vm._v(" "), _c("th", {
          staticClass: "text-left"
        }, [_vm._v("\n                                                            " + _vm._s(_vm.$t("Total")) + "\n                                                        ")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.artist.royalties, function (royaltyGroup, i) {
          return _c("tr", {
            key: i
          }, [_c("td", [_vm._v("\n                                                            " + _vm._s(royaltyGroup.total_royalties) + "\n                                                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                            " + _vm._s(_vm.price(royaltyGroup.price) + _vm.defaultCurrency.symbol) + "\n                                                            " + _vm._s("(" + _vm.$t("for each 100 play") + ")") + "\n                                                        ")]), _vm._v(" "), _c("td", [_c("div", {
            staticClass: "price success--text bold"
          }, [_vm._v("\n                                                                " + _vm._s(_vm.price(royaltyGroup.total_royalties * (royaltyGroup.price / 100)) + _vm.defaultCurrency.symbol) + "\n                                                            ")])])]);
        }), 0)];
      },
      proxy: true
    }])
  })], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      cols: "12",
      lg: "6"
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      cols: "12"
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__.VCardTitle, [_vm._v("\n                                            " + _vm._s(_vm.$t("Additional Pay")) + "\n                                            "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__["default"]), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__["default"]), _vm._v(" "), _c("div", {
    staticClass: "total-earnings__value price small bold success--text"
  }, [_vm._v("\n                                                " + _vm._s(_vm.totalAdditionalPay + _vm.defaultCurrency.symbol) + "\n                                            ")])], 1), _vm._v(" "), _c(vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_4__["default"])], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      cols: "6",
      sm: "6"
    }
  }, [[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    attrs: {
      label: _vm.$t("Price"),
      hint: "Important: the amount should be in cents ( 1$ = 100 )",
      type: "number"
    },
    model: {
      value: _vm.additional_pay.price,
      callback: function callback($$v) {
        _vm.$set(_vm.additional_pay, "price", $$v);
      },
      expression: "additional_pay.price"
    }
  })]], 2), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      cols: "6",
      sm: "6"
    }
  }, [[_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    attrs: {
      label: _vm.$t("Description"),
      type: "text"
    },
    model: {
      value: _vm.additional_pay.description,
      callback: function callback($$v) {
        _vm.$set(_vm.additional_pay, "description", $$v);
      },
      expression: "additional_pay.description"
    }
  })]], 2), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      cols: "12",
      sm: "12"
    }
  }, [[_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_13__["default"], {
    on: {
      click: function click($event) {
        return _vm.storeAdditionalPay();
      }
    }
  }, [_vm._v("\n                                                ADD\n                                            ")])]], 2), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      cols: "12"
    }
  }, [_c(vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__["default"], {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn() {
        return [_c("thead", [_c("tr", [_c("th", {
          staticClass: "text-left"
        }, [_vm._v("\n                                                            " + _vm._s(_vm.$t("Price")) + "\n                                                        ")]), _vm._v(" "), _c("th", {
          staticClass: "text-left"
        }, [_vm._v("\n                                                            " + _vm._s(_vm.$t("Description")) + "\n                                                        ")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.artist.additional_pay, function (additional_pay, i) {
          return _c("tr", {
            key: i
          }, [_c("td", [_c("div", {
            staticClass: "price success--text bold"
          }, [_vm._v("\n                                                                " + _vm._s(additional_pay.price / 100 + _vm.defaultCurrency.symbol) + "\n                                                            ")])]), _vm._v(" "), _c("td", [_c("div", {
            staticClass: "bold"
          }, [_vm._v("\n                                                                " + _vm._s(additional_pay.description) + "\n                                                            ")])])]);
        }), 0)];
      },
      proxy: true
    }])
  })], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      cols: "12"
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__["default"], [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__.VCardTitle, [_vm._v("\n                                " + _vm._s(_vm.$t("Previous Payouts")) + "\n                            ")]), _vm._v(" "), _vm.payedPayouts && _vm.payedPayouts.length ? _c(vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__["default"], {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn() {
        return [_c("thead", [_c("tr", [_c("th", {
          staticClass: "text-left"
        }, [_vm._v("\n                                                Payout N°\n                                            ")]), _vm._v(" "), _c("th", {
          staticClass: "text-left"
        }, [_vm._v("\n                                                Date\n                                            ")]), _vm._v(" "), _c("th", {
          staticClass: "text-left"
        }, [_vm._v("\n                                                Amount\n                                            ")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.payedPayouts, function (payout) {
          return _c("tr", {
            key: payout.id
          }, [_c("td", {
            staticClass: "text-left"
          }, [_vm._v("\n                                                " + _vm._s(payout.id) + "\n                                            ")]), _vm._v(" "), _c("td", {
            staticClass: "text-left"
          }, [_vm._v("\n                                                " + _vm._s(_vm.moment(payout.created_at).format("ll")) + "\n                                            ")]), _vm._v(" "), _c("td", {
            staticClass: "text-left bold error--text"
          }, [_vm._v("\n                                                " + _vm._s(-_vm.price(payout.amount) + _vm.defaultCurrency.symbol) + "\n                                            ")])]);
        }), 0)];
      },
      proxy: true
    }], null, false, 1689849607)
  }) : _c("div", {
    staticClass: "text-center"
  }, [_vm._v("\n                                " + _vm._s(_vm.$t("No previous payouts")) + "\n                            ")])], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      cols: "12"
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__["default"], [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__.VCardTitle, [_vm._v("\n                                " + _vm._s(_vm.$t("Summary")) + "\n                            ")]), _vm._v(" "), _c(vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__["default"], {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn() {
        return [_c("thead", [_c("tr", [_c("th", {
          staticClass: "text-center"
        }), _vm._v(" "), _c("th", {
          staticClass: "text-center"
        }), _vm._v(" "), _c("th", {
          staticClass: "text-right"
        }, [_vm._v("\n                                                " + _vm._s(_vm.$t("Account Funds")) + "\n                                            ")])])]), _vm._v(" "), _c("tbody", [_c("tr", [_c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", {
          staticClass: "text-right bold success--text"
        }, [_vm._v("\n                                                " + _vm._s(_vm.price(_vm.artist.funds) + _vm.defaultCurrency.symbol) + "\n                                            ")])])])];
      },
      proxy: true
    }])
  })], 1)], 1)], 1)], 1)], 1)], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialogs/admin/edit/Artist.vue?vue&type=template&id=4f5547ad&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialogs/admin/edit/Artist.vue?vue&type=template&id=4f5547ad& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VContainer.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/VDivider.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/VSelect.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");










var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("edit-dialog", {
    attrs: {
      loading: _vm.isLoading,
      editing: "artist"
    },
    on: {
      callToAction: _vm.saveArtist,
      cancel: _vm.closeWindow
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn() {
        return [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attrs: {
            cols: "auto"
          }
        }, [_c("upload-image", {
          attrs: {
            source: _vm.artist.avatar || _vm.defaultAvatarPath
          },
          on: {
            imageReady: function imageReady($event) {
              return _vm.imageReady($event);
            }
          }
        })], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attrs: {
            cols: "12",
            sm: "6"
          }
        }, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
          attrs: {
            label: _vm.$t("Displayname")
          },
          model: {
            value: _vm.editedArtist.displayname,
            callback: function callback($$v) {
              _vm.$set(_vm.editedArtist, "displayname", $$v);
            },
            expression: "editedArtist.displayname"
          }
        })], 1), _vm._v(" "), !_vm.editedArtist["new"] ? [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attrs: {
            cols: "12",
            sm: "6"
          }
        }, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
          attrs: {
            label: _vm.$t("Firstname")
          },
          model: {
            value: _vm.editedArtist.firstname,
            callback: function callback($$v) {
              _vm.$set(_vm.editedArtist, "firstname", $$v);
            },
            expression: "editedArtist.firstname"
          }
        })], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attrs: {
            cols: "12",
            sm: "6"
          }
        }, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
          attrs: {
            label: _vm.$t("Lastname")
          },
          model: {
            value: _vm.editedArtist.lastname,
            callback: function callback($$v) {
              _vm.$set(_vm.editedArtist, "lastname", $$v);
            },
            expression: "editedArtist.lastname"
          }
        })], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attrs: {
            cols: "12",
            sm: "6"
          }
        }, [_c(vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_4__["default"], {
          attrs: {
            label: _vm.$t("Country"),
            items: _vm.countriesList
          },
          model: {
            value: _vm.editedArtist.country,
            callback: function callback($$v) {
              _vm.$set(_vm.editedArtist, "country", $$v);
            },
            expression: "editedArtist.country"
          }
        })], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attrs: {
            cols: "12",
            sm: "6"
          }
        }, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
          attrs: {
            label: _vm.$t("Address")
          },
          model: {
            value: _vm.editedArtist.address,
            callback: function callback($$v) {
              _vm.$set(_vm.editedArtist, "address", $$v);
            },
            expression: "editedArtist.address"
          }
        })], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attrs: {
            cols: "12",
            sm: "6"
          }
        }, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
          attrs: {
            label: _vm.$t("Phone")
          },
          model: {
            value: _vm.editedArtist.phone,
            callback: function callback($$v) {
              _vm.$set(_vm.editedArtist, "phone", $$v);
            },
            expression: "editedArtist.phone"
          }
        })], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attrs: {
            cols: "12",
            sm: "6"
          }
        }, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
          attrs: {
            label: _vm.$t("Email")
          },
          model: {
            value: _vm.editedArtist.email,
            callback: function callback($$v) {
              _vm.$set(_vm.editedArtist, "email", $$v);
            },
            expression: "editedArtist.email"
          }
        })], 1)] : _vm._e()], 2)], 1)], 1), _vm._v(" "), _vm.editedArtist.user ? _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attrs: {
            cols: "12"
          }
        }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardTitle, [_vm._v("\n                                " + _vm._s(_vm.$t("Storage Space")) + "\n                            ")]), _vm._v(" "), _c(vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_7__["default"]), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardText, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attrs: {
            cols: "9"
          }
        }, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
          attrs: {
            label: _vm.$t("Size"),
            type: "number",
            messages: _vm.editedArtist.used_disk_space ? (_vm.editedArtist.used_disk_space / 1024 / 1024).toFixed(1) + " MB " + this.$t("used already.") : ""
          },
          model: {
            value: _vm.available_disk_space,
            callback: function callback($$v) {
              _vm.available_disk_space = $$v;
            },
            expression: "available_disk_space"
          }
        })], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attrs: {
            cols: "3"
          }
        }, [_c("veutify-select", {
          attrs: {
            type: "number",
            items: ["MB", "GB", "KB"]
          },
          model: {
            value: _vm.available_disk_space_unit,
            callback: function callback($$v) {
              _vm.available_disk_space_unit = $$v;
            },
            expression: "\n                                                    available_disk_space_unit\n                                                "
          }
        })], 1)], 1)], 1)], 1)], 1)], 1) : _vm._e()], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__["default"], [_c("edit-external-links", {
          attrs: {
            item: _vm.editedArtist
          },
          on: {
            spotify_link: function spotify_link($event) {
              _vm.editedArtist.spotify_link = $event;
            },
            youtube_link: function youtube_link($event) {
              _vm.editedArtist.youtube_link = $event;
            },
            soundcloud_link: function soundcloud_link($event) {
              _vm.editedArtist.soundcloud_link = $event;
            },
            itunes_link: function itunes_link($event) {
              _vm.editedArtist.itunes_link = $event;
            },
            deezer_link: function deezer_link($event) {
              _vm.editedArtist.deezer_link = $event;
            }
          }
        })], 1), _vm._v(" "), _vm.$store.getters.getSettings.saas && !_vm.editedArtist["new"] ? _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__["default"], [_c("ArtistEarningDetails", {
          attrs: {
            artist: _vm.artist
          }
        })], 1) : _vm._e()], 1)];
      },
      proxy: true
    }])
  });
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/single-items/TV.vue?vue&type=template&id=53a28649&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/single-items/TV.vue?vue&type=template&id=53a28649&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");


var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    "class": {
      "small-screen": _vm.smallScreen
    },
    attrs: {
      id: "container"
    }
  }, [_c("div", {
    attrs: {
      id: "monitor"
    }
  }, [_c("div", {
    staticClass: "small-screen__icon"
  }, [!_vm.smallScreen ? _c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      title: _vm.$t("Small Window"),
      dark: ""
    },
    on: {
      click: _vm.switchToSmallScreen
    }
  }, [_vm._v("$vuetify.icons.fullscreen-exit")]) : _c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      dark: ""
    },
    on: {
      click: _vm.switchToTVScreen
    }
  }, [_vm._v("$vuetify.icons.fullscreen")])], 1), _vm._v(" "), _c("div", {
    attrs: {
      id: "monitorscreen"
    }
  }, [_vm._t("default")], 2)])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=template&id=4f0e5cda&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=template&id=4f0e5cda& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/VChip.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/VImg.js");
/* harmony import */ var vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VProgressCircular */ "./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VSlider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VSlider */ "./node_modules/vuetify/lib/components/VSlider/VSlider.js");









var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "epico_footer-layout",
    style: {
      transform: !_vm.getUp ? "translateY(120px)" : _vm.fullScreenPlayer ? "translateY(-50px)" : "translateY(0px)",
      opacity: _vm.fullScreenPlayer ? 0.5 : 1
    },
    attrs: {
      id: "player-wrapper"
    }
  }, [_c("div", {
    staticClass: "epico_player-main-container"
  }, [_c("div", {
    staticClass: "epico_audio-info epico_audio-info-u500h"
  }, [_c("div", {
    staticClass: "plus-container"
  }, [_c("song-menu", {
    attrs: {
      item: _vm.currentAudio,
      icon: "plus",
      isOnPlayer: true,
      closeOnContentClick: true,
      disabled: _vm.currentAudio.campaign
    },
    on: {
      close: function close($event) {
        return _vm.$store.commit("setSongMenu", null);
      }
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "chevron-up-container px-3 pb-1",
    on: {
      click: function click($event) {
        _vm.fullScreenPlayer = true;
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_0__["default"], {
    staticClass: "pointer"
  }, [_vm._v("$vuetify.icons.chevron-up")])], 1), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    staticClass: "song-img transparent ml-2",
    attrs: {
      elevation: "0"
    }
  }, [_c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    staticClass: "img",
    attrs: {
      src: _vm.currentAudio.cover,
      "aspect-ratio": "1"
    },
    scopedSlots: _vm._u([{
      key: "placeholder",
      fn: function fn() {
        return [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__["default"], {
          staticClass: "fill-height ma-0",
          attrs: {
            align: "center",
            justify: "center"
          }
        }, [_c("content-placeholders", {
          staticStyle: {
            width: "100%"
          },
          attrs: {
            rounded: true
          }
        }, [_c("content-placeholders-img")], 1)], 1)];
      },
      proxy: true
    }])
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "infos"
  }, [!_vm.isCurrentAudioAStream ? _c("div", {
    staticClass: "current-info"
  }, [_vm.currentAudio.album && _vm.currentAudio.album.title !== _vm.currentAudio.title ? _c("div", {
    staticClass: "audio-album max-1-lines"
  }, [_c("router-link", {
    staticClass: "router-link",
    attrs: {
      to: {
        name: "album",
        params: {
          id: _vm.currentAudio.album.id
        }
      }
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.currentAudio.album.title) + "\n                        ")])], 1) : _vm.currentAudio.podcast ? _c("div", {
    staticClass: "audio-album max-1-lines"
  }, [_c("router-link", {
    staticClass: "router-link",
    attrs: {
      title: _vm.currentAudio.podcast.title,
      to: {
        name: "podcast",
        params: {
          id: _vm.currentAudio.podcast.id
        }
      }
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.currentAudio.podcast.title) + "\n                        ")])], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "audio-title max-1-lines",
    attrs: {
      title: _vm.currentAudio.title
    }
  }, [_c("router-link", {
    staticClass: "router-link",
    attrs: {
      title: _vm.currentAudio.title,
      to: {
        name: _vm.currentAudio.type,
        params: {
          id: _vm.currentAudio.id
        }
      }
    }
  }, [_vm._v(_vm._s(_vm.currentAudio.title))])], 1), _vm._v(" "), !_vm.isCurrentAudioAStream ? _c("div", {
    staticClass: "audio-artists max-1-lines"
  }, [_c("artists", {
    attrs: {
      artists: _vm.currentAudio.artists
    }
  })], 1) : _vm._e()]) : _c("div", {
    staticClass: "current-info"
  }, [_c("div", {
    staticClass: "now-playing"
  }, [_vm.isLoading ? [_vm._v("\n                            " + _vm._s(_vm.$t("Loading")) + "...\n                        ")] : _vm._e(), _vm._v(" "), !_vm.isLoading && _vm.currentAudio.title ? [_vm._v("\n                            " + _vm._s(_vm.$t("Now Playing")) + "\n                        ")] : _vm._e()], 2), _vm._v(" "), _c("div", {
    staticClass: "live-stream-title-container"
  }, [_c("div", {
    staticClass: "hiding-box-left"
  }), _vm._v(" "), _c("div", {
    staticClass: "live-stream-title",
    "class": {
      slideAnimation: _vm.currentAudio.title && _vm.currentAudio.title.length > 25
    },
    attrs: {
      id: "live-stream-title"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.currentAudio.title || _vm.currentAudio.name) + "\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "hiding-box-right"
  })]), _vm._v(" "), _vm.currentAudio.artist ? _c("div", {
    staticClass: "audio-artists max-1-lines"
  }, [_vm._v("\n                        " + _vm._s(_vm.currentAudio.artist) + "\n                    ")]) : _vm._e()]), _vm._v(" "), !_vm.isCurrentAudioAStream && !_vm.$store.getters.getSettings.disableRegistration && _vm.currentAudio.type !== "episode" && !_vm.currentAudio.campaign ? [_vm.isLiked ? _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    staticClass: "align-center ml-2",
    attrs: {
      icon: "",
      small: ""
    },
    on: {
      click: function click($event) {
        return _vm.$emit("like", _vm.currentAudio);
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      small: "",
      color: "primary",
      title: _vm.$t("Dislike")
    }
  }, [_vm._v("$vuetify.icons.heart")])], 1) : _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    staticClass: "align-center ml-2",
    attrs: {
      icon: "",
      small: ""
    },
    on: {
      click: function click($event) {
        return _vm.$emit("like", _vm.currentAudio);
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      title: _vm.$t("Like"),
      small: ""
    }
  }, [_vm._v("$vuetify.icons.heart-outline")])], 1)] : _vm._e()], 2)], 1), _vm._v(" "), _c("div", {
    staticClass: "epico_main-control-section"
  }, [_c("div", {
    staticClass: "epico_progressbar-container"
  }, [!_vm.isCurrentAudioAStream ? _c("div", {
    staticClass: "epico_progressbar epico_progressbar-u500h",
    attrs: {
      id: "progress-bar"
    },
    on: {
      click: function click($event) {
        !_vm.currentAudio.campaign ? _vm.$emit("updateProgress", $event) : "";
      }
    }
  }, [_c("div", {
    staticClass: "epico_progressbar-inner",
    style: {
      width: _vm.currentAudio.progress + "%"
    }
  }, [_c("span", {
    staticClass: "epico_progress-circle"
  })])]) : _c("div", {
    staticClass: "epico_progressbar epico_progressbar-u500h",
    attrs: {
      id: "progress-bar"
    },
    on: {
      click: function click($event) {
        return _vm.$emit("updateProgress", $event);
      }
    }
  }, [_c("div", {
    staticClass: "epico_progressbar-inner",
    style: {
      width: "100%"
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "epico_loading-circle",
    staticStyle: {
      opacity: "0"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "times"
  }, [_c("span", {
    staticClass: "current-audio-time"
  }, [_vm._v("\n                        " + _vm._s(_vm.currentAudio.currentTime) + "\n                    ")]), _vm._v(" "), !_vm.isCurrentAudioAStream ? _c("span", {
    staticClass: "current-audio-duration",
    domProps: {
      textContent: _vm._s(_vm.duration)
    }
  }) : _c("div", {
    staticClass: "live-animation"
  }, [_c("div", {
    staticClass: "align-center"
  }, [_c("svg", {
    staticClass: "blinking",
    attrs: {
      height: "20",
      width: "13"
    }
  }, [_c("circle", {
    attrs: {
      cx: "5",
      cy: "10",
      r: "3",
      fill: "red"
    }
  })]), _vm._v("\n                            " + _vm._s(_vm.$t("Live")) + "\n                        ")])])])]), _vm._v(" "), _c("div", {
    staticClass: "play-next-previous-container"
  }, [!_vm.isCurrentAudioAStream ? [!_vm.isPodcastEpisode ? _c("button", {
    staticClass: "repeat-button",
    "class": {
      activeButton: _vm.buttons.loop
    },
    attrs: {
      disabled: _vm.currentAudio.campaign || _vm.currentAudio.campaign,
      title: _vm.$t("Loop")
    },
    on: {
      click: function click($event) {
        return _vm.$emit("loopAudio");
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      color: _vm.buttons.loop ? "primary" : "textContMedium"
    }
  }, [_vm._v("$vuetify.icons.refresh")])], 1) : _c("button", {
    staticClass: "random-button",
    "class": {
      activeButton: _vm.buttons.shuffle
    },
    attrs: {
      disabled: _vm.playlist.length <= 1 || _vm.currentAudio.campaign,
      title: _vm.$t("Shuffle")
    },
    on: {
      click: function click($event) {
        return _vm.$emit("shuffleAudio");
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      size: 20,
      color: _vm.buttons.shuffle ? "primary" : "textContMedium"
    }
  }, [_vm._v("$vuetify.icons.shuffle-variant")])], 1), _vm._v(" "), !_vm.isPodcastEpisode ? _c("button", {
    staticClass: "previous-button",
    attrs: {
      title: _vm.$t("Previous"),
      disabled: !_vm.playlist[_vm.currentAudio.index - 1] || _vm.currentAudio.campaign
    },
    on: {
      click: function click($event) {
        return _vm.$emit("goPrevious");
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      color: "textContMedium"
    }
  }, [_vm._v("$vuetify.icons.skip-previous")])], 1) : _c("button", {
    staticClass: "epico_previous-button epico_rewind-button",
    attrs: {
      title: _vm.$t("Rewind"),
      disabled: _vm.currentAudio.campaign
    },
    on: {
      click: function click($event) {
        return _vm.$emit("rewindAudio", -10);
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      color: "textContMedium"
    }
  }, [_vm._v("$vuetify.icons.rewind-10")])], 1)] : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "play-button-container"
  }, [_vm.isLoading ? [_c("div", {
    staticClass: "progress-circl"
  }, [_c(vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_5__["default"], {
    staticClass: "loading-circle-e",
    attrs: {
      size: 39,
      width: 5,
      color: "primary",
      indeterminate: ""
    }
  })], 1)] : [!_vm.currentAudio.isPlaying && !_vm.currentAudio.campaign ? _c("button", {
    staticClass: "play-button",
    attrs: {
      disabled: _vm.currentAudio.campaign,
      title: _vm.$t("Play") + "/" + _vm.$t("Pause")
    },
    on: {
      click: function click($event) {
        return _vm.$emit("playPause");
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      size: "54",
      large: "",
      color: _vm.$vuetify.theme.dark ? "textContMedium" : "primary"
    }
  }, [_vm._v("$vuetify.icons.play-circle")])], 1) : _c("button", {
    staticClass: "play-button",
    on: {
      click: function click($event) {
        return _vm.$emit("playPause");
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      size: "54",
      large: "",
      color: _vm.$vuetify.theme.dark ? "textContMedium" : "primary"
    }
  }, [_vm._v("$vuetify.icons.pause-circle")])], 1)]], 2), _vm._v(" "), !_vm.isCurrentAudioAStream ? [!_vm.isPodcastEpisode ? _c("button", {
    staticClass: "next-button",
    attrs: {
      title: _vm.$t("Next"),
      disabled: !_vm.playlist[_vm.currentAudio.index + 1] || _vm.currentAudio.campaign
    },
    on: {
      click: function click($event) {
        return _vm.$emit("goNext");
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      color: "textContMedium"
    }
  }, [_vm._v("$vuetify.icons.skip-next")])], 1) : _c("button", {
    staticClass: "epico_next-button epico_forwrad-button",
    attrs: {
      disabled: _vm.currentAudio.campaign,
      title: _vm.$t("Rewind")
    },
    on: {
      click: function click($event) {
        return _vm.$emit("rewindAudio", +30);
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      color: "textContMedium"
    }
  }, [_vm._v("$vuetify.icons.fast-forward-30")])], 1), _vm._v(" "), !_vm.isPodcastEpisode ? _c("button", {
    staticClass: "random-button",
    "class": {
      activeButton: _vm.buttons.shuffle
    },
    attrs: {
      disabled: _vm.playlist.length <= 1 || _vm.currentAudio.campaign
    },
    on: {
      click: function click($event) {
        return _vm.$emit("shuffleAudio");
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      title: _vm.$t("Shuffle"),
      size: "20",
      color: _vm.buttons.shuffle ? "primary" : "textContMedium"
    }
  }, [_vm._v("$vuetify.icons.shuffle-variant")])], 1) : _c("button", {
    staticClass: "playback_rate__button",
    attrs: {
      title: _vm.$t("Play Speed"),
      disabled: _vm.currentAudio.campaign
    },
    on: {
      click: function click($event) {
        return _vm.$emit("adjustPlayspeed");
      }
    }
  }, [_c("span", {
    staticClass: "playback_rate",
    attrs: {
      color: _vm.playbackRate > 1 ? "primary" : "textContMedium"
    }
  }, [_vm._v(_vm._s(_vm.playbackRate) + "x")])])] : _vm._e()], 2)]), _vm._v(" "), _c("div", {
    staticClass: "epico_option-section epico_option-section-u500h"
  }, [_c("div", {
    staticClass: "epico_option-section__group"
  }, [_c("div", {
    staticClass: "btn-group d-flex align-center"
  }, [_vm.isOwned && _vm.currentAudio.isProduct ? _c("div", {
    staticClass: "owned-icon"
  }, [_c("div", {
    staticClass: "premium",
    attrs: {
      title: _vm.$t("Premium")
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      color: "#FFA500"
    }
  }, [_vm._v("$vuetify.icons.crown")])], 1)]) : _vm.isPurchasable ? _c("div", {
    staticClass: "purchase-button"
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    staticClass: "mr-2",
    attrs: {
      "x-small": "",
      title: _vm.$t("Purchase"),
      color: "#FF8F00",
      dark: "",
      fab: "",
      dense: ""
    },
    on: {
      click: function click($event) {
        return _vm.$emit("showPurchaseDialog");
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_0__["default"], [_vm._v("$vuetify.icons.cart")])], 1)], 1) : _vm._e(), _vm._v(" "), _vm.isCurrentAudioAFileAudio && _vm.currentAudio.origin === "local" && !_vm.$store.getters.getSettings.hideDownloadButton ? _c("div", {
    staticClass: "download-button"
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    staticClass: "mr-2",
    attrs: {
      "x-small": "",
      title: _vm.$t("Download"),
      color: "primary",
      disabled: _vm.downloadLoading,
      fab: "",
      loading: _vm.downloadLoading,
      dense: ""
    },
    on: {
      click: function click($event) {
        return _vm.$emit("downloadAudio");
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_0__["default"], [_vm._v("$vuetify.icons.download-circle")])], 1)], 1) : _vm._e(), _vm._v(" "), _vm.playlist.length > 1 ? _c(vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__["default"], {
    staticClass: "ma-2",
    attrs: {
      outlined: "",
      small: ""
    },
    on: {
      click: function click($event) {
        _vm.showPlaylist = !_vm.showPlaylist;
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      left: "",
      color: "textContMedium"
    }
  }, [_vm._v("$vuetify.icons.playlist-play")]), _vm._v(" "), _vm.$store.getters.getScreenWidth > 900 ? _c("span", [_vm._v(_vm._s(_vm.$t("Queue")))]) : _vm._e(), _vm._v(" "), _c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_0__["default"], {
    style: {
      transform: _vm.showPlaylist ? "rotate(0deg)" : "rotate(180deg)"
    }
  }, [_vm._v("$vuetify.icons.chevron-up")])], 1) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "epico_volume-button-container"
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attrs: {
      icon: "",
      small: ""
    },
    on: {
      click: function click($event) {
        return _vm.$emit("mute", $event);
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      color: "textContMedium"
    }
  }, [_vm._v("$vuetify.icons." + _vm._s(_vm.volumeButton))])], 1), _vm._v(" "), _c("div", {
    staticClass: "epico_volumebar-container epico_volumebar-container-u500h"
  }, [_c(vuetify_lib_components_VSlider__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      "thumb-color": "primary",
      "tick-size": "50",
      disabled: _vm.currentAudio.campaign,
      "thumb-size": "22",
      "hide-details": "",
      "thumb-label": true
    },
    on: {
      change: function change($event) {
        return _vm.$emit("volume", _vm.vol);
      }
    },
    model: {
      value: _vm.vol,
      callback: function callback($$v) {
        _vm.vol = $$v;
      },
      expression: "vol"
    }
  })], 1)], 1)]), _vm._v(" "), _c("div", {
    staticClass: "epico_play-circle-phone-layout"
  }, [!_vm.currentAudio.isPlaying ? _c("button", {
    staticClass: "play-button",
    attrs: {
      title: _vm.$t("Play") + "/" + _vm.$t("Pause")
    },
    on: {
      click: function click($event) {
        return _vm.$emit("playPause");
      }
    }
  }, [_c(vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_5__["default"], {
    staticClass: "progress-circle",
    attrs: {
      rotate: -90,
      size: 36,
      width: 5,
      value: _vm.isCurrentAudioAStream ? 100 : _vm.currentAudio.progress,
      color: "primary"
    }
  }), _vm._v(" "), _c("div", [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      size: "50",
      large: "",
      color: _vm.$vuetify.theme.dark ? "textContMedium" : "primary"
    }
  }, [_vm._v("$vuetify.icons.play-circle")])], 1)], 1) : _c("button", {
    staticClass: "play-button",
    on: {
      click: function click($event) {
        return _vm.$emit("playPause");
      }
    }
  }, [_c(vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_5__["default"], {
    staticClass: "progress-circle",
    attrs: {
      rotate: -90,
      size: 36,
      width: 5,
      value: _vm.isCurrentAudioAStream ? 100 : _vm.currentAudio.progress,
      color: "primary"
    }
  }), _vm._v(" "), _c("div", [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      size: "50",
      large: "",
      color: _vm.$vuetify.theme.dark ? "textContMedium" : "primary"
    }
  }, [_vm._v("$vuetify.icons.pause-circle")])], 1)], 1)])]), _vm._v(" "), _vm.playlist.length > 1 ? _c("div", {
    staticClass: "epico_playlist-container"
  }, [_c("div", {
    staticClass: "epico_playlist-ul-wrapper",
    style: {
      transform: _vm.showPlaylist ? "translateY(0em)" : "translateY(100%) "
    }
  }, [_c("ul", {
    staticClass: "epico_playlist-ul"
  }, _vm._l(_vm.playlist, function (audio, i) {
    return _c("li", {
      key: i,
      staticClass: "epico_playlist-audio",
      "class": {
        "active-Song": _vm.currentAudio.index == i
      },
      on: {
        click: function click($event) {
          return _vm.$emit("updateCurrentAudio", [i, true]);
        }
      }
    }, [_c("div", {
      staticClass: "audio-cover"
    }, [_c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_2__["default"], {
      staticClass: "img",
      attrs: {
        src: audio.cover
      },
      scopedSlots: _vm._u([{
        key: "placeholder",
        fn: function fn() {
          return [_c("div", {
            staticClass: "fill-height"
          }, [_c("content-placeholders", {
            attrs: {
              rounded: true
            }
          }, [_c("content-placeholders-img")], 1)], 1)];
        },
        proxy: true
      }], null, true)
    }, [_vm._v(" "), _vm.$store.getters.isCurrentlyPlaying(audio) ? _c("div", {
      staticClass: "dark-layer absolute fill justify-align-center"
    }, [_c("div", {
      staticClass: "epico_music-is-playing-container white-bars"
    }, [_c("span"), _vm._v(" "), _c("span"), _vm._v(" "), _c("span")])]) : _vm._e()])], 1), _vm._v(" "), _c("div", {
      staticClass: "audio-title max-1-lines"
    }, [_vm._v("\n                        " + _vm._s(audio.title) + "\n                    ")]), _vm._v(" "), _c("div", {
      staticClass: "audio-artist max-1-lines",
      on: {
        click: function click($event) {
          $event.preventDefault();
        }
      }
    }, [_c("artists", {
      attrs: {
        artists: audio.artists
      }
    })], 1)]);
  }), 0)])]) : _vm._e()]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/Index.vue?vue&type=template&id=50c4b64e&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/Index.vue?vue&type=template&id=50c4b64e& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    attrs: {
      id: "audio-player-container"
    }
  }, [_vm.$store.getters.getSettings.allowVideos ? _c("TV", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentAudio.source_format === "yt_video" && !_vm.$store.getters.getSettings.disableVideo && (_vm.fullScreenPlayer ? _vm.fullScreenPlayer && !_vm.playlistShownOnMobile : true),
      expression: "\n      currentAudio.source_format === 'yt_video' &&\n      !$store.getters.getSettings.disableVideo &&\n      (fullScreenPlayer ? fullScreenPlayer && !playlistShownOnMobile : true)\n    "
    }],
    staticClass: "video-tv",
    "class": {
      "small-screen": _vm.smallScreen || _vm.fullScreenPlayer,
      "phone-layout": _vm.fullScreenPlayer
    },
    on: {
      "small-screen": _vm.switchScreenToSmall,
      "large-screen": _vm.switchScreenToLarge
    }
  }, [_c("div", {
    "class": {
      smallScreenVideo: _vm.smallScreen
    },
    attrs: {
      id: "youtube_video_container"
    }
  })]) : _vm._e(), _vm._v(" "), _c("phone-player-layout", {
    style: {
      transform: "translateY(" + (_vm.fullScreenPlayer ? "0%" : "100%") + ")"
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
      isOwned: _vm.isOwned
    },
    on: {
      updateCurrentAudio: function updateCurrentAudio($event) {
        return _vm.updateCurrentAudio($event[0], $event[1]);
      },
      playPause: _vm.playPause,
      adjustPlayspeed: _vm.adjustPlayspeed,
      rewindAudio: function rewindAudio($event) {
        return _vm.rewindAudio($event);
      },
      fullScreenPlayer: function fullScreenPlayer($event) {
        _vm.fullScreenPlayer = false;
      },
      goNext: _vm.goNext,
      goPrevious: _vm.goPrevious,
      like: _vm.like,
      showPlaylist: function showPlaylist($event) {
        _vm.playlistShownOnMobile = $event;
      },
      mute: _vm.muteAudio,
      downloadAudio: _vm.downloadAudio,
      showPurchaseDialog: _vm.purchase,
      addSongToPlaylist: _vm.addSongToPlaylist,
      updateProgressOnPhone: _vm.updateProgressOnPhone,
      loopAudio: _vm.loopAudio,
      shuffleAudio: _vm.shuffleAudio
    }
  }), _vm._v(" "), _c("footer-player-layout", {
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
      isOwned: _vm.isOwned
    },
    on: {
      volume: function volume($event) {
        _vm.volume = $event;
      },
      mute: _vm.muteAudio,
      fullScreenPlayer: function fullScreenPlayer($event) {
        _vm.fullScreenPlayer = true;
      },
      updateCurrentAudio: function updateCurrentAudio($event) {
        return _vm.updateCurrentAudio($event[0], $event[1]);
      },
      downloadAudio: _vm.downloadAudio,
      showPurchaseDialog: _vm.purchase,
      playPause: _vm.playPause,
      adjustPlayspeed: _vm.adjustPlayspeed,
      rewindAudio: function rewindAudio($event) {
        return _vm.rewindAudio($event);
      },
      goNext: _vm.goNext,
      goPrevious: _vm.goPrevious,
      like: _vm.like,
      addSongToPlaylist: _vm.addSongToPlaylist,
      updateProgress: _vm.updateProgress,
      loopAudio: _vm.loopAudio,
      shuffleAudio: _vm.shuffleAudio
    }
  })], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=template&id=1c4cddf5&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=template&id=1c4cddf5& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/VChip.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/VImg.js");
/* harmony import */ var vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VProgressCircular */ "./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");







var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "small-screen-player"
  }, [_c("div", {
    staticClass: "epico_phone-layout-full"
  }, [_c("div", {
    staticClass: "epico_player-container"
  }, [_c("div", {
    staticClass: "epico_playlist-container"
  }, [_c("ul", {
    staticClass: "epico_playlist-ul",
    style: {
      maxHeight: _vm.showPlaylist ? "45vh" : "0px"
    }
  }, _vm._l(_vm.playlist, function (audio, i) {
    return _c("li", {
      key: i,
      staticClass: "epico_playlist-audio",
      "class": {
        "active-Song": _vm.currentAudio.index == i
      },
      on: {
        click: function click($event) {
          return _vm.$emit("updateCurrentAudio", [i, true]);
        }
      }
    }, [_c("div", {
      staticClass: "audio-cover"
    }, [_c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_0__["default"], {
      staticClass: "img",
      attrs: {
        src: audio.cover,
        width: "50",
        height: "50"
      },
      scopedSlots: _vm._u([{
        key: "placeholder",
        fn: function fn() {
          return [_c("div", {
            staticClass: "fill-height"
          }, [_c("content-placeholders", {
            attrs: {
              rounded: true
            }
          }, [_c("content-placeholders-img")], 1)], 1)];
        },
        proxy: true
      }], null, true)
    }, [_vm._v(" "), _vm.$store.getters.isCurrentlyPlaying(audio) ? _c("div", {
      staticClass: "dark-layer absolute fill justify-align-center"
    }, [_c("div", {
      staticClass: "epico_music-is-playing-container white-bars"
    }, [_c("span"), _vm._v(" "), _c("span"), _vm._v(" "), _c("span")])]) : _vm._e()])], 1), _vm._v(" "), _c("div", {
      staticClass: "audio-title text-center max-1-lines"
    }, [_vm._v("\n                            " + _vm._s(audio.title) + "\n                        ")]), _vm._v(" "), _c("div", {
      staticClass: "audio-artist max-1-lines",
      on: {
        click: function click($event) {
          $event.preventDefault();
        }
      }
    }, [_c("artists", {
      attrs: {
        artists: audio.artists
      }
    })], 1)]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "epico_playlist-text-container px-3"
  }, [_c("button", {
    staticClass: "epico_chevron-down",
    on: {
      click: function click($event) {
        _vm.fullScreenPlayer = false;
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      large: ""
    }
  }, [_vm._v("$vuetify.icons.chevron-down")])], 1), _vm._v(" "), _vm.hasPermission("Download songs") && _vm.currentAudio.source_format === "file" && !_vm.$store.getters.getSettings.hideDownloadButton ? _c("div", {
    staticClass: "download-button"
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    staticClass: "mr-2",
    attrs: {
      "x-small": "",
      title: _vm.$t("Download"),
      color: "primary",
      disabled: _vm.downloadLoading,
      fab: "",
      loading: _vm.downloadLoading,
      dense: ""
    },
    on: {
      click: function click($event) {
        return _vm.$emit("downloadAudio");
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_1__["default"], [_vm._v("$vuetify.icons.download-circle")])], 1)], 1) : _vm._e(), _vm._v(" "), _vm.isOwned && _vm.currentAudio.isProduct ? _c("div", {
    staticClass: "owned-icon"
  }, [_c("div", {
    staticClass: "premium",
    attrs: {
      title: _vm.$t("Premium")
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      color: "#FFA500"
    }
  }, [_vm._v("$vuetify.icons.crown")])], 1)]) : _vm.isPurchasable ? _c("div", {
    staticClass: "purchase-button"
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    staticClass: "mr-2",
    attrs: {
      "x-small": "",
      title: _vm.$t("Purchase"),
      color: "#FF8F00",
      dark: "",
      fab: "",
      dense: ""
    },
    on: {
      click: function click($event) {
        return _vm.$emit("showPurchaseDialog");
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_1__["default"], [_vm._v("$vuetify.icons.cart")])], 1)], 1) : _vm._e(), _vm._v(" "), _vm.playlist.length > 1 ? _c(vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_3__["default"], {
    staticClass: "ma-2",
    attrs: {
      outlined: ""
    },
    on: {
      click: function click($event) {
        _vm.showPlaylist = !_vm.showPlaylist;

        _vm.$emit("showPlaylist", _vm.showPlaylist);
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      left: "",
      color: "textContMedium"
    }
  }, [_vm._v("$vuetify.icons.playlist-music")]), _vm._v("\n                        " + _vm._s(_vm.$t("Queue")) + "\n                        "), _c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      transform: _vm.showPlaylist ? "rotate(0deg)" : "rotate(180deg)"
    },
    attrs: {
      color: "textContMedium"
    }
  }, [_vm._v("$vuetify.icons.chevron-up")])], 1) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "epico_player-main-container"
  }, [_c("div", {
    staticClass: "epico_image-section",
    style: {
      opacity: _vm.currentAudio.source_format === "yt_video" && !_vm.$store.getters.getSettings.disableVideo ? 0 : 1
    }
  }, [_c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_0__["default"], {
    staticClass: "img",
    attrs: {
      src: _vm.currentAudio.cover,
      "aspect-ratio": "1"
    },
    scopedSlots: _vm._u([{
      key: "placeholder",
      fn: function fn() {
        return [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
          staticClass: "fill-height ma-0",
          attrs: {
            align: "center",
            justify: "center"
          }
        }, [_c("content-placeholders", {
          staticStyle: {
            width: "100%"
          },
          attrs: {
            rounded: true
          }
        }, [_c("content-placeholders-img")], 1)], 1)];
      },
      proxy: true
    }])
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "epico_details-section"
  }, [!_vm.isCurrentAudioAStream ? _c("div", {
    staticClass: "epico_audio-info"
  }, [_vm.currentAudio.album && _vm.currentAudio.album.title !== _vm.currentAudio.title ? _c("div", {
    staticClass: "audio-album max-1-lines"
  }, [_c("router-link", {
    staticClass: "router-link",
    attrs: {
      to: {
        name: "album",
        params: {
          id: _vm.currentAudio.album.id
        }
      }
    }
  }, [_vm._v("\n                                " + _vm._s(_vm.currentAudio.album.title) + "\n                            ")])], 1) : _vm.currentAudio.podcast ? _c("div", {
    staticClass: "audio-album max-1-lines"
  }, [_c("router-link", {
    staticClass: "router-link",
    attrs: {
      title: _vm.currentAudio.podcast.title,
      to: {
        name: "podcast",
        params: {
          id: _vm.currentAudio.podcast.id
        }
      }
    }
  }, [_vm._v("\n                                " + _vm._s(_vm.currentAudio.podcast.title) + "\n                            ")])], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "epico_audio-title",
    on: {
      click: function click($event) {
        return _vm.$emit("fullScreenPlayer");
      }
    }
  }, [!_vm.isPodcastEpisode ? _c("router-link", {
    staticClass: "router-link",
    attrs: {
      to: {
        name: "song",
        params: {
          id: _vm.currentAudio.id
        }
      }
    }
  }, [_vm._v(_vm._s(_vm.currentAudio.title))]) : [_vm._v(_vm._s(_vm.currentAudio.title))]], 2), _vm._v(" "), !_vm.isCurrentAudioAStream ? _c("div", {
    staticClass: "audio-artists max-1-lines"
  }, [_c("artists", {
    attrs: {
      artists: _vm.currentAudio.artists
    }
  })], 1) : _vm._e()]) : _c("div", {
    staticClass: "epico_audio-info"
  }, [_c("div", {
    staticClass: "now-playing"
  }, [_vm.isLoading ? [_vm._v("\n                                " + _vm._s(_vm.$t("Loading")) + "...\n                            ")] : _vm._e(), _vm._v(" "), !_vm.isLoading && _vm.currentAudio.title ? [_vm._v("\n                                " + _vm._s(_vm.$t("Now Playing")) + "\n                            ")] : _vm._e()], 2), _vm._v(" "), _c("div", {
    staticClass: "live-stream-title-container"
  }, [_c("div", {
    staticClass: "hiding-box-left"
  }), _vm._v(" "), _c("div", {
    staticClass: "live-stream-title no-wrap",
    "class": {
      slideAnimation: _vm.currentAudio.title && _vm.currentAudio.title.length > 25
    },
    attrs: {
      id: "live-stream-title"
    }
  }, [_vm._v("\n                                " + _vm._s(_vm.currentAudio.title || _vm.currentAudio.name) + "\n                            ")]), _vm._v(" "), _c("div", {
    staticClass: "hiding-box-right"
  })]), _vm._v(" "), _vm.currentAudio.artist ? _c("p", {
    staticClass: "epico_audio-artist"
  }, [_vm._v("\n                            " + _vm._s(_vm.currentAudio.artist) + "\n                        ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "epico_control-section"
  }, [_c("div", {
    staticClass: "epico_progressbar-container"
  }, [!_vm.isCurrentAudioAStream ? _c("div", {
    staticClass: "epico_progressbar",
    attrs: {
      id: "progress-bar_phone_layout"
    },
    on: {
      click: function click($event) {
        return _vm.$emit("updateProgressOnPhone", $event);
      }
    }
  }, [_c("div", {
    staticClass: "epico_progressbar-inner",
    style: {
      width: _vm.currentAudio.progress + "%"
    }
  }, [_c("span", {
    staticClass: "epico_progress-circle"
  })])]) : _c("div", {
    staticClass: "epico_progressbar",
    attrs: {
      id: "progress-bar_phone_layout"
    },
    on: {
      click: function click($event) {
        return _vm.$emit("updateProgressOnPhone", $event);
      }
    }
  }, [_c("div", {
    staticClass: "epico_progressbar-inner",
    style: {
      width: "100%"
    }
  }, [_c("span", {
    staticClass: "epico_progress-circle"
  })])]), _vm._v(" "), _c("span", {
    staticClass: "epico_loading-circle"
  }), _vm._v(" "), _c("span", {
    staticClass: "epico_current-audio-time"
  }, [_vm._v(_vm._s(_vm.currentAudio.currentTime))]), _vm._v(" "), !_vm.isCurrentAudioAStream ? _c("span", {
    staticClass: "epico_current-audio-duration",
    domProps: {
      textContent: _vm._s(_vm.duration)
    }
  }) : _c("span", {
    staticClass: "live-animation epico_current-audio-duration"
  }, [_c("div", {
    staticClass: "align-center"
  }, [_c("svg", {
    staticClass: "blinking",
    attrs: {
      height: "20",
      width: "13"
    }
  }, [_c("circle", {
    attrs: {
      cx: "5",
      cy: "10",
      r: "3",
      fill: "red"
    }
  })]), _vm._v("\n                                    " + _vm._s(_vm.$t("Live")) + "\n                                ")])])]), _vm._v(" "), _c("div", {
    staticClass: "epico_main-control-section"
  }, [_c("div", {
    staticClass: "epico_play-next-previous-container"
  }, [!_vm.isPodcastEpisode && !_vm.isCurrentAudioAStream ? _c("button", {
    staticClass: "epico_previous-button",
    attrs: {
      disabled: !_vm.playlist[_vm.currentAudio.index - 1] || _vm.currentAudio.campaign,
      title: _vm.$t("Previous")
    },
    on: {
      click: function click($event) {
        return _vm.$emit("goPrevious");
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      color: "textContMedium"
    }
  }, [_vm._v("$vuetify.icons.skip-previous")])], 1) : _vm.isPodcastEpisode ? _c("button", {
    staticClass: "epico_previous-button epico_rewind-button",
    attrs: {
      disabled: _vm.currentAudio.campaign,
      title: _vm.$t("Rewind")
    },
    on: {
      click: function click($event) {
        return _vm.$emit("rewindAudio", -10);
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      color: "textContMedium"
    }
  }, [_vm._v("$vuetify.icons.rewind-10")])], 1) : _vm._e(), _vm._v(" "), _c("button", {
    staticClass: "epico_btn epico_play-button epico_no-border",
    attrs: {
      disabled: _vm.currentAudio.campaign
    }
  }, [_vm.isLoading ? [_vm.isLoading ? _c(vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_5__["default"], {
    attrs: {
      size: 60,
      width: 5,
      color: "primary",
      indeterminate: ""
    }
  }) : _vm._e()] : [!_vm.currentAudio.isPlaying && !_vm.currentAudio.campaign ? _c("button", {
    staticClass: "play-button",
    attrs: {
      title: _vm.$t("Play"),
      disabled: _vm.currentAudio.campaign
    },
    on: {
      click: function click($event) {
        return _vm.$emit("playPause");
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      size: "60",
      color: _vm.$vuetify.theme.dark ? "textContMedium" : "primary"
    }
  }, [_vm._v("$vuetify.icons.play-circle")])], 1) : _c("button", {
    staticClass: "play-button",
    attrs: {
      title: _vm.$t("Pause"),
      disabled: _vm.currentAudio.campaign
    },
    on: {
      click: function click($event) {
        return _vm.$emit("playPause");
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      size: "60",
      color: _vm.$vuetify.theme.dark ? "textContMedium" : "primary"
    }
  }, [_vm._v("$vuetify.icons.pause-circle")])], 1)]], 2), _vm._v(" "), !_vm.isPodcastEpisode && !_vm.isCurrentAudioAStream ? _c("button", {
    staticClass: "epico_next-button",
    attrs: {
      disabled: !_vm.playlist[_vm.currentAudio.index + 1] || _vm.currentAudio.campaign,
      title: _vm.$t("Next")
    },
    on: {
      click: function click($event) {
        return _vm.$emit("goNext");
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      color: "textContMedium"
    }
  }, [_vm._v("$vuetify.icons.skip-next")])], 1) : _vm.isPodcastEpisode ? _c("button", {
    staticClass: "epico_next-button epico_forwrad-button",
    attrs: {
      title: _vm.$t("Rewind")
    },
    on: {
      click: function click($event) {
        return _vm.$emit("rewindAudio", +30);
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      color: "textContMedium"
    }
  }, [_vm._v("$vuetify.icons.fast-forward-30")])], 1) : _vm._e()])])]), _vm._v(" "), _c("div", {
    staticClass: "epico_option-section"
  }, [_c("div", {
    staticClass: "plus-container"
  }, [_c("song-menu", {
    attrs: {
      item: _vm.currentAudio,
      icon: "plus",
      disabled: _vm.currentAudio.campaign,
      isOnPlayer: true,
      closeOnContentClick: true
    },
    on: {
      close: function close($event) {
        return _vm.$store.commit("setSongMenu", null);
      }
    }
  })], 1), _vm._v(" "), !_vm.isPodcastEpisode && !_vm.isCurrentAudioAStream & !_vm.currentAudio.campaign ? _c("button", {
    staticClass: "epico_shuffle-button"
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      title: _vm.$t("Shuffle"),
      disabled: _vm.currentAudio.campaign,
      color: _vm.buttons.shuffle ? "primary" : "textContMedium"
    },
    on: {
      click: function click($event) {
        return _vm.$emit("shuffleAudio");
      }
    }
  }, [_vm._v("$vuetify.icons.shuffle-variant")])], 1) : _vm._e(), _vm._v(" "), !_vm.isCurrentAudioAStream && !_vm.$store.getters.getSettings.disableRegistration && _vm.currentAudio.type !== "episode" ? [_vm.isLiked ? _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    staticClass: "align-center",
    attrs: {
      icon: "",
      small: ""
    },
    on: {
      click: function click($event) {
        return _vm.$emit("like", _vm.currentAudio);
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      color: "primary",
      title: _vm.$t("Dislike")
    }
  }, [_vm._v("$vuetify.icons.heart")])], 1) : _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    staticClass: "align-center",
    attrs: {
      icon: "",
      small: ""
    },
    on: {
      click: function click($event) {
        return _vm.$emit("like", _vm.currentAudio);
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      title: _vm.$t("Like")
    }
  }, [_vm._v("$vuetify.icons.heart-outline")])], 1)] : _vm._e(), _vm._v(" "), !_vm.isPodcastEpisode && !_vm.isCurrentAudioAStream ? _c("button", {
    staticClass: "epico_repeat-button",
    attrs: {
      disabled: _vm.currentAudio.campaign
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      color: _vm.buttons.loop ? "primary" : "textContMedium",
      title: _vm.$t("Loop")
    },
    on: {
      click: function click($event) {
        return _vm.$emit("loopAudio");
      }
    }
  }, [_vm._v("$vuetify.icons.refresh")])], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "epico_volume-button-container"
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attrs: {
      icon: "",
      disabled: _vm.currentAudio.campaign,
      small: ""
    },
    on: {
      click: function click($event) {
        return _vm.$emit("mute", $event);
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      color: "textContMedium"
    }
  }, [_vm._v("$vuetify.icons." + _vm._s(_vm.volumeButton))])], 1)], 1)], 2)])])])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/artist/EarningDetails.vue?vue&type=template&id=5d46bc85&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/artist/EarningDetails.vue?vue&type=template&id=5d46bc85& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EarningDetails_vue_vue_type_template_id_5d46bc85___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EarningDetails_vue_vue_type_template_id_5d46bc85___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EarningDetails_vue_vue_type_template_id_5d46bc85___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EarningDetails.vue?vue&type=template&id=5d46bc85& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/artist/EarningDetails.vue?vue&type=template&id=5d46bc85&");


/***/ }),

/***/ "./resources/js/components/dialogs/admin/edit/Artist.vue?vue&type=template&id=4f5547ad&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/dialogs/admin/edit/Artist.vue?vue&type=template&id=4f5547ad& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Artist_vue_vue_type_template_id_4f5547ad___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Artist_vue_vue_type_template_id_4f5547ad___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Artist_vue_vue_type_template_id_4f5547ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Artist.vue?vue&type=template&id=4f5547ad& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialogs/admin/edit/Artist.vue?vue&type=template&id=4f5547ad&");


/***/ }),

/***/ "./resources/js/components/elements/single-items/TV.vue?vue&type=template&id=53a28649&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/elements/single-items/TV.vue?vue&type=template&id=53a28649&scoped=true& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TV_vue_vue_type_template_id_53a28649_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TV_vue_vue_type_template_id_53a28649_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TV_vue_vue_type_template_id_53a28649_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TV.vue?vue&type=template&id=53a28649&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/single-items/TV.vue?vue&type=template&id=53a28649&scoped=true&");


/***/ }),

/***/ "./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=template&id=4f0e5cda&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=template&id=4f0e5cda& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterPlayerLayout_vue_vue_type_template_id_4f0e5cda___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterPlayerLayout_vue_vue_type_template_id_4f0e5cda___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterPlayerLayout_vue_vue_type_template_id_4f0e5cda___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FooterPlayerLayout.vue?vue&type=template&id=4f0e5cda& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/FooterPlayerLayout.vue?vue&type=template&id=4f0e5cda&");


/***/ }),

/***/ "./resources/js/components/player/audio-player/Index.vue?vue&type=template&id=50c4b64e&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/player/audio-player/Index.vue?vue&type=template&id=50c4b64e& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_50c4b64e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_50c4b64e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_50c4b64e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=50c4b64e& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/Index.vue?vue&type=template&id=50c4b64e&");


/***/ }),

/***/ "./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=template&id=1c4cddf5&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=template&id=1c4cddf5& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PhonePlayerLayout_vue_vue_type_template_id_1c4cddf5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PhonePlayerLayout_vue_vue_type_template_id_1c4cddf5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PhonePlayerLayout_vue_vue_type_template_id_1c4cddf5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhonePlayerLayout.vue?vue&type=template&id=1c4cddf5& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/audio-player/PhonePlayerLayout.vue?vue&type=template&id=1c4cddf5&");


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

/***/ "./node_modules/@wasm-audio-decoders/common/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@wasm-audio-decoders/common/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WASMAudioDecoderCommon": () => (/* reexport safe */ _src_WASMAudioDecoderCommon_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "WASMAudioDecoderWorker": () => (/* reexport safe */ _src_WASMAudioDecoderWorker_js__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _src_WASMAudioDecoderCommon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/WASMAudioDecoderCommon.js */ "./node_modules/@wasm-audio-decoders/common/src/WASMAudioDecoderCommon.js");
/* harmony import */ var _src_WASMAudioDecoderWorker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/WASMAudioDecoderWorker.js */ "./node_modules/@wasm-audio-decoders/common/src/WASMAudioDecoderWorker.js");






/***/ }),

/***/ "./node_modules/@wasm-audio-decoders/common/src/WASMAudioDecoderCommon.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wasm-audio-decoders/common/src/WASMAudioDecoderCommon.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WASMAudioDecoderCommon)
/* harmony export */ });
function WASMAudioDecoderCommon(caller) {
  // setup static methods
  const uint8Array = Uint8Array;
  const float32Array = Float32Array;

  if (!WASMAudioDecoderCommon.modules) {
    Object.defineProperties(WASMAudioDecoderCommon, {
      modules: {
        value: new WeakMap(),
      },

      setModule: {
        value(Ref, module) {
          WASMAudioDecoderCommon.modules.set(Ref, Promise.resolve(module));
        },
      },

      getModule: {
        value(Ref, wasmString) {
          let module = WASMAudioDecoderCommon.modules.get(Ref);

          if (!module) {
            if (!wasmString) {
              wasmString = Ref.wasm;
              module = WASMAudioDecoderCommon.inflateDynEncodeString(
                wasmString
              ).then((data) => WebAssembly.compile(data));
            } else {
              module = WebAssembly.compile(
                WASMAudioDecoderCommon.decodeDynString(wasmString)
              );
            }

            WASMAudioDecoderCommon.modules.set(Ref, module);
          }

          return module;
        },
      },

      concatFloat32: {
        value(buffers, length) {
          let ret = new float32Array(length),
            i = 0,
            offset = 0;

          while (i < buffers.length) {
            ret.set(buffers[i], offset);
            offset += buffers[i++].length;
          }

          return ret;
        },
      },

      getDecodedAudio: {
        value: (channelData, samplesDecoded, sampleRate) => ({
          channelData,
          samplesDecoded,
          sampleRate,
        }),
      },

      getDecodedAudioMultiChannel: {
        value(input, channelsDecoded, samplesDecoded, sampleRate) {
          let channelData = [],
            i,
            j;

          for (i = 0; i < channelsDecoded; i++) {
            const channel = [];
            for (j = 0; j < input.length; ) channel.push(input[j++][i]);
            channelData.push(
              WASMAudioDecoderCommon.concatFloat32(channel, samplesDecoded)
            );
          }

          return WASMAudioDecoderCommon.getDecodedAudio(
            channelData,
            samplesDecoded,
            sampleRate
          );
        },
      },

      /*
       ******************
       * Compression Code
       ******************
       */

      decodeDynString: {
        value(source) {
          const output = new uint8Array(source.length);
          const offset = parseInt(source.substring(11, 13), 16);
          const offsetReverse = 256 - offset;

          let escaped = false,
            byteIndex = 0,
            byte,
            i = 13;

          while (i < source.length) {
            byte = source.charCodeAt(i++);

            if (byte === 61 && !escaped) {
              escaped = true;
              continue;
            }

            if (escaped) {
              escaped = false;
              byte -= 64;
            }

            output[byteIndex++] =
              byte < offset && byte > 0 ? byte + offsetReverse : byte - offset;
          }

          return output.subarray(0, byteIndex);
        },
      },

      inflateDynEncodeString: {
        value(source) {
          source = WASMAudioDecoderCommon.decodeDynString(source);

          return new Promise((resolve) => {
            // prettier-ignore
            const puffString = String.raw`dynEncode0014u*ttt$#U¤¤U¤¤3yzzss|yusvuyÚ&4<054<,5T44^T44<(6U~J(44< ~A544U~6J0444545 444J0444J,4U4UÒ7U454U4Z4U4U^/6545T4T44BU~64CU~O4U54U~5 U5T4B4Z!4U~5U5U5T4U~6U4ZTU5U5T44~4O4U2ZTU5T44Z!4B6T44U~64B6U~O44U~4O4U~54U~5 44~C4~54U~5 44~5454U4B6Ub!444~UO4U~5 U54U4ZTU#44U$464<4~B6^4<444~U~B4U~54U544~544~U5 µUä#UJUè#5TT4U0ZTTUX5U5T4T4Uà#~4OU4U $~C4~54U~5 T44$6U\!TTT4UaT4<6T4<64<Z!44~4N4<U~5 4UZ!4U±_TU#44UU6UÔ~B$544$6U\!4U6U¤#~B44Uä#~B$~64<6_TU#444U~B~6~54<Y!44<_!T4Y!4<64~444~AN44<U~6J4U5 44J4U[!U#44UO4U~54U~5 U54 7U6844J44J 4UJ4UJ04VK(44<J44<J$4U´~54U~5 4U¤~5!TTT4U$5"U5TTTTTTT4U$"4VK,U54<(6U~64<$6_!4< 64~6A54A544U~6#J(U54A4U[!44J(44#~A4U6UUU[!4464~64_!4<64~54<6T4<4]TU5 T4Y!44~44~AN4U~54U~54U5 44J(44J UÄA!U5U#UôJU"UÔJU#UÔ"JU#U´"JT4U´ZTU5T4UôZTU5T4UDZTU5T4U$[T44~UO4U~5 UÔUô4U~U´$.U5T4UP[T4U~4~UO4U~5 U#<U#<4U~U2$.UÄUN 44 ~UO4U~5 44!~UO4U~5 4U~4~UO4U~5 44J44J(U5 44U¤~J@44Uä~J<44UD~J844U~J44U$54U$5U54U$54U1^4U1^!4U~54U~5U54U~6U4U^/65T4T4U$54U~4BU~4O4U54U~5 UU'464U'_/54UU~5T4T4U~4BU~UO4U54U~5 U54Uä~4U¤~4U~U'$!44~5U5T44\T44U<~$6U\!4U#aT4U~4U~4O4U~5 U5U5U5TTT4U$"4YTU5 4U4~C5U5 U5U5444$4~64~\TU5 4U~4U~5T4Y!44O4U~54U~54U5 4CYTU5 4Uä~4U¤~4U~4$6TU54U\!44Bæ4Bä~[!4U~4UD~4U~4U~4$6TU54U\!44B4B~[!44U<~4U4~$5 4U"U#$544"Y!454U^!44<J44<(J454U~84­UN!#%'+/37?GOWgw·×÷Uä;U9$%& !"#`;

            WASMAudioDecoderCommon.getModule(WASMAudioDecoderCommon, puffString)
              .then((wasm) => WebAssembly.instantiate(wasm, {}))
              .then(({ exports }) => {
                // required for minifiers that mangle the __heap_base property
                const instanceExports = new Map(Object.entries(exports));

                const puff = instanceExports.get("puff");
                const memory = instanceExports.get("memory")["buffer"];
                const dataArray = new uint8Array(memory);
                const heapView = new DataView(memory);

                let heapPos = instanceExports.get("__heap_base");

                // source length
                const sourceLength = source.length;
                const sourceLengthPtr = heapPos;
                heapPos += 4;
                heapView.setInt32(sourceLengthPtr, sourceLength, true);

                // source data
                const sourcePtr = heapPos;
                heapPos += sourceLength;
                dataArray.set(source, sourcePtr);

                // destination length
                const destLengthPtr = heapPos;
                heapPos += 4;
                heapView.setInt32(
                  destLengthPtr,
                  dataArray.byteLength - heapPos,
                  true
                );

                // destination data fills in the rest of the heap
                puff(heapPos, destLengthPtr, sourcePtr, sourceLengthPtr);

                resolve(
                  dataArray.slice(
                    heapPos,
                    heapPos + heapView.getInt32(destLengthPtr, true)
                  )
                );
              });
          });
        },
      },
    });
  }

  Object.defineProperty(this, "wasm", {
    enumerable: true,
    get: () => this._wasm,
  });

  this.getOutputChannels = (outputData, channelsDecoded, samplesDecoded) => {
    let output = [],
      i = 0;

    while (i < channelsDecoded)
      output.push(
        outputData.slice(
          i * samplesDecoded,
          i++ * samplesDecoded + samplesDecoded
        )
      );

    return output;
  };

  this.allocateTypedArray = (len, TypedArray) => {
    const ptr = this._wasm._malloc(TypedArray.BYTES_PER_ELEMENT * len);
    this._pointers.add(ptr);

    return {
      ptr: ptr,
      len: len,
      buf: new TypedArray(this._wasm.HEAP, ptr, len),
    };
  };

  this.free = () => {
    this._pointers.forEach((ptr) => {
      this._wasm._free(ptr);
    });
    this._pointers.clear();
  };

  this.instantiate = () => {
    const _module = caller._module;
    const _EmscriptenWASM = caller._EmscriptenWASM;
    const _inputSize = caller._inputSize;
    const _outputChannels = caller._outputChannels;
    const _outputChannelSize = caller._outputChannelSize;

    if (_module) WASMAudioDecoderCommon.setModule(_EmscriptenWASM, _module);

    this._wasm = new _EmscriptenWASM(WASMAudioDecoderCommon).instantiate();
    this._pointers = new Set();

    return this._wasm.ready.then(() => {
      caller._input = this.allocateTypedArray(_inputSize, uint8Array);

      // output buffer
      caller._output = this.allocateTypedArray(
        _outputChannels * _outputChannelSize,
        float32Array
      );

      return this;
    });
  };
}


/***/ }),

/***/ "./node_modules/@wasm-audio-decoders/common/src/WASMAudioDecoderWorker.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wasm-audio-decoders/common/src/WASMAudioDecoderWorker.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WASMAudioDecoderWorker)
/* harmony export */ });
/* harmony import */ var web_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web-worker */ "./node_modules/web-worker/cjs/browser.js");
/* harmony import */ var _WASMAudioDecoderCommon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WASMAudioDecoderCommon.js */ "./node_modules/@wasm-audio-decoders/common/src/WASMAudioDecoderCommon.js");
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")["Buffer"];



class WASMAudioDecoderWorker extends web_worker__WEBPACK_IMPORTED_MODULE_0__ {
  constructor(options, name, Decoder, EmscriptenWASM) {
    if (!_WASMAudioDecoderCommon_js__WEBPACK_IMPORTED_MODULE_1__["default"].modules) new _WASMAudioDecoderCommon_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

    let source = _WASMAudioDecoderCommon_js__WEBPACK_IMPORTED_MODULE_1__["default"].modules.get(Decoder);

    if (!source) {
      const webworkerSourceCode =
        "'use strict';" +
        // dependencies need to be manually resolved when stringifying this function
        `(${((_options, _Decoder, _WASMAudioDecoderCommon, _EmscriptenWASM) => {
          // We're in a Web Worker

          // setup Promise that will be resolved once the WebAssembly Module is received
          let decoder,
            moduleResolve,
            modulePromise = new Promise((resolve) => {
              moduleResolve = resolve;
            });

          self.onmessage = ({ data: { id, command, data } }) => {
            let messagePromise = modulePromise,
              messagePayload = { id },
              transferList;

            if (command === "module") {
              Object.defineProperties(_Decoder, {
                WASMAudioDecoderCommon: { value: _WASMAudioDecoderCommon },
                EmscriptenWASM: { value: _EmscriptenWASM },
                module: { value: data },
                isWebWorker: { value: true },
              });

              decoder = new _Decoder(_options);
              moduleResolve();
            } else if (command === "free") {
              decoder.free();
            } else if (command === "ready") {
              messagePromise = messagePromise.then(() => decoder.ready);
            } else if (command === "reset") {
              messagePromise = messagePromise.then(() => decoder.reset());
            } else {
              // "decode":
              // "decodeFrame":
              // "decodeFrames":
              Object.assign(
                messagePayload,
                decoder[command](
                  // detach buffers
                  Array.isArray(data)
                    ? data.map((data) => new Uint8Array(data))
                    : new Uint8Array(data)
                )
              );
              // The "transferList" parameter transfers ownership of channel data to main thread,
              // which avoids copying memory.
              transferList = messagePayload.channelData.map(
                (channel) => channel.buffer
              );
            }

            messagePromise.then(() =>
              self.postMessage(messagePayload, transferList)
            );
          };
        }).toString()})(${JSON.stringify(
          options
        )}, ${Decoder}, ${_WASMAudioDecoderCommon_js__WEBPACK_IMPORTED_MODULE_1__["default"]}, ${EmscriptenWASM})`;

      const type = "text/javascript";

      try {
        // browser
        source = URL.createObjectURL(new Blob([webworkerSourceCode], { type }));
        _WASMAudioDecoderCommon_js__WEBPACK_IMPORTED_MODULE_1__["default"].modules.set(Decoder, source);
      } catch {
        // nodejs
        source = `data:${type};base64,${Buffer.from(
          webworkerSourceCode
        ).toString("base64")}`;
      }
    }

    super(source, { name });

    this._id = Number.MIN_SAFE_INTEGER;
    this._enqueuedOperations = new Map();

    this.onmessage = ({ data }) => {
      const { id, ...rest } = data;
      this._enqueuedOperations.get(id)(rest);
      this._enqueuedOperations.delete(id);
    };

    new EmscriptenWASM(_WASMAudioDecoderCommon_js__WEBPACK_IMPORTED_MODULE_1__["default"]).getModule().then((compiled) => {
      this._postToDecoder("module", compiled);
    });
  }

  async _postToDecoder(command, data) {
    return new Promise((resolve) => {
      this.postMessage({
        command,
        id: this._id,
        data,
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
}


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
/* Copyright 2020-2022 Ethan Halsall
    
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
/* Copyright 2020-2022 Ethan Halsall
    
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
/* Copyright 2020-2022 Ethan Halsall
    
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
/* Copyright 2020-2022 Ethan Halsall
    
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

      // only update if codec data is available
      const codecData = this._codecUpdateData.get(
        this._headerCache.get(this._currentHeader)
      );

      if (this._codecShouldUpdate && codecData) {
        this._onCodecUpdate(
          {
            bitrate,
            ...codecData,
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
/* Copyright 2020-2022 Ethan Halsall
    
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
/* Copyright 2020-2022 Ethan Halsall
    
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
/* Copyright 2020-2022 Ethan Halsall
    
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
/* Copyright 2020-2022 Ethan Halsall
    
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
/* Copyright 2020-2022 Ethan Halsall
    
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
/* Copyright 2020-2022 Ethan Halsall
    
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
/* Copyright 2020-2022 Ethan Halsall
    
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
/* Copyright 2020-2022 Ethan Halsall
    
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
/* Copyright 2020-2022 Ethan Halsall
    
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
/* Copyright 2020-2022 Ethan Halsall
    
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
/* Copyright 2020-2022 Ethan Halsall
    
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
/* Copyright 2020-2022 Ethan Halsall
    
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
  // additional channel mappings are user defined
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
    if (header.channelMappingFamily in channelMappingFamilies) {
      header.channelMode =
        channelMappingFamilies[header.channelMappingFamily][
          header.channels - 1
        ];
      if (!header.channelMode) return null;
    }

    if (header.channelMappingFamily !== 0) {
      // * `HHHHHHHH`: Stream count
      header.streamCount = data[19];

      // * `IIIIIIII`: Coupled Stream count
      header.coupledStreamCount = data[20];

      // * `JJJJJJJJ|...` Channel Mapping table
      header.channelMappingTable = [...data.subarray(21, header.channels + 21)];
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
/* Copyright 2020-2022 Ethan Halsall
    
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
/* Copyright 2020-2022 Ethan Halsall
    
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
/* Copyright 2020-2022 Ethan Halsall
    
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
/* Copyright 2020-2022 Ethan Halsall
    
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
/* harmony export */   "bad": () => (/* binding */ bad),
/* harmony export */   "channelMappings": () => (/* binding */ channelMappings),
/* harmony export */   "free": () => (/* binding */ free),
/* harmony export */   "getChannelMapping": () => (/* binding */ getChannelMapping),
/* harmony export */   "lfe": () => (/* binding */ lfe),
/* harmony export */   "monophonic": () => (/* binding */ monophonic),
/* harmony export */   "none": () => (/* binding */ none),
/* harmony export */   "rate11025": () => (/* binding */ rate11025),
/* harmony export */   "rate12000": () => (/* binding */ rate12000),
/* harmony export */   "rate16000": () => (/* binding */ rate16000),
/* harmony export */   "rate176400": () => (/* binding */ rate176400),
/* harmony export */   "rate192000": () => (/* binding */ rate192000),
/* harmony export */   "rate22050": () => (/* binding */ rate22050),
/* harmony export */   "rate24000": () => (/* binding */ rate24000),
/* harmony export */   "rate32000": () => (/* binding */ rate32000),
/* harmony export */   "rate44100": () => (/* binding */ rate44100),
/* harmony export */   "rate48000": () => (/* binding */ rate48000),
/* harmony export */   "rate64000": () => (/* binding */ rate64000),
/* harmony export */   "rate7350": () => (/* binding */ rate7350),
/* harmony export */   "rate8000": () => (/* binding */ rate8000),
/* harmony export */   "rate88200": () => (/* binding */ rate88200),
/* harmony export */   "rate96000": () => (/* binding */ rate96000),
/* harmony export */   "reserved": () => (/* binding */ reserved),
/* harmony export */   "sixteenBitCRC": () => (/* binding */ sixteenBitCRC),
/* harmony export */   "stereo": () => (/* binding */ stereo),
/* harmony export */   "vorbisOpusChannelMapping": () => (/* binding */ vorbisOpusChannelMapping)
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
/* Copyright 2020-2022 Ethan Halsall
    
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
/* Copyright 2020-2022 Ethan Halsall
    
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
/* Copyright 2020-2022 Ethan Halsall
    
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
    header.pageSegmentBytes = Uint8Array.from(data.subarray(27, header.length));

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
/* Copyright 2020-2022 Ethan Halsall
    
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
/* harmony export */   "frameStore": () => (/* binding */ frameStore),
/* harmony export */   "headerStore": () => (/* binding */ headerStore)
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
/* Copyright 2020-2022 Ethan Halsall
    
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
/* harmony export */   "BitReader": () => (/* binding */ BitReader),
/* harmony export */   "bytesToString": () => (/* binding */ bytesToString),
/* harmony export */   "concatBuffers": () => (/* binding */ concatBuffers),
/* harmony export */   "crc32": () => (/* binding */ crc32),
/* harmony export */   "crc8": () => (/* binding */ crc8),
/* harmony export */   "flacCrc16": () => (/* binding */ flacCrc16),
/* harmony export */   "reverse": () => (/* binding */ reverse)
/* harmony export */ });
/* Copyright 2020-2022 Ethan Halsall
    
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

/***/ "./node_modules/icecast-metadata-js/browser.js":
/*!*****************************************************!*\
  !*** ./node_modules/icecast-metadata-js/browser.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IcecastMetadataQueue": () => (/* reexport safe */ _src_IcecastMetadataQueue_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "IcecastMetadataReader": () => (/* reexport safe */ _src_IcecastMetadataReader_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "IcecastReadableStream": () => (/* reexport safe */ _src_IcecastReadableStream_js__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _src_IcecastMetadataQueue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/IcecastMetadataQueue.js */ "./node_modules/icecast-metadata-js/src/IcecastMetadataQueue.js");
/* harmony import */ var _src_IcecastMetadataReader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/IcecastMetadataReader.js */ "./node_modules/icecast-metadata-js/src/IcecastMetadataReader.js");
/* harmony import */ var _src_IcecastReadableStream_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/IcecastReadableStream.js */ "./node_modules/icecast-metadata-js/src/IcecastReadableStream.js");







/***/ }),

/***/ "./node_modules/icecast-metadata-js/src/IcecastMetadataQueue.js":
/*!**********************************************************************!*\
  !*** ./node_modules/icecast-metadata-js/src/IcecastMetadataQueue.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IcecastMetadataQueue)
/* harmony export */ });
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
   * @param {boolean} [IcecastMetadataQueue.paused] Set to true to start the queue in a paused mode
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
  constructor({
    icyBr,
    onMetadataUpdate = noOp,
    onMetadataEnqueue = noOp,
    paused = false,
  }) {
    this._icyBr = icyBr;
    this._onMetadataUpdate = onMetadataUpdate;
    this._onMetadataEnqueue = onMetadataEnqueue;
    this._initialPaused = paused;
    this._paused = paused;
    this._isInitialMetadata = true;
    this._pendingMetadata = [];
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
    timestamp += stats ? this.getTimeByBytes(stats.currentStreamPosition) : 0;

    const metadataPayload = {
      metadata,
      timestampOffset,
      timestamp,
    };

    this._paused
      ? this._pendingMetadata.push(metadataPayload)
      : this._enqueueMetadata(metadataPayload);
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
   * @description Starts the metadata queue if it was paused
   * @param {number} [timestamp] Current time of the audio player
   */
  startQueue(timestamp) {
    if (this._paused) {
      this._pendingMetadata.forEach((u) => {
        if (timestamp !== undefined) u.timestamp = timestamp;

        // remove any metadata that has already elapsed
        if (timestamp === undefined || u.timestampOffset >= u.timestamp)
          this._enqueueMetadata(u);
      });
      this._pendingMetadata = [];
      this._paused = false;
    }
  }

  /**
   * @description Clears all metadata updates and empties the queue
   */
  purgeMetadataQueue() {
    this._metadataQueue.forEach((i) => clearTimeout(i._timeoutId));
    this._metadataQueue = [];
    this._pendingMetadata = [];
    this._paused = this._initialPaused;
    this._isInitialMetadata = true;
  }

  _enqueueMetadata(payload) {
    this._metadataQueue.push(payload);

    this._onMetadataEnqueue(
      payload.metadata,
      payload.timestampOffset,
      payload.timestamp
    );

    if (this._isInitialMetadata) {
      this._dequeueMetadata();
      this._isInitialMetadata = false;
    } else {
      payload._timeoutId = setTimeout(() => {
        this._dequeueMetadata();
      }, (payload.timestampOffset - payload.timestamp) * 1000); // trigger timeout relative to play position
    }
  }

  _dequeueMetadata() {
    // purging the queue is an async operation, some timeouts may still be queued in the event loop _after_ the purge call has happened
    if (this._metadataQueue.length) {
      const { metadata, timestampOffset, timestamp } =
        this._metadataQueue.shift();
      this._onMetadataUpdate(metadata, timestampOffset, timestamp);
    }
  }
}


/***/ }),

/***/ "./node_modules/icecast-metadata-js/src/IcecastMetadataReader.js":
/*!***********************************************************************!*\
  !*** ./node_modules/icecast-metadata-js/src/IcecastMetadataReader.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IcecastMetadataReader)
/* harmony export */ });
/* harmony import */ var _MetadataParser_MetadataParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MetadataParser/MetadataParser.js */ "./node_modules/icecast-metadata-js/src/MetadataParser/MetadataParser.js");
/* harmony import */ var _MetadataParser_IcyMetadataParser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MetadataParser/IcyMetadataParser.js */ "./node_modules/icecast-metadata-js/src/MetadataParser/IcyMetadataParser.js");
/* harmony import */ var _MetadataParser_OggMetadataParser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MetadataParser/OggMetadataParser.js */ "./node_modules/icecast-metadata-js/src/MetadataParser/OggMetadataParser.js");
/* harmony import */ var _MetadataParser_DualMetadataParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MetadataParser/DualMetadataParser.js */ "./node_modules/icecast-metadata-js/src/MetadataParser/DualMetadataParser.js");
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

    if (hasIcy && hasOgg) this._metadataParser = new _MetadataParser_DualMetadataParser_js__WEBPACK_IMPORTED_MODULE_3__["default"](rest);
    else if (hasOgg) this._metadataParser = new _MetadataParser_OggMetadataParser_js__WEBPACK_IMPORTED_MODULE_2__["default"](rest);
    else if (hasIcy) this._metadataParser = new _MetadataParser_IcyMetadataParser_js__WEBPACK_IMPORTED_MODULE_1__["default"](rest);
    else this._metadataParser = new _MetadataParser_MetadataParser_js__WEBPACK_IMPORTED_MODULE_0__["default"](rest);
  }

  /**
   * @description Parses an already decoded ICY metadata string into key value pairs.
   * @param {string} metadataString ICY formatted metadata string. (i.e. "StreamTitle='A Title';")
   * @returns {object} Parsed metadata key value pairs. (i.e. {StreamTitle: "A Title"})
   */
  static parseIcyMetadata(string) {
    return _MetadataParser_IcyMetadataParser_js__WEBPACK_IMPORTED_MODULE_1__["default"].parseIcyMetadata(string);
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


/***/ }),

/***/ "./node_modules/icecast-metadata-js/src/IcecastReadableStream.js":
/*!***********************************************************************!*\
  !*** ./node_modules/icecast-metadata-js/src/IcecastReadableStream.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IcecastReadableStream)
/* harmony export */ });
/* harmony import */ var _IcecastMetadataReader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IcecastMetadataReader.js */ "./node_modules/icecast-metadata-js/src/IcecastMetadataReader.js");
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
        icecast = new _IcecastMetadataReader_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DualMetadataParser)
/* harmony export */ });
/* harmony import */ var _IcyMetadataParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IcyMetadataParser.js */ "./node_modules/icecast-metadata-js/src/MetadataParser/IcyMetadataParser.js");
/* harmony import */ var _OggMetadataParser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OggMetadataParser.js */ "./node_modules/icecast-metadata-js/src/MetadataParser/OggMetadataParser.js");
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




/**
 * @description Parses ICY and OGG metadata from an Icecast stream
 * @protected
 * @see IcecastMetadataReader
 */

class DualMetadataParser {
  constructor(params) {
    const { onStream, ...rest } = params;
    this._oggMetadataParser = new _OggMetadataParser_js__WEBPACK_IMPORTED_MODULE_1__["default"](params);
    this._icyMetadataParser = new _IcyMetadataParser_js__WEBPACK_IMPORTED_MODULE_0__["default"](rest);
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


/***/ }),

/***/ "./node_modules/icecast-metadata-js/src/MetadataParser/IcyMetadataParser.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/icecast-metadata-js/src/MetadataParser/IcyMetadataParser.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IcyMetadataParser)
/* harmony export */ });
/* harmony import */ var _MetadataParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MetadataParser.js */ "./node_modules/icecast-metadata-js/src/MetadataParser/MetadataParser.js");
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



/**
 * @description Parses ICY metadata from an Icecast stream
 * @protected
 * @see IcecastMetadataReader
 */

class IcyMetadataParser extends _MetadataParser_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    icyMetaInt,
    icyDetectionTimeout = 2000,
    icyCharacterEncoding = "utf-8",
    ...rest
  }) {
    super(rest);

    this._decoder = new globalThis.TextDecoder(icyCharacterEncoding);
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
      this._buffer = _MetadataParser_js__WEBPACK_IMPORTED_MODULE_0__["default"]._concatBuffers(
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


/***/ }),

/***/ "./node_modules/icecast-metadata-js/src/MetadataParser/MetadataParser.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/icecast-metadata-js/src/MetadataParser/MetadataParser.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MetadataParser)
/* harmony export */ });
/* harmony import */ var _Stats_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stats.js */ "./node_modules/icecast-metadata-js/src/MetadataParser/Stats.js");
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
    this._stats = new _Stats_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

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


/***/ }),

/***/ "./node_modules/icecast-metadata-js/src/MetadataParser/OggMetadataParser.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/icecast-metadata-js/src/MetadataParser/OggMetadataParser.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OggMetadataParser)
/* harmony export */ });
/* harmony import */ var _MetadataParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MetadataParser.js */ "./node_modules/icecast-metadata-js/src/MetadataParser/MetadataParser.js");
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



/**
 * @description Parses OGG metadata from an Icecast stream
 * @protected
 * @see IcecastMetadataReader
 */
class OggMetadataParser extends _MetadataParser_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(params) {
    super(params);

    this._decoder = new globalThis.TextDecoder("utf-8");
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


/***/ }),

/***/ "./node_modules/icecast-metadata-js/src/MetadataParser/Stats.js":
/*!**********************************************************************!*\
  !*** ./node_modules/icecast-metadata-js/src/MetadataParser/Stats.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Stats)
/* harmony export */ });
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
/* harmony import */ var synaudio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! synaudio */ "./node_modules/synaudio/index.js");
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global.js */ "./node_modules/icecast-metadata-player/src/global.js");
/* harmony import */ var _PlayerFactory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlayerFactory.js */ "./node_modules/icecast-metadata-player/src/PlayerFactory.js");





class FrameQueue {
  constructor(icecast, player) {
    this.CRC_DURATION = 300000; // milliseconds to cache for crc syncing
    this.PCM_DURATION = 60000; // milliseconds to cache for pcm syncing

    this._icecast = icecast;
    this._player = player;

    this.initSync();
    this.initQueue();
  }

  initSync() {
    this._syncQueue = [];
    this._syncQueueDuration = 0;

    this._synAudioResult = null;
    this._a = null;
    this._b = null;
  }

  initQueue() {
    this._absoluteQueueIndex = 0;
    this._absoluteQueueDuration = 0;

    this._crcQueue = [];
    this._crcQueueDuration = 0;
    this._crcQueueIndexes = {};

    this._pcmQueue = [];
    this._pcmQueueDuration = 0;
  }

  get buffered() {
    return this._absoluteQueueDuration / 1000 - this._player.currentTime;
  }

  add(frame) {
    // crc queue
    const { crc32, duration } = frame;
    this._crcQueue.push({ crc32, duration });
    this._crcQueueDuration += duration;
    this._absoluteQueueDuration += duration;

    // update queue index
    let indexes = this._crcQueueIndexes[crc32];
    if (!indexes) {
      indexes = [];
      this._crcQueueIndexes[crc32] = indexes;
    }
    indexes.push(this._absoluteQueueIndex++);

    if (this._crcQueueDuration >= this.CRC_DURATION) {
      const { crc32, duration } = this._crcQueue.shift();
      this._crcQueueDuration -= duration;

      // remove the oldest index
      const indexes = this._crcQueueIndexes[crc32];
      indexes.shift();
      // remove the key if there are no indexes left
      if (!indexes.length) delete this._crcQueueIndexes[crc32];
    }

    // pcm queue
    this._pcmQueue.push(frame);
    this._pcmQueueDuration += duration;

    if (this._pcmQueueDuration >= this.PCM_DURATION) {
      this._pcmQueueDuration -= this._pcmQueue.shift().duration;
    }
  }

  addAll(frames) {
    frames.forEach((frame) => this.add(frame));
  }

  _addAllSyncQueue(frames) {
    for (const frame of frames) {
      this._syncQueueDuration += frame.duration;
      this._syncQueue.push(frame);
    }
  }

  /**
   *
   * @param {Array<CodecFrame|OggPage>} frames
   */
  async sync(frames) {
    this._addAllSyncQueue(frames);

    // try syncing using crc32 hashes (if the stream data matches exactly)
    const crcSyncState = this._crcSync();
    if (crcSyncState) return crcSyncState;

    // try syncing using decoded audio and corelation (if audio data matches)
    const pcmSyncState = await this._pcmSync();
    if (pcmSyncState) return pcmSyncState;

    // streams do not match (not synced)
    // prettier-ignore
    if (this._icecast.state !== _global_js__WEBPACK_IMPORTED_MODULE_1__.state.STOPPING && this._icecast.state !== _global_js__WEBPACK_IMPORTED_MODULE_1__.state.STOPPED)
      this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_1__.fireEvent](
        _global_js__WEBPACK_IMPORTED_MODULE_1__.event.WARN,
        `Reconnected successfully after ${this._icecast.state}.`,
        "Found no overlapping frames from previous request.",
        "Unable to sync old and new request."
      );

    const syncQueue = this._syncQueue;
    this.initSync();
    this.initQueue();
    return [syncQueue, _global_js__WEBPACK_IMPORTED_MODULE_1__.NOT_SYNCED];
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
  _crcSync() {
    // get all indexed matches for crc and check
    if (!this._syncQueue.length) return [[], _global_js__WEBPACK_IMPORTED_MODULE_1__.SYNCING];

    const syncQueueStartIndex = 0;
    const syncQueueCrc = this._syncQueue[syncQueueStartIndex].crc32;
    const crcSyncPoints = this._crcQueueIndexes[syncQueueCrc];

    let matched, outOfFrames, syncPoint;

    if (crcSyncPoints) {
      align_queues: for (const absoluteSyncPoint of crcSyncPoints) {
        syncPoint =
          absoluteSyncPoint -
          (this._absoluteQueueIndex - this._crcQueue.length);

        for (
          let i = syncQueueStartIndex;
          i < this._syncQueue.length && syncPoint + i < this._crcQueue.length;
          i++
        )
          if (this._crcQueue[syncPoint + i].crc32 !== this._syncQueue[i].crc32)
            continue align_queues; // failed to match

        outOfFrames =
          syncPoint + this._syncQueue.length <= this._crcQueue.length;
        matched = true;
        break; // full match
      }

      // have some overlapping frames, but none are new frames
      if (outOfFrames) return [[], _global_js__WEBPACK_IMPORTED_MODULE_1__.SYNCING];

      if (matched) {
        const sliceIndex = this._crcQueue.length - syncPoint;
        // prettier-ignore
        this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_1__.fireEvent](
          _global_js__WEBPACK_IMPORTED_MODULE_1__.event.WARN,
          `Reconnected successfully after ${this._icecast.state}.`,
          `Found ${sliceIndex} frames (${(this._crcQueue
            .slice(syncPoint)
            .reduce((acc, { duration }) => acc + duration, 0) / 1000).toFixed(3)} seconds) of overlapping audio data in new request.`,
          "Synchronized old and new request."
        );

        const newFrames = this._syncQueue.slice(sliceIndex);
        this.initSync();
        return [newFrames, _global_js__WEBPACK_IMPORTED_MODULE_1__.SYNCED];
      }
    }
  }

  /*
  Syncs the old and new data using correlation between decoded audio.
  A new player will be constructed after this sync is completed.

                           old data  | common data | new data
    
    (time scale)     -2 -1 0 +1 +2
    (old connection)  -----------------------------|
                      ^^^^^|^^^^^^^^^|             |
                           |         sampleOffsetFromEnd    buffered (metadataTimestamp)
  
    (time scale)               -2 -1 0 +1 +2
    (new connection)                 |-----------|--->
                             |       ^^^^^^^^^^^^|^^^^
                             delay               syncLength
  */
  _pcmSync() {
    const sync = async () => {
      const correlationSyncLength = 1; // seconds
      const initialGranularity = 7;

      const samplesToDuration = (samples, rate) => samples / rate;

      if (!this._synAudioResult) {
        const [pcmQueueDecoded, syncQueueDecoded, sampleRate] =
          await this._decodeQueues();

        const correlationSampleSize = sampleRate * correlationSyncLength;

        // more data is needed to meet the correlationSampleSize
        if (syncQueueDecoded.samplesDecoded <= correlationSampleSize)
          return [[], _global_js__WEBPACK_IMPORTED_MODULE_1__.SYNCING];

        const synAudio = new synaudio__WEBPACK_IMPORTED_MODULE_0__["default"]({
          correlationSampleSize,
          initialGranularity,
        });

        this._synAudioResult = await synAudio.syncWorkerConcurrent(
          pcmQueueDecoded,
          syncQueueDecoded,
          Math.max(navigator.hardwareConcurrency - 1, 1)
        );

        this._synAudioResult.sampleOffsetFromEnd =
          samplesToDuration(pcmQueueDecoded.samplesDecoded, sampleRate) -
          samplesToDuration(this._synAudioResult.sampleOffset, sampleRate); // total a samples decoded - sample offset (sampleOffset from end of buffer)
      }

      // anything lower than .5 is likely not synced, but it might sound better than some random sync point
      // "old" time scale
      const { correlation, sampleOffsetFromEnd } = this._synAudioResult;

      // "new" time scale
      let delay = (this.buffered - sampleOffsetFromEnd) * 1000; // if negative, sync is before playback, positive, sync after playback

      if (delay > this._syncQueueDuration)
        // more frames need to be cut than exist on the sync queue
        return [[], _global_js__WEBPACK_IMPORTED_MODULE_1__.SYNCING];

      const frameOverlap = 2;
      if (delay < 0) {
        // slice the sync frame with 'n' frame overlap and start immediately
        let sliceIndex = 0;
        for (
          let t = 0;
          sliceIndex < this._syncQueue.length - frameOverlap && t >= delay;
          sliceIndex++
        )
          t -= this._syncQueue[sliceIndex].duration;

        this._syncQueue = this._syncQueue.slice(sliceIndex - frameOverlap);
      } else {
        // delay start with 'n' frame overlap
        for (let i = 0; i < frameOverlap && i < this._syncQueue.length; i++)
          delay -= this._syncQueue[i].duration;
      }

      // prettier-ignore
      this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_1__.fireEvent](
        _global_js__WEBPACK_IMPORTED_MODULE_1__.event.WARN,
        `Reconnected successfully after ${this._icecast.state}.`,
        `Synchronized old and new request with ${(Math.round(correlation * 10000) / 100).toFixed(2)}% confidence.`
      );

      this.initSync();
      this.initQueue();

      return [this._syncQueue, _global_js__WEBPACK_IMPORTED_MODULE_1__.PCM_SYNCED, delay];
    };

    let promiseTimeout;

    return new Promise((resolve, reject) => {
      const currentBuffered = this.buffered;

      // abort syncing if the audio stops playing while sync is in progress
      promiseTimeout = setTimeout(() => {
        reject(
          `Buffer underrun after syncing for ${currentBuffered.toFixed(
            2
          )} seconds.`
        );
      }, currentBuffered * 1000);

      sync().then(resolve).catch(reject);
    })
      .catch((e) => {
        if (
          this._icecast.state !== _global_js__WEBPACK_IMPORTED_MODULE_1__.state.STOPPING &&
          this._icecast.state !== _global_js__WEBPACK_IMPORTED_MODULE_1__.state.STOPPED
        )
          this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_1__.fireEvent](
            _global_js__WEBPACK_IMPORTED_MODULE_1__.event.WARN,
            `Unable to synchronize after ${this._icecast.state}.`,
            e
          );
      })
      .finally(() => {
        clearTimeout(promiseTimeout);
      });
  }

  async _decodeQueues() {
    const decode = (queue) =>
      _PlayerFactory_js__WEBPACK_IMPORTED_MODULE_2__["default"].constructor.audioContext.decodeAudioData(
        (0,_global_js__WEBPACK_IMPORTED_MODULE_1__.concatBuffers)(queue.map(({ data }) => data)).buffer
      );

    [this._a, this._b] = await Promise.all([
      // decode the pcm queue only once
      this._a ? this._a : decode(this._pcmQueue),
      decode(this._syncQueue),
    ]);

    const getDecodedAudio = (decodedAudioData) => {
      const decoded = {
        channelData: [],
        samplesDecoded: decodedAudioData.length,
      };

      for (let i = 0; i < decodedAudioData.numberOfChannels; i++)
        decoded.channelData.push(
          Float32Array.from(decodedAudioData.getChannelData(i))
        );

      return decoded;
    };

    return [
      getDecodedAudio(this._a),
      getDecodedAudio(this._b),
      this._a.sampleRate,
    ];
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
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global.js */ "./node_modules/icecast-metadata-player/src/global.js");
/* harmony import */ var _EventTargetPolyfill_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventTargetPolyfill.js */ "./node_modules/icecast-metadata-player/src/EventTargetPolyfill.js");
/* harmony import */ var _PlayerFactory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlayerFactory.js */ "./node_modules/icecast-metadata-player/src/PlayerFactory.js");
/**
 * @license
 * @see https://github.com/eshaz/icecast-metadata-js
 * @copyright 2021-2022 Ethan Halsall
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






const EventClass = window.EventTarget || _EventTargetPolyfill_js__WEBPACK_IMPORTED_MODULE_1__["default"];

const playerFactory = Symbol();
const playerResetPromise = Symbol();
const events = Symbol();

const onAudioPause = Symbol();
const onAudioPlay = Symbol();
const onPlayReady = Symbol();
const onAudioError = Symbol();
const onAudioWaiting = Symbol();

const stopPlayback = Symbol();
const endPlayback = Symbol();
const retryAttempt = Symbol();
const retryTimeoutId = Symbol();

class IcecastMetadataPlayer extends EventClass {
  static getDefaults(options, instance = {}) {
    return {
      [_global_js__WEBPACK_IMPORTED_MODULE_0__.bufferLength]: options.bufferLength ?? instance[_global_js__WEBPACK_IMPORTED_MODULE_0__.bufferLength] ?? 1,
      [_global_js__WEBPACK_IMPORTED_MODULE_0__.icyMetaInt]: options.icyMetaInt ?? instance[_global_js__WEBPACK_IMPORTED_MODULE_0__.icyMetaInt],
      [_global_js__WEBPACK_IMPORTED_MODULE_0__.icyCharacterEncoding]:
        options.icyCharacterEncoding ?? instance[_global_js__WEBPACK_IMPORTED_MODULE_0__.icyCharacterEncoding],
      [_global_js__WEBPACK_IMPORTED_MODULE_0__.icyDetectionTimeout]:
        options.icyDetectionTimeout ?? instance[_global_js__WEBPACK_IMPORTED_MODULE_0__.icyDetectionTimeout],
      [_global_js__WEBPACK_IMPORTED_MODULE_0__.metadataTypes]: (options.metadataTypes ?? instance[_global_js__WEBPACK_IMPORTED_MODULE_0__.metadataTypes]) || [
        "icy",
      ],
      [_global_js__WEBPACK_IMPORTED_MODULE_0__.hasIcy]: (
        (options.metadataTypes ?? instance[_global_js__WEBPACK_IMPORTED_MODULE_0__.metadataTypes]) || ["icy"]
      ).includes("icy"),
      [_global_js__WEBPACK_IMPORTED_MODULE_0__.enableLogging]:
        options.enableLogging ?? instance[_global_js__WEBPACK_IMPORTED_MODULE_0__.enableLogging] ?? false,
      [_global_js__WEBPACK_IMPORTED_MODULE_0__.enableCodecUpdate]: Boolean(
        options.enableCodecUpdate ??
          instance[_global_js__WEBPACK_IMPORTED_MODULE_0__.enableCodecUpdate] ??
          options.onCodecUpdate
      ),
      [_global_js__WEBPACK_IMPORTED_MODULE_0__.retryDelayRate]:
        options.retryDelayRate ?? instance[_global_js__WEBPACK_IMPORTED_MODULE_0__.retryDelayRate] ?? 0.1,
      [_global_js__WEBPACK_IMPORTED_MODULE_0__.retryDelayMin]: options.retryDelayMin ?? instance[_global_js__WEBPACK_IMPORTED_MODULE_0__.retryDelayMin] ?? 0.5,
      [_global_js__WEBPACK_IMPORTED_MODULE_0__.retryDelayMax]: options.retryDelayMax ?? instance[_global_js__WEBPACK_IMPORTED_MODULE_0__.retryDelayMax] ?? 2,
      [_global_js__WEBPACK_IMPORTED_MODULE_0__.retryTimeout]: options.retryTimeout ?? instance[_global_js__WEBPACK_IMPORTED_MODULE_0__.retryTimeout] ?? 30,
      [_global_js__WEBPACK_IMPORTED_MODULE_0__.playbackMethod]:
        (options.playbackMethod ?? instance[_global_js__WEBPACK_IMPORTED_MODULE_0__.playbackMethod]) || "mediasource",
    };
  }

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
   * @callback options.onRetryTimeout Called when connections attempts have timed out
   * @callback options.onSwitch Called when a switch event is triggered
   * @callback options.onCodecUpdate Called when the audio codec information has changed
   */
  constructor(url, options = {}) {
    super();

    _global_js__WEBPACK_IMPORTED_MODULE_0__.p.set(this, {
      // options
      [_global_js__WEBPACK_IMPORTED_MODULE_0__.endpoint]: url,
      [_global_js__WEBPACK_IMPORTED_MODULE_0__.audioElement]: options.audioElement || new Audio(),
      ...IcecastMetadataPlayer.getDefaults(options),
      // callbacks
      [events]: {
        [_global_js__WEBPACK_IMPORTED_MODULE_0__.event.PLAY]: options.onPlay || _global_js__WEBPACK_IMPORTED_MODULE_0__.noOp,
        [_global_js__WEBPACK_IMPORTED_MODULE_0__.event.PLAY_READY]: _global_js__WEBPACK_IMPORTED_MODULE_0__.noOp,
        [_global_js__WEBPACK_IMPORTED_MODULE_0__.event.LOAD]: options.onLoad || _global_js__WEBPACK_IMPORTED_MODULE_0__.noOp,
        [_global_js__WEBPACK_IMPORTED_MODULE_0__.event.STREAM_START]: options.onStreamStart || _global_js__WEBPACK_IMPORTED_MODULE_0__.noOp,
        [_global_js__WEBPACK_IMPORTED_MODULE_0__.event.BUFFER]: options.onBuffer || _global_js__WEBPACK_IMPORTED_MODULE_0__.noOp,
        [_global_js__WEBPACK_IMPORTED_MODULE_0__.event.STREAM]: options.onStream || _global_js__WEBPACK_IMPORTED_MODULE_0__.noOp,
        [_global_js__WEBPACK_IMPORTED_MODULE_0__.event.STREAM_END]: options.onStreamEnd || _global_js__WEBPACK_IMPORTED_MODULE_0__.noOp,
        [_global_js__WEBPACK_IMPORTED_MODULE_0__.event.METADATA]: options.onMetadata || _global_js__WEBPACK_IMPORTED_MODULE_0__.noOp,
        [_global_js__WEBPACK_IMPORTED_MODULE_0__.event.METADATA_ENQUEUE]: options.onMetadataEnqueue || _global_js__WEBPACK_IMPORTED_MODULE_0__.noOp,
        [_global_js__WEBPACK_IMPORTED_MODULE_0__.event.CODEC_UPDATE]: options.onCodecUpdate || _global_js__WEBPACK_IMPORTED_MODULE_0__.noOp,
        [_global_js__WEBPACK_IMPORTED_MODULE_0__.event.STOP]: options.onStop || _global_js__WEBPACK_IMPORTED_MODULE_0__.noOp,
        [_global_js__WEBPACK_IMPORTED_MODULE_0__.event.RETRY]: options.onRetry || _global_js__WEBPACK_IMPORTED_MODULE_0__.noOp,
        [_global_js__WEBPACK_IMPORTED_MODULE_0__.event.RETRY_TIMEOUT]: options.onRetryTimeout || _global_js__WEBPACK_IMPORTED_MODULE_0__.noOp,
        [_global_js__WEBPACK_IMPORTED_MODULE_0__.event.SWITCH]: options.onSwitch || _global_js__WEBPACK_IMPORTED_MODULE_0__.noOp,
        [_global_js__WEBPACK_IMPORTED_MODULE_0__.event.WARN]: (...messages) => {
          this[_global_js__WEBPACK_IMPORTED_MODULE_0__.logError](console.warn, options.onWarn, messages);
        },
        [_global_js__WEBPACK_IMPORTED_MODULE_0__.event.ERROR]: (...messages) => {
          this[_global_js__WEBPACK_IMPORTED_MODULE_0__.logError](console.error, options.onError, messages);
        },
      },
      // variables
      [endPlayback]: () => {
        clearTimeout(_global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[retryTimeoutId]);
        this.removeEventListener(_global_js__WEBPACK_IMPORTED_MODULE_0__.event.STREAM_START, _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[endPlayback]);
        _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_0__.audioElement].removeEventListener(
          "waiting",
          _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[onAudioWaiting]
        );

        try {
          _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_0__.audioElement].pause();
        } catch (e) {
          _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[onAudioError](e);
        }

        try {
          _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[playerResetPromise] = _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)
            [playerFactory].player.end();
        } catch {}
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
          1: " MEDIA_ERR_ABORTED The fetching of the associated resource was aborted by the user's request.",
          2: " MEDIA_ERR_NETWORK Some kind of network error occurred which prevented the media from being successfully fetched, despite having previously been available.",
          3: " MEDIA_ERR_DECODE Despite having previously been determined to be usable, an error occurred while trying to decode the media resource, resulting in an error.",
          4: " MEDIA_ERR_SRC_NOT_SUPPORTED The associated resource or media provider object (such as a MediaStream) has been found to be unsuitable.",
          5: " MEDIA_ERR_ENCRYPTED",
        };

        const error = e?.target?.error || e;

        if (this.state !== _global_js__WEBPACK_IMPORTED_MODULE_0__.state.RETRYING) {
          this[_global_js__WEBPACK_IMPORTED_MODULE_0__.fireEvent](
            _global_js__WEBPACK_IMPORTED_MODULE_0__.event.ERROR,
            "The audio element encountered an error." +
              (errors[error?.code] || ""),
            error
          );

          this.stop();
        } else {
          _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[endPlayback]();
        }
      },
      [onPlayReady]: () => {
        const audio = _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_0__.audioElement];

        if (
          this.state === _global_js__WEBPACK_IMPORTED_MODULE_0__.state.LOADING ||
          (!audio.loop &&
            this.state !== _global_js__WEBPACK_IMPORTED_MODULE_0__.state.STOPPING &&
            this.state !== _global_js__WEBPACK_IMPORTED_MODULE_0__.state.STOPPED)
        ) {
          audio
            .play()
            .then(() => {
              this[_global_js__WEBPACK_IMPORTED_MODULE_0__.playerState] = _global_js__WEBPACK_IMPORTED_MODULE_0__.state.PLAYING;
            })
            .catch((e) => {
              _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[onAudioError](e);
            });
        }
      },
      [stopPlayback]: _global_js__WEBPACK_IMPORTED_MODULE_0__.noOp,
    });

    this[_global_js__WEBPACK_IMPORTED_MODULE_0__.attachAudioElement]();
    this[_global_js__WEBPACK_IMPORTED_MODULE_0__.playerState] = _global_js__WEBPACK_IMPORTED_MODULE_0__.state.STOPPED;

    _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[playerFactory] = new _PlayerFactory_js__WEBPACK_IMPORTED_MODULE_2__["default"](this);
  }

  /**
   * @description Checks for MediaSource, WebAudio, and HTML5 support for a given codec
   * @param {string} type Codec / mime-type to check
   * @returns {mediasource: string, webaudio: string, html5: string} Object indicating if the codec is supported by the playback method
   */
  static canPlayType(type) {
    return _PlayerFactory_js__WEBPACK_IMPORTED_MODULE_2__["default"].canPlayType(type);
  }

  /**
   * @returns {HTMLAudioElement} The audio element associated with this instance
   */
  get audioElement() {
    return _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_0__.audioElement];
  }

  /**
   * @returns {number} The ICY metadata interval in number of bytes for this instance
   */
  get icyMetaInt() {
    return _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[playerFactory].icyMetaInt;
  }

  /**
   * @returns {Array<Metadata>} Array of enqueued metadata objects in FILO order
   */
  get metadataQueue() {
    return _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[playerFactory].player.metadataQueue;
  }

  /**
   * @returns {string} The current state ("loading", "playing", "stopping", "stopped", "retrying", "switching")
   */
  get state() {
    return _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_0__.playerState];
  }

  /**
   * @returns {string} The playback method ("mediasource", "webaudio", "html5")
   */
  get playbackMethod() {
    return _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[playerFactory].playbackMethod;
  }

  set [_global_js__WEBPACK_IMPORTED_MODULE_0__.playerState](_state) {
    this.dispatchEvent(new CustomEvent(_state));
    _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_0__.playerState] = _state;
  }

  [_global_js__WEBPACK_IMPORTED_MODULE_0__.attachAudioElement]() {
    // audio events
    const audio = _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_0__.audioElement];
    audio.addEventListener("pause", _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[onAudioPause]);
    audio.addEventListener("play", _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[onAudioPlay]);
    audio.addEventListener("error", _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[onAudioError]);

    this.addEventListener(_global_js__WEBPACK_IMPORTED_MODULE_0__.event.PLAY_READY, _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[onPlayReady]);
  }

  /**
   * @description Remove event listeners from the audio element and this instance and stops playback
   */
  async detachAudioElement() {
    const audio = _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_0__.audioElement];
    audio.removeEventListener("pause", _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[onAudioPause]);
    audio.removeEventListener("play", _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[onAudioPlay]);
    audio.removeEventListener("error", _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[onAudioError]);

    this.removeEventListener(_global_js__WEBPACK_IMPORTED_MODULE_0__.event.PLAY_READY, _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[onPlayReady]);
    await this.stop();
  }

  /**
   * @description Plays the Icecast stream
   * @async Resolves when the audio element is playing
   */
  async play() {
    if (this.state === _global_js__WEBPACK_IMPORTED_MODULE_0__.state.STOPPED) {
      _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_0__.abortController] = new AbortController();
      this[_global_js__WEBPACK_IMPORTED_MODULE_0__.playerState] = _global_js__WEBPACK_IMPORTED_MODULE_0__.state.LOADING;
      this[_global_js__WEBPACK_IMPORTED_MODULE_0__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_0__.event.LOAD);

      // prettier-ignore
      const tryFetching = async () =>
        _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[playerFactory].playStream()
          .then(() => {
            if (this.state === _global_js__WEBPACK_IMPORTED_MODULE_0__.state.SWITCHING) {
              this[_global_js__WEBPACK_IMPORTED_MODULE_0__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_0__.event.SWITCH);
              return tryFetching();
            }
          })
          .catch(async (e) => {
            if (e && e.name !== "AbortError") {
              if (await this[_global_js__WEBPACK_IMPORTED_MODULE_0__.shouldRetry](e)) {
                this[_global_js__WEBPACK_IMPORTED_MODULE_0__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_0__.event.RETRY);
                return tryFetching();
              }

              _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_0__.abortController].abort(); // stop fetch if is wasn't aborted

              if (
                _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_0__.playerState] !== _global_js__WEBPACK_IMPORTED_MODULE_0__.state.STOPPING &&
                _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_0__.playerState] !== _global_js__WEBPACK_IMPORTED_MODULE_0__.state.STOPPED
              ) {
                this[_global_js__WEBPACK_IMPORTED_MODULE_0__.fireEvent](
                  _global_js__WEBPACK_IMPORTED_MODULE_0__.event.ERROR,
                  e.message.match(/network|fetch|offline|codec/i) ? e : e.stack,
                  e
                );
              }
            }
          });

      new Promise((resolve, reject) => {
        // stop any pending playback operation when stop is called
        _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[stopPlayback] = reject;

        tryFetching().then(resolve);
      })
        .catch((e) => {
          if (this.state !== _global_js__WEBPACK_IMPORTED_MODULE_0__.state.STOPPING) throw e;
        })
        .finally(() => {
          _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[endPlayback]();

          this[_global_js__WEBPACK_IMPORTED_MODULE_0__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_0__.event.STOP);
          this[_global_js__WEBPACK_IMPORTED_MODULE_0__.playerState] = _global_js__WEBPACK_IMPORTED_MODULE_0__.state.STOPPED;
        });

      await new Promise((resolve) => {
        this.addEventListener(_global_js__WEBPACK_IMPORTED_MODULE_0__.event.PLAY, resolve, { once: true });
      });
    }
  }

  /**
   * @description Stops playing the Icecast stream
   * @async Resolves when the icecast stream has stopped
   */
  async stop() {
    if (this.state !== _global_js__WEBPACK_IMPORTED_MODULE_0__.state.STOPPED && this.state !== _global_js__WEBPACK_IMPORTED_MODULE_0__.state.STOPPING) {
      this[_global_js__WEBPACK_IMPORTED_MODULE_0__.playerState] = _global_js__WEBPACK_IMPORTED_MODULE_0__.state.STOPPING;
      _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_0__.abortController].abort();
      _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[stopPlayback]();

      await new Promise((resolve) => {
        this.addEventListener(_global_js__WEBPACK_IMPORTED_MODULE_0__.event.STOP, resolve, { once: true });
      });
    }
  }

  /**
   * @description Switches the Icecast stream endpoint during playback
   * @async Resolves when playback begins from the new source
   */
  async switchEndpoint(newEndpoint, newOptions) {
    if (this.state !== _global_js__WEBPACK_IMPORTED_MODULE_0__.state.STOPPED && this.state !== _global_js__WEBPACK_IMPORTED_MODULE_0__.state.STOPPING) {
      const instance = _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this);
      Object.assign(instance, {
        [_global_js__WEBPACK_IMPORTED_MODULE_0__.endpoint]: newEndpoint,
        ...IcecastMetadataPlayer.getDefaults(newOptions, instance),
      });

      return instance[playerFactory].switchStream();
    }
  }

  async [_global_js__WEBPACK_IMPORTED_MODULE_0__.shouldRetry](error) {
    if (_global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_0__.retryTimeout] === 0) return false;

    if (_global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_0__.playerState] === _global_js__WEBPACK_IMPORTED_MODULE_0__.state.RETRYING) {
      // wait for retry interval
      await new Promise((resolve) => {
        this.addEventListener(_global_js__WEBPACK_IMPORTED_MODULE_0__.state.STOPPING, resolve, { once: true });

        const delay = Math.min(
          _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_0__.retryDelayMin] *
            1000 *
            (_global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_0__.retryDelayRate] + 1) ** _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[retryAttempt]++,
          _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_0__.retryDelayMax] * 1000
        ); // exponential backoff

        setTimeout(() => {
          this.removeEventListener(_global_js__WEBPACK_IMPORTED_MODULE_0__.state.STOPPING, resolve);
          resolve();
        }, delay + delay * 0.3 * Math.random()); // jitter
      });

      // ensure the retry hasn't been cancelled while waiting
      return _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_0__.playerState] === _global_js__WEBPACK_IMPORTED_MODULE_0__.state.RETRYING;
    }

    if (
      _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_0__.playerState] !== _global_js__WEBPACK_IMPORTED_MODULE_0__.state.STOPPING &&
      _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_0__.playerState] !== _global_js__WEBPACK_IMPORTED_MODULE_0__.state.STOPPED &&
      (error.message.match(/network|fetch|offline|Error in body stream/i) ||
        error.name === "HTTP Response Error")
    ) {
      this[_global_js__WEBPACK_IMPORTED_MODULE_0__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_0__.event.ERROR, error.name, error);
      this[_global_js__WEBPACK_IMPORTED_MODULE_0__.playerState] = _global_js__WEBPACK_IMPORTED_MODULE_0__.state.RETRYING;

      if (_global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_0__.hasIcy]) {
        this[_global_js__WEBPACK_IMPORTED_MODULE_0__.fireEvent](
          _global_js__WEBPACK_IMPORTED_MODULE_0__.event.WARN,
          "This stream was requested with ICY metadata.",
          'If there is a CORS preflight failure, try removing "icy" from the metadataTypes option.',
          "See https://github.com/eshaz/icecast-metadata-js#cors for more details."
        );
      }

      const audioWaiting = new Promise((resolve) => {
        _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[onAudioWaiting] = resolve;
        _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_0__.audioElement].addEventListener(
          "waiting",
          _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[onAudioWaiting],
          {
            once: true,
          }
        );
      });

      // wait for whichever is longer, audio element waiting or retry timeout
      _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[retryTimeoutId] = setTimeout(() => {
        audioWaiting.then(() => {
          if (_global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_0__.playerState] === _global_js__WEBPACK_IMPORTED_MODULE_0__.state.RETRYING) {
            this[_global_js__WEBPACK_IMPORTED_MODULE_0__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_0__.event.RETRY_TIMEOUT);
            this.stop();
          }
        });
      }, _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_0__.retryTimeout] * 1000);

      _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[retryAttempt] = 0;
      return true;
    }

    return false;
  }

  [_global_js__WEBPACK_IMPORTED_MODULE_0__.fireEvent](event, ...args) {
    this.dispatchEvent(new CustomEvent(event, { detail: args }));
    _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[events][event](...args);
  }

  [_global_js__WEBPACK_IMPORTED_MODULE_0__.logError](consoleFunction, callback, messages) {
    if (_global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this)[_global_js__WEBPACK_IMPORTED_MODULE_0__.enableLogging]) {
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
  constructor(icecast) {
    const instanceVariables = _global_js__WEBPACK_IMPORTED_MODULE_2__.p.get(icecast);

    this._icecast = icecast;
    this._audioElement = instanceVariables[_global_js__WEBPACK_IMPORTED_MODULE_2__.audioElement];
    this._enableLogging = instanceVariables[_global_js__WEBPACK_IMPORTED_MODULE_2__.enableLogging];
    this._enableCodecUpdate = instanceVariables[_global_js__WEBPACK_IMPORTED_MODULE_2__.enableCodecUpdate];

    this._playbackMethod = "";

    this._newMetadataQueues();
    this._player = new _players_Player_js__WEBPACK_IMPORTED_MODULE_3__["default"](this._icecast);
    this._player.icecastMetadataQueue = this._icecastMetadataQueue;
    this._player.codecUpdateQueue = this._codecUpdateQueue;
    this._player.enablePlayButton(PlayerFactory.supportedPlaybackMethods);

    this._unprocessedFrames = [];
    this._codecParser = undefined;
    this._inputMimeType = "";
    this._codec = "";

    this._syncPromise = Promise.resolve();
    this._syncCancel = _global_js__WEBPACK_IMPORTED_MODULE_2__.noOp;
  }

  static get supportedPlaybackMethods() {
    return [_players_MediaSourcePlayer_js__WEBPACK_IMPORTED_MODULE_5__["default"], _players_WebAudioPlayer_js__WEBPACK_IMPORTED_MODULE_6__["default"], _players_HTML5Player_js__WEBPACK_IMPORTED_MODULE_4__["default"]].map((player) =>
      player.isSupported ? player.name : ""
    );
  }

  static canPlayType(type) {
    return {
      mediasource: _players_MediaSourcePlayer_js__WEBPACK_IMPORTED_MODULE_5__["default"].canPlayType(type),
      html5: _players_HTML5Player_js__WEBPACK_IMPORTED_MODULE_4__["default"].canPlayType(type),
      webaudio: _players_WebAudioPlayer_js__WEBPACK_IMPORTED_MODULE_6__["default"].canPlayType(type),
    };
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
    return this.fetchStream()
      .then(async (res) => {
        this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_2__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_2__.event.STREAM_START);

        return this.readIcecastResponse(res).finally(() => {
          this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_2__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_2__.event.STREAM_END);
        });
      })
      .catch((e) => {
        if (this._icecast.state !== _global_js__WEBPACK_IMPORTED_MODULE_2__.state.SWITCHING) throw e;
      });
  }

  async switchStream() {
    if (this._icecast.state !== _global_js__WEBPACK_IMPORTED_MODULE_2__.state.PLAYING) {
      this._syncCancel();
      await this._syncPromise;
    }

    const instance = _global_js__WEBPACK_IMPORTED_MODULE_2__.p.get(this._icecast);

    instance[_global_js__WEBPACK_IMPORTED_MODULE_2__.playerState] = _global_js__WEBPACK_IMPORTED_MODULE_2__.state.SWITCHING;
    instance[_global_js__WEBPACK_IMPORTED_MODULE_2__.abortController].abort();
    instance[_global_js__WEBPACK_IMPORTED_MODULE_2__.abortController] = new AbortController();
  }

  async fetchStream() {
    const instanceVariables = _global_js__WEBPACK_IMPORTED_MODULE_2__.p.get(this._icecast);
    this._endpoint = instanceVariables[_global_js__WEBPACK_IMPORTED_MODULE_2__.endpoint];

    const res = await fetch(this._endpoint, {
      method: "GET",
      headers: instanceVariables[_global_js__WEBPACK_IMPORTED_MODULE_2__.hasIcy] ? { "Icy-MetaData": 1 } : {},
      signal: instanceVariables[_global_js__WEBPACK_IMPORTED_MODULE_2__.abortController].signal,
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
    const instanceVariables = _global_js__WEBPACK_IMPORTED_MODULE_2__.p.get(this._icecast);

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
      metadataTypes: instanceVariables[_global_js__WEBPACK_IMPORTED_MODULE_2__.metadataTypes],
      icyCharacterEncoding: instanceVariables[_global_js__WEBPACK_IMPORTED_MODULE_2__.icyCharacterEncoding],
      icyDetectionTimeout: instanceVariables[_global_js__WEBPACK_IMPORTED_MODULE_2__.icyDetectionTimeout],
      icyMetaInt: instanceVariables[_global_js__WEBPACK_IMPORTED_MODULE_2__.icyMetaInt],
    });

    const icecastPromise = this._icecastReadableStream.startReading();
    const codec = await codecPromise;

    if (!this._player.isAudioPlayer) {
      [this._player, this._playbackMethod] = this._buildPlayer(
        inputMimeType,
        codec
      );
    }

    if (this._player.syncState === _global_js__WEBPACK_IMPORTED_MODULE_2__.SYNCED) {
      this._player.start();
    } else {
      await this._syncPlayer(inputMimeType, codec);
    }

    await icecastPromise;
  }

  async _syncPlayer(inputMimeType, codec) {
    let delayTimeoutId,
      canceled = false,
      playerStarted = false,
      complete;

    const oldPlayer = this._player;
    const oldIcecastMetadataQueue = this._player.icecastMetadataQueue;
    const oldCodecUpdateQueue = this._player.codecUpdateQueue;

    this._newMetadataQueues();
    // intercept all new metadata updates
    oldPlayer.icecastMetadataQueue = this._icecastMetadataQueue;
    oldPlayer.codecUpdateQueue = this._codecUpdateQueue;

    const startNewPlayer = () => {
      playerStarted = true;
      if (
        this._icecast.state !== _global_js__WEBPACK_IMPORTED_MODULE_2__.state.STOPPING ||
        this._icecast.state !== _global_js__WEBPACK_IMPORTED_MODULE_2__.state.STOPPED
      ) {
        oldPlayer.end();
        this._player
          .start(Math.max(0, oldPlayer.syncDelay / 1000))
          .then(complete);
      }
    };

    this._syncCancel = () => {
      canceled = true;

      this._icecastMetadataQueue.purgeMetadataQueue();
      this._codecUpdateQueue.purgeMetadataQueue();

      this._player.icecastMetadataQueue = oldIcecastMetadataQueue;
      this._player.codecUpdateQueue = oldCodecUpdateQueue;

      if (delayTimeoutId !== undefined && !playerStarted) {
        clearTimeout(delayTimeoutId);
        startNewPlayer();
      }
    };

    const handleSyncEvent = () => {
      return this._player.syncStateUpdate.then((syncState) => {
        if (canceled) complete();
        else
          switch (syncState) {
            case _global_js__WEBPACK_IMPORTED_MODULE_2__.SYNCING:
              return handleSyncEvent();
            case _global_js__WEBPACK_IMPORTED_MODULE_2__.SYNCED: // synced on crc32 hashes
              // put old queues back since audio data is crc synced
              this._icecastMetadataQueue.purgeMetadataQueue();
              this._codecUpdateQueue.purgeMetadataQueue();
              this._player.icecastMetadataQueue = oldIcecastMetadataQueue;
              this._player.codecUpdateQueue = oldCodecUpdateQueue;

              if (
                this._icecast.state !== _global_js__WEBPACK_IMPORTED_MODULE_2__.state.STOPPING ||
                this._icecast.state !== _global_js__WEBPACK_IMPORTED_MODULE_2__.state.STOPPED
              )
                this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_2__.playerState] = _global_js__WEBPACK_IMPORTED_MODULE_2__.state.PLAYING;

              complete();
              break;
            case _global_js__WEBPACK_IMPORTED_MODULE_2__.PCM_SYNCED:
            case _global_js__WEBPACK_IMPORTED_MODULE_2__.NOT_SYNCED:
              // put old queues back so they can be purged when the player is ended
              oldPlayer.icecastMetadataQueue = oldIcecastMetadataQueue;
              oldPlayer.codecUpdateQueue = oldCodecUpdateQueue;

              [this._player, this._playbackMethod] = this._buildPlayer(
                inputMimeType,
                codec
              );

              this._unprocessedFrames.push(...oldPlayer.syncFrames);

              // start player after delay or immediately
              delayTimeoutId = setTimeout(
                startNewPlayer,
                Math.max(oldPlayer.syncDelay, 0)
              );
          }
      });
    };

    let stoppingHandler;

    this._syncPromise = new Promise((resolve) => {
      complete = resolve;

      // cancel switch event if stop is called
      stoppingHandler = () => {
        this._syncCancel();
        complete();
      };

      this._icecast.addEventListener(_global_js__WEBPACK_IMPORTED_MODULE_2__.state.STOPPING, stoppingHandler, {
        once: true,
      });

      handleSyncEvent();
    }).finally(() => {
      this._icecast.removeEventListener(_global_js__WEBPACK_IMPORTED_MODULE_2__.state.STOPPING, stoppingHandler);
    });
  }

  _newMetadataQueues() {
    this._icecastMetadataQueue = new icecast_metadata_js__WEBPACK_IMPORTED_MODULE_0__.IcecastMetadataQueue({
      onMetadataUpdate: (...args) =>
        this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_2__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_2__.event.METADATA, ...args),
      onMetadataEnqueue: (...args) =>
        this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_2__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_2__.event.METADATA_ENQUEUE, ...args),
      paused: true,
    });

    this._codecUpdateQueue = new icecast_metadata_js__WEBPACK_IMPORTED_MODULE_0__.IcecastMetadataQueue({
      onMetadataUpdate: (...args) =>
        this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_2__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_2__.event.CODEC_UPDATE, ...args),
      paused: true,
    });
  }

  _buildPlayer(inputMimeType, codec) {
    // in order of preference
    const { [_global_js__WEBPACK_IMPORTED_MODULE_2__.p.get(this._icecast)[_global_js__WEBPACK_IMPORTED_MODULE_2__.playbackMethod]]: firstMethod, ...rest } = {
      mediasource: _players_MediaSourcePlayer_js__WEBPACK_IMPORTED_MODULE_5__["default"],
      webaudio: _players_WebAudioPlayer_js__WEBPACK_IMPORTED_MODULE_6__["default"],
      html5: _players_HTML5Player_js__WEBPACK_IMPORTED_MODULE_4__["default"],
    };

    let player, method;

    for (const Player of Object.values({ firstMethod, ...rest })) {
      const support = Player.canPlayType(`${inputMimeType};codecs="${codec}"`);

      if (support === "probably" || support === "maybe") {
        method = Player.name;
        player = new Player(this._icecast, inputMimeType, codec);
        player.icecastMetadataQueue = this._icecastMetadataQueue;
        player.codecUpdateQueue = this._codecUpdateQueue;
        break;
      }
    }

    if (!player) {
      throw new Error(
        `Your browser does not support this audio codec ${inputMimeType}${
          codec && `;codecs="${codec}"`
        }`
      );
    }

    return [player, method];
  }
}

// statically initialize audio context and start using a DOM event
if (_players_WebAudioPlayer_js__WEBPACK_IMPORTED_MODULE_6__["default"].isSupported) {
  const audioCtxErrorHandler = (e) => {
    console.error(
      "icecast-metadata-js",
      "Failed to start the AudioContext. WebAudio playback will not be possible.",
      e
    );
  };

  // hack for iOS Audio element controls support
  // iOS will only enable AudioContext.resume() when called directly from a UI event
  // https://stackoverflow.com/questions/57510426
  const events = ["touchstart", "touchend", "mousedown", "keydown"];

  const unlock = () => {
    events.forEach((e) => document.removeEventListener(e, unlock));

    const audioCtx = new (window.AudioContext || window.webkitAudioContext)({
      latencyHint: "playback",
    });

    audioCtx
      .resume()
      .then(() => {
        // hack for iOS to continue playing while locked
        audioCtx
          .createScriptProcessor(2 ** 14, 2, 2)
          .connect(audioCtx.destination);

        audioCtx.onstatechange = () => {
          if (audioCtx.state !== "running")
            audioCtx.resume().catch(audioCtxErrorHandler);
        };
      })
      .catch(audioCtxErrorHandler);

    PlayerFactory.constructor.audioContext = audioCtx;
  };

  events.forEach((e) => document.addEventListener(e, unlock));
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
/* harmony export */   "NOT_SYNCED": () => (/* binding */ NOT_SYNCED),
/* harmony export */   "PCM_SYNCED": () => (/* binding */ PCM_SYNCED),
/* harmony export */   "SYNCED": () => (/* binding */ SYNCED),
/* harmony export */   "SYNCING": () => (/* binding */ SYNCING),
/* harmony export */   "abortController": () => (/* binding */ abortController),
/* harmony export */   "attachAudioElement": () => (/* binding */ attachAudioElement),
/* harmony export */   "audioElement": () => (/* binding */ audioElement),
/* harmony export */   "bufferLength": () => (/* binding */ bufferLength),
/* harmony export */   "concatBuffers": () => (/* binding */ concatBuffers),
/* harmony export */   "enableCodecUpdate": () => (/* binding */ enableCodecUpdate),
/* harmony export */   "enableLogging": () => (/* binding */ enableLogging),
/* harmony export */   "endpoint": () => (/* binding */ endpoint),
/* harmony export */   "event": () => (/* binding */ event),
/* harmony export */   "fireEvent": () => (/* binding */ fireEvent),
/* harmony export */   "hasIcy": () => (/* binding */ hasIcy),
/* harmony export */   "icyCharacterEncoding": () => (/* binding */ icyCharacterEncoding),
/* harmony export */   "icyDetectionTimeout": () => (/* binding */ icyDetectionTimeout),
/* harmony export */   "icyMetaInt": () => (/* binding */ icyMetaInt),
/* harmony export */   "logError": () => (/* binding */ logError),
/* harmony export */   "metadataTypes": () => (/* binding */ metadataTypes),
/* harmony export */   "noOp": () => (/* binding */ noOp),
/* harmony export */   "p": () => (/* binding */ p),
/* harmony export */   "playbackMethod": () => (/* binding */ playbackMethod),
/* harmony export */   "playerState": () => (/* binding */ playerState),
/* harmony export */   "retryDelayMax": () => (/* binding */ retryDelayMax),
/* harmony export */   "retryDelayMin": () => (/* binding */ retryDelayMin),
/* harmony export */   "retryDelayRate": () => (/* binding */ retryDelayRate),
/* harmony export */   "retryTimeout": () => (/* binding */ retryTimeout),
/* harmony export */   "shouldRetry": () => (/* binding */ shouldRetry),
/* harmony export */   "state": () => (/* binding */ state)
/* harmony export */ });
const noOp = () => {};
const p = new WeakMap();

const state = {
  LOADING: "loading",
  PLAYING: "playing",
  STOPPING: "stopping",
  STOPPED: "stopped",
  RETRYING: "retrying",
  SWITCHING: "switching",
};

const event = {
  BUFFER: "buffer",
  PLAY: "play",
  PLAY_READY: "playready", // internal
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
  SWITCH: "switch",
  WARN: "warn",
  ERROR: "error",
};

// options
const endpoint = Symbol();
const metadataTypes = Symbol();
const playbackMethod = Symbol();
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
const abortController = Symbol();
const playerState = Symbol();

// sync state
const SYNCED = Symbol("synced");
const SYNCING = Symbol("syncing");
const PCM_SYNCED = Symbol("pcm_synced");
const NOT_SYNCED = Symbol("not_synced");

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

    this._icecast.addEventListener(_global_js__WEBPACK_IMPORTED_MODULE_0__.event.STREAM_START, () => {
      if (!this._playReady) this.end();
    });

    this._init();
  }

  static canPlayType(mimeType) {
    if (!HTML5Player.isSupported) return "";

    return super.canPlayType((type) => new Audio().canPlayType(type), mimeType);
  }

  static get isSupported() {
    return Boolean(window.Audio);
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

  async _init() {
    super._init();

    this._frame = null;
    this._audioLoadedTimestamp = 0;
    this._metadataTimestampOffset = 0;
    this._playReady = false;
  }

  async start(metadataOffset) {
    const playing = super.start(metadataOffset);

    this._metadataLoadedTimestamp = performance.now();
    this._audioElement.src = null;
    this._audioElement.srcObject = null;
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

          this._startMetadataQueues();
          this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_0__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_0__.event.PLAY);
        },
        { once: true }
      );

      this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_0__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_0__.event.PLAY_READY);
      this._playReady = true;
    }

    await playing;
  }

  async end() {
    super.end();

    this._audioElement.src = null;
    this._audioElement.srcObject = null;

    this._init();
  }

  onStream(frames) {
    this._frame = frames[frames.length - 1] || this._frame;

    if (this.syncState === _global_js__WEBPACK_IMPORTED_MODULE_0__.NOT_SYNCED) {
      // syncing not implemented in html5 playback method
      this.syncState = _global_js__WEBPACK_IMPORTED_MODULE_0__.NOT_SYNCED;
    }
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





const BUFFER = 5; // seconds of audio to store in SourceBuffer
const BUFFER_INTERVAL = 5; // seconds before removing from SourceBuffer

class MediaSourcePlayer extends _Player_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(icecast, inputMimeType, codec) {
    super(icecast, inputMimeType, codec);

    this._init();
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

    if (!MediaSourcePlayer.isSupported) return "";

    if (MediaSource.isTypeSupported(mimeType)) return "probably";

    return super.canPlayType(MediaSource.isTypeSupported, mimeType, mapping);
  }

  static get isSupported() {
    return Boolean(window.MediaSource);
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

  async _init() {
    super._init();

    this._sourceBufferQueue = [];
    this._playReady = false;

    this._mediaSourcePromise = this._prepareMediaSource(
      this._inputMimeType,
      this._codec
    );

    await this._mediaSourcePromise;
  }

  async start(metadataOffset) {
    const playing = super.start(metadataOffset);
    await this._attachMediaSource();
    await playing;
  }

  async end() {
    super.end();

    await this._init();
  }

  async onStream(frames) {
    frames = frames.flatMap((frame) => frame.codecFrames || frame);

    if (frames.length) {
      switch (this.syncState) {
        case _global_js__WEBPACK_IMPORTED_MODULE_1__.NOT_SYNCED:
          this._frameQueue.initSync();
          this.syncState = _global_js__WEBPACK_IMPORTED_MODULE_1__.SYNCING;
        case _global_js__WEBPACK_IMPORTED_MODULE_1__.SYNCING:
          [this.syncFrames, this.syncState, this.syncDelay] =
            await this._frameQueue.sync(frames);
          frames = this.syncFrames;
      }

      switch (this.syncState) {
        case _global_js__WEBPACK_IMPORTED_MODULE_1__.PCM_SYNCED:
          break;
        case _global_js__WEBPACK_IMPORTED_MODULE_1__.SYNCED:
          // when frames are present, we should already know the codec and have the mse audio mimetype determined
          await (
            await this._mediaSourcePromise
          )(frames); // wait for the source buffer to be created

          this._frameQueue.addAll(frames);
          break;
      }
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
          `Media Source Extensions API in your browser does not support ${inputMimeType} or ${wrapper.mimeType}.` +
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
      this._mediaSource.addEventListener("sourceopen", resolve, {
        once: true,
      });
    });

    this._sourceBufferRemoved = 0;
    this._mediaSource.addSourceBuffer(mimeType).mode = "sequence";
  }

  async _waitForSourceBuffer() {
    return new Promise((resolve) => {
      const sourceBuffer = this._mediaSource.sourceBuffers[0];

      if (!sourceBuffer.updating) {
        resolve();
      } else {
        sourceBuffer.addEventListener("updateend", resolve, {
          once: true,
        });
      }
    });
  }

  async _attachMediaSource() {
    this._audioElement.loop = false;
    this._audioElement.src = URL.createObjectURL(this._mediaSource);
    await this._mediaSourcePromise;
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
        while (this._sourceBufferQueue.length) {
          this._mediaSource.sourceBuffers[0].appendBuffer(
            this._sourceBufferQueue.shift()
          );
          await this._waitForSourceBuffer();
        }
      } catch (e) {
        if (e.name !== "QuotaExceededError") throw e;
      }

      if (!this._playReady) {
        if (this._bufferLength <= this.metadataTimestamp) {
          this._audioElement.addEventListener(
            "playing",
            () => {
              this._startMetadataQueues();
              this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_1__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_1__.event.PLAY);
            },
            { once: true }
          );
          this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_1__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_1__.event.PLAY_READY);
          this._playReady = true;
        } else {
          this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_1__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_1__.event.BUFFER, this.metadataTimestamp);
        }
      }

      if (
        this._audioElement.currentTime > BUFFER + this._bufferLength &&
        this._sourceBufferRemoved + BUFFER_INTERVAL * 1000 < performance.now()
      ) {
        this._sourceBufferRemoved = performance.now();
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
/* harmony import */ var _FrameQueue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FrameQueue.js */ "./node_modules/icecast-metadata-player/src/FrameQueue.js");



class Player {
  constructor(icecast, inputMimeType, codec) {
    this._icecast = icecast;
    this._inputMimeType = inputMimeType;
    this._codec = codec;

    const instanceVariables = _global_js__WEBPACK_IMPORTED_MODULE_0__.p.get(this._icecast);

    this._audioElement = instanceVariables[_global_js__WEBPACK_IMPORTED_MODULE_0__.audioElement];
    this._endpoint = instanceVariables[_global_js__WEBPACK_IMPORTED_MODULE_0__.endpoint];
    this._bufferLength = instanceVariables[_global_js__WEBPACK_IMPORTED_MODULE_0__.bufferLength];

    this._codecUpdateTimestamp = 0;
    this._codecUpdateOffset = 0;

    this._notSyncedHandler = () => {
      this.syncState = _global_js__WEBPACK_IMPORTED_MODULE_0__.NOT_SYNCED;
    };
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

  enablePlayButton(supportedSources) {
    // set the audio element an empty source to enable the play button
    this._audioElement.removeAttribute("src");
    this._audioElement.srcObject = null;

    if (supportedSources.includes("mediasource")) {
      // MediaSourcePlayer
      this._audioElement.src = URL.createObjectURL(new MediaSource());
    } else if (supportedSources.includes("webaudio")) {
      this._mediaStream = new MediaStream();
      this._audioElement.srcObject = this._mediaStream;
    } else if (supportedSources.includes("html5")) {
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

  get syncStateUpdate() {
    return this._syncStatePromise;
  }

  get syncState() {
    return this._syncState;
  }

  set syncState(newState) {
    this._syncState = newState;

    if (this._syncStateResolve) this._syncStateResolve(newState);

    this._syncStatePromise = new Promise((resolve) => {
      this._syncStateResolve = resolve;
    });
  }

  /**
   * @abstract
   */
  get isSupported() {
    return false;
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

  get icecastMetadataQueue() {
    return this._icecastMetadataQueue;
  }

  set icecastMetadataQueue(icecastMetadataQueue) {
    this._icecastMetadataQueue = icecastMetadataQueue;
  }

  get codecUpdateQueue() {
    return this._codecUpdateQueue;
  }

  set codecUpdateQueue(codecUpdateQueue) {
    this._codecUpdateQueue = codecUpdateQueue;
  }

  get metadataQueue() {
    return this._icecastMetadataQueue
      ? this._icecastMetadataQueue.metadataQueue
      : [];
  }

  _startMetadataQueues() {
    this._icecastMetadataQueue.startQueue(this._metadataOffset);
    this._codecUpdateQueue.startQueue(this._metadataOffset);
  }

  /**
   * @abstract
   */
  async _init() {
    this.syncState = _global_js__WEBPACK_IMPORTED_MODULE_0__.SYNCED;
    this.syncFrames = [];
    this.syncDelay = null;
    this._frameQueue = new _FrameQueue_js__WEBPACK_IMPORTED_MODULE_1__["default"](this._icecast, this);
  }

  /**
   * @abstract
   */
  async start(metadataOffset) {
    this._metadataOffset = metadataOffset;

    [_global_js__WEBPACK_IMPORTED_MODULE_0__.event.RETRY, _global_js__WEBPACK_IMPORTED_MODULE_0__.event.SWITCH].forEach((e) =>
      this._icecast.addEventListener(e, this._notSyncedHandler)
    );

    let resolve;
    const playing = new Promise((r) => {
      resolve = r;
      [_global_js__WEBPACK_IMPORTED_MODULE_0__.state.PLAYING, _global_js__WEBPACK_IMPORTED_MODULE_0__.state.STOPPING].forEach((s) =>
        this._icecast.addEventListener(s, resolve, { once: true })
      );
    }).finally(() => {
      [_global_js__WEBPACK_IMPORTED_MODULE_0__.state.PLAYING, _global_js__WEBPACK_IMPORTED_MODULE_0__.state.STOPPING].forEach((s) =>
        this._icecast.removeEventListener(s, resolve)
      );
    });

    await playing;
  }

  /**
   * @abstract
   */
  async end() {
    [_global_js__WEBPACK_IMPORTED_MODULE_0__.event.RETRY, _global_js__WEBPACK_IMPORTED_MODULE_0__.event.SWITCH].forEach((e) =>
      this._icecast.removeEventListener(e, this._notSyncedHandler)
    );

    this._icecastMetadataQueue.purgeMetadataQueue();
    this._codecUpdateQueue.purgeMetadataQueue();
  }

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
  onCodecUpdate(metadata, updateTimestamp) {
    const currentTime = this.currentTime;

    // add previous offset when reconnecting
    if (updateTimestamp < currentTime)
      this._codecUpdateOffset += this._codecUpdateTimestamp;

    this._codecUpdateTimestamp = updateTimestamp;

    this._codecUpdateQueue.addMetadata(
      { metadata },
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
/* harmony import */ var _PlayerFactory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PlayerFactory.js */ "./node_modules/icecast-metadata-player/src/PlayerFactory.js");
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global.js */ "./node_modules/icecast-metadata-player/src/global.js");
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Player.js */ "./node_modules/icecast-metadata-player/src/players/Player.js");







class WebAudioPlayer extends _Player_js__WEBPACK_IMPORTED_MODULE_4__["default"] {
  constructor(icecast, inputMimeType, codec) {
    super(icecast, inputMimeType, codec);

    this._audioContext = _PlayerFactory_js__WEBPACK_IMPORTED_MODULE_2__["default"].constructor.audioContext;

    this._init();
  }

  static canPlayType(mimeType) {
    const mapping = {
      mpeg: ["audio/mpeg"],
      ogg: {
        opus: ['audio/ogg;codecs="opus"'],
      },
    };

    if (!WebAudioPlayer.isSupported) return "";

    return super.canPlayType(
      (codec) => codec === 'audio/ogg;codecs="opus"' || codec === "audio/mpeg",
      mimeType,
      mapping
    );
  }

  static get isSupported() {
    return Boolean(
      window.WebAssembly &&
        (window.AudioContext || window.webkitAudioContext) &&
        window.MediaStream
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
    return (performance.now() - this._playbackStartTime) / 1000 || 0;
  }

  async _init() {
    super._init();

    switch (this._codec) {
      case "mpeg":
        this._wasmDecoder = new mpg123_decoder__WEBPACK_IMPORTED_MODULE_1__.MPEGDecoderWebWorker();
        break;
      case "opus":
        this._wasmDecoder = new opus_decoder__WEBPACK_IMPORTED_MODULE_0__.OpusDecoderWebWorker();
        break;
    }
    this._wasmReady = this._wasmDecoder.ready;

    this._currentTime = 0;
    this._decodedSample = 0;
    this._decodedSampleOffset = 0;
    this._sampleRate = 0;
    this._playbackStartTime = undefined;
    this._playReady = false;

    this._playPromise = new Promise((resolve) => {
      this._playStart = resolve;
    });
  }

  async start(metadataOffset) {
    const playing = super.start(metadataOffset);
    this._playStart();
    await playing;
  }

  async end() {
    super.end();

    if (this._wasmDecoder) {
      const decoder = this._wasmDecoder;
      decoder.ready.then(() => decoder.free());

      this._wasmDecoder = null;
    }

    if (this._mediaStream) {
      // disconnect the currently playing media stream
      this._mediaStream.disconnect();
      this._mediaStream = null;
    }

    this._audioElement.srcObject = new MediaStream();

    this._init();
  }

  async onStream(oggPages) {
    let frames = oggPages.flatMap((oggPage) => oggPage.codecFrames || oggPage);

    switch (this.syncState) {
      case _global_js__WEBPACK_IMPORTED_MODULE_3__.NOT_SYNCED:
        this._frameQueue.initSync();
        this.syncState = _global_js__WEBPACK_IMPORTED_MODULE_3__.SYNCING;
      case _global_js__WEBPACK_IMPORTED_MODULE_3__.SYNCING:
        [this.syncFrames, this.syncState, this.syncDelay] =
          await this._frameQueue.sync(frames);
        frames = this.syncFrames;
    }

    switch (this.syncState) {
      case _global_js__WEBPACK_IMPORTED_MODULE_3__.PCM_SYNCED:
        break;
      case _global_js__WEBPACK_IMPORTED_MODULE_3__.SYNCED:
        // when frames are present, we should already know the codec and have the mse audio mimetype determined
        if (frames.length) {
          this._currentTime = frames[frames.length - 1].totalDuration;

          this._decode(frames).then((decoded) => this._play(decoded));
        }

        this._frameQueue.addAll(frames);
        break;
    }
  }

  async _decode(frames) {
    await this._wasmReady;

    return this._wasmDecoder.decodeFrames(frames.map((f) => f.data));
  }

  async _play({ channelData, samplesDecoded, sampleRate }) {
    await this._playPromise;

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

      if (!this._playReady) {
        if (this._bufferLength <= this.metadataTimestamp) {
          this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_3__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_3__.event.PLAY_READY);
          this._playbackStartTime = performance.now();

          this._startMetadataQueues();
          this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_3__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_3__.event.PLAY);
          this._playReady = true;
        } else {
          this._icecast[_global_js__WEBPACK_IMPORTED_MODULE_3__.fireEvent](_global_js__WEBPACK_IMPORTED_MODULE_3__.event.BUFFER, this.metadataTimestamp);
        }
      }

      this._decodedSample += samplesDecoded;
    }
  }
}


/***/ }),

/***/ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/browser.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/browser.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IcecastMetadataQueue": () => (/* reexport safe */ _src_IcecastMetadataQueue_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "IcecastMetadataReader": () => (/* reexport safe */ _src_IcecastMetadataReader_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "IcecastReadableStream": () => (/* reexport safe */ _src_IcecastReadableStream_js__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _src_IcecastMetadataQueue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/IcecastMetadataQueue.js */ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/IcecastMetadataQueue.js");
/* harmony import */ var _src_IcecastMetadataReader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/IcecastMetadataReader.js */ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/IcecastMetadataReader.js");
/* harmony import */ var _src_IcecastReadableStream_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/IcecastReadableStream.js */ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/IcecastReadableStream.js");







/***/ }),

/***/ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/IcecastMetadataQueue.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/IcecastMetadataQueue.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IcecastMetadataQueue)
/* harmony export */ });
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


/***/ }),

/***/ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/IcecastMetadataReader.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/IcecastMetadataReader.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IcecastMetadataReader)
/* harmony export */ });
/* harmony import */ var _MetadataParser_MetadataParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MetadataParser/MetadataParser.js */ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/MetadataParser.js");
/* harmony import */ var _MetadataParser_IcyMetadataParser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MetadataParser/IcyMetadataParser.js */ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/IcyMetadataParser.js");
/* harmony import */ var _MetadataParser_OggMetadataParser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MetadataParser/OggMetadataParser.js */ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/OggMetadataParser.js");
/* harmony import */ var _MetadataParser_DualMetadataParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MetadataParser/DualMetadataParser.js */ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/DualMetadataParser.js");
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

    if (hasIcy && hasOgg) this._metadataParser = new _MetadataParser_DualMetadataParser_js__WEBPACK_IMPORTED_MODULE_3__["default"](rest);
    else if (hasOgg) this._metadataParser = new _MetadataParser_OggMetadataParser_js__WEBPACK_IMPORTED_MODULE_2__["default"](rest);
    else if (hasIcy) this._metadataParser = new _MetadataParser_IcyMetadataParser_js__WEBPACK_IMPORTED_MODULE_1__["default"](rest);
    else this._metadataParser = new _MetadataParser_MetadataParser_js__WEBPACK_IMPORTED_MODULE_0__["default"](rest);
  }

  /**
   * @description Parses an already decoded ICY metadata string into key value pairs.
   * @param {string} metadataString ICY formatted metadata string. (i.e. "StreamTitle='A Title';")
   * @returns {object} Parsed metadata key value pairs. (i.e. {StreamTitle: "A Title"})
   */
  static parseIcyMetadata(string) {
    return _MetadataParser_IcyMetadataParser_js__WEBPACK_IMPORTED_MODULE_1__["default"].parseIcyMetadata(string);
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


/***/ }),

/***/ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/IcecastReadableStream.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/IcecastReadableStream.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IcecastReadableStream)
/* harmony export */ });
/* harmony import */ var _IcecastMetadataReader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IcecastMetadataReader.js */ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/IcecastMetadataReader.js");
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
        icecast = new _IcecastMetadataReader_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DualMetadataParser)
/* harmony export */ });
/* harmony import */ var _IcyMetadataParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IcyMetadataParser.js */ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/IcyMetadataParser.js");
/* harmony import */ var _OggMetadataParser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OggMetadataParser.js */ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/OggMetadataParser.js");
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




/**
 * @description Parses ICY and OGG metadata from an Icecast stream
 * @protected
 * @see IcecastMetadataReader
 */

class DualMetadataParser {
  constructor(params) {
    const { onStream, ...rest } = params;
    this._oggMetadataParser = new _OggMetadataParser_js__WEBPACK_IMPORTED_MODULE_1__["default"](params);
    this._icyMetadataParser = new _IcyMetadataParser_js__WEBPACK_IMPORTED_MODULE_0__["default"](rest);
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


/***/ }),

/***/ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/IcyMetadataParser.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/IcyMetadataParser.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IcyMetadataParser)
/* harmony export */ });
/* harmony import */ var _MetadataParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MetadataParser.js */ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/MetadataParser.js");
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



/**
 * @description Parses ICY metadata from an Icecast stream
 * @protected
 * @see IcecastMetadataReader
 */

class IcyMetadataParser extends _MetadataParser_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    icyMetaInt,
    icyDetectionTimeout = 2000,
    icyCharacterEncoding = "utf-8",
    ...rest
  }) {
    super(rest);

    this._decoder = new globalThis.TextDecoder(icyCharacterEncoding);
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
      this._buffer = _MetadataParser_js__WEBPACK_IMPORTED_MODULE_0__["default"]._concatBuffers(
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


/***/ }),

/***/ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/MetadataParser.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/MetadataParser.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MetadataParser)
/* harmony export */ });
/* harmony import */ var _Stats_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stats.js */ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/Stats.js");
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
    this._stats = new _Stats_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

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


/***/ }),

/***/ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/OggMetadataParser.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/OggMetadataParser.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OggMetadataParser)
/* harmony export */ });
/* harmony import */ var _MetadataParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MetadataParser.js */ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/MetadataParser.js");
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



/**
 * @description Parses OGG metadata from an Icecast stream
 * @protected
 * @see IcecastMetadataReader
 */
class OggMetadataParser extends _MetadataParser_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(params) {
    super(params);

    this._decoder = new globalThis.TextDecoder("utf-8");
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


/***/ }),

/***/ "./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/Stats.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/icecast-metadata-stats/node_modules/icecast-metadata-js/src/MetadataParser/Stats.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Stats)
/* harmony export */ });
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

function EmscriptenWASM(WASMAudioDecoderCommon) {
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

if (!EmscriptenWASM.wasm) Object.defineProperty(EmscriptenWASM, "wasm", {get: () => String.raw`dynEncode0093¿ ÄUÃ8åbózæÁ®¦þõ#Ê4»K7ÝY¦ROW4=}ëTxÌVH6ö8=}8±ÚD½fTa±ÿUé±)ãüþ­.Ê@k_±þýYþ*âGù×I8jL¡/@FL1KX®ÉÑ/Ï= ª³»©þÃqpNuã&Á Á&óTp°)ó«Éô£³ºB¸k®ò[Ó©µ7¼%qQ"ÉSûãÝû´(>ÞY´¡æ{+Ä*Øã÷ÇÒ¶YÔ!ýÃ¿*õºvQn ¢¥£¹TïvÒ ¦&µïIì»K±:Î´L@k2ë©ëÔ(è×?4_Íñ[ñ\¹q[©¤Á¦þz
Ý yõ~{w&]Yaá Në?¯10òÿññðroq"È>~[iÝEÚE¨ý/»'%ÅÐjòÊî/§åßJü),8m©¯Î<0?*
¸¨²x¨QÿT^O\ÅÆÆÆ)ÙeºúøpÌaSÌ
7bNÙb{ìPîR×RëRßqQ÷"%Äyg+¤å~(ÑpáÅÕ¼
1%	Ú=}ãA'f,nÇ¼åº=}¥ %Fg7i,8ë´×èSÚÀåý8v3ìØýç0ü^êq÷Ì\­²Çãðg!×{/å\3¼¹êøµ?Pm(SÔÍêùÁ3bé2;Æ~Ó¾ê"å÷M1Ú^bf!l&åù-TÊT)gÝÅÅkd|p'á§ððN~$ßÛ$AÍ{³¶Å.#AqÈ91¶Þ­ÍâìÝcþe|¼n=}y¾¬Ð·VÆQÇmR{<FìÒ§¹NÚ
I9úEñÅ°éÙüÁ¾æüdïI:=Má,nª¡°eöQntTÖ=MÆ·Í[±ÙÑÛòÏY4l¥(XÒÈvÀæÙ¾Á>_.©ùFq5TÛIãEÓì3S,7ÞlßÖ\ÆNÜbôÖ÷L äQ ÝiÎ=}S°	bíg+ý×/Ç¨úÆV¯÷¡êªçÔ H6(ÿ
Jk!¶3ÐªÑ@=}£îíÑ8´ÊÄÒLb:4Ré	4ßüÀÞ¼JqÑ5ÐîJ÷­=}nMI(§ g[åÜQ8ÀÑ¢è)=}O;5'È?t;,­0Hµ^S$ãÒ¹Ç?÷]Â´MkQÛM }<Ü;3Ðì²¬ ?.Þ¼4µÜæ®òõ¬ìíE±Å÷4	¥YÈ,¼}¹}nÍ¢Øø#_'Ò/;ÄãZesð·}Æ¥U?ò¥ijÒ|*âù-å½ãâH­ÃÄ²ÂÿíÇØ¡¨<÷¥6ëßÞôÄÀnÉÒ\1ÍCT%Ëû/¸}6¸nk:¶WFÑùøîÞW
fâ^Ó|:x5W[Ý_zõSÃË4SK;ß%¯.úðátbºÈ8ùuü¬Çy?;ñzÅÐ3#Ï.¸ûddeÄ÷d\¿üYLìñ¶¼mÞ3xÂÀ=M_§ËgØ\ÛcëúkÎ8\Û6wa]±Õi6=}ÑÀÆ%=}ÑâÏ¬Dîñx('¦Ó~¼gFq©ùÚhVyLÞ»baUVÏ'ÅÄfè,t9*MáÅÝzÚâlÆ ¹N9±ÜM~Ëþ2½=MeþÅ÷i¸+÷Æ2,lú[Þ=Mcúí9ß)VDFqð6Í9!Âò:ÚD¬§[³·mÍ= ]óãû)6E'ÈÅ3z£C#²®w¡óB¹æ°÷ìÝÕôdÀâ&°:o×søÐ©óÿÎ9YLb®0U%wQ7yÀ:ËaÉÉÆS§ýoâVgëYq:/¹¿¼Ë/wÈ4¼³lÜÞ-057]¾V5e¬\é4¯°E%ûë«?äëm+¿ôé ~åo\Ä©3Zø9l«y¨©= XuKp!G´üË?¹"Tw½,í8=}¥ëjñ?ó ÄhÃè´è5ôU
X®%òH7½l®®^ÛõéÊuïù»ÊâQëö6b¿ylLÀ-^¥Etp û7ÍRº1Eja¼ÔÉEHl÷-%Ð,íÅÞYÐò:æ÷nïÝM y9EO/±~ýÓô«ã±7üàI)ßÅXé:¹¼ÚÏ+åUÂ1©Òvuë­ýV6ätOÞ]ë·i+aß>+:ãçKCÊÂ­5vO+Ì2ZÁ]æÑÊ*x= §x$<=MVFùø9PýEÅñi>¹èÑ= º8Ï|Kþp|A*à[\ÁóO(»SôCÇ%1VCMº²0YWpaz¿('þ$F/6¯N"¤x1RByf±úm³ð^,%ÿÀ<Ð¶0äkÞVÉz'úÃÌ	8Yïï¤Ï«¶¾ZýçÃðïÅËý]%¡qÙOq$y;pY«~k|«ÃÿÓ§ÌÝoj=MC»¥Á£PCÓéy¡¾o=MÜmktÞÛáûF5ç8d|^ÍÈ^ÔîcZB¸n%·ªøìôËJ±¹Z¨Gqe0(SeJ}XùîÈ6î³yé(+CÛUC]#÷½
²ñ½1x¿ÞÙ¸(ûo°ñ·]'EÙE[LO;×pßùìtË³7ÀÅ&áÆáÆ¶àá±*èãHóQuÎ85gSúÍé3õ:væÍùÀUûxn*]ÜáEbÍÇâ[mX8öÊ30ð~k×O5çýçÞ&RçëÕàQ)¨7Ù+':)Kx4F3¹ÏP	)ô¨
ú¸&¦ëÂèî= z¤;(CÛð»HÛÅ½ºÅêK1bè¿)Îys'êÝH¤°ËØî½G^"ì*¬}ÄX_]­ê*^,°±æÜ\¡Å÷J= Ü>Jª×0Ð÷J(GçÕõîì÷Õ¤Vû(oDqñª°6éÕIð³µðØraU_©ñ¹»äó ¢Ö»,>7quXÂ9æ{$ìã{¸Ñ2:Äj%}à)Ái¥dër×LºXó¿t§Ò]ð­U_d»úzùP¶P¢¨¡2-ªa 7åáÓ?»]ÞÈõÒ¤â%núZj¿6Ì­3Eþ¼!ÚZÌiY¯.WEjå)Pcëo½WN§&Èe9¹ DíB\fv.²¬¬.r0m=M

?µîö2¹´\kz ¼Ñ.8_=}eäx5' .ãùnRÈYSK$v1zÒòé{F§MDÄTÁDôf jÓköÑÅ¹p¢vxA6©+z¿ÂDjVAþùb%÷HÃ¼VÝ0×ü^PÕÿ¥;¿×Å3õØ³ÉÞöæ!à$p¤îmÍc=}I½±}i2óåDñÐÒMôÀâ´5é]áÜïzÓÿ]D¼WS@WÍi5+tÈsÁgù%>.PyNQùe.0#*P{¦²Ïyà¦Ò{
äZ°oÆ¬£qrñïñGþyàjZIñX+3>Nß~)ÁS+mG~X¡°iT.Ê¼ñ;«Ð¾axêoÉñåÃQúxJÚ®SmDþ5
åûo(ûÎ 2
¹õñÅx§æR&h$ì¶k>Ã ËãL¶£m_[ìc6tÕ/§Â°G Ê¿éÕÌàé9±X¼£Sº;ô;Ø°å¶<X>Aáø¸ã¤®4Å¹ÏÕÞDµÇ¸¤4èKô£ ­cäy;@®Ç~µU3Ì´Õ:-æµY3Ì¶ÕÖù»Õ®= eË= ÷ûO4õ±¤¢te%ñsP¡× ,ÚÁ\Æ·.NU¹Î[ºªÛ·.ã³pª´	K(IÊ©ÉÛàºÚâ7\a 9lÔýRJÔ»YOò"îH»LÊ½H+2É²Z¿ý¿&
(ª^½2l,ÏÓørRþE7É /Kü~ìbNnSoÔé»lîñE5oÐ²Üt1tPxØS
M'º£õwr.¤®B°op8XNnÓÞÒIÉÎ=M¾r 3÷&-H¤Z
å7Æ¥ÒWD¾ç^:ó¤ì8 7"J«ûÔÊØ(¤Å{sµ*<h>s',!á¤{¼exòOÕoìkdY}#=M7Y w]·,~÷b &ÿ=}¶´»m[üTl0áTõwñÊ¸k=M3½Ó-n)-ibæÌx7[¶c&Á_ÏÂNîäáÅ"g¸%p§­n0f\_\+YGÆ¿ìºQñ¹qÆ&îN^ÖV+M"ÿè}lwJ[l¨ïÄNjûøÙË= ¨KÙã@&nfÊÞ¢ö4.BXþ]V¬±ëÁ"= (óÒFûAzðãå°iE?Æêñ»M±_ê¶vt1´"¾tCÔ¿êzÚbkùJê~÷í¡8¿(¦¼^¿ºÈ§ôÍiÌ= ×	ÊµèÛáh%jÑAÿæQJQîÐç¨wuF=}ìÏ¸9x/Ñä@õR\Cq0ºèv&Iq»ìcìqäq¼åUÆ°(óuèUïkÖA(cMÕÓX·*»È&L_¯( 6OW¼QKxCÑ¾ã1ßÏ=}¬íå¥Ä7µ7á.ülþqFøï_´#Q:Ï²5Á#ÛP³xÓÕÝ&$¡¬ûDãaÓeA$6D¥Té!À£¬@¿µXRuÓº?(ëãD.²¾|ó¯¥ÞÚ<9AeÒá$W3÷Ýä=M9÷NiÆ¸2xêmø¿×1É&ßÃ)²)_9K{XÔp²²¬Ëvu¾QÃ¿ÖïÜ»¬bºâl>JÙÏ;Ð>ÒEá'âçAÒ!º= \ö2ìOM÷ð>¾M4{<K/d4!ÈïÊW _òÂï¿ïÆë<ýNÝhBü{ÊæÔÞT@§#ñå9ðúnÉ}tð$ôúþ×[_åÝLì;wà«*IvÅ¾6Áz·Çö	ú¿NÉjÉYðduåLuÚäUXr½ð0¾ö70(ZQrº÷ÿÎ\+ÿº¢­ñ'\åE¥DÙÛWeâõ1h0W]«åiä
£Ë3üÎ$G=}qgD¸KniJ#'ªkýºk$;êßÇo2:!@!<+&ö=}­Ýaywÿ·@ ^;µo2ÎuS	Ñ¤¢k­«}ÏÓgöI°vZo¬rYo­¨N ÈD¼Wòê^ÿ@:«>~ÀydiAÞÜuØÐ½^eC»j6U}>;ëOtö¼<¶Ü*²A
ûD¥§òc
YHÍk6= Ôú)Ç
Ky~Hj%ûþqYþ-ømR3L-\÷]ÞéI×uPÌsy3|-¯§x¶Þß*À¤²lðC¦V®©ê8Í9Má<ßä?î QÃ¤-ÌY¦vk±	Ñû8Ropìgºó®Z,¤òuùòï|#¬k´rV= ¬QJÖù»õâo/sðpz_¼¤Na'Âi[?ëøéèRû[ãW¡8o¿>~= #¬sa9ÿì·)¤o§M²«ÅxÀHo·ØpB¯Å;ÿ¸íé:XgæÂ ,àS@3¸R[·;*}Ï1´F§M!Dÿ[/´µ(~1,_Ód½íí¡K´§£!éf¤ëÄ÷éõÌ@@;Ö4í#¼êP¿ôji*Øs[Ãª6Uÿ!¡Î¶ßK8¯®!SM-Bã¡!S=}Ûíâ)ãÑo½EÑrÈÀ5=Mk¾O9ÒA¡ßmJÙ_9ÒQâ3Èô§¾É­]d]=MK¾ãf2×4¤ñ²¤ìf2çB&~Q¥À9¤¢êº»Ò®¸ëñéÚîý£/f£;ñáPÀÔzÓÐ ÅÌ>ÊPBf\±ú1hw+­%aÆc´ÝÛ²9ÕQt¾9ù[¿_S4¤ï"×ôü±d3'©hü3d­ëçØÕæ:({ê­qf=M	KR«O¸?3x­ëUØñ¬}ÚRªrpªl_(àñO7§éªûÏx®Ñâ©CK%ª+Ö¶KñÅë½ZÈ;bÃ}Gt{·ífS%½cÝó RE¡Ð~{Í¬ÞwÁÈO¶5xs~4³=M} bÀæ, ßÇ­%a¦c¬£ûç§Z¦Ì´¬ËÇuk ÝDT|×	;à= !¯ÚÝýNéSÓÐð2î:G Ò085²ànÃóÄ%_S4¤ï¤%ìåZÓZã¡2X;bh¥ù.ÙQ©#a¶c¼ÚÀøô5Á=}×ó¡ sÝ#ßÄà|û½ô\ÈãUCæÖl£,[Q¨0õçãÿÞëS5X_®¥ï²·û¸°XºÙ*yìiO4@Í@8í{eï£ÀÙó¡ s´ìTQ¶x}ûÉ?7@µíáMÇº5Ø_S4¤¯ªMºc\_J)á6?^z*Dyà = z665h8ìD)Âãû×µJç%ù(²ê=MðvIu©¬F5½¥Qa°"÷1ð¸&.a#®#?:è{Ñj¼_wÑRâ8åDz]P{ÁiL,eÉæµWX Pr,|DÜÜÖ)ÌR)ï[
¾Éým40Yö-Ên1_WsßÑ{D-ï%N_ÓìÞO7 yTÛÜnÂªïßüÛ¼]LhõÚR?pº¸v¸ ®é#]ç¦"×op0×üèBùt*ùicë^º·<óätíÑ³å\=MõÍi["=MCÔOãkÅàczU$ác÷µß2ämÛdyùF±ú	WDo¹tâ¡pºxbY"	ëÆÑdU{= 8ùâÃÌgrúRlõGhY¾óæµ'­ùü-®Ov!F~= ÙvÖT¹¡Ç½Ã!J¢]r²	Ñôêër 5üOCL2%«+÷FÊ¨¿¶ü@ ú©gxê2ßðf÷½h_h0uJRvèÓòd² ÁÝÙ´F¹U%S\7[= ÇM]\è$ÐÅum?Û!6îu?l®÷z.Q¢¶¶8Ø;	'\>±§À.;E$þßÂH¨Ø»üÃo!=M7Ê =M!¨<úv{ÁÒNLf1ó ß¼­°-JÐþoovtÍëÿÀæ³þ	|p}þÇS¾³5.ÃQo­1|ÖåuQe4Và{s$¦ÜÓ¹ûËçóÅÉ­¨ÄAÉ­Áö¨L«®ã<.7,?s=}¯¬E¯ÛCk¤¯ÏäE 8ºÎþvÎáB&Î"V°×Ä÷ÎúWR-&»a·I1Ã&=M!4õ}Ã@ÊR³M;ÐtøEÐÏ;ýn>ÑZ³y¼Þol8\Ë²ÇÜ NÊÈÅ÷ø­¡ào{&x:ýê"°ûÛÆ ü	¼®º]<¯½/ÀÂÎ2åH%TAÆàû»²CòAæâ|ÊqåZgR|¸Öû1{r¸æ¯­B.[=M
0"¡3ZÝ-ës\x¦èøãª¸Õ0í¡ì=MM,¼Å«ùó"¹ÆØv©£²ÃsÎÖ= ÷[ó
\0´®å$ ù}Õi+éüb¡ð4¬×¿m}¹nA,³t¬æYP5ÿMqPáZ2èË=Mc¾Í[¸:H
ò:ÖÅÑ[À;RRéêÌh@[ôÍ¾WþÌ§ôÆOÞUsI>UBxÆK?A°ªñ¢±RÓ®sJÚT>xpÎw³æyÜz=}Ãy¨WR£4×ücÀÁR|>#C«&'Îµ©qø ¾Ê¬göý¡Õ^Óé6äE'Ê
êpvúFb0aP0ºÐÜ¢Ð±^i¦ã¥«¦ÞÚÔÕ1DÆr_àæ<Õ0·Pz«nÝÇéÔW·:JãÚG½´ÉAD$:­JÇèæÛ6gæ}[Rù_ðþ2bP=Må·ú1ÐAPmþ"þ@PÐô+#4aÛñkGSÍ1¿«9Àf1¨ÆJ¯ù¯g´/Òù-ÉØG@¼ÆÜr{ë*ºP¬\_q¡g¶õ/ÕèYëm|: a<îá8¶wÜ_ÀI9(|afÄlÞ Ø,§ QT×-PpÙ-çø0Ì6ÅÍ®_a¸*]Ki¯µ1î×©=}5é«÷©7¡ÁWúh¯»æ¦¶=Mðö25î}H  øb´co¤òíîÚÁJL·g%X®@5uÀFZeQxAú[¬V¡ÔVÛØ{ãÆõ¤óùÜ,M)gªBQ{ ÙsÈ3Æ¤è4pkqBLi±&}¯T= èXl°{"=M!{PÙá+Iû[ %K+ù) ¡\KBGx
FQè®¯e$4ÕúªJxÅ»Fª\ÏMþµZ§¡Ï=M} ü¦×ûú±¶å"=M	å}£ú=}-SÏ:3³ÇªåãÆ^Áº=MÞt«ruk&d­ª¶2gRË¨Àr­¡ Ìh ¼6ÒW°dK¸ZËX07"Î);­Ô¨1?#U.´A²l¼äj³ÌÆvÆ4l2@Û%Æ×eÆÌKÝ~G¿ÜjFÙ#Råä6Fz´ÙeötLì)'ð¾ åÉØíõ3}©§ò	Ëh7HIïD¹¯ßo·æaµ 5Ev3Ër¶cò	$¦¤{Ú>ß×Td2t{¾¶oÜãÈ)P»"ÌoÅ^ãÔ¹ÀØÙjä@#fâ!©U3zG#y3ëFzòÛå_0b5=MogçpÉåtìé+4@PS9K~
8ÉÁd«ädKYÑY#pÓ8qÛ'ð/%aÖb+Ã±1¡£,þiÃQÂ1ÂÚ³ãÞá9EUç×sL:Ö'!T£º~äp­OÄQìJ#Ô5V$,8ÌÓ¶ÿ§#¥J ;àÞ^o:LÆÛ0ñCÔÿrÀ¸æ¶õÂf=  =MvÒFÞ<ºpÁ(A¢Âê6=MþýO-6Þ"@dÚFjs{eÞv[B(å?íËA*{§=}}¤//D:ÙõÖÑÙÛXøÆ2Ç×Hª¦óR­¯
µ£Ú5Q+,Ïy)*N=}5|ðgÖTmñÌÊ¨¤ªÀIº×äµ¼áëÙvP¼=Mã¤¬¸½¥Ð?åi×ÌoÎôjå¢5H³_¹î¿,~u¯@³ê¶8@¹-ÌóüdDJö[ä¥Æ;O«è.ø}÷sêFkN°»Îé<(©êÔ1qòäÿyú¥ïÇ"u©z'9Lì¤r\ß0ÊÄãÜxâÃ2ÐQ-z2d= û>@êjÉÞr&êÒ|ï¼èn zÅ÷ôÐìEúþh¨ºI¯Ú¦»ö/ýøÎ[pbh=MMû ií õiÂ
ÃìgâqTÏ¶/oGAÔÃo03ËRu¡ÅðNú]_ -:kF¿gf^æîþ;]ÛÊbß}y>yw/.>rGM%·@fú8Ç
(úÑ¿$o»#ø­|KÂtì O¾¼I¼JDm;ÇiÀ0UCÓ¯½èÂR­%MËÁÂéê¤ÿ×ü°r"]q2(þ%K@n÷üýý®¾X5ÐÛz~©E&cngøce¬õùÖÊy# :ðßæHC0?8ä ÍÚq¹ õç¾µ|S{g=M*ØBô6gtC´º°Àü'hXÍ²ìJ¤XâLEvíLâhHa= í·3UadÖ¿.³@ö¸yµ|Ch®l­gÏi´¥¿©mµgÐw¿®ÐÚÜ:H¶ÇßûÆYÔîIÕ}ðÙmT5ðH?=} ~(ÐÙÇJVK^!,E©Þ+Ã®ew>þËl¿8ü@Oã´µ&î9äEyJ4X8ÃùðRê¤0a¥ù,p¡i[h(ägâ|Çå%L;lµwú¶«^92 àEã/¦I¢ý%PÛNÎEWB5ÄüO¸¬g@·yKM÷Áð9õe*à ª_kôÅ½Â]ºuÛê¯?ö$æ®ï-áFÖÇým®¼	à¦È§ý¨ÒâxúÕÉ§Ôö¹É;A;(¬HåÆ½ÈFîWuÙ¤uÿµ·¸ýMt^[ÄöÌáß£Àt¼Rv	çMwåÎ½¦ßøBzXg£DýBö¾°¦sKWÆiÅß°H6Å8°¨ÄãÎ½Iæ7¨!aùÚè«èYêD{ÿìÑ»¤áÄK«¸Lö8ñÛhç®¸÷_%LP×LàÍÜ4 ,Ji÷©¡ýQîZ¶ÝídbÈPöéÚý]ñ=M0'·¶^ãÝ7Ð·9 f¸£®±s³K
ÖÎ£oÀÖê¥oÀÚî¸Õn%sWÓT@E=M?¬º5¢ý'U	A4òÊdáÕ´ÿå·Ãù;Æ|¦h,A%à;Eµ­$¡½*(ýüÔZ÷¯ÉCbãÔð-~Û)ô´Èm·q ááñ9ï×òÙwç_[´ÓæsOX7.dF¹,Q=}±!"QÚ© n\Ç¯MøÎùæU¿ù]Í÷ nÿ¶ðØ^n,øþfu£wÂ® = ÍE¤óÓ-²õV-6Á=}J·Ûß¡Z½Ï4Î9®æ4Z<ZôóujiþYælÈ8º³¢ODs¼ì/Âe6+ÊËunwmÔfu6ÙO Ãïfïpuz±r7R:­¯Y®ç)øÃÒ58ÛÀ'd'Å¿QHÅ!¸($Cµí[L£C4'¼ZõÛIrJÌHGÍôÉs¥Üù&Ã.úUwåÇ÷Ìhác23×¿´#÷¬W­7{¸4å^	;G«d«9bk½á.1= ÃmÂ ý³º?c8"äc[61OàÔJ×ùø÷1uÙ	£lèó,â£Û,:|TÒ .´ÆãÔ°@öãW3¸º·ÿ
éiþø;ÿ7§lªÀéÁâS«À8èXïMÏ ãýWËàceð¹#Ý8Q6MV)]Goß]à¦<0éì¦4SLþÛËãÏÙ¾= 8m¬ü5´fLií;õØ¨WcÝ+SõFún?SÏÅ ,æójÜøyËèmÛ¬D±¯=}´ÌB©eNÜOê*q®sl·I«È×å,áÓê=}x;¾×1ûý#Ú¿0 =Mñ@ä  ]£h»6ñ6¥ m;7m<äá6íøgâþç?ä^;j»>äÆEøgÒe»6äj´]'äÊÝgé çu9²à¦´4úÐ)ÄJC­È= ¥^;P¬ M-)äJ½ûç*H¾6	þg¹e7tÓÁ íÚÝ)ä$|Q4rôÃ.hã ¸ßÊ/BxòÅÍ2ó>á1ÑôàQËdÆT¦¿qRt²ipEÎ©ªsÛ¾7½íã7wÙ2udÚØtL2ü¬¤97X§:·UnÔËÇ4'\+>:.A;Ñ´Tæ$?BÒõÉØ$a Ô0röpÚ ¢ôÔ¿\O½ÍEòI5°Õ_vîDý õ£C#øÇM;sòÙ£ ¹´b®.¡
í{ÇêÆh¹"ðçfoÛ}D L ùoÿÂ-b¡º±¡Äá)ÃJ j0t¸Tãí×/q?®q
z ,'ÏÒÓÉ¶Ñ+Þ
ª*+hn=}+$lðÿlÄnÊ8¼CdslExLF*zY]Fú)úÚ]¾ì=} eåîäÅ×<¶= Ì¹XFþfB®C»ÊH3ñIáP¼ËÁ°poå­Â{ã&&Ïé= ò9¶s®ÀpTfjüÃVa¹'IÜ÷Øåï*éÄª>áÒððÝbGÿ!ÈDÿî»¤	Ï[T×eø?p÷×k9åÈEj@ïúÏ
zWæ}gYó^×|IãF¡|v@õ¸²*CÞ³¿¼ó³Ú-^Xõø·fýC0ã©í'\É8|0¹~yçï¶ì¨#eo«×4eLÈ;>5$(y×ÌùØÝô6Gø,ÖÝýô/2uLXÊ<SÖÙ9E¨ËtyJË³Þô±Ö@¢£j6S¦4LÕ@¤Ä2Y$ÜÒb.c·­H´jÜÄþJ,¤ÿIÐÊn©w©/ìÉ¼°·°BêD¸ÒJbÑë CíæWòr±~M'×ìâ= ?>'~:%3c8&"öGÜÌg_½uYFíÕ¾iêç¼s!äÀ±,ÎµýÐ3ñ¿Ðác%ÃÄ1÷LÅZ!%Q.ÊÃÐ±¡VWÀi$Ë)Î&¡6\á¬iMìáÈkE0XÑLàÜ?R¥Ì¤NÝ±ù1ÚLö§Â®Qp°L÷ë}á=MÉu¢g[¡Üì	òQp?¹|r6Ã­«Ww<È+ZÍ<¿êý#ä¿×ßÖ7ñiöä£ÏZ=M£àq¼_ßÿoº±Àl ÜÒ5Ò»µñqZ ëKÄþ±=}×ïL£Ü:"ý)ÒÉë×R!ÒÛúF"gqÚCõ[~Öçi¼r;îÏÃ-^ tç_©ØPÄl"}Qq8}ü6!ZqÑµ¦¤lpÍÍc÷Öl÷jµ}JÆôD¯²Sw&¤PLí²=MÅ¥òöNÁà¶IÄ »ðçdÐbÔÈSåD6åÍ5.ÛÃÙÙ½=}#¶XoÕé°öIêlÚZb+²c3³B:.ìñÆø5H)h]½¯Y(ßü&p¡ynJ6ê<>WUdÐÚ·@
eÆ\ïOf·è¨AµÍ	æ 6iGÏNðI wK4= ½ïø &ãVj<abÚÑ<ÚÈa.öWh¼Ú!<a,µÝî9¯ÈxÅÝV÷Íý^æ«?
EL'°&MÿõN£väÓ½ÂGáR0íB8ïé^äëcÎ7t+$I¾¨r£ú¸áê=M=}âê=}¦ºnâhwç¨¿5v1V¹]©zK=M¶ÀÑÐ^v6Ç´D?zÑWñë±M6Þ­uv"OÜö©B1Ò+kZÚ¤ æKÖn
:üGnÏòáRÎ=}?âþJRþ³ª?èN"+¿f×öéú?&$¯ÿ<±8}MUÕËäS´µfqK'îãK%æÔÍµË@±ó¿2ÌY8&é<äÔ!­W¿om¹¦ ÖÁ¸Z0«Xô>s9ØäÒÄå¥E±¿*ÈÁqEÓ<"¬óCLbO-à~Ç³LÅlÍ~=}Mµ¥no7³AÛHÈüVârïáïÈ@3zNìÆFïÑâÆPÛwê{Nú.#¨«ëd)
½­ù£â]B´mE+ÚÌ dy 33ÄLüd©0ê<i= V+¸Ín¤ª¦lnq\"{¢²ÃBfÎ¬yzà~]?%ãeÄ6¿1°@&ïJb]-3	³qâ·&=M!íÐ.å|s½wHÙ÷?D&0t oÞeÐ¹ËñÖ5BPÜ E±µçÝêj$jMtæquùw©J¹èÒoéÓL÷¸T=MO®,nQ8E§P¬#¥±Är56Ôí»&$BJÕÔ"Õ;W/¼½´+³½DÔçõ5¥ä55%7¥(k³½v¥bë^kø×¸ ääÌæçåqÇb£(ÇççU]Ý½õÁÁð(G[êåæBLÕµÎ[êuM¸wåE7íçÜ=}îÒÎåqJâLë¼ªÂâLë¼ªÂÚÌª5/'öØ0zØÅíz?ê E>æRuiìÁü÷nJÅet «ïLù @oÞ©m'¿ø-V%ÐNlÎÂõ'(ÈÇ7x¥U]Ñ´Øm×Ù¥zà§Pø%úÖçW|ðdloÅYOôÜª?äè9¸[5õ'²¹;9Iß!c¢éø)»+Pq~è?¾£A# n5¦P«®éÌVÉ4ñ¯c²¯&Æ~ù¼ßÆo=}íPb-Æ éàÉ÷*åËÌÏ,ðê÷2m= /PÛ£û&½Ýºdw)çIXuª¡*ó,÷E¢ZðXQ~ro0û;=M\¹ûéÍÓ¿qÓv9½4ëZÀFÐN-ld®¡bèªºdñ,9OÑé?ØíÿZâ¾âÜyO57KòR<w÷Ð0ó£%o|.G$¤mWâ£CåýEª|Çó#4Î[ñÂÚ<{\|àÃmÝ7»Ä»iT÷ÓJUòM¦=}û[üGF6*;÷Éé=M©ÝúI¹FàËöv7_hãx>7igè®
Xê®ÎJmoÿ¼Ë|= Ú&.ø]úW'bç9ÙßADüvØ*°WÂQ¤ 1Æ«5úèë]+f³Öß ¡°53Pºûâ»N¬øJâF¢ÆÅ4-íÇä % ý&õpÅxØ4õ~û<h·¢eP²Õ Whi·/XR !ûª~ul d8tàîø>9ñúmö6eüé:>0N >.1ýÙ¢yÛX¿Nøæ§N8Å= AØ(èêA= >ÿßñ¼nàâ!¶¹¶¿-Øàç*íÞ¶^¦+&Çèo[¤ø:í'%)h[2(7¼Ê];(Õ«\B|«>þÁ7xSö/÷SÅÑK@"ç]ª_hxÌ	=}g2öShOôDt¼ó¤rþùH 'ûû>Ê6ÔÌMãê{5 VUCk³jyæÚp·=MFªëcù®Ã¢çÜGÀ±t°m¡ü¼''Ü^ ë³µüÀ6teãaa«æ.ô'ôñi$É£®®Çs¼óz8gÚÂ±*UâÂ,FV7Æx¼ôÂÌpèhø§v·-íµ|ÄÞhÍïÖò{¥hHöR?AÆàÍÊ\KR¬ß~Í5ÿÉè9ÍÂ=}ËîG¼Ýv½mãfzMt&ýû~Å÷ïz?[¼å8;k9ý¬ÈýÍViÛZº&UÏZvq¯éÑ¨ÄH¼Ñ¡´~¤ûC«6fôwÕÍ©ÅÁÁ»m´óÇx¶UgæÅ>d'ò7æ¨jr§qÌÝÆi&=}V³n+JÖæÝ<ÜtãÂ¦}¨e~éé,ãÁ£*BNôÌ?ÜøDr¹Ï1,´NHáî";¢çï×hîÀVå3ã8­!¸¿·©¸{ôºôóàÙMÇÔ§©3dzY®¬ý¼AgÏ#Fd þªj.$bÁÕû~ÛßàÊÙS ®´Ë=M9Ñýj2u8yd.®XëZò 
ÌD¨&(Ùî÷ñLÚ­NÃH¬ù¼ý>^/ÚGÇÇÀ SD!Ñ= SxWHA)¡3 QóÃS¬¬ã{aEÏ9Èh Ñ)=M465¶ÛÌOñzþªFZt­j&ð¿ ÑLñWàJ@À±qÜ|XïÑ(X~.'î÷ª~0æþjJúª^î'@)@?n>Ëÿ= vÆIyÄIy-ÜÜ,åx;éá¸GÈ_ò|öO EÝw  Ñu°áo{ï9!ÂÙ"[¹3GQÛïj®	<õs  yÌÃòwúJmpÇêÆWÀù{§ª0.l¾S ×b©~Äiü¶­Äjö×Æ§	Mð¸rÍ~Âyp UzÂ¹ÏD=MÂÙÿõt@G"<2ýsÆºVCYä=}FºÎõ?AnuSÑý@â¨q.£WyfÈwßO/S£/Ýã%F¢Ù¦jN¡AÚnÂöÂÜZûÕú¸e	åÌ´Å-u5°«sä«W§±!7~Ù¦Ïò¹¶Ûù"8Õ¥)O1ê´Ô¥»äïvç\Ká£OØà¿×k­¡[!rb$íûHUqÌxj¾FjcjSi5c¿2^éîxMoU@*¦s0ÛÅl"û$NO?:cÙ-m'S:a«&¹u¸o8üèë9¹ÉÛPX*¶_²°¥/jÝbto¼Q*vnV
¶Q¾jUr½BS
¸¹sqR^cS>j~=Mðô[S¢$²¢Mµ9s1ÌUzÍ$Ì+Gë»¯(a ¿¯¶Fåd"z9T¹!ó5°!°Ü¥0Ò/ó¹èGeøYë&ËuuËµ:\öö7ÌD·§¿öYÊTUîë¬ 1HJì¬µ®(Ëkä¯ÿËÊÙiEÈÿ@Û®GHi»C-­ðíáÄÄw<~$°#a F«ª¤!«ÛZõÀ[d»t~­Æ=M¸oe2Öc(Î=MÄZ#í¬B}¼°¾º l¹Ä%èÏòÑf$þÕX[®yTÙÂW¡xèÍ°3U)V\,Èpu
65"ç ²Ø]QôJ¦ÐZEÙU©2yPÖÞÄ+HPôî]Ý/ =M¾$ô~¶E¡s)àU¼4à»y)?¥Bh¹LÅ26FÈ+SòBóÛy Ö¹{¸Ö& ]H»cõý¥±¼¥®æ=MHJ]»çJÂº+ÊÙ\PÃÙ×:>UÑ »pI\ðê ÀÛ´4%Î-@õ|ÒeR/22ù ';³ï?7Tt¯8-níB ý0s·Î£ÈõUjàÀ®ª¯äÖYCíLð-}EÛOµ"g/r{Êl À3}Ó!tlB0%Ü	ÇôKÀFÀ¬4Im~¯e«¹Çôv,¼«FûãÇÐmuüÎíÃÉõ4Ä Í÷=}ª1ë[¹«çþ.ørl¥ÈwãÉ#=MÀXQÎ¢ ÁwoSI´Ãó«"(Ë¡*&ÐÌ*©ËÛ?!°kyd½Ï8O4ð=}2Æ¢Ljbypu^W'h · T°®8=MÄ:¿i óä ]ÛwðkMD&E?: ³m¼¾fe)PùöÝXÅ2Iü¡!Þ(¸
åä	¼b©zq2ðÕåàñ#Î9É¨µ¥4(¨ó^E%%3JØ}ùL²y*ß:>èÛåögÖ=M°þï[üÆðËähdûY ¢ùB5°E|åöJ¦¸C&ÿ×CÝ­'[/³_éJ÷HGb>~ÁZfÿS4_°ïøY$'b.|ìåeUfi*vn3RfÞ?F/_6>®0Ú5Ïá&D´¹ävV£V»%¤»Ë¤m&½]0¶êb0í:-Óã:»Ç?$ÎÝØ)-Ó)] þ?tñMJðÂµ´«¹ðÌI§
æ4@~ìi?«­¯=}=}-¨î-oè¥wWºGX']A%v]5 Ö è,B5ùÓ¿Põ®§OÀ3ÿ2zqù@ÕÛÓN@½ârÞÔ¯M©Wo=}ÉPÅ'*Q[ÃìK1ö­Úq¢I(¥Ô>vÿÏ÷¤gÔPt7tN¶VEQûÊZâW(¼K= V& H_§*o¹÷,lÊÞÅ;UÔªð8¤á·ct®Å}öÉ(&^HJìi úËa^¶Ó_:cExþÒ^¡Ç°dÅËrÁ¦b¬Jñ!B&¡.ôÌ¹',¡AIûÌ^@+èR=}û$}¿ºnt(CïÕÿèd© þvº×¨»Øó2ÏóRúÌCf­ÿov:êß|:PÖó2ÃÖMEm;·+À®¯%½²ÊÈÂ,Å,9ªch´J·o9G§j;ïÍüÕ£Ó}#îÒ-=M*Î³ Y¥,fÖ÷á÷#1&6[¯kxúX¿Å:¼¡»nÎèV%ª3¥Ö¬n¦ÑW÷ Ö0>=M×£P¸îe]¡üø~GEVy >é= xnGùjJEAç@òè=}oéd±³!Ú|*Ãö/¹XU°ÃÚL«(P7áQxb[ùÇt¹ÇoÑ$¹ç\0<CYì_F¨ï4¢n+1Øk 5êÿZbW!p_¥RrÏ¢é-@ð¯Û/£	ßã.ãô¼Ñ¬qEµ!£ÑWCßh0çÙ}§³s¸>IËa1Buô¥æ?ÚÑl--öR?£|\(VûAð«KÞ¸ÎeH¦Ô±(>ö5Ç´XÓÛ>_7Êÿ;üt5°$×8L Î «	 pï»U¼~AÙ]e«wÅûÔtR1ò½ Ë*Ã}<·ÊÃÜZ0á]h¬BRÔË|bhC åÅÅºø:ÀÃº¯0c½¿¦vídeÉ¿µ@21ÒjxO¤¶tP¨*¡Ãb¬7ìûóÜ¢ä]õTòMªu¥Ì°,yð¦4ýá«Ä¸(îÛÐ{òuæ\«®ñÕÉóVGY¼l8¨NÄ·%{¸$HI¦ó£2ì¯ôZâ(joz»Ì»;·Tÿ<Ü:t-
 \-*vÓå¡ÝÅáÿl¾(ÿ.7º¾kG¶³ÓX´¸óÑüXÓ²no´â¬D'w**zõNÎyMUÞ´:pÛÞæAR´èqÁo#J¤Å]ØgQ\a	Ü1Û°§í+èf\À/iäk/ÿ'v$à=}0Uñ·ïwòñ|e P>Î|a	UÃwú3+>CÉÎÞ¶2D¡ÅÃª¨¹®ä´Hç¬ÞS²%éA·Ü JÀÍX%âÊÇ%WEÚ}	s¢9Ùó¹(e0ÿ9#?]¿Äá¡ÈÑ ½OÎøs,>þDò®rª¶îVÄ|8X2Ù£¯vÊµ¬«8.Øn32§SBõ2¦÷Ë´ô÷Ä9ú¾4Ôéõ¨Û÷,ýµ<ONÆ#¤Ìt?È­#þê{ÅN GuJçt ¯ÞjJyBÀ£ÂÑwFæ3yÏÉNÔ @)fk!lý¾-¶qQö/©>zä4÷ÎÐýGè®Rî!O·;\©³S ÖNâlTË-ýsÇê~Í¦Ó¹¯I{ÔE~y»& °m&FCB.f0ZÐÌÔÄl|Õá"Þèäð?èz×ÎwN´»@RR¤®MÑÔ¾kH6ìa	Uí<ÛàÚ;ÌQwo½º&Esy|F¹ÚÀÏ¥¤òüjñGØ2DõëT½âdÚñiúÏÃvRuÙr,Xª#Û2<=}mºUZi±Þ®;¢±®kÛÀ9§ë©T·ÆIl³nõÆ&å·Û³¢Ì-ñy:³å&opïY¢¦eûI¼#¶F®u­Ev·Ø/X®À Ã¹¼ÓRkwHgî{zÝAÄ*î<w¤ê1§õ¸Î-P¼åºC
>ÙXOñ[!è?ýÞIoòÚ»Ê¿s¿Í<qÏLÑ=Møj¢9q;GÁ©¼ý°g	g,»­{7X¨>«	\àð¼½â½Ð:ö1L.QÞ>AßiDæ{a5\Ößëµ8öO{Þµâ 5)«C©°¸I§f¨F6ËÚ«&úª¿ìÙ¦Ä_£V¯¯&Õ¯¥sw¤=}w¤§"ðÓIÂ²£ÊuFû³£ÜàÏÃÛòøØ¦Ç6&g;Øßðä«HÔ»xÒøNSÌ¡u3cRß(§n×xÅûw6"¹¢Ê4/ føª.½ã¶=Mª³P.¦QünU.R2^ráXî1;	­=}Ù¶MäÇ#§há"ÔxyUî½.ê=}1C}\¦|SÊÂ®ºñ¢bajÊ÷Í 'siJC7´ 6?¾e"ê6ðAlè·éø+ÊHf$ºíán|qÐL¾÷ý1þGyë&ûÀtãQt P8ÜxÔLJo i­LEL¼Vü.XÃ.ß@Å?Û*¨ap¨Z ®¡ÃNA±K3}?æÝ½ÕfÏvw²Ryªp×ø®³v
/ü[l= vÑÏDxBÏâ/¡o+5Ö¢NÊQíFà@nPV¾y¨gO£ÍSõ×®xp¶FÑoWÝ3®}/"Ë'Âª²¹cÈÛé0RÏaUûµõ«= LcTXJµcïÀAãé³«èÞÎl2ÊuIA¤»î½qÕ7ÖÎ$Ý Ð¤Å^5$hÁ£øÁ£ØRxÿØNÅ¶ÚÖYÙ·hÚ90Úàptø>m ÖF¸zýIX®¡g{tEloîcòS®ýAc=Mÿ¼þ¬cÌ=MÄÊDÕO@.½k?It¯2qWgzn¸Å¸µDI®¤ÞËç1')= 4ìJü«.h©ubUö¨ÏÐÑþF%¸ß-ÈdùX7)= ] È£u*}H·d¹=MÅ]) X¾X¯ºl9 ¹g/Ç$rWkÊ´­X¡®Iy|¹m2;= ÙK«@'óvåäjlT¶#·»#+.Á\ËÉOò-®<Pêg[ÌE¯(mHä<°Ù8	+þöß} Ñ|njÚF[ÊhOG¿¡Q¿çHXú$ÉòT&|(×ÄF³Õ¾D¹³&wOàõy!nâ>	Ç= ]ØCni.3/>|N¶å}ÆoìÄq´ºupµîÔ§N¢,'0/nÏ6îÈh)üòqEQ TumÎÁØAÎ"#9-IíAA£¶í)5kÇ|x¾Çó
[«Å µ©wýØ§ÛÁ¬u¿(7Ïªðñ£¿Æc¡$;0­cÐ\¤DªúàLGfþVE(E|,g±Bè£ pÇ®z¹üGÐU5:xÙ÷Goxµ) ãÖëËXÕÃ+îÂOë×¶zCËPÐ+Ä:dûïþ2G{ºçD0¡zn%u¥Js Õeñ¶»/LtW<ªd]O\d*æu^Ð>ÛwäNØ.{µI#	7ÅÔK9tÝ»Mq]T=MíÐ= G·ÉJä!a,=M5{Maÿ}þ}6FúC)?pËç-ãùoÇÃHsÊ0Î~Ï'×Y£rü9Ã>I°Qó3­âÔÆk#4^c­WiyGå¢ªô$ÍSÝ@û3-n&NÜÞæG"8$B«|à½­o%ïÓNì1z§ÏÊ$= ,¨þ»ÍyÅx* ]FgQð¯=M3½o¹ù&/qyaKÓÆ}Ñ8Ö°×H,/ AU4<#ñá1Ðr:|îèz'·Ê^z
Kæ$õtÌø	l]ö°KFnæâP2Òr¶-wF»0"³,
_]¨Ð$ß7»)×Î£è¼q¦¥8Ìu5!2=Mmû¾k#´W#äsõÀöDqV´¬À(ÁlP@?qHwµgÖ[b
ëçü?#"-¾¤îmÈCû×TâTSÃïêÌ=Mp×Ãó<í,¬}PC¦È3 je= ±YìÄuàÞbP{cwÄÊx$I<Í¹ê¸(¸RtP¢O'Ùñ[zA8^}OàÄ[åèê²D%àíÊ3÷ý¹«ÖþÛ¥4ù§<¹®¢d}ùæ¤©_Ýæ~~¬'1 ß.ßH>÷ÿøé\9DHn¶gûañÖ²ÜôDÿÉÜKåæ§UàIÔUß¨©-ÍFaõ¹Æ1'¸å.i}Ô[lÌÓ=}Á·~õXÈ¦_¼nk|IìÃÞ?üouû;ËHBN ¬ìøN³ú_Àï¾V¾ÒïWNsÃÓò*'ôØö#U³"³GW;ËåÓÈ[¥<+b4ûNÊé4s·0Tn3ÊÚ¬´38\R¤Ýýf^¼z¾Ödp6R£,Ë¼ãIâË÷ïÖ&±QÞL·¿ÁÂïüºîFDñàèÌ(±Þb¡báJ!.%Àú ÙJêPÎW\è
a;]=}wJ²uWê¼®¼ß©v°§VöÉð DÆóõå	Îú¯uìV]Ã= Ýî5eÑ²åÅ
[¡-¡¾ª=MÈÎªC¼ôë<Ø¥ôwSÀáUv«R:Bu¼Ñº0= r¨'³	d¥DuÙÎzgÚ¹ö 2M¬§=}y×ô¾k¤kiNFÓÒ4cªÒríÍÀxæ<'"Þº¯Ý£Î®]5èëü¥ù;~ÂÙö¥2t«é²khÈ+öôSGÅ½}Î¸>ï		'Pp¾ëzánU®¢	Wê4©/p<*«Ð-Y= ÜkÎò_ß4þ2¶{®2eNðÏ4"nöÒ±rÎ¦DÈ$Q¿8ÆÜDæòiB°ru­ u}©ê¬­Ú)ðTW©1Ö8MV0gJx8Ûº
J::qNðKd>JÑ#Êr2K¾bn85v¢y@Ð¡¬Ã&&ÞÜØ|w½?¸
È'î*Mî6È#"ª/(ló PÉKüTòø(çPYm®êPîC$ÒM{´Æ>+BÑOÑriqõ¦ægnóÏ'ãqÃ;÷ñ)8IoÇOò	@Ò9ºWºÚ¾hcii¸bµYi6êL>ÃL²LÒÝ¬Mâ)!å¤»³.6VJ6êRøsT(ÑÒZLxÀ ^ed®R$PaêOw B~29òLúrÆbe¬ª©a8o¿èûÿÄÅÑÁ$ÐDwp¶4µÚeNuc´Ø6cWFæ.R.bHÒ8ÀÚPNâ_¢à2M}xqù¼"t:³íuJGÇ7Ü0íP] ìxkºèMvõw.Úfîeó±«ÔL_·®,táºNÑyõgîRâqG}ÊÛÆo¦G~æ9¬§BRáZhAwPZR±¢+"üæ+À#m¨ÖJ[µÂó®ã^ôÊ-Y"àÑk4&}Ê^ù¯D)Ç±BÒI3¬×ÁpÿR^ 1Äë&êëq´eFººdÔ'Û(º¥d¦Ê¥"ñH ö+JÊQjÖp²ô¢5z)÷Zã7¶®b\
óbrR:ñYÂbiÚRó!à~Xô¼\ÐS}ð²<ºs~6ÉsSE²1ë=MßV©ôÖÎ*ÜlèSñ4Ä ä§sÍþÃ/5}=MÙwî?~0â7Ü(Î4Þ¢rtè3Ø/ÜáVä¾J¢ÆO'¯øû({ºÃ¨>åÅñ]óH>O8þ)¿åPRÜ©OÑÌºòQÜ*~(7T²ªÑ9²7êyõÀÉíjc³CØzexÌÈæq^&ÍoD£TïU¨¨ÊüúFD óU;É¯ÍWý bð¬@¥ª0ÔdëYîv¾5!98Åâ,[®ZâÊlFÚ";]>¿ïÄTPg½³j»-äãüÄNJK!5úâþFeÓ"Òæp@(bÛ0P6hä=}BÄñ1óýcoV6	@ îq}î=MÃër2b(§¿¼1Íj×!A>5*ØÀ)¢uÊÕ/Q+ØòAxehµ°xÙbÇ[¿å2ÕÁñT.èx×@v ±×5)­	(W1 Æ.	¶Å@l R°|/G= èï­/GÕ>¡ &q¡Ðð©yüÕJ=}ÎmñèVd	«kÔ³AáÆO:^.ê"ðk®Ì5AµÎôW}OmN¤	Ð>DÔ}XOl®q®|Ûë_C ûAMWíÍ÷­ÏÞ	Ù¬r6J\â^ÇFH-zÿsøÖR¢9?&R>YÒ ¯?ÑOÔß-&ËîÂÅÑÚis&Irx¸èÀÇ1økâ]rw>¹È3¹\89µC±FÜ"ögdvª±Ò÷ýnwî³µ!Ö
yB¢§¸p¹¹
äÝ,A¹á¢gUª¸ø%¶%V	n©ÕOJ´ ,î_äxjæù¿üÙq&ú\õÏ\Æ±ÒÞq¸¦ýêbïVCµJø(¸ug~µ]0)Ã,þ\wÐE²¸.ÊÏ¿xzJÒOìqµ^v(ì½Ó°ßO@ôªyzûwf%Ðò¨ãí§'z¾I{ÓQ¥¦»èþÀÊFeÖôu_pÔëû®|Ät7òtê4¨­½-¤5òrFE¬fAË{Âmròk¾¿ÍRW
$|aÅGcBm"x(øSírÐ+B4E[TýJÇiúcÄî|êÈ»®òãVÎy*êÃÄh9zþz~·õO¿7ìÃS©üMÿDb6~Pùð,u ±7t³G«þä7Øô)¬+WÅòLÒJ³ø¡¢[»áAV­R¡¼9­Aªparü9W¨HKçA)ÅÂBG¥ÒÖÍú[C$o^vL±.]M³w
OXJ\ÿeêzõDAo#_xÉÜµ'wnI£V{°Q£iy­?²\ÖëÐUÅç2&n·f/ò]Fãç' Ð3ö¦ÜØRî.ßÖ'L¥ç J ÚÜñAÈÀÏ£ZToj¬Hu[ç*ÊÑÄq-îÔÒøð.Úc=})@Ï}^+õqS­=Mý8ÛÜì8o©þ¥
ÕÊZ÷¥¡TvÆQ°8YqD0zy	Ó/=M= ¿ëÔÌ5J2}WRÑ´<Åùõu'=MlÈ*ön"8"ÇUÄfZß"ñ¡m:V~æºK2J[~R°.aJtáz*>À9®#C£j©ï¿1= &õ¥:÷gX7¬âWØ~Ñ[.xsÁ]$¶k·tÒLQ^Ä9 Ú¢¥¡é¤åØjQõh
t ÏÐ*ºÚ¢ÓÃèÀ2éãÐÐôÞ|}H4QJÖ"=}ÿìíëÉ©ETm!*M{=}ë±Cð}ÆX
{}*ôHHDÁEê*kï¿Á*2o½×n´gY.Õg½çO9\uÿ·Ñ´¼%ó¸·7û=}«ã_Û5ëðÍÜ¥Á¢ã+¸¼©eÁ´©Gvuç3çØ1ýæþg¨wÑ!àGõªU%ÙY]*¼ðÙ)ñ®n<ã9õ·ÇÚØz?!Üz!/óäà*NK5f= 8%Cü } r¼[Ü÷Ë=}:]MºØîrcN&(ö>x0éÝþ¶(¼eR{{x/ï :×ý»£W;¯¼Ô¡È/íÈ/ÍÈ/­S½ä/í&¾¶bUè§À÷¼RÎ/ïS²ös	NüÄHÎA	Ü	\ÈÌ+­\oA5ÄÙ^ñ>Õí(ÛÉkþbhpí¾KHg	äzFGÕï>jap§i¶
L!úzt,i)oeÎªJý9QTáÏn:E"uT¯'1eu³!^vl¬Z!fb!ºH*Dë	¨~Çe$Q+9E÷cfBBF>ªh.g^ç­7¹Àº!®p5è'è,*WOÙiYLÉz
Ã¾CìÂp_Î¯×{VæöÏq.÷<Æ%eÙä<ÏdÙÓ· Þ½Ëe·çðI=M«ÎbÈà*¿$2PPyþ×6æ+Î>#­ÇîÚC¬2ýÉàj.DXâú\©À·YZ|Ú7	NÃ%;ÌðDoéçªÒM}4X¨ÿ÷õ;¢¥Â=}®f¾mÊE£eÌî¹êdAtÝ.0O=}"R«¤õ ÑÉ­Yqád~+±ï;íu¤]Í26EäÍØÓ']]c-&¥3Ù»C8#í5QÆ¦¯RY=}úOm_ºj{ÇêS)Î!ý³üãËÈ¼cÜºfPeË	;°ûYhõ  1èÏ¨ é7ïLûÂ\]Ê3êW}Bóa3¦gdfÛZÁ¾d B8kàýî=}1ãQLê! HS\ÉôÜû'~MNw4×½)ê¦3ÙGõÔ,À´T½¹îØºÀ=}$¶HåeÀ5Ð´gä÷m;®sßt.äëQ~ju4DMñøÙûøì&2¯Ý;j>jxzgn]æåÂlF{ Ð\¾ÜÂeZfç_X¥÷URîûñ#U(eXOD7Ðr¸à¾­ ÈLM~ßKOé0\jTÝ:D×bÈ+!ìâV$|ÃºÙVEXlMcg,ðûý?àèðû}ÏMcçl9a:¼þÇø0%Ñ²¢w;ÄF³_¶Oßè9b?]ëè9>=}ß26½¥o[2»À)'Z]X{º{âL)¶Hqemûç·h¶[9«_j¼/ÍHÍ¹àvÛ¨·¨sVC|ÛF:fJrwLE|ò¥UËet:Ãfxc'O]Uó¤7k&öÙT>ÎÌ¨|ð4h/ÎàhN³MÃÞ^êÏçaX_óü ©îðW2/XÉåÐ>;b÷?i~KG}6&ÝG¯é!çÎ~¿hÀz»ý÷ÓMGrA9*·ÐÇXW^ßèÀ©jµ::31nDSéÓ«hÀ&AÙ|ÆÚR·¥à2 ðEÆl¸®ö*?õ*Ïk¸¾l¸Î²	¼Õ8p­=M gaa¯ m(È;3Eã,;@#Eß C¹72	î¼/)úB³àÙz¶ÛßÇZe?eÏªÔER³Ô?ûñ»¸Exv5íºA¹&BiT+>â@Óþð(ã4M³Ògpj¡ÆÌÏ7»éÚýI%ä:ñì¶½w6S[=MM\ÓÎéÅýx§ì rÀ4c,3q¸$ãå!GpË/ç¡ëÙ"W/åÀ-| ëJ£æPûÈ©v«9ÊÒÿ:0ð9p4
»/V®È0uÅ÷Øy¡×Fÿ	8¼;ÓÎüAÒO9'²«hét¶òu2*Z\ÃÏhXâ·}±ª w°«iDg ñ= :ýÁßÂpüC¥VVôtDD7¸O)ks. ÝóYáÒ0
7_B×Ôo¶ü²t[À»)LßÉOðøþç=}âX:øRC§¿ªo4'©?ÐÛìy'×Ôà1}Æ0aZzæÝ[l(Z½Í:¨ZÜÄ@Ñ?	:8»ÙwÖáüaµ/ªéÂI= J°£7Ë'qé¦Ô8Y]Rá^rßÕj½?#'pÊôû»¤û¦¾©@NkEIwlÎãD4 ÀB³N­ÀÐ5Ó{ÑÊÿ¢äç	½½î~;Ã²?×LoN}1 © XÙâI= w]*gÖð!B#>F:èúªaë0¬/á0fÕ¯*vqdÃ¢¯Âîÿa?bºaF¹ÐðGÖ~Ï4rNnâcÈ
YM!¦W$O

Ñ|öÏXw§'¼>P@&C1ô?P±¶/×ÇÈõaÞë¹ô0uõ­p[;àQxFu0íù~[p&t®
²\®wu°­&W
ÐvLãÖÖb¤5Ï¼S:§yùXÙUM­	°nU$<O7-ó½eÕUiÞk7= ¿~±à¯Ü×Ö¶ÉüuüÞÈ_\ÐU)×GÇõP*CAäsÝ%%{áîtý§£´àeMmµìÑíý. Ð.Av9.Õpêo0BW÷+¤µn±ÅIk6/1C=}©|+Äè&ÃÂ"we¶w!&ÝaSïôàJ¦¤à'm¡ßD8àîe.Þë õ|%Q·Ç5îqVf [Ð_^+<Í:Õ³"¿.¶·1Ä&Ö­föd §h0Éjûråmò:q·÷øHf*Gª ;*å²ç²ç+MÎò=M_(G:ú°Ï©wÙ09=}·Pf_:¨tÞMJp.U*;í®2ÓW·µíe³¦{3×	t%.#Ð¾|Ñ¶C-Ý
wô=Mù¡(òB;3u±9÷"Ç-¼d:È¦ÿz1Oæ$O8t÷%sp6ÄOâè2êÂµ5è²utícø]ÊëFU¦Ñÿ%¿Ú_#VZ<Aßû'9cÊ'FÛM³b"g±PøyNWDÓ¶¼ÙT	üÓ²Æ±ÂpÈ1Ucºwfuk£¥ÖåtÝ°ýÚ­£o¢¢Ð¥EfËÓh1Ñ<±e*Ë²ú¿´|¾º£íÝì¯ù¿¡hoý¨=}Üû?XöÎÈy¾¼»-Ç#Ög§èÝ¨ÞåªÔên{ßPm²VòÈZ^½0áµâúmö1,Ol+æ>Ý¨×sA5ý§Ç¾{¯ÐÍ©2ÈÜ²xá? ¸rÊ= ÞÜtfQOÊyÔØ9;&iZãêl'¢\àðLð|ÓOÖÃ+ãêôz g²©@»©Þþ÷×3z²µå?Å/×7u"ÊMJd*Ó$qéLb?5h_VtnoôÈ¾vö$æ)tß¤ ú±óMà§ùLµ*6ËúLvo'Kcæ÷.$¼¤LÓ*Tí1Ù;ßÖ¾fU´âu÷Zs7Nhþ&gývÙ7ëþf%Þ³ì~5Á(ºV{9@ÉÀ¢Ã0So5Éáôl^¿ëëÊ£oX¸øË]TËä!À°eBVàð¬ï BAuh?ë½-;'ÈO¹ýHêýÁÖûÕ·orÏ¥·¥¬= {A/w¬5'iãý!ñæ5Ç´?_V5'ÕQéú¥8?eFJ*ô	vÂCKôô@Óª*)XTtO	m1:¬ãä5q^Û)CJ@¢º¡Ö2i!©ª÷ûg½c­dÝÓb5±QGìÙè:yõ4ôKI%7åÙìË[c aì£:2ÌËIrµµQÎ«
ýûZ¶pEæ	^K»x~0­m ­m|ÛJþpEæñ:aRÜã8½òö{ZjXÄ\4-J»gû¨]FÚO©¨à±WêÃL:¸îÒ$<{Eý&GÉÆGUðSÄÚáÓ	1\ _ªÿSc-7!@ûÜ°l4wEWÔë9÷^üXÄí9%ñö491¢¤kä$k=M:3"aüpèö=}@¸Hú_e(Ý9F·sRîD%ô)»¹ÇÕ-CU%õE)5=M!u©mcn¹»wNÊ­ã= ¬Ä=M>;¨QëÆ·2)W·¡Üâ¥ü;12 ¤ÂjD=}¡°¿9BaC?sæ3º¢¦%  ª{è(!ïuUÄY¼ë¿-3+¶VMÑ¬Ëðé!íÌ­×$ÂÎ©þ¬=}:h@jD@Ïeò¨áI½á ½é£Ó°È½b²eË7ÇÝ=}]üUhDJµ¡TÄþSU¿Ö?ðÏùÐrÏWï³îúgácçiÿ%ÈëÖuìyã.zÆßÓA+É¥ðiá÷õþ6¤hÕýÖül	IýN|½JÏX0åo1ÔZ">KÁ#-òjX¸j¼bhàÎ âÂDP- 7=}45¡¹A<·S«ñ{)«¡Y"qþ9ÿ7}Ä¦­¯Ô¤"´~ö\ÅOÌÕì,t?ðFs÷ø ¬Ãf(0b9ÞñLW{]"äêãÉLö§Tð/eU^É¦ªio×YVbf&­ÐÿQïN*&µf\ýð®DQ/b¶Ù'Ïòú¼ÑG<KÅ1d/ÏAòÿ[[Ü«Uü½@ÜÙ;¢¡6PÅâ¦*Q =}á¤<nÓ°¯xæ$ò¦ÜÀd]!çé!åú\µïàÉö&ùî'\·ÃÅJ= Ã7^6v6ë%¹¸[Kíß]mV¸îÉìùÆ7dÅèlÙä owOàk$;ZÈ½ógÚ<ø4ÍVçÞ!®4í2.A£= )×¶RÌÞ0	 <Æ\Ý1g[åþd3Ùrç = Ã\á@i«ÁË±ègÔBqJyÅ±Bô ]L)=Mfú¿vFõ²2TkZxºACºiÛ£åâöw×ÉãO´vM[KGEë1§m) Lt(·óNï«»7$F)<O¬UY|#Ï?Õîò£}Í©÷E¨ýnUìªÏ"pª»AXLÂëkczÁa)XTd} $hng@fU>þR}i½t~Z|ÐtB,}Æwi"¿Më,7ôlvN¯¢M=}{[ÏhzÖAXá+=}1<K-u¼qPDµd'áQð2]³3B^XáLL/fªGÅß[VêÄË-}7¯ì.'ÃËR%þÓa«
ÅFS¡;°Æ8OK(dè*ÞâZßh¡Ú0§«Ëÿ1F LoÞWrû8ii>â-}à³RÛnk,ÐUht
d;"2µðí·[g¿fwªTêYµÑ^{×Á5FúFñÏa¦5,ibcüû¤¼a»;ý§ì)
vòÅgªv¢t+vw²Sd@è>RýG#B×Oéb×ÝúC/ÂÕû87ÝM0æÝ?ÕãÂ7Ô¬¨ýröC¬)Æ&ÅH°I-=MÏK$Ìï±Fx¤EA0ÖÐ~Ú3 Bò¦QéRä­ÝøêôG?KRAB<¨R0qÚ=M®~h&¤"à@ÿ¹\éº4~îd=MôÖWµ}:®"étCÅ'ºÏßp´æºèÜ!¸l±TÉ»^ WZ1»^"xÊQxgÙÒÕ¡Ö£=MÓ0¸Ý¡¡¯öMI«ÚÏòxÎßjöÍGG2º6?j¬	\=M>û¤;æD*môó½ÿ§¨ðø$Då&Còfò.HHcÓ¨FPÅô|¤X¬UBY3¹yÓ§fMs:wÙ1ß@¬x«ß¨Ô(®ÿ~äu{êÖzx°Îô­!RÀØ´Þ©õá·ÐÚpoxx(ê*ñTÕHûçWåæKw¾:ëÀ<C"AÈüKÙ¶Üâ=M;= R[ã|ðó&2&7íØjF«iÓ¢çu¦)0N¿êÍc£,ø./$ÆXÈXH6jÁ÷µäÝ8íK¡ð/¶1àï]}=Më¹ßE1Þm<FQª|T¶EÁÿ¸g¨z ±-%JF3¯Çe¤<ßkÇ×ª)ôµ 0:¾óÌWD"gÀ^îë¯].8k+ñª_&¤C×2Pìß»Ù't#vW,ègÃv'¯¨",ðQÎcJîñ+ºY¡æ.h Oç°§É5= W%Ú=}ò	ôZ¶ý0=M§ºb£ß¿ÖQÖfÔaí	ìójflÙØG¡ub= ;éIOß¶eXãï&ü·q[¡ç5¤hîæî>í¸ÑÕ*WÓCÉåäLdMÛ÷7¤	æuxúEIíf	fÇ£È«2ul×FÁ©=M9û½äsä#Ðÿ^IWÂD 4»QÏö<Ã1!îÖ-í!ôùÏ4@ýQÇm 	çWVF/7%ÿãÒ¥ã!CNÅ¸$~£Ü;ÑìîÞÃ«ê1äã U¾~níÜL@ Zwþ1xgû	uýNû©i6OyÏ&ÑôÌbü\~l¨Ë1Ø!¬7E&ÈTuÝ4Ã½KóÄAô &(±ó=M÷$¾±|¤}ÚëFPÂ¡bÎ¨ÿ@q0¢Ö|w5.×ÌÐ|¬èÓL.ÅcÕ|Í¸#f,ò
(tË Pä¥¨¬Yplµö?næ;vË3ß×ÂÃWv°2TkÑyoÝIÜ75P¹¨WÿfKÙ?ËÛ|}'ß]¸ÍPQÞß{êAéf
)µÕHÕÚ ZÎ½.=M¥HÓ!íÊ@sâ!°®-(­áåeºýØø!¦.v¯øÅ=Mh½ýÚN#<%á£ µ}p×ÿÙxvÓ@?
Òéá>/#í'Äø¾+­RiÙiÏ$4WíY7;?5ìWèüôÌ'{È@ÎæÂ·Õôæ²÷Rð#J ´ýÑÉÖðí *næþäÌ1Ø¸Gêéôí	à2åðPºÊY©ÏîÓ"+YYRýI"Ô£tÐqÎzjH÷D_d¾q´=M´;ho»B×ÒìzÂto=MúKõìôHL6%ô«(ìoÆüÍ¡TtÕûî|ÕÐQ²Z¾´óÐ[Ë= ¶ìË%Ö^ã"¨í
½	óÏÚOÇE0Øç	Ò°À¸<ò®Ý3:0z*tQ@TJ÷Îö ûi0X¸§v¶Á£Uá8Ö][Å1ZN4m6®2LK*¾9<·Émã» @[¶.h»{æ£	ÊBl	ø ÕC2Ë¥q¾3äâ´íñ)4h}B),uÌÁíÒæÏØZÑfázª= jUÀÉÁà°m-x¶~$§hÊÐåRkn³(PçØã¤êì¥uTDEÆÅw1/Pª¯ÍÏ +Nxëáªû= Ì¸A {Z";KmëÌróíÒ[òUÇ®Þiÿ^é´H2æ¢åX@érÕ\Ïö©Aó­-éd¤Ù3¥Æ^eÿS_é+x6vûÄô<5ü©ÍgLc%F7ûIr<ð×Î«sk«.dA>û²8àù(xó½Õb©»·êDKñÝÈRÕ.%ÿ"ô¨ÎÛanU"ºç?æé??$h­ÄØ1ý e=}Ù0d­,ÕZõõÅEBè¹(ü!è¹¡\Ñt=MôØ­ªí$Ùì$¿¨ôjgg÷.½ê;è·A¡8>Ba¶Ü;Ú~¸Q°W*û¯ª6KÃØqçï-¨ÁSyïK ÑÏ.! ÍJTÁv/kçÚÒ£ÿx×ÿÿ÷ÖAdTËèÕ±~^þß»¨uä£k¦0FU>wÂZ,3§%äÛ%{i= E¼°xN«68×ºTöµÔ³	âämcA¤<gÇèðèN­g5L#ÀójÚ¿]2Vk$2~J¹½gõµý¡Øm©¯îçgéør8z±ø'L£HÔÖÜ0³µ¯@æ#2äù!¤6¯È kÕ:1E±AL¨ð%eà¬ÕÃ~uðÖØq«óóOdª&©fT^°ªZr}¾N_:?Q]_ò»|ÍÔ$oÖØ8ÉeÜôüöÙ-Û¯ý©®M¦§ªìgr¸òddâq:µ\µzã§¯´ÇØ"ÈBgÊ¶XÏîtQ¤}=M±ØV
¾+êÿä3¨'rJãÕsvK	¨áÞôw¡= ²=Mßh8É+¬4%Fêª2¤$ê¡Úñ¾Y"ODÆ{c²å[¸L×¾hvo~¤,É#Ò~ <¦Ägb= dÎ1¨yÈX¤Ë×8î*3¹Óg]ÊúrDI¡ nU+¶iY= ÔLpÒ)¬çBÐÒ'*áºOpKO­(ÎW0èMûcÞ:x4À+¼töÖiæÚNÁ@Áà1ó j)\1ÍuºJ]Ïä¥Ù'WzõÁÕIø¡=}(D Þx¥Ýe9Ë<Ï£nu°[LÀuÅ)Ú¡ÜoçBÙq²þO<jv[l4òwàOªrÁLâu= ±Í{ÂOº&aÇ/Þ?¡ÁFîGÒ&@Ür0[µFt©ÝHÁáÑý6výí.ÛfW"mâFzü¦Wqï^pFÿºB0w±¤7îÕ36Ü¡¤¢´µ®¾nGpá	vá²¢fº¬£xÔ×lÖâ1Û'·Û#óX½UIÉø¼²l¼üzDúÚØépÿ9þ÷Ëqe<ùîÚ4NØÊ·{ephßV:|1i¬MúÇ°p~ÇofÈÐp~È!Ì r×¹ rßù R->ÈÍMBf®{Qt[ÐgRMÁ?$íÍE<uôÐ¥¾? éBýP=M½h>äÚP!°XÍí¨½omæ}ßÛ\´Dø!´ák'¥ªaq©ðNòéK{#~=}#¿ïðß#= è[ßlç?´è¢´~>£M«u>#L£EAl§Õù=}#= ´÷MLÍ÷è[´7îo£Õíø{´´Ý =M6ÙÝVEÈðû]Kò{	'­òÖX[®#ØØMÐTOÔK4ù«ÅÛ[C.Ýz¨Ð½àWàF·{f²MG"gz¥fûî<å^[s½´ âäe¸ö%3©B¢#T1Aî»n] ñ·5­¥õ¬?$iÎ)¦^0»©iÚW5åýçÈ@ïpø®¸""õò¶ß= Æqc¼mºH¥Í Êÿdínnì ö ÍèØÇýnãdOrýk£táù.Z#J_©É±~
|= ¢e1nuV¬}0ov}Ý©¹öxÅÀ\SnÿnÿuöOL}Ëµ²+xÃßS7"Ý^UZ80húÝ®·õ+èf?o=}Í?&ÚrÔ&²íÀ1 Ù®àæ'ûùn;Ù ¶ Ü×W§ø
:ìÕ;áuËþE)Söøµ¨ÉÔÍùµ©}ØÞó¥&Ç×U§ Çpü ÇYDuß´Ãü.+øfÌ@y3÷ê½ö°j´¿à3}!²&xwh s:wÖâÎÆ&P7²|¹ï "eiÿ=M£uý}¼lFjüÑ-D*IÒ!ÛÐõîâYy´¦ËyáÂgJ\7Z´ç+çª	f
Yc]qÐOíÍåÌ'w9Rùãß37Å=}ä¹åEÛ»{QÜÖCæ)s©Õf{e¯¯µIÇléìRëuà=} b*ø¼|^ï}j¥fØÝ>mÃÏU/Ñe¼;kº"»[ðÅØ7ù5§¤êPÍ£\>ä}ÓçQÍã[´B(Y¤WÆ0÷VÂò;¬À§BÆ#Á¿
¬k®[¸Õ8Äû¿øz¿î"
ô7rüý×(ùç¥PÿÜÐmYc¥ja92
OóZþ"ßÏ8xÒß¡à]®À«ö· ­(ImÛÖÝ	#ÓôÕ¾úpn"iÈû°?}I³Ë@q}Ô26QqÏ³ÝLcÁ/Þ
¿ÍgÕ~FuzùKræ·¨¸wË³gñçÛhYe;ûáoTpý»ýPö ²Ã^dÚ´ögûPèî2^&ýLb
üaìÙÛ·;dÓXÁ Ô"§}=M4ùüLÝµ³G«h0]s$J@ôS%0YëxÓ°×RIZç q¾r§>måð£lk\õ= .O¹ÿt}Bò7rÞa¯Å(¡ÍÍBÿü´?7TªïÃáp2®,eR= 4g´Úö±ù(Lÿ,Í6NÉÁ¬PãÔ>ØL[#9ÂÊ9¯D¡Ù¯'}&óÌP'&/'í,8²_ÅAóGòÝµwÈo+Ãä}[·Gô±_ö¸¹gdú|Ã3z/ìËÁï=MÜ9¹O+ó}#Ò
YÇ±¯w%ðÌõHõ÷ØV(où&çªã¬ÑÜc<G¿I´p1¶=}&·1NÁïùöÏvpÄß¦ÆMvÜçÞrc(fL­'Ç+ÄD?}*ºñz-Öx5»÷8Î1Z:(ù±¦~ºTÝ·S&jiÆ·7ÙÍ ¶L«eÎéòK'U9_EÔÄçoCÍA% ]¿.¢È,í#!= ì²
ó0ôªâÐ]ªI¬Ì¿wÁóÁÖWÅ8km¼uï}(y¤¿nJPÊN= 
]h4xàïÒqô½ín§9¨pjÕ}=M´îå-§¢sUÓÀÏ/XÆêqSÌÞe©7ÑËÕ®tÅÞË¾g[Uh©*?ÕýUî§ø¸ËÈ±j.R¹×ù¨ë«/ã ºµÌ~öªVÝ¸qÅLÇ]£Æç·ó¦m$Úî7ªSÒQ®úAKBnî^z6yIÑÿqtdØ§¹tLc2Xµ³z&òfB<zÆAwò{~uºÏârDÂæ=M±z.ÑÈ¯zLZáþEvÒÐº¥»Ï*
(1%eØê¾¤Þ¸Å@íï h·áÕlc÷ÏÜXTv·¢î¥2&dÁåîÊm´£!±§K¯_Û­Ö£eC¹1å<ÔYwi$ ]Ú¢ç~KLzø9áe÷«¶«°U§¼ÀHuÏ;±q@«³ë'÷¯ªêV+ºc*ZÚÌ¹ oÞÕCÝ6ÍÖÖ;«D¢@"ëÉ= âë ©¸iMVfÏ!§(Â3ùRìBlul>=}è(Oê@g)øGGÇ-A(mcå&Då°ÝÐ¨0
<OTÅ]à= ²JNfR=}õ«ÇZE.ú[.5K)lßÃ4ÖGßEJ[K½òòÆÂÆ IV^¢²Þ÷4>Ô_§0Ýk/¾Ú7éÒä½®ý¹T5Þx"]§gË^Ë)åPdån¿Þ
õ¿Rñï0¿zü Ù­¯-øHº¸s:¥{Ä£û$Ó³3åd=}*ÔHH¿=}=}@¥è©çO¡;cªç ÓÛ h§hâØÓÜ3ý£ï ÄãÀ-Q} Õ7ÓH Ù¢WÉ'²Þ´Ktc3¯câ<Tgcsgnêå9±ðÂ«ÝÑ
¿Å¯(Ø ;VOØtÑH\Ì ÷§0+IiZ\º]¨)6
ËR±dæ¨­r·iCîûY1¯§àOÎN@"åKCõád^AcY9	F¾|Fþ/7G2=}ÿ»)Í+uÂ4¡°u¡ôKfsQ.tNRPÿt:he2L£üYVþ	'pê|(øóxt Ñh¶:È×ÐÒjfükÅW@±T _âK[íö´ÏW_N M_5âêròWÊX1Û¯R7!Á%²Ô³&Ê¬= Nòo¶[£¥Dë@áµ;.MÐ{i¿¾OÞ<$¼ÑBrH+<«ªÇWØ'@¦Ô®Zzà¡¼£ß IuF	$>â'!Àqº)¶l íõ5Õ8ÝæÂu|b±=MþPrÊÞ¤RhA2ñ5ÿÐþ¤ª0»°^©4Çö
Ê'	w7Ñn_JÍÐ"+´ØK.¨DEI{WUõEd7Â]Á&Öá¯Y#ü=}£/!«øºÅåãµßU p&s~ñT¦ó~¿rCú5TÅ 0¿r:xô5¡Rïí-FÁÀJ8xËÁøL¸+¦ÝÃ)óéÁ]þ~¾g[}2ðóY,íÑe(ßáU/®AeÙN!¨7¢µröR«o[ÈßÍ¸'ë·=M¾>èþJqXîùQrÁæ[LÞ[[çÍd@@øG-¿Ùl]/N«ñX#¿ùOí<¬pb<\â®X2zòRîV×:væ ö}'÷ÅóÛ0~åe¼ï=}Äðm%ðÌQzfÊêrØy6ì²tµâ)|ÊA	éé#M°ÍM2ï­uÎ·2³Ç?
8ÈÿKXÁ= É8úài^¶pi.d1¡ª5°½ìYúUPÿ"':×¯å&QvñÍ1mçOÜä¦FcPÂUàpÔO+Ú¨ctúà_ì8Ñ-"ÃýzüwSÁNÉ)*vÛæðIÓ@ÊÇ¬Oµð³ñE¯þ´ýMÂ·^¯óY(¦¡Aïtx4ê1ÚX^.l7E+H5ß
A5¬ ò½Yê©
l=M|ÃÓbÀAg:p!~6H,AÊYáqcûx«¤FçWðþr\ùqÔjJh¼¨øûxXñx~H½=}væÿBZGè²84ZW@k(® 3å©ë~=M.Å+bÕ^q¹x_¡ÍéàV.|á±EõE&§ª8L$wÆõ2pÕ;L®¬à,û í¯ÅZ­â¶H0q7R%m¦apEC£>½	~'t@F :;µYkfjÝ5ÌÓ£¦vaGÎ·õÄ¢ß8¼¹&G'Â¹;_æWNiÁÉbØ©c%és#l^ú¼ýÖc¯¾ ³¥û=MLeåÒºÜÄÅ18È°YËË+hv'O/¤2ríÑ{öKÕ/2)¿lèÏ=}ömu®â ôµM ¡V{qMm¡êS@xî©uñ¶+Ò¢éMR[¯WbOL+ònZ¡±WGÅß/=Mçpdom½Úa³!8!lÀR=Md±F»Á«E*yÎ 2Ý¼[b]n³Ò"¦= [ÁÁ	<qÊ=}ñ"væ#Oû[vú21°
¨!;ÝýO= =Myª+Ë±â¯Æ¨øê{\ ºCß¶ll¨hî;r _¯@Å®ÌÀ×êÆüÐ´V¼ýþ±ÍonÑáV¯ê6*s³i¸ÿíÅ'%ÈGÔkBk]µõq482/*1tUø¾Ü= Âï[Ã£ëßÐ{Æn·ÿØÝ?T$FîÞc¼	|¼Ò¼9WÐEÆY_çÇ(ÔÄ&nvñ|9=}P8Ý10ÞäÔÐéI«H87kâ;h÷qdjØÅ=}Zìç$0oÙ	>·Î<®Ýè¹|}L¸!=}¦èßÜ¢wIÑ¤P{ lÉNè'0æÂ±lk%î»ÿÕÊ4È2Dþ}qÃÍD=MFUQk(¥C/ÙßÙ8éßèóXD3ZG=M2*ÅûVÅÖ4òÉ=MUðkÐ¥+Å®)4A©=Mê()u§SV¿þ0ó81ÃN{õ¶á²5â_h¹¨±wA}4= 8QÜ\ÛÀ|ã3àE+L®Ùé5b#ýÝ»Z
UþUuZÞÒï UÍ=M!Ïþ× ºê£©Eþ,W|Þt%¼Ä¯|³8[õ;% AÏÓÂºZá}Þäþ-§83ÓWjäòÁ¦xÌòE71;·_s&3Rw¹G©ª)ãQ»¦xHÊ³õÃD÷É\	|Ä{àÊk¿ÚÐd1Í=}ÌTIîÝ#3= 1Ä%K4=M	@î¹$ÔBÕëÞ±.bÄE"Ö¡ðøÜ@3äxÉõqãÛ	SDÌ²a!Ä¶Ü|MÕ%Ì²çâ¥Á3=}óç'ö³:Àü[u ©Úq}þ{L6 ÜõþçLÐ3ÚWNl¾0a_Ä¸Ò¯ëø/#¯EÇ|;a#éÙy.ÈFûq
IyÔ§¡ÏûÊ¦Áf¥¿Wë4ô ©]ÙÃ×Ô²ú(= ëXF(5v®×
ÎoÔèXµàBBþ6ðaî´¸gÖùÐ½Þæ¢ÊxÂ 	°cg©e³p"±p £S7áîSµlÈßUSØ?4{©?zã#lÅ'êá04_Ü¢·¤9^w¶óÙ]	(ýÁÆ£V\ÁjxøbôDÈÈ2= ©éS'¯Ç´úÖ"ÌfA¤°>8q;úþoåpKbq,íîL_©®¥(zh.iVÑwmvÄL4C+4R1OÖT|q7¼Ñÿÿ= çë9×õ©1Pw#Þ/üSw¢Vyó9/ö?a§,àé;ìõKZoÇ\ GÞÃ2Ú§}ô¹2N|¬ñUÕº­Ïr)âCß$éq\mCL±Óí	éAWõAuÞ6±~%hâz÷ËUõî½¾E±oª)K%>"6_6ôPûUX±Å °âF¶ªFµÝzS
{16Q8"åóY1ùú)Ñ['¬2ß%Æ/¤JCBzóªµÊ~]ÀÝ«ì²hWÌ¿5vg:_&TVçÀlËzÕ¦uÕÏï·ðèpÁC7aeÈø½GV_;Î!ÃR °üÔRÃb'ï[1}Á¬ ÷\v¯ÚõNëe*M ûp½+ä3ÚæR{Dºäé'c'¢²3¬"­F£1gWÉ°ð*ª©Ì$5ÔùÞ,íNúF,(CW'»I; .µ¹÷[j\üíhërYHIj8íVÅ uÈCÉb)M$\P5¢VsÙ-z«å;Ç19ÜúGù¡f[\^Ñæó1ÑlyèÏ=}þ¿é¸Â8,£©LåduÑIòs
EIxh
ó9'¨ËFÔR|ª{^Ì½ô4 DÉK¦±ÕjJL=}|gHÊÌ0$Ns¬¢áÃ³_!VdÖ[{~Y®5s­Çt~I7Ã&= aNjwMû¿|Øâ|ÿñQ©óËÊp(<%}ô2vÉ î/ð¹mwuÔÕ~ºQµìKxaoËl?qYlz~d=}UfðçþN= j:E$®^_ó,¹<2¸ÂH­gîgFë5Ö ^&6ÚVwD÷/êæÏ?úáB¨:ú/Ý~I³ÏAMt¡_Z+fN¶Y"U_ö	JC4
°y¾#&ñM"ôñ¶þ
«= í®ÉÉiK©=}åÁÖ 3:íðJÈO×p'¿Æ9®ÆHhÊVÁé×|[6}%Ëò÷°~¿öÏ_çCR= ;ïQaê5ÖjÒÇ¿8íçËW\ó¾TPeJfCicò¾T½ÉÕ¾+jYpéD/yÎ/óØþf ß{'èùv~N°6ÜQ² Æ2\7=M&óó!©L¥MxNjkÚaì«£Ë®ùQ¤²!Û=}ä:~âê7¦íKÝtD¶ª"T%B*Ú¾ÊH©Ty¹×a	b+zÉiûv²ÚaìVf~ÀwC31æ= RÖJfxo_5o°ô4ð)ç±ÃùaC¡$õ*¢®îLr¤|¼Cs¤®þrüÃºújD¡e¿mþNsmu&C)¹hFF ^WoW°Q}Is±@J
.òí=MIz>"Ô¦xy-ÃÅ:wr-+S90õCd¯î+ð³ë¤%~úÊC"}P²¬þ©è­VÑåÉeg4;Ì0KdèTµpöV}- âþõ= 'Naâ°z<·jü¨º\îÚwù+ Àäþ:Ît÷AL»w³_÷ÑÉ¢áVFReÎ©R*[L_òµ.WCK'ÈÜry<£|wÓó¼¿$ÀÂñhbì#¦:¾9±¾(üv^A0C"É°÷iXÚ@<nV.kkë´_gE°æaQJÌ¦Y
+MTÝ	(Fd<QC×é1Q#®^½lrôNÈÿuv¸l¦ô²¨åºDËËÓ{"ïX%sjÁwc= Ð.ñB¸½jI@°,M¸ .oOfÑKä2/OK¹»¯6ÚÑÉ,¤¡96º¾#pRË#Þ*Ðq¸ÃBªÀ¿-vNÈ¿_BßÁXhÿÓ|ÂNtCã­C4KáI3ÎI= Û¢é âõ½LbÀ+$E^êø CN¦V'¶xâÆEØ<¬Éíjü¦»¥X¦V1 öüTÆ~W æsõE}f[C×2{]?=M~·VQ·÷ùnZ Cko_í	¶)­å .It%:µÁ¿Oe!Pºì¶N$¡¨>TÐí=}xWY*C×9«bElîíLzñ´:ÂiUl¡gÁ0¡l+ãZþQPMçîMpj"ý±BBÆ}I3µq¡(ó«Î=M7}çC[a	79Fhìëõà/x2vù,Åáca<YUå²í't¿KW!1}
Å¤1Y¶ðÞ@0ikÛè©ñk^=MdÎ´©ïË¼R¥y<&ÐýBLÕÛ¼VÎ1
=MoSm?½à|= qâ/[&4)¨H«MÌxÛÌïYe.
gîNÀ·OkÅXi·½ÝVLf±1ùÛ:*IUl79ûÖ;Ï§ùw?ìYü}ÖôÎ:÷«å"È<öèj±¿Ã3áîu©¹VÅ²UCXê"ÿ1çua"²
VÏÀ%} 6näKÈè£À?ñ©;$"ArONpöÖ}êÿ½}?ZòÎ:Cá³bÝj=MiSÅÞ=}{óô_Æ¶XQ$þ>Jt}gÀ$
¹Ã¶z=}ÚéAh%
Ö¢ Þ0;Liâô²R6ö¶óÉ_jB½â+ªË#¢AêÙÂººÍ
ÒP
ñ ^ï|uñ®ÿh|ó= R0hVHÖ{+HFÃ*þàÐh<é´-ä¦Å0±U¸áÇ!ÃåzÙ$"OYRV;9
G°áÃ¸5ExØ²èmNf«= = «ù§+3h¡CW+ñÈF½DÈO7
çË¿;ywnLA5$ÇªMb_M¬êµl:3Ë¤y6>â¢ÐùÀ¿Y¹Ñ<èºNe:TpÆ=MËF»\$Ë!vH ú !hÏ"ü
\³I nyVlI n	p
ÁaoOü(¾RI"pØ*ÏyÒËìáqâñJ2.Ã:·ÎuQAáL]{zl%xq)ùr dpÍY^#'VÉ!fpQÿç¹ øÀEtØ¬mcÊÔ²QP*N *NrZÐ¯:vrHúo¨6ÅÏ9Öbtrõk¨6Á°Kü p¶Ä"ðZ ð×ÏÈ_>,µ¦éÃRhG2ºõífÅ0°÷ä=M55ÑDU)çÉ* X´<}àîdCöíÜ6bY ¶õ:@ëK
VD ÑÆ©"@+dü	,a}$åõÎï¶÷¶0àU00ÙUÎ§MZÓFò]YàÔJ/Å
i^-÷*òi]r56ÉëIû¾Li.·Äë÷âÐyóZÃTëÖÅX= ;±ñÐ}fúâö÷ï>XðâtO¢¼QT¢«[ü®ÄÃC¡:°îÃ@ÄfÜXXo#0¼yY47KKáÉÞo^c!Í°F¹±(]]#ÿ20L½6½8·çíØ­p=}îfU\K[Âð»ðnEö};¢j&OeÂIû£rzþÚ<ô}!²sÎî6 B¸QSú§²v¶ÉqWþÂsìÏZ£V0Kjv½ï¡áVËôÂÇM#Ó¾ýäÀtÚÑÅD©¾C«±_V¯_iySS¿Ví÷¶åÇVU±Ë©*sÁO%¼Dÿ/ÎÌ©&hÙ¯Ã]´NÃý#Û¬!VÞëÝAÀ ¤lÚvì_®½¥T,Æ[	V²öbìë¸ÃÃ¡òãÃáÚ¯²ÕdQ£ÃP_ø¹-,v$_­Ëê}øU¥T'ãïÖ³!¹£ÄUC/ÃOÜ£á³Tb(=M³åVè²½H ôÃP>g
'Í~Àà}Pá®ÉDè8ùQÕñå}ª(=M#ÏÏ¬!V_¯ö¹õ°	SNk2Ý}©fmÒáÒD*(íÝr±Y<óOþö°ëV/O_yÍ}þEZíAè?ÈWqÌÓJe@ôù%|·<@(.ka@n¯vmI ¶ nI= GZI nÑ¹ké}J1 pÿ?MàòHê¥tÇ¡lC4Qæî.Õðþ>¶ß½ýKI÷¹:2ÖsDRU[¸'oO1N²9Ð1?ê´°CÑ|ty¤s²¢Êß¤FôÕ¿òAì.³ö°+Õ®îÝ5cÁè÷NExU(UãRéÓ{æ¿ïfÛØöô0¦´è<¤)½=}.L6}~½N{=}]µn;¬H¨Hô½ÈtÎÓL$­Á¦.ÅïtåÝ$Ü«ÝÙ"ßp{ä6µ½=}çPM)²j(qEÃ5k£è=}ñ8ë ³«#)áÙ¹Ó)÷z#.úwöStB-ºé,Â^¡"cGÅò-Úûæ,b@ÆA¾¨_ã±xÚkçAºæì¨Q¿¦ËÏÕf½!·¨ÑJaKAeJVÂSSKÄÄlKkKìë_
¥{kgÍ±Wµ[A×÷î¥EÁ¬,*g:µtØ2ÎÍª¢ºÍâï~= ö{vvúoËóçmÒzÞ²jZrWr/e¾pibåÆáê±Ú4"Zu±Òx*Á	8Q"²N°Ry óñÆGãÿ¬|èòísÿ³Äí¢P9n|MVesOM. ¨bØ1ÖøwÎJ¡$H= ÑÒ"q2Ñÿ;³ä¦ïk·%Ý¹LüßþÍæØòQXKº«W­ÈÕýêGë) ¦æÆî	y¤Û·ê¼nfè<TÖôªè2éë½ÎÌÐnòJ)7qò¤é]Þ['Q¥ÑS= ýÞbÁ¿qÉ«?Òc¾;ú°@xò5p¿x)-,rþ½h*¬æñ'ALÙ}8<DrÀIÇfI¸pRFi9çBC¥×HUE¦(ê^k¬·%#fªt¹1ö«þ»'Â[àÅáOÝþØ°goUÓfI0¾M*dÔ=M¾x'¡@(9Ô4²ÁÌÐÒcÅ;uÍ1ó^[)b[ ]@óJx©?},YpÑZK ¢ëÚo:j9"ÀÊc_AóJÎW#.R¸9&QRt½±61øw½*n÷) ¥6_;Ã=}'ÉÄí5á= n*gyîÙÖï8@G¢Ä Øy\¥ì¸®7YC Î-rëxxsoK«»O«òÂ^	îfzgÕàn	v)×¾Ð°gv#{ë¼±¿hþ<'ã°ë±^ÝêFàåFPó+µ51UÇà*ÄßçWqç°ûp¬mýiûÔæ"+yÏ= Ó*«òf?YËÂÒ@ì5ì=Mv½Ôã4üýMÇÀàîf>,óñ¢þí--I9Úf:,7õßÞ{ø=}×({¬Sa{"Ae£åaùú>¦~ÂY³°Z¼µÓ-5]µGáà< Ú\Ýh4Z)vÊGcì}¿
iÎnýº­d$¡ÇgÆÃèý6@¯Ù¿éÎ®0@g¹2ÃõatMxñ¥®j4= ÔnI nI nI nI no00&úÐÎjÆZôQ0ðH%íè\6>D+ºñ2#|ûÏQ²H0~ÛZÎl7\){±!A\©·Ü	öñ½êG¬þ3N3.F=M'[¸kcàl=M9LÇ¨ÇTzòç}?:|aOÝè÷¢I÷
%ûÜ%M®= ¹ð= Üùç>F×óÅ¶m'ÓE-þÎÄöÆ{ï÷Ï¶ýâ%©Ï2P°~Zî(}?!ÔÆ%-¤üAãÅ6ìpÏê»ºDå°ðÐ6Ãö]16È%,JÞPÇïhq}þ
ÍÉKÉÚ6úDÊÜÐ&6k-71Tñ{$?= ×&=MÍîäjüá6yÀËÐ= ¾HÌ,z©_bÛ¾çÀ)5E9B¯±Éöªh9zÒÊíB\¹ø
g~¤NöEFrêFâ8mr$ÆCÒ&7ù,L= 1gP[ÈD,v±{-ae{ü×ý)\_söñvE¶ P
«Üðy_Ú8±Ý?8Ø°TGäóÒyÄþY7]Ù² ÊF¢hFÅr¬½·T õ÷üVüÿØyÎt®þ2lyå}v©û-$ì±éËaZ´·6=MD¢}H+*=MÊI?¸¸Ùm'sÐQg¦ÅcTD;øSï é ¸®ZÊñßÿ?dq{²íõ,DTr·¶Í%1·Ò6Ð+sê¦m ,T{ÃMæêÒ¤Í'Ü}÷3²e($YfÊÆ;g.cLçýªØÑ³<rÆ&¬°¨£6¢e,7!ú³½
ù¯Ü!ØÊÙ7¦Ö (¬ÖåâuÍ£ûRx³1º<ªe$05RtÂÉÕrØzÌÙÆkDé}»Ð&go1Ûò½H¢M¥dX{ðuÓâÁ³<òF¶=MÐ£6²¿º3òD´ð°íz/b{¿Ý8Q ±S*·ñavEmâÊn¾Ü ZÂ{Ïæo÷QÓ"zÀé³<2DÒÜ&þìÒ°ÿùB25c©v5éÑXL?"Q!ñVW:*Ú2wë¯A9å³þ~¿ñöOÜð+êÜý®ñÔõNs=MÏ!^0{ÏYB¡!h´±¸<@ÌÚêDÀJ&glP%6âÂ^ ·ÖZ~ã<*6Æf ¾Ü XÀ{Éï$>ûE@Ëøc^ë!ÂqHÉÞÆÒ4Ðü¤ÐHcVl%7Tå{ôtñIw%enHÌã¥NæòÆÕÄz­ÀÔ}_Ö;iBË³\?ì:0|vjÒ®.Ê±ÿßÿ~ Q1ð33×®·þð¦Ò¦¶f°aZûWC«DÎÂ&h¤Ü°]"ûÊ±ÁQ{1üÈ£ÄÍ+dOÛÅ¾÷¸Í÷Aimâ}àÕ¢yTãÐª4mrº<0L$0Ü}ËEZe1iÐú¾6ö[}²ØÅ?¢ ³Åíhd º¨ÑÊ M¤º%gR{qbNW{ÝÏÚéõçýGÐPc&r°ë½ò6ÎÐì¡¤¶Ø{é|Göäq9åØ¢[ÞA¾qÎ3òÏ(-èÂ FiÏ}wÏàié®Ezîí&ØcþL7]f|ax%=MÊj3^*±­·6B5BÿÅ~ï2s¯%=MÈìÈu59ê¶¯Vw5	P<gndFüV(råfø¶V®=M¾ìpJ£¶ìl©òMºW{ÅïÁS8Júc¥PPÛýÜÐkÛt$â¸¬Ré_ód%=M«$hBÜâÎdÛ4m&$iLo/¸}zô¹)wî@?)Ê¦R=MvVYP	Hì$Çc1·%Æ6²æä<4mZºóõ¹ùPÅ^ÑÐ+ßérëQÊÏö)F§Ü±{ó06rË/4·¶·<p{]ÞDJ$Á·µñsNuoª£²ÅZ@Su{û	3tg¢4²|¶³¶m&cÏÓP21zÐGUt¶¦ÿ1Ûé'æ ¯P128Å>èryª¥)SðsàJô¾Ð³¬Ñr!«\ñ1ÈP\?k3÷(Fî¢zå:#XÝÐÅRå,¯ñ'Ï­ðÖÒzüo¬&Tf:GØJz %=M¯âÍq%x\}ò+;>VºëÕJv½&$±ºÏò)vôRI:8q\ÄÏÝ{ÿ:o)PÌ-Z;g£¬¿íD³(dô®%=Mú¥²íq
§ìÜp-Æë7ñ­ Þ¢H1!±\é~ñá*Ï½$ùpG+DQ®Z¬ñ-df;ÅSGòMÓL®+^Êÿï2¡¼ì¢¦MBÈÆØg-"oAÄzY¸%	øé5Áa»Íä£úÛ§×Ï$ÎÕé²|y®}Ó¬µ%ÖwªO£6r¦Í»E0ÞÉ#ÐhjP 7£º=}ûE°;?âr5ñ?&dzL£ÛÒ}#g0ë U¦^gp³%Ó1àð(âÅg² drºê¡+\¸Å¥å4À®Wa{f'gâËj	
_õ]÷÷Ü}¾Gù´½ ÕÜÐ*NÜ}¶w°­0þÛÙÁÀqðåTD{ðÏÔÌN°L¶WóÏ£âÑ]Ä×ÂÑ4â@¾ª¢âÙÿRLÅäÌ¶t:à~v¤!ÈÒt:æ2á¶q°zÍW|ÒaÇá$¾Þ³ÚNyÞ6ýdy¸oM®4ÆâÛú$$©ÂÙþ{RLeÉÓnd1[Ã= ûØs/ àîu´ÒÐÊÀ¡GºÒn)+<Èm)Wû-&L_à3-¦0è-bT¼àòBÇ ýí8Øfê^9Béàò@.r5|>øfê>9B9R~NÒÓ£Ø2Ô
pÇÝám±Éó´e¸«æk·¨Ø¼CîÍß·07À 	à|L[QkÁóãðz!=}Ç_}UHÄ¯âY}# ^BÄ.îÁX+ßv0È.¤A= Kz«®>vý1ájpkqfygJÐw= kè+Æ¡.CÅeæ0¹WÍÔ@P¦= û¯ÑgÄ÷í£ð®×=}U¤¼æøqeî/GÓ~NÆ
è
|Z¦yJdöµ×U«QÆ=}ÆUá{!³±@lßMòôzÑ÷!ú^ôZù¢a\Î¦|à×Ã=}l´»;Ú<âÆµÙu±6åÇ2BÕ×QiF¹åkSµeY°T½!bÜÈªÓÓû«ÃRÿü¶Õ,Ä:#À/pS9J*eIÏ´¹vÎÀj{ý4óùV ¥èá&îç90¨uË¤¨Í"¢îHËìê[¤ÕñäòiO.e]k¡uíÀF|øz¨Ú'§Q4ùýÛrö_G<øOõ=}<Ã¡ 5öä<ÿu?qÃ1¦Ì{ÕaSUU>,uBdG$)5É¬s÷XYJ?Éþ7÷Â9;4©(>»¼hÚµ= 4ø»ÐñÙZ'.j4ÀÊÛìêµª3~SÍBÆtîÎ©l³%?ýÁÌîv~å;íÂ"z´+ia3Á©×uZõ.^þlíüÑ½¶êÆPCÂ0Þü ´ý¬Â»Úü£6ú[¶Î·ØþJk©NþÔ<êÉL;ÂWcþüË[7IçÕaOmµK8#ºPý··$Rh¯ $~= óR¼Eº6v¿¦ijÔoq2 |Å¤PE¶6K>qfl§= j76OOv=MÚlf¢úúÖ ÜEs×±ñ¼.kM= -ºa½oyº¤u9fFpðÛ"óDCÊ-RéÆÒ~£nRwT.ü9¤Có®ú¨îË#'Ùqt1Bïá(ûÎ&!¬cHËþqÇ+Îö|ÇPdtkBãZ[Ähe{Âcúp2ÎëE¨ê³¹%"Ù*¢1Bä¨Í f{øw,hÐC+Ý¿øO}ð!;æå1ÖA½¡PøàÇ-n)ÄÍx´ÔÕÜ{ÔèQ= SFó´= Ëm£\Ø6k· ´¤¨1è¶¹:ük¥e@ÂÊ,4óÇ&¤zë®$Gßåò>l§,MtX«²%õ ³A<K'pvÜ°7À²5Ç
;vùÊæ´½2Ø°o¶¤ÄÆÓÅü^àF«D^ÒÂD¿	ûÏXö6E×7H.,)~°Z·âÜçªA6¾4%oX¿¼à¸p;b,÷º·dó î¶ÀZAóCaÞzFüåcvÓÀ	1§KMÁ!¡"+Òÿr°	ÏÓÀDðÏvM¬ð9Ó§ÔýÑ!úa§¯Z±WCÕ¸ir#+Tg®Gù ô<ÚÂæ¤F#õpr¨ß·Ë	ÇdÝn»Üî\yG&éæç¿bNéèwAIü¤
Ï2Uo³5©gev!%áíû©~?d2Öâ¹5ä
&fàtê¹fÇ}í¿!6é»0S¿Üj/Úäéîí­µMÊd¢«KT_Ô_¶ICÊÓ4V;,tuø§	¢Q^ø¡#øq6Np¹Ø1ûlÃpøÉâJç5î	.Ú.Ût.ÑEIt¯&ÊbZè
iô^Õ¯-ÌQõ^ +© Ø[Ëv7$Pm,Ré[Ö8}¾§¹cz¶=}VÔ"³qå8¨z+'=M/~ªñ5v·Ýñ2ÈÅHøÑY\ME(±ã=MôªUQ~dIêÕ¨Uxîº§O+ÎÚ?ulC$m´ 9r·Ë=M©°RL{qQÞì7$Te5HûqzmöÑÜÙUÁ1Ü9ü7ËÍ¶(v÷]º óþÖ§â®ûöª	±Å£¶Ý¡j±ÒöL¹Û%O@#ùÏI/ óÃ= ^ì5qb.emôØ¶ºp><;Ú]dÕéRUzÖÄ@HoÈ]Crt_ð·'#67âY,îvåG¢4fT'#åÉ²1 ÄVvb(4¥¥m!òÈ½áöQÀ+¥¬ò=M=}Åä>®âxOR¹TNf§M$hÄÛ»ûEÞì/Ãb·Ù;¾	ú³ÖÖ¢+nÕà+´h[¤¡ØÚd^ã8À3#7õÖ=}Æ¯[^KÔèL·Edíÿ	/9ÖÇZ¾Òùe°É÷ôA¬zW©AùO"ewn>Ðyøe~ÌmF25öu÷îYi^AÔä©5ÆA-(ëÏ!èæ]dCBz\®Wç!Ãù^ %p,D	¶©¾¤Á¶Øz ¬^M+ò~Xê:­ÉÿW~SÜ¥í=}®*hºz2x$¸ç.ÞfCív­K?1\-ëf)-0ZËF}ÄÞ6£¯wfÒ*1õ§O¥~D-X¬Y'Ì\§!®ï¸@·ÑKiÝ'QzßáKáØ¯>-xl=M}znN¼ñÒ?M B/ÝtaáNÂÃç?mF¹Ó+\­ä+_"·VúÑ0XUÞ°QÄá=}'uÈÄ·bwøÄåXèg@PWu»mKÅÌ]= %#	lY2T×û!Ty$¿ú¯uÒ5\»[:Móß+d0±B«·¥±t¹¥B³×'x;ÉKtA¦Ü½÷;ºvð<[bÏÿbáõ\DåI	¶¿÷½å
ÜÍOVª¹JvG.VÛèìa Qÿ	ÊPtÛ¶¼ÅÐÞwÿ|"Üá	raWâÐçjT?2O³TáÙ?D6þé²EÙ0©CòèZI ÿn­Ezÿ®æyOøba	= Lyÿn. Ib?tKÕ ´¸®@Ø ,p{Ô Mö^p¶>föYZç8~÷!AÕ"\ ÎðÜÛ	Bù$ çûcôS¾ÿCVºïVÂ¶³Õ¶»õ¶·åÛÖ×é-×	-4Ó°¿CUÎ¯óïG®µ! ¹ÇÖ½!ÖÕ1ÿW÷éçàÊ¿iÊ¶ÿ	fxÓÃ§!×ö×Å(a÷².2V;5þÕ[48= XYÿxyæUÉYXØWæë÷·&g<z)ÄÆú/O>Ø+é¤ch_JEí¬æî÷®×!ÎS¿÷îCZô¹×rRBx:àýÜp|^ß	@!Eç ñïlVÂ¶³Õ¶»õ£¥Ú	·$Õ­¬÷$Ö±Ñ12k$Ó4¢yÂ3{ªóXRQr-ò&M.é+9¥I*÷ï¼¼üu¢¬öÅÞpZGjpIe÷ê©* `});

var UTF8Decoder = new TextDecoder("utf8");

function UTF8ArrayToString(heap, idx, maxBytesToRead) {
 var endIdx = idx + maxBytesToRead;
 var endPtr = idx;
 while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;
 return UTF8Decoder.decode(heap.subarray ? heap.subarray(idx, endPtr) : new Uint8Array(heap.slice(idx, endPtr)));
}

function UTF8ToString(ptr, maxBytesToRead) {
 if (!ptr) return "";
 var maxPtr = ptr + maxBytesToRead;
 for (var end = ptr; !(end >= maxPtr) && HEAPU8[end]; ) ++end;
 return UTF8Decoder.decode(HEAPU8.subarray(ptr, end));
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

function _INT123_compat_close() {
 err("missing function: INT123_compat_close");
 abort(-1);
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
 "a": _INT123_compat_close,
 "f": _emscripten_memcpy_big,
 "e": _emscripten_resize_heap,
 "d": _fd_close,
 "b": _fd_read,
 "g": _fd_seek,
 "c": _fd_write
};

function initRuntime(asm) {
 asm["i"]();
}

var imports = {
 "a": asmLibraryArg
};

var _free, _malloc, _mpeg_frame_decoder_create, _mpeg_decode_interleaved, _mpeg_frame_decoder_destroy;


this.setModule = (data) => {
  WASMAudioDecoderCommon.setModule(EmscriptenWASM, data);
};

this.getModule = () =>
  WASMAudioDecoderCommon.getModule(EmscriptenWASM);

this.instantiate = () => {
  this.getModule().then((wasm) => WebAssembly.instantiate(wasm, imports)).then((instance) => {
    var asm = instance.exports;
 _free = asm["j"];
 _malloc = asm["k"];
 _mpeg_frame_decoder_create = asm["l"];
 _mpeg_decode_interleaved = asm["m"];
 _mpeg_frame_decoder_destroy = asm["n"];
 wasmTable = asm["o"];
 wasmMemory = asm["h"];
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
return this;
}}

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
/* harmony import */ var _wasm_audio_decoders_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wasm-audio-decoders/common */ "./node_modules/@wasm-audio-decoders/common/index.js");
/* harmony import */ var _EmscriptenWasm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmscriptenWasm.js */ "./node_modules/mpg123-decoder/src/EmscriptenWasm.js");




function MPEGDecoder(options = {}) {
  // injects dependencies when running as a web worker
  // async
  this._init = () => {
    return new this._WASMAudioDecoderCommon(this)
      .instantiate()
      .then((common) => {
        this._common = common;

        this._sampleRate = 0;

        this._decodedBytes = this._common.allocateTypedArray(1, Uint32Array);
        this._sampleRateBytes = this._common.allocateTypedArray(1, Uint32Array);

        this._decoder = this._common.wasm._mpeg_frame_decoder_create();
      });
  };

  Object.defineProperty(this, "ready", {
    enumerable: true,
    get: () => this._ready,
  });

  // async
  this.reset = () => {
    this.free();
    return this._init();
  };

  this.free = () => {
    this._common.wasm._mpeg_frame_decoder_destroy(this._decoder);
    this._common.wasm._free(this._decoder);

    this._common.free();
  };

  this._decode = (data, decodeInterval) => {
    if (!(data instanceof Uint8Array))
      throw Error(
        "Data to decode must be Uint8Array. Instead got " + typeof data
      );

    this._input.buf.set(data);
    this._decodedBytes.buf[0] = 0;

    const samplesDecoded = this._common.wasm._mpeg_decode_interleaved(
      this._decoder,
      this._input.ptr,
      data.length,
      this._decodedBytes.ptr,
      decodeInterval,
      this._output.ptr,
      this._outputChannelSize,
      this._sampleRateBytes.ptr
    );

    this._sampleRate = this._sampleRateBytes.buf[0];

    return this._WASMAudioDecoderCommon.getDecodedAudio(
      [
        this._output.buf.slice(0, samplesDecoded),
        this._output.buf.slice(
          this._outputChannelSize,
          this._outputChannelSize + samplesDecoded
        ),
      ],
      samplesDecoded,
      this._sampleRate
    );
  };

  this.decode = (data) => {
    let output = [],
      samples = 0,
      offset = 0;

    for (; offset < data.length; offset += this._decodedBytes.buf[0]) {
      const decoded = this._decode(
        data.subarray(offset, offset + this._input.len),
        48
      );

      output.push(decoded.channelData);
      samples += decoded.samplesDecoded;
    }

    return this._WASMAudioDecoderCommon.getDecodedAudioMultiChannel(
      output,
      2,
      samples,
      this._sampleRate
    );
  };

  this.decodeFrame = (mpegFrame) => {
    return this._decode(mpegFrame, mpegFrame.length);
  };

  this.decodeFrames = (mpegFrames) => {
    let output = [],
      samples = 0,
      i = 0;

    while (i < mpegFrames.length) {
      const decoded = this.decodeFrame(mpegFrames[i++]);

      output.push(decoded.channelData);
      samples += decoded.samplesDecoded;
    }

    return this._WASMAudioDecoderCommon.getDecodedAudioMultiChannel(
      output,
      2,
      samples,
      this._sampleRate
    );
  };

  // constructor

  // injects dependencies when running as a web worker
  this._isWebWorker = MPEGDecoder.isWebWorker;
  this._WASMAudioDecoderCommon =
    MPEGDecoder.WASMAudioDecoderCommon || _wasm_audio_decoders_common__WEBPACK_IMPORTED_MODULE_0__.WASMAudioDecoderCommon;
  this._EmscriptenWASM = MPEGDecoder.EmscriptenWASM || _EmscriptenWasm_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  this._module = MPEGDecoder.module;

  this._inputSize = 2 ** 18;
  this._outputChannelSize = 1152 * 512;
  this._outputChannels = 2;

  this._ready = this._init();

  return this;
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
/* harmony import */ var _wasm_audio_decoders_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wasm-audio-decoders/common */ "./node_modules/@wasm-audio-decoders/common/index.js");
/* harmony import */ var _EmscriptenWasm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmscriptenWasm.js */ "./node_modules/mpg123-decoder/src/EmscriptenWasm.js");
/* harmony import */ var _MPEGDecoder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MPEGDecoder.js */ "./node_modules/mpg123-decoder/src/MPEGDecoder.js");




class MPEGDecoderWebWorker extends _wasm_audio_decoders_common__WEBPACK_IMPORTED_MODULE_0__.WASMAudioDecoderWorker {
  constructor(options) {
    super(options, "mpg123-decoder", _MPEGDecoder_js__WEBPACK_IMPORTED_MODULE_2__["default"], _EmscriptenWasm_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
  }

  async decode(data) {
    return this._postToDecoder("decode", data);
  }

  async decodeFrame(data) {
    return this._postToDecoder("decodeFrame", data);
  }

  async decodeFrames(data) {
    return this._postToDecoder("decodeFrames", data);
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
/* harmony export */   "AUDIO_MP4": () => (/* binding */ AUDIO_MP4),
/* harmony export */   "AUDIO_WEBM": () => (/* binding */ AUDIO_WEBM),
/* harmony export */   "FLAC": () => (/* binding */ FLAC),
/* harmony export */   "MP3": () => (/* binding */ MP3),
/* harmony export */   "MP4": () => (/* binding */ MP4),
/* harmony export */   "MP4A_40_2": () => (/* binding */ MP4A_40_2),
/* harmony export */   "MSE_AUDIO_WRAPPER": () => (/* binding */ MSE_AUDIO_WRAPPER),
/* harmony export */   "OPUS": () => (/* binding */ OPUS),
/* harmony export */   "VORBIS": () => (/* binding */ VORBIS),
/* harmony export */   "WEBM": () => (/* binding */ WEBM)
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

function EmscriptenWASM(WASMAudioDecoderCommon) {
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

if (!EmscriptenWASM.wasm) Object.defineProperty(EmscriptenWASM, "wasm", {get: () => String.raw`dynEncode0078ì½Ú×>7
.	0ãGtoÿ3sZfAªJ(\ÎY~Tú­ÓÎÌÇYJrsÖñÙâßxHó\ÚÊ3¨ÁCßüÉCæÅdc÷yæ1fI³õiVWwZkeóÍ¯ÏÃÞ×=M+ï?Mv6£©ü?öWÏ ·¼z´ ¬½Ë Pï2mySï	DG½{í¨H"ü!¾ØÅcú3R2µV + OÐRÚ3ÚÞù¸Íý+¤¡ac }ûMîM ®EªW»±°úæ7sh#Á±~EÛ¨Ç¤Hªá}[,Â 4q ë'=M@qn£õ!/ê\ëÿ]à'X]þècì_.äUOÓèBIXÍëve/êFa|è}íHöÅ¦;bêñÔ¿-â\nVÎËç:dÔçWÒæ¾Çchw«z;Á{#Ë°í"}&±í|fèbT[¬ð8áh Ë°ïr³hWÆwvWaðX[Æ{î²p4K8&}6ÞUÒ¡+×k= ñ±	mÝö= æ#ç¸EÇCAC½AåõtURÂ5JL÷TÕy±i(ÔùtÔ]ÖyV¾*%QUÊûLUê¿¶Í[ð ATAEÜ¨Ë<é~ñÓ2X]éVZ[¯×®CDqUdwOafÇRu1= L²Ì-Tl¸[%G»òO´ÔwI(÷y¬ÝóUª©sÚrf8«I«<Jf"ùây0¶FJ»9= mõÇ f wf è>Y=Mª8¯øèf´ù®xç,´Çº5]ø!zn_¡nxkY«ÿñQ!,Î{îà×)Éó2;{ÝRlùKÝlhððÄ®=M®}ø#æSccòc¥¢ª6cU,5±Ð­nÖ%ô±ð4ïÄÂÄx.èW>^,7jüäÇT*Yí#òGo6T?¸ÇÀG]!¸è¨§P¬åûö_Ò3$åhÌÀ9TS;÷êtEë÷
÷+~»ñbsgEÿàÕ'þkg;pXvxâ)5Å§¯L\vù_Vf|t¯WD¿;öçI EúTÇ÷v>ô<IØ|±>W é¬±èox¤e¬òúe¿»=}X÷n~ØÿÏWîO¸ReR98g²ÎVæd±4É. *O;¢´ËT ¨Èn[§úë.çÚè\øUÎ¥= oíÛÞsM/­'
.3Sø¦R»[ö°ÐLì!µOfsûRlé*éåÚòu1ÝßßÞÈÛ)Iz= S/ç÷L·|çPî®¦¼ô]máä¥Z/ü­"w~ mãc½g¥©l;©¼çó´¯xcG¾h¥IýÆø¦ïõü©2"Ù>Év%á°hïD$ðVÅ½/!þÞ<ðÍK%ïj^@V.÷©vGá¾¦T5:9-Õr¦R¦9U¸Ú¾:5"÷úD>ÞXiÀ©«Wa»ñ}ÒÄyq¶«W#Î)Ëû;Ë»/*c¶qÕuvöKnÞ ±­Ê-§]6µ'¡oäYº(½§)©¿²"ý<5î¨Þº®e»©Eø4<óª|¡D¿3Ý¿T9.Ñ½{X
Ð¾MTájTk3= = »%xÉ:( ±2ð¬HqÒz³üªÎ¿ åè4{[Â{o3£Ýì÷Ø{«x¯QPç+uýµzÕ1=MR5÷ïæÅÖy¨ú½ ©Ël0V0¨Nó¹ÂüÓÂÈóG©"ôo9 0@ô¸uofT".8BpÏlù'6Ðú¼=MÒ=}­pi9Áîm¥A&vw	Ý\Ã\ ®{hiÞòcLþ])O¾Tk_;pªÕeS4ÒP¥µwÌÚó¢üg¤QÛá*i/0§nReáEÚ w!êGr§áªXCóÐù$_½(
U4ÉÛ= ß= X9ófX=MÕ«< ÷®d­!¢Tlñ7&.õÉÑ]êWa1WTákü~{^O2Fw»PÄýa«Í)ÓQV°»K0)aSp²9;µöÆ!é2¯óJ7áäÅ~Èû{wTcKòýk5~ÃØÀÐ+®a»8H·9|þ	"å¬7Ýó&0]ëÀ¼pË+¼õõi~¬ëî7FkWÒûl¹©ª/Å2½þ¤ ÿ$=MDÈ{=M5v
*qão] >@ã ´*béØï¸Ãi5ÖíA#­Â[ðàëÈMº.ÍûRÎÊ)¼9ÿ-;Ð1+Óþ¼Ú'½=MÔm
G¥0´ ,Ä8µ¯hãÑóC¾ì« ô\1~¡ò= [b@%O%5ñÃð¨ñ$&.@§¬ü A·ó¯!";*HJ~ø;ÆDÅn!ÞB.w!Þe<ä	Þ}~góozTPs§«gGÅ¾r·Êè".SPÜOÜ1Ä?ÕtZÕÑK
Ñ¯Á#Úæ¢¾Ç¦Û<w»Á5?ÞdåGäú½ôîH{ÕÆ6LýX¼ê= AïÁY£Ú$ÊÁæôé¤;v7«$ûÛgó»\(bí57iÅ«ØùÐ*&©h8Ì²ªÑU	¹ÖcàùùÝ¶Ì¢¡b9= ôäWJ~ã-nM:þ(³ ,±©»¾7Ù¢XÈ#üEÁâ²¸f2dRV¥ØQÝø= ¿xYC7Jßpë(áZ®{-Ç#ÿ¬¨è{¶¬NªEÉ®ã:Ëì3h9ù]c®Í×íl¬¸$üíÜèª­XG+b@l;·¿ÙÃíü[&ðÑ¸IÆ)G®ï(64¿ZÇõv6výÃïDìsj¿sfóeL×hÃFWgù2uÒhfµÛb+= ]ÃÞCgAl×U­¿¹ñH([ÇåêBù
ótf¿R-LC÷N¶_»â/wææ»¼Ú»ZpÌ3ãï m©±¦ãïgÛú¼¤è·©=My½ À Î= ï-Ïù¹*}ÅÌ'ð!eÌïgz×Názc¬#
èk:ÈÖ6³nü?ÅØàîÿT9õ(º8Ýø;4[¼'êóÌV-¿gúnB<Çºt7xnú/[´þý^ØÎ¡}M¼Ù%züÈþE+ÈðfRz¯q
S Ä=M3­M=M¢¿k4Ò¼>8 mú>>
Ù7Ê7V,R|õøiÛ+ü2¹EÁÎÃnò0ÝþvÝäGÜØ9GãÇê¬ëO±?Àßþªæ>®Zºêò¸iH{¯P_	ÞÒ Øs¨J»Àõµ-Û~¸Èº­M¿ÛfèØ9Gåï°xAGæ&ÌÏÇÃacY¼~:b±nT¹è.vÒZ8?	ÅV¢ÂQ)93äm$Ï·í4ÄÛö²J´Ãö{aT÷ãÜÿkõØz5¸6ÅdH¦Î´n >ÎÁ]C«Ë¼ò5 9æ¾ÀW)ú>¦²Î´úù¯Â\xyYo ,ûH¢Èºí¨?é3âGÍs}Xb$,áØ¡{¶÷ #½ÛAfCµÑöÄXQÆÒkn'ÉªðEÈÛØ åxaííÞ3ëËºÄ¯Ø[cËô£8ÄâX9ÙAXw=}oB´¯{%èt]NÉçÿj#vuóøçRpÝD½½mPs#Ä~¥µ§È©üy;#3¸5ÔoD±¯×Ú%g«®E¬àd°mþ§&ÜUÎòqØÒLsN!)EbNnïeøíNÑIsÿã+ÖÛ7 ¼<+Ý õ( Ý@ÛdOXÍã/ÇiG_Á'òÿe±¼3«lôæ'e(5'X¡Bµb2¹©QwLOg_¦dÙ5öÎ_V¢~qÇcã¡õ]â!M.Ç5¾°%qUKô÷ç[q¬'ópT a)Iò¾±>B£mu>X1ázÍSÌN= ð=}|µóäx
2¹Ldöò¨ô¸(Ç¸çµÔÍ|&ÀùSª& \Ì5O·oPl8ªB~0[¡Ì­'wZû= ÁGàL&¶	e»öXg@0µR®áG°
ºMÖÀGW$ålt'mWía&Aü®,FIxQù¯¤zvóÿ×PRÛh4Ð)qO§ò§X©ÖE6J6C¾þ£©çv¾Þ§3ï6?ë5õs¦ò}3ÝÞ_Ô,ç¸ûO³¦3[gé5ý·R$hXåâ_Û17Sµ?¸>³P¿oÃíTeõÈó®ÎôÇæ4,B)uT)6bpÿm6[ßóÎÅå Á°|^é­¤l§þH¸W·]2Â J4»ÚëÛäá¦o1Æ'â1Ç>ÿ8C{³«Äqk>ëö(Hý×5Î÷F#üõMÏøBGO= ¥à'"FWE¯¦Øztòø3!ÔòØÙVyg|éD	Zû®C;y][Ö(ÊVSvS)lCcôçµJZÔBo¡D¼mºà .°Ú aÙògäè*ái>%F¦ähïÓÒn ïþ±¿'Û¬áC
{v´ü;Ò¿f ·çÂ¦oïËq+ºéZÍm?°õ_4hhJÈhQi.îVH8÷/¯é/whg®¬Uëfª6= ~~)s'o=}GNÇõ4ôíÍåy·:=}.üÏD½(´ÿá:â^öaï©X[X'¤õBñHöð¤p5FeÐIHûÔJV³£\®8W¶Ü¡õhI+Röp*¬gèímàûï¼zìD½é5X<ÿ!#11Æû]D/ûªÑe [To'N)%úªÎYa¦ª¡'Ñ¬'æ\= µ¬ÓRÄ&=M)c?~ÓØbReù3Æ¦Ãò2Ã«Â¦¼WµîeA¡9:oåbjq suö »ÆFë­k'õý<Í¡-*Rw°IÃgAzë4iFÍÉy(îÖÃ~©ñç[íl[¢ùTEÛõÁ­QßÇ·áRqY&Ù¸ªïgoõñ ¥IeÞEîö£JF÷Ö@%
èc5V¦À4oºl×Ä<UüÅ|Ê¯Ô8Ìì-0}a»#çDWÓ-3«$Ø w«Ú=}Qm¶(D·:»Ò|J»¼5aÏ<ÆþX¯´¸«ò}<¡= 6ÇÖ ¶¤Ô6ûj1?3
Q×iCC*L÷E ÷ b¨Ì&×TútG¯ú%/|AÔ*X;î¼Ò=}ºý±$«ßò$=}ÀîÜ Û]÷\3ÝÎ0b¾¯oóìÛÚ÷%U¨{èA
BB> ¿ ©ÞãäcqcÃÏ>â 4ñû[[q/[>÷lsëùÿ0vÍGTë7èÆZ$2d¢P¯õz¤Ø¼Ûäs= sT'·z ÷({d[2³ÙÛoCßÅRèxè); ¼= =}ÍkàÁ=}Ób t÷u¢cCýP¶<öwNÏ+u;RUFN1ep}Àûîeý0R°äDlòõ8c bíùybs§sïÐ~!Í\a3§ãsEä·rô¥ÍcEuÅÈÜûpþ®P$²ÔwFU÷®»6OD½ .JH@ ±jX ¾ÅSºpJr©îWµ&ÅRÕ§âo[[ÒfïÙ}~L
úR~e&Ñs]é#Ù¾L%Ü±±= O?msÛõ
Gçy}×þµ«À&òîö¸ FsÝ<ÚXG*_ïsÞËk[!st³Ô
yÀè»°<f
!B.>YL ÌÿÚ$T÷´×ºbÜ^ÈÙY±*#-¡¡¤NÏ\Ùj>ûàå=}_ö±Yæ?ím<â«iYp«Ö¼|±1¤¸Ph|,Ï÷Ós¯Ä®Iq>»$vÔÁÝÑ¤=M®¬Ô²>À1ÐþÃÍâ°lÿáòâ?çÝÅH|ÛÒ«Ð"FüWôqºì³Nv/wÇÛ¤äy
×C".ÿ"0= ³m[V d÷ é¹mïàY'tÒrc?+:XË¡ÿ¤þdgV§Qêt¦«zp7Oý*¿u0 Yê®ª6Ê8©yö|ëÙ[û÷Eµú?ø= i§èz=Mù?áææ,Ý¸WÓÒÞþÏ\>ÅçQÕÙ~8gì¹x'"õ:v(BÔ y]}BK$AèëÐ]ê	Í5»-d%È>×6ïgÖ2Có/­|>± í,¯{
õù®¬àá>|ªGMîþ#¤Ãxôjùnû?º#þFAøYVÆR§½ÛÅqÅjÊðs<CM¼7b¡ÀÿÏWL'Pü×&Ø'f$DñèM1ýHµ._eû8[ÃÄÐY&3ìõÞÖÃuã':üÃ¸ñWzU×1 þ²[Û#RÚYhö,EºkÍüA4ùÏûÕ{HÃçQËóîë£§n¸jî aôY6mÍÁ(nÔ27QB².§j²ÿaä³«-U²/Zô¹°9ßí÷ë¨/gËÆø·AÓ= NõnD»ÇMÍÁ^N³nÅ9*é9:õ¤ÒL·ËC®ï;µóJuÜ¨v5¡ô¥¾"o"DA¦t6Õ@¼c ýCnãøôx)RÄ\§ÈX¯Ìè;\ÌêB4BÃÜïg\Ñåê.ýæ,6Éì®]Oæ,!ÄPõ¡ª[Ê´²ì×P|xÝ¥<mgmIgQj¸ä"£´1Ê*¯¢O© .EÒ¼³¥¹Gºî®1ò·0CÝeR©LÙ®{4æME~iµQÞ^îã¸ÓxSÄîj|Ã_iÁÆÆ9þ$9>ìÿæüiW:I÷A©*©Õl"fV{ù´fªM¨z'{c#*©Ô]Ð¸[g|ô
å*-/t<BÎmx--´úèjGA=Mö²;h»üó­_Ã1¼ë["Êøê;½ëk äÈÅ
yÚ3ÀÓzrÐ. ú¶r®ÞIJ~p9é?lwÌ_YºGì¶¿^F7ù6µl\ªüË_µ_t
7ÅÜ´áAöÙÀ«ë²ÛGò+Þëz±4©'ÂàÚç_,U4ûÀfUëaBÌ­)}F ÿ4 ©Ý(æÁ9sP^bõ8^Tw½$Bts7³+aÙ[ÒoMÑP42ÇZJ/²(bê(¼ÇÊÇ·:¦òâ¯îÁdIºà"õð_4Pý4òÊc'&¨ýÊÒëT8m6áB´Eu;5f*Ñ¸¿½e¶òdÇF¢+ÒÂXëVÄÓ´Ü:ËéCÄ*bÙ5ÂyÉ¸û®é¢þ*&èl=}ºÏúÊ7móMUÆ·BÝ­²HD@¨!À×³mtÝ= ö5GY4,Á÷ýn;sì»ëqñåX6v¥¡g­AYR$ÐÏèËj¡Fz+*K©°¯Öì7²òUz,ãÐi"\k¹¸Vúæz·²yüv\9Ô¤ØúxÄ#S«n¯ìâ½¢þ^ÂtEÖÄÎVwMrË©T_!9)õ2zÙäì=Müãr¡;^Çý÷!±´#ûêx¬<U/ ¢LßWõ2c#B÷ë=}Ç»cÞ°ÔÈÌu§!É+v	îòTbg÷Êü´T­eAèkÓêÊÃ&æá{ÃÔpæKîöúñ>JçìÔØÓÉÀIue^þf·£fb£×Éö+HmoôÕm%2]ï 0q¹'ÃjLîó°v5¡	çG´H¡ÎW·[û7iúýs1'tÇfÙ
¨ ÓF¼ !ÊýÝÌý4[ð.§2§"6©lß¢ÒçºhßN÷1cçÔR8°KXWuURÏ¬Ã6ßÎ0 »º2ýñ*©kµæ>g"Û×ïY0+?'tÅr^ôGOîr3¾ç(x¬xHì1¶É<6éµL,ÀKhu½Kºä¥Txîö3û%ùz~èw5ÎôôSdåö½@ÂÄÂSÜ¢ÿÎ+µ¢±"ÆØc+T4çª¨¶h/öÜ@õ©\*)B*^ÝA¸4wx$°{øo¬ø©ã¨õÑËu§¶ÖFôt#gsXw[v¦¤¥ËiÜÒêÑ¸ÑCmsuÎ²¡U£
ÉÂÄîÊ&ñæO4KÆÂJ¦ã²í_ ÍzÞÅÀLPÜ«âný÷ÄÑßÜ¢ôA_¿c½*½E°_">MÝþÁuú¾ûiE×¦ò¹LbV7´¾Þç ctwWÚMÇý÷ÅærÛb»¹3ãuµM¿§­Ó°&KõJµ%Özá­Õ{GàºüVr6ô ¢4x°¯Í Ä²mªÒ>MªzSà}Ú¹í\U®µæiX=MRãëR,®ÝºóÇRO°s¾åB^­x>r
¬×®¢cÁCd,_ÀuÎÃ=MùÙàíVxEÔMêR×GüRPóxIîÎÅ#ð¹+ØQL2%Ú²©/øÚR­ÇÉK_~|´a}ß!¹±«×}Ö­Ñ£Ðî½%ýôSÔûaÁÁ_P£-Cx;*_çEW¨7Þ®÷=}ä*qÃÞï£×tÄ>%vR×³%§ÜÅõáÕ-[ÒR%æ¦bîñ+ÕF2ÝÁ2Ýì]ÓþÔUêN¦ÏU*Uª2ÔæXì)Ð¾Ø¡ÖÍãÐ\AÃñJ/çËI_ÞÕµETHKòK>ôDC¤ÃÇz·íÛQ¨ßP«)Ñ«Ç(QEÑ®=MñE@´E¨G(ßQÜ^z<´GçVEªÏP|^âÛ÷ <w(uMÅ)ñP$(±çÊ®Ç0±#b12·Ô¯/Ò4vZwìñIFï}â¡LýÂ±uffÍÕ·¥_$×ó6Ó»O'%èr:z6HåQ*öeQæÕ7ér½a. mãÇïã= r-üKÇ¥HIa2¥?$×³S%C­ð#2!lv#tT«IµÇîóHåiÍ2n¼/þæ3Î= RÛU2eÒãß2­ìS-6&QæÅä/þÌ@--½ïÚãw1v¤j19ûÇv¼eâ·Ã­I-5\tü§­±£Ü«¤ÜTõë¯±SÆÉ@6û]H×=MÚmÕø5ÄþªEo\= V5÷(µ°ðaPiGÌ6:Ó´äëÞJO197Ô÷= £ê#-ÒZ]©*n¤i-d	X¥ú´@]½©E6¿D@"ï¹íÅ~ô:sÚi¥æÊÐY#70ø\ÔÐÕãZôË)ëÈÙZÚ¬/Üò¥0ÃÔCé}ã&µ#©#ÕÝäîý¤h{§´y³#·¦{7õ6\Ðtî6t¥]c6î9UcfíÒ:úÍue-]íò¤á&ð X,Ófsg}>ôëhCòqÉ?ã/}!E,luV²¦-°iC®¸¨ÏFÝµ-E Ngø°,Ä÷"£i8ðá-hØõ= .£~ÒöÌ}¦fæ-¬ó^nd;R
=}X7ÅNÊ"@ÉÚ¨.y¥Ñ|T_wd#È¥Oá3S´ÁT<qY#èÓÀýôRÑ}ifþÊæ~&jO÷ãLAë:"WLß»g64[äp$·á;ÍÏð¨ä¦âC>´oaÊ#S÷båÁa93vé0ÛÎ"kÚ4¯OO0ñ&EÄû&N¸7õá
 |3xZ¯HÙ"DÄÂÔzhUÌpRð§ä7q|²»ÛÐm×Ä8·'Ieë|ù¼å ç0Ã{§3âÙèCF¾ÏS_,ü£ªMï>7§ðÂ§ÎJV®æ
l02u,aËO­ÁÇ­ÁLå¬ÁN5ÁòÃl¯Q­MßbÅmõÅm	rx!ÖUo÷Î¼,¨Áä®¡kÛk,¡Í=Mô\QN3l;rÄXpÄI®Å$E¸QÌª½ßù2-«ÃÑUîÓä/ÝÃ+rÒ/NV»E{dà= . mãîã= î¡Ò.2ÿ&æaÊl¾/þ&°ëåFµ·a1Üê6ø½ÎSÁ¥´´~#ÃG;ý&&íaqÜ/þ&&íañR%#ãÕòÖgNHåOzÕ³M%sÎa±Il$_¼¼Frèîù0BRMõÎë¬{ecêlÑFá®Ô
Fé4ÁßÙïw-oø#Àfý_\«ëÞf;ÀÏíüx9è|£+9Þ_¨ëi+,ú¸Zµg_@ßgëX_è§¦G·ßgrYëF±'YuwÍUjjzZÆf&f&&&&ÆMMö(®¶ØÛGÂûiØe2=}]û­ÛÖ÷môX8lY8E3FðÈzÖ"jmQO  ìÛ±(ßçm5OltacÀådVlsÿ´#xT´Íé Õ¤ïXs»ª¶/u´¼ÍmÔ)²C¬{³B¶]«]F¨º0+¯òLê[o{DþAìßÄÖ /F¥ëAì´zðní"ÕdÍ£1¾MÉæÕJÉûb¿1L=MBàÓÜi	¢Ú¶í7ßUÞ®k¸ü»0\8·\Ï°æûÎ2N®©F¡t¶mD= \^»ÛùÅ÷tn»Óñ!Þ~£8±	úá"ÃµóÒûÝ¼¯yÓà¾«£Yqgî8i_uòlyöê»ÏthNÞËÙ?ïÆÇÖUztÃðn)&O}LØ³>:ÃS= íhÕú¯§ô×óÒ¹D¼s|×±7Ê¼j\!Æ¬û^äÕnO@lî³ DtVÌìÄHÉªê·Êê«m¸N=}@DqÙ'Ò
[HV¦Æj!ÐµSYòþ°% õ¾@Õý{ß"¾àî¨¢Àÿÿ¬2Âï¹Í8íeÉ}ÇìÿLx!Wcd=}qq4=}q^A·ïÓµÇ uPVùÀþA{®8¶|(úW3cíeBróqÇE?	ùp5v¦¸ÆßëÂo=};ª{",GíéN)Î"kã£6»¹Ëã}O-úýìÐ¹è¹¦×í×/®Þ¨·ô­jÏ×Zæ=M8ü[­¹Àa jáòj©¯ýóôåZTÙ?wL1.C(ê+ºÈÀ;¥ºÝ¢Ë u=}ßJ{^Q±ÈHm¯ÄKjFÅÜ«µqOqØâµYx &äÂR!¡Ôx±'êÉïµ´¦®lL6Ñ2Ý½Rª Æk}
= $WH±©hÒÄ= ×BERa!ª½å-'ô
ð¼gë2k= 4ù YE"
Âì?ýXÌÍêKcD| »ûã´ç b= 2ðâñDùFÁÈÙ"düÝÒî?}
á	§ªi/«Ä¤	±Ï»^#W\:Ò+~+±Ý46e!§²uQ.Ü'C´úã/µ´ÑfÆ=MLóIâ"ëÛã¶/¸½{·¹×ð \±9(g ªlÎ¯{^â9ì5Ï=M9Î­ã$ò8í³):õ=MÃ)dIvÃ¿þ­*ñÌó¶XÙðNDÏÿÉ wÜq×ho1ä¯ÈµÈ-p^*[0²·LÃ?ÍA5[õÉîªªîBHÅ/Dbj¾x:úcBç4óH´£ÅÀDÞ"ú |Í?J0Y¤Ô5HÜ»Ôëû½­kQ(î³\´æ{LifæI ¾¢âÞfü{Ç¯ò5"(H$ð@M= ÀËÒ)®Ed%Nßc_ópÛRmi$îõÔÝL7k<S"Þ¶/úÿ.ü«Ð¤:¹-#}1Ók*x5(øÅæk·FÇ~;*ã	Bv¡¦r¬rGÓæÉ@N%s"»ëzî­N*² §78ÀÁV¥Y)[©Û*ÔÁm*ì¹c©"®Àn^«°åðµøW76N&ä×ù%3õÖÐÛ¿H FhÛ«¶Ú¯£«5@¦Ê8ÁÙýí!²#=MTÇ¿BÂ	^p­9óz#ZbÎåbÜøU})hbKÆi­¶°>j£"ÑoøÑ^ÒÛ]g»ÏFÆ§ÝZ@þ9ËNáÚ§4.weîWfxÉøíÅÚF+ÊÉø8£zº|hyÉèq0Ë];laêìqÙÓ!]ÒÁY¯._áz1¹µChdÌ/$
CÈ*úx]ÄÁoçn@)^5Iâ¹-ÝÛÑx&î¡ÎÁnè{3R¤
ðpëdµle	8ô	»ûK9¨ÀiC¨Úã*¢ÊÍ8v?=}2;p!°;Òð]JÁC¦§DÎ	¼HZÂ²[[[µsoT6u×fu+Svi=}Ûs÷o&' ÓM#|>SçtfbÅ«Patje¡dz?ä|=MöR¿Yò%\¬ìÃð§½Å4oñôuÞa@¢gjÞ«9E©&Ç­E¾
PwiRT¼¨"û?,lêï"ACÍ¹^Ý×ºù|[öÖØnÂÏgXë-BúFR|÷îO4ù.âß¡Æà½Þ%ü³FÐÑiïéP6¶ÙRì0úÂS±_"8 = <¥tÕ2PLþÍ¥7;+_Ñü%ÈFBÓäDÃZã;²	óÐfLøÌs{BfèÓ?U/Y
9MQY|°º£n5zE¤À¸ßéÓê2U)r= qå5}PÊ.I7_¡Úæ#bD)ÄÆÑÑò¨Û?(.¸ÇÓozªÕÃXlÈÙ]Ïp!ö§ê3!Üú	ÜìÖþa*Á%¦çC
°D{Ñ¨¸Î^Û= 
=Má#6bÛÞ8vk¥yÏìqè*9äoQ!ÒìP»c4ySdè%ºé)HåòR¾eà@åà'pìº¸Ã ÖÇææåµ!®\âu_ts¥pûÏ·kôã@q±z¶cGú¸8Ú.?; ZúHÐÄ¢³Í¤©kÎëýT4^X3üOéuZZûîý=MÊmîoÐA1Ýi^µ²äÔÊyåÃ¿#´Ç¸rÛr3gºRþQ.ÍCÐI=Mj3æÑ©%ÏËÄâïkË?£r¥nü¹òÉ>,Õ¸í~­êUÍ©¹=}
.Hã:ë2±4ü
#OÞriÌ%U8 èÛ5ÂÌF£1²º.Yv<À»Ñ®-<¸müjí6y}a<pFó|Ð1LÛ;eÌ
Ùjï±½ÓiöÆ¸ù1]Yñ«Ô',äµO*4È´+M§ yNslJÍ\vXrsÜ¨+;P\pBgLP£äa=}é+³Û^©êõºãÚ,¤ÒèLtáã xUýOpP>þs»¥{0Ãh¿uh¶FÖ'»³}@7#KG *hzExõe(1­·tÞ0ûO!?/bs(]9²fÝâH-5­ÏíñE
ÙxKõ·K½@ýY	èãÈKi£ç*SÞ?úG¸-À|¿ Û¸]¶kËá¶	w×Éß?Òç|mÕ,æTõL u/×Ãá#øMÛd0i©s¥RÝOªmXOõÝÊ÷û=MØýÍ°¿áEÁ\yx+9¶ê*G	¤´¸ðÙÞÊ{²ÎÐàýqê>}ü¤¸«¢¦ö²¬4®ê´ÊòM©'AKË1À@r\.ún$»
ñ1~Ã2z¯î{î®0-0ø@å©î¤AÒ']Km%áZH-=Moº£ÛÈÖÜÙ<dwï.H¥[F %QÊzJø¥#­ÉÔ$§7Zá>ynWlágy[=}¥ÑÌ§= Q²¡r1àôËNm4hÜcÄu4´c+(½i·¶¡òU=}ZXéï	Y"UæñÔ½p&±(ø¹]ó+¢Ãò»üs¿o¨A¦ú"BÞÅO¥.í«O.ûÈÊÕÛ?Ë!¢*ò%Ò@bi«Ìî$Í	7æ û8·-!¿W3\¶Ò%S.º0Î¿MRà5Ãù N­mCãþm5Ü¯¯x=}Ìç¸úø÷Æ SIMyâ2®^Òø]ûÞ ¡ÿ´1Wu\U!ãá¹¿îO"9£ßpÚÞ¹I×'¨o!'æ£sGP¤ÎíÀC'~?Ij¬#>eÉáý^äºÕ¸ÛY_£ØÒÂ®9$ "Ç{¨>Ù= %¤þÀÆ$ÐjwIë06)!glU2HÑÁó"GþÂèd8ÿÞtb¦t´÷T° F¨AÒU/+¨úoÉEcM0Â­5RW13]ßþJÏãPâ$ßüýÓ$M­}ívn(F]DKmûj´t9	ÁmrB@öÝ=M\òvyûðÕÏÝFZþaÝ«½¸k²½ßÝª £ÉêMÙ«ªúñsÐ#Ñ}öö(ÛuªûyDØé= Ñ·{Ì¿¹Ê­)Í'HX=M1»mi8þ9Û£û*©1:ñý0Â$= ^@>äóoÈ©¾Ïz®{¡#¿Ýq¿éSd1	t¢'6ÏÌ£RAy"Öãáí¸±hþ6.ÇâMXnÎª$±Îë ìY§¡Óä³ÿìèB[Çâíá1ÈCGû$$ËS ÌúQAË¤¼ÃÞµaY(fäAìÖ!= ÐYi>>þóâéqI.¸±ðGõI$?¹ÿ¹Dµºc·a/Wk'SBåcôë¾ãaÜàq?]?¹1Åe<ô4_[·v[Á%e¬yÛ^ÛÐÁu,Û,þd%Ú©¥ÚI2RÕ·@ÝUäXíh÷OdQµàF»|¤#/IaÎçÏgÏgK"VÝ>N@Ù4ñ4ÝÓV¦æC³¸ñ´4¥g
«SjNÃtà·Ð5½"HÉHbÙñãí>ie=M1c£U^Ñ9õÂþÍÝJEÍò})£,âi5Ï){¯Ç&a8th= kuøn©Ï= ×çó= f£¹wÖ¼à£ £@qZ´~!= ¯;6o"ÙqÒl¦ |wO#°« kõ'qÊ×+òÅÙÚÞýàªæµ÷þJÎÓï¼z¡ôùfÔõëés}Áñ§ÑauÇvmð÷ïàðÃxhñt:«p®WjnÜë	ÆS5¶{çÀ'Vîòræ2a&eï´ÉÆ·[;S^XaÈsô£àå³À}Zývm^ýüË8|3Rþ 
Î*ÙyØ®íÔt9©PEÅ¨5³*¢1<ËB^æ}6ñÌm­I;F-ê«¡õê¼ÐUÜrÆ¾M=}g2i&Ì°Wß¹®]CÏ²¡¸©Ño¸bXYýèYü(öõh«üéª¬×6	Ç+.ÍQíXó°&=M'ã	>«9Gd%ýÒ= ¤yÒXYóvs%n5S¬éþVm(©×F2*8
ÉãÂX-Îö;¤;6yÕb)í¸$Jçpj)^2ÇZ¾t= ØM$¡ç
LnD¬I¿âÐV<P&+ä¶Ný\_b8º¶IýìGM¥¶ÁþÁ>Àò2c÷\êEÈòó:kô$]´ mî¥©¯R4xäÇè¾hÂþ!=MÐéµk#´{y9ä_ûé3««|(*F«jïïQj3t±Ñ>Fä= »Üsôð*óp¤ê\¹³ûúº+ªtrép;äÐì»s"=ML	oBý"~·e:ü7F[3Åì·Äº½©@j{ñ= oMß.#ÿÔ¬ÉêûÇEUÔ¥ß $ÁÇM9£4=}ØO´ý@.ÆÉÀØ!©iÏ:òÓ¬Æë*L0*#KFî¿_Ë2ÛëRò%RhàKªLôEkuîÑññVÅÌûKa$E$­Ýb2XÒf!Cèíæ¹¥£É_ðô8f¸¿3{]AnÕßØ@¶îþDï~Ùßõß(f0óäÜ¢|µï5y×= mÓÚ /Í~C/@Ù®FKm»Ç)|= 5Éõ´ð@=}Ø8«Ç)Xøß´Bµ[y­½dË\zxùÃéñ×SõEO·(Æ>^¤Úªø¼Lð=}ûEÓ­o»Ê3ëd¬=}ÂqÚèOhÂ¬çµKEãì9³ûrd6Dn=}fÝ×Zxí>·æ³O»aJÔ EnÔ¥)/Y=}¨J½íñP~Úh$aøíÛ%>´(¡æNàöd¢/DE\Þ«=M|Z³äÂÿ[eÉ©Ggõu=Mù@qçñSv.$Q
&¢8 Q<ÂlY0=M/èéäJÜ_DÒ_×cT·W°2£Ý¬%+!\¦Õ H7Vt¬wÊáPMè¿ùÛPÿé=}¯
ðäüã¹­?+tËàhZéûQÖaÄ¾L«º*ÀæhäËq«Ôá2¶Z4©¬5>	KQÉ.ê	4GDÉâ²Á¸§uªÝ°ÏCD'²OÀê-7ØùÒÃíb~s0¨Ç ðô]6ÊnÊ(¨]®X¿´º¸¨tî&CgPþVý1èpxK¯g15Cür~t#²Ïu»µ$ÒÍcgÎ´«G"äÎ9ðµÙ$Ï}yÇ«÷zâ>ùÍ×Î#}bÙ²vn@È·éÇcNgÄ¼ga>E+7à:Z(V/R¯ûý%Ls¬FiR¥R	÷¦Az°{: Q{Õj¹¼mdÑZW"²éÐp;=}áot= ãTª?v¬_PðguV^[ÏòÖ§êâù+'8°ÖYHæM ÈåÐ~<Ä^ù.6M8Ñ³àIvOy.DLïhÇÄ2¸aè3kí¿eÜWW\¸Ó
Õ9Óí?Jk/ÂÅFd¦J¨ÝS%úÐ<è¼Â-ï«
x©OqA2« zóÏÛøðµzyÓã}$t¥Ïù~@~Þ÷©ch@gdÀ63dI¸ÚeÛü¢U£³1UQV*åBg±âL.M#4]zR|×q·¶Wäm6=}¢µç1üöpÓÉç«AZÝAmÃ^Ì«-#Ó\¢ìê· ó,¬±Uíi/ú7fìcÏãºãÒ=}°àÚAb»H7-ÂñUÑæ)$2u¸%B¥ù¤HÅ[~³ÆÝ!¨}Ïç©Åå$XM¡PRd<¦~Í^ÿ..Í^á­ÅPuðpde\6× Ðõ?óZXÒõË1º¼>Ä$¿Ïë.Ú)ÄL&eè@Ôm.
¯¡XP¯¨ÒôreÅÊM¥ýc¦& ,ùc|f¸ùÆíiÍÂ¿â¢FÍñÜÂ*ÍÄÝ¶a
¡ÐyóEæK¨D«6¾Ç¿¿*èo¶áÿ=M2M&Ð¡D ÓjºnPÄ®T$Ràv
m %ÁÕÝ"]dmKª¦|Ïÿâ%Ë?¢bÕIU_Ý{û²\à'ûtZµsI ÏóTÔÈ=}&Â=M¯£{G´êõ}ÝÀÌ'*È¯´¿Â
¡#r
»Dày]êdÝHLÔAUÔa®wÆyöÕßì£W
6«üQÖ=M#Ï »¸-û&õ·sn£=}j"ÊÃ'°âB^ÿM²\æÈ}Ô®ÈL-jþ=}¶øÝMì7û 2\7ÍhéïíÐfÎsl#Ù¶%æNK»®¬~"nÝÆê¬>§ÿLy¶2Gµü$6*sAR3y/óÌÕdØG5@ËbäÃþ]w§~\¨i²ÙOÁ9Ô*ËÄ3ÄYÀãÝclíöÊûèÌ¯¸2	ÈO?J[?epP9,ï@el¨L­âºüá­ýÉÛ"½[vù!Y+ìKo2d¡ë)í+T{óßô°^[;øã¼V­Z¿=MYfþI:SµT
¥ù5%Ô¹¾ücHé|²Ð×;Òú?NÌÓìÅ-G¯Ì¬âÅ^	O|q.¿vÆþÎ6¶å%?Æ³®lÁÕ½8TíÖ¬ùC c»X1ìHS ò»w©£¿°þÊí	M&¡/ÕzR©tüQ+´[åiÕ~R$,JfApJz=}ü°3ùã*¹å¦Ð=Mò±Æþûñ¸o#P|­¨gÀ qÏâOJÀ«ö"8¥Q81çLL¯â!/ À²¿&¸ÄÍÿùL­B^¢É~1©þ|y®ÔL46¿ð×xtü´Ê :r¤¼ï³m¦Ø­F)	Vuçþ¬B¶(ã ­gJ«®d+ùÊ©§oÍÐÌµÑ&®Ýá$h2«1".¦-oñ°{ÊëÒê\'[§ß#ËÓÓ®
Ù¨FUÛbî"@®¦Á´Ùmm´ Õ"qÈ®	µ TëúyL9]BþÊÛX+CÜðÈi3ôB¶= °ZÐ¿ÀdCèÔî°S­Û\ïcÈÚ¥²ÞI"ÂÿÈ½ÏZK_bôÈ§à®)¿>ª·¼ñµ%y4<d²CÖÃ«9åZ]à VDÑ1åMZ=MA_að$&Yð¯a\ É^éè\Ò=M²½Pìÿæm&ÖÚ½B¢ñMRlaøÄQIë¹ÊÛû¤9±;a½I±cF4È1Ý^ká:@Á°m!ç)ÖýîkGþ(Â<"lÐ©Ä®dÐÍ{©A|â2Eÿ¯ÔsÞ"M@rÚtÝxÉ¯¦4(rZ¢LxgÀ~i^+ IìDz¦H¤ð^ujÚbÈôÓ=M±x9!væ¬!ÑHª­PZNä3<//ÅEK½k= ·©)Mì0><À~	l¶õb_äýTâ+Î* Çù³Qê-¢:l»=MîlqÙ+7Ê¾|ñ*tHR¥y£¥V	Óú¢¸¾M
KáerúªªVy±ê{@\@	EN-J°¨].FØR%N÷ò>ãM	+50yó±4Q¾æþç&:¬|Æ>f äÃy1ÕG6g¿ä¸æ¯Ü¨­®N	E·§­-·ñxöSêòÔ|ßÄyQ	)ªðåK¿~¿^¡«¢³HÑ

Y´Z¤³Hí!Íü¹NmÀ¢1N¾ô#íÁ®xÖ:3ÿdÐ%KUå¹ÃªøÆâó¾ÞtKIX¼$áqd 0Ã3÷i½ìDE?b¹b1Úý\
jj7Þrüx¿Q{]ò½ûöUá Aö£Áé=Mâ}éT(ÉÛ©»9ÝÐÛÐq$v¢É3úýrÂkïÂ5ö¬3ñ¯âº2åSE &bëÝ<=M%MÜèÝ-QCÎs±eg{óÐ¢_Wí!±)kW6E%8tå5ÿöûg¶éÅ!HÜÒë1.¸¾åùu=M;*ûòcçlýÛ a©üE æ4Î_h³=M?#³aì#¯AçÂõ©£#M/&Êo/Q]fÈ¤Uò'=MAböVz×ã0)§+ÓLbO´ T{âPÑ«1RKÐU>Åâfe¨Y3Yóg éZ=}&#ºpÚæ°Fém,ÆÀåý´àþ=}Û|V:å°p _é|FÅû2Î&Ûf¨Ê&+q§Bå8nù¹ÍCc°6¯>sp^Å$X#cöÆÐsLÝ%ÒêÜ6aD½fDQ{G ¶FÉâÜ%ÔAå;bmCã©A2æÔØº¾õNÖÚNµ*ÜTÇª"ïòmí1?G*$	Rã+ß= 3bè°Ã*Cübøì/"ßß=}*ìReÊRU¢ÃöfðøÉd[	XÇôdÈóäÆ£7|·ýÜªy}ÈaA{Á¦Aw~J¨ýr'+y6½Ïp\0bÜ= Ù/¡C@Æ%áNÚIíµöÜ#f
Øø2 ß°²4>ÜÂC®¯2rIn?"ï÷ô åv¨ Ö%¿âçB¥§BN/6¾N.Bìê}üý
5Vø¶´ï'îÛg#\}¾Mu"³râõ@Å² +5_óÜE­1÷@rÆBãòÐÛG}à®åYáû"âÉÞ@A¬uÀG{òë«ÒE?=  ¼o= Ä]L]ÜÑÝ¢²g= V aë';<Iåüëªk«Ío6¢ÏIÀyå¿Vfyðí¹JH.·&´= ïê¯ãÁVü R[BuÂþÅ7¥÷á¦ÇlNúìIÌè5ºI¼çP3r-S&¯dÛ±7ëv3ÓM]m¤mßÜÉ]ÞÄ_?¹æ#¯P<¡JísåIFÁjBÓÁÇõ<l²dEy]VÓ]©¯8XYó#êg$2_Ç§n6/J/ÌeËÎsa8Ì rïh:²C	^WÎsI)¦%IéRPh¶¾hG/Æ'#úuJN5·® úÌ×¾/@öì¯ÇlpkÿÃnpÞ®¡'ßç9¿7â"@µDæ ÀæËOA¾Q#àÅÑ¬ÌCà#%jn= S-ñyÅ×Ät!EDV¢µï¤]µ©ømûê­Ûâlñ'=}m¬ÅÅÅé9ªÙ-¹·µ=MËàæ5Sì2Í^àRMã¬õwªõæÎ3ûB¨WPµe0ØÉ2§>ª I¾ñ+²¦'«óîwø1iÐ(ÿæç¹owàQ{WaìFßè±ë/õVQçw@$øÊ§?F Ô»H¨¥êyæßªô©O­ÿ±1³­ÿ?+ö;ËÔØÑ"Üm¿ÜÌ PÛd/O	k1k¯/;Oµh7ía§¹GX%pÞÐö!þwDµç´1knïÈºFGm±ôéjÄ5Ñ3è?!góþÀkk¹ôÉ%d®ùBÑ¿J	#@¢PQâíð(?Ó0m= cAº=M= ¼]Mæ&O	Ï(¡ÇòÈåhö%ÂíO\ÊëêC?Ic§b°:¾Éá £ÕçjùY,;FSÏþí«¡]^Ñ¡Pé/a[SÝðË(ÒVl×¦Óyw*M_¹!Bºm	}ÃÏ°Öß(uçÿû,a1¾æ­Ó=}>åI¬Ì«^ÇøâäËÕ*jíüýÅUà²O!Â$
#:d=MùTµóx²
¼îg
½ÊäwòåR8²U1ü¯UÜ-Ïèî'r	YSä®ø!ðR= þP±'ïJûeV÷~dï#ÏVÝÑ¤³*rwõn6^ïSè¿ÝÂ&«3æÓaÖA½ÌTÖRogÁJ3þßßxÜ¤¶JNÒzKÐ½P»}jPCÍ|z@³®¬ôv+o÷½É."|-s= ç¹?u@g.Ætt&3.	O:¸+ôc³= ÇÙP;ÉÓ¾UÌÜyÅÊ¥aT³,YÂeüò1ÿ3¯)ÆàÚó3×þjÜ[í'GÈ~¹w2åçàÆÎÃNqT2×jlfKc¨è¨&ÂFSËM¦4%pùO¥CÕ/CàÒñÇbÓÖeø/k¶oi!ã|ç,*}\Ê 5@qÒRÏ»*ÂÎ¥]ÌqÉF
¼BøX26X[Ì8s0òoÌàWSÜ
±H£´ìµ9óhmt±\ì¸Î9¹üÊU¢ÍwÒ­¼¾hÙÃíì&ÕÏ<ûXX~ ÙùzõgµzKèø©hØí x:¼¤Zf:k¯gô 6ÒCK¼z§þS~T¾wÆAýÍe­*B|Æñrá"5.Oo{"B	çÎÑûÍuåó	Ê'(ôÓéÎÆÃV¸UgÇ5õS¼ºÂÍ¹føJV´ûz?ÆTâ9YD]°ñ{Cú]/¤·Ñ/ÉüÝíà,(­çÃfm¤6OðWßÍ]	®ê´i÷E9ÍÂøá=MÂCRõùºòÂ%#mÆ%ÝÑÿÙÁÚÝ2{É¼ÅåemAe¥ð×@¬øfîpÂi¹´×\ï
¶úv^e¦õ  Ì½'(ÃûV
ô= ÿuÅ¢Æx/iP%OQKJêyîíïrv<Æ° 'po[.y¡kþå´0AkkòùÃ"sHË¶Ôþø×\¸´ýg¬	õ·g^T­ º×e°L*orSf  ³í %>êhUÍR)0÷ÈD[qw·h³0­tã7s×ö£×þi=}øOò«Ö?áW·Ø¥eÝqí¦yc¤=M®GªIMY×=M!ófeâè¼O¦
âR¶Ýbø!³VÂÌ@èF%ÚÁ4âanc·Ïù?¶çî $^à¡À²lY¬zµÉÜ¶ëSÖÝ)º.÷|¯T<6Ê\&cè³åGS9Ý4¸= óÕ¥³hÇ¿Cqç«Xj¢v)î¦>ÇPPz¦fL¼8}¶¥ÅcÄ=}x×ey%H"ÝV63XN(5%³gSOvq CO±-HôÂk0û?yÀõt#Ý_¨\°ÑvXï¨pl!^ýSd^rP )¸|jxDHÃA+¡.Êi§µFc§âÓ·"ò´×ú&[³Wó­fI5çQÞ	k!æ á±uèÍòÚ×ãÇ×	ÍÑ3Ì'@4£f)Ú5ÁmjÒEiÔÆt´ÑöjÕU&	Ksb­ÑS&Ï¦Ukß&V¹Í¬tVG§m÷\ut1ÃÎåå´­ÜlµAWwjSd3r.õ0¯OvN³tDKA£ÖÝá# 9*ÇGç¶uÏÀvìÉTkawÈW.µZG!·×'ó
7í/#v}'ÃyRMU¶lúÇ¹ÑÃ E2Ï¥f¯ëLÓ <³/òs§|úßhyX¤ßøìáQ)÷1ÆµÍèãô]ånÞ?¼
è|WPö¹Ä1@¼=M=}¾ñ¯£Ì,Qm: ®´ W¦Àó{¡ùx{þøc|çèÆ0;öìÐÔC/«¹åH¼+=MàIÚÇ ÊÄ\bnøyÌXçy$T¶T9ÒÎ)ò½bi¡Ïü¤¾$PÈoÐ	Õ;¦Bµl fbÉG  0øÌóÛ 4ßdéÇæ¢¯9¥ÏÕ4¾Ë¾ø6Jý¥R­
¦(H6Ý#5{þ]flD.¦¶ÖVjÙàIMÃ=M Óhªº{ÃÅEO´*=Mê´ Ëqk¤LüN:¬dÍã-#h@Ì-S»Qä1aÝíGMDE§#ÛÓÐó5¸0}'ÉùÑmù°ØÑÑì3WDcûéÒ¿,µÉ;h)¢ÌÂÏ	Ï "ÈÁ	 ³ålý03]
ãäÑÍgJ,»=MR¬5X1-DI¡ÖÚ©xóYÝ­VÂïYMìã3Æ1­ ñúãÊªÒå º2§ÒÓp®HïApÍ= ÈWÛÛDh«-=MÖKä¥ë²\±lL±×ÚNnlL\)ñõ\üÛ¦hk2±ÃénlÝbbwÚ!\É0dÓ	+»¯X·Áñô:?¸¡".3ð	È)¾+èpû¤qñ:IÐæ¡·ªÐò3à§[;À§Røt(|¿¥Øfe¿,EyÒw |f¹Ì+óÍ?â:¬á:¡ÖùûD¾w FRhv±0GÝ	JIà )¶|°}ªÞ§Æ¨Ó¾ö±eÞÐÎè×lüÌàöØ<+oñ	&cêêÒ~üb= m=MQ··!0¡æ Z%(p¨©Í_bI }Ô-©ie²'ãös{ËëÙWv=MR.U½XÌ¿7ewÊ~ÍO%!|!ãt=}²"¹î´^Ì°í/@$¼Ìß8¦ |âxÿÁíeNuf²õîé73FZÖ²µÄïG!ñ¹á2ËÚr+á± ¹Å¸]
ß¶(Õè3ÀD"ÿ¦áF	Ò_p¬@§jÆã vtÕmk^5ëÛÄ	>bðbIdHôãyâLhOû}µ¹iBçOÀÁ¾n4^z	+ôââ>ÏVpI+9Ñ©Àº­fÌ6yäØÔØò»+¬©sÃ6 ²GRÚ­:Í)¼î&ã]2h*ê=MS}ÎºÓûªÁp½{+Ãÿ»ç²Ë»«ªîÅÖÓÜêMSD2j{Ä§Lm¼Xo¸R4ÌC±%Àrf2õ:{~R-«öÜ[=MùQÌ9+$ï)JÌrg§½þó	hZÞÓlo\x6±Àkz­=MçöõJ1GÄÔ0(Féç&û¥´ýe0²>ÀýþÇø)]qÜíâþÏvd3ðããxwo×\hÿGP-·¾äÞª+}âÂFüé\djµzmáûü0yc-ê	V6É$Ï= =M"©Cê¤P\¶lxf-×øý°þPFÍ©	L3Æà¤FÃK}<BX¢l­+ªµú­¹Ó§ÇÖ$/ìLãöÎ.\}<$Þ7¹¯÷uùê&¯ñ<«s *¾¸È<cFnÒïéö¤}ôÌþTÈÜ¢@IR$z§ð¬úÏÊh"û%ä¬^k÷,Ú±êâ0 fñ}âÇ|5¸+nÕÞÒç¶½OEJ­|ø]+¸Ù;þØNîV)qÔØËx²<Ïk.)¦âÄûr²©ìÍ Nh:¤g,Þ¤gèöÄLv+4ðC³Ä)ËúÇ »+4¥g|Fj¶®ý)Û§/Ýïzçñÿ]Êé3«Q2
]¨#¾×I¦Ó/Z}¯6v>LÙp (ªÜ<
ARâPºSªeÌýpÎB.< Ð¡ÁEH¼U¢C¬±*ßP <¬ûºDJÄº¿h ãè¿hP´´~9[Ïðd79»´¬úð= F,´¬ú+£¨+|ÇX.Þ¾ä1þöÂÛm£(d=}vö¯×Íi­A¶4èMõÍ¶ 7«=}Èo=}ìê¢°#u ­+_Ù­l	öåFZg0BÔÙ»h±Õø£C[óì^ÛºÒ_Ìto|2ÇP372ò÷³§ò7Ò:q¥«3(ùLñKU"^oçKåì3Z7µn¥9ocV¿Ýà«¥öôx¯ârtFüpmSZÁW® UÄú*¬ÛÉ§¢Q&ÎÜ½I/B3oÛW¯s@hÏ4'7ÕE©
#í_gv:Ì´?Z·ãÃ?Þ)T&_^®ÂÄ³;)= ÃâêÓ^÷ÁlBì{I¤XîßÉ.v­ÑP>¶B¢­Ç1Ó@E¨/¸çùæP{^ë ÏnfXì²üU:-TSPkôCý.·FxçY@/º2ÏÝCÁ	ì¡UÅÂfáâÞ·§DH¬á¢qEóæd[D<Ø¡Ë}í<1ÊÈq/1 ß#êºàq5ÿ:sÍçîÌ¤OÙýpOêh2'QÎRs	èSeßÿVÀm@Aï¶¯ØÿêÌ¼C@ÍD»ÒßÒ¯ê
^»y??º
¢*é´áIpõ¼ýÍccÉi?kYb=}ÇfF4/ÍNñîòÂh±»$D eùøbk®Y(Qr= ëfRÉwL29ýë¿ë#^³5G¡ÉE=MïóÈ=MØ äþÎ!e¨ ÚÌÃäInëHº³©2¹¿bí$}Ùc*9n*PUOc¥è3¥®'ïJ1&V¹ß§øTòôxcNÝ?K¦þh(ßL§'ÃPûMÃÌN{²ÿãîÙÒ8
ÚéÐKd¸<gà¶Ó«ô¶¿ÈP¶¿ÞhQþasÛ¤î©Ó¯{uìÉ³ïÀIâ&H4SÃÚû£ò= $ÔPÎÊ5Á$cÃ ·a&+Îg2°ø{ÀñÃû|c4é!öícFV!-ÜøN¸Ý'
ÕÇO{Z(Å!¾=M$·%±'äÿzUé±6¼îâ¾ôS¤AWÓ@[à«b§ü¼,Ó=Mp!!0^z@xfoíÃ²ª?î= J  ;¢ú_b´-3ÈíÁããÞúoB-SJ]OÆ~<meÃm¶Áq1wÊ5ÓÚ>iüñOµ¾Ô)Û=MäÀÊß×¡ç§¨ðO.¤¨Dk«\ÊÕ!jçd5S´mþ¸KÅ±(¥ÏCxöÈÑ&RÕ*Gþ-Ï¦=MdÎ\¿.×n)½,Ù~ñ+½â, :¥(½¬¥&éq­´
Èþ¢#Å'¡[Qpuð%=}Ô±ê	Qï¥¿>l§ é$'º×åå0õWê9IÚ¬Ð¼K¢åÛ¿æ­4-¡®ûäÒM®hùP±ä< ½ÕªÒu#å¡Å^qåWým/ÔÛ!ÁbÅÙ£
åÙÛ	fÛàf'dÈ¤TÕeíÅ$¥Qâw®BB´¼!°ÞR:òµÀ"ix-ZOa-´Ú.½¤ZÛsÂTÕª|Eõ{¤òía~= +yÂãxâG¤ÀW£Óâ£ªýèÊ2Ö2[qHµòûí3½WÈ6o¥[£©c	îôÆ.¬ñà¥ÍmÚ°C>Í}hï¢«ÌMèBf%DM"ÓÏ2ÞS²T-qF0ÏÅM%å±¸W¯/Y:3SxQð¦Mÿ®jºù	&3fªPe&|Ä´ 	Ýê}	g)ÏÕ"ç2\¾û= %ÿ/]e*³Ü/dûÞ!mÏÂÕê­qàûÕÓ.ÚwlT4\²cí¢¡nà¯$}ÝÌêÔ§ÿ.]~1k-µ5pºï«ì{V£8=}ÀÄ½©SÖ¬\@OÃ&ùîI½¯(c%}©Ú	UíaûxQÅ= |¿¢{õÆ= äÐáÜNTAG2µ°\z²+Ç>*¸
¶ðS.Q9¡ $fûô½ÜHLê3Ä	Rié¾>£ÛU= ÂÐ°îÂd(GARðMVÄ\
Ú$á¨"ËçHë ^\ä6È=}&>]ñSK¸f§Vz¿ÔaÍÊzK%2µí³;Ö+µÜî}KEXPsRïàª®ëóþæÙª1óÇSmoÞRÑ·EVaE)é§.JªFÑ?ÕÜ."FÌ)wÚÉo2àÎsÜÍz¡Y(ïon°!ÜB}¼ùÁÜkÃíoUy>V|=}~Ûg ð³/úÞaöeñ¿¢æ­³ÑaÑ£#tiý²ñðºB å3}îÄ|I
Ä·Üº
= ö5%ÄÚ°%ºëaõOîkßàVúÆâ¥åuÊ?ä-?.n¦ÃÀHèn1 8µ:.~áAµ4
Ózx¯[iPÔ¡'O=}æÍcéÐi³ !aÄ£aAêm7rÒfMïñ P	¯»'d¨¤gLK-àwQ°Çïú@yÆ¹9Ã¨%'¡½óºørPûy¸ÛçcLþÞíý0ª%ìÃPÆ÷NbÆfF
º¥ÚÅý j ·¾:Ù¼8ì¬Aå¢ÓI	mLM«±1%<e|2Ú¹"Ê^Þ²¯DbËÄ <Æ©þèSÓXnH¡ãõç±±é#É$»[e¢\¡ç¡¸QÉ~= å|÷Öâl Äuë%a¨oñÆ;45Ê)¢o?Fî¶lÚ±Ïöa©Ûõc àI1ÏHvñ÷eF[ ìá ¥ëHÒ¶J®ÅéØN] 6e(na\Mz0Ò»uFª0ÒÏ£R¤ÑE ò§jiÛís¢í	¼Îp>:òù#	¼= Õ4Ì§êäÃÜVjÊÕýi6Å«rJ{òVêùÎ,l/õ¦,À'Gòõ¦kë+¬Cjä¦#+1ÐãË1ìcÊ²ìÎIo1¤Á±Cª5¶­ÜÒòÔàÏ»®!£T+/0!×Ø£-bÉý*§Ù= Pk÷¾½1ÝJA ÞK 	1+´Õ<bä£+½¤Å	4èÐ¼aÌVÃ¯ëÞ6¼æqªÏ*<ÔÐÚ®}X=}
<¾ºòè vPsëk_VW­÷v®S±ä¤å7eI.¥¹eÒèjVCµ3òiGÙPbÕHunûÆÆ½ÇaèHAa<[.Eä+ò±ìå§M)æò= 
Ô"SáKÖ"Ë\^lÞbD"«qHA/õ¦f5	é¦!Þ³FKäßëAnì¦qä¦=}ä¦Cêaª²aÔR+1\+1Ô2dxÕáIY0²÷
ûÜ¸òäþ»"pp"­¡j¶¥Ë \Â$Ñ/*Ý= SDGå§«6úúäHÆßQ= ÌL¼õ^f
!bk.9ßPéw8÷õbþåÞþåÎòÉX ·ûùÕdI­µS!¦.¹Ú<L¸½÷o%ÆVPkl%P_+«ÇÍpç²KñåM¡ÿ._
)
bÞ¬õââ39ÛÌIäçé[{¦áÖLò»tÑA©îÓZëÞMøÃK?>¡ËªÂ·>\¶).Õÿ-íÄ-'ÓïÕ¦ÀÈú»6¼¢NÏ°Ââ&ãp¥YÌ.¢"ùüM3eÚÃidzq(= è*¦¨[%¼?QNºG«8·÷7VIdª+ÖE×BÛß8e_·ôv^\keåP>í°¿M(ÖÍ#è= îµñÔ<Ù¥h¼MÖ°«½wÃbndM(Ûå2.­æÿú*5ývÇ&Ô|æ.7 9\W8å{¼n= pÑe½âû)ôZ±¢ìæbux¼»<\Uci{oN2ýÞSã^»Ú}nË-ÁØn¡èC*Bmy!·QÅZµÓqÏálÒ{÷´BWût±r= ¯[MÑUÏ±Øn!)§L¡£y«ñÇN
ì^q42KoÃÐÓa=Mðw=}·¾]¶=}}É	Ã¤ª#bX'óE]EÏ\ ¡¢:lù%^EËw"Ø$:AÀù
u}®)öø«N?¢3AÝåÿ &÷ÆY%\1?"­íj_ñÕÄ=Mç ïÃâ¸¡Ç-ù7ß§gã#É).ç­!=}Þ]´áìR¡&#ic{ªñð
¿ÈVù77«ÌbèHh§â#DÜôg1Ëà}²3÷oL16¡+®mÌÃ»Ì­Þ´Ó® b]ËK*géi|·ºq9"±ønÍ=}S5#Ú{ÊnNô|bv¸ôâ8Iz´/>,T£Ï6)ïIrõXàJNyé\Õ= wþÝ£Òdþ fõ}i/i ²BËÄ¢¦VØ)njòM2'XiÍÛõrêÝ ºrv9âáaCÇf.ñ	µÌÔ¯MObf²F@>Ê(|ÄukÊí= v$Ìì÷Ò"½2·¡MU¼P¤ãÝ%âú ].<b§Î¿í¹ô¤ýúkIqòé5= 3= ýÁlú¦IÁì?«QQôOßtp'ØZöhï6­N³)èæh:nèâÝ
â½Ëº2ô-ãÍZ_CäÝïyGòaì:£3Û¹µ0QVâ¾Q1qT¼±­HÊa[snJ¥ïÚ¼pöÍåÂÆ,r= Fæ;9SÏçÓ#Ù<bx­T [",é$[ÕDÝÍ®Ô#Ï*V¤sD«ÁoíÍK	âFÞ-ºÏJaäÌ²ãMz=Mâ	FÊ­¿ßÒ;/ËÃænýìîÏ5ÍÄ_èI±Ò}¸°9»~VÃùîxÏµXInb+Æ"<!3üÒ¿cìÞUØG¿I¤iZ¸G«ÉçþÚG´i¤kè;nGèÆ:X®úæÀñ.Q>|Gtü^?ÁNÄTNÓ[rNÏýd.»lÆpS×9ØãKøbeö0E±TÊÚ^ÏZkêÊÛ+xEî8$!¼TUFYõÄ!3<{Í¹òS¸À·â²¨d;Lì*µÜ.»r«Ë|%ç-=}ÝKJ=MÂCÆ0¸}iW»DþËgQ¿²ÛR{E¾DçþÎãÝÎÃ1sà*þo£0³iì]r]8QE¬íçKòÓÒ®vêÿÆ×G7PôèNÞQ7×TÉ²?åÂÖnêDmíZ½ÒñIDmþ¡ÀM{J2ã@,¡Yhßú¹*3ûÚQåR¼2RYî%¶êÐñÓÌÍ%ÈòNý¨ã¶i­¹hXrXíÁ?49¿±ºÜ"¦R2{àòwÓFªóNGÍwñ®ðf·¥à­Úp}Ëò,æ¯·v%5ÀªÅú¾wX·xrÉ)8e¾ÛAè[Å­_ ßâ@D&ø=}ÜÛåÞáÖ=}´DúF¬õ©>_o·ÀjA¾*ûÌ_ªaaI6n®'+ÁüôãáÔ;×^MÍ®L=}¥\¢ÎÀß ÎHosWOò/
ë*K=}/¾¹ÿ?6IC}Ã ´MdÇ¨trÈæësÒÛVý¿ÿVÎáSÙk+$´åþ¡ñdMñíî?8ÁC9ôI\aÇîÅÓ ÛÌq¬>²ã^}Á¨5³n?bwQ)·=}ãïýl¾Dé²´÷Ñ²BÔ×uÕrBYræ^t|«Í17~¢$58Øw\pë²ÃOÅXÄ'N/DQmQ|öô]Þà®e"H= Fävé¸Ë$)-¬ýÀ3µ×5le¸áÖÚ]À,ã1äòØ¶wCo·Ä¦&ò|t2(fR]Æã¶µºÈúPkÅ°¿;Òz. IÍº?Þ¬Ó×¼¹~ !ÒÊ"×âàqÅÀÑ=}ßR¥å©5Ì&ý%ùâð5úJr_»4¯ZaH¤Tã^d®C Ð?P®µAÈ -=  9½n¼êælÅ	Þo[çd8þ;=}~oýC'TO5ªÔæèk4ªÐ?8v÷&N­(ktÑ3ªPùõ÷îÔ$¬(¥v@=M9dq+sBØÃ~n)t1fBØ£~n	tQóÝ(­{ó³÷Öä;8^GY£ûe¨(¯k_@=M9®dmt±òÝ¨©(Kt1sBØíZ|÷fÄÊ(ðâj=}8<"<ÕÝhúbOàãæÒÆÝJß¿¾Fã|wêOðs#b72i^ÏO§Öwb2=}aÏO¥Æ42æég#cï72æélMí'&Óv(UÉÎOæiwÑ0äB{!Pi0¤|ÚöÙA¿,<Äi	×¹\~×0ª± È^)pY]x)y\Ï|Àó½øTxB£zìØaxÕ{Ð38yd0¸Ñß|yÜ&O«ÿzî¡×~VExf6¸äx¿'8	£z\~èpx{°ð½ø&yd58yÔï½x¿.U§[adªF+£kìºÆ-±ÆLl$3¿\Ë·=Mè£ºU«"cãÆNÞË1¬P4§ö^pæ6¶¥ÂÊá£°Hâ.EÊ²Þ;¢ÉÕøÃíF!¾Òm^çnt\N9óòi×wùGt® ±¢
ÜLÎTÆõïÆKte/Õlál¬]u.â$¼ÉÙ8lÖb îäÎÀfsA¿ÒìÆ«ï!w$7áñxö<4¶c:_µ!Ìn7eúÿ]/»¢MÎR!ìFÿò'ª]þª0©kSb©)Î5ùá-%Ü®
PWPfr.eÙjLÅÇí¥m¤Í20DÙK>ÅîúßÙRîâ¾ ´ácÑG¾Ô4Hÿq±\¯5¡4q<;Sð³hîMÃ-%?èæK>ÞVÌfHdÝe ëù*D&²Ç+TÃôÌÒ*Óo´J¯=}£h)loüeÄÓoé¢Í,}k1yÊÄ\¾«übjåP$ieÔÛ¬¶Gc³?÷yÐ+0íoðhá÷ÂÀ¡G³ó{áy¿PßØ[÷Ò»v¦ÎO{ê)­ç;·RSuþ¨ä[PZ¢6MZ56#Gq ;Ãf|
MMÆLNRR­ãSc´?Á3è$w?ú?}i-ïß"¦-+ªAt[wràrëJõñÀ%Èr¿m½ðÞÿ2ea¥o±¼ðÞÏ½2Íp´ý¥8$TÊ[M®jAö²)\ÍLåÀjåÑÐÔ§h%nN ÿL«h#qLâ¾uÙÚiòû¶IäÌ=Mãdp;77"X©%Y¨ ð¢ÛS w*×ócRwrW×:-R ìÅQÝ_¿GMëªïYVíZçö>OÊµUtaòYþ¼IY1Ç:ÑÇÌí6!¢;[àêz8P¡Çø°ÍÃ
<C?¶d½vè Î+ü!y878³³Éç§>ê¹ø4ËÇúZAÁsÂ\^ü³þòz¹GiÂ­MÊÝÉ¬JåUNÕ~~G	ÆÃb¼EH·Ò  Û]7ÓÐò¶¸ÒZø§UüõÆrHÂ|[ÜgÐh!tql?c.Ùvp©N÷¿YJ3K¦>6$ÀVWß	[Z!A (HÁ	m
]§ð§£­q÷Ðb0Z*ÚÚaâ©«ïæ]L[~ÕÊ$*Ùh«=}D«$Ä#£qò¾Â¸úÄ°Y÷FÚÓr<©qìañ*Tµ(Å2LÜUo¹êýcY·³6× ÚCýìÆLÄÆV.fôp\¤ØIçC=MH¡òñ=}Oü¹Zþð/!F=M¡Bùü2cý"N|¬Æ'Çö6ÍíÃÅVÉKõì üo FY(ô«Dc	e@¥(«/7ç­C í÷N¥«'sq?!¿R²n¡f$Y«0Mäü(|²©­ÈXXjÓ¥Ôv£V¦3Lu/¸h-VæÇ©Þ±U+·V
Hlç]¨>f]þÏ)äÁ)ñ¯w'#þbvtoEê×rýÛPwn)Z9®³îþD~óÜôIf}bmÇgºû= F WvÆÆguªf|¯Q«{Wd.jaMçûÅ{=};hãüaàÀ_<½aß´«®x=MÛ»öXÂ±åj¢ß\Ç5= <Í¯N^Ä=MqËEç<GÊVóACüJÌswd0¼VÈnzL'Ìº<= wpÆZAË)ã= H|Û2,§¿b¥?¾ãPG)Å[ÖhÅ7LÖóçéöt½¯áwYY>PàßÌèòÇD¥í~{1p¸Ff©^ÈÅeÀ^.{khádâ½QJ:7Ö)ß÷tRLìíø ×þÑïï9ÓíáöóùêÆ<~EàÚÄ«3bum,yîÎÍ*ðXâmí·¯ÍTáøWÇXSÓW2D<>ýã_ñötdv¨vªÎùwÔë>5Ð|bÆâd18ã¼Ç]eý0yètu5üÙHëC4&×R$5-/m9ÝjÒ0ä?!ùòã?ÕÊ*C]®¶ÿ"ÅÅMÌö6\êãêÍ_MÚ,²++]5òÁkÈi)*HòÄbci·çÌ ?öÄk9ÚÈbOA¶Ì!æ	^¸ÇAGÆÆ³Ì748ÇZjd¹ªëî2u¬·B}Ïÿ÷ãålÀÚ"©­µ!rÏeFø¤ÐË¸U­JT××¸rlüòÙ9Ò =}5åneõþð¾ÁÐ§=}? Ãó¹;^³aú÷V¯F®.õbw:êêÃ\÷z!ÛÓ|Eo'¢~äqÂiäÑN/ø¶ÀhPç );¹nwap= 3~ýÆi·E%. ÚÐG:¡<þf*«êÔøP»&1«CáN= åRì=M¼MÉ¯¡LDÏYeÇÁØ¢q\mO.è3:&d'I®¡ïìÈØ&ú6ÎÈ®±núf¸(QÎUI-	_ç¡1ÒÕJ¿¡¤¨9ñkdE¿ÄðFúØi¨úÊÁ?ÈÐÐÚÈk¦íýúÑGé	d
'0\ÅÆPûõÕþF1HLºë^kUì°­±ke0ôOô6ëÐè(1Gï£¦,[©cªÿ±;þGÙ(.cëP9HÅ²_ëÝ?ÁÍ}K­ëÂëj:-"ç¤§2.= ¬^mPë>Hó
c±b«÷ËñÖNµÞfdÑäÜÆªnMTÎ1;§ìb²0|ñd¬;¿FB)áâ0®ÈeÃ$Ïgìò¹©äB|0b}ÛÿÈ1Í©\ÏöÎ«8=}SÑpË9WAù!]FÅÕåÙ­jËÈ¢( Âç|È©£«£ÜÀë;´ÚÄåæM¾ÞÿvJHÕÿrK6cìüä#¦ÅßÒ=},'çDRóu¢G½%ùÉñÊõLWõÚÆ2¬êÌd6tL7ö"FúWw§úWÇ{#ò9=MØÅo¸Ý,þ)n¥þúÕT<Ùt¼Jý5§c1^zøæäâR0e¶ ,C°hcUØòg(òµ/ÈÔ5_õ½OÅ«ó¤þ²s}Çõðf;meQå	KA5A=}H­+ÜîÁ­Q¶pµ}ÊY	"ÃN²ÉgÉn¡2ÞÚ">þ£íÏù51@Õò	èÉ[ìä¯È»÷LN_ø-]Öë¦=M]×)Ú´GÐùèBµýÖÄê\}«ÅÕÄÝüüýlÈ>A%½}¦{¨ÏïJ«ßÇÇbµ·	¯µ¿W¤SX§|¨U¿ù:·6{|òö²³Ïå®9¿âQ=}*IMh¡½Píñ Q½UÝn90Êð×²Wæ':­¹K^¬ñ¦f*ÿZ]Û×¡AÚãH¾¼ayVêäÇRq![3¢(®sç£×Í«SÊê%Ñzì§ÌÍqÝîÃÁ È¢ª£ÄÕ~3Ý9ª'r$]ÑUÆA°ÁF7Á ¸ 041b© Çlü+ÜAe³Í±/vùZ°ñØ} ¹ í/1cä A«EsÆ©~[¬Ëë¯³ØÂWýrSÑÆrk"ûß.~Ûu³0%ñ4Z!@}âbðñE!	ð4bª2eÆ3
"ßÀ©Dn¶*ÔP[wya¿Y¾Ã>áë2ÚÍ&µò¾P)í±6råöÓ5ÏmüµÖÛ",Î¨_»¹¯¡Pä.zE«ª]Ê´Ê£}o	ºÓàÐ	<¡.ÍPÄ«gª^Í 2ë@/*zsåÙ¹">Æ$Ìû¢ìWÍ#öóÃ)?= s¤¸­ÊýéªÇÓDYæµû ÌÐm Kz´Û\E·-)É#ÐÂÄ´-Ö© Öp>úEYxN¼çn!Yëø~fÄXæ@//°3 rýlgÁÄ%¿íçîõ6[eó8¿C= <dª¯£¹ãvå¸pâ©
O¸Öcø
QàbP¼è¹^yê Pðn¢½ñà´éº]©äÚ5=}Ç>)RGÜ,ÎÕæq+8JñAC­Gèò¾ªÆO×½²ßX°ö?Qo= [§]ÆÃæê= ã¾óA9+2^v½XÉM*;æáUj##MðùS,q"&%"ºµÌ0ª-­úTÀB],6âÁ¦4áZ= J§Ð½vÈ«6O94Ç]5¿ïÆIÝN¥O+åjâã5 ieë;¨5hjjú¶2æFÿðëÜ³ÛB0æë,jðÿ®Î²?¡DHâÃL£ýµ0M4¼«'~ýÝT$éÔa= fEwÈ¬ÚBÛ®­Þuõ ±	Yá¥ö>9Ç«J^&¢¦çÌ;*/[2M¥	¯ÍÚ"ä0kyÿf2élåÀtüU¬e0ª­kÞäöon[Rl¤dìÜêÈ¸\m®Á Ðºÿï~[.7;fÅl2»!.·ôâ±PÃÇÁ_2%|[bfEW¡Ù¬kM!çú=}ó³l[ 2#=}1{Zmð¼êv7ax"5¡úµk&O(@ìï\	ZÅÐß(Çíb.ro[û3Þ-K÷SÔ»)B=Mû]ù^ÿ÷·à6fLHSowÖHd(uæÒÜöß(Íæ
Í"Ë§dìü]o}i¬ÇýR÷ÍÂåoI¤¯cí®C^=}ø~æeÉ^º"uàÁ Òè.¶ÂCí'ÜÀÜã/&ðMðÚÖeåÓ_Ç\cÖ0­ßBÖc¯@Ó_¬·¹ö·ÅÙ= aFT©z*ûcÑ_+$ÊÍùÎ¯Mb^&¤µþÛQ|/^Pb$ÿTÀ|k1«ùe%»5ºëXXkCYÛ:«ß¶iæïQHà åé[c)èÚå= ZA1ØÑO¾Í?~8ñÕÑë86®´ÀXÞTJ;Fkp= =MVØ!@JË[¬tÇ= Ãª@å<ÊI¤ Ö"|U®Ü¿:Õå9BtÉòâ¥=}}¸¬chÙþ«¾YV´>ûë1SRÒL~ÐI~Ð]èDæ°ÿ&æô¶ÆÌz£T"5;¡À8é"ÄC"äóùqÖª¥¢?å¢.ÑMîÝa¶Vv­ÀV,XXt= c|=}{ÞB|õ­ÙP¾æõÊr®$&ØÑDPåG¡ób½ÉkØvÔ-1úAãÝ´üÒEÕ(m¥Ñx!ÆxÕÏYKt9«÷rpÆF¯ýÓÔN5;<X_øÃ©%¬µàUýg#½ælÌqÖßrÐ'åüÕÄ¨u³éíIãDÈ¥c@ÉÝì/P,rw±y2Âw,[íì½<!°=M2,s'ÄcòÚ_Hu¦c¤/±/­ÓAù<{ÿeÜdlÈG¬yS_
0IR(ÁLz¥¦ Ø»aû1|òï= j^}­÷î¨©ÛÃïhøç¤UriÑ6*D1£O÷<Õ¨0÷ï£¢£¢à~XEÓ%®c£Ó¹ñ4é¬p;$q{Eà¼	Pã°@¬ÉàcC^%Ú+bÝJíÓÖCsû©É{ÇLø¼¥1z¼DØb£§ä7cO&)~ßíAß¹%3¢¯êRM}Wúj©!ÇÆËÙ%Ê¨|"¢GÅáÅàM}f81ÁçÆQ¥ÕÆÅp³FÞþ}§iÜÖKz2äºÃY=M£Þ)Óù§ù.Àx)£ØüÜXyÏ{ñ>0ºÚÑ,º°Óu¨Ðíÿ'6ØÊÂQ|6Ê>Å°_ÛDÉq¥íUNE5Æ1É; üC}®=}öAæ=}$AëÙÅÚÍ îÝBä=MÝÑA~L·ÃMXKgÐÿ»5Gð{R¬3*ºMóFîÆ
%²hðb>ø)\Fø«®þaxÊ?þÏ]þ:ÎáÝ1ÃÒ]&pX«w§b_ÑÔì(OÁJnÔHâÉ\¹õgý§r/×lç·v[7o:Ågæ-ÊDÛt½Â~f'ú:;÷¾¶YÖÒEç\=}~¦xú8wr'º<XØw÷¡¸þ§þw¾wt= »étÇA·vËrá
wU0Ø8°àÇ¼z~ü×Öô0©ú j×l:Zp÷)Øæü¹øßo×½µS^Ë[ÔS.åS.åS.åÓIÑ)æ¡WÆN¡ê?ª3üyxGx	k´L¶=M%éÇ´qviÃ$}HóËf&5ì5;ß\£ì8£X+<Óv[¯x©É½¹}÷¥ôq0Dú}M¡è®#¼O'§ÿÑXÛ¨Ò³=}o!¡hWÒi@úé~çhÆúÃèWéª¤[Ë£öCAòèG xV¤ hµÐ2xõÉ8ïP&8Í=M¶;÷Rdõz~¤ºµJx©7;C0ÇÛÝ ¾J 8ÖÚY7í»Vkx±¸ù}ÈBWÇr9¨º­²ÆµX7cè@±°é´l>¯Ý:0"hÑ>Iû¦¨Üðýòæ÷oË0§]Ræ?ßÜÆaøþciÑ"ÃW+Àç;js	§Åµ§Û×ò/íg´Äeî¹0£DÎn¡dÆP(½Ùõ:J:Ùºïýnu*¢ÆÀÁhþX,XÇ¹Ûú¹Sz{G}}ÔkGh7XÏVç'3g´gV4T5¾ð¶jm_v8EO%×14ôd	Ì¢åÑ´Xá¶<ÙÀaº'x¸íY²Xtr¥B±fPÕ.¬S|c}=}ÚÞ2ÝåSl}2¬U*ÊíÁÂAÚÕÉ#«ývýëìq5jW\­A3Ó§o¹Æ+Qu*¥RRðe{E^þò²Òu»-»MÃ'*  ï ¡³¡+iÂ×ÌÁ£¹ñ.§¬ÄÁm	ëhS;u#gM&ÙÞ=M<è·¯yl"/'T/ñ=}4!Û~obL"É%LBA)vVfêÃ;ñXhÿ7Fßyàxñèúº,2~ÔÑÎÃÄå	°²4E5Ô$«zvËp>qA©2Î;¦%	\¹Éz½é^M$EÄúì{[Jþ^ªE¯Q9?Ãz<fUWFÓÚ= bIö&]Õæ|õT¹é$±)»1ªâë­Æ$Öµº$gC©ºiøj¾º£¥¡äO <ÔöÈùXÓIìRBÐkð×;ç4ÓGØ>ZN´»D¬Ò)etëá½D¿Ä¡MJ= Ý'UAâhÞÒÏJð»ËÊBÒ3Q çu¨¿G|ÏOÕ8©!>¯Ûj'­£´7P,0 +¥öÿ6qÚÞØàü)88¹BÁ³ß|³x¦³ÁÛ}ÛÄØ©½ÏÔ¡Þ@4ëÿñufqU1_3_Tëv_T¬°\º¼Ü­¢¦,QD8íiCwB«)oU,
åzë½ÓÊFWôq³%jÔítJ[uæ/¥#áÛ,%u:Ú+Câö]aÅìÒ4mÈöM³ù&»ø°bàv5¯R>W ,úb×,±ÿe¶ÍÐMâ¬íf"ÿêç5tÅ¯EõQ.;ñ]rëÏ½5ÐÑ'¯RFõA^;1Í¥ÒÎ#.¥$òá 5ðs	tER>¦£.{2%^åÃ´Ën0ÍãóèPf}=Mmr%z/µã«¨íÖ)¦#pÍ6_EéÅ¥Þq¤S
í1^¯»Í3Ë§ÔõqIÐ3½©ß&´fHªb,iHýï~kºFÔ%rq;¡ëNdÆ£õPLµRôo*Ñ=}§R%û¯ßT!u½OàRt0Ëñ/"÷Ûa¬·¬sjWu¡
û!= ÀF{Á¦^°ºç³©º? H ¦èéHGÁDÛ5Z¤ÉòQz¥Xº¸>@ ×P:öb Ï,5´
´~\º6' ÁFi ´Ò§IÚø£orëAíXÅ|Òßãº<Q>I9=}tTÁTÐÆèPgp¹<í²ûF ;µ¼¹7§év=M&sA;ø#ð|µNüµ=MÃñ	ø´û6¿ø§ûV»ó	Ü³	¸xæÝø'ÿ¦{4P\é0Iaä{×ÍXs~Ç&ª'à
ëø]qùÐôD^þ «â½dð«Ûé<¶Jú 8âyËBµ?ÉvÌ´£Qøk­mtòÊÝÜYæyÔ§æRÝH´x #\qÀû\Ijüø]ÁX; âí°Ù«Þ@~¼M	[½xøPÛkíjÀýøÞl6¦IuX/xä:­Qi~y¿SÁî:dáºVêÛ0/ Aâ¼}¿æ×:¤í
a´(ã¼5ü¤þé<c£ÚN%h¯ãþ5MÌCÁ^>;ùÂ*ÑàpË×ÏßÓõm5J
gÇgQÑZg©ëýQ Åù~Å!#!ÆDÀ3(åî8Z½Ã	ë%¶M9Z ãÔüºË¡¸¯Y¬KåïÏOÊ##!ëcôY.ûasZçWô·§U¢32ÖáÂrVV6ÕHïsîÛâÀNÅáB.ÑaAim¯ç\LÞegsY,_åÃ»b;ïjsß\®­fGáôr®wÎ7ìw®á¬Í¤ÆÃÄÕÕ=}&qMEq«»UërËnÜ­¬fvn-ÿCÎú7­¨û-«]Ä÷&yüqÈ.Ð«ÓÏ¡Û&ÛLÐ@1ôM;8¦Æm= ¨¦ÕCð£]ÄÝ¿«ÞFó2ÿnMÖ§sØdi(ÄV~§óÿHÏ;;×î±S2ÿ	®ÊýÁÑIN(ª¹J¤ÞÑêR¼*ÜjÛøÿb<½= Ì­)®æ¹Zåé?G×! åaÝlP2}&V,gHa:SMÅÕ´°£ßq¤SöÉÒK-ü¿Wn´Õì/1ÓÕëM½Y3Ç]T$á=M	´#Qv£¯=}²ËìoÑË­>BQïm^5!ÑqÏC×®H´ËÓ¿Xíé¦Â#3pzg
íAý/­íË¤GÑ,®¢aÌæÑMÇe÷"j¿Ç±ïáp&dV,Ézn(¡uÿÓÇVKz;An=}Éiê'·òS!&Û®QæVJ(ÕøoQ3æ&rã?1:/>VñV¤[h?Sñ¤ÄA¤4Ók&§ÒRó' ·íÉr,Î¯,ih×2¯qÜFmEU4ÉËôÏå±=M×ÎÑSJ»è±p¤W0ghQ
j¥5b¾Ëôþ¿>µÏôgÑK&¸°áo
í³Ê«§ùuÒ;ðJÄgY3Ê«ç·ãfÚL¥$U{».<üp2M-EDs¤S(ß÷Î9_%ªúß¢0ÞãT©%5÷úOúËÆÕ0i4eÇí5©K_¦=M¼>±Ïêwíÿ8ð"ëðó:igç·&s]ç>KÔþäWòj:Ýç°ÝoZ(ÀÈ }óªàOúÍÛ´ä= nZ&vÒÇÉ¿àþFÜ¸=Mè·tÞ;Ý|¿riñ1Ì¼¿Èª= 9­ø?Eü[ÔÇUÙnH=M©Õ.ùsÍo|o|L>&þ>Gºhÿ¦Æ}×VbNt{Ü}Ö)UÔ"r×î87ÓÅX+rÁXex¾2	Fò= ¢Ôk»ªó¸ÅÓª1¶To9yà¼åc}®âVbQ÷"{ZÐ½gCÀ@¹Ë¼óº<wÄwZ;pÁXAÚl¿°<ø[U»SËTÊfRì(Lr8ª.m=}j¼[$½ø÷ä	)gJÍðªëÿIþÃ>à{2Ø 9®H¬ÜH¢4ED¢RÚî©pÂQ©øj>hã0Kmôù²úx¬bwÌµë>qþÀtY":üÉDcpítè¹^¤®EþÎþuû´(§ûàsim~mÿI¶¸¿ª4Î¸Ç¿U6ù;Í-Zã¯{]zA.¨DKò(8/^oHz~_SË&ÿéÙì¸8A÷°swÍ@xÍ!I6VDXÑjVùF9yJ×|jZ^	Å¾þõÛÐ{Ó \/«\7wCCÅó¹BLèKyÛ|ã¦iùÞ;Öyc÷kÏ|G»~'¦zg 2XRF}w4
¿ê|Éù¤*Å&
Ýb»´Ë°/tÍûþ·ô{æX¹þÉm[e[ÍÊPw2 Zæþ¿Ñz´A¬A¡ÜS+¯çADÀT2ñ;r­#Ïp2ÆÑÆ*¨©®HQàpCÿW×·!2ö©gºÒbfõ4UUdbâÉ"¢BäÌêZÔa=MZC=}ÍO×ïíèa1µàé¼êRëÿ*kë"Ô8Õ¦¬Õö¾ÒU§éêù3)Äâo4¦EÕÑ	ÀZÑtNsüÃoÿôÏsrXvÕº§¤C	N<­áÏÜÜ SâO  ?b<\K¯'ßdÇ$Ew´ofYYËÅ962J#sïÁËN&Æ5¦6É îïíïé©ëB0YÆüNLLvíwuYY9é[¡iÓ
ÊNþÄëV´¤ÅSÊæ²Z7îuS{ßËªú7t¡H=}MäÝ¼¤¼Â§Ã<k=M<YÉ	:2Võ,ZeH²îüqjJÖÑFlu= ß6téë64¿îãyÏFlÖÑÚzD_×¦}H{w¹UØ9³Ó±ë×4ê¦ÈO+«4¿³6ùnVñ.ÊØ¶ðÐDP½é¦hÂð¼äk.-V«´½Pà´ÌÄ¢ ¼ðzé,Ã\g¶
¥ÜMê"]»MüJº@ÏåüNº=}íK¼iÓïñ43ª´þR+ÞÉÂhjÄm)~·5'n­åä°B¸×ÇÏ¿ÓVþbô¡
» Y}};ÝaKóç'/Ü.ßwM-+gQH¬î=M¤cÁ_0C)p#wËWsÏÇ´öÈ¨;FNÞ*®®þÈm¡lkñó®| ý²»ºIÆ= «rõä¦7~ICtND¼@¨=Mû4ËÚýbû¤Èãq1= =MÆ©'>~Ì×s²××·-Ùí_D![Ål|´þrdÏ-G#ÍT@·²ßR{Å¦!"»/¶*ÒT02ó[bý6fî[Dì-¬pÔÌ]ûgÞ¾&åÇTÀ7ÑËD8x¿åî¼0d)JOXu¿&uµí_/}F(¨I}½l)=MÈgeå«¾iwÕßh/³Á$|Á ò~¶LÁ+»zÕ$E¿cã!«r®hYñÆ<4A~ôÊå¼ßpc¸çKud@s©²´lôagæ!66ómÔSiþÒ´4Hwâ²®Sô~Eùè\ÂuGóÏZû_ÄXK:d?áXwÚÅ)IëlÒmUlH_¯I^â= ëÓùrJmè'~ntì®8ú~³"kÒc!/Jc´>ã 'S]½§.¯ÞP= Ó÷_c?OóÅLyR$]À^#Z5MOibR)ëcI¢°
GµEÍ±IÃßáäñÜ÷s%.dP~çÃ{¦Ü_= áø¦~5&ÅlÁbÁù2ëÍ¬Pv»(ùªrJÑc!~3ÖÓ«½F¿Ñum°wV-ÇFþGJ<= ôÖ5¸~tØÇu%cT?áØ´»S{²³¾÷õbð5ÇI]= 2£§¼§ës®pßóE]õ%ð"p°ß¥¿ÏåûV?= Ç¯5À¬pëD|¬l¿IzÕ®r¢óÛ?Ëº×sbëÑ= cn3i~â8mïÌÕãû¹ôvÈï­à¸}spPÔñî3sÒ÷ôö×ãWÊ÷Bf¥\#Ô÷ñzPå=M	%wõF3ý®!I=MSx2Ðlð²b MÿmI8ÐÍ¦s+²F#|kMôé19ún¿½$+þiokãi©s)]ÎTIÓWÑã'£?km'ç&>G ÈËã!²3AÅ@¹oêÑ4DNøÚôm®ÏQfå&³Så¡
ÿ#áØ®I>ñVZH@æ³bycSLQkz%ñÀá= ÇîiÖÒCMª©/êÖ2öKN GNæöÏÀHÀÙ)ÐÂä®s)áMÄ?j5õÞ¡LPÎ¢fËËô££Ü"öýÇ2,ºÊY¢l±)Ú¡/YtJêíòbÞXµ3pbbkY£/ìRy±¥ï¸]B 2püÃ1/º­+@R3³êõh|yî/koK!=M;= lýÐh6¢¡Ò®,Iþ9Q þXÚ¤ûÈ= ðüì¥"üHWQ#3jwsÖ
)åG<.åSÐSåëåS.åS.k©Î!²ÍëUucö=Måºp v/6 /eÔXùTïÏÀñ)êh7wuË=}áÄzÁ¾~Ñ\¿y½È¾}ÍLÈ¿{Eà¹£RHìU= ¹§rHyÚ;9 >¨ÄÚK9¤^¨5Qu±û±;±
±[Gº+]$Ü­ãÑG¾®+=MedÜ¯êªê²ßê®_ê¶ê©ê±Ïê­Oêµ¯ê«/ê³ïê¯oê·j¨j°Çj¬Gj´§jª'j²çj®gj¶j©j±×j­Wjµ·j«7j³÷½^ÇÛÀý¬ª@ÿ´ üª¢ þ²à¾ÒIþîìÕ= ¾òIÿöØ»>¾©þéÄØË>Þ©ÿ,IÁAî&¿ÆòjÕ]ôV¢Þß0¯Ë6ßÔë')µYÛ­©~uEÉÁÞ:ùAªÝïËEÛK\æDGÁ±éî5EÑ±éë&5CKË6ÜÖàæ´×ÜÇeÌ5£-Ýn,TFÎÈag¢_"Õ#éÇ%óc´ËgQ~gÀ^VQ:3Ór¾£Wâeåõ3R#û²!%+3 -3#5ÿü13/r= %scíaõ þBÚ0Ä¾@Þ¾Câ$D>CæúAê*ÄBî2ß@òD_@ödÝsAöÞëøÜÎQÞï0ZElÐ+µV_mºóbÿ¥Ý17Ï²/R--fÑgVQdQ%V)U3îò_æg¶A¯Æi%KôkW¶Ã_"]ô­Õ .MðÒ'ÈkÍâ7ÎOc]µU/SlðÖgNkõò÷¸~CZÉ´Ül$$QÃ*óÍþ'Cj¥6£SoÝt	$·=Mq_*wBf«\»^¿ÛVáoNR3ónßú[ÜOËMßï^0Wæ2æfïëLBmgYðø2¾òÖ^½jÕò [Ô×eñ±tñsm=Mèc§pV?Vo3cQÉg¿S?)Wl $µ½Sh_Ý:ÿ¼Y_ÐÐR²ýüÚ= DÐ0k9Ð 6ýCZÙv ð0ë¹´Tõá´$õêý;u½Ë­8?	uig]SU¤ZÅ*)àd\.Ë£.#e!J!íEÞÌæé ÆåSVËuq×Uuga·{z§þñ'VÙ	ø
¸.ÃzußåXßÁÙ6½->ªèúKe]Ho;@91É¿Ëô0ÆÉx7ÊyÐu¸Òæ ¹²"ØV!ºí(Òä0 ©õ	òâá$ó¥DÅÒôN9*ÃJQ*³.H+ûÉáöµDÈu#{-XZ¨ulÙao½kôfà¯hgU³àøö.³Òµ¸º´ÙÖ 6eýÕV$°õú§l5uÈeåxDéùp>:ÜõÑðli¨.ã}¶^¶Y ^Ø$|OÝ=}5²°èûZÙÖøoÉ[	6óÜ6ùvû¥Õ°®¨÷âbZnàáax(=MwFHK& P:_Ì?[û 1Ñ±åCý¶¥>_}XcØÆ¤)j×[Bêèñ=MÎqïÿv¾ÐóùT^®uh9íxâ¶|¿x{È@yÆÈ¿8\%x:yäy¸¿ztã·HïxÅ¸>_ÄYà{F»|Y¿à.ý|TpuÊ(sÜO\®fÂHÓ¢(LX,XÔäÙ*eeY«0ù&Af¨-nú¨V\Gx(ú¹Ïýù7}6¤ÅyS2@2¢ÊÙ
åýÑ&):b?5¹«;LÔ»pö«8&'{¥ÑªãÀdÇµnúí¶¶gª°¨ÅòÒuúº¹0Üµ.¤©õ¸üõÕÑÖºPh9üj·çYsæÌ¡îTíº5:»¡ÛòX9HÏ;!»â;®äØ04§s=MÙÈ¤ÍáÊµÄ¼cP·np6Ç½ÒäÊ<áÊï)(-ÎDU§Ãv,~hóüüÇ
(ÇîÀ ^1üWa£]ÂaBÊn£ÊêNÎÜÝAÄ_CàQ­o>½¦,#KÊTL^%sj]D$n»\B¼}1«º=Md#áÂö8á%ªâÈIE<¾°KKþ²Û»G½#ÅLú:¾».K(Öààâï¥We·%oGcP¡á.\<ñÓÙã.¡[ÕWU³tJÖP°9ùnO²ã1}AÆ4f2³ßü«Í³= ÁK¦µÁ§ïVL=MmUYBoê[falt¤ï/OòJåßµÅ5|õ¯oÙg¨6¬a§1Mç6à'~¬æø¦ Fä^zÍïùüÌúfGæÝX XÝØ[í¡fª*%Ât"¾=}ÇG³$Nø ª×ô"9^{©ÐTLýé!uÔ.{Øl'y/ày2ÖVüiÖèjöí\êér4sGµo]bïíî¤++k°òwÞÍ1= bÍj(SBv=}77Q®Ã².µÕ;U¶ÃuòÜûîeº¢¼_ç÷ÍÔ7r¸1lv§".çm@·;¬­ïþàq?ì+ÛençQÞWS£U	ÕF°Sél¿ï3N´Ø µj0ccuUsá6gR£{î'T:¶f«<9ÝÀÐ»= D@nìÄèõÔº!Wý\aU-f¤KæcA¥òÊvððÑ^GE]ñÛ×ÿ¦ÕÈY,ÄVc^3µuV´ì3véÍïa|û¨¬ Óyôi= !Úhã=MÃ )rë= ´ôÚ';æð6«_=}(Ë¢P5YoöÊç»wçpQ¦üT5¬ÄõëDBÝî·Þd_ Ê]±ÚÙ É:-BÕ4¸.èÍ3kO# ÃerazÊe§æg,W7cûµÄ{õç&@vçïÎP8GÚNÌêe¯¯Ìå÷ÉÐÓJ5'Sü9Ç×ßQm|-u½ðÕ§ýI¿}=}y-³ôhrëz¤=}ß»«jþ.¼[*Õ¼0«I§Ó§.Å	
QjR'£L>íëä}7Æ-µU×knvÇc:@<E/VÿÆ³Ðà­áÈhðÉÉ_½){o:Ôò¿L-U33þª' I	Õ2õ&îËa.¤/%K¤ë¦tÀ¯ÑìÕõö¿UBÅTR²VK¿cY,3·vñ{uß®×
i2áÉ{:­ÏÏ³'c¥Ø7Ç3UÔä ªDt)©l\^1Û©k¤¢ÛÊç /ï'{a4¼I³Å×IÊt;W6ÊÞkcOE&­+÷]ï¶e[Ò¢²WÌçu2&t= Xr ÿ¬ßYäæØÑ{ /{5ze'{:çø=}zÄT~Xhç?*ºxÐç(nÏøøw4Ëzh|,É¸ãã s_V«>2ga|n¢Úø<òÌÜy'*içØúÀû þnèþ4 èµ8å÷z]ÊI-5©¶HSØç#pB½±á1< HxÇóxx~m¦EC= RùÃlèJ yØºM¶]ýQáR?þ}ðbí¢zÄ#µ$ïÝéf·$9Á#WG¬æàw]}ÑU²,Æ(ºnêIí+±0g/ñÕR<½|sR^]^Æ%!¶Ï½ÉÆâ¿£6ÎfÜKr-«­×*tD7 -·iç±dS1ÝkrÍmÃhõ$QgÚ±v!R7#û-²;Øùg7Änës¦¶ã'ó4g<ÁGkÞîW

ÿWq·xxÓw±´,¶ï´´Ij=}´vþi´#µ}%¢µü:¾µË^ÜµúµÿµC*µI60µ²7DµÌ'Yµoµ¶Ql¶×©¶àO£¶[°¶¨Ê¾¶Ì¶7¿Ú¶>è¶(÷¶ÊÓÿ¶Ø¶]¶ñS¶èf¶P'¶sØ/¶37¶¾@¶/H¶ð¢Q¶3Y¶Ëb¶Vej¶~s¶6{ØÔÃ¸ËS.S±)åST¡Ûõ+.åS.N®VPC.e@pñÕi6Smùu(é<üLÙ\F=}Q2é¬NÄÇR ÇKÕváþö·£ÌSÈp:Ù^D¯FòJÈb;#ì÷âÅúÀá9¹ükqË1©$?ù3¼[¡Ô¾ÞÌ~Ve+ðÓ)åóê-õßjòÔ8rþºv2Ð<Í=}\^¨á
ê^¼¢¨ôXwó¢¡Z&Ä=}"å¢F5Í©é¬¸(/¼h_·úK}uþ×Dð0kÌ(mjXp9MçúÆ·|ÃW¤qç
6~oÐÎVQtÿÜ² ½ÃWÚ,l©²Ã5Ü~Xì#Ò/ku§¤áµDÊWÒAötnÍo+¬?óáOz_ÊT¤]Â]/rCú,Kú2»Jô³}óN¥p¿(7Ò(ÖÞZ|ævúÄó9Õõ97Û}ò¶÷Ë©Í½EÍ Ô%ºcÇöº=}IÖ¢ö¯ÊiÚ07S" ãÊêa
<íÂ÷Í
\Íø
U¾Â&ÌÚiÖ9cCVçÌXÊ'XÁ2úÓFþÏ(Z3*cê®çË¡_ã¹êÞl
ÛQÈúkFNX£Ãp5Ë²¯)*H
ÚÒÔ±¶0Ç½@¯Y±5 ÔÒ)iÉßNÚÎÐ@aR1Dë}Äp+xehz"?ØImBôvB@?ÎOñt6¡k4´j ó>>ÔBê¡HDÝàãu^»OY±ì0ÅÈÕ®âFQtpØ.ª²óy-Ñ.EÚN3ÄÐ×às3ÝÊ2³ûa9a£Æß9<ìÕÂÛÀ;Óµc#!ÌÇÃ½çâ¢þÊpÅú?0ZÇëÕDjùAÔQ=M¼ììFe Ó 6ã¾Çp#ù%|G>k¦CU[a3¢Fé$ç oÐ¦ ]EnuÚ÷EZJà´¿½.¥ËÉDå \´ÑÀª¾èI¤ú÷Gþë¬/Ùpþ)îÈ±C»ÛNi}ýÈNÏæ¨º¥¹­¹<=}ù|âjSxDdzè³eG©÷÷NVnÅ4sÒõá	qVs¨»f;cVaEHÆVÔ$hZë¯§bã´q5Õb´ðNK{Òï²lè?4BUp¬S=MåÕ¢÷ê^Ô«[×°i¤Q¡1b RvëíØmyólÄdIÖã?:éîLtåCf.Þ;H/N¬Ò«q~¬0:(UÎN(Z;wDaæAÖ1}Y%^\Km lEÐ«GÕUÄé¢¬9_©¯Uñ,M ,I¾\Íje=Myºpeø¶kcËÿe³Õ&ÿbjâ-[íÐÏ&Å8Ë¥óá/ÉvÄ¢He²>bÌuµ=MË°¬ýÓ¯Øªr1PïöÏ­ÊÔ±ùÝ[)G±[ÈöCµW)Óµ~ÛE?åHó¾+ç|5ØòrèÞ>H9;(CR9púÉbØ®d<ùVûÀ@¥{ = ¬ø9uñ4Zë×®1nÝR7õàâaÅ+ÁçÞ=MmÚO=MLcAïÑ2feF&UqPó3o4ÕèMMß³)æètÛ³jW"DôSÖe)UÖßRÊR7¥:R+È|9{øÏx}8ÒßS.5wMåSîê.åS.åS.åFP¯ftb= ïÈlòÝ3X©W¸;²*TÏiû8ºX+ üñ°"E9ë~L¬4jqs|P?Hw_ ö¢þ[»pÊ¬øWri'®²µpÛ¢ç¿7Ì®ûÓCOßæ çø3ÑîãsË=M0ÉyANªpw×#TÚD ¤0xÔdq«GýTÞ®Þ¹1£{w»«ë¡ÈèÃ:J/HògrÚéfÈJXÇ®Y×=}tô!ú3Âöki?gthO|®ó9ÉSdùfÈtIûÇÔM\|¿óS;çWçS DÊ,©?±Ë¨ùóI¯ÿ@hG 6wyç©¯rWý´;c¹i·8%&³è5rO8Åë­_©ó~MÇZbTÉ\ÿúK=M÷I=}tT£ö»¦ùù*®Z>LéMÃ}.¿i?ÏêHÅ
:ï<Y@úßÝz= ö?¦é¦´åÛûÿ¡«¦#ªã ~a·Y6ÿClOÐÈT·Ð%	»k¼½ó
ïm[U=M,
çcÀ9ð±ÑJ¡¶nÑð ´ÉV^Ù\ä·inò@Ò-­Y­^e×@·g#$/ÀÓZ
ñd×:°%½¾EÜAç:z¼®wGÊ¯°!ïÿª Õ×Â±V R¢´ÆeêËJ=M²Y²²j2åÅw4DfF+	@©2«ðCª¸©ßÞ¯§1"«ß8å¿¡i?Ôßn{úXy øzPQ.åS®+åS.åS.c7äS.åæ?bê,[1heµit»To¨	­©öúªªìÊ¥¨^üeY%ë#òV\>KJP¹Ó<¯áÜ%§üP
úoüæt)áöçóóG	©%Ç ÃKAPú=M³h÷¯f»B&»àÝ¶Ò²·_iK] ~'k]Åäª0ûøbs 6l2ZGttSW:b{V0ö~Ãg¯Ä´pý½=}7Cxs¦<ÊJ»Nùæ¥$0ëýß}ñB[º0o¼îê
Ãù@4´"×¢;ÔÉÏI>oK2ÀÆL»}5yIáÝs¢ªûø}\.ÐUUµ'äÕåÿ|éàgìº«b×3ú+BB02=}FV0i@bñöXÚ¸QÜjúikä  ;Hiz+-	(¾pÊv=}¹Zôz½ZIÿÜØ ¥²;|îBa00«Ïe*Xñ¡NÙ1Ððb$zÔq×ü&2Ú]¢½t¸ê¢hÝo­#35×Åcö ycîÐ´MÞ/7PþVe 6JÄW¦2N{pn\Â·ÖñØK=}ÔëþG!É PlX|ÄZ@.átÈ¹q~¹hxÐÚxÈ¨.åS.åS.$åS.ewÚ,ß'åSñsÎ(/v5XZú$TÇz#W·6ÆuhJZTçºTDID·XóÄï­Ú òÉ/h¼wÓÀ©ÊEôÕÖt¢;cá*¤k[o¿êdWÑ
zÖ´° Ã1ÒB$Î^èÿ"tÓ=MKMïÍ?h²­jK\b{ÅÎà$E=MR %N¯¼=}24Ð!¿á¶Ímq.<xë»&T¬<ì¡t?itÝäBeÙËM)ÃI4Û^ä@(b}$+Ü+7*O%p¶A¾®Äc-¹1@Cg.æ([ù'µÃ§R«HY¸/"?±Jc<!óÆÄZDwíÕÐë:ý¿&Ô0gBÜ¯à2ð@&ðVZAòÁ§Oó©\\EB¹çfÝrèl	×>sJ'Xÿ= Þ·rtqLcGùx¦×ØÒ»³6|¬¯ ÌEØæä^Û½_ºÀ½hÓ ë:ðï³v2è<Wþëöô|¼«¯
ÂÉ':À¯ýá¬çß«%Û±7§Ês°ò>ZGûi°Xõù.0fÁUóÓ0ÛÄJRÜ$LË ×úùì¢6ËËpB!¬¬é5 =M÷K±9!6¤µªRÁ öÇÝiÅ°&Nä*gÜ+­¥ÿ\9¢Ôë1-y=}´Ü\ébÙaq|l]ÝÏ¸^Bz¶ö§XóÍÍ7ZbÕ¼A^ÖÃë/&·ñYÉúL2÷£30{PÙ¶+oBh Ù¿±»$¥&Xß¹}}2=M<ïÎ*nÂ:d# Í=}9Í¬òÏ«çÁ­Ú#1ÐûlB·&ÙÔÈ¥_O
u¼W²®§ nòÆmÔÇqçm,®è56ù¥_°M »ò®¯s	ÅÌÆæÚiÐ¢ETCæ¾íÃ«#f¯KäW:^¤Æ-t1}øÎÆÇæÝñ÷£ûå¼ÿ-Ùª5ù®væßïØ³÷çaÄ³>çSïbXºÅ+/ï(kâÔg\qlÆªGít*õ¦òê2(ÑPýå×ÖïÙäV¾¾¯ñ«3ñíÃï2ÉÉeÙåÈ%mµäÐKû>&"¢"&S, UPyBÑf¦)àÆd¥îïïXÿUd­ä:ffäjvmìß_ð\ðnÍ·d¸}r$È¸Ö¸'ìLÉBÎç¹ÂTBÍºë%+Bó¼î+Gò (!(õ4m®'ÍÙQéæUÌr£!'øzÂ:|= ²Ë¸Mòy_H'(e	ø×}ã¥ÚÀó^Äd¼\ñ( Ù¥Ïü^ìg= 4¹<B@¡égú Ï½UÉq¼<pOÜ½Äq¢ZMï3ö #wO× kEw"Ó¼L/ ÜW¤J&7qLL[5Àõ¬n
ÀßÆ¬æ3Àk½*@¡ªÐ¡ÀuVÜùÌ£ÈJÈùÒÌÈ!ÍÌÜ$Ã>¢¢7&ïk=M\_"'÷ìÝ'ú¶¼¡@ú=MKi ±Uày=}ýìM·§?jzj­¦
ôJ(GwÞ5EÇëaÏÔ¦]öDO#AÿQ,u½@s£Ã¬ä÷~=MíA¥«JaíÅEÄ]ÿË!=Mé¢UÁÃ"Ü²I£"êÏÝQïÂméö¨ùÂw<
=}KA°Â·Ã=}â)a»ÃëAïgÜÒlô­¼sJJ,6î´a¥ç?I­Ué,>²
´?ÊËä|å>H=MYìõï=}À,mÂ¥ðÄgú oÓvÙv,Q­sJe¾Òh?RLñÉhÇób¹¯T!YE°= Âç®0È'QF¬¢Uþý±
µIu¦^L³quIìl@ )H<RÉÉá1vJô®sÿJ×=}^©²+o0A:s½6.S¤!Þú}Ýî®ö¯EÀïæ×bCrÈæå§JPVæ~oOâUÁ.'£5Kýæ!íF³³JÉ7,3NHYÙ>ìq}Þ+ö³¢¦áÃÂ¿µ2êÇNbHÿÎR%HF^ö4­&% SnÎR@b'vÝMG÷)O×7+>ç$N^×;5ßÅV(ôä.Y«Þo½ ·ØN÷g(ZÇ¯Q=MOPùCÑh!¢þeÑktë$ËNáNÔÚâîdñ?Ärñüå5é%T+å6ÕÓ:¤~+;âÓÑYä^ídÑbâ.Pö}S6í14á¦?
Þ+hæ«P=MËQéÊ¨»\(*Iá$bÐzk+D>æÜ¥¤àqfFT²ªu¢óÎµà Ó*"·C"g?½mÜ¯C³)4&>Ä¤HÛ%æã(fÉ*¤u'ª#j*p<Sª÷[Æa¡QAóÝ«L¯CeÐ¢Kî«&Æ=MA­»ÜÃ$°/3$éïãÑ-ìE4g²ÿAe4¦A;ÃíUãC<F£¡ïªóÊvâ4&LOJÄÒmÁí??Â]±ÊÅ+_ÊÝ\®áNi{J»ÁbÐ¥%fÁ_WÀÁc0{¥
/ÂnN_m_Äp_P¦ôø¾ç6ï#}	Xþoþiáq¤ßVñ§,X£Æþiè/ 6wÒ¬³WõFÆD[}G´ì÷§"9e¤^h$Ak1Q2½Te>Êö½ã·ªâw
*_äT<Ý/ê?7=}´Sä7^/ÿó]f_OZ}t grt|§å¡]¶U±'(³;s}_[
¢pÜÒòýç5FMVZ-Ýïqdða]?4= >«öcNÃ6cNÖ÷uµ¦Mh_6húË-ôJVôUþW4S4òv¤ÈûrNÎ(­Î?Slwr åpÎb?®ÀÑÿ%l	W#ØSWóÛÁfð.¿ÖéÜ®ï<ahF VO}¹%3ÙÖÐï= l8×µéQ-¯ìnùjÉ×m»Kë,¶àù¹W¥©Û­b+å(pÈ÷HßÓàÓ<#ûèõ=}ØÌÏ9Mrðàµg¾Xo	àõ8RodV¬-5èEÑþíIyËN³i¦Öî¾#¦= pKbÒf°çbùhV°æ[ý»5éSVÝ6H·0ª÷@¾XSh¸¼ºÑ¨4³ýÒ¯7wüZb¨pÕ¿>A©1¡z>ÚÃìK°\îúKg ä3²£.ÇøáV¼léüÊAðhìª<
àdÂ¹= XÐí)¨·'Lð4©Ç82¤O4wüëÓ%ÇªÆO[ab<Â½X;ÌäAÇ» é²Zï[yÝØOETF<0ç@ºò®^Ü[!Ö\Ø=Mæ¦
ß\ÚéÛ¦L*j5F;=}Hôì²;u(ô½yBv8ª"Bé%+] $ÛØÇ}Dª °%¸ÍÓj:=M0Éá§ðV¿ýtA¢ðäÌX&RHèè¨»8*ÅzîÍpÑ£/#É½P\ Ð¢ZGÆ3'PiÌ<_Z÷ ¨âpÏU¤ZÛÀçv lGÓ	ä#¼ÊæáÝÀý.m÷HýzaQ¼ßÌd%GÂÑÎJgå
Ò\¬­ÀÆã!?ezJM¤ôêïG5Y1\=M»îÛ*¡GÄä«!Æ~å2¾³®
ÛÜòAô°²J"iÌ¿dõEÉ"=}¼ª>]é¬+Õýð¾Hnúè7±òÁ9ï.·na!§µ2_Å=M´XÆ{1
Ë$«ÕdÀöAv=}ÃA±In;Ë;àÎP*r°R_SÊÔ­ÓJNçu= Z<6ì2e-d¹3íSï²	ïÜàºCÃ!p1¶¡Äl@VÉÿZ­aUdNÜcV:>ÝvÝ#ößÞSYïDY@^3s£ÕõÿÍ¡&©Ö=}ÑÛí]d<	[$]£b)¥#TF*¯*eMd:þ$:Þ³íì²#À+VA!D â+êÙÅ5TÑ'×îDt£KûQò)©¥b¤¥^+d$ìËn(UÁQK©ÝãABo~@Z2í	%åË]ØÕªRYÄ9UÊÓODj©oÖ=MsÑÀ£>Ãe5_Â	Ò=}Êâr¶tmöÀ'ú,q8­to5VôÿY¸v{Z=}u^ýk£ÓÚðX6fî¸=}m»ÞjÅ=Mk16Uªæ4íÏWD©Ù7÷ðÇâ±<åÔÇjsË±/¶î·òÖEï WXæUgiÔS4î= £¯= {·U_£×P^×w&WÊû²íO:r² $H;gÝeÙü80ê%{ní>mvUH]¾m>«Ðæ&Î Ðçû]{È®ëD798YSµ'dYe^ø,ÑY q×JI1´hHOA	¶¨= ÿ	yØö¹Ð¯|¿²ücë°¦¾ØcîÉ v¨îÃ:IîªÆ¿ÛûÏ¤&Î>¾øÏ³É³}
2¯}µ7ºV§9Pü}ÑOÞ[Ur$ÔÙâÎ½_[.õy~âÚË½²ê$(Ê¸7Òyq¼fôÈË
dfz20tÃø)¹¦Zpãç èqZàû ÷Ò¼ÒiÂc¼2ä
U¬ù# Æ Aò)ú6
KeJzªª@×ëaFhäJIER»álïÈ¥=M¼{<Ë@)ôqó/3ÛÁýELØS= ÇÎñK]ÜïJ;vf	ÛóJÇ¾»®Qó%!ÞË·ÖâS=M×âÇryþð"cáJø}EdAe²ÎÓog*÷ÆÔÝëGªwÛD²ìR4ù­ÕÕDÊWÄÛÏ#
Ñl^® è3m4#ãE'AâcÜÞ*&=}ÝWk;CÚÝ-]ÝÛüi
!lÐÊçHYQÚ×¶dS¾èëw¤æTß#13.WÉf]»SZÕp0tB´hcÖéi×êÂ^ýÒ¨cUV4Â2ÙEVàw>V­®7­[®?ì/Éà2:H°D}]ýÈ%o9-y= ú%Ûë´óÄ8ÁÙ=}u\|àúïÊ(COÜ2¬ÍÿêI¹@?'ý= 5º(%Ïve@éÙèÀ<M§Òv uÇ$v9wÊýÒ)ÒRË­Je%lN,r·áº"9èöØXÚÞÌÿC" ~B÷x#YÚ¬Ü,ÛlØØüBÌ¸RyÙ°Û´ÛÛÄ~zz;9¨£c¹¯á¤Ù\V99ÆHX	ÏÊÉËOLJNIMKO¯¬ª®©­«¯/,*.)-+/ïìêîéíëïOÉL¬¨-,íèêíolniÃÀÂÅGDFA£ ¢¥'$&!ãHxxykv«´»ÁÇËÏÓÖÙÜÞáãçëîñôöùûÿ	!$&)+©¹ÆÑÛãêðöü 	=M#(,158?EKPTY]= gms²ÇÙèõ&.5;AGQ[cks·Îâó)3=}FNV^er¯ÃÓáíø
 &,16@HOV]chmw¹Ñæø%1<GQZbjr¡Âßø$7IYiw£Çæ2G[n¿Ûó.>N\iu¤Éé 8Ncw©Ò÷7To~«×þ"Cb§Ïó0Le~¬Ù&Hh}±â8_}³çBk}¯ß3X}´éFp|¹ò'X|»÷.bÄBy~zÉ~X¸_ õRï0È(z½¡£VÕÿY©Dnóü~·rxôÄH²b2sö3ØîÞ
&©,¸ËòîcD!¢ko{y³D®ÈÏÂ?G±~vëfsO)!	ÙðÚ SÛ)Eðx;xxL.åS.åS.åS.åSöÓ+å'ï{ð¸yÐø}ô¸{Pø{Xxú4ü£¤96ýä9Ê°:ÞØzùÌèûP8ìhú0¸~àÞÁïÐût¹çPû\èþ	ÙÇ Z(üÇàZèüiá;B0>ª$YRð>®ÛôÛÂ/Ðý¥tº'Pý£Üé^Ù)LéíP;·liõ0»_#\}Õà¹jµà»{õàÂ¾j

&,£q
,ÁaÀ×	|ÉIÎÜ·JIî\à±Á­UáÅîjµ5áÇæ
K¾´ Ã¥BÊ¶!¿åBÉ
²LÝ¤ç¡cÒC*çácÑSê,m%ÑÂÍUâÍ.j£Õ5âÏ&
M!þ1<ÉO5NÝ§wJO3n]¦ñã<1@º¤Zñ@¾	ûôÜ¢¾iÊ&*#pÎ*À] ×Á|ËAÅÎÚ·IAÃîZÜ(1½¬-TÝ¥îi54Ý§æ	CÑ¾Ù´C¤>ª¶?ä>©
±DßÛg _²C)gà_±SéìkQ¾°MTÞ­.iU4Þ¯&	Eáþñ<ËGõNÛwIGón[qß4DÛ3P:¤^ÛóP>)ûõäâ¾kJ&.¬#qN.­Áeà×AüÈQEÎÞ«·KQCî^ªä 1Å-Uååîk¯55åçæSQ>Y´0C¥Fê¶1?åFé
³T_ß´yï5]ÑGo,o4e±Çò?Øî¹í/ÓetÆï'ScÜï2^ß¶Lï7mQGwlo6u1Çö_Xó%¹© ~F.åSVæ.åSÓåS.å3§-åS.U¾7KÐå\ô= ¹O[¸ýDp@ú"<íä'-Æ4öDÔ°¼((Ím9Ë.¹·}(yÕÙÄÒAzû;µÂú%eÜóüø},±¿§o%§/|Iiå¯aò¸û¼|éýÂ7hjÅï]ûpX³²M8Ó+v\ÒÖFRC´àT°K£Ç¿008mÕnêZÞ2u[]xwÉÛpu·ô¬¤!uf·|ÎSKU÷éf %riú¶<qöÖÃt<Z¨"²t{ý£ÛáÅY¯<öýrkÄÂs}å·jËgd±Âátjpo'WÛb¾RNsÓç/{$xËw6^Ó×·¤r6O+Õ·xxx7zÔ·\z7¾Ò·ï:}7ùÐ·n7+Î·ïå7©SÌ·R±7gqÊ·xx7äÉ·B775Ç·ñ7pÅ·E£7¬Ã·BO7 Á·iô7k¾·7IJ¼·¾*7o!º·²º7ð¸·[B 75¶¶·Ä£7t³·[=}¥7*±·y°¨7×¯·Ýª7k|­Hy8¸;¸Þ©ìÉCíoÿÿ^FoÝæNÜedAVI Nà¾ó´Z­iAª
åªcÜÆna¦K¡UÛ2Æ_ì~Ù©Ä:ÞýM¨3ÙÿáP>Ùõÿu«Ä|xø¸:qÏâ¦{Û=}¬ÁáÎK¤eÙÒÆK,>áµEKö<: ©£Ûî>È¤!PÛ)®^Úç>ZE©#Û®î?è¤aP[)¶^Û÷@k¼V¿jBñgÿjJñ¢ç?jRñ¦gkZñªç¶^M_Q¶=}l¹Øy;x¬~èùø½NRïsvØ¬ña3Co+c÷îµG&O+cudÒÕc+ã·îeG&k(côd²§3FG&s(cöd2§3fG&ñ(ã¶d3^?&ñ*ã6d¯3^G&´P=M3jÚÏödBÕq*£çî]G&¶(#db3r;&¶)#×db3r?&¶*#db£3rC&¶+#Wdb³3rG¦dj9¦§dj;¦Çdj=}¦çdj?¦djA¦'drn/?´_­ÖcµVããÑKRn(µeeFZÄF^FbDFffZÆf^fbFfæ~ÞÙÞÛ¾ÞÝÞÞßþÞáÞã>Þå^Þ§{Ñ@¼®ª
=MDÜ»ÑBÌ.ª-DÝ'{222«2»2Ë2Û2ë2û2 2!2"+2#;2$K2%[2&k2GxÄ(9£D(;ÃÄ)=}ãD)?Ä*A #D*Ù	%xüÙ¦÷ÅC¬Ïjø<fkt4÷6·wkFq_6ëw_Dñ«÷nAöQ¯s\4
×jÄ6A³ql6J×rÄ7a³u?»ô<Ãt<Ëô=}Ót?i±Ö?gðW[õtw¤Nyø¸x;¨Í|iú#óÚa*ÿdóAö*d£óCv*?d«óEö+_d³óGv[¹ô i<ð÷ZÉôÏi£=}/ðwZÙôi«>Oð÷[éôOi³?oðwKûl5À·Jl5Á÷Jl¡5Â7J+l¥5ÃwJ;l©5Ä·KKl­5eqWç÷àµÆKcl³µÇWKsl÷*Ô}xø¸üñ³uÓq}<{i¹4·<i½4÷<iÁ47<«iÅ4w<»iÉ4·=}ËiÍ4÷=}ÛiÑ47=}ëiÕ4w=}ûiÙ4·>iÝ4÷>iá47>+iå4w>;ié4·?Kií4÷?[iñ47?kiõ4w_{q¹6·\q½6	÷\kqBtÝ¶«7gD÷^»kqJtá¶­7çE7^Ûk+qRtå¶¯7gEw^ûk;qZté¶±7ç÷'7GW¶WuK{Úxxx(D.åS2Q.åS®æ.åS.åS]RtycÞ!#
#Þ%B&ár¢.JòÑaLâÝêãÝö'4öN2£5ò>Qc%tR_$7ÜÿªãÜ
û¶¢$ý¦»U¥ëÅM/E«±¬¯U©W<É¾ç#T
¾åejÂ%EîB§ÌHW²oÜÈWðs4Ë¸ó¹_t¼ÝûåjÀÅî@½ì.@ÙÚ¢!ÿ]&Ã!þ.ó¦Þ°f30BbÛ-SJ"ÛUÖC#±Æs¥~Ðg6Ø7obØ6kvÃ"®ó¤#°d+2Ðd*è)JK¯ÊKÀ³4ÃÃ«h»´]l->aL­Nç\KNÔßt	À{åh¸Åì8ýì,8}
!â ¥@!!p&0ºÜìØÌÑ_xcXy¾I7eÛåSô$UßS.åSNäSnZ}+ÓþÐ3+RTWµ^9¹XoéÂ;äÐ=}~ÚW÷¾ìlwvm%GÁ,»*ÀûC0Í;æ}t*Y¬#°è:ÝTbÙ/~öqè{#«°µ:âªÄrXêæ¥(S7i(YúÖp©8È¥d.:§¼«8,-Ô}FÔ(EzU¡ÐÉ:ÃD¨ÙÛhz»åè¼y=MÄèa~ÀÍûô*¹àÜÍØÓ2¤øa°úê³°§øB9¹Êt©¹q_fvì®~÷k.ZíÍ©Ù÷®Ð¹|LØX=}©ØxûðlÎ1|ØYxªÞÚr,Y à½·FýlÀ<d¢Äg¹rÉhïÿ¹N[9j_ü×ô½Å´·lSü÷¤¶<@c@@û@@}êúTTÔß÷ä7¹v²DgSçwÛwwnAOR\úmPÞN¾ä2¾¥Ý¥]¥ÝÅ]«ákñ¿25\´¸÷rzÅtÊR	óW5[Rkfòî´³!4þZþr>$^d8À>úñAHá£C ¦#!ä &£"Gç¢ä¥â¥­Çaß-+RëFooubg4lº*= ½oì§#£/3 ©71(1$)&#­R= |ßCnU&"KÐb­-~%;©?éJ°ÙÔ	f@ðt3o)g]¶AðùrÎJsGW¿4C'£&%!æFâ $§à¡f¢l3ËgÞ^qÎEÃÏâ-¦îÜP>E+nÝmúöÖ+&QK&½/kg=MT¡õÌhsí>cLÓ?¤Y	!"b"vè¿¹¿îçYè9ßF1bëFònKÅo §Ê«¹lY$|©0 f¿hkPÚzTrÄþhÇ7Y@ä¸B\Â%Nà-²ô>8rsßNö>9 ¤Ìtz`});

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
 "d": _emscripten_memcpy_big,
 "c": _emscripten_resize_heap
};

function initRuntime(asm) {
 asm["f"]();
}

var imports = {
 "a": asmLibraryArg
};

var _opus_frame_decoder_create, _malloc, _opus_frame_decode_float_deinterleaved, _opus_frame_decoder_destroy, _free;


this.setModule = (data) => {
  WASMAudioDecoderCommon.setModule(EmscriptenWASM, data);
};

this.getModule = () =>
  WASMAudioDecoderCommon.getModule(EmscriptenWASM);

this.instantiate = () => {
  this.getModule().then((wasm) => WebAssembly.instantiate(wasm, imports)).then((instance) => {
    var asm = instance.exports;
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
return this;
}}

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
/* harmony import */ var _wasm_audio_decoders_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wasm-audio-decoders/common */ "./node_modules/@wasm-audio-decoders/common/index.js");
/* harmony import */ var _EmscriptenWasm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmscriptenWasm.js */ "./node_modules/opus-decoder/src/EmscriptenWasm.js");




function OpusDecoder(options = {}) {
  // static properties
  if (!OpusDecoder.errors) {
    // prettier-ignore
    Object.defineProperties(OpusDecoder, {
      errors: {
        value: new Map([
          [-1, "OPUS_BAD_ARG: One or more invalid/out of range arguments"],
          [-2, "OPUS_BUFFER_TOO_SMALL: Not enough bytes allocated in the buffer"],
          [-3, "OPUS_INTERNAL_ERROR: An internal error was detected"],
          [-4, "OPUS_INVALID_PACKET: The compressed data passed is corrupted"],
          [-5, "OPUS_UNIMPLEMENTED: Invalid/unsupported request number"],
          [-6, "OPUS_INVALID_STATE: An encoder or decoder structure is invalid or already freed"],
          [-7, "OPUS_ALLOC_FAIL: Memory allocation has failed"],
        ]),
      },
    });
  }

  // injects dependencies when running as a web worker
  // async
  this._init = () => {
    return new this._WASMAudioDecoderCommon(this)
      .instantiate()
      .then((common) => {
        this._common = common;

        const mapping = this._common.allocateTypedArray(
          this._channels,
          Uint8Array
        );

        mapping.buf.set(this._channelMappingTable);

        this._decoder = this._common.wasm._opus_frame_decoder_create(
          this._channels,
          this._streamCount,
          this._coupledStreamCount,
          mapping.ptr,
          this._preSkip
        );
      });
  };

  Object.defineProperty(this, "ready", {
    enumerable: true,
    get: () => this._ready,
  });

  // async
  this.reset = () => {
    this.free();
    return this._init();
  };

  this.free = () => {
    this._common.wasm._opus_frame_decoder_destroy(this._decoder);

    this._common.free();
  };

  this._decode = (opusFrame) => {
    if (!(opusFrame instanceof Uint8Array))
      throw Error(
        "Data to decode must be Uint8Array. Instead got " + typeof opusFrame
      );

    this._input.buf.set(opusFrame);

    const samplesDecoded =
      this._common.wasm._opus_frame_decode_float_deinterleaved(
        this._decoder,
        this._input.ptr,
        opusFrame.length,
        this._output.ptr
      );

    if (samplesDecoded < 0) {
      console.error(
        "libopus " +
          samplesDecoded +
          " " +
          (OpusDecoder.errors.get(samplesDecoded) || "Unknown Error")
      );
      return 0;
    }
    return samplesDecoded;
  };

  this.decodeFrame = (opusFrame) => {
    const samplesDecoded = this._decode(opusFrame);

    return this._WASMAudioDecoderCommon.getDecodedAudioMultiChannel(
      this._output.buf,
      this._channels,
      samplesDecoded,
      48000
    );
  };

  this.decodeFrames = (opusFrames) => {
    let outputBuffers = [],
      outputSamples = 0,
      i = 0;

    while (i < opusFrames.length) {
      const samplesDecoded = this._decode(opusFrames[i++]);

      outputBuffers.push(
        this._common.getOutputChannels(
          this._output.buf,
          this._channels,
          samplesDecoded
        )
      );
      outputSamples += samplesDecoded;
    }

    const data = this._WASMAudioDecoderCommon.getDecodedAudioMultiChannel(
      outputBuffers,
      this._channels,
      outputSamples,
      48000
    );

    return data;
  };

  // injects dependencies when running as a web worker
  this._isWebWorker = OpusDecoder.isWebWorker;
  this._WASMAudioDecoderCommon =
    OpusDecoder.WASMAudioDecoderCommon || _wasm_audio_decoders_common__WEBPACK_IMPORTED_MODULE_0__.WASMAudioDecoderCommon;
  this._EmscriptenWASM = OpusDecoder.EmscriptenWASM || _EmscriptenWasm_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  this._module = OpusDecoder.module;

  const isNumber = (param) => typeof param === "number";

  const channels = options.channels;
  const streamCount = options.streamCount;
  const coupledStreamCount = options.coupledStreamCount;
  const channelMappingTable = options.channelMappingTable;
  const preSkip = options.preSkip;

  // channel mapping family >= 1
  if (
    channels > 2 &&
    (!isNumber(streamCount) ||
      !isNumber(coupledStreamCount) ||
      !Array.isArray(channelMappingTable))
  ) {
    throw new Error("Invalid Opus Decoder Options for multichannel decoding.");
  }

  // channel mapping family 0
  this._channels = isNumber(channels) ? channels : 2;
  this._streamCount = isNumber(streamCount) ? streamCount : 1;
  this._coupledStreamCount = isNumber(coupledStreamCount)
    ? coupledStreamCount
    : this._channels - 1;
  this._channelMappingTable =
    channelMappingTable || (this._channels === 2 ? [0, 1] : [0]);
  this._preSkip = preSkip || 0;

  this._inputSize = 32000 * 0.12 * this._channels; // 256kbs per channel
  this._outputChannelSize = 120 * 48;
  this._outputChannels = this._channels;

  this._ready = this._init();

  return this;
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
/* harmony import */ var _wasm_audio_decoders_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wasm-audio-decoders/common */ "./node_modules/@wasm-audio-decoders/common/index.js");
/* harmony import */ var _EmscriptenWasm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmscriptenWasm.js */ "./node_modules/opus-decoder/src/EmscriptenWasm.js");
/* harmony import */ var _OpusDecoder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OpusDecoder.js */ "./node_modules/opus-decoder/src/OpusDecoder.js");




class OpusDecoderWebWorker extends _wasm_audio_decoders_common__WEBPACK_IMPORTED_MODULE_0__.WASMAudioDecoderWorker {
  constructor(options) {
    super(options, "opus-decoder", _OpusDecoder_js__WEBPACK_IMPORTED_MODULE_2__["default"], _EmscriptenWasm_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
  }

  async decodeFrame(data) {
    return this._postToDecoder("decodeFrame", data);
  }

  async decodeFrames(data) {
    return this._postToDecoder("decodeFrames", data);
  }
}


/***/ }),

/***/ "./node_modules/synaudio/index.js":
/*!****************************************!*\
  !*** ./node_modules/synaudio/index.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_SynAudio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/SynAudio.js */ "./node_modules/synaudio/src/SynAudio.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_src_SynAudio_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/synaudio/src/SynAudio.js":
/*!***********************************************!*\
  !*** ./node_modules/synaudio/src/SynAudio.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SynAudio)
/* harmony export */ });
/* harmony import */ var simple_yenc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-yenc */ "./node_modules/simple-yenc/src/simple-yenc.js");
/* harmony import */ var web_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web-worker */ "./node_modules/web-worker/cjs/browser.js");
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")["Buffer"];
/* Copyright 2022 Ethan Halsall
    
    This file is part of synaudio.
    
    synaudio is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    synaudio is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
*/




// prettier-ignore
const simd=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]))

const wasmModule = new WeakMap();

/* WASM strings are embeded during the build */
const simdWasm = String.raw`dynEncode0015v,uu$zzV 0xzvz tt}zvtwvz	'ÿ"5V&]V5V%65(6(5(6'U5+5575'ú7&5575(ú7%ûù5%5'ú7$5%5(ú7#ûù555'ú7"555(ú7!ûù5E5'ú7 5E5(ú7ûù6+5*5%5%ûù5#5#ûù5!5!ûù55ûù6*5)5&5&ûù5$5$ûù5"5"ûù5 5 ûù6)5VU65V%75]" 5VV 65*45*45*45*4§§§6-5)45)45)45)4§§§6,U55a"5V6U5VZU56! 5V655V7?5¨7.5.©5-§6-55?5¨7.5.©5,§6, 5V5["55655V76556U5?5¨7.5.©5?5¨7.5.©5-§§6-5?5¨7.5.©5?5¨7.5.©5,§§6,5V65V65V7"  5+45+45+45+4§§§5ÇXÔ§7ªÐ5,5ªÐ´5-5ªÐ´·¸Ë #'Y68U5555]07$V6%U5Va"5V]"5V6)V56*5V6+5V6 55V7,6-5V7.VV7V6!5V6/5V^6'U55&6"V6UU5'"5555"V^55"V5-^"V65.VdU5!656U555#7(5ù 55(%5%ù %5V565V65V7"  5/U55V7555"V5ù  55 7[" 5V65+55V7555"V?5?§M5V5 655*["5565#5V7"6(56U55"755(70?5?§M550?5?§M5V65V7"  5#5,6#5&V7&5)\"  5$5%6 U5V]"55 55 ]07!Va"5V6)5!V6*5!V655!V7+6,5!V7-VV7V65V6.V6#5!V^6/V6&U5!5&6"V6UU5/"555!5"V^55"V5,^"V65-VdU5656U555#7'5ù 55'%5%ù %5V565V65V7"  5.U55V7555"V5ù  575![" 5V65*55V7555"V?5?§M55 655!["5!565#5V7"6'56U55"755'7(?5?§M55(?5?§M5V65V7"  5#5+6#5&V7&5)\"  V65VK5VK55 6U5 Va"5 V6U5$5%V7V^UV6#! 565 V7#6U545?Ðµ5?Ðµ5?Ðµ5?!Ðµ645V%65V7"  5U55#V656U545?Ðµ645V65V7"  U5V^UV6! 565 V76U555?Ðµ5?Ðµ5?Ðµ5?!Ðµ655V%65V7"  5Z"55V6U555?Ðµ655V65V7"  555 ÇÐ¸Ë635V_U5$V5%V65V65 Ì6556V6U545?Ð¶6655?Ð6752555455¸Ë535 %71r55K551M516255 65657µ645565575]"  U5Va"55577555_06557V5V_06U5 VaU5864! 5$5%V65 V7ZU58645! 55V6586456U545?Ðµ645V65V7" 55 65V^"55V655$55%6U545?Ðµ5?Ðµ5?Ðµ5?!Ðµ645V%65V7"  55a"55V6555$5%V65 Ì65U545?Ð¶665?Ð6752555455¸Ë535 %71r55K551M5152 625657µ645V65V65V75\"    /$v|zt{zvz@~yFGM`;
const scalarWasm = String.raw`dynEncode000eo{%nns|{s{}O)q}szosmmvso~mpos±ÛN.0OVO.Oy/N..x08.¡0..x08.¡0¢.8.¡0.8.¡0¢.8.¡0.8.¡0¢.8.¡0 .8.¡0!¢."    /"..¢..¢..¢.!.!¢.    /..¢..¢..¢. . ¢.    /.Ox/.Ox0.V.OyO0.\.O/N.OSN./.O/..O0x8.¡0.¢. /..x8.¡0.¢. /.O.yT..y/..O0x/..x/N.8.¡0.¢.8.¡0.¢.  /.8.¡0.¢.8.¡0.¢.  /.Ox/.Ox/.Oy0.".ÀQÍ 0£É..£É­..£É­°±ÄßR/(N..V/N.OZ.OV.Oy/.O/.O/.O/NO/.OUN./N...x0 8.8 F.. 8.8 F.Ox/.Ox0.U.N..Ox0....zxOx8.8 F..x/.Ox0.U...)/N.OV....V)0OZ.Oy/.O/.O/.O/O/O/NO/.OUN./N...x08.8 F..8.8 F.Ox/.Ox0.U.N..Ox0....zxOx8.8 F..x/.Ox0.UO/.OD.OD..y/N.OZ.O/N.Oy0OWNO/./.O0/N.$.8É®.8É®.8É®.8É®/$.Ox/.Oy0.N..Ox/./N.$.8É®/$.Ox/.Oy0N.OWNO/./.O0/N.%.8É®.8É®.8É®.8É®/%.Ox/.Oy0.S..Ox/N.%.8É®/%.Ox/.Oy0.%.ÀÉ±Ä/#.OXN.O/.O/.Å/%./O/N.$.8É¯/&..x8É/'."...$.%±Ä.#.0!k..D..!F.!/"../.&.'®/$..x/..x0.VN.OZ...z0x0...V)/..y0O.OX)/N.OZN.(/$.Oy/.O0SN.(/$...Ox/.(/$./N.$.8É®/$.Ox/.Oy0..x/.OW..Ox/..x.y/N.$.8É®.8É®.8É®.8É®/$.Ox/.Oy0..\..Ox/...xOx/.Å/%N.$.8É¯/&.8É/'."...$.%±Ä.#.0!k..D..!F.!."/".&.'®/$.Ox/.Ox/.Ox0.U`;

class SynAudio {
  constructor(options = {}) {
    this._correlationSampleSize = options.correlationSampleSize || 11025;
    this._initialGranularity = options.initialGranularity || 16;

    this._module = wasmModule.get(SynAudio);

    if (!this._module) {
      this._module = simd().then((simdSupported) =>
        simdSupported
          ? WebAssembly.compile((0,simple_yenc__WEBPACK_IMPORTED_MODULE_0__.decode)(simdWasm))
          : WebAssembly.compile((0,simple_yenc__WEBPACK_IMPORTED_MODULE_0__.decode)(scalarWasm))
      );
      wasmModule.set(this._module);
    }

    this.SynAudioWorker = function SynAudioWorker(
      module,
      correlationSampleSize,
      initialGranularity
    ) {
      this._sourceCache = new Map();

      this._setAudioDataOnHeap = (input, output, heapPos) => {
        const bytesPerElement = output.BYTES_PER_ELEMENT;

        let floatPos = heapPos / bytesPerElement;

        for (let i = 0; i < input.length; i++) {
          heapPos += input[i].length * bytesPerElement;
          output.set(input[i], floatPos);
          floatPos += input[i].length;
        }

        return heapPos;
      };

      this._executeAsWorker = (functionName, params) => {
        let source = this._sourceCache.get(functionName);

        if (!source) {
          const webworkerSourceCode =
            "'use strict';" +
            `(${((
              SynAudioWorker,
              functionName,
              correlationSampleSize,
              initialGranularity
            ) => {
              self.onmessage = (msg) => {
                const worker = new SynAudioWorker(
                  Promise.resolve(msg.data.module),
                  correlationSampleSize,
                  initialGranularity
                );

                worker._workerMethods
                  .get(functionName)
                  .apply(null, msg.data.params)
                  .then((results) => {
                    self.postMessage(results);
                  });
              };
            }).toString()})(${SynAudioWorker.toString()}, "${functionName}", ${
              this._correlationSampleSize
            }, ${this._initialGranularity})`;

          const type = "text/javascript";

          try {
            // browser
            source = URL.createObjectURL(
              new Blob([webworkerSourceCode], { type })
            );
          } catch {
            // nodejs
            source = `data:${type};base64,${Buffer.from(
              webworkerSourceCode
            ).toString("base64")}`;
          }

          this._sourceCache.set(functionName, source);
        }

        const worker = new (globalThis.Worker || web_worker__WEBPACK_IMPORTED_MODULE_1__)(source, {
          name: "SynAudio",
        });

        const result = new Promise((resolve) => {
          worker.onmessage = (message) => {
            worker.terminate();
            resolve(message.data);
          };
        });

        this._module.then((module) => {
          worker.postMessage({
            module,
            params,
          });
        });

        return result;
      };

      this._sync = (a, b) => {
        const pageSize = 64 * 1024;
        const floatByteLength = Float32Array.BYTES_PER_ELEMENT;

        const memory = new WebAssembly.Memory({
          initial:
            ((a.samplesDecoded * a.channelData.length +
              b.samplesDecoded * b.channelData.length) *
              floatByteLength) /
              pageSize +
            4,
        });

        return this._module
          .then((module) =>
            WebAssembly.instantiate(module, {
              env: { memory },
            })
          )
          .then(({ exports }) => {
            const instanceExports = new Map(Object.entries(exports));

            const correlate = instanceExports.get("correlate");
            const dataArray = new Float32Array(memory.buffer);
            const heapView = new DataView(memory.buffer);

            const aPtr = instanceExports.get("__heap_base").value;
            const bPtr = this._setAudioDataOnHeap(
              a.channelData,
              dataArray,
              aPtr
            );
            const bestCorrelationPtr = this._setAudioDataOnHeap(
              b.channelData,
              dataArray,
              bPtr
            );
            const bestSampleOffsetPtr = bestCorrelationPtr + floatByteLength;

            correlate(
              aPtr,
              a.samplesDecoded,
              a.channelData.length,
              bPtr,
              b.samplesDecoded,
              b.channelData.length,
              this._correlationSampleSize,
              this._initialGranularity,
              bestCorrelationPtr,
              bestSampleOffsetPtr
            );

            const bestCorrelation = heapView.getFloat32(
              bestCorrelationPtr,
              true
            );
            const bestSampleOffset = heapView.getInt32(
              bestSampleOffsetPtr,
              true
            );

            return {
              correlation: bestCorrelation,
              sampleOffset: bestSampleOffset,
            };
          });
      };

      this._syncWorkerConcurrent = (a, b, threads) => {
        const promises = [];
        const lengths = [0];

        // |-----------|       |-----------|     "end"
        // "start"   |-|---------|       |-----------|
        //           | |
        //           | |correlationSampleSize

        // split a buffer into equal chunks for threads
        // overlap at the start of the buffer by correlation sample size
        // overlap at the end of the buffer by correlation sample size

        // correlation sample size overlap imposes a maximum thread count for small datasets
        const minProcessingRatio = 4 / 2; // 4 processing / 2 overlap
        const maxThreads = Math.ceil(
          a.samplesDecoded / this._correlationSampleSize / minProcessingRatio
        );
        threads = Math.min(threads, maxThreads);

        const aLength = Math.ceil(a.samplesDecoded / threads);

        let offset = 0;
        for (let i = 1; i <= threads; i++) {
          const aSplit = {
            channelData: [],
          };

          for (let i = 0; i < a.channelData.length; i++) {
            const cutChannel = a.channelData[i].subarray(
              offset,
              offset + aLength + this._correlationSampleSize
            );
            aSplit.channelData.push(cutChannel);
            aSplit.samplesDecoded = cutChannel.length;
          }

          offset += aLength - this._correlationSampleSize;
          lengths.push(offset);

          promises.push(this._syncWorker(aSplit, b));
        }

        return Promise.all(promises).then((results) => {
          // find the result with the highest correlation and calculate the offset relative to the input data
          let bestResultIdx = 0;
          let bestCorrelation = -1;
          for (let i = 0; i < results.length; i++)
            if (results[i].correlation > bestCorrelation) {
              bestResultIdx = i;
              bestCorrelation = results[i].correlation;
            }

          return {
            correlation: results[bestResultIdx].correlation,
            sampleOffset:
              results[bestResultIdx].sampleOffset + lengths[bestResultIdx],
          };
        });
      };

      this._syncWorker = (a, b) => {
        return this._executeAsWorker("_sync", [a, b]);
      };

      this._syncWorkerConcurrentMain = (a, b, threads) => {
        // can't serialize the webworker polyfill in nodejs
        return globalThis.Worker
          ? this._executeAsWorker("_syncWorkerConcurrent", [a, b, threads])
          : this._syncWorkerConcurrent(a, b, threads);
      };

      // needed to serialize minified code when methods are refererenced as a string
      // prettier-ignore
      this._workerMethods = new Map([
        ["_sync", this._sync],
        ["_syncWorker", this._syncWorker],
        ["_syncWorkerConcurrent", this._syncWorkerConcurrent],
      ]);

      this._module = module;
      this._correlationSampleSize = correlationSampleSize;
      this._initialGranularity = initialGranularity;
    };

    this._instance = new this.SynAudioWorker(
      this._module,
      this._correlationSampleSize,
      this._initialGranularity
    );
  }

  async syncWorkerConcurrent(a, b, threads = 1) {
    return this._instance._syncWorkerConcurrentMain(a, b, threads);
  }

  async syncWorker(a, b) {
    return this._instance._syncWorker(a, b);
  }

  async sync(a, b) {
    return this._instance._sync(a, b);
  }
}


/***/ })

}]);