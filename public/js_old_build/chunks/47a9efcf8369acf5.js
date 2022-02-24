(self["webpackChunk"] = self["webpackChunk"] || []).push([["auth"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/authentication/CompleteSignup.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/authentication/CompleteSignup.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _templates_Authentication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/Authentication */ "./resources/js/components/templates/Authentication.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  metaInfo: {
    title: window.Settings.find(function (set) {
      return set.key === "appName";
    }).value + " - Complete sign up"
  },
  props: ["profile", "driver"],
  components: {
    authentificationTemplate: _templates_Authentication__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    var _this = this;

    return {
      error: "",
      success: "",
      isLoading: false,
      showPassword1: false,
      showPassword2: false,
      rules: {
        required: function required(value) {
          return !!value || _this.$t("Required.");
        },
        min: function min(v) {
          return v.length >= 8 || _this.$t("Min 6 characters.");
        },
        emailMatch: function emailMatch() {
          return _this.$t("Please enter a valid email.");
        }
      }
    };
  },
  methods: {
    register: function register() {
      var _this2 = this;

      this.isLoading = true;

      if (this.profile.password1 !== this.profile.password2) {
        this.error = this.$t("Password does not match!");
        this.isLoading = false;
      } else {
        this.$store.dispatch("login", {
          profile: this.profile,
          driver: this.driver
        }).then(function (res) {
          _this2.success = _this2.$t("Logging in...");
        })["catch"](function (e) {
          if (e.response.data.errors) {
            _this2.error = Object.values(e.response.data.errors)[0][0];
          } else {
            _this2.error = e.response.data;
          }
        })["finally"](function () {
          return _this2.isLoading = false;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/authentication/ForgotPassword.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/authentication/ForgotPassword.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _templates_Authentication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/Authentication */ "./resources/js/components/templates/Authentication.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  metaInfo: {
    title: window.Settings.find(function (set) {
      return set.key === "appName";
    }).value + " - forget password"
  },
  components: {
    authentificationTemplate: _templates_Authentication__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      email: "",
      error: null,
      success: null,
      loading: false
    };
  },
  methods: {
    requestResetPassword: function requestResetPassword() {
      var _this = this;

      this.loading = true;
      axios.post("/api/password/forgot", {
        email: this.email
      }).then(function (result) {
        _this.success = result.data.message;
      })["finally"](function () {
        return _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/authentication/Login.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/authentication/Login.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LoadingBackground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LoadingBackground */ "./resources/js/components/LoadingBackground.vue");
/* harmony import */ var _templates_Authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/Authentication */ "./resources/js/components/templates/Authentication.vue");
/* harmony import */ var vue_facebook_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-facebook-login-component */ "./node_modules/vue-facebook-login-component/dist/vueFacebookLoginComponent.umd.min.js");
/* harmony import */ var vue_facebook_login_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_facebook_login_component__WEBPACK_IMPORTED_MODULE_3__);


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  metaInfo: {
    title: window.Settings.find(function (set) {
      return set.key === "appName";
    }).value + " - Login to your account"
  },
  components: {
    LoadingBackground: _LoadingBackground__WEBPACK_IMPORTED_MODULE_1__["default"],
    authentificationTemplate: _templates_Authentication__WEBPACK_IMPORTED_MODULE_2__["default"],
    VFacebookLoginScope: vue_facebook_login_component__WEBPACK_IMPORTED_MODULE_3__.VFBLoginScope
  },
  data: function data() {
    return {
      email: "",
      password: "",
      remember: false,
      error: "",
      loading: false,
      loadingPage: false,
      showPassword: false
    };
  },
  created: function created() {},
  methods: {
    login: function login() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;
                _context.prev = 1;
                _context.next = 4;
                return _this.$store.dispatch("login", {
                  email: _this.email,
                  password: _this.password
                });

              case 4:
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](1);
                _this.loading = false;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 6]]);
      }))();
    },
    goRegister: function goRegister() {
      location.replace('/register');
    },
    logInWithFacebook: function logInWithFacebook(res) {
      var _this2 = this;

      axios.get("https://graph.facebook.com/me?fields=name,email,picture&access_token=".concat(res.authResponse.accessToken)).then(function (result) {
        var profile = {
          email: result.data.email,
          avatar: result.data.picture.data.url,
          name: result.data.name,
          id: result.data.id
        };

        _this2.$store.dispatch("login", {
          driver: "facebook",
          profile: profile
        });
      });
    },
    handleSdkInit: function handleSdkInit(_ref) {
      var scope = _ref.scope;
      this.$store.commit("setFbLogoutFunction", scope.logout);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/authentication/Register.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/authentication/Register.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _templates_Authentication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/Authentication */ "./resources/js/components/templates/Authentication.vue");
