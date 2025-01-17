"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["textEditor"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/other/TextEditor.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/other/TextEditor.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiptap-vuetify */ "./node_modules/tiptap-vuetify/dist/bundle-esm.js");
/* harmony import */ var tiptap_vuetify_dist_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiptap-vuetify/dist/main.css */ "./node_modules/tiptap-vuetify/dist/main.css");
//
//
//
//
//
//
//
//
//
//
//
//
// import the component and the necessary extensions


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // specify TiptapVuetify component in "components"
  props: ['initialContent', 'placeholder'],
  components: {
    TiptapVuetify: tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__.TiptapVuetify
  },
  data: function data() {
    return {
      // declare extensions you want to use
      extensions: [tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__.History, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__.Blockquote, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__.Link, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__.Underline, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__.Strike, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__.Italic, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__.ListItem, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__.BulletList, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__.OrderedList, [tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__.Heading, {
        options: {
          levels: [1, 2, 3]
        }
      }], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__.Bold, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__.Code, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__.HorizontalRule, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__.Paragraph, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__.HardBreak],
      // starting editor's content
      content: this.initialContent
    };
  },
  computed: {
    contentComp: {
      set: function set(val) {
        this.content = val;
        this.$emit('content', this.content);
      },
      get: function get() {
        return this.content;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/tiptap-vuetify/dist/main.css":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/tiptap-vuetify/dist/main.css ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".tiptap-vuetify-editor__action-render-btn{margin:2px 6px}.tiptap-vuetify-editor__btn-icon.v-icon.fas{font-size:16px}.tiptap-vuetify-editor__toolbar .v-toolbar{display:flex;height:auto!important;padding:5px}.tiptap-vuetify-editor__toolbar .v-toolbar .v-toolbar__content{height:auto!important;flex-wrap:wrap;padding:0}.tiptap-vuetify-editor-pop{position:fixed;z-index:1;opacity:.9!important;transition:transform .1s ease-in-out}.tiptap-vuetify-editor-pop .tiptap-vuetify-editor-pop__popper{background-image:linear-gradient(180deg,rgba(49,49,47,.99),#262625);background-repeat:repeat-x;border-radius:5px;padding:0 10px;color:#fff;line-height:44px;display:inline-block;visibility:hidden;opacity:0;pointer-events:none}.tiptap-vuetify-editor-pop .tiptap-vuetify-editor-pop__popper--visible{visibility:visible;pointer-events:auto;-webkit-animation:pop-upwards .18s linear forwards;animation:pop-upwards .18s linear forwards;-webkit-animation-delay:.2s;animation-delay:.2s;transition:opacity 0s linear .2s}.tiptap-vuetify-editor-pop[x-placement=top]{margin-bottom:7px}.tiptap-vuetify-editor-pop[x-placement=bottom]{margin-top:7px}.tiptap-vuetify-editor-pop[x-placement=bottom] .tiptap-vuetify-editor-pop__popper{background-image:linear-gradient(0deg,rgba(49,49,47,.99),#262625)}[x-arrow]{position:fixed;width:14px;height:14px;background-color:#262625;transform:rotate(45deg);z-index:-1}[x-placement=top] [x-arrow]{margin-bottom:-7px;bottom:0}[x-placement=bottom] [x-arrow]{margin-top:-7px;top:0}@-webkit-keyframes pop-upwards{0%{transform:matrix(.97,0,0,1,0,12);opacity:0}20%{transform:matrix(.99,0,0,1,0,2);opacity:.7}40%{transform:matrix(1,0,0,1,0,-1);opacity:1}70%{transform:matrix(1,0,0,1,0,0);opacity:1}to{transform:matrix(1,0,0,1,0,0);opacity:1}}@keyframes pop-upwards{0%{transform:matrix(.97,0,0,1,0,12);opacity:0}20%{transform:matrix(.99,0,0,1,0,2);opacity:.7}40%{transform:matrix(1,0,0,1,0,-1);opacity:1}70%{transform:matrix(1,0,0,1,0,0);opacity:1}to{transform:matrix(1,0,0,1,0,0);opacity:1}}.tiptap-vuetify-editor{position:relative}.tiptap-vuetify-editor .ProseMirror{outline:0!important;margin:20px!important}.tiptap-vuetify-editor--disabled{cursor:not-allowed}.tiptap-vuetify-editor__content{transition:all 2s;overflow:auto!important;padding:5px}.tiptap-vuetify-editor__content a{pointer-events:none}.tiptap-vuetify-editor__content h1,.tiptap-vuetify-editor__content h2,.tiptap-vuetify-editor__content h3,.tiptap-vuetify-editor__content h4{margin:10px 0 20px!important}.tiptap-vuetify-editor__content blockquote{border-left:.25em solid #dfe2e5;color:#6a737d;padding-left:1em;margin:20px 0!important}.tiptap-vuetify-editor__content code{padding:0 4px!important;margin:0 5px!important}.tiptap-vuetify-editor__content pre code{padding:8px!important;margin:0 5px!important}.tiptap-vuetify-editor__content code:after,.tiptap-vuetify-editor__content code:before{content:none!important;letter-spacing:normal!important}.tiptap-vuetify-editor__content p{margin-top:16px!important;margin-bottom:16px!important;min-height:1rem}.tiptap-vuetify-editor__content p.tiptap-vuetify-editor__paragraph--is-empty:first-child:before{content:attr(data-empty-text);float:left;color:#aaa;pointer-events:none;height:0;font-style:italic}.tiptap-vuetify-editor__content table{border-collapse:collapse;table-layout:fixed;width:100%;margin:0;overflow:hidden}.tiptap-vuetify-editor__content table td,.tiptap-vuetify-editor__content table th{min-width:1em;border:2px solid grey;padding:3px 5px;vertical-align:top;box-sizing:border-box;position:relative}.tiptap-vuetify-editor__content table td>*,.tiptap-vuetify-editor__content table th>*{margin-bottom:0}.tiptap-vuetify-editor__content table th{font-weight:700;text-align:left}.tiptap-vuetify-editor__content table .selectedCell:after{z-index:2;position:absolute;content:\"\";left:0;right:0;top:0;bottom:0;background:rgba(200,200,255,.4);pointer-events:none}.tiptap-vuetify-editor__content table .column-resize-handle{position:absolute;right:-2px;top:0;bottom:0;width:4px;z-index:20;background-color:#adf;pointer-events:none}.tiptap-vuetify-editor__content .tableWrapper{margin:1em 0;overflow-x:auto}.tiptap-vuetify-editor__content .resize-cursor{cursor:col-resize}.tiptap-vuetify-editor__content--disabled{color:rgba(0,0,0,.38)}.tiptap-vuetify-editor__content--disabled:after{background-color:rgba(0,0,0,.06);position:absolute;content:\"\";top:0;left:0;right:0;bottom:0}#tiptap-vuetify-image-upload-area__input-file{display:none}.tiptap-vuetify-image-upload-area-holder{background-color:#c8dadf;height:400px;outline:2px dashed #92b0b3;outline-offset:-10px;transition:all .15s ease-in-out;display:flex!important;justify-content:center;align-items:center}.tiptap-vuetify-image-upload-area-holder--dragover,.tiptap-vuetify-image-upload-area-holder:hover{background-color:#a5b7bc;outline:2px dashed #648083;color:#444;cursor:pointer}.tiptap-vuetify-image-upload-area-holder--dragover .tiptap-vuetify-image-upload-area-holder__icon,.tiptap-vuetify-image-upload-area-holder:hover .tiptap-vuetify-image-upload-area-holder__icon{fill:#5f777a!important}.tiptap-vuetify-image-upload-area-holder .tiptap-vuetify-image-upload-area-holder__icon{width:100%;height:80px;fill:#92b0b3;display:block;margin-bottom:40px;transition:all .15s ease-in-out}.tiptap-vuetify-todo-item-view{display:flex}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/tiptap-vuetify/dist/main.css":
/*!***************************************************!*\
  !*** ./node_modules/tiptap-vuetify/dist/main.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./main.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/tiptap-vuetify/dist/main.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_main_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_main_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/elements/other/TextEditor.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/elements/other/TextEditor.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TextEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/other/TextEditor.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/elements/other/TextEditor.vue?vue&type=template&id=705d9f56&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/elements/other/TextEditor.vue?vue&type=template&id=705d9f56& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextEditor_vue_vue_type_template_id_705d9f56___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextEditor_vue_vue_type_template_id_705d9f56___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextEditor_vue_vue_type_template_id_705d9f56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TextEditor.vue?vue&type=template&id=705d9f56& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/other/TextEditor.vue?vue&type=template&id=705d9f56&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/other/TextEditor.vue?vue&type=template&id=705d9f56&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/other/TextEditor.vue?vue&type=template&id=705d9f56& ***!
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
    "div",
    [
      _c("tiptap-vuetify", {
        attrs: {
          "toolbar-attributes": {
            color: _vm.$vuetify.theme.themes.dark.primary,
            dark: true,
          },
          placeholder: _vm.placeholder,
          extensions: _vm.extensions,
        },
        model: {
          value: _vm.contentComp,
          callback: function ($$v) {
            _vm.contentComp = $$v
          },
          expression: "contentComp",
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/elements/other/TextEditor.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/elements/other/TextEditor.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextEditor_vue_vue_type_template_id_705d9f56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextEditor.vue?vue&type=template&id=705d9f56& */ "./resources/js/components/elements/other/TextEditor.vue?vue&type=template&id=705d9f56&");
/* harmony import */ var _TextEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextEditor.vue?vue&type=script&lang=js& */ "./resources/js/components/elements/other/TextEditor.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TextEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TextEditor_vue_vue_type_template_id_705d9f56___WEBPACK_IMPORTED_MODULE_0__.render,
  _TextEditor_vue_vue_type_template_id_705d9f56___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/elements/other/TextEditor.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ })

}]);