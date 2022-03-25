"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_player_chat_Chat_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/chat/Chat.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/chat/Chat.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["whoToOpen", "amIAlive"],
  components: {
    MessageComponent: function MessageComponent() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_player_chat_MessageComponent_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./MessageComponent */ "./resources/js/components/player/chat/MessageComponent.vue"));
    }
  },
  data: function data() {
    return {
      currentOpenChat: null,
      friends: this.$store.getters.getFriends,
      isLoading: false
    };
  },
  methods: {
    close: function close(currentOpenChat) {
      if (currentOpenChat) {
        var index = this.friends.findIndex(function (friend) {
          return friend.id == currentOpenChat.id;
        });
        this.friends[index].session.open = false;
      }

      this.currentOpenChat = null;
    },
    openChat: function openChat(friend) {
      this.isLoading = true;

      if (friend.session) {
        this.friends.forEach(function (friend) {
          return friend.session ? friend.session.open = false : "";
        });
        friend.session.open = true;
        this.currentOpenChat = friend;
        friend.session.unreadCount = 0;
        this.isLoading = false;
      } else {
        this.createSession(friend);
      }
    },
    createSession: function createSession(friend) {
      var _this = this;

      axios.post("/api/sessions/create", {
        friend_id: friend.id
      }).then(function (res) {
        friend.session = res.data, (friend.session.open = true, _this.currentOpenChat = friend, _this.isLoading = false);
      });
    },
    listenForEverySession: function listenForEverySession(friend) {
      var _this2 = this;

      window.Echo["private"]("Chat.".concat(friend.session.id)).listen("PrivateChatEvent", function (e) {
        if (!friend.session.open) {
          if (!_this2.amIAlive) {
            _this2.$emit("unread", 1);
          }

          friend.session.unreadCount++;
          friend.session.last_message[0].content = e.content;
        }
      });
    }
  },
  computed: {
    isThereASession: function isThereASession() {
      return this.friends && this.friends.length && this.friends.some(function (friend) {
        return friend.session;
      });
    }
  },
  created: function created() {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var unread;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (_this3.whoToOpen) {
                _this3.openChat(_this3.friends.find(function (friend) {
                  return friend.id == _this3.whoToOpen;
                }));

                _this3.$emit("chatOpened");
              }

              _this3.friends.forEach(function (friend) {
                _this3.listenForEverySession(friend);
              });

              unread = _this3.friends.reduce(function (a, b) {
                return a + b.session.unreadCount;
              }, 0);

              if (!_this3.amIAlive) {
                _this3.$emit("unread", unread);
              }

              window.Echo.channel("Chat").listen("HearingEvent", function (e) {
                var friend = _this3.friends.find(function (friend) {
                  return friend.id == e.user_id;
                });

                if (friend) {
                  friend.isPlaying = e.is_playing;
                }
              });
              window.Echo.channel("Chat").listen("SessionEvent", function (e) {
                var friend = _this3.friends.find(function (friend) {
                  return friend.id == e.session_by;
                });

                friend.session = e.session;
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  watch: {
    whoToOpen: function whoToOpen(val) {
      if (val) {
        this.openChat(this.friends.find(function (friend) {
          return friend.id == val;
        }));
        this.$emit("chatOpened");
      }
    },
    amIAlive: function amIAlive(val) {
      if (!val) {
        this.close(this.currentOpenChat);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/chat/Chat.vue?vue&type=style&index=0&id=70667bec&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/chat/Chat.vue?vue&type=style&index=0&id=70667bec&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".chats-wrapper[data-v-70667bec] {\n  min-width: 350px;\n  max-width: 500px;\n  position: relative;\n  min-height: 40vh;\n  border-radius: 10px;\n  padding: 0.5rem;\n}\n@media screen and (max-width: 500px) {\n.chats-wrapper[data-v-70667bec] {\n    min-width: auto;\n}\n}\n.chats-wrapper .title-wrapper[data-v-70667bec] {\n  padding-left: 0.5em;\n}\n.chats-wrapper ul[data-v-70667bec] {\n  list-style: none;\n}\n.chats-wrapper ul li[data-v-70667bec] {\n  padding: 0.5rem 0.3rem;\n  border-radius: 5px;\n  border-radius: 15px;\n  word-break: break-all;\n  display: flex;\n  cursor: pointer;\n}\n.chats-wrapper ul li .avatar[data-v-70667bec] {\n  margin-right: 1rem;\n}\n.chats-wrapper ul li .avatar img[data-v-70667bec] {\n  border-radius: 50%;\n  width: 3em;\n}\n.chats-wrapper ul li .infos[data-v-70667bec] {\n  flex-grow: 2;\n}\n.chats-wrapper ul li .infos .name-unread[data-v-70667bec] {\n  display: flex;\n  align-items: center;\n}\n.chats-wrapper ul li .infos .name-unread .name[data-v-70667bec] {\n  font-weight: 600;\n  margin-right: 1em;\n  max-width: 100%;\n}\n.chats-wrapper ul li .infos .name-unread .unread-messages-count[data-v-70667bec] {\n  height: 1.6em;\n  width: 1.6em;\n  font-weight: 600;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background-color: purple;\n  font-size: 0.55em;\n}\n.chats-wrapper ul li .infos .last_message[data-v-70667bec] {\n  opacity: 0.8;\n}\n.chats-wrapper ul li .infos .unread[data-v-70667bec] {\n  color: purple;\n  font-weight: 600;\n}\n.chats-wrapper ul li[data-v-70667bec]:hover {\n  background-color: rgba(107, 107, 107, 0.26);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/chat/Chat.vue?vue&type=style&index=0&id=70667bec&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/chat/Chat.vue?vue&type=style&index=0&id=70667bec&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_70667bec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chat.vue?vue&type=style&index=0&id=70667bec&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/chat/Chat.vue?vue&type=style&index=0&id=70667bec&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_70667bec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_70667bec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/player/chat/Chat.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/player/chat/Chat.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/chat/Chat.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/player/chat/Chat.vue?vue&type=style&index=0&id=70667bec&lang=scss&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/player/chat/Chat.vue?vue&type=style&index=0&id=70667bec&lang=scss&scoped=true& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_70667bec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chat.vue?vue&type=style&index=0&id=70667bec&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/chat/Chat.vue?vue&type=style&index=0&id=70667bec&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/player/chat/Chat.vue?vue&type=template&id=70667bec&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/player/chat/Chat.vue?vue&type=template&id=70667bec&scoped=true& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_70667bec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_70667bec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_70667bec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chat.vue?vue&type=template&id=70667bec&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/chat/Chat.vue?vue&type=template&id=70667bec&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/chat/Chat.vue?vue&type=template&id=70667bec&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/player/chat/Chat.vue?vue&type=template&id=70667bec&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    { staticClass: "chats-wrapper absolute-panel", attrs: { rounded: "lg" } },
    [
      _c("div", { staticClass: "card-title-medium" }, [
        _vm._v(_vm._s(_vm.$t("Chats"))),
      ]),
      _vm._v(" "),
      !_vm.isLoading
        ? _c(
            "div",
            { staticClass: "chats" },
            [
              _vm.isThereASession
                ? _c(
                    "ul",
                    [
                      _vm._l(_vm.friends, function (friend) {
                        return [
                          friend.session
                            ? _c(
                                "li",
                                {
                                  key: friend.id,
                                  on: {
                                    click: function ($event) {
                                      return _vm.openChat(friend)
                                    },
                                  },
                                },
                                [
                                  _c("div", { staticClass: "avatar" }, [
                                    _c("img", {
                                      attrs: { src: friend.avatar, alt: "" },
                                    }),
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "infos" }, [
                                    _c("div", { staticClass: "name-unread" }, [
                                      _c(
                                        "div",
                                        { staticClass: "name max-1-lines" },
                                        [_vm._v(_vm._s(friend.name))]
                                      ),
                                      _vm._v(" "),
                                      friend.session.unreadCount > 0
                                        ? _c(
                                            "div",
                                            {
                                              staticClass:
                                                "unread-messages-count",
                                            },
                                            [
                                              _vm._v(
                                                "\n                                " +
                                                  _vm._s(
                                                    friend.session.unreadCount
                                                  ) +
                                                  "\n                            "
                                              ),
                                            ]
                                          )
                                        : _vm._e(),
                                    ]),
                                    _vm._v(" "),
                                    friend.session.last_message.length
                                      ? _c(
                                          "div",
                                          {
                                            staticClass: "last_message",
                                            class: {
                                              unread:
                                                friend.session.unreadCount > 0,
                                            },
                                          },
                                          [
                                            _vm._v(
                                              "\n                            " +
                                                _vm._s(
                                                  friend.session.last_message[0]
                                                    .content
                                                ) +
                                                "\n                        "
                                            ),
                                          ]
                                        )
                                      : _vm._e(),
                                  ]),
                                ]
                              )
                            : _vm._e(),
                        ]
                      }),
                    ],
                    2
                  )
                : _c("empty-page", {
                    attrs: {
                      headline: _vm.$t("No chats to show!"),
                      sub: _vm.$t("Add some friends and start chatting!"),
                    },
                  }),
            ],
            1
          )
        : _c("div", { staticClass: "loading" }, [
            _vm._v(_vm._s(_vm.$t("Opening chat...Please wait!"))),
          ]),
      _vm._v(" "),
      _vm.currentOpenChat
        ? [
            _c("message-component", {
              attrs: { friend: _vm.currentOpenChat },
              on: {
                close: function ($event) {
                  return _vm.close(_vm.currentOpenChat)
                },
              },
            }),
          ]
        : _vm._e(),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/player/chat/Chat.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/player/chat/Chat.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Chat_vue_vue_type_template_id_70667bec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chat.vue?vue&type=template&id=70667bec&scoped=true& */ "./resources/js/components/player/chat/Chat.vue?vue&type=template&id=70667bec&scoped=true&");
/* harmony import */ var _Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chat.vue?vue&type=script&lang=js& */ "./resources/js/components/player/chat/Chat.vue?vue&type=script&lang=js&");
/* harmony import */ var _Chat_vue_vue_type_style_index_0_id_70667bec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chat.vue?vue&type=style&index=0&id=70667bec&lang=scss&scoped=true& */ "./resources/js/components/player/chat/Chat.vue?vue&type=style&index=0&id=70667bec&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chat_vue_vue_type_template_id_70667bec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Chat_vue_vue_type_template_id_70667bec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "70667bec",
  null
  
)

/* vuetify-loader */
;

_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/player/chat/Chat.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ })

}]);