/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/gh-reroute/index.tsx":
/*!*************************************!*\
  !*** ./public/gh-reroute/index.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website_utils_gh_route_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../website/utils/gh_route_utils */ \"./website/utils/gh_route_utils.ts\");\n\n\n// Hide the default 404 page content and just show a blank screen.\n// The content should only be shown if the browser doesn't support JavaScript.\nwindow.onload = function () {\n  document.body.innerHTML = \"\";\n};\n\n// This script is used in the 404.html page to redirect the browser to the correct URL.\n// Convert the current URL to a query string path and redirect the browser.\nvar location = window.location;\nvar locationUrl = new URL(location.toString());\nvar newUrl = (0,_website_utils_gh_route_utils__WEBPACK_IMPORTED_MODULE_0__.convertUrlToQueryStringPath)(locationUrl, 1);\nlocation.replace(newUrl);\nconsole.log(\"Redirecting to \" + newUrl.toString());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvZ2gtcmVyb3V0ZS9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7QUFBaUY7O0FBRWpGO0FBQ0E7QUFDQUMsTUFBTSxDQUFDQyxNQUFNLEdBQUcsWUFBTTtFQUNwQkMsUUFBUSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsR0FBRyxFQUFFO0FBQzlCLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQU1DLFFBQVEsR0FBR0wsTUFBTSxDQUFDSyxRQUFRO0FBQ2hDLElBQU1DLFdBQVcsR0FBRyxJQUFJQyxHQUFHLENBQUNGLFFBQVEsQ0FBQ0csUUFBUSxDQUFDLENBQUMsQ0FBQztBQUNoRCxJQUFNQyxNQUFNLEdBQUdWLDBGQUEyQixDQUFDTyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBQzFERCxRQUFRLENBQUNLLE9BQU8sQ0FBQ0QsTUFBTSxDQUFDO0FBQ3hCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBR0gsTUFBTSxDQUFDRCxRQUFRLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGFpY3Mvd2ViLTNkLXZpZXdlci8uL3B1YmxpYy9naC1yZXJvdXRlL2luZGV4LnRzeD84OGZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbnZlcnRVcmxUb1F1ZXJ5U3RyaW5nUGF0aCB9IGZyb20gXCIuLi8uLi93ZWJzaXRlL3V0aWxzL2doX3JvdXRlX3V0aWxzXCI7XHJcblxyXG4vLyBIaWRlIHRoZSBkZWZhdWx0IDQwNCBwYWdlIGNvbnRlbnQgYW5kIGp1c3Qgc2hvdyBhIGJsYW5rIHNjcmVlbi5cclxuLy8gVGhlIGNvbnRlbnQgc2hvdWxkIG9ubHkgYmUgc2hvd24gaWYgdGhlIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEphdmFTY3JpcHQuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBcIlwiO1xyXG59O1xyXG5cclxuLy8gVGhpcyBzY3JpcHQgaXMgdXNlZCBpbiB0aGUgNDA0Lmh0bWwgcGFnZSB0byByZWRpcmVjdCB0aGUgYnJvd3NlciB0byB0aGUgY29ycmVjdCBVUkwuXHJcbi8vIENvbnZlcnQgdGhlIGN1cnJlbnQgVVJMIHRvIGEgcXVlcnkgc3RyaW5nIHBhdGggYW5kIHJlZGlyZWN0IHRoZSBicm93c2VyLlxyXG5jb25zdCBsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbjtcclxuY29uc3QgbG9jYXRpb25VcmwgPSBuZXcgVVJMKGxvY2F0aW9uLnRvU3RyaW5nKCkpO1xyXG5jb25zdCBuZXdVcmwgPSBjb252ZXJ0VXJsVG9RdWVyeVN0cmluZ1BhdGgobG9jYXRpb25VcmwsIDEpO1xyXG5sb2NhdGlvbi5yZXBsYWNlKG5ld1VybCk7XHJcbmNvbnNvbGUubG9nKFwiUmVkaXJlY3RpbmcgdG8gXCIgKyBuZXdVcmwudG9TdHJpbmcoKSk7XHJcbiJdLCJuYW1lcyI6WyJjb252ZXJ0VXJsVG9RdWVyeVN0cmluZ1BhdGgiLCJ3aW5kb3ciLCJvbmxvYWQiLCJkb2N1bWVudCIsImJvZHkiLCJpbm5lckhUTUwiLCJsb2NhdGlvbiIsImxvY2F0aW9uVXJsIiwiVVJMIiwidG9TdHJpbmciLCJuZXdVcmwiLCJyZXBsYWNlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/gh-reroute/index.tsx\n");

/***/ }),