/* harmony import */ var vue_facebook_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-facebook-login-component */ "./node_modules/vue-facebook-login-component/dist/vueFacebookLoginComponent.umd.min.js");
/* harmony import */ var vue_facebook_login_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_facebook_login_component__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  metaInfo: {
    title: window.Settings.find(function (set) {
      return set.key === "appName";
    }).value + " - Create new account"
  },
  components: {
    authentificationTemplate: _templates_Authentication__WEBPACK_IMPORTED_MODULE_0__["default"],
    VFacebookLoginScope: vue_facebook_login_component__WEBPACK_IMPORTED_MODULE_1__.VFBLoginScope
  },
  data: function data() {
    var _this = this;

    return {
      email: "",
      name: "",
      password1: "",
      password2: "",
      error: "",
      success: "",
      loading: false,
      showPassword1: false,
      showPassword2: false,
      rules: {
        required: function required(value) {
          return !!value || _this.$t("Required.");
        },
        min: function min(v) {
          return v.length >= 8 || _this.$t("Min 8 characters");
        },
        emailMatch: function emailMatch() {
          return _this.$t("Please enter a valid email.");
        }
      }
    };
  },
  methods: {
    goLogin: function goLogin() {
      location.replace('/login');
    },
    register: function register() {
      var _this2 = this;

      this.error = "";
      this.loading = true;

      if (this.password1 !== this.password2) {
        this.error = this.$t("Password does not match!");
        this.loading = false;
      } else {
        axios.post("/api/register", {
          email: this.email,
          password: this.password1,
          name: this.name
        }).then(function (res) {
          _this2.success = res.data.message || _this2.$t("Account created successfully. You can login now.");
        })["catch"](function (e) {// if (e.response.data.errors) {
          //     this.error = Object.values(
          //         e.response.data.errors
          //     )[0];
          // } else {
          //     this.error = e.response.data;
          // }
        })["finally"](function () {
          return _this2.loading = false;
        });
      }
    },
    // upcoming feature
    logInWithFacebook: function logInWithFacebook(res) {
      var _this3 = this;

      axios.get("https://graph.facebook.com/me?fields=name,email,picture&access_token=".concat(res.authResponse.accessToken)).then(function (result) {
        var profile = {
          email: result.data.email,
          avatar: result.data.picture.data.url,
          name: result.data.name,
          id: result.data.id
        };

        _this3.$store.dispatch("login", {
          driver: "facebook",
          profile: profile
        });
      });
    },
    handleSdkInit: function handleSdkInit(_ref) {
      var scope = _ref.scope;
      this.$store.commit("setFbLogoutFunction", scope.logout);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/authentication/ResetPassword.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/authentication/ResetPassword.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _templates_Authentication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/Authentication */ "./resources/js/components/templates/Authentication.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  metaInfo: {
    title: window.Settings.find(function (set) {
      return set.key === "appName";
    }).value + " - Reset password"
  },
  components: {
    authentificationTemplate: _templates_Authentication__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      error: null,
      success: "",
      password: "",
      email: "",
      password_confirmation: "",
      loading: false
    };
  },
  methods: {
    resetPassword: function resetPassword() {
      var _this = this;

      this.loading = true;
      axios.post("/api/password/reset", {
        token: this.$route.params.token,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      }).then(function () {
        _this.success = "Password reset successfully. Redirecting to login...";
        setTimeout(function () {
          _this.$router.push({
            name: "login"
          });
        }, 1500);
      })["catch"](function (error) {
        _this.error = Object.values(error.response.data.errors).join("<br />");
      })["finally"](function () {
        return _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Authentication.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Authentication.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".auth-page-wrapper {\n  font-family: \"Nunito\", sans-serif;\n  color: rgba(0, 0, 0, 0.795) !important;\n  background-image: url(\"/images/background.svg\");\n  background-color: #f3f3f3;\n  background-size: cover;\n  transition: height 0.5s;\n  height: 100%;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  position: relative;\n  padding: 1em 0;\n}\n.auth-page-wrapper .auth-box {\n  max-width: 500px;\n  min-width: 400px;\n  padding: 1em;\n  border-radius: 5px !important;\n}\n@media (max-width: 500px) {\n.auth-page-wrapper .auth-box {\n    width: 85%;\n    min-width: 320px;\n}\n}\n.auth-page-wrapper .auth-box .logo-img-container img {\n  height: 50px;\n}\n.auth-page-wrapper .auth-box__auth-btn {\n  position: relative !important;\n  width: 60px !important;\n}\n.auth-page-wrapper .auth-box__title h2 {\n  text-align: center !important;\n  padding: 0.6em 0 !important;\n}\n.auth-page-wrapper .auth-box .error-message-container {\n  display: flex;\n  justify-content: center;\n}\n.auth-page-wrapper .auth-box .link-text {\n  font-size: 0.9em;\n  opacity: 0.7;\n  cursor: pointer;\n  transition: color 0.5s;\n}\n.auth-page-wrapper .auth-box .link-text:hover {\n  color: #4245a8;\n}\n.auth-page-wrapper .auth-box .wide-divider {\n  margin-top: 26px;\n  opacity: 0.75;\n  margin-bottom: 8px;\n}\n.v-application.theme--dark .auth-page-wrapper {\n  background-color: #222222;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vuetify/src/components/VAlert/VAlert.sass":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vuetify/src/components/VAlert/VAlert.sass ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".theme--light.v-alert .v-alert--prominent .v-alert__icon:after {\n  background: rgba(0, 0, 0, 0.12);\n}\n\n.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after {\n  background: rgba(255, 255, 255, 0.12);\n}\n\n.v-sheet.v-alert {\n  border-radius: 4px;\n}\n.v-sheet.v-alert:not(.v-sheet--outlined) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.v-sheet.v-alert.v-sheet--shaped {\n  border-radius: 24px 4px;\n}\n\n.v-alert {\n  display: block;\n  font-size: 16px;\n  margin-bottom: 16px;\n  padding: 16px;\n  position: relative;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.v-alert:not(.v-sheet--tile) {\n  border-radius: 4px;\n}\n.v-application--is-ltr .v-alert > .v-icon,\n.v-application--is-ltr .v-alert > .v-alert__content {\n  margin-right: 16px;\n}\n.v-application--is-rtl .v-alert > .v-icon,\n.v-application--is-rtl .v-alert > .v-alert__content {\n  margin-left: 16px;\n}\n.v-application--is-ltr .v-alert > .v-icon + .v-alert__content {\n  margin-right: 0;\n}\n.v-application--is-rtl .v-alert > .v-icon + .v-alert__content {\n  margin-left: 0;\n}\n.v-application--is-ltr .v-alert > .v-alert__content + .v-icon {\n  margin-right: 0;\n}\n.v-application--is-rtl .v-alert > .v-alert__content + .v-icon {\n  margin-left: 0;\n}\n\n.v-alert__border {\n  border-style: solid;\n  border-width: 4px;\n  content: \"\";\n  position: absolute;\n}\n.v-alert__border:not(.v-alert__border--has-color) {\n  opacity: 0.26;\n}\n.v-alert__border--left, .v-alert__border--right {\n  bottom: 0;\n  top: 0;\n}\n.v-alert__border--bottom, .v-alert__border--top {\n  left: 0;\n  right: 0;\n}\n.v-alert__border--bottom {\n  border-bottom-left-radius: inherit;\n  border-bottom-right-radius: inherit;\n  bottom: 0;\n}\n.v-application--is-ltr .v-alert__border--left {\n  border-top-left-radius: inherit;\n  border-bottom-left-radius: inherit;\n  left: 0;\n}\n.v-application--is-rtl .v-alert__border--left {\n  border-top-right-radius: inherit;\n  border-bottom-right-radius: inherit;\n  right: 0;\n}\n.v-application--is-ltr .v-alert__border--right {\n  border-top-right-radius: inherit;\n  border-bottom-right-radius: inherit;\n  right: 0;\n}\n.v-application--is-rtl .v-alert__border--right {\n  border-top-left-radius: inherit;\n  border-bottom-left-radius: inherit;\n  left: 0;\n}\n.v-alert__border--top {\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n  top: 0;\n}\n\n.v-alert__content {\n  flex: 1 1 auto;\n}\n\n.v-application--is-ltr .v-alert__dismissible {\n  margin: -16px -8px -16px 8px;\n}\n.v-application--is-rtl .v-alert__dismissible {\n  margin: -16px 8px -16px -8px;\n}\n\n.v-alert__icon {\n  align-self: flex-start;\n  border-radius: 50%;\n  height: 24px;\n  min-width: 24px;\n  position: relative;\n}\n.v-application--is-ltr .v-alert__icon {\n  margin-right: 16px;\n}\n.v-application--is-rtl .v-alert__icon {\n  margin-left: 16px;\n}\n.v-alert__icon.v-icon {\n  font-size: 24px;\n}\n\n.v-alert__wrapper {\n  align-items: center;\n  border-radius: inherit;\n  display: flex;\n}\n\n.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon {\n  margin-left: 8px;\n}\n.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon {\n  margin-right: 8px;\n}\n\n.v-alert--dense {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.v-alert--dense .v-alert__border {\n  border-width: medium;\n}\n\n.v-alert--outlined {\n  background: transparent !important;\n  border: thin solid currentColor !important;\n}\n.v-alert--outlined .v-alert__icon {\n  color: inherit !important;\n}\n\n.v-alert--prominent .v-alert__icon {\n  align-self: center;\n  height: 48px;\n  min-width: 48px;\n}\n.v-alert--prominent .v-alert__icon.v-icon {\n  font-size: 32px;\n}\n.v-alert--prominent .v-alert__icon.v-icon:after {\n  background: currentColor !important;\n  border-radius: 50%;\n  bottom: 0;\n  content: \"\";\n  left: 0;\n  opacity: 0.16;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon::after {\n  transform: scale(1);\n}\n\n.v-alert--text {\n  background: transparent !important;\n}\n.v-alert--text:before {\n  background-color: currentColor;\n  border-radius: inherit;\n  bottom: 0;\n  content: \"\";\n  left: 0;\n  opacity: 0.12;\n  position: absolute;\n  pointer-events: none;\n  right: 0;\n  top: 0;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Authentication.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Authentication.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Authentication_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Authentication.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Authentication.vue?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Authentication_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Authentication_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vuetify/src/components/VAlert/VAlert.sass":
/*!****************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VAlert/VAlert.sass ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_2_sass_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_3_VAlert_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!../../../../postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!../../../../sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./VAlert.sass */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vuetify/src/components/VAlert/VAlert.sass");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_2_sass_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_3_VAlert_sass__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_2_sass_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_3_VAlert_sass__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue-facebook-login-component/dist/vueFacebookLoginComponent.umd.min.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/vue-facebook-login-component/dist/vueFacebookLoginComponent.umd.min.js ***!
  \*********************************************************************************************/
/***/ (function(module) {

(function(t,e){ true?module.exports=e():0})("undefined"!==typeof self?self:this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="1c25")}({"0a52":function(t,e,n){var r=n("3c10");e=r(!1),e.push([t.i,".v-facebook-login[data-v-1066edd7]{display:-webkit-box;display:-ms-flexbox;display:flex;cursor:default;color:#fff;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:.5rem 1rem;border-radius:.25rem;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border:1px solid hsla(0,0%,100%,.05);background-color:#3c57a4}.v-facebook-login *[data-v-1066edd7],.v-facebook-login[data-v-1066edd7] :after,.v-facebook-login[data-v-1066edd7] :before{-webkit-box-sizing:inherit;box-sizing:inherit}.v-facebook-login[disabled][data-v-1066edd7]{opacity:.75;cursor:not-allowed;background-color:#2d417b}.v-facebook-login[disabled][data-v-1066edd7]:hover{background-color:#2d417b}.v-facebook-login[data-v-1066edd7]:hover{background-color:#425fb3}.v-facebook-login[data-v-1066edd7]:focus{outline-width:0;-webkit-box-shadow:0 0 0 1px rgba(139,157,195,.5);box-shadow:0 0 0 1px rgba(139,157,195,.5)}.logo[data-v-1066edd7]{width:1.25rem;height:1.25rem}.loader[data-v-1066edd7],.logo[data-v-1066edd7]{opacity:.925;margin-right:1.25ch}",""]),t.exports=e},"0abf":function(t,e,n){var r=n("0a52");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("0ed3").default;o("55e17114",r,!0,{sourceMap:!1,shadowMode:!1})},"0c3d":function(t,e,n){"use strict";n("0abf")},"0ed3":function(t,e,n){"use strict";function r(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=i[0],c=i[1],u=i[2],s=i[3],l={id:t+":"+o,css:c,media:u,sourceMap:s};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}n.r(e),n.d(e,"default",(function(){return h}));var o="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=o&&(document.head||document.getElementsByTagName("head")[0]),c=null,u=0,s=!1,l=function(){},f=null,d="data-vue-ssr-id",p="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t,e,n,o){s=n,f=o||{};var a=r(t,e);return v(a),function(e){for(var n=[],o=0;o<a.length;o++){var c=a[o],u=i[c.id];u.refs--,n.push(u)}e?(a=r(t,e),v(a)):a=[];for(o=0;o<n.length;o++){u=n[o];if(0===u.refs){for(var s=0;s<u.parts.length;s++)u.parts[s]();delete i[u.id]}}}}function v(t){for(var e=0;e<t.length;e++){var n=t[e],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(y(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(y(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function g(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function y(t){var e,n,r=document.querySelector("style["+d+'~="'+t.id+'"]');if(r){if(s)return l;r.parentNode.removeChild(r)}if(p){var o=u++;r=c||(c=g()),e=m.bind(null,r,o,!1),n=m.bind(null,r,o,!0)}else r=g(),e=w.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function m(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=b(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function w(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),f.ssrId&&t.setAttribute(d,e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{while(t.firstChild)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},"1c25":function(t,e,n){"use strict";if(n.r(e),n.d(e,"VFBLogin",(function(){return a["b"]})),n.d(e,"VFBLoginScope",(function(){return a["e"]})),n.d(e,"VFBLoginLoader",(function(){return a["d"]})),n.d(e,"VFBLoginButton",(function(){return a["c"]})),n.d(e,"Install",(function(){return a["a"]})),"undefined"!==typeof window){var r=window.document.currentScript,o=n("405b");r=o(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:o});var i=r&&r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);i&&(n.p=i[1])}var a=n("56d7");e["default"]=a["f"]},"2a7d":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"v-facebook-login",style:t.inlineStyle,attrs:{disabled:t.scope.disabled},on:{click:t.handleClick}},[t._t("before",null,null,t.scope),t._t("loader",[t.scope.working?n("v-loader",{class:["loader",t.loaderClass],style:t.loaderStyle}):t._e()],null,t.scope),t.scope.idle&&t.scope.disconnected?t._t("logo",[t.useAltLogo?n("v-facebook-logo-alt",{class:["logo",t.logoClass],style:t.logoStyle}):n("v-facebook-logo",{class:["logo",t.logoClass],style:t.logoStyle})],null,t.scope):t._e(),n("span",{class:t.textClass,style:t.textStyle},[t.scope.idle&&t.scope.disconnected?t._t("login",[t._v("Continue with Facebook")],null,t.scope):t._e(),t.scope.idle&&t.scope.connected?t._t("logout",[t._v("Logout")],null,t.scope):t._e(),t.scope.working?t._t("working",[t._v("Please wait...")],null,t.scope):t._e(),t.scope.hasError?t._t("error",[t._v("⛔ Error")],null,t.scope):t._e()],2),t._t("after",null,null,t.scope)],2)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"}})])},a=[],c=n("2be6"),u={},s=Object(c["a"])(u,i,a,!1,null,null,null),l=s.exports,f=n("555f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:"24",height:"24",fill:"currentColor",viewBox:"0 0 167.657 167.657",xmlns:"http://www.w3.org/2000/svg"}},[n("g",[n("path",{attrs:{d:"M83.829,0.349C37.532,0.349,0,37.881,0,84.178c0,41.523,30.222,75.911,69.848,82.57v-65.081H49.626\n\t\tv-23.42h20.222V60.978c0-20.037,12.238-30.956,30.115-30.956c8.562,0,15.92,0.638,18.056,0.919v20.944l-12.399,0.006\n\t\tc-9.72,0-11.594,4.618-11.594,11.397v14.947h23.193l-3.025,23.42H94.026v65.653c41.476-5.048,73.631-40.312,73.631-83.154\n\t\tC167.657,37.881,130.125,0.349,83.829,0.349z"}})])])},p=[],h={},v=Object(c["a"])(h,d,p,!1,null,null,null),g=v.exports;function y(t){return x(t)||w(t)||m(t)||b()}function b(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(t,e){if(t){if("string"===typeof t)return k(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(t,e):void 0}}function w(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function x(t){if(Array.isArray(t))return k(t)}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var O={inheritAttrs:!1,name:"v-facebook-login-button",components:{VLoader:f["a"],VFacebookLogo:l,VFacebookLogoAlt:g},props:{scope:{type:Object,default:function(){return{}}},logoClass:{type:String},logoStyle:{type:Object,default:function(){return{}}},textClass:{type:String},textStyle:{type:Object,default:function(){return{}}},loaderClass:{type:String},loaderStyle:{type:Object,default:function(){return{}}},transition:{type:Array,default:function(){return[]}},useAltLogo:{type:Boolean,default:!1}},computed:{inlineStyle:function(){var t="background-color 0.15s ease-in-out",e=[t].concat(this.transition);return e=y(new Set(e)).join(", "),{transition:e}}},methods:{handleClick:function(){var t,e;this.$emit("click"),null===(t=(e=this.scope).toggleLogin)||void 0===t||t.call(e)}}},j=O,_=(n("0c3d"),Object(c["a"])(j,r,o,!1,null,"1066edd7",null));e["a"]=_.exports},"2be6":function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,c){var u,s="function"===typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},s._ssrRegister=u):o&&(u=c?function(){o.call(this,(s.functional?this.parent:this).$root.$options.shadowRoot)}:o),u)if(s.functional){s._injectStyles=u;var l=s.render;s.render=function(t,e){return u.call(e),l(t,e)}}else{var f=s.beforeCreate;s.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:s}}n.d(e,"a",(function(){return r}))},"3c10":function(t,e,n){"use strict";function r(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"===typeof btoa){var i=o(r),a=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(a).concat([i]).join("\n")}return[n].join("\n")}function o(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);return"/*# ".concat(n," */")}t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=r(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"===typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),e.push(u))}},e}},"3df1":function(t,e,n){"use strict";n("9425")},"405b":function(t,e,n){var r,o,i;(function(n,a){o=[],r=a,i="function"===typeof r?r.apply(e,o):r,void 0===i||(t.exports=i)})("undefined"!==typeof self&&self,(function(){function t(){var e=Object.getOwnPropertyDescriptor(document,"currentScript");if(!e&&"currentScript"in document&&document.currentScript)return document.currentScript;if(e&&e.get!==t&&document.currentScript)return document.currentScript;try{throw new Error}catch(p){var n,r,o,i=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,a=/@([^@]*):(\d+):(\d+)\s*$/gi,c=i.exec(p.stack)||a.exec(p.stack),u=c&&c[1]||!1,s=c&&c[2]||!1,l=document.location.href.replace(document.location.hash,""),f=document.getElementsByTagName("script");u===l&&(n=document.documentElement.outerHTML,r=new RegExp("(?:[^\\n]+?\\n){0,"+(s-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),o=n.replace(r,"$1").trim());for(var d=0;d<f.length;d++){if("interactive"===f[d].readyState)return f[d];if(f[d].src===u)return f[d];if(u===l&&f[d].innerHTML&&f[d].innerHTML.trim()===o)return f[d]}return null}}return t}))},"555f":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"v-loader"})},o=[],i=(n("3df1"),n("2be6")),a={},c=Object(i["a"])(a,r,o,!1,null,"4d744d9a",null);e["a"]=c.exports},"56d4":function(t,e,n){t.exports=n("df26")},"56d7":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return c}));var r=n("fa25");n.d(e,"b",(function(){return r["a"]}));var o=n("5eef");n.d(e,"e",(function(){return o["a"]}));var i=n("555f");n.d(e,"d",(function(){return i["a"]}));var a=n("2a7d");n.d(e,"c",(function(){return a["a"]}));var c={install:function(t){t.component(r["a"].name,r["a"])}};function u(){var e;"undefined"!==typeof window?e=window.Vue:"undefined"!==typeof t&&(e=t.Vue),e&&e.use(c)}u(),e["f"]=r["a"]}).call(this,n("7d15"))},"5eef":function(t,e,n){"use strict";var r=n("56d4"),o=n.n(r);function i(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function c(t){i(a,r,o,c,u,"next",t)}function u(t){i(a,r,o,c,u,"throw",t)}c(void 0)}))}}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f="facebook-jssdk",d=3e3,p={UNKNOWN:"unknown",CONNECTED:"connected",NOT_AUTHORIZED:"not_authorized"};function h(t){console.error(new URIError("The script ".concat(t.target.src," didn't load correctly.")))}function v(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en_US";return new Promise((function(n,r){window.fbAsyncInit=function(){window.FB.init(t),n(window.FB)},function(t,n,o){var i=t.getElementsByTagName(n)[0];if(!t.getElementById(o)){var a=t.createElement(n);a.id=o,a.src="//connect.facebook.net/".concat(e,"/sdk.js"),a.onerror=function(t){h(t),r(t)},i.parentNode.insertBefore(a,i)}}(document,"script",f),window.setTimeout((function(){return r("window.fbAsyncInit timed out, see: https://developers.facebook.com/support/bugs/")}),d)}))}function g(){return new Promise((function(t){var e=document.getElementById(f);e&&e.remove(),window.setTimeout(t)}))}var y=function(){function t(){c(this,t)}return s(t,null,[{key:"_init",value:function(){var e=a(o.a.mark((function e(n,r){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.state.isExternal){e.next=2;break}return e.abrupt("return",window.FB);case 2:if(!window.FB){e.next=5;break}return t.state.isExternal=!0,e.abrupt("return",window.FB);case 5:if(!t.state.pending){e.next=7;break}return e.abrupt("return",t.state.pending);case 7:return t.state.pending=v(n,r),e.abrupt("return",t.state.pending);case 9:case"end":return e.stop()}}),e)})));function n(t,n){return e.apply(this,arguments)}return n}()},{key:"reset",value:function(){t.state.consumers=0,t.state.pending=null,t.state.isExternal=!1}},{key:"subscribe",value:function(){return t.state.consumers++,t._init.apply(t,arguments)}},{key:"unsubscribe",value:function(){var e=a(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.state.consumers--,!t.state.isExternal&&!t.state.consumers){e.next=3;break}return e.abrupt("return");case 3:return t.reset(),e.abrupt("return",g());case 5:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()},{key:"isConnected",value:function(t){return t===p.CONNECTED}},{key:"isDisconnected",value:function(e){return!t.isConnected(e)}},{key:"getLoginStatus",value:function(){return new Promise((function(t){return window.FB.getLoginStatus(t)}))}},{key:"login",value:function(t){return new Promise((function(e){return window.FB.login(e,t)}))}},{key:"logout",value:function(){return new Promise((function(t){return window.FB.logout(t)}))}}]),t}();function b(t,e){return O(t)||k(t,e)||w(t,e)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function w(t,e){if(t){if("string"===typeof t)return x(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(t,e):void 0}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function k(t,e){var n=t&&("undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done);a=!0)if(i.push(r.value),e&&i.length===e)break}catch(u){c=!0,o=u}finally{try{a||null==n["return"]||n["return"]()}finally{if(c)throw o}}return i}}function O(t){if(Array.isArray(t))return t}function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){S(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function S(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function E(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function L(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){E(i,r,o,a,c,"next",t)}function c(t){E(i,r,o,a,c,"throw",t)}a(void 0)}))}}function C(t,e){if(null==t)return{};var n,r,o=P(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function P(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}l(y,"state",Object.seal({isExternal:!1,pending:null,consumers:0}));e["a"]={inheritAttrs:!1,name:"v-facebook-login-scope",props:{value:{type:Object,default:function(){return{}}},appId:{type:String,required:!0},version:{type:String,default:"v9.0"},options:{type:Object,default:function(){return{cookie:!0,xfbml:!0,autoLogAppEvents:!0}}},loginOptions:{type:Object,default:function(){return{scope:"email"}}},asyncDelay:{type:Number,default:0},sdkLocale:{type:String,default:"en_US"}},data:function(){return{error:null,working:!0,connected:!1}},watch:{value:function(t){var e=t.error,n=t.working,r=t.connected;this.error=e,this.working=n,this.connected=r},scope:function(t){t.login,t.logout,t.toggleLogin;var e=C(t,["login","logout","toggleLogin"]);this.$emit("input",e)}},created:function(){var t=this;return L(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.async(L(o.a.mark((function e(){var n,r,i,a,c,u,s;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.appId,r=t.version,i=t.options,a=t.sdkLocale,e.next=3,y.subscribe(_({appId:n,version:r},i),a);case 3:if(c=e.sent,!t.error){e.next=6;break}return e.abrupt("return",void 0);case 6:return t.$emit("sdk-init",{FB:c,scope:t.scope}),e.next=9,y.getLoginStatus();case 9:u=e.sent,s=u.status,y.isConnected(s)&&(t.connected=!0,t.$emit("login"));case 12:case"end":return e.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){y.unsubscribe()},computed:{idle:function(){return!this.working&&!this.hasError},enabled:function(){return!this.disabled},disabled:function(){return this.working||this.hasError||!this.appId},disconnected:function(){return!this.connected},hasError:function(){return Boolean(this.error)},scope:function(){return{idle:this.idle,error:this.error,hasError:this.hasError,login:this.login,logout:this.logout,working:this.working&&!this.hasError,enabled:this.enabled,disabled:this.disabled,connected:this.connected,toggleLogin:this.toggleLogin,disconnected:this.disconnected}}},methods:{toggleLogin:function(){this.connected?this.logout():this.login()},login:function(){var t=this;return L(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",t.async(L(o.a.mark((function e(){var n;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y.login(t.loginOptions);case 2:return n=e.sent,y.isConnected(n.status)&&(t.connected=!0,t.$emit("login",n)),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))));case 1:case"end":return e.stop()}}),e)})))()},logout:function(){var t=this;return L(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",t.async(L(o.a.mark((function e(){var n;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y.getLoginStatus();case 2:if(n=e.sent,!y.isConnected(n.status)){e.next=6;break}return e.next=6,y.logout();case 6:return t.connected=!1,t.$emit("logout",n),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})))));case 1:case"end":return e.stop()}}),e)})))()},async:function(t){var e=this;return L(o.a.mark((function n(){var r,i,a,c,u;return o.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.working=!0,n.next=3,t().catch(e.catchHandler);case 3:return r=n.sent,i=new Promise((function(t){return setTimeout(t,e.asyncDelay)})),n.next=7,Promise.all([i,r]);case 7:return a=n.sent,c=b(a,2),u=c[1],e.working=!1,n.abrupt("return",u);case 12:case"end":return n.stop()}}),n)})))()},catchHandler:function(t){this.error=t,console.error(this.error)}},render:function(){var t,e;return null===(t=(e=this.$scopedSlots).default)||void 0===t?void 0:t.call(e,this.scope)}}},"7d15":function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},9425:function(t,e,n){var r=n("9692");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("0ed3").default;o("d46a32f8",r,!0,{sourceMap:!1,shadowMode:!1})},9692:function(t,e,n){var r=n("3c10");e=r(!1),e.push([t.i,".v-loader[data-v-4d744d9a]{display:block;width:1.25rem;height:1.25rem;border-radius:50%;border-style:solid;border-width:.125rem;border-top-color:#8b9dc3;border-left-color:#fff;border-right-color:#fff;border-bottom-color:#fff;-webkit-animation:spin-data-v-4d744d9a 2s linear infinite;animation:spin-data-v-4d744d9a 2s linear infinite}@-webkit-keyframes spin-data-v-4d744d9a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin-data-v-4d744d9a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""]),t.exports=e},df26:function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(T){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new C(r||[]);return i._invoke=_(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(T){return{type:"throw",arg:T}}}t.wrap=s;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",v={};function g(){}function y(){}function b(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(P([])));x&&x!==n&&r.call(x,i)&&(m=x);var k=b.prototype=g.prototype=Object.create(m);function O(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function n(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;function i(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function _(t,e,n){var r=f;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return A()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var c=S(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?h:d,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=h,n.method="throw",n.arg=u.arg)}}}function S(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function P(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){while(++o<t.length)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:A}}function A(){return{value:e,done:!0}}return y.prototype=k.constructor=b,b.constructor=y,y.displayName=u(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,c,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},O(j.prototype),j.prototype[a]=function(){return this},t.AsyncIterator=j,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new j(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(k),u(k,c,"Generator"),k[i]=function(){return this},k.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=P,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:P(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},fa25:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scope",t._g(t._b({scopedSlots:t._u([{key:"default",fn:function(e){return n("v-button",t._g(t._b({attrs:{scope:e},scopedSlots:t._u([t._l(t.$scopedSlots,(function(e,n){return{key:n,fn:function(e){return[t._t(n,null,null,e)]}}}))],null,!0)},"v-button",t.filteredProps,!1),t.$listeners))}}]),model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},"scope",t.filteredProps,!1),t.$listeners))},o=[],i=n("5eef"),a=n("2a7d");function c(t,e){return d(t)||f(t,e)||s(t,e)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t,e){if(t){if("string"===typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function f(t,e){var n=t&&("undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done);a=!0)if(i.push(r.value),e&&i.length===e)break}catch(u){c=!0,o=u}finally{try{a||null==n["return"]||n["return"]()}finally{if(c)throw o}}return i}}function d(t){if(Array.isArray(t))return t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g={name:"v-facebook-login",components:{Scope:i["a"],VButton:a["a"]},props:h(h({},i["a"].props),a["a"].props),computed:{model:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},filteredProps:function(){return Object.entries(this.$props).reduce((function(t,e){var n=c(e,2),r=n[0],o=n[1];return h(h({},t),void 0!==o&&v({},r,o))}),{})}}},y=g,b=n("2be6"),m=Object(b["a"])(y,r,o,!1,null,null,null);e["a"]=m.exports}})}));
//# sourceMappingURL=vueFacebookLoginComponent.umd.min.js.map

/***/ }),

