"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/HouseCard.tsx":
/*!**********************************!*\
  !*** ./components/HouseCard.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n// Map textual color descriptions to CSS color values\nvar colorMap = {\n    \"Scarlet\": \"#FF2400\",\n    \"gold\": \"#FFD700\"\n};\nvar HouseCard = function(param) {\n    var house = param.house;\n    // Parse textual description and map to CSS color values\n    var colors = house.houseColours.split(\" and \").map(function(color) {\n        return color.trim();\n    }).map(function(color) {\n        return colorMap[color];\n    });\n    var gradient = \"linear-gradient(to right, \".concat(colors.join(\", \"), \")\");\n    var barStyle = {\n        height: \"10px\",\n        width: \"100%\",\n        background: gradient,\n        marginBottom: \"10px\"\n    };\n    var boxStyle = {\n        border: \"1px solid #ccc\",\n        padding: \"10px\",\n        borderRadius: \"5px\",\n        position: \"relative\",\n        marginBottom: \"20px\"\n    };\n    var animalStyle = {\n        position: \"absolute\",\n        top: \"5px\",\n        right: \"5px\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"house-card\",\n        style: boxStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: house.name\n            }, void 0, false, {\n                fileName: \"/Users/alexnadroskoutsantoniou/Desktop/Pircel/wizard-world/frontend/components/HouseCard.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: barStyle\n            }, void 0, false, {\n                fileName: \"/Users/alexnadroskoutsantoniou/Desktop/Pircel/wizard-world/frontend/components/HouseCard.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Founder: \",\n                    house.founder\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alexnadroskoutsantoniou/Desktop/Pircel/wizard-world/frontend/components/HouseCard.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: animalStyle,\n                children: [\n                    \"Animal: \",\n                    house.animal\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alexnadroskoutsantoniou/Desktop/Pircel/wizard-world/frontend/components/HouseCard.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alexnadroskoutsantoniou/Desktop/Pircel/wizard-world/frontend/components/HouseCard.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, _this);\n};\n_c = HouseCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HouseCard);\nvar _c;\n$RefreshReg$(_c, \"HouseCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvdXNlQ2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBMEI7QUFhMUIscURBQXFEO0FBQ3JELElBQU1DLFFBQVEsR0FBOEI7SUFDMUMsU0FBUyxFQUFFLFNBQVM7SUFDcEIsTUFBTSxFQUFFLFNBQVM7Q0FFbEI7QUFFRCxJQUFNQyxTQUFTLEdBQTZCLGdCQUFlO1FBQVpDLEtBQUssU0FBTEEsS0FBSztJQUNsRCx3REFBd0Q7SUFDeEQsSUFBTUMsTUFBTSxHQUFHRCxLQUFLLENBQUNFLFlBQVksQ0FDOUJDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FDZEMsR0FBRyxDQUFDQyxTQUFBQSxLQUFLO2VBQUlBLEtBQUssQ0FBQ0MsSUFBSSxFQUFFO0tBQUEsQ0FBQyxDQUMxQkYsR0FBRyxDQUFDQyxTQUFBQSxLQUFLO2VBQUlQLFFBQVEsQ0FBQ08sS0FBSyxDQUFDO0tBQUEsQ0FBQztJQUVoQyxJQUFNRSxRQUFRLEdBQUcsNEJBQTJCLENBQW9CLE1BQUMsQ0FBbkJOLE1BQU0sQ0FBQ08sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUMsQ0FBQztJQUVsRSxJQUFNQyxRQUFRLEdBQXdCO1FBQ3BDQyxNQUFNLEVBQUUsTUFBTTtRQUNkQyxLQUFLLEVBQUUsTUFBTTtRQUNiQyxVQUFVLEVBQUVMLFFBQVE7UUFDcEJNLFlBQVksRUFBRSxNQUFNO0tBQ3JCO0lBRUQsSUFBTUMsUUFBUSxHQUF3QjtRQUNwQ0MsTUFBTSxFQUFFLGdCQUFnQjtRQUN4QkMsT0FBTyxFQUFFLE1BQU07UUFDZkMsWUFBWSxFQUFFLEtBQUs7UUFDbkJDLFFBQVEsRUFBRSxVQUFVO1FBQ3BCTCxZQUFZLEVBQUUsTUFBTTtLQUNyQjtJQUVELElBQU1NLFdBQVcsR0FBd0I7UUFDdkNELFFBQVEsRUFBRSxVQUFVO1FBQ3BCRSxHQUFHLEVBQUUsS0FBSztRQUNWQyxLQUFLLEVBQUUsS0FBSztLQUNiO0lBRUQscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFlBQVk7UUFBQ0MsS0FBSyxFQUFFVixRQUFROzswQkFDekMsOERBQUNXLElBQUU7MEJBQUV6QixLQUFLLENBQUMwQixJQUFJOzs7OztxQkFBTTswQkFDckIsOERBQUNKLEtBQUc7Z0JBQUNFLEtBQUssRUFBRWYsUUFBUTs7Ozs7cUJBQVE7MEJBQzVCLDhEQUFDa0IsR0FBQzs7b0JBQUMsV0FBUztvQkFBQzNCLEtBQUssQ0FBQzRCLE9BQU87Ozs7OztxQkFBSzswQkFDL0IsOERBQUNELEdBQUM7Z0JBQUNILEtBQUssRUFBRUwsV0FBVzs7b0JBQUUsVUFBUTtvQkFBQ25CLEtBQUssQ0FBQzZCLE1BQU07Ozs7OztxQkFBSzs7Ozs7O2FBQzdDLENBQ047QUFDSixDQUFDO0FBdENLOUIsS0FBQUEsU0FBUztBQXdDZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSG91c2VDYXJkLnRzeD8yOWE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBIb3VzZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgaG91c2VDb2xvdXJzOiBzdHJpbmc7IC8vIFRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgY29sb3JzXG4gIGZvdW5kZXI6IHN0cmluZztcbiAgYW5pbWFsOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBIb3VzZUNhcmRQcm9wcyB7XG4gIGhvdXNlOiBIb3VzZTtcbn1cblxuLy8gTWFwIHRleHR1YWwgY29sb3IgZGVzY3JpcHRpb25zIHRvIENTUyBjb2xvciB2YWx1ZXNcbmNvbnN0IGNvbG9yTWFwOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge1xuICAnU2NhcmxldCc6ICcjRkYyNDAwJyxcbiAgJ2dvbGQnOiAnI0ZGRDcwMCcsXG4gIC8vIEFkZCBtb3JlIGNvbG9yIG1hcHBpbmdzIGFzIG5lZWRlZFxufTtcblxuY29uc3QgSG91c2VDYXJkOiBSZWFjdC5GQzxIb3VzZUNhcmRQcm9wcz4gPSAoeyBob3VzZSB9KSA9PiB7XG4gIC8vIFBhcnNlIHRleHR1YWwgZGVzY3JpcHRpb24gYW5kIG1hcCB0byBDU1MgY29sb3IgdmFsdWVzXG4gIGNvbnN0IGNvbG9ycyA9IGhvdXNlLmhvdXNlQ29sb3Vyc1xuICAgIC5zcGxpdCgnIGFuZCAnKVxuICAgIC5tYXAoY29sb3IgPT4gY29sb3IudHJpbSgpKVxuICAgIC5tYXAoY29sb3IgPT4gY29sb3JNYXBbY29sb3JdKTtcblxuICBjb25zdCBncmFkaWVudCA9IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICR7Y29sb3JzLmpvaW4oJywgJyl9KWA7XG5cbiAgY29uc3QgYmFyU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgaGVpZ2h0OiAnMTBweCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBiYWNrZ3JvdW5kOiBncmFkaWVudCxcbiAgICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcbiAgfTtcblxuICBjb25zdCBib3hTdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2NjYycsXG4gICAgcGFkZGluZzogJzEwcHgnLFxuICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgbWFyZ2luQm90dG9tOiAnMjBweCcsXG4gIH07XG5cbiAgY29uc3QgYW5pbWFsU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnNXB4JyxcbiAgICByaWdodDogJzVweCcsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdXNlLWNhcmRcIiBzdHlsZT17Ym94U3R5bGV9PlxuICAgICAgPGgyPntob3VzZS5uYW1lfTwvaDI+XG4gICAgICA8ZGl2IHN0eWxlPXtiYXJTdHlsZX0+PC9kaXY+XG4gICAgICA8cD5Gb3VuZGVyOiB7aG91c2UuZm91bmRlcn08L3A+XG4gICAgICA8cCBzdHlsZT17YW5pbWFsU3R5bGV9PkFuaW1hbDoge2hvdXNlLmFuaW1hbH08L3A+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb3VzZUNhcmQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwiY29sb3JNYXAiLCJIb3VzZUNhcmQiLCJob3VzZSIsImNvbG9ycyIsImhvdXNlQ29sb3VycyIsInNwbGl0IiwibWFwIiwiY29sb3IiLCJ0cmltIiwiZ3JhZGllbnQiLCJqb2luIiwiYmFyU3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsImJhY2tncm91bmQiLCJtYXJnaW5Cb3R0b20iLCJib3hTdHlsZSIsImJvcmRlciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJwb3NpdGlvbiIsImFuaW1hbFN0eWxlIiwidG9wIiwicmlnaHQiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImgyIiwibmFtZSIsInAiLCJmb3VuZGVyIiwiYW5pbWFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/HouseCard.tsx\n"));

/***/ })

});