/***/ "./website/utils/gh_route_utils.ts":
/*!*****************************************!*\
  !*** ./website/utils/gh_route_utils.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   convertQueryStringPathToUrl: () => (/* binding */ convertQueryStringPathToUrl),\n/* harmony export */   convertUrlToQueryStringPath: () => (/* binding */ convertUrlToQueryStringPath),\n/* harmony export */   isQueryStringPath: () => (/* binding */ isQueryStringPath)\n/* harmony export */ });\nvar ESCAPED_AMPERSAND = \"~and~\";\n\n/**\r\n * Converts the path component of a URL into a query string. Used to redirect the browser\r\n * for single-page apps when the server is not configured to serve the app for all paths,\r\n * e.g. GitHub pages.\r\n *\r\n * Adapted from https://github.com/rafgraph/spa-github-pages.\r\n *\r\n * The original path will be converted into a query string, and the original query string will be\r\n * escaped and separated with an `&` character.\r\n *\r\n * @example\r\n * ```\r\n * const url = \"https://www.example.com/one/two?a=b&c=d#qwe\";\r\n * //                               Original: \"https://www.example.com/one/two?a=b&c=d#qwe\"\r\n * convertUrlToQueryStringPath(url, 0); // => \"https://www.example.com/?/one/two&a=b~and~c=d#qwe\"\r\n * convertUrlToQueryStringPath(url, 1); // => \"https://www.example.com/one/?/two&a=b~and~c=d#qwe\"\r\n * ```\r\n *\r\n * @param url - The URL to convert.\r\n * @param basePathSegments - The number of path segments to keep in the URL. 0 by default.\r\n *\r\n * @returns The URL with the path converted to a query string, and the original query string escaped.\r\n */\nfunction convertUrlToQueryStringPath(url) {\n  var basePathSegments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  var pathSegments = url.pathname.split(\"/\");\n  var basePath = pathSegments.slice(0, basePathSegments + 1).join(\"/\");\n  var remainingPath = pathSegments.slice(basePathSegments + 1).join(\"/\");\n  // Remove the \"?\" and replace with an \"&\" to separate the path from the original query string.\n  // Escape existing ampersands with \"~and~\" so \"&\" is preserved as our path/query separator.\n  var queryPath = remainingPath.replace(/&/g, ESCAPED_AMPERSAND);\n  var queryString = url.search ? url.search.slice(1).replace(/&/g, ESCAPED_AMPERSAND) : \"\";\n  var newUrl = \"\".concat(url.origin).concat(basePath, \"/?/\").concat(queryPath);\n  newUrl += queryString ? \"&\".concat(queryString) : \"\";\n  newUrl += url.hash;\n  return new URL(newUrl);\n}\nfunction isQueryStringPath(url) {\n  return url.search !== \"\" && url.search.startsWith(\"?/\");\n}\n\n/**\r\n * Converts a query string back into a complete URL. Used in combination with `convertUrlToQueryStringPath()`.\r\n * to redirect the browser for single-page apps when the server cannot be configured, e.g. GitHub pages.\r\n * Adapted from https://github.com/rafgraph/spa-github-pages.\r\n *\r\n * @param url - The URL with a path converted to a query string, and the original query string escaped.\r\n * @returns The original URL, with path instead of a query string.\r\n */\nfunction convertQueryStringPathToUrl(url) {\n  if (!url.search || !url.search.startsWith(\"?/\")) {\n    return url;\n  }\n  var newPathAndQueryString = url.search.slice(2) // Remove first ? character and slash\n  .split(\"&\") // Split the original path [idx 0] and query string [idx 1]\n  .map(function (s) {\n    return s.replace(new RegExp(ESCAPED_AMPERSAND, \"g\"), \"&\");\n  }) // Restore escaped ampersands\n  .join(\"?\"); // Rejoin the path and query string\n\n  return new URL(\"\".concat(url.origin).concat(url.pathname).concat(newPathAndQueryString).concat(url.hash));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixJQUFJLENBQUUsQ0FBQztBQUNuRiIsInNvdXJjZXMiOlsid2VicGFjazovL0BhaWNzL3dlYi0zZC12aWV3ZXIvLi93ZWJzaXRlL3V0aWxzL2doX3JvdXRlX3V0aWxzLnRzPzI1ZTAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRVNDQVBFRF9BTVBFUlNBTkQgPSBcIn5hbmR+XCI7XHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIHBhdGggY29tcG9uZW50IG9mIGEgVVJMIGludG8gYSBxdWVyeSBzdHJpbmcuIFVzZWQgdG8gcmVkaXJlY3QgdGhlIGJyb3dzZXJcclxuICogZm9yIHNpbmdsZS1wYWdlIGFwcHMgd2hlbiB0aGUgc2VydmVyIGlzIG5vdCBjb25maWd1cmVkIHRvIHNlcnZlIHRoZSBhcHAgZm9yIGFsbCBwYXRocyxcclxuICogZS5nLiBHaXRIdWIgcGFnZXMuXHJcbiAqXHJcbiAqIEFkYXB0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vcmFmZ3JhcGgvc3BhLWdpdGh1Yi1wYWdlcy5cclxuICpcclxuICogVGhlIG9yaWdpbmFsIHBhdGggd2lsbCBiZSBjb252ZXJ0ZWQgaW50byBhIHF1ZXJ5IHN0cmluZywgYW5kIHRoZSBvcmlnaW5hbCBxdWVyeSBzdHJpbmcgd2lsbCBiZVxyXG4gKiBlc2NhcGVkIGFuZCBzZXBhcmF0ZWQgd2l0aCBhbiBgJmAgY2hhcmFjdGVyLlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBgYGBcclxuICogY29uc3QgdXJsID0gXCJodHRwczovL3d3dy5leGFtcGxlLmNvbS9vbmUvdHdvP2E9YiZjPWQjcXdlXCI7XHJcbiAqIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9yaWdpbmFsOiBcImh0dHBzOi8vd3d3LmV4YW1wbGUuY29tL29uZS90d28/YT1iJmM9ZCNxd2VcIlxyXG4gKiBjb252ZXJ0VXJsVG9RdWVyeVN0cmluZ1BhdGgodXJsLCAwKTsgLy8gPT4gXCJodHRwczovL3d3dy5leGFtcGxlLmNvbS8/L29uZS90d28mYT1ifmFuZH5jPWQjcXdlXCJcclxuICogY29udmVydFVybFRvUXVlcnlTdHJpbmdQYXRoKHVybCwgMSk7IC8vID0+IFwiaHR0cHM6Ly93d3cuZXhhbXBsZS5jb20vb25lLz8vdHdvJmE9Yn5hbmR+Yz1kI3F3ZVwiXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcGFyYW0gdXJsIC0gVGhlIFVSTCB0byBjb252ZXJ0LlxyXG4gKiBAcGFyYW0gYmFzZVBhdGhTZWdtZW50cyAtIFRoZSBudW1iZXIgb2YgcGF0aCBzZWdtZW50cyB0byBrZWVwIGluIHRoZSBVUkwuIDAgYnkgZGVmYXVsdC5cclxuICpcclxuICogQHJldHVybnMgVGhlIFVSTCB3aXRoIHRoZSBwYXRoIGNvbnZlcnRlZCB0byBhIHF1ZXJ5IHN0cmluZywgYW5kIHRoZSBvcmlnaW5hbCBxdWVyeSBzdHJpbmcgZXNjYXBlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VXJsVG9RdWVyeVN0cmluZ1BhdGgodXJsOiBVUkwsIGJhc2VQYXRoU2VnbWVudHM6IG51bWJlciA9IDApOiBVUkwge1xyXG4gIGNvbnN0IHBhdGhTZWdtZW50cyA9IHVybC5wYXRobmFtZS5zcGxpdChcIi9cIik7XHJcbiAgY29uc3QgYmFzZVBhdGggPSBwYXRoU2VnbWVudHMuc2xpY2UoMCwgYmFzZVBhdGhTZWdtZW50cyArIDEpLmpvaW4oXCIvXCIpO1xyXG4gIGNvbnN0IHJlbWFpbmluZ1BhdGggPSBwYXRoU2VnbWVudHMuc2xpY2UoYmFzZVBhdGhTZWdtZW50cyArIDEpLmpvaW4oXCIvXCIpO1xyXG4gIC8vIFJlbW92ZSB0aGUgXCI/XCIgYW5kIHJlcGxhY2Ugd2l0aCBhbiBcIiZcIiB0byBzZXBhcmF0ZSB0aGUgcGF0aCBmcm9tIHRoZSBvcmlnaW5hbCBxdWVyeSBzdHJpbmcuXHJcbiAgLy8gRXNjYXBlIGV4aXN0aW5nIGFtcGVyc2FuZHMgd2l0aCBcIn5hbmR+XCIgc28gXCImXCIgaXMgcHJlc2VydmVkIGFzIG91ciBwYXRoL3F1ZXJ5IHNlcGFyYXRvci5cclxuICBjb25zdCBxdWVyeVBhdGggPSByZW1haW5pbmdQYXRoLnJlcGxhY2UoLyYvZywgRVNDQVBFRF9BTVBFUlNBTkQpO1xyXG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gdXJsLnNlYXJjaCA/IHVybC5zZWFyY2guc2xpY2UoMSkucmVwbGFjZSgvJi9nLCBFU0NBUEVEX0FNUEVSU0FORCkgOiBcIlwiO1xyXG5cclxuICBsZXQgbmV3VXJsID0gYCR7dXJsLm9yaWdpbn0ke2Jhc2VQYXRofS8/LyR7cXVlcnlQYXRofWA7XHJcbiAgbmV3VXJsICs9IHF1ZXJ5U3RyaW5nID8gYCYke3F1ZXJ5U3RyaW5nfWAgOiBcIlwiO1xyXG4gIG5ld1VybCArPSB1cmwuaGFzaDtcclxuXHJcbiAgcmV0dXJuIG5ldyBVUkwobmV3VXJsKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUXVlcnlTdHJpbmdQYXRoKHVybDogVVJMKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIHVybC5zZWFyY2ggIT09IFwiXCIgJiYgdXJsLnNlYXJjaC5zdGFydHNXaXRoKFwiPy9cIik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhIHF1ZXJ5IHN0cmluZyBiYWNrIGludG8gYSBjb21wbGV0ZSBVUkwuIFVzZWQgaW4gY29tYmluYXRpb24gd2l0aCBgY29udmVydFVybFRvUXVlcnlTdHJpbmdQYXRoKClgLlxyXG4gKiB0byByZWRpcmVjdCB0aGUgYnJvd3NlciBmb3Igc2luZ2xlLXBhZ2UgYXBwcyB3aGVuIHRoZSBzZXJ2ZXIgY2Fubm90IGJlIGNvbmZpZ3VyZWQsIGUuZy4gR2l0SHViIHBhZ2VzLlxyXG4gKiBBZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3JhZmdyYXBoL3NwYS1naXRodWItcGFnZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB1cmwgLSBUaGUgVVJMIHdpdGggYSBwYXRoIGNvbnZlcnRlZCB0byBhIHF1ZXJ5IHN0cmluZywgYW5kIHRoZSBvcmlnaW5hbCBxdWVyeSBzdHJpbmcgZXNjYXBlZC5cclxuICogQHJldHVybnMgVGhlIG9yaWdpbmFsIFVSTCwgd2l0aCBwYXRoIGluc3RlYWQgb2YgYSBxdWVyeSBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFF1ZXJ5U3RyaW5nUGF0aFRvVXJsKHVybDogVVJMKTogVVJMIHtcclxuICBpZiAoIXVybC5zZWFyY2ggfHwgIXVybC5zZWFyY2guc3RhcnRzV2l0aChcIj8vXCIpKSB7XHJcbiAgICByZXR1cm4gdXJsO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbmV3UGF0aEFuZFF1ZXJ5U3RyaW5nID0gdXJsLnNlYXJjaFxyXG4gICAgLnNsaWNlKDIpIC8vIFJlbW92ZSBmaXJzdCA/IGNoYXJhY3RlciBhbmQgc2xhc2hcclxuICAgIC5zcGxpdChcIiZcIikgLy8gU3BsaXQgdGhlIG9yaWdpbmFsIHBhdGggW2lkeCAwXSBhbmQgcXVlcnkgc3RyaW5nIFtpZHggMV1cclxuICAgIC5tYXAoKHMpID0+IHMucmVwbGFjZShuZXcgUmVnRXhwKEVTQ0FQRURfQU1QRVJTQU5ELCBcImdcIiksIFwiJlwiKSkgLy8gUmVzdG9yZSBlc2NhcGVkIGFtcGVyc2FuZHNcclxuICAgIC5qb2luKFwiP1wiKTsgLy8gUmVqb2luIHRoZSBwYXRoIGFuZCBxdWVyeSBzdHJpbmdcclxuXHJcbiAgcmV0dXJuIG5ldyBVUkwoYCR7dXJsLm9yaWdpbn0ke3VybC5wYXRobmFtZX0ke25ld1BhdGhBbmRRdWVyeVN0cmluZ30ke3VybC5oYXNofWApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJFU0NBUEVEX0FNUEVSU0FORCIsImNvbnZlcnRVcmxUb1F1ZXJ5U3RyaW5nUGF0aCIsInVybCIsImJhc2VQYXRoU2VnbWVudHMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJwYXRoU2VnbWVudHMiLCJwYXRobmFtZSIsInNwbGl0IiwiYmFzZVBhdGgiLCJzbGljZSIsImpvaW4iLCJyZW1haW5pbmdQYXRoIiwicXVlcnlQYXRoIiwicmVwbGFjZSIsInF1ZXJ5U3RyaW5nIiwic2VhcmNoIiwibmV3VXJsIiwiY29uY2F0Iiwib3JpZ2luIiwiaGFzaCIsIlVSTCIsImlzUXVlcnlTdHJpbmdQYXRoIiwic3RhcnRzV2l0aCIsImNvbnZlcnRRdWVyeVN0cmluZ1BhdGhUb1VybCIsIm5ld1BhdGhBbmRRdWVyeVN0cmluZyIsIm1hcCIsInMiLCJSZWdFeHAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./website/utils/gh_route_utils.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/gh-reroute/index.tsx");
/******/ 	
/******/ })()
;