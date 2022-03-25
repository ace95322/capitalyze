"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["landing"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Landing.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Landing.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dialogs_ContactUs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialogs/ContactUs */ "./resources/js/components/dialogs/ContactUs.vue");
/* harmony import */ var _elements_User_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/User.vue */ "./resources/js/components/elements/User.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  metaInfo: function metaInfo() {
    return {
      meta: [{
        name: "description",
        content: this.$store.getters.getSettings.siteDescription.replace("%site_name", this.$store.getters.getSettings.appName)
      }]
    };
  },
  components: {
    ContactUs: _dialogs_ContactUs__WEBPACK_IMPORTED_MODULE_0__["default"],
    User: _elements_User_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  created: function created() {
    this.landingPage.sections = JSON.parse(this.landingPage.sections);
    this.landingPage.showContactUs = Boolean(parseInt(this.landingPage.showContactUs));
  },
  data: function data() {
    return {
      landingPage: JSON.parse(JSON.stringify(this.$store.getters.getSettings.landingPage)),
      userMenu: false
    };
  },
  computed: {
    user: function user() {
      return this.$store.getters.getUser;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialogs/ContactUs.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialogs/ContactUs.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _this = this,
        _ref;

    return _ref = {
      isLoading: false,
      valid: true,
      userMenu: false,
      fullname: "",
      message: "",
      email: "",
      subject: "",
      subjectRules: [function (v) {
        return !!v || _this.$t("Subject is required");
      }, function (v) {
        return v && v.length > 3 || _this.$t("Subject must contain be at least 4 characters");
      }]
    }, _defineProperty(_ref, "email", ""), _defineProperty(_ref, "emailRules", [function (v) {
      return !!v || _this.$t("E-mail is required");
    }, function (v) {
      return /.+@.+\..+/.test(v) || _this.$t("E-mail must be valid");
    }]), _ref;
  },
  methods: {
    validateAndSend: function validateAndSend() {
      var _this2 = this;

      this.isLoading = true;
      var formData = new FormData();
      formData.append("email", this.email);
      formData.append("subject", this.subject);
      formData.append("message", this.message);
      formData.append("fullname", this.fullname);
      axios.post("/api/contact-email", formData).then(function () {
        _this2.$notify({
          group: "foo",
          type: "success",
          title: _this2.$t("Sent"),
          text: _this2.$t("Email sent successfully.")
        });

        _this2.$emit('emailSent');
      })["catch"](function () {
        _this2.$notify({
          group: "foo",
          type: "error",
          title: _this2.$t("Error"),
          text: Object.values(e.response.data.errors).join("<br />")
        });
      })["finally"](function () {
        _this2.isLoading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/User.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/User.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: {
    user: function user() {
      return this.$store.getters.getUser;
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Landing.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Landing.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".landing-container {\n  background-color: #fdfdfd;\n  min-width: 350px;\n  color: #0f0f0f;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.landing-container main {\n  flex-grow: 1;\n}\n.landing-header.custom {\n  height: 90vh;\n}\n@media (max-width: 900px) {\n.landing-header.custom {\n    height: 50vh;\n}\n}\n.landing-header.default {\n  background-image: url(\"/images/background.png\");\n}\n.landing-header {\n  background-size: cover;\n  background-position: center center;\n  border-bottom-right-radius: 160% 40%;\n  border-bottom-left-radius: 160% 40%;\n  color: white;\n  margin-bottom: 3em;\n}\n.landing-header__nav {\n  padding: 1em 1.5em;\n  display: flex;\n  z-index: 2;\n  justify-content: space-between;\n  align-items: center;\n}\n.landing-header__nav .logo {\n  padding-left: 1em;\n  z-index: 2;\n}\n.landing-header__nav .logo img {\n  max-height: 3em;\n}\n.landing-header__nav .options {\n  display: flex;\n  z-index: 2;\n}\n.landing-header__cover-layer {\n  z-index: 0;\n  border-bottom-right-radius: 160% 40%;\n  border-bottom-left-radius: 160% 40%;\n}\n.landing-header__hero {\n  text-align: center;\n  padding-top: 5rem;\n  display: flex;\n  justify-content: center;\n}\n.landing-header__hero img {\n  width: 27%;\n  min-width: 180px;\n}\n.landing-header__main {\n  overflow: hidden;\n  border-bottom-right-radius: 150% 40%;\n  border-bottom-left-radius: 150% 40%;\n}\n.landing-header__text {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  text-align: center;\n  position: absolute;\n  color: #fff;\n}\n.landing-header__text h1 {\n  font-size: 4em;\n}\n.landing-header__text h2 {\n  font-size: 1.25em;\n  font-weight: 400;\n}\n.landing-header__default-text {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  text-align: center;\n  position: absolute;\n  color: #fff;\n}\n.landing-header__default-text h1 {\n  font-weight: 800;\n  word-spacing: 4em;\n  white-space: nowrap;\n  font-size: 6em;\n  padding-left: 1em;\n  text-transform: uppercase;\n  margin-bottom: 2em;\n}\n.landing-header__default-text h2 {\n  text-align: center;\n  font-size: 2.5em;\n  font-weight: 500;\n  z-index: 2;\n  position: relative;\n}\n@media (max-width: 1920px) {\n.landing-header__default-text {\n    top: 60%;\n}\n}\n@media (max-width: 1500px) {\n.landing-header__default-text {\n    top: 60%;\n}\n.landing-header__default-text h1 {\n    word-spacing: 3em;\n    padding-left: 0.55em;\n}\n}\n@media (max-width: 1300px) {\n.landing-header__default-text {\n    top: 65%;\n}\n.landing-header__default-text h1 {\n    word-spacing: 2em;\n    margin-bottom: 1em;\n    padding-left: 0.95em;\n}\n}\n@media (max-width: 950px) {\n.landing-header__default-text {\n    top: 65%;\n}\n.landing-header__default-text h1 {\n    margin-bottom: 0.75em;\n    font-size: 5em;\n}\n.landing-header__default-text h2 {\n    font-size: 1.75em;\n}\n}\n@media (max-width: 750px) {\n.landing-header__default-text {\n    top: 55%;\n}\n.landing-header__default-text h1 {\n    font-size: 4em;\n    padding-left: 0.45em;\n}\n}\n@media (max-width: 600px) {\n.landing-header__default-text {\n    top: 60%;\n}\n.landing-header__default-text h1 {\n    font-size: 3em;\n}\n}\n@media (max-width: 500px) {\n.landing-header__default-text h1 {\n    word-spacing: 2.5em;\n    padding-left: 0.65em;\n}\n}\n@media (max-width: 400px) {\n.landing-header__default-text {\n    top: 50%;\n}\n.landing-header__default-text h1 {\n    word-spacing: 1.25em;\n}\n}\n.landing-header__button {\n  position: absolute;\n  left: 0;\n  right: 0;\n  z-index: 2;\n  bottom: 0;\n  text-align: center;\n  transform: translateY(50%);\n}\n.landing-header__button .v-btn {\n  max-width: 14em;\n  width: 30%;\n}\n.landing-section {\n  padding: 1em 4em;\n}\n.landing-section .container {\n  max-width: 1200px !important;\n}\n.landing-section__title {\n  font-size: 2em;\n  font-weight: 700;\n  line-height: 1.15;\n  margin-bottom: 0.75em;\n}\n.landing-section__sub-title {\n  opacity: 0.75;\n}\n@media (max-width: 960px) {\n.landing-section .text-side-container {\n    text-align: center;\n    order: -1;\n}\n}\n.landing-section .text-side-container .text-side {\n  max-width: 500px;\n}\n.landing-section .image-side {\n  padding: 1.5em;\n  display: flex;\n  justify-content: center;\n}\n.landing-section .image-side img {\n  max-width: 650px;\n  min-width: 350px;\n}\n@media (max-width: 1300px) {\n.landing-section .image-side img {\n    max-width: 550px;\n}\n}\n@media (max-width: 960px) {\n.landing-section .image-side img {\n    width: 110%;\n}\n}\n.footer-container {\n  padding: 3em;\n  background-size: cover;\n  color: white;\n}\n.footer-container .footer__title {\n  font-size: 1.2em;\n}\n.footer-container .footer__sub-title {\n  font-weight: 400;\n  opacity: 0.75;\n  line-height: 2;\n}\n.z-index-0 {\n  z-index: 0;\n}\n@media (min-width: 960px) {\n.sections-divider {\n    display: none !important;\n}\n}\n.account {\n  display: flex;\n  align-items: center;\n  border-radius: 25px;\n  padding: 0.3rem;\n  transition: all 0.4s;\n  position: relative;\n  cursor: pointer;\n}\n.account:hover {\n  background-color: rgba(110, 110, 110, 0.226);\n}\n.account .avatar {\n  width: 35px;\n  margin-right: 0.3rem;\n}\n.account .avatar-image {\n  height: 100%;\n  border-radius: 50%;\n  width: 100%;\n}\n@media screen and (min-width: 900px) {\n.account .short-name {\n    display: none;\n}\n}\n@media screen and (max-width: 700px) {\n.account .short-name {\n    display: none;\n}\n}\n.account .name {\n  max-width: 6em;\n}\n@media screen and (max-width: 900px) {\n.account .name {\n    display: none;\n}\n}\n.account .chevron {\n  margin-left: 0.5rem;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/User.vue?vue&type=style&index=0&id=6aa21448&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/User.vue?vue&type=style&index=0&id=6aa21448&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vuetify/src/components/VTextarea/VTextarea.sass":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vuetify/src/components/VTextarea/VTextarea.sass ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea {\n  color: #FFFFFF;\n}\n.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea {\n  color: rgba(0, 0, 0, 0.87);\n}\n.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.v-textarea textarea {\n  align-self: stretch;\n  flex: 1 1 auto;\n  line-height: 1.75rem;\n  max-width: 100%;\n  min-height: 32px;\n  outline: none;\n  padding: 0;\n  width: 100%;\n}\n.v-textarea .v-text-field__prefix,\n.v-textarea .v-text-field__suffix {\n  padding-top: 2px;\n  align-self: start;\n}\n.v-textarea.v-text-field--box .v-text-field__prefix,\n.v-textarea.v-text-field--box textarea, .v-textarea.v-text-field--enclosed .v-text-field__prefix,\n.v-textarea.v-text-field--enclosed textarea {\n  margin-top: 24px;\n}\n.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,\n.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,\n.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea, .v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,\n.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,\n.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea, .v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,\n.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,\n.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea, .v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,\n.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,\n.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea {\n  margin-top: 10px;\n}\n.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label, .v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label, .v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label, .v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label {\n  top: 18px;\n}\n.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,\n.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,\n.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea, .v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,\n.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,\n.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea, .v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,\n.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,\n.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea, .v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,\n.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,\n.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea {\n  margin-top: 6px;\n}\n.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,\n.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,\n.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,\n.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer, .v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,\n.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,\n.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,\n.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer, .v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,\n.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer,\n.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,\n.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer, .v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,\n.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,\n.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,\n.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer {\n  align-self: flex-start;\n  margin-top: 8px;\n}\n.v-textarea.v-text-field--solo {\n  align-items: flex-start;\n}\n.v-textarea.v-text-field--solo .v-input__control textarea {\n  caret-color: auto;\n}\n.v-textarea.v-text-field--solo .v-input__prepend-inner,\n.v-textarea.v-text-field--solo .v-input__prepend-outer,\n.v-textarea.v-text-field--solo .v-input__append-inner,\n.v-textarea.v-text-field--solo .v-input__append-outer {\n  align-self: flex-start;\n  margin-top: 12px;\n}\n.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner {\n  padding-left: 12px;\n}\n.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner {\n  padding-right: 12px;\n}\n.v-textarea--auto-grow textarea {\n  overflow: hidden;\n}\n.v-textarea--no-resize textarea {\n  resize: none;\n}\n.v-textarea.v-text-field--enclosed .v-text-field__slot {\n  align-self: stretch;\n}\n.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot {\n  margin-right: -12px;\n}\n.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot {\n  margin-left: -12px;\n}\n.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea {\n  padding-right: 12px;\n}\n.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea {\n  padding-left: 12px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Landing.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Landing.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Landing.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Landing.vue?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/User.vue?vue&type=style&index=0&id=6aa21448&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/User.vue?vue&type=style&index=0&id=6aa21448&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_style_index_0_id_6aa21448_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./User.vue?vue&type=style&index=0&id=6aa21448&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/User.vue?vue&type=style&index=0&id=6aa21448&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_style_index_0_id_6aa21448_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_style_index_0_id_6aa21448_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vuetify/src/components/VTextarea/VTextarea.sass":
/*!**********************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VTextarea/VTextarea.sass ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_2_sass_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_3_VTextarea_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!../../../../postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!../../../../sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./VTextarea.sass */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vuetify/src/components/VTextarea/VTextarea.sass");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_2_sass_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_3_VTextarea_sass__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_2_sass_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_3_VTextarea_sass__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Landing.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Landing.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Landing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Landing.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dialogs/ContactUs.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/dialogs/ContactUs.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContactUs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialogs/ContactUs.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/elements/User.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/elements/User.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./User.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/User.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Landing.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Landing.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Landing.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Landing.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./resources/js/components/elements/User.vue?vue&type=style&index=0&id=6aa21448&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/elements/User.vue?vue&type=style&index=0&id=6aa21448&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_style_index_0_id_6aa21448_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./User.vue?vue&type=style&index=0&id=6aa21448&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/User.vue?vue&type=style&index=0&id=6aa21448&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Landing.vue?vue&type=template&id=15bf0008&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Landing.vue?vue&type=template&id=15bf0008& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_template_id_15bf0008___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_template_id_15bf0008___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_template_id_15bf0008___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Landing.vue?vue&type=template&id=15bf0008& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Landing.vue?vue&type=template&id=15bf0008&");


/***/ }),

/***/ "./resources/js/components/dialogs/ContactUs.vue?vue&type=template&id=273a3e1f&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/dialogs/ContactUs.vue?vue&type=template&id=273a3e1f& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_template_id_273a3e1f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_template_id_273a3e1f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_template_id_273a3e1f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContactUs.vue?vue&type=template&id=273a3e1f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialogs/ContactUs.vue?vue&type=template&id=273a3e1f&");


/***/ }),

/***/ "./resources/js/components/elements/User.vue?vue&type=template&id=6aa21448&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/elements/User.vue?vue&type=template&id=6aa21448&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_6aa21448_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_6aa21448_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_6aa21448_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./User.vue?vue&type=template&id=6aa21448&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/User.vue?vue&type=template&id=6aa21448&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Landing.vue?vue&type=template&id=15bf0008&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Landing.vue?vue&type=template&id=15bf0008& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "landing-container" }, [
    _c(
      "header",
      {
        staticClass: "landing-header relative custom",
        style: {
          backgroundImage:
            "url(" +
            (_vm.landingPage.headerBackground ||
              "/images/landing-background.jpg") +
            ")",
        },
      },
      [
        _c("div", {
          staticClass: "landing-header__cover-layer absolute fill",
          style: {
            backgroundColor: _vm.landingPage.headerBackgroundLayerColor,
          },
        }),
        _vm._v(" "),
        _c("nav", { staticClass: "landing-header__nav" }, [
          _c("div", { staticClass: "logo" }, [
            _c("img", {
              attrs: {
                src: _vm.$store.getters.getSettings.appLogo,
                alt: _vm.$t("Logo Image"),
              },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "options" }, [
            _vm.user
              ? _c("div", { staticClass: "user white--text" }, [_c("User")], 1)
              : _c("div", { staticClass: "auth-buttons" }, [
                  _c(
                    "div",
                    { staticClass: "buttons" },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "primary white--text",
                          attrs: { small: "" },
                          on: {
                            click: function ($event) {
                              return _vm.$router.push({ name: "login" })
                            },
                          },
                        },
                        [_vm._v(_vm._s(_vm.$t("Login")))]
                      ),
                      _vm._v(" "),
                      !_vm.$store.getters.getSettings.disableRegistration
                        ? _c(
                            "v-btn",
                            {
                              staticClass: "register__btn ml-2 white--text",
                              attrs: {
                                small: "",
                                outlined: "",
                                color: "white",
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.$router.push({ name: "register" })
                                },
                              },
                            },
                            [_vm._v(_vm._s(_vm.$t("Register")))]
                          )
                        : _vm._e(),
                    ],
                    1
                  ),
                ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "absolute fill text-center z-index-0" }, [
          _c("div", { staticClass: "landing-header__main" }, [
            _c("div", { staticClass: "landing-header__text" }, [
              _c("h1", [_vm._v(_vm._s(_vm.landingPage.headerTitle))]),
              _vm._v(" "),
              _c("h2", [_vm._v(_vm._s(_vm.landingPage.headerDescription))]),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "landing-header__button" },
            [
              _c(
                "v-btn",
                {
                  staticClass: "primary",
                  attrs: {
                    rounded: "",
                    large: "",
                    to: _vm.$store.getters.getSettings.playerLanding,
                  },
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.landingPage.callToAction) +
                      "\n                "
                  ),
                ]
              ),
            ],
            1
          ),
        ]),
      ]
    ),
    _vm._v(" "),
    _c(
      "main",
      [
        _vm._l(_vm.landingPage.sections, function (section, i) {
          return _c(
            "section",
            { key: i, staticClass: "landing-section" },
            [
              _c(
                "v-container",
                { staticClass: "container" },
                [
                  _c(
                    "v-row",
                    { attrs: { align: "center" } },
                    [
                      section.background
                        ? _c(
                            "v-col",
                            {
                              staticClass: "justify-center",
                              style: { order: i % 2 == 0 ? 1 : 0 },
                              attrs: { lg: "6", md: "6", sm: "12" },
                            },
                            [
                              _c("div", { staticClass: "image-side" }, [
                                _c("img", {
                                  attrs: { src: section.background },
                                }),
                              ]),
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "text-side-container justify-center",
                          attrs: {
                            lg: section.background ? 6 : 12,
                            md: section.background ? 6 : 12,
                            sm: "12",
                          },
                        },
                        [
                          _c("div", { staticClass: "text-side" }, [
                            _c(
                              "div",
                              { staticClass: "landing-section__title" },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(section.title) +
                                    "\n                            "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "landing-section__sub-title" },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(section.description) +
                                    "\n                            "
                                ),
                              ]
                            ),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider", { staticClass: "sections-divider" }),
            ],
            1
          )
        }),
        _vm._v(" "),
        _vm.landingPage.showContactUs &&
        _vm.$store.getters.getSettings.enableMail
          ? _c(
              "section",
              { staticClass: "landing-section" },
              [
                _c(
                  "v-container",
                  { staticClass: "container" },
                  [
                    _c("h2", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(_vm.$t("Contact Us"))),
                    ]),
                    _vm._v(" "),
                    _c(
                      "v-row",
                      [
                        _c(
                          "v-col",
                          { staticClass: "justify-center" },
                          [_c("contact-us")],
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
      2
    ),
    _vm._v(" "),
    _c("footer", [
      _c(
        "div",
        {
          staticClass: "footer-container",
          style: {
            backgroundImage: "url(" + _vm.landingPage.footerBackground + ")",
          },
        },
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { staticClass: "text-center" },
                [
                  _c("div", { staticClass: "footer__title" }, [
                    _c("h2", [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.landingPage.footerTitle) +
                          "\n                        "
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "footer__sub-title" }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.landingPage.footerDescription) +
                        "\n                    "
                    ),
                  ]),
                  _vm._v(" "),
                  !_vm.$store.getters.getSettings.disableRegistration
                    ? _c(
                        "v-btn",
                        {
                          staticClass: "mt-2",
                          attrs: {
                            color: "white",
                            outlined: "",
                            "min-width": "120",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.$router.push({ name: "register" })
                            },
                          },
                        },
                        [_vm._v(_vm._s(_vm.$t("Register")))]
                      )
                    : _vm._e(),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "text-center py-4" }, [
      _vm._v(
        "\n        © " +
          _vm._s(_vm.moment().year()) +
          " " +
          _vm._s(_vm.$store.getters.getSettings.appName) +
          ". " +
          _vm._s(_vm.$t("All rights reserved.")) +
          "\n    "
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialogs/ContactUs.vue?vue&type=template&id=273a3e1f&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialogs/ContactUs.vue?vue&type=template&id=273a3e1f& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    { attrs: { "max-width": "600", width: "100%" } },
    [
      _c(
        "v-form",
        {
          ref: "form",
          staticClass: "p-3",
          attrs: { "lazy-validation": "" },
          model: {
            value: _vm.valid,
            callback: function ($$v) {
              _vm.valid = $$v
            },
            expression: "valid",
          },
        },
        [
          _c("v-text-field", {
            attrs: { label: _vm.$t("Full Name"), required: "", outlined: "" },
            model: {
              value: _vm.fullname,
              callback: function ($$v) {
                _vm.fullname = $$v
              },
              expression: "fullname",
            },
          }),
          _vm._v(" "),
          _c("v-text-field", {
            attrs: {
              rules: _vm.emailRules,
              label: _vm.$t("E-mail"),
              required: "",
              outlined: "",
            },
            model: {
              value: _vm.email,
              callback: function ($$v) {
                _vm.email = $$v
              },
              expression: "email",
            },
          }),
          _vm._v(" "),
          _c("v-text-field", {
            attrs: {
              rules: _vm.subjectRules,
              label: _vm.$t("Subject"),
              required: "",
              outlined: "",
            },
            model: {
              value: _vm.subject,
              callback: function ($$v) {
                _vm.subject = $$v
              },
              expression: "subject",
            },
          }),
          _vm._v(" "),
          _c("v-textarea", {
            attrs: {
              label: _vm.$t("Message"),
              rows: "6",
              outlined: "",
              required: "",
            },
            model: {
              value: _vm.message,
              callback: function ($$v) {
                _vm.message = $$v
              },
              expression: "message",
            },
          }),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "mr-4",
              attrs: {
                disabled: !_vm.valid || _vm.isLoading,
                loading: _vm.isLoading,
                color: "success",
              },
              on: { click: _vm.validateAndSend },
              scopedSlots: _vm._u([
                {
                  key: "loader",
                  fn: function () {
                    return [
                      _c(
                        "span",
                        { staticClass: "custom-loader" },
                        [
                          _c("v-icon", { attrs: { light: "" } }, [
                            _vm._v("$vuetify.icons.cached"),
                          ]),
                        ],
                        1
                      ),
                    ]
                  },
                  proxy: true,
                },
              ]),
            },
            [_vm._v("\n            " + _vm._s(_vm.$t("Send")) + "\n        ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/User.vue?vue&type=template&id=6aa21448&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/User.vue?vue&type=template&id=6aa21448&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    "v-menu",
    {
      attrs: { left: "", bottom: "", "position-y": 125, "offset-y": "" },
      scopedSlots: _vm._u([
        {
          key: "activator",
          fn: function (ref) {
            var on = ref.on
            var attrs = ref.attrs
            return [
              _c(
                "div",
                _vm._g(
                  _vm._b({ staticClass: "account" }, "div", attrs, false),
                  on
                ),
                [
                  _c("div", { staticClass: "avatar user-avatar" }, [
                    _vm.userPlan && _vm.userPlan.badge
                      ? _c(
                          "div",
                          { staticClass: "badge" },
                          [
                            _c("v-icon", { attrs: { color: "primary" } }, [
                              _vm._v(
                                "$vuetify.icons." + _vm._s(_vm.user.plan.badge)
                              ),
                            ]),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "avatar-image",
                      attrs: { src: _vm.user.avatar, alt: "" },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "name max-1-lines" }, [
                    _vm._v("\n        " + _vm._s(_vm.user.name) + "\n      "),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "chevron" },
                    [
                      _c("v-icon", { attrs: { small: "" } }, [
                        _vm._v("$vuetify.icons.chevron-down"),
                      ]),
                    ],
                    1
                  ),
                ]
              ),
            ]
          },
        },
      ]),
    },
    [
      _vm._v(" "),
      _c(
        "v-list",
        {
          class: { "dark-backround": _vm.$vuetify.theme.dark },
          attrs: { dense: "" },
        },
        [
          _vm.isAdmin()
            ? _c(
                "v-list-item",
                { attrs: { to: { path: "/admin/analytics" } } },
                [
                  _c(
                    "v-list-item-title",
                    [
                      _c("v-icon", { attrs: { size: "20" } }, [
                        _vm._v("$vuetify.icons.account-tie"),
                      ]),
                      _vm._v(
                        "\n        " + _vm._s(_vm.$t("Admin Area")) + "\n      "
                      ),
                    ],
                    1
                  ),
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.isArtist()
            ? _c(
                "v-list-item",
                { attrs: { to: { path: "/artist/analytics" } } },
                [
                  _c(
                    "v-list-item-title",
                    [
                      _c("v-icon", { attrs: { size: "20" } }, [
                        _vm._v("$vuetify.icons.account-music"),
                      ]),
                      _vm._v(
                        "\n        " +
                          _vm._s(_vm.$t("Artist Area")) +
                          "\n      "
                      ),
                    ],
                    1
                  ),
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.$route.matched.some(function (record) {
            return record.meta.player
          })
            ? _c(
                "v-list-item",
                {
                  attrs: {
                    to: { path: _vm.$store.getters.getSettings.playerLanding },
                  },
                  on: {
                    click: function ($event) {
                      return _vm.$router.push({
                        path: _vm.$store.getters.getSettings.playerLanding,
                      })
                    },
                  },
                },
                [
                  _c(
                    "v-list-item-title",
                    [
                      _c("v-icon", { attrs: { size: "20" } }, [
                        _vm._v("$vuetify.icons.music-note-eighth"),
                      ]),
                      _vm._v("\n        " + _vm._s(_vm.$t("Player"))),
                    ],
                    1
                  ),
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.isUpgradable
            ? _c(
                "v-list-item",
                { attrs: { to: { name: "subscription" } } },
                [
                  _c(
                    "v-list-item-title",
                    [
                      _c("v-icon", { attrs: { size: "20" } }, [
                        _vm._v(
                          "$vuetify.icons." +
                            _vm._s(
                              _vm.$store.getters.getSettings
                                .subscriptionButtonIcon
                            )
                        ),
                      ]),
                      _vm._v("\n        " + _vm._s(_vm.$t("Upgrade Account"))),
                    ],
                    1
                  ),
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.$store.getters.getUser.is_admin
            ? _c(
                "v-list-item",
                {
                  attrs: {
                    to: {
                      name: "profile",
                      params: { id: _vm.$store.getters.getUser.id },
                    },
                  },
                },
                [
                  _c(
                    "v-list-item-title",
                    [
                      _c("v-icon", { attrs: { size: "20" } }, [
                        _vm._v("$vuetify.icons.account-cog"),
                      ]),
                      _vm._v(
                        "\n        " + _vm._s(_vm.$t("Profile")) + "\n      "
                      ),
                    ],
                    1
                  ),
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-list-item",
            { attrs: { to: { name: "account-settings" } } },
            [
              _c(
                "v-list-item-title",
                [
                  _c("v-icon", { attrs: { size: "20" } }, [
                    _vm._v("$vuetify.icons.account-cog"),
                  ]),
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.$t("Account Settings")) +
                      "\n      "
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list-item",
            {
              on: {
                click: function ($event) {
                  return _vm.$store.dispatch("logout")
                },
              },
            },
            [
              _c(
                "v-list-item-title",
                [
                  _c("v-icon", { attrs: { size: "20" } }, [
                    _vm._v("$vuetify.icons.logout"),
                  ]),
                  _vm._v("\n        " + _vm._s(_vm.$t("Logout"))),
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

/***/ "./resources/js/components/Landing.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Landing.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Landing_vue_vue_type_template_id_15bf0008___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Landing.vue?vue&type=template&id=15bf0008& */ "./resources/js/components/Landing.vue?vue&type=template&id=15bf0008&");
/* harmony import */ var _Landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Landing.vue?vue&type=script&lang=js& */ "./resources/js/components/Landing.vue?vue&type=script&lang=js&");
/* harmony import */ var _Landing_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Landing.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/Landing.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VContainer.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/VDivider.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Landing_vue_vue_type_template_id_15bf0008___WEBPACK_IMPORTED_MODULE_0__.render,
  _Landing_vue_vue_type_template_id_15bf0008___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
;





_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["default"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["default"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__["default"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Landing.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dialogs/ContactUs.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/dialogs/ContactUs.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContactUs_vue_vue_type_template_id_273a3e1f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactUs.vue?vue&type=template&id=273a3e1f& */ "./resources/js/components/dialogs/ContactUs.vue?vue&type=template&id=273a3e1f&");
/* harmony import */ var _ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactUs.vue?vue&type=script&lang=js& */ "./resources/js/components/dialogs/ContactUs.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/VForm.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");
/* harmony import */ var vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VTextarea */ "./node_modules/vuetify/lib/components/VTextarea/VTextarea.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContactUs_vue_vue_type_template_id_273a3e1f___WEBPACK_IMPORTED_MODULE_0__.render,
  _ContactUs_vue_vue_type_template_id_273a3e1f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
;






_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["default"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["default"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_6__["default"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__["default"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__["default"],VTextarea: vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_9__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dialogs/ContactUs.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/elements/User.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/elements/User.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _User_vue_vue_type_template_id_6aa21448_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.vue?vue&type=template&id=6aa21448&scoped=true& */ "./resources/js/components/elements/User.vue?vue&type=template&id=6aa21448&scoped=true&");
/* harmony import */ var _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.vue?vue&type=script&lang=js& */ "./resources/js/components/elements/User.vue?vue&type=script&lang=js&");
/* harmony import */ var _User_vue_vue_type_style_index_0_id_6aa21448_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User.vue?vue&type=style&index=0&id=6aa21448&lang=scss&scoped=true& */ "./resources/js/components/elements/User.vue?vue&type=style&index=0&id=6aa21448&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/VList.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/VListItem.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VMenu */ "./node_modules/vuetify/lib/components/VMenu/VMenu.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _User_vue_vue_type_template_id_6aa21448_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _User_vue_vue_type_template_id_6aa21448_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6aa21448",
  null
  
)

/* vuetify-loader */
;





_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_5__["default"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__["default"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__["default"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__.VListItemTitle,VMenu: vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_9__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/elements/User.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VForm/VForm.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VForm/VForm.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
/* harmony import */ var _mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/binds-attrs */ "./node_modules/vuetify/lib/mixins/binds-attrs/index.js");
/* harmony import */ var _mixins_registrable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/registrable */ "./node_modules/vuetify/lib/mixins/registrable/index.js");
// Mixins



/* @vue/component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_util_mixins__WEBPACK_IMPORTED_MODULE_0__["default"])(_mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_1__["default"], (0,_mixins_registrable__WEBPACK_IMPORTED_MODULE_2__.provide)('form')
/* @vue/component */
).extend({
  name: 'v-form',

  provide() {
    return {
      form: this
    };
  },

  inheritAttrs: false,
  props: {
    disabled: Boolean,
    lazyValidation: Boolean,
    readonly: Boolean,
    value: Boolean
  },
  data: () => ({
    inputs: [],
    watchers: [],
    errorBag: {}
  }),
  watch: {
    errorBag: {
      handler(val) {
        const errors = Object.values(val).includes(true);
        this.$emit('input', !errors);
      },

      deep: true,
      immediate: true
    }
  },
  methods: {
    watchInput(input) {
      const watcher = input => {
        return input.$watch('hasError', val => {
          this.$set(this.errorBag, input._uid, val);
        }, {
          immediate: true
        });
      };

      const watchers = {
        _uid: input._uid,
        valid: () => {},
        shouldValidate: () => {}
      };

      if (this.lazyValidation) {
        // Only start watching inputs if we need to
        watchers.shouldValidate = input.$watch('shouldValidate', val => {
          if (!val) return; // Only watch if we're not already doing it

          if (this.errorBag.hasOwnProperty(input._uid)) return;
          watchers.valid = watcher(input);
        });
      } else {
        watchers.valid = watcher(input);
      }

      return watchers;
    },

    /** @public */
    validate() {
      return this.inputs.filter(input => !input.validate(true)).length === 0;
    },

    /** @public */
    reset() {
      this.inputs.forEach(input => input.reset());
      this.resetErrorBag();
    },

    resetErrorBag() {
      if (this.lazyValidation) {
        // Account for timeout in validatable
        setTimeout(() => {
          this.errorBag = {};
        }, 0);
      }
    },

    /** @public */
    resetValidation() {
      this.inputs.forEach(input => input.resetValidation());
      this.resetErrorBag();
    },

    register(input) {
      this.inputs.push(input);
      this.watchers.push(this.watchInput(input));
    },

    unregister(input) {
      const found = this.inputs.find(i => i._uid === input._uid);
      if (!found) return;
      const unwatch = this.watchers.find(i => i._uid === found._uid);

      if (unwatch) {
        unwatch.valid();
        unwatch.shouldValidate();
      }

      this.watchers = this.watchers.filter(i => i._uid !== found._uid);
      this.inputs = this.inputs.filter(i => i._uid !== found._uid);
      this.$delete(this.errorBag, found._uid);
    }

  },

  render(h) {
    return h('form', {
      staticClass: 'v-form',
      attrs: {
        novalidate: true,
        ...this.attrs$
      },
      on: {
        submit: e => this.$emit('submit', e)
      }
    }, this.$slots.default);
  }

}));
//# sourceMappingURL=VForm.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VTextarea/VTextarea.js":
/*!********************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VTextarea/VTextarea.sass */ "./node_modules/vuetify/src/components/VTextarea/VTextarea.sass");
/* harmony import */ var _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../VTextField/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
// Styles
 // Extensions

 // Utilities


const baseMixins = (0,_util_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])(_VTextField_VTextField__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* @vue/component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseMixins.extend({
  name: 'v-textarea',
  props: {
    autoGrow: Boolean,
    noResize: Boolean,
    rowHeight: {
      type: [Number, String],
      default: 24,
      validator: v => !isNaN(parseFloat(v))
    },
    rows: {
      type: [Number, String],
      default: 5,
      validator: v => !isNaN(parseInt(v, 10))
    }
  },
  computed: {
    classes() {
      return {
        'v-textarea': true,
        'v-textarea--auto-grow': this.autoGrow,
        'v-textarea--no-resize': this.noResizeHandle,
        ..._VTextField_VTextField__WEBPACK_IMPORTED_MODULE_2__["default"].options.computed.classes.call(this)
      };
    },

    noResizeHandle() {
      return this.noResize || this.autoGrow;
    }

  },
  watch: {
    autoGrow(val) {
      this.$nextTick(() => {
        var _this$$refs$input;

        val ? this.calculateInputHeight() : (_this$$refs$input = this.$refs.input) == null ? void 0 : _this$$refs$input.style.removeProperty('height');
      });
    },

    lazyValue() {
      this.autoGrow && this.$nextTick(this.calculateInputHeight);
    },

    rowHeight() {
      this.autoGrow && this.$nextTick(this.calculateInputHeight);
    }

  },

  mounted() {
    setTimeout(() => {
      this.autoGrow && this.calculateInputHeight();
    }, 0);
  },

  methods: {
    calculateInputHeight() {
      const input = this.$refs.input;
      if (!input) return;
      input.style.height = '0';
      const height = input.scrollHeight;
      const minHeight = parseInt(this.rows, 10) * parseFloat(this.rowHeight); // This has to be done ASAP, waiting for Vue
      // to update the DOM causes ugly layout jumping

      input.style.height = Math.max(minHeight, height) + 'px';
    },

    genInput() {
      const input = _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_2__["default"].options.methods.genInput.call(this);
      input.tag = 'textarea';
      delete input.data.attrs.type;
      input.data.attrs.rows = this.rows;
      return input;
    },

    onInput(e) {
      _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_2__["default"].options.methods.onInput.call(this, e);
      this.autoGrow && this.calculateInputHeight();
    },

    onKeyDown(e) {
      // Prevents closing of a
      // dialog when pressing
      // enter
      if (this.isFocused && e.keyCode === 13) {
        e.stopPropagation();
      }

      this.$emit('keydown', e);
    }

  }
}));
//# sourceMappingURL=VTextarea.js.map

/***/ })

}]);