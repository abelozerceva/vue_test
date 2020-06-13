(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(9).default
var update = add("3b9b001b", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_style_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_3_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_2_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DiffList_vue_vue_type_style_index_0_id_135a2ab2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_style_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_3_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_2_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DiffList_vue_vue_type_style_index_0_id_135a2ab2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_style_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_3_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_2_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DiffList_vue_vue_type_style_index_0_id_135a2ab2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_style_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_3_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_2_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DiffList_vue_vue_type_style_index_0_id_135a2ab2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(8);
            var content = __webpack_require__(58);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_component/DiffList.vue?vue&type=template&id=135a2ab2&scoped=true&lang=pug&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content" }, [
    _c("div", { staticClass: "symbol-type" }, [
      _vm._v("Symbol = " + _vm._s(_vm.currentSymbol))
    ]),
    _c("div", { staticClass: "wrapper" }, [
      _c(
        "select",
        {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.currentSymbol,
              expression: "currentSymbol"
            }
          ],
          staticClass: "select",
          on: {
            change: function($event) {
              var $$selectedVal = Array.prototype.filter
                .call($event.target.options, function(o) {
                  return o.selected
                })
                .map(function(o) {
                  var val = "_value" in o ? o._value : o.value
                  return val
                })
              _vm.currentSymbol = $event.target.multiple
                ? $$selectedVal
                : $$selectedVal[0]
            }
          }
        },
        _vm._l(_vm.options, function(item, index) {
          return _c("option", { key: index, staticClass: "select__option" }, [
            _vm._v(_vm._s(item))
          ])
        }),
        0
      ),
      _vm._m(0)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "list" }, [
      _c("li", { staticClass: "list__content" })
    ])
  }
]
render._withStripped = true


// CONCATENATED MODULE: ./src/vue_component/DiffList.vue?vue&type=template&id=135a2ab2&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_component/DiffList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var DiffListvue_type_script_lang_js_ = ({
  name: "DiffList",
  data: () => ({
    options: ["BTCUSDT", "BNBBTC", "ETHBTC"],
    currentSymbol: "BTCUSDT"
  }),
  watch: {
    currentSymbol(symbol) {
      this.$bus.$emit('symbol', symbol);
    }

  }
});
// CONCATENATED MODULE: ./src/vue_component/DiffList.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_component_DiffListvue_type_script_lang_js_ = (DiffListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue_component/DiffList.vue?vue&type=style&index=0&id=135a2ab2&scoped=true&lang=scss&
var DiffListvue_type_style_index_0_id_135a2ab2_scoped_true_lang_scss_ = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/vue_component/DiffList.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  vue_component_DiffListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "135a2ab2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/vue_component/DiffList.vue"
/* harmony default export */ var DiffList = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);