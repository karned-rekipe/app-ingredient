"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/addIngredientForm.tsx":
/*!**********************************************!*\
  !*** ./app/components/addIngredientForm.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// components/AddIngredientForm.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst AddIngredientForm = (param)=>{\n    let { onAddIngredient } = param;\n    _s();\n    const [label, setLabel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (!label.trim()) return;\n        const newIngredient = {\n            _id: Date.now(),\n            label\n        };\n        onAddIngredient(newIngredient);\n        setLabel(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: label,\n                onChange: (e)=>setLabel(e.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/maleho/dev/koden/karden/app-ingredient/app/components/addIngredientForm.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Add Ingredient\"\n            }, void 0, false, {\n                fileName: \"/Users/maleho/dev/koden/karden/app-ingredient/app/components/addIngredientForm.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/maleho/dev/koden/karden/app-ingredient/app/components/addIngredientForm.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddIngredientForm, \"aN9moGwwwdIpBS7DjkSrdwGFAWI=\");\n_c = AddIngredientForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddIngredientForm);\nvar _c;\n$RefreshReg$(_c, \"AddIngredientForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2FkZEluZ3JlZGllbnRGb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsbUNBQW1DOzs7QUFJRjtBQU1qQyxNQUFNQyxvQkFBc0Q7UUFBQyxFQUFFQyxlQUFlLEVBQUU7O0lBQzlFLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNSyxlQUFlLENBQUNDO1FBQ3BCQSxFQUFFQyxjQUFjO1FBQ2hCLElBQUksQ0FBQ0osTUFBTUssSUFBSSxJQUFJO1FBQ25CLE1BQU1DLGdCQUFnQjtZQUFFQyxLQUFLQyxLQUFLQyxHQUFHO1lBQUlUO1FBQU07UUFDL0NELGdCQUFnQk87UUFDaEJMLFNBQVM7SUFDWDtJQUVBLHFCQUNFLDhEQUFDUztRQUFLQyxVQUFVVDs7MEJBQ2QsOERBQUNVO2dCQUFNQyxNQUFLO2dCQUFPQyxPQUFPZDtnQkFBT2UsVUFBVSxDQUFDWixJQUFNRixTQUFTRSxFQUFFYSxNQUFNLENBQUNGLEtBQUs7Ozs7OzswQkFDekUsOERBQUNHO2dCQUFPSixNQUFLOzBCQUFTOzs7Ozs7Ozs7Ozs7QUFHNUI7R0FqQk1mO0tBQUFBO0FBbUJOLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvYWRkSW5ncmVkaWVudEZvcm0udHN4PzVlZjgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9BZGRJbmdyZWRpZW50Rm9ybS50c3hcblxuXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgQWRkSW5ncmVkaWVudEZvcm1Qcm9wcyB7XG4gIG9uQWRkSW5ncmVkaWVudDogKGluZ3JlZGllbnQ6IHsgX2lkOiBudW1iZXI7IGxhYmVsOiBzdHJpbmcgfSkgPT4gdm9pZDtcbn1cblxuY29uc3QgQWRkSW5ncmVkaWVudEZvcm06IFJlYWN0LkZDPEFkZEluZ3JlZGllbnRGb3JtUHJvcHM+ID0gKHsgb25BZGRJbmdyZWRpZW50IH0pID0+IHtcbiAgY29uc3QgW2xhYmVsLCBzZXRMYWJlbF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIWxhYmVsLnRyaW0oKSkgcmV0dXJuO1xuICAgIGNvbnN0IG5ld0luZ3JlZGllbnQgPSB7IF9pZDogRGF0ZS5ub3coKSwgbGFiZWwgfTtcbiAgICBvbkFkZEluZ3JlZGllbnQobmV3SW5ncmVkaWVudCk7XG4gICAgc2V0TGFiZWwoJycpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bGFiZWx9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TGFiZWwoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWRkIEluZ3JlZGllbnQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRJbmdyZWRpZW50Rm9ybTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkFkZEluZ3JlZGllbnRGb3JtIiwib25BZGRJbmdyZWRpZW50IiwibGFiZWwiLCJzZXRMYWJlbCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJuZXdJbmdyZWRpZW50IiwiX2lkIiwiRGF0ZSIsIm5vdyIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/addIngredientForm.tsx\n"));

/***/ })

});