/***/ "./resources/js/components/authentication/CompleteSignup.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/authentication/CompleteSignup.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompleteSignup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CompleteSignup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/authentication/CompleteSignup.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompleteSignup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/authentication/ForgotPassword.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/authentication/ForgotPassword.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ForgotPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/authentication/ForgotPassword.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/authentication/Login.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/authentication/Login.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/authentication/Login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/authentication/Register.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/authentication/Register.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/authentication/Register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/authentication/ResetPassword.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/authentication/ResetPassword.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResetPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/authentication/ResetPassword.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/templates/Authentication.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/templates/Authentication.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Authentication_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Authentication.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Authentication.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./resources/js/components/LoadingBackground.vue?vue&type=template&id=c67ca0a2&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/LoadingBackground.vue?vue&type=template&id=c67ca0a2& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingBackground_vue_vue_type_template_id_c67ca0a2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingBackground_vue_vue_type_template_id_c67ca0a2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingBackground_vue_vue_type_template_id_c67ca0a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoadingBackground.vue?vue&type=template&id=c67ca0a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoadingBackground.vue?vue&type=template&id=c67ca0a2&");


/***/ }),

/***/ "./resources/js/components/authentication/CompleteSignup.vue?vue&type=template&id=a80cabe6&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/authentication/CompleteSignup.vue?vue&type=template&id=a80cabe6& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompleteSignup_vue_vue_type_template_id_a80cabe6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompleteSignup_vue_vue_type_template_id_a80cabe6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompleteSignup_vue_vue_type_template_id_a80cabe6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CompleteSignup.vue?vue&type=template&id=a80cabe6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/authentication/CompleteSignup.vue?vue&type=template&id=a80cabe6&");


