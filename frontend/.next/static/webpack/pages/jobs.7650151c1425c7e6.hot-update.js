"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/jobs",{

/***/ "./src/pages/jobs/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/jobs/index.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst JobsBoard = ()=>{\n    _s();\n    const [jobs, setJobs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [totalJobs, setTotalJobs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [skillLevel, setSkillLevel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [experienceLevel, setExperienceLevel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [totalPages, setTotalPages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchJobs = async ()=>{\n            try {\n                const backendOutgoingsEndpoint = \"http://localhost:3000/api/jobboard?search=\".concat(search, \"&skillLevel=\").concat(skillLevel, \"&experienceLevel=\").concat(experienceLevel, \"&page=\").concat(page);\n                const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(backendOutgoingsEndpoint, {\n                    withCredentials: true\n                });\n                setJobs(response.data.data);\n                setTotalPages(response.data.totalPages);\n                setTotalJobs(response.data.totalJobs); // Assuming the API returns totalJobs\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        fetchJobs();\n    }, [\n        search,\n        skillLevel,\n        experienceLevel,\n        page\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto p-6 bg-gray-900 text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Search job titles...\",\n                    value: search,\n                    onChange: (e)=>setSearch(e.target.value),\n                    className: \"w-full p-2 border rounded shadow bg-gray-800 text-white\"\n                }, void 0, false, {\n                    fileName: \"/app/src/pages/jobs/index.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/app/src/pages/jobs/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setPage(page - 1),\n                        disabled: page === 1,\n                        className: \"px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 disabled:opacity-50 transition duration-300 ease-in-out\",\n                        children: \"Previous\"\n                    }, void 0, false, {\n                        fileName: \"/app/src/pages/jobs/index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Total Jobs: \",\n                                    totalJobs\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/app/src/pages/jobs/index.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Page: \",\n                                    page,\n                                    \" of \",\n                                    totalPages\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/app/src/pages/jobs/index.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/app/src/pages/jobs/index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setPage(page + 1),\n                        disabled: page === totalPages,\n                        className: \"px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 disabled:opacity-50 transition duration-300 ease-in-out\",\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"/app/src/pages/jobs/index.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/src/pages/jobs/index.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4\",\n                children: jobs.map((job)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-gray-800 shadow-lg rounded-lg p-6 hover:bg-gray-700 transition duration-300 ease-in-out transform hover:-translate-y-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-xl font-bold mb-2\",\n                                children: job.jobtitle\n                            }, void 0, false, {\n                                fileName: \"/app/src/pages/jobs/index.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-sm mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Average Hourly Pay: \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-semibold\",\n                                                children: [\n                                                    \"$\",\n                                                    job.averagehourlypay\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/app/src/pages/jobs/index.tsx\",\n                                                lineNumber: 83,\n                                                columnNumber: 38\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/app/src/pages/jobs/index.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Average Weekly Pay: \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-semibold\",\n                                                children: [\n                                                    \"$\",\n                                                    job.averageweeklypay\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/app/src/pages/jobs/index.tsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 38\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/app/src/pages/jobs/index.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Average Annual Pay: \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-semibold\",\n                                                children: [\n                                                    \"$\",\n                                                    job.averageannualpay\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/app/src/pages/jobs/index.tsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 38\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/app/src/pages/jobs/index.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Skill Level: \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-semibold\",\n                                                children: job.skilllevel\n                                            }, void 0, false, {\n                                                fileName: \"/app/src/pages/jobs/index.tsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 31\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/app/src/pages/jobs/index.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Experience Level: \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-semibold\",\n                                                children: job.experiencelevel\n                                            }, void 0, false, {\n                                                fileName: \"/app/src/pages/jobs/index.tsx\",\n                                                lineNumber: 87,\n                                                columnNumber: 36\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/app/src/pages/jobs/index.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/app/src/pages/jobs/index.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out\",\n                                children: \"Apply Now\"\n                            }, void 0, false, {\n                                fileName: \"/app/src/pages/jobs/index.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, job.jobid, true, {\n                        fileName: \"/app/src/pages/jobs/index.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/app/src/pages/jobs/index.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/src/pages/jobs/index.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(JobsBoard, \"ymcBCnmZpskgbcytSexDvmNSoRo=\");\n_c = JobsBoard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JobsBoard);\nvar _c;\n$RefreshReg$(_c, \"JobsBoard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7OztrREFDN0UsOERBQUNSOzs0Q0FBRTswREFBYSw4REFBQ0s7Z0RBQUtoQixXQUFVOzBEQUFpQmEsSUFBSU8sVUFBVTs7Ozs7Ozs7Ozs7O2tEQUMvRCw4REFBQ1Q7OzRDQUFFOzBEQUFrQiw4REFBQ0s7Z0RBQUtoQixXQUFVOzBEQUFpQmEsSUFBSVEsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUUzRSw4REFBQ2I7Z0NBQU9SLFdBQVU7MENBQXdHOzs7Ozs7O3VCQVRsSGEsSUFBSVMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7OztBQWtCN0I7R0FoRk05QztLQUFBQTtBQWtGTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvam9icy9pbmRleC50c3g/M2M4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmludGVyZmFjZSBKb2Ige1xuICBqb2JpZDogbnVtYmVyO1xuICBqb2J0aXRsZTogc3RyaW5nO1xuICBhdmVyYWdlaG91cmx5cGF5OiBudW1iZXI7XG4gIGF2ZXJhZ2V3ZWVrbHlwYXk6IG51bWJlcjtcbiAgYXZlcmFnZWFubnVhbHBheTogbnVtYmVyO1xuICBza2lsbGxldmVsOiBzdHJpbmc7XG4gIGV4cGVyaWVuY2VsZXZlbDogc3RyaW5nO1xuICBhdmVyYWdlaG91cnNwZXJ3ZWVrPzogbnVtYmVyO1xuICB0b3RhbHBvc2l0aW9ucz86IG51bWJlcjtcbiAgZmlsbGVkcG9zaXRpb25zPzogbnVtYmVyO1xuICB2YWNhbnRwb3NpdGlvbnM/OiBudW1iZXI7XG59XG5cbmNvbnN0IEpvYnNCb2FyZDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtqb2JzLCBzZXRKb2JzXSA9IHVzZVN0YXRlPEpvYltdPihbXSk7XG4gIGNvbnN0IFt0b3RhbEpvYnMsIHNldFRvdGFsSm9ic10gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtza2lsbExldmVsLCBzZXRTa2lsbExldmVsXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICBjb25zdCBbZXhwZXJpZW5jZUxldmVsLCBzZXRFeHBlcmllbmNlTGV2ZWxdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XG4gIGNvbnN0IFt0b3RhbFBhZ2VzLCBzZXRUb3RhbFBhZ2VzXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaEpvYnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBiYWNrZW5kT3V0Z29pbmdzRW5kcG9pbnQgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9qb2Jib2FyZD9zZWFyY2g9JHtzZWFyY2h9JnNraWxsTGV2ZWw9JHtza2lsbExldmVsfSZleHBlcmllbmNlTGV2ZWw9JHtleHBlcmllbmNlTGV2ZWx9JnBhZ2U9JHtwYWdlfWA7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYmFja2VuZE91dGdvaW5nc0VuZHBvaW50LCB7XG4gICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgc2V0Sm9icyhyZXNwb25zZS5kYXRhLmRhdGEgYXMgSm9iW10pO1xuICAgICAgICBzZXRUb3RhbFBhZ2VzKHJlc3BvbnNlLmRhdGEudG90YWxQYWdlcyBhcyBudW1iZXIpO1xuICAgICAgICBzZXRUb3RhbEpvYnMocmVzcG9uc2UuZGF0YS50b3RhbEpvYnMgYXMgbnVtYmVyKTsgLy8gQXNzdW1pbmcgdGhlIEFQSSByZXR1cm5zIHRvdGFsSm9ic1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoSm9icygpO1xuICB9LCBbc2VhcmNoLCBza2lsbExldmVsLCBleHBlcmllbmNlTGV2ZWwsIHBhZ2VdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcC02IGJnLWdyYXktOTAwIHRleHQtd2hpdGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggam9iIHRpdGxlcy4uLlwiXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBib3JkZXIgcm91bmRlZCBzaGFkb3cgYmctZ3JheS04MDAgdGV4dC13aGl0ZVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtdC00XCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKHBhZ2UgLSAxKX1cbiAgICAgICAgICBkaXNhYmxlZD17cGFnZSA9PT0gMX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctZ3JheS03MDAgdGV4dC13aGl0ZSByb3VuZGVkIGhvdmVyOmJnLWdyYXktNjAwIGRpc2FibGVkOm9wYWNpdHktNTAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXRcIlxuICAgICAgICA+XG4gICAgICAgICAgUHJldmlvdXNcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItNFwiPlxuICAgICAgICA8cD5Ub3RhbCBKb2JzOiB7dG90YWxKb2JzfTwvcD5cbiAgICAgICAgPHA+UGFnZToge3BhZ2V9IG9mIHt0b3RhbFBhZ2VzfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGFnZShwYWdlICsgMSl9XG4gICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPT09IHRvdGFsUGFnZXN9XG4gICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLWdyYXktNzAwIHRleHQtd2hpdGUgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTYwMCBkaXNhYmxlZDpvcGFjaXR5LTUwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0XCJcbiAgICAgICAgPlxuICAgICAgICAgIE5leHRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNFwiPlxuICAgICAgICB7am9icy5tYXAoKGpvYikgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtqb2Iuam9iaWR9IGNsYXNzTmFtZT1cImJnLWdyYXktODAwIHNoYWRvdy1sZyByb3VuZGVkLWxnIHAtNiBob3ZlcjpiZy1ncmF5LTcwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCB0cmFuc2Zvcm0gaG92ZXI6LXRyYW5zbGF0ZS15LTFcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi0yXCI+e2pvYi5qb2J0aXRsZX08L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1iLTRcIj5cbiAgICAgICAgICAgICAgPHA+QXZlcmFnZSBIb3VybHkgUGF5OiA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+JHtqb2IuYXZlcmFnZWhvdXJseXBheX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICA8cD5BdmVyYWdlIFdlZWtseSBQYXk6IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj4ke2pvYi5hdmVyYWdld2Vla2x5cGF5fTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgIDxwPkF2ZXJhZ2UgQW5udWFsIFBheTogPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPiR7am9iLmF2ZXJhZ2Vhbm51YWxwYXl9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgPHA+U2tpbGwgTGV2ZWw6IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj57am9iLnNraWxsbGV2ZWx9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgPHA+RXhwZXJpZW5jZSBMZXZlbDogPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPntqb2IuZXhwZXJpZW5jZWxldmVsfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQgaG92ZXI6YmctYmx1ZS02MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXRcIj5cbiAgICAgICAgICAgICAgQXBwbHkgTm93XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSm9ic0JvYXJkOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJKb2JzQm9hcmQiLCJqb2JzIiwic2V0Sm9icyIsInRvdGFsSm9icyIsInNldFRvdGFsSm9icyIsInNlYXJjaCIsInNldFNlYXJjaCIsInNraWxsTGV2ZWwiLCJzZXRTa2lsbExldmVsIiwiZXhwZXJpZW5jZUxldmVsIiwic2V0RXhwZXJpZW5jZUxldmVsIiwicGFnZSIsInNldFBhZ2UiLCJ0b3RhbFBhZ2VzIiwic2V0VG90YWxQYWdlcyIsImZldGNoSm9icyIsImJhY2tlbmRPdXRnb2luZ3NFbmRwb2ludCIsInJlc3BvbnNlIiwiZ2V0Iiwid2l0aENyZWRlbnRpYWxzIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJwIiwibWFwIiwiam9iIiwiaDMiLCJqb2J0aXRsZSIsInNwYW4iLCJhdmVyYWdlaG91cmx5cGF5IiwiYXZlcmFnZXdlZWtseXBheSIsImF2ZXJhZ2Vhbm51YWxwYXkiLCJza2lsbGxldmVsIiwiZXhwZXJpZW5jZWxldmVsIiwiam9iaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/jobs/index.tsx\n"));

/***/ })

});