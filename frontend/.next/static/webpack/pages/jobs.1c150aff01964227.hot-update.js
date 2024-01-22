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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst JobsBoard = ()=>{\n    _s();\n    const [jobs, setJobs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [totalJobs, setTotalJobs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [skillLevel, setSkillLevel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [experienceLevel, setExperienceLevel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [totalPages, setTotalPages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchJobs = async ()=>{\n            try {\n                const backendOutgoingsEndpoint = \"http://localhost:3000/api/jobboard?search=\".concat(search, \"&skillLevel=\").concat(skillLevel, \"&experienceLevel=\").concat(experienceLevel, \"&page=\").concat(page);\n                const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(backendOutgoingsEndpoint, {\n                    withCredentials: true\n                });\n                setJobs(response.data.data);\n                setTotalPages(response.data.totalPages);\n                setTotalJobs(response.data.totalJobs); // Assuming the API returns totalJobs\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        fetchJobs();\n    }, [\n        search,\n        skillLevel,\n        experienceLevel,\n        page\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto p-6 bg-gray-900 text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Search job titles...\",\n                    value: search,\n                    onChange: (e)=>setSearch(e.target.value),\n                    className: \"w-full p-2 border rounded shadow bg-gray-800 text-white\"\n                }, void 0, false, {\n                    fileName: \"/app/src/pages/jobs/index.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/app/src/pages/jobs/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Total Jobs: \",\n                            totalJobs\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/app/src/pages/jobs/index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Page: \",\n                            page,\n                            \" of \",\n                            totalPages\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/app/src/pages/jobs/index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/src/pages/jobs/index.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4\",\n                children: jobs.map((job)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-gray-800 shadow-lg rounded-lg p-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-lg font-bold mb-2\",\n                                children: job.jobtitle\n                            }, void 0, false, {\n                                fileName: \"/app/src/pages/jobs/index.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-sm\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Average Hourly Pay: $\",\n                                            job.averagehourlypay\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/app/src/pages/jobs/index.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Average Weekly Pay: $\",\n                                            job.averageweeklypay\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/app/src/pages/jobs/index.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Average Annual Pay: $\",\n                                            job.averageannualpay\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/app/src/pages/jobs/index.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Skill Level: \",\n                                            job.skilllevel\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/app/src/pages/jobs/index.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Experience Level: \",\n                                            job.experiencelevel\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/app/src/pages/jobs/index.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/app/src/pages/jobs/index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"mt-4 bg-blue-500 px-4 py-2 rounded hover:bg-blue-600\",\n                                children: \"Apply Now\"\n                            }, void 0, false, {\n                                fileName: \"/app/src/pages/jobs/index.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, job.jobid, true, {\n                        fileName: \"/app/src/pages/jobs/index.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/app/src/pages/jobs/index.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setPage(page - 1),\n                        disabled: page === 1,\n                        className: \"px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 disabled:opacity-50\",\n                        children: \"Previous\"\n                    }, void 0, false, {\n                        fileName: \"/app/src/pages/jobs/index.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setPage(page + 1),\n                        disabled: page === totalPages,\n                        className: \"px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 disabled:opacity-50\",\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"/app/src/pages/jobs/index.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/src/pages/jobs/index.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/src/pages/jobs/index.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(JobsBoard, \"ymcBCnmZpskgbcytSexDvmNSoRo=\");\n_c = JobsBoard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JobsBoard);\nvar _c;\n$RefreshReg$(_c, \"JobsBoard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU87d0JBQzlCa0MsVUFBVWxDLFNBQVNFO3dCQUNuQlcsV0FBVTtrQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0E5RU14QjtLQUFBQTtBQWdGTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvam9icy9pbmRleC50c3g/M2M4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmludGVyZmFjZSBKb2Ige1xuICBqb2JpZDogbnVtYmVyO1xuICBqb2J0aXRsZTogc3RyaW5nO1xuICBhdmVyYWdlaG91cmx5cGF5OiBudW1iZXI7XG4gIGF2ZXJhZ2V3ZWVrbHlwYXk6IG51bWJlcjtcbiAgYXZlcmFnZWFubnVhbHBheTogbnVtYmVyO1xuICBza2lsbGxldmVsOiBzdHJpbmc7XG4gIGV4cGVyaWVuY2VsZXZlbDogc3RyaW5nO1xuICBhdmVyYWdlaG91cnNwZXJ3ZWVrPzogbnVtYmVyO1xuICB0b3RhbHBvc2l0aW9ucz86IG51bWJlcjtcbiAgZmlsbGVkcG9zaXRpb25zPzogbnVtYmVyO1xuICB2YWNhbnRwb3NpdGlvbnM/OiBudW1iZXI7XG59XG5cbmNvbnN0IEpvYnNCb2FyZDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtqb2JzLCBzZXRKb2JzXSA9IHVzZVN0YXRlPEpvYltdPihbXSk7XG4gIGNvbnN0IFt0b3RhbEpvYnMsIHNldFRvdGFsSm9ic10gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtza2lsbExldmVsLCBzZXRTa2lsbExldmVsXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICBjb25zdCBbZXhwZXJpZW5jZUxldmVsLCBzZXRFeHBlcmllbmNlTGV2ZWxdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XG4gIGNvbnN0IFt0b3RhbFBhZ2VzLCBzZXRUb3RhbFBhZ2VzXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaEpvYnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBiYWNrZW5kT3V0Z29pbmdzRW5kcG9pbnQgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9qb2Jib2FyZD9zZWFyY2g9JHtzZWFyY2h9JnNraWxsTGV2ZWw9JHtza2lsbExldmVsfSZleHBlcmllbmNlTGV2ZWw9JHtleHBlcmllbmNlTGV2ZWx9JnBhZ2U9JHtwYWdlfWA7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYmFja2VuZE91dGdvaW5nc0VuZHBvaW50LCB7XG4gICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgc2V0Sm9icyhyZXNwb25zZS5kYXRhLmRhdGEgYXMgSm9iW10pO1xuICAgICAgICBzZXRUb3RhbFBhZ2VzKHJlc3BvbnNlLmRhdGEudG90YWxQYWdlcyBhcyBudW1iZXIpO1xuICAgICAgICBzZXRUb3RhbEpvYnMocmVzcG9uc2UuZGF0YS50b3RhbEpvYnMgYXMgbnVtYmVyKTsgLy8gQXNzdW1pbmcgdGhlIEFQSSByZXR1cm5zIHRvdGFsSm9ic1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoSm9icygpO1xuICB9LCBbc2VhcmNoLCBza2lsbExldmVsLCBleHBlcmllbmNlTGV2ZWwsIHBhZ2VdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcC02IGJnLWdyYXktOTAwIHRleHQtd2hpdGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggam9iIHRpdGxlcy4uLlwiXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBib3JkZXIgcm91bmRlZCBzaGFkb3cgYmctZ3JheS04MDAgdGV4dC13aGl0ZVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItNFwiPlxuICAgICAgICA8cD5Ub3RhbCBKb2JzOiB7dG90YWxKb2JzfTwvcD5cbiAgICAgICAgPHA+UGFnZToge3BhZ2V9IG9mIHt0b3RhbFBhZ2VzfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC00XCI+XG4gICAgICAgIHtqb2JzLm1hcCgoam9iKSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2pvYi5qb2JpZH0gY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgc2hhZG93LWxnIHJvdW5kZWQtbGcgcC02XCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgbWItMlwiPntqb2Iuam9idGl0bGV9PC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxuICAgICAgICAgICAgICA8cD5BdmVyYWdlIEhvdXJseSBQYXk6ICR7am9iLmF2ZXJhZ2Vob3VybHlwYXl9PC9wPlxuICAgICAgICAgICAgICA8cD5BdmVyYWdlIFdlZWtseSBQYXk6ICR7am9iLmF2ZXJhZ2V3ZWVrbHlwYXl9PC9wPlxuICAgICAgICAgICAgICA8cD5BdmVyYWdlIEFubnVhbCBQYXk6ICR7am9iLmF2ZXJhZ2Vhbm51YWxwYXl9PC9wPlxuICAgICAgICAgICAgICA8cD5Ta2lsbCBMZXZlbDoge2pvYi5za2lsbGxldmVsfTwvcD5cbiAgICAgICAgICAgICAgPHA+RXhwZXJpZW5jZSBMZXZlbDoge2pvYi5leHBlcmllbmNlbGV2ZWx9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm10LTQgYmctYmx1ZS01MDAgcHgtNCBweS0yIHJvdW5kZWQgaG92ZXI6YmctYmx1ZS02MDBcIj5cbiAgICAgICAgICAgICAgQXBwbHkgTm93XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbXQtNFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGFnZShwYWdlIC0gMSl9XG4gICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPT09IDF9XG4gICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLWdyYXktNzAwIHRleHQtd2hpdGUgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTYwMCBkaXNhYmxlZDpvcGFjaXR5LTUwXCJcbiAgICAgICAgPlxuICAgICAgICAgIFByZXZpb3VzXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGFnZShwYWdlICsgMSl9XG4gICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPT09IHRvdGFsUGFnZXN9XG4gICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLWdyYXktNzAwIHRleHQtd2hpdGUgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTYwMCBkaXNhYmxlZDpvcGFjaXR5LTUwXCJcbiAgICAgICAgPlxuICAgICAgICAgIE5leHRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEpvYnNCb2FyZDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiSm9ic0JvYXJkIiwiam9icyIsInNldEpvYnMiLCJ0b3RhbEpvYnMiLCJzZXRUb3RhbEpvYnMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJza2lsbExldmVsIiwic2V0U2tpbGxMZXZlbCIsImV4cGVyaWVuY2VMZXZlbCIsInNldEV4cGVyaWVuY2VMZXZlbCIsInBhZ2UiLCJzZXRQYWdlIiwidG90YWxQYWdlcyIsInNldFRvdGFsUGFnZXMiLCJmZXRjaEpvYnMiLCJiYWNrZW5kT3V0Z29pbmdzRW5kcG9pbnQiLCJyZXNwb25zZSIsImdldCIsIndpdGhDcmVkZW50aWFscyIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicCIsIm1hcCIsImpvYiIsImgzIiwiam9idGl0bGUiLCJhdmVyYWdlaG91cmx5cGF5IiwiYXZlcmFnZXdlZWtseXBheSIsImF2ZXJhZ2Vhbm51YWxwYXkiLCJza2lsbGxldmVsIiwiZXhwZXJpZW5jZWxldmVsIiwiYnV0dG9uIiwiam9iaWQiLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/jobs/index.tsx\n"));

/***/ })

});