/***/ }),

/***/ "./resources/js/components/authentication/ForgotPassword.vue?vue&type=template&id=70967aba&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/authentication/ForgotPassword.vue?vue&type=template&id=70967aba& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_70967aba___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_70967aba___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_70967aba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ForgotPassword.vue?vue&type=template&id=70967aba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/authentication/ForgotPassword.vue?vue&type=template&id=70967aba&");


/***/ }),

/***/ "./resources/js/components/authentication/Login.vue?vue&type=template&id=093970bd&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/authentication/Login.vue?vue&type=template&id=093970bd& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_093970bd___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_093970bd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_093970bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=093970bd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/authentication/Login.vue?vue&type=template&id=093970bd&");


/***/ }),

/***/ "./resources/js/components/authentication/Register.vue?vue&type=template&id=31b792ff&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/authentication/Register.vue?vue&type=template&id=31b792ff& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_31b792ff___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_31b792ff___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_31b792ff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=31b792ff& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/authentication/Register.vue?vue&type=template&id=31b792ff&");


/***/ }),

/***/ "./resources/js/components/authentication/ResetPassword.vue?vue&type=template&id=f5c76c44&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/authentication/ResetPassword.vue?vue&type=template&id=f5c76c44& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_f5c76c44___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_f5c76c44___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_f5c76c44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResetPassword.vue?vue&type=template&id=f5c76c44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/authentication/ResetPassword.vue?vue&type=template&id=f5c76c44&");


/***/ }),

/***/ "./resources/js/components/templates/Authentication.vue?vue&type=template&id=e10eaf0e&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/templates/Authentication.vue?vue&type=template&id=e10eaf0e& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Authentication_vue_vue_type_template_id_e10eaf0e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Authentication_vue_vue_type_template_id_e10eaf0e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Authentication_vue_vue_type_template_id_e10eaf0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Authentication.vue?vue&type=template&id=e10eaf0e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Authentication.vue?vue&type=template&id=e10eaf0e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoadingBackground.vue?vue&type=template&id=c67ca0a2&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoadingBackground.vue?vue&type=template&id=c67ca0a2& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "loading-background-wrapper" }, [
      _c("div", { staticClass: "loader" }, [
        _c("span"),
        _vm._v(" "),
        _c("span"),
        _vm._v(" "),
        _c("span"),
        _vm._v(" "),
        _c("span"),
        _vm._v(" "),
        _c("span"),
        _vm._v(" "),
        _c("span"),
        _vm._v(" "),
        _c("span"),
        _vm._v(" "),
        _c("span"),
        _vm._v(" "),
        _c("span"),
        _vm._v(" "),
        _c("span"),
        _vm._v(" "),
        _c("span"),
        _vm._v(" "),
        _c("span"),
        _vm._v(" "),
        _c("span"),
        _vm._v(" "),
        _c("span"),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/authentication/CompleteSignup.vue?vue&type=template&id=a80cabe6&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/authentication/CompleteSignup.vue?vue&type=template&id=a80cabe6& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("authentification-template", [
    _c(
      "div",
      { staticClass: "register-wrapper" },
      [
        _c("div", { staticClass: "auth-box__title" }, [
          _c("h2", [_vm._v(_vm._s(_vm.$t("Complete Sign Up")))]),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "error-message-container" },
          [
            _vm.error && !_vm.success
              ? _c(
                  "v-chip",
                  {
                    staticClass: "ma-2",
                    attrs: { color: "red", label: "", "text-color": "white" },
                  },
                  [_vm._v("\n        " + _vm._s(_vm.error) + "\n      ")]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.success
              ? _c(
                  "v-chip",
                  {
                    staticClass: "ma-2",
                    attrs: {
                      color: "success",
                      label: "",
                      "text-color": "white",
                    },
                  },
                  [
                    _c("v-icon", { attrs: { left: "" } }, [
                      _vm._v("$vuetify.icons.checkbox-marked-circle-outline"),
                    ]),
                    _vm._v("\n        " + _vm._s(_vm.success) + "\n      "),
                  ],
                  1
                )
              : _vm._e(),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "v-container",
          [
            _c(
              "v-row",
              [
                _c(
                  "v-col",
                  { staticClass: "auth-box__inputs", attrs: { cols: "12" } },
                  [
                    _c("v-text-field", {
                      attrs: {
                        rules: [_vm.rules.required],
                        light: "",
                        label: _vm.$t("Name"),
                        outlined: "",
                      },
                      model: {
                        value: _vm.profile.name,
                        callback: function ($$v) {
                          _vm.$set(_vm.profile, "name", $$v)
                        },
                        expression: "profile.name",
                      },
                    }),
                    _vm._v(" "),
                    _c("v-text-field", {
                      attrs: {
                        rules: [_vm.rules.required],
                        light: "",
                        label: _vm.$t("Email"),
                        outlined: "",
                      },
                      model: {
                        value: _vm.profile.email,
                        callback: function ($$v) {
                          _vm.$set(_vm.profile, "email", $$v)
                        },
                        expression: "profile.email",
                      },
                    }),
                    _vm._v(" "),
                    _c("v-text-field", {
                      staticClass: "input-group--focused",
                      attrs: {
                        "append-icon": _vm.showPassword1
                          ? "mdi-eye"
                          : "mdi-eye-off",
                        rules: [_vm.rules.required, _vm.rules.min],
                        type: _vm.showPassword1 ? "text" : "password",
                        name: "input-10-2",
                        label: _vm.$t("Password"),
                        light: "",
                        hint: "At least 6 characters",
                        outlined: "",
                      },
                      on: {
                        "click:append": function ($event) {
                          _vm.showPassword1 = !_vm.showPassword1
                        },
                      },
                      model: {
                        value: _vm.profile.password1,
                        callback: function ($$v) {
                          _vm.$set(_vm.profile, "password1", $$v)
                        },
                        expression: "profile.password1",
                      },
                    }),
                    _vm._v(" "),
                    _c("v-text-field", {
                      staticClass: "input-group--focused",
                      attrs: {
                        rules: [_vm.rules.required],
                        name: "input-10-2",
                        "append-icon": _vm.showPassword2
                          ? "mdi-eye"
                          : "mdi-eye-off",
                        type: _vm.showPassword2 ? "text" : "password",
                        light: "",
                        label: _vm.$t("Confirm Password"),
                        outlined: "",
                      },
                      on: {
                        "click:append": function ($event) {
                          _vm.showPassword2 = !_vm.showPassword2
                        },
                        paste: function ($event) {
                          $event.preventDefault()
                        },
                      },
                      model: {
                        value: _vm.profile.password2,
                        callback: function ($$v) {
                          _vm.$set(_vm.profile, "password2", $$v)
                        },
                        expression: "profile.password2",
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
            _vm._v(" "),
            !_vm.$store.getters.getSettings.disableRegistration
              ? _c(
                  "v-row",
                  {
                    staticClass: "px-3",
                    attrs: { justify: "space-between", align: "center" },
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass:
                          "auth-box__auth-btn indigo v-btn v-btn--contained v-btn--block theme--dark v-size--default",
                        attrs: { disabled: _vm.success ? true : false },
                        on: { click: _vm.register },
                      },
                      [
                        _vm.isloading
                          ? _c(
                              "div",
                              { staticClass: "isLoading" },
                              [
                                _c("isLoading-circle", {
                                  attrs: { size: "24" },
                                }),
                              ],
                              1
                            )
                          : _c("div", [_vm._v(_vm._s(_vm.$t("Sign Up")))]),
                      ]
                    ),
                  ]
                )
              : _vm._e(),
          ],
          1
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/authentication/ForgotPassword.vue?vue&type=template&id=70967aba&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/authentication/ForgotPassword.vue?vue&type=template&id=70967aba& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("authentification-template", [
    _c(
      "div",
      { staticClass: "login-wrapper" },
      [
        _c("div", { staticClass: "auth-box__title" }, [
          _c("h2", [_vm._v(_vm._s(_vm.$t("Reset your password")))]),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "error-message-container" },
          [
            _vm.error
              ? _c(
                  "v-chip",
                  {
                    staticClass: "ma-2",
                    attrs: { color: "red", label: "", "text-color": "white" },
                  },
                  [
                    _c("v-icon", { attrs: { left: "" } }, [
                      _vm._v("$vuetify.icons.alert"),
                    ]),
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.error) +
                        "\n            "
                    ),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.success
              ? _c(
                  "v-chip",
                  {
                    staticClass: "ma-2",
                    attrs: {
                      color: "success",
                      label: "",
                      "text-color": "white",
                    },
                  },
                  [
                    _c("v-icon", { attrs: { left: "" } }, [
                      _vm._v("$vuetify.icons.checkmark"),
                    ]),
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.success) +
                        "\n            "
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
          "v-container",
          [
            _c(
              "v-row",
              [
                _c(
                  "v-col",
                  { staticClass: "auth-box__inputs", attrs: { cols: "12" } },
                  [
                    _c("v-text-field", {
                      attrs: {
                        light: "",
                        label: _vm.$t("Enter your login email"),
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
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-col",
                  { attrs: { cols: "12" } },
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: {
                          block: "",
                          loading: _vm.loading,
                          color: "primary",
                          disabled: _vm.loading,
                        },
                        on: { click: _vm.requestResetPassword },
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
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.$t("Reset")) +
                            "\n                        "
                        ),
                      ]
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "divider wide-divider" }),
            _vm._v(" "),
            _c("div", [
              _c("div", [
                _c("div", { staticClass: "bold text-center" }, [
                  _c("h3", [_vm._v(_vm._s(_vm.$t("Remember you password?")))]),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "signup-button-con text-center mt-4" },
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: { color: "primary", outlined: "" },
                        on: {
                          click: function ($event) {
                            return _vm.$router.push({ name: "login" })
                          },
                        },
                      },
                      [_vm._v(_vm._s(_vm.$t("Login to your account")))]
                    ),
                  ],
                  1
                ),
              ]),
            ]),
          ],
          1
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/authentication/Login.vue?vue&type=template&id=093970bd&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/authentication/Login.vue?vue&type=template&id=093970bd& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return !_vm.loadingPage
    ? _c("authentification-template", [
        _c(
          "div",
          { staticClass: "login-wrapper" },
          [
            _c("div", { staticClass: "auth-box__title" }, [
              _c("h2", [_vm._v(_vm._s(_vm.$t("Login to your account")))]),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "error-message-container" },
              [
                _vm.error
                  ? _c(
                      "v-chip",
                      {
                        staticClass: "ma-2",
                        attrs: {
                          color: "red",
                          label: "",
                          "text-color": "white",
                        },
                      },
                      [
                        _c("v-icon", { attrs: { left: "" } }, [
                          _vm._v("$vuetify.icons.alert"),
                        ]),
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.error) +
                            "\n            "
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
              "v-container",
              [
                _c(
                  "v-row",
                  [
                    _c(
                      "v-col",
                      {
                        staticClass: "auth-box__inputs",
                        attrs: { cols: "12" },
                      },
                      [
                        _c("v-text-field", {
                          attrs: { label: _vm.$t("Email"), outlined: "" },
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
                          staticClass: "mt-3",
                          attrs: {
                            "append-icon": _vm.showPassword
                              ? "mdi-eye"
                              : "mdi-eye-off",
                            type: _vm.showPassword ? "text" : "password",
                            label: _vm.$t("Password"),
                            outlined: "",
                            "hide-details": "",
                          },
                          on: {
                            "click:append": function ($event) {
                              _vm.showPassword = !_vm.showPassword
                            },
                          },
                          model: {
                            value: _vm.password,
                            callback: function ($$v) {
                              _vm.password = $$v
                            },
                            expression: "password",
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-row",
                  {
                    staticClass: "py-3",
                    attrs: { justify: "end", align: "center" },
                  },
                  [
                    _c(
                      "v-col",
                      { attrs: { cols: "12" } },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: {
                              block: "",
                              loading: _vm.loading,
                              color: "primary",
                              disabled: _vm.loading,
                            },
                            on: { click: _vm.login },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "loader",
                                  fn: function () {
                                    return [
                                      _c(
                                        "span",
                                        { staticClass: "custom-loader" },
                                        [
                                          _c("v-icon", [
                                            _vm._v("$vuetify.icons.cached"),
                                          ]),
                                        ],
                                        1
                                      ),
                                    ]
                                  },
                                  proxy: true,
                                },
                              ],
                              null,
                              false,
                              1624374772
                            ),
                          },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.$t("Login")) +
                                "\n                        "
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("v-row", { staticClass: "text-center" }, [
                  _c("div", { staticClass: "link-text flex-grow-1" }, [
                    _c(
                      "span",
                      {
                        staticClass: "text",
                        on: {
                          click: function ($event) {
                            return _vm.$router.push({ name: "forgot_password" })
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.$t("Forgot your password?")) +
                            "\n                    "
                        ),
                      ]
                    ),
                  ]),
                ]),
                _vm._v(" "),
                (_vm.$store.getters.getSettings.facebook_oauth_client_id &&
                  _vm.$store.getters.getSettings.enableFacebookLogin) ||
                (_vm.$store.getters.getSettings.enableGoogleLogin &&
                  _vm.$store.getters.getSettings.google_oauth_client_id)
                  ? _c(
                      "div",
                      { staticClass: "justify-center mt-2" },
                      [
                        _c(
                          "v-container",
                          [
                            _c(
                              "v-row",
                              [
                                _c("v-col", { attrs: { cols: "12" } }, [
                                  _c(
                                    "div",
                                    { staticClass: "divider divider__small" },
                                    [
                                      _c(
                                        "strong",
                                        { staticClass: "divider__text" },
                                        [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(_vm.$t("Or")) +
                                              "\n                                "
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("v-col", { attrs: { cols: "12" } }, [
                                  _c(
                                    "div",
                                    { staticClass: "justify-center" },
                                    [
                                      _vm.$store.getters.getSettings
                                        .facebook_oauth_client_id
                                        ? _c("v-facebook-login-scope", {
                                            attrs: {
                                              "app-id":
                                                _vm.$store.getters.getSettings
                                                  .facebook_oauth_client_id,
                                            },
                                            on: {
                                              login: function ($event) {
                                                return _vm.logInWithFacebook(
                                                  $event
                                                )
                                              },
                                              "sdk-init": _vm.handleSdkInit,
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (scope) {
                                                    return _c(
                                                      "v-btn",
                                                      {
                                                        staticClass: "px-2",
                                                        attrs: {
                                                          color: "#3578E5",
                                                          dark: "",
                                                        },
                                                        on: {
                                                          click: scope.login,
                                                        },
                                                      },
                                                      [
                                                        _c(
                                                          "v-icon",
                                                          {
                                                            attrs: { left: "" },
                                                          },
                                                          [
                                                            _vm._v(
                                                              "$vuetify.icons.facebook"
                                                            ),
                                                          ]
                                                        ),
                                                        _vm._v(
                                                          "\n                                        " +
                                                            _vm._s(
                                                              _vm.$t("Sign In")
                                                            ) +
                                                            "\n                                    "
                                                        ),
                                                      ],
                                                      1
                                                    )
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              1510794119
                                            ),
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.$store.getters.getSettings
                                        .enableGoogleLogin
                                        ? _c(
                                            "div",
                                            { staticClass: "justify-center" },
                                            [
                                              _vm.$store.getters.getSettings
                                                .google_oauth_client_id
                                                ? _c("div", {
                                                    staticClass:
                                                      "g-signin2 px-2",
                                                    attrs: {
                                                      "data-onsuccess":
                                                        "onSignIn",
                                                    },
                                                  })
                                                : _vm._e(),
                                            ]
                                          )
                                        : _vm._e(),
                                    ],
                                    1
                                  ),
                                ]),
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
                _vm._v(" "),
                _c("div", { staticClass: "divider wide-divider" }),
                _vm._v(" "),
                !_vm.$store.getters.getSettings.disableRegistration
                  ? _c("div", [
                      _c("div", [
                        _c("div", { staticClass: "bold text-center" }, [
                          _c("h3", [
                            _vm._v(
                              _vm._s(_vm.$t("You do not have an account yet?"))
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "signup-button-con text-center mt-4" },
                          [
                            _c(
                              "v-btn",
                              {
                                attrs: { color: "primary", outlined: "" },
                                on: { click: _vm.goRegister },
                              },
                              [_vm._v(_vm._s(_vm.$t("Open New Account")))]
                            ),
                          ],
                          1
                        ),
                      ]),
                    ])
                  : _vm._e(),
              ],
              1
            ),
          ],
          1
        ),
      ])
    : _c("LoadingBackground")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/authentication/Register.vue?vue&type=template&id=31b792ff&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/authentication/Register.vue?vue&type=template&id=31b792ff& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c("authentification-template", [
    _c(
      "div",
      { staticClass: "register-wrapper" },
      [
        _c("div", { staticClass: "auth-box__title" }, [
          _c("h2", [_vm._v(_vm._s(_vm.$t("Create An Account")))]),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "error-message-container" },
          [
            _vm.error && !_vm.success
              ? _c(
                  "v-alert",
                  {
                    staticClass: "ma-2",
                    attrs: { type: "error", "text-color": "white", dense: "" },
                  },
                  [_vm._v("\n        " + _vm._s(_vm.error) + "\n      ")]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.success
              ? _c(
                  "v-alert",
                  {
                    staticClass: "ma-2",
                    attrs: {
                      icon: "$vuetify.icons.checkbox-marked-circle-outline",
                      dense: "",
                      type: "success",
                      "text-color": "white",
                    },
                  },
                  [_vm._v("\n        " + _vm._s(_vm.success) + "\n      ")]
                )
              : _vm._e(),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "v-container",
          [
            _c(
              "v-row",
              [
                _c(
                  "v-col",
                  { staticClass: "auth-box__inputs", attrs: { cols: "12" } },
                  [
                    _c("v-text-field", {
                      attrs: {
                        rules: [_vm.rules.required],
                        label: _vm.$t("Name"),
                        outlined: "",
                      },
                      model: {
                        value: _vm.name,
                        callback: function ($$v) {
                          _vm.name = $$v
                        },
                        expression: "name",
                      },
                    }),
                    _vm._v(" "),
                    _c("v-text-field", {
                      attrs: {
                        rules: [_vm.rules.required],
                        label: _vm.$t("Email"),
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
                      staticClass: "input-group--focused",
                      attrs: {
                        rules: [_vm.rules.required, _vm.rules.min],
                        type: _vm.showPassword1 ? "text" : "password",
                        name: "input-10-2",
                        label: _vm.$t("Password"),
                        hint: _vm.$t("At least 8 characters"),
                        outlined: "",
                      },
                      on: {
                        "click:append": function ($event) {
                          _vm.showPassword1 = !_vm.showPassword1
                        },
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "append",
                          fn: function () {
                            return [
                              _vm.showPassword1
                                ? _c("v-icon", [
                                    _vm._v(
                                      "\n                $vuetify.icons.eye-outline\n              "
                                    ),
                                  ])
                                : _c("v-icon", [
                                    _vm._v(" $vuetify.icons.eye-outline-off "),
                                  ]),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                      model: {
                        value: _vm.password1,
                        callback: function ($$v) {
                          _vm.password1 = $$v
                        },
                        expression: "password1",
                      },
                    }),
                    _vm._v(" "),
                    _c("v-text-field", {
                      staticClass: "input-group--focused",
                      attrs: {
                        "append-icon": _vm.showPassword2
                          ? "$vuetify.icons.eye-outline"
                          : "$vuetify.icons.eye-outline-off",
                        rules: [_vm.rules.required],
                        type: _vm.showPassword2 ? "text" : "password",
                        name: "input-10-2",
                        label: _vm.$t("Confirm Password"),
                        outlined: "",
                      },
                      on: {
                        paste: function ($event) {
                          $event.preventDefault()
                        },
                        "click:append": function ($event) {
                          _vm.showPassword2 = !_vm.showPassword2
                        },
                      },
                      model: {
                        value: _vm.password2,
                        callback: function ($$v) {
                          _vm.password2 = $$v
                        },
                        expression: "password2",
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "v-row",
              { staticClass: "py-3", attrs: { align: "center" } },
              [
                _c(
                  "v-col",
                  { attrs: { cols: "12" } },
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: {
                          block: "",
                          loading: _vm.loading,
                          color: "primary",
                          disabled: Boolean(_vm.loading || _vm.success),
                        },
                        on: { click: _vm.register },
                        scopedSlots: _vm._u([
                          {
                            key: "loader",
                            fn: function () {
                              return [
                                _c(
                                  "span",
                                  { staticClass: "custom-loader" },
                                  [
                                    _c("v-icon", [
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
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.$t("Register")) +
                            "\n            "
                        ),
                      ]
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
            _vm._v(" "),
            _vm.$store.getters.getSettings.facebook_oauth_client_id ||
            _vm.$store.getters.getSettings.facebook_oauth_client_id
              ? _c("div", { staticClass: "center-content" }, [
                  _c("div", { staticClass: "divider divider__small" }, [
                    _c("strong", { staticClass: "divider__text" }, [
                      _vm._v(" " + _vm._s(_vm.$t("Or")) + " "),
                    ]),
                  ]),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.$store.getters.getSettings.facebook_oauth_client_id ||
            _vm.$store.getters.getSettings.facebook_oauth_client_id
              ? _c(
                  "v-row",
                  { staticClass: "text-center" },
                  [
                    _c("v-col", [
                      _c(
                        "div",
                        { staticClass: "justify-center" },
                        [
                          _vm.$store.getters.getSettings
                            .facebook_oauth_client_id
                            ? _c("v-facebook-login-scope", {
                                attrs: {
                                  "app-id":
                                    _vm.$store.getters.getSettings
                                      .facebook_oauth_client_id,
                                },
                                on: {
                                  login: function ($event) {
                                    return _vm.logInWithFacebook($event)
                                  },
                                  "sdk-init": _vm.handleSdkInit,
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function (scope) {
                                        return _c(
                                          "v-btn",
                                          {
                                            staticClass: "px-2",
                                            attrs: {
                                              color: "#3578E5",
                                              dark: "",
                                            },
                                            on: { click: scope.login },
                                          },
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { left: "" } },
                                              [
                                                _vm._v(
                                                  "$vuetify.icons.facebook"
                                                ),
                                              ]
                                            ),
                                            _vm._v(
                                              "\n                " +
                                                _vm._s(_vm.$t("Sign In")) +
                                                "\n              "
                                            ),
                                          ],
                                          1
                                        )
                                      },
                                    },
                                  ],
                                  null,
                                  false,
                                  1370040071
                                ),
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.$store.getters.getSettings
                            .facebook_oauth_client_id
                            ? _c("div", {
                                staticClass: "g-signin2 px-2",
                                attrs: { "data-onsuccess": "onSignIn" },
                              })
                            : _vm._e(),
                        ],
                        1
                      ),
                    ]),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "divider wide-divider" }),
            _vm._v(" "),
            _c("div", [
              _c("div", [
                _c("div", { staticClass: "bold text-center" }, [
                  _c("h3", [
                    _vm._v(_vm._s(_vm.$t("Already have an account?"))),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "signup-button-con text-center mt-4" },
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: {
                          color: _vm.success ? "success" : "primary",
                          outlined: !_vm.success,
                        },
                        on: { click: _vm.goLogin },
                      },
                      [_vm._v(_vm._s(_vm.$t("Login to your account")))]
                    ),
                  ],
                  1
                ),
              ]),
            ]),
            _vm._v(" "),
            _vm.$store.getters.getSettings.account_agreement
              ? [
                  _c("div", { staticClass: "divider wide-divider" }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "agreement text-center",
                    domProps: {
                      innerHTML: _vm._s(
                        _vm.$store.getters.getSettings.account_agreement
                      ),
                    },
                  }),
                ]
              : _vm._e(),
          ],
          2
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/authentication/ResetPassword.vue?vue&type=template&id=f5c76c44&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/authentication/ResetPassword.vue?vue&type=template&id=f5c76c44& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _c("authentification-template", [
    _c(
      "div",
      { staticClass: "login-wrapper" },
      [
        _c("div", { staticClass: "auth-box__title" }, [
          _c("h2", [_vm._v(_vm._s(_vm.$t("Reset your password")))]),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "error-message-container" },
          [
            _vm.error
              ? _c(
                  "v-chip",
                  {
                    staticClass: "ma-2",
                    attrs: { color: "red", label: "", "text-color": "white" },
                  },
                  [
                    _c("v-icon", { attrs: { left: "" } }, [
                      _vm._v("$vuetify.icons.alert"),
                    ]),
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.error) +
                        "\n            "
                    ),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.success
              ? _c(
                  "v-chip",
                  {
                    staticClass: "ma-2",
                    attrs: {
                      color: "success",
                      label: "",
                      "text-color": "white",
                    },
                  },
                  [
                    _c("v-icon", { attrs: { left: "" } }, [
                      _vm._v("$vuetify.icons.checkmark"),
                    ]),
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.success) +
                        "\n            "
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
          "v-container",
          [
            _c(
              "v-row",
              [
                _c(
                  "v-col",
                  { staticClass: "auth-box__inputs", attrs: { cols: "12" } },
                  [
                    _c("v-text-field", {
                      attrs: {
                        light: "",
                        label: _vm.$t("Email"),
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
                        type: "password",
                        light: "",
                        label: _vm.$t("New Password"),
                        outlined: "",
                      },
                      model: {
                        value: _vm.password,
                        callback: function ($$v) {
                          _vm.password = $$v
                        },
                        expression: "password",
                      },
                    }),
                    _vm._v(" "),
                    _c("v-text-field", {
                      attrs: {
                        type: "password",
                        light: "",
                        label: _vm.$t("Confirm Password"),
                        outlined: "",
                      },
                      model: {
                        value: _vm.password_confirmation,
                        callback: function ($$v) {
                          _vm.password_confirmation = $$v
                        },
                        expression: "password_confirmation",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-col",
                  { attrs: { cols: "12" } },
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: {
                          block: "",
                          loading: _vm.loading,
                          color: "primary",
                          disabled: _vm.loading,
                        },
                        on: { click: _vm.resetPassword },
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
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.$t("Reset")) +
                            "\n                        "
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
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Authentication.vue?vue&type=template&id=e10eaf0e&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Authentication.vue?vue&type=template&id=e10eaf0e& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "auth-page-wrapper" }, [
    _c(
      "div",
      { staticClass: "white-layer" },
      [
        _c(
          "v-card",
          { staticClass: "auth-box", attrs: { elevation: "8" } },
          [
            _c("div", { staticClass: "align-justify-center" }, [
              _c(
                "a",
                { staticClass: "logo-img-container", attrs: { href: "/" } },
                [
                  _c("img", {
                    attrs: {
                      src: _vm.$store.getters.getSettings.appLogo,
                      alt: _vm.$t("Logo Image"),
                    },
                  }),
                ]
              ),
            ]),
            _vm._v(" "),
            _vm._t("default"),
          ],
          2
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/LoadingBackground.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/LoadingBackground.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoadingBackground_vue_vue_type_template_id_c67ca0a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingBackground.vue?vue&type=template&id=c67ca0a2& */ "./resources/js/components/LoadingBackground.vue?vue&type=template&id=c67ca0a2&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _LoadingBackground_vue_vue_type_template_id_c67ca0a2___WEBPACK_IMPORTED_MODULE_0__.render,
  _LoadingBackground_vue_vue_type_template_id_c67ca0a2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/LoadingBackground.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/authentication/CompleteSignup.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/authentication/CompleteSignup.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CompleteSignup_vue_vue_type_template_id_a80cabe6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompleteSignup.vue?vue&type=template&id=a80cabe6& */ "./resources/js/components/authentication/CompleteSignup.vue?vue&type=template&id=a80cabe6&");
/* harmony import */ var _CompleteSignup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompleteSignup.vue?vue&type=script&lang=js& */ "./resources/js/components/authentication/CompleteSignup.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/VChip.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VContainer.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CompleteSignup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompleteSignup_vue_vue_type_template_id_a80cabe6___WEBPACK_IMPORTED_MODULE_0__.render,
  _CompleteSignup_vue_vue_type_template_id_a80cabe6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
;






_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_4__["default"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["default"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["default"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__["default"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["default"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/authentication/CompleteSignup.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/authentication/ForgotPassword.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/authentication/ForgotPassword.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ForgotPassword_vue_vue_type_template_id_70967aba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=template&id=70967aba& */ "./resources/js/components/authentication/ForgotPassword.vue?vue&type=template&id=70967aba&");
/* harmony import */ var _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=script&lang=js& */ "./resources/js/components/authentication/ForgotPassword.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/VChip.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VContainer.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ForgotPassword_vue_vue_type_template_id_70967aba___WEBPACK_IMPORTED_MODULE_0__.render,
  _ForgotPassword_vue_vue_type_template_id_70967aba___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
;







_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["default"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_5__["default"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["default"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__["default"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["default"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_10__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/authentication/ForgotPassword.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/authentication/Login.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/authentication/Login.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_093970bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=093970bd& */ "./resources/js/components/authentication/Login.vue?vue&type=template&id=093970bd&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/components/authentication/Login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/VChip.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VContainer.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_093970bd___WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_093970bd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
;







_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["default"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_5__["default"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["default"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__["default"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["default"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_10__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/authentication/Login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/authentication/Register.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/authentication/Register.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_31b792ff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=31b792ff& */ "./resources/js/components/authentication/Register.vue?vue&type=template&id=31b792ff&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/components/authentication/Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAlert */ "./node_modules/vuetify/lib/components/VAlert/VAlert.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VContainer.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_31b792ff___WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_31b792ff___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
;







_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAlert: vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__["default"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["default"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["default"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__["default"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["default"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_10__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/authentication/Register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/authentication/ResetPassword.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/authentication/ResetPassword.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ResetPassword_vue_vue_type_template_id_f5c76c44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=template&id=f5c76c44& */ "./resources/js/components/authentication/ResetPassword.vue?vue&type=template&id=f5c76c44&");
/* harmony import */ var _ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=script&lang=js& */ "./resources/js/components/authentication/ResetPassword.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/VChip.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VContainer.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResetPassword_vue_vue_type_template_id_f5c76c44___WEBPACK_IMPORTED_MODULE_0__.render,
  _ResetPassword_vue_vue_type_template_id_f5c76c44___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
;







_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["default"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_5__["default"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["default"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__["default"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["default"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_10__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/authentication/ResetPassword.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/templates/Authentication.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/templates/Authentication.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Authentication_vue_vue_type_template_id_e10eaf0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Authentication.vue?vue&type=template&id=e10eaf0e& */ "./resources/js/components/templates/Authentication.vue?vue&type=template&id=e10eaf0e&");
/* harmony import */ var _Authentication_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Authentication.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/templates/Authentication.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");

var script = {}
;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _Authentication_vue_vue_type_template_id_e10eaf0e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Authentication_vue_vue_type_template_id_e10eaf0e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
;

_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/templates/Authentication.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VAlert/VAlert.js":
/*!**************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VAlert/VAlert.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_components_VAlert_VAlert_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VAlert/VAlert.sass */ "./node_modules/vuetify/src/components/VAlert/VAlert.sass");
/* harmony import */ var _VSheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../VSheet */ "./node_modules/vuetify/lib/components/VSheet/index.js");
/* harmony import */ var _VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/toggleable */ "./node_modules/vuetify/lib/mixins/toggleable/index.js");
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mixins/themeable */ "./node_modules/vuetify/lib/mixins/themeable/index.js");
/* harmony import */ var _mixins_transitionable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/transitionable */ "./node_modules/vuetify/lib/mixins/transitionable/index.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../util/console */ "./node_modules/vuetify/lib/util/console.js");
// Styles
 // Extensions

 // Components


 // Mixins



 // Utilities



/* @vue/component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_util_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])(_VSheet__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_3__["default"], _mixins_transitionable__WEBPACK_IMPORTED_MODULE_4__["default"]).extend({
  name: 'v-alert',
  props: {
    border: {
      type: String,

      validator(val) {
        return ['top', 'right', 'bottom', 'left'].includes(val);
      }

    },
    closeLabel: {
      type: String,
      default: '$vuetify.close'
    },
    coloredBorder: Boolean,
    dense: Boolean,
    dismissible: Boolean,
    closeIcon: {
      type: String,
      default: '$cancel'
    },
    icon: {
      default: '',
      type: [Boolean, String],

      validator(val) {
        return typeof val === 'string' || val === false;
      }

    },
    outlined: Boolean,
    prominent: Boolean,
    text: Boolean,
    type: {
      type: String,

      validator(val) {
        return ['info', 'error', 'success', 'warning'].includes(val);
      }

    },
    value: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    __cachedBorder() {
      if (!this.border) return null;
      let data = {
        staticClass: 'v-alert__border',
        class: {
          [`v-alert__border--${this.border}`]: true
        }
      };

      if (this.coloredBorder) {
        data = this.setBackgroundColor(this.computedColor, data);
        data.class['v-alert__border--has-color'] = true;
      }

      return this.$createElement('div', data);
    },

    __cachedDismissible() {
      if (!this.dismissible) return null;
      const color = this.iconColor;
      return this.$createElement(_VBtn__WEBPACK_IMPORTED_MODULE_5__["default"], {
        staticClass: 'v-alert__dismissible',
        props: {
          color,
          icon: true,
          small: true
        },
        attrs: {
          'aria-label': this.$vuetify.lang.t(this.closeLabel)
        },
        on: {
          click: () => this.isActive = false
        }
      }, [this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
        props: {
          color
        }
      }, this.closeIcon)]);
    },

    __cachedIcon() {
      if (!this.computedIcon) return null;
      return this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
        staticClass: 'v-alert__icon',
        props: {
          color: this.iconColor
        }
      }, this.computedIcon);
    },

    classes() {
      const classes = { ..._VSheet__WEBPACK_IMPORTED_MODULE_2__["default"].options.computed.classes.call(this),
        'v-alert--border': Boolean(this.border),
        'v-alert--dense': this.dense,
        'v-alert--outlined': this.outlined,
        'v-alert--prominent': this.prominent,
        'v-alert--text': this.text
      };

      if (this.border) {
        classes[`v-alert--border-${this.border}`] = true;
      }

      return classes;
    },

    computedColor() {
      return this.color || this.type;
    },

    computedIcon() {
      if (this.icon === false) return false;
      if (typeof this.icon === 'string' && this.icon) return this.icon;
      if (!['error', 'info', 'success', 'warning'].includes(this.type)) return false;
      return `$${this.type}`;
    },

    hasColoredIcon() {
      return this.hasText || Boolean(this.border) && this.coloredBorder;
    },

    hasText() {
      return this.text || this.outlined;
    },

    iconColor() {
      return this.hasColoredIcon ? this.computedColor : undefined;
    },

    isDark() {
      if (this.type && !this.coloredBorder && !this.outlined) return true;
      return _mixins_themeable__WEBPACK_IMPORTED_MODULE_7__["default"].options.computed.isDark.call(this);
    }

  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('outline')) {
      (0,_util_console__WEBPACK_IMPORTED_MODULE_8__.breaking)('outline', 'outlined', this);
    }
  },

  methods: {
    genWrapper() {
      const children = [this.$slots.prepend || this.__cachedIcon, this.genContent(), this.__cachedBorder, this.$slots.append, this.$scopedSlots.close ? this.$scopedSlots.close({
        toggle: this.toggle
      }) : this.__cachedDismissible];
      const data = {
        staticClass: 'v-alert__wrapper'
      };
      return this.$createElement('div', data, children);
    },

    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-alert__content'
      }, this.$slots.default);
    },

    genAlert() {
      let data = {
        staticClass: 'v-alert',
        attrs: {
          role: 'alert'
        },
        on: this.listeners$,
        class: this.classes,
        style: this.styles,
        directives: [{
          name: 'show',
          value: this.isActive
        }]
      };

      if (!this.coloredBorder) {
        const setColor = this.hasText ? this.setTextColor : this.setBackgroundColor;
        data = setColor(this.computedColor, data);
      }

      return this.$createElement('div', data, [this.genWrapper()]);
    },

    /** @public */
    toggle() {
      this.isActive = !this.isActive;
    }

  },

  render(h) {
    const render = this.genAlert();
    if (!this.transition) return render;
    return h('transition', {
      props: {
        name: this.transition,
        origin: this.origin,
        mode: this.mode
      }
    }, [render]);
  }

}));
//# sourceMappingURL=VAlert.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/transitionable/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/transitionable/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  name: 'transitionable',
  props: {
    mode: String,
    origin: String,
    transition: String
  }
}));
//# sourceMappingURL=index.js.map

/***/ })

}]);