/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "?34f5":
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?4407":
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?e0d3":
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?82fe":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "../volume-viewer/es/loaders/VolumeLoadError.js":
/*!******************************************************!*\
  !*** ../volume-viewer/es/loaders/VolumeLoadError.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   VolumeLoadError: () => (/* binding */ VolumeLoadError),\n/* harmony export */   VolumeLoadErrorType: () => (/* binding */ VolumeLoadErrorType),\n/* harmony export */   wrapVolumeLoadError: () => (/* binding */ wrapVolumeLoadError)\n/* harmony export */ });\n/* harmony import */ var serialize_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serialize-error */ \"../volume-viewer/node_modules/serialize-error/error-constructors.js\");\n/* harmony import */ var _zarrita_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @zarrita/core */ \"../volume-viewer/node_modules/@zarrita/core/dist/src/errors.js\");\n\n\n// geotiff doesn't export its error types...\n\n/** Groups possible load errors into a few broad categories which we can give similar guidance to the user about. */\nlet VolumeLoadErrorType = /*#__PURE__*/function (VolumeLoadErrorType) {\n  VolumeLoadErrorType[\"UNKNOWN\"] = \"unknown\";\n  VolumeLoadErrorType[\"NOT_FOUND\"] = \"not_found\";\n  VolumeLoadErrorType[\"TOO_LARGE\"] = \"too_large\";\n  VolumeLoadErrorType[\"LOAD_DATA_FAILED\"] = \"load_data_failed\";\n  VolumeLoadErrorType[\"INVALID_METADATA\"] = \"invalid_metadata\";\n  VolumeLoadErrorType[\"INVALID_MULTI_SOURCE_ZARR\"] = \"invalid_multi_source_zarr\";\n  return VolumeLoadErrorType;\n}({});\nclass VolumeLoadError extends Error {\n  constructor(message, options) {\n    super(message, options);\n    this.name = \"VolumeLoadError\";\n    this.type = options?.type ?? VolumeLoadErrorType.UNKNOWN;\n  }\n}\n\n// serialize-error only ever calls an error constructor with zero arguments. The required `ErrorConstructor`\n// type is a bit too restrictive - as long as the constructor can be called with no arguments it's fine.\nserialize_error__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(\"NodeNotFoundError\", _zarrita_core__WEBPACK_IMPORTED_MODULE_1__.NodeNotFoundError);\nserialize_error__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(\"KeyError\", _zarrita_core__WEBPACK_IMPORTED_MODULE_1__.KeyError);\nserialize_error__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(\"VolumeLoadError\", VolumeLoadError);\n\n/** Curried function to re-throw an error wrapped in a `VolumeLoadError` with the given `message` and `type`. */\nfunction wrapVolumeLoadError(message = \"Unknown error occurred while loading volume data\", type = VolumeLoadErrorType.UNKNOWN, ignore) {\n  return e => {\n    if (ignore !== undefined && e === ignore) {\n      return e;\n    }\n    if (e instanceof VolumeLoadError) {\n      throw e;\n    }\n    throw new VolumeLoadError(message, {\n      type,\n      cause: e\n    });\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdm9sdW1lLXZpZXdlci9lcy9sb2FkZXJzL1ZvbHVtZUxvYWRFcnJvci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFvRDtBQUNRO0FBQzVEOztBQUVBO0FBQ08sSUFBSUcsbUJBQW1CLEdBQUcsYUFBYSxVQUFVQSxtQkFBbUIsRUFBRTtFQUMzRUEsbUJBQW1CLENBQUMsU0FBUyxDQUFDLEdBQUcsU0FBUztFQUMxQ0EsbUJBQW1CLENBQUMsV0FBVyxDQUFDLEdBQUcsV0FBVztFQUM5Q0EsbUJBQW1CLENBQUMsV0FBVyxDQUFDLEdBQUcsV0FBVztFQUM5Q0EsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsR0FBRyxrQkFBa0I7RUFDNURBLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsa0JBQWtCO0VBQzVEQSxtQkFBbUIsQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLDJCQUEyQjtFQUM5RSxPQUFPQSxtQkFBbUI7QUFDNUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ0UsTUFBTUMsZUFBZSxTQUFTQyxLQUFLLENBQUM7RUFDekNDLFdBQVdBLENBQUNDLE9BQU8sRUFBRUMsT0FBTyxFQUFFO0lBQzVCLEtBQUssQ0FBQ0QsT0FBTyxFQUFFQyxPQUFPLENBQUM7SUFDdkIsSUFBSSxDQUFDQyxJQUFJLEdBQUcsaUJBQWlCO0lBQzdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHRixPQUFPLEVBQUVFLElBQUksSUFBSVAsbUJBQW1CLENBQUNRLE9BQU87RUFDMUQ7QUFDRjs7QUFFQTtBQUNBO0FBQ0FYLHVEQUFpQixDQUFDWSxHQUFHLENBQUMsbUJBQW1CLEVBQUVYLDREQUFpQixDQUFDO0FBQzdERCx1REFBaUIsQ0FBQ1ksR0FBRyxDQUFDLFVBQVUsRUFBRVYsbURBQVEsQ0FBQztBQUMzQ0YsdURBQWlCLENBQUNZLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRVIsZUFBZSxDQUFDOztBQUV6RDtBQUNPLFNBQVNTLG1CQUFtQkEsQ0FBQ04sT0FBTyxHQUFHLGtEQUFrRCxFQUFFRyxJQUFJLEdBQUdQLG1CQUFtQixDQUFDUSxPQUFPLEVBQUVHLE1BQU0sRUFBRTtFQUM1SSxPQUFPQyxDQUFDLElBQUk7SUFDVixJQUFJRCxNQUFNLEtBQUtFLFNBQVMsSUFBSUQsQ0FBQyxLQUFLRCxNQUFNLEVBQUU7TUFDeEMsT0FBT0MsQ0FBQztJQUNWO0lBQ0EsSUFBSUEsQ0FBQyxZQUFZWCxlQUFlLEVBQUU7TUFDaEMsTUFBTVcsQ0FBQztJQUNUO0lBQ0EsTUFBTSxJQUFJWCxlQUFlLENBQUNHLE9BQU8sRUFBRTtNQUNqQ0csSUFBSTtNQUNKTyxLQUFLLEVBQUVGO0lBQ1QsQ0FBQyxDQUFDO0VBQ0osQ0FBQztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGFpY3Mvd2ViLTNkLXZpZXdlci8uLi92b2x1bWUtdmlld2VyL2VzL2xvYWRlcnMvVm9sdW1lTG9hZEVycm9yLmpzP2VkMWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXJyb3JDb25zdHJ1Y3RvcnMgfSBmcm9tIFwic2VyaWFsaXplLWVycm9yXCI7XG5pbXBvcnQgeyBOb2RlTm90Rm91bmRFcnJvciwgS2V5RXJyb3IgfSBmcm9tIFwiQHphcnJpdGEvY29yZVwiO1xuLy8gZ2VvdGlmZiBkb2Vzbid0IGV4cG9ydCBpdHMgZXJyb3IgdHlwZXMuLi5cblxuLyoqIEdyb3VwcyBwb3NzaWJsZSBsb2FkIGVycm9ycyBpbnRvIGEgZmV3IGJyb2FkIGNhdGVnb3JpZXMgd2hpY2ggd2UgY2FuIGdpdmUgc2ltaWxhciBndWlkYW5jZSB0byB0aGUgdXNlciBhYm91dC4gKi9cbmV4cG9ydCBsZXQgVm9sdW1lTG9hZEVycm9yVHlwZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoVm9sdW1lTG9hZEVycm9yVHlwZSkge1xuICBWb2x1bWVMb2FkRXJyb3JUeXBlW1wiVU5LTk9XTlwiXSA9IFwidW5rbm93blwiO1xuICBWb2x1bWVMb2FkRXJyb3JUeXBlW1wiTk9UX0ZPVU5EXCJdID0gXCJub3RfZm91bmRcIjtcbiAgVm9sdW1lTG9hZEVycm9yVHlwZVtcIlRPT19MQVJHRVwiXSA9IFwidG9vX2xhcmdlXCI7XG4gIFZvbHVtZUxvYWRFcnJvclR5cGVbXCJMT0FEX0RBVEFfRkFJTEVEXCJdID0gXCJsb2FkX2RhdGFfZmFpbGVkXCI7XG4gIFZvbHVtZUxvYWRFcnJvclR5cGVbXCJJTlZBTElEX01FVEFEQVRBXCJdID0gXCJpbnZhbGlkX21ldGFkYXRhXCI7XG4gIFZvbHVtZUxvYWRFcnJvclR5cGVbXCJJTlZBTElEX01VTFRJX1NPVVJDRV9aQVJSXCJdID0gXCJpbnZhbGlkX211bHRpX3NvdXJjZV96YXJyXCI7XG4gIHJldHVybiBWb2x1bWVMb2FkRXJyb3JUeXBlO1xufSh7fSk7XG5leHBvcnQgY2xhc3MgVm9sdW1lTG9hZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBvcHRpb25zKSB7XG4gICAgc3VwZXIobWVzc2FnZSwgb3B0aW9ucyk7XG4gICAgdGhpcy5uYW1lID0gXCJWb2x1bWVMb2FkRXJyb3JcIjtcbiAgICB0aGlzLnR5cGUgPSBvcHRpb25zPy50eXBlID8/IFZvbHVtZUxvYWRFcnJvclR5cGUuVU5LTk9XTjtcbiAgfVxufVxuXG4vLyBzZXJpYWxpemUtZXJyb3Igb25seSBldmVyIGNhbGxzIGFuIGVycm9yIGNvbnN0cnVjdG9yIHdpdGggemVybyBhcmd1bWVudHMuIFRoZSByZXF1aXJlZCBgRXJyb3JDb25zdHJ1Y3RvcmBcbi8vIHR5cGUgaXMgYSBiaXQgdG9vIHJlc3RyaWN0aXZlIC0gYXMgbG9uZyBhcyB0aGUgY29uc3RydWN0b3IgY2FuIGJlIGNhbGxlZCB3aXRoIG5vIGFyZ3VtZW50cyBpdCdzIGZpbmUuXG5lcnJvckNvbnN0cnVjdG9ycy5zZXQoXCJOb2RlTm90Rm91bmRFcnJvclwiLCBOb2RlTm90Rm91bmRFcnJvcik7XG5lcnJvckNvbnN0cnVjdG9ycy5zZXQoXCJLZXlFcnJvclwiLCBLZXlFcnJvcik7XG5lcnJvckNvbnN0cnVjdG9ycy5zZXQoXCJWb2x1bWVMb2FkRXJyb3JcIiwgVm9sdW1lTG9hZEVycm9yKTtcblxuLyoqIEN1cnJpZWQgZnVuY3Rpb24gdG8gcmUtdGhyb3cgYW4gZXJyb3Igd3JhcHBlZCBpbiBhIGBWb2x1bWVMb2FkRXJyb3JgIHdpdGggdGhlIGdpdmVuIGBtZXNzYWdlYCBhbmQgYHR5cGVgLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXBWb2x1bWVMb2FkRXJyb3IobWVzc2FnZSA9IFwiVW5rbm93biBlcnJvciBvY2N1cnJlZCB3aGlsZSBsb2FkaW5nIHZvbHVtZSBkYXRhXCIsIHR5cGUgPSBWb2x1bWVMb2FkRXJyb3JUeXBlLlVOS05PV04sIGlnbm9yZSkge1xuICByZXR1cm4gZSA9PiB7XG4gICAgaWYgKGlnbm9yZSAhPT0gdW5kZWZpbmVkICYmIGUgPT09IGlnbm9yZSkge1xuICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIGlmIChlIGluc3RhbmNlb2YgVm9sdW1lTG9hZEVycm9yKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgVm9sdW1lTG9hZEVycm9yKG1lc3NhZ2UsIHtcbiAgICAgIHR5cGUsXG4gICAgICBjYXVzZTogZVxuICAgIH0pO1xuICB9O1xufSJdLCJuYW1lcyI6WyJlcnJvckNvbnN0cnVjdG9ycyIsIk5vZGVOb3RGb3VuZEVycm9yIiwiS2V5RXJyb3IiLCJWb2x1bWVMb2FkRXJyb3JUeXBlIiwiVm9sdW1lTG9hZEVycm9yIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciIsIm1lc3NhZ2UiLCJvcHRpb25zIiwibmFtZSIsInR5cGUiLCJVTktOT1dOIiwic2V0Iiwid3JhcFZvbHVtZUxvYWRFcnJvciIsImlnbm9yZSIsImUiLCJ1bmRlZmluZWQiLCJjYXVzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../volume-viewer/es/loaders/VolumeLoadError.js\n");

/***/ }),

/***/ "../volume-viewer/es/workers/FetchTiffWorker.js":
/*!******************************************************!*\
  !*** ../volume-viewer/es/workers/FetchTiffWorker.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var geotiff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! geotiff */ \"../volume-viewer/node_modules/geotiff/dist-module/geotiff.js\");\n/* harmony import */ var serialize_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! serialize-error */ \"../volume-viewer/node_modules/serialize-error/index.js\");\n/* harmony import */ var _loaders_VolumeLoadError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loaders/VolumeLoadError.js */ \"../volume-viewer/es/loaders/VolumeLoadError.js\");\n\n\n\n// from TIFF\nconst SAMPLEFORMAT_UINT = 1;\nconst SAMPLEFORMAT_INT = 2;\nconst SAMPLEFORMAT_IEEEFP = 3;\nfunction castToArray(buf, bytesPerPixel, sampleFormat) {\n  if (sampleFormat === SAMPLEFORMAT_IEEEFP) {\n    if (bytesPerPixel === 4) {\n      return new Float32Array(buf);\n    }\n  } else if (sampleFormat === SAMPLEFORMAT_INT) {\n    if (bytesPerPixel === 1) {\n      return new Int8Array(buf);\n    } else if (bytesPerPixel === 2) {\n      return new Int16Array(buf);\n    } else if (bytesPerPixel === 4) {\n      return new Int32Array(buf);\n    }\n  } else if (sampleFormat === SAMPLEFORMAT_UINT) {\n    if (bytesPerPixel === 1) {\n      return new Uint8Array(buf);\n    } else if (bytesPerPixel === 2) {\n      return new Uint16Array(buf);\n    } else if (bytesPerPixel === 4) {\n      return new Uint32Array(buf);\n    }\n  }\n  console.error(`TIFF Worker: unsupported sample format ${sampleFormat} and bytes per pixel ${bytesPerPixel}`);\n  return new Uint8Array(buf);\n}\nasync function loadTiffChannel(e) {\n  // TODO index images by time\n  // const time = e.data.time;\n\n  const channelIndex = e.data.channel;\n  const tilesizex = e.data.tilesizex;\n  const tilesizey = e.data.tilesizey;\n  const sizez = e.data.sizez;\n  const sizec = e.data.sizec;\n  const dimensionOrder = e.data.dimensionOrder;\n  const bytesPerSample = e.data.bytesPerSample;\n  const tiff = await (0,geotiff__WEBPACK_IMPORTED_MODULE_1__.fromUrl)(e.data.url, {\n    allowFullFile: true\n  });\n\n  // load the images of this channel from the tiff\n  // today assume TCZYX so the slices are already in order.\n  let startindex = 0;\n  let incrementz = 1;\n  if (dimensionOrder === \"XYZCT\") {\n    // we have XYZCT which is the \"good\" case\n    // TCZYX\n    startindex = sizez * channelIndex;\n    incrementz = 1;\n  } else if (dimensionOrder === \"XYCZT\") {\n    // we have to loop differently to increment channels\n    // TZCYX\n    startindex = channelIndex;\n    incrementz = sizec;\n  }\n\n  // huge assumption: planes are in a particular order relative to z and c\n\n  // get first plane, to get some details about the image\n  const image = await tiff.getImage(startindex);\n  // on first image, set up some stuff:\n  const sampleFormat = image.getSampleFormat();\n  const bytesPerPixel = image.getBytesPerPixel();\n  // allocate a buffer for one channel\n  const buffer = new ArrayBuffer(tilesizex * tilesizey * sizez * bytesPerPixel);\n  const u8 = new Uint8Array(buffer);\n  for (let imageIndex = startindex, zslice = 0; zslice < sizez; imageIndex += incrementz, ++zslice) {\n    const image = await tiff.getImage(imageIndex);\n    // download and downsample on client\n    const result = await image.readRasters({\n      width: tilesizex,\n      height: tilesizey\n    });\n    const arrayresult = Array.isArray(result) ? result[0] : result;\n    // deposit in full channel array in the right place\n    const offset = zslice * tilesizex * tilesizey;\n    if (arrayresult.BYTES_PER_ELEMENT > 4) {\n      throw new _loaders_VolumeLoadError_js__WEBPACK_IMPORTED_MODULE_0__.VolumeLoadError(\"byte size not supported yet: \" + arrayresult.BYTES_PER_ELEMENT, {\n        type: _loaders_VolumeLoadError_js__WEBPACK_IMPORTED_MODULE_0__.VolumeLoadErrorType.INVALID_METADATA\n      });\n    } else if (arrayresult.BYTES_PER_ELEMENT !== bytesPerSample) {\n      throw new _loaders_VolumeLoadError_js__WEBPACK_IMPORTED_MODULE_0__.VolumeLoadError(\"tiff bytes per element mismatch with OME metadata\", {\n        type: _loaders_VolumeLoadError_js__WEBPACK_IMPORTED_MODULE_0__.VolumeLoadErrorType.INVALID_METADATA\n      });\n    } else {\n      u8.set(new Uint8Array(arrayresult.buffer), offset * arrayresult.BYTES_PER_ELEMENT);\n    }\n  }\n  // all slices collected, now resample to 8 bits full data range\n  const src = castToArray(buffer, bytesPerPixel, sampleFormat);\n  let chmin = src[0];\n  let chmax = src[0];\n  for (let j = 0; j < src.length; ++j) {\n    const val = src[j];\n    if (val < chmin) {\n      chmin = val;\n    }\n    if (val > chmax) {\n      chmax = val;\n    }\n  }\n  const out = new Uint8Array(src.length);\n  for (let j = 0; j < src.length; ++j) {\n    out[j] = (src[j] - chmin) / (chmax - chmin) * 255;\n  }\n  return {\n    data: out,\n    channel: channelIndex,\n    range: [chmin, chmax],\n    isError: false\n  };\n}\nself.onmessage = async e => {\n  try {\n    const result = await loadTiffChannel(e);\n    self.postMessage(result, [result.data.buffer]);\n  } catch (err) {\n    self.postMessage({\n      isError: true,\n      error: (0,serialize_error__WEBPACK_IMPORTED_MODULE_2__.serializeError)(err)\n    });\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdm9sdW1lLXZpZXdlci9lcy93b3JrZXJzL0ZldGNoVGlmZldvcmtlci5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWtDO0FBQ2U7QUFDb0M7QUFDckY7QUFDQSxNQUFNSSxpQkFBaUIsR0FBRyxDQUFDO0FBQzNCLE1BQU1DLGdCQUFnQixHQUFHLENBQUM7QUFDMUIsTUFBTUMsbUJBQW1CLEdBQUcsQ0FBQztBQUM3QixTQUFTQyxXQUFXQSxDQUFDQyxHQUFHLEVBQUVDLGFBQWEsRUFBRUMsWUFBWSxFQUFFO0VBQ3JELElBQUlBLFlBQVksS0FBS0osbUJBQW1CLEVBQUU7SUFDeEMsSUFBSUcsYUFBYSxLQUFLLENBQUMsRUFBRTtNQUN2QixPQUFPLElBQUlFLFlBQVksQ0FBQ0gsR0FBRyxDQUFDO0lBQzlCO0VBQ0YsQ0FBQyxNQUFNLElBQUlFLFlBQVksS0FBS0wsZ0JBQWdCLEVBQUU7SUFDNUMsSUFBSUksYUFBYSxLQUFLLENBQUMsRUFBRTtNQUN2QixPQUFPLElBQUlHLFNBQVMsQ0FBQ0osR0FBRyxDQUFDO0lBQzNCLENBQUMsTUFBTSxJQUFJQyxhQUFhLEtBQUssQ0FBQyxFQUFFO01BQzlCLE9BQU8sSUFBSUksVUFBVSxDQUFDTCxHQUFHLENBQUM7SUFDNUIsQ0FBQyxNQUFNLElBQUlDLGFBQWEsS0FBSyxDQUFDLEVBQUU7TUFDOUIsT0FBTyxJQUFJSyxVQUFVLENBQUNOLEdBQUcsQ0FBQztJQUM1QjtFQUNGLENBQUMsTUFBTSxJQUFJRSxZQUFZLEtBQUtOLGlCQUFpQixFQUFFO0lBQzdDLElBQUlLLGFBQWEsS0FBSyxDQUFDLEVBQUU7TUFDdkIsT0FBTyxJQUFJTSxVQUFVLENBQUNQLEdBQUcsQ0FBQztJQUM1QixDQUFDLE1BQU0sSUFBSUMsYUFBYSxLQUFLLENBQUMsRUFBRTtNQUM5QixPQUFPLElBQUlPLFdBQVcsQ0FBQ1IsR0FBRyxDQUFDO0lBQzdCLENBQUMsTUFBTSxJQUFJQyxhQUFhLEtBQUssQ0FBQyxFQUFFO01BQzlCLE9BQU8sSUFBSVEsV0FBVyxD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QUNILEdBQUcsQ0FBQ0csQ0FBQyxDQUFDLEdBQUdGLEtBQUssS0FBS0MsS0FBSyxHQUFHRCxLQUFLLENBQUMsR0FBRyxHQUFHO0VBQ25EO0VBQ0EsT0FBTztJQUNMbkMsSUFBSSxFQUFFd0MsR0FBRztJQUNUdkMsT0FBTyxFQUFFRixZQUFZO0lBQ3JCMEMsS0FBSyxFQUFFLENBQUNOLEtBQUssRUFBRUMsS0FBSyxDQUFDO0lBQ3JCTSxPQUFPLEVBQUU7RUFDWCxDQUFDO0FBQ0g7QUFDQUMsSUFBSSxDQUFDQyxTQUFTLEdBQUcsTUFBTTlDLENBQUMsSUFBSTtFQUMxQixJQUFJO0lBQ0YsTUFBTXdCLE1BQU0sR0FBRyxNQUFNekIsZUFBZSxDQUFDQyxDQUFDLENBQUM7SUFDdkM2QyxJQUFJLENBQUNFLFdBQVcsQ0FBQ3ZCLE1BQU0sRUFBRSxDQUFDQSxNQUFNLENBQUN0QixJQUFJLENBQUNpQixNQUFNLENBQUMsQ0FBQztFQUNoRCxDQUFDLENBQUMsT0FBTzZCLEdBQUcsRUFBRTtJQUNaSCxJQUFJLENBQUNFLFdBQVcsQ0FBQztNQUNmSCxPQUFPLEVBQUUsSUFBSTtNQUNiOUMsS0FBSyxFQUFFbEIsK0RBQWMsQ0FBQ29FLEdBQUc7SUFDM0IsQ0FBQyxDQUFDO0VBQ0o7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGFpY3Mvd2ViLTNkLXZpZXdlci8uLi92b2x1bWUtdmlld2VyL2VzL3dvcmtlcnMvRmV0Y2hUaWZmV29ya2VyLmpzP2E5ZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZnJvbVVybCB9IGZyb20gXCJnZW90aWZmXCI7XG5pbXBvcnQgeyBzZXJpYWxpemVFcnJvciB9IGZyb20gXCJzZXJpYWxpemUtZXJyb3JcIjtcbmltcG9ydCB7IFZvbHVtZUxvYWRFcnJvciwgVm9sdW1lTG9hZEVycm9yVHlwZSB9IGZyb20gXCIuLi9sb2FkZXJzL1ZvbHVtZUxvYWRFcnJvci5qc1wiO1xuLy8gZnJvbSBUSUZGXG5jb25zdCBTQU1QTEVGT1JNQVRfVUlOVCA9IDE7XG5jb25zdCBTQU1QTEVGT1JNQVRfSU5UID0gMjtcbmNvbnN0IFNBTVBMRUZPUk1BVF9JRUVFRlAgPSAzO1xuZnVuY3Rpb24gY2FzdFRvQXJyYXkoYnVmLCBieXRlc1BlclBpeGVsLCBzYW1wbGVGb3JtYXQpIHtcbiAgaWYgKHNhbXBsZUZvcm1hdCA9PT0gU0FNUExFRk9STUFUX0lFRUVGUCkge1xuICAgIGlmIChieXRlc1BlclBpeGVsID09PSA0KSB7XG4gICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShidWYpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChzYW1wbGVGb3JtYXQgPT09IFNBTVBMRUZPUk1BVF9JTlQpIHtcbiAgICBpZiAoYnl0ZXNQZXJQaXhlbCA9PT0gMSkge1xuICAgICAgcmV0dXJuIG5ldyBJbnQ4QXJyYXkoYnVmKTtcbiAgICB9IGVsc2UgaWYgKGJ5dGVzUGVyUGl4ZWwgPT09IDIpIHtcbiAgICAgIHJldHVybiBuZXcgSW50MTZBcnJheShidWYpO1xuICAgIH0gZWxzZSBpZiAoYnl0ZXNQZXJQaXhlbCA9PT0gNCkge1xuICAgICAgcmV0dXJuIG5ldyBJbnQzMkFycmF5KGJ1Zik7XG4gICAgfVxuICB9IGVsc2UgaWYgKHNhbXBsZUZvcm1hdCA9PT0gU0FNUExFRk9STUFUX1VJTlQpIHtcbiAgICBpZiAoYnl0ZXNQZXJQaXhlbCA9PT0gMSkge1xuICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGJ1Zik7XG4gICAgfSBlbHNlIGlmIChieXRlc1BlclBpeGVsID09PSAyKSB7XG4gICAgICByZXR1cm4gbmV3IFVpbnQxNkFycmF5KGJ1Zik7XG4gICAgfSBlbHNlIGlmIChieXRlc1BlclBpeGVsID09PSA0KSB7XG4gICAgICByZXR1cm4gbmV3IFVpbnQzMkFycmF5KGJ1Zik7XG4gICAgfVxuICB9XG4gIGNvbnNvbGUuZXJyb3IoYFRJRkYgV29ya2VyOiB1bnN1cHBvcnRlZCBzYW1wbGUgZm9ybWF0ICR7c2FtcGxlRm9ybWF0fSBhbmQgYnl0ZXMgcGVyIHBpeGVsICR7Ynl0ZXNQZXJQaXhlbH1gKTtcbiAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGJ1Zik7XG59XG5hc3luYyBmdW5jdGlvbiBsb2FkVGlmZkNoYW5uZWwoZSkge1xuICAvLyBUT0RPIGluZGV4IGltYWdlcyBieSB0aW1lXG4gIC8vIGNvbnN0IHRpbWUgPSBlLmRhdGEudGltZTtcblxuICBjb25zdCBjaGFubmVsSW5kZXggPSBlLmRhdGEuY2hhbm5lbDtcbiAgY29uc3QgdGlsZXNpemV4ID0gZS5kYXRhLnRpbGVzaXpleDtcbiAgY29uc3QgdGlsZXNpemV5ID0gZS5kYXRhLnRpbGVzaXpleTtcbiAgY29uc3Qgc2l6ZXogPSBlLmRhdGEuc2l6ZXo7XG4gIGNvbnN0IHNpemVjID0gZS5kYXRhLnNpemVjO1xuICBjb25zdCBkaW1lbnNpb25PcmRlciA9IGUuZGF0YS5kaW1lbnNpb25PcmRlcjtcbiAgY29uc3QgYnl0ZXNQZXJTYW1wbGUgPSBlLmRhdGEuYnl0ZXNQZXJTYW1wbGU7XG4gIGNvbnN0IHRpZmYgPSBhd2FpdCBmcm9tVXJsKGUuZGF0YS51cmwsIHtcbiAgICBhbGxvd0Z1bGxGaWxlOiB0cnVlXG4gIH0pO1xuXG4gIC8vIGxvYWQgdGhlIGltYWdlcyBvZiB0aGlzIGNoYW5uZWwgZnJvbSB0aGUgdGlmZlxuICAvLyB0b2RheSBhc3N1bWUgVENaWVggc28gdGhlIHNsaWNlcyBhcmUgYWxyZWFkeSBpbiBvcmRlci5cbiAgbGV0IHN0YXJ0aW5kZXggPSAwO1xuICBsZXQgaW5jcmVtZW50eiA9IDE7XG4gIGlmIChkaW1lbnNpb25PcmRlciA9PT0gXCJYWVpDVFwiKSB7XG4gICAgLy8gd2UgaGF2ZSBYWVpDVCB3aGljaCBpcyB0aGUgXCJnb29kXCIgY2FzZVxuICAgIC8vIFRDWllYXG4gICAgc3RhcnRpbmRleCA9IHNpemV6ICogY2hhbm5lbEluZGV4O1xuICAgIGluY3JlbWVudHogPSAxO1xuICB9IGVsc2UgaWYgKGRpbWVuc2lvbk9yZGVyID09PSBcIlhZQ1pUXCIpIHtcbiAgICAvLyB3ZSBoYXZlIHRvIGxvb3AgZGlmZmVyZW50bHkgdG8gaW5jcmVtZW50IGNoYW5uZWxzXG4gICAgLy8gVFpDWVhcbiAgICBzdGFydGluZGV4ID0gY2hhbm5lbEluZGV4O1xuICAgIGluY3JlbWVudHogPSBzaXplYztcbiAgfVxuXG4gIC8vIGh1Z2UgYXNzdW1wdGlvbjogcGxhbmVzIGFyZSBpbiBhIHBhcnRpY3VsYXIgb3JkZXIgcmVsYXRpdmUgdG8geiBhbmQgY1xuXG4gIC8vIGdldCBmaXJzdCBwbGFuZSwgdG8gZ2V0IHNvbWUgZGV0YWlscyBhYm91dCB0aGUgaW1hZ2VcbiAgY29uc3QgaW1hZ2UgPSBhd2FpdCB0aWZmLmdldEltYWdlKHN0YXJ0aW5kZXgpO1xuICAvLyBvbiBmaXJzdCBpbWFnZSwgc2V0IHVwIHNvbWUgc3R1ZmY6XG4gIGNvbnN0IHNhbXBsZUZvcm1hdCA9IGltYWdlLmdldFNhbXBsZUZvcm1hdCgpO1xuICBjb25zdCBieXRlc1BlclBpeGVsID0gaW1hZ2UuZ2V0Qnl0ZXNQZXJQaXhlbCgpO1xuICAvLyBhbGxvY2F0ZSBhIGJ1ZmZlciBmb3Igb25lIGNoYW5uZWxcbiAgY29uc3QgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHRpbGVzaXpleCAqIHRpbGVzaXpleSAqIHNpemV6ICogYnl0ZXNQZXJQaXhlbCk7XG4gIGNvbnN0IHU4ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgZm9yIChsZXQgaW1hZ2VJbmRleCA9IHN0YXJ0aW5kZXgsIHpzbGljZSA9IDA7IHpzbGljZSA8IHNpemV6OyBpbWFnZUluZGV4ICs9IGluY3JlbWVudHosICsrenNsaWNlKSB7XG4gICAgY29uc3QgaW1hZ2UgPSBhd2FpdCB0aWZmLmdldEltYWdlKGltYWdlSW5kZXgpO1xuICAgIC8vIGRvd25sb2FkIGFuZCBkb3duc2FtcGxlIG9uIGNsaWVudFxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGltYWdlLnJlYWRSYXN0ZXJzKHtcbiAgICAgIHdpZHRoOiB0aWxlc2l6ZXgsXG4gICAgICBoZWlnaHQ6IHRpbGVzaXpleVxuICAgIH0pO1xuICAgIGNvbnN0IGFycmF5cmVzdWx0ID0gQXJyYXkuaXNBcnJheShyZXN1bHQpID8gcmVzdWx0WzBdIDogcmVzdWx0O1xuICAgIC8vIGRlcG9zaXQgaW4gZnVsbCBjaGFubmVsIGFycmF5IGluIHRoZSByaWdodCBwbGFjZVxuICAgIGNvbnN0IG9mZnNldCA9IHpzbGljZSAqIHRpbGVzaXpleCAqIHRpbGVzaXpleTtcbiAgICBpZiAoYXJyYXlyZXN1bHQuQllURVNfUEVSX0VMRU1FTlQgPiA0KSB7XG4gICAgICB0aHJvdyBuZXcgVm9sdW1lTG9hZEVycm9yKFwiYnl0ZSBzaXplIG5vdCBzdXBwb3J0ZWQgeWV0OiBcIiArIGFycmF5cmVzdWx0LkJZVEVTX1BFUl9FTEVNRU5ULCB7XG4gICAgICAgIHR5cGU6IFZvbHVtZUxvYWRFcnJvclR5cGUuSU5WQUxJRF9NRVRBREFUQVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChhcnJheXJlc3VsdC5CWVRFU19QRVJfRUxFTUVOVCAhPT0gYnl0ZXNQZXJTYW1wbGUpIHtcbiAgICAgIHRocm93IG5ldyBWb2x1bWVMb2FkRXJyb3IoXCJ0aWZmIGJ5dGVzIHBlciBlbGVtZW50IG1pc21hdGNoIHdpdGggT01FIG1ldGFkYXRhXCIsIHtcbiAgICAgICAgdHlwZTogVm9sdW1lTG9hZEVycm9yVHlwZS5JTlZBTElEX01FVEFEQVRBXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdTguc2V0KG5ldyBVaW50OEFycmF5KGFycmF5cmVzdWx0LmJ1ZmZlciksIG9mZnNldCAqIGFycmF5cmVzdWx0LkJZVEVTX1BFUl9FTEVNRU5UKTtcbiAgICB9XG4gIH1cbiAgLy8gYWxsIHNsaWNlcyBjb2xsZWN0ZWQsIG5vdyByZXNhbXBsZSB0byA4IGJpdHMgZnVsbCBkYXRhIHJhbmdlXG4gIGNvbnN0IHNyYyA9IGNhc3RUb0FycmF5KGJ1ZmZlciwgYnl0ZXNQZXJQaXhlbCwgc2FtcGxlRm9ybWF0KTtcbiAgbGV0IGNobWluID0gc3JjWzBdO1xuICBsZXQgY2htYXggPSBzcmNbMF07XG4gIGZvciAobGV0IGogPSAwOyBqIDwgc3JjLmxlbmd0aDsgKytqKSB7XG4gICAgY29uc3QgdmFsID0gc3JjW2pdO1xuICAgIGlmICh2YWwgPCBjaG1pbikge1xuICAgICAgY2htaW4gPSB2YWw7XG4gICAgfVxuICAgIGlmICh2YWwgPiBjaG1heCkge1xuICAgICAgY2htYXggPSB2YWw7XG4gICAgfVxuICB9XG4gIGNvbnN0IG91dCA9IG5ldyBVaW50OEFycmF5KHNyYy5sZW5ndGgpO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IHNyYy5sZW5ndGg7ICsraikge1xuICAgIG91dFtqXSA9IChzcmNbal0gLSBjaG1pbikgLyAoY2htYXggLSBjaG1pbikgKiAyNTU7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhOiBvdXQsXG4gICAgY2hhbm5lbDogY2hhbm5lbEluZGV4LFxuICAgIHJhbmdlOiBbY2htaW4sIGNobWF4XSxcbiAgICBpc0Vycm9yOiBmYWxzZVxuICB9O1xufVxuc2VsZi5vbm1lc3NhZ2UgPSBhc3luYyBlID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBsb2FkVGlmZkNoYW5uZWwoZSk7XG4gICAgc2VsZi5wb3N0TWVzc2FnZShyZXN1bHQsIFtyZXN1bHQuZGF0YS5idWZmZXJdKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgc2VsZi5wb3N0TWVzc2FnZSh7XG4gICAgICBpc0Vycm9yOiB0cnVlLFxuICAgICAgZXJyb3I6IHNlcmlhbGl6ZUVycm9yKGVycilcbiAgICB9KTtcbiAgfVxufTsiXSwibmFtZXMiOlsiZnJvbVVybCIsInNlcmlhbGl6ZUVycm9yIiwiVm9sdW1lTG9hZEVycm9yIiwiVm9sdW1lTG9hZEVycm9yVHlwZSIsIlNBTVBMRUZPUk1BVF9VSU5UIiwiU0FNUExFRk9STUFUX0lOVCIsIlNBTVBMRUZPUk1BVF9JRUVFRlAiLCJjYXN0VG9BcnJheSIsImJ1ZiIsImJ5dGVzUGVyUGl4ZWwiLCJzYW1wbGVGb3JtYXQiLCJGbG9hdDMyQXJyYXkiLCJJbnQ4QXJyYXkiLCJJbnQxNkFycmF5IiwiSW50MzJBcnJheSIsIlVpbnQ4QXJyYXkiLCJVaW50MTZBcnJheSIsIlVpbnQzMkFycmF5IiwiY29uc29sZSIsImVycm9yIiwibG9hZFRpZmZDaGFubmVsIiwiZSIsImNoYW5uZWxJbmRleCIsImRhdGEiLCJjaGFubmVsIiwidGlsZXNpemV4IiwidGlsZXNpemV5Iiwic2l6ZXoiLCJzaXplYyIsImRpbWVuc2lvbk9yZGVyIiwiYnl0ZXNQZXJTYW1wbGUiLCJ0aWZmIiwidXJsIiwiYWxsb3dGdWxsRmlsZSIsInN0YXJ0aW5kZXgiLCJpbmNyZW1lbnR6IiwiaW1hZ2UiLCJnZXRJbWFnZSIsImdldFNhbXBsZUZvcm1hdCIsImdldEJ5dGVzUGVyUGl4ZWwiLCJidWZmZXIiLCJBcnJheUJ1ZmZlciIsInU4IiwiaW1hZ2VJbmRleCIsInpzbGljZSIsInJlc3VsdCIsInJlYWRSYXN0ZXJzIiwid2lkdGgiLCJoZWlnaHQiLCJhcnJheXJlc3VsdCIsIkFycmF5IiwiaXNBcnJheSIsIm9mZnNldCIsIkJZVEVTX1BFUl9FTEVNRU5UIiwidHlwZSIsIklOVkFMSURfTUVUQURBVEEiLCJzZXQiLCJzcmMiLCJjaG1pbiIsImNobWF4IiwiaiIsImxlbmd0aCIsInZhbCIsIm91dCIsInJhbmdlIiwiaXNFcnJvciIsInNlbGYiLCJvbm1lc3NhZ2UiLCJwb3N0TWVzc2FnZSIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../volume-viewer/es/workers/FetchTiffWorker.js\n");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-volume-viewer_node_modules_zarrita_core_dist_src_errors_js-volume-viewer_node_modules-4b02bd"], () => (__webpack_require__("../volume-viewer/es/workers/FetchTiffWorker.js")))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			"volume-viewer_es_workers_FetchTiffWorker_js": 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_aics_web_3d_viewer"] = self["webpackChunk_aics_web_3d_viewer"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			return __webpack_require__.e("vendors-volume-viewer_node_modules_zarrita_core_dist_src_errors_js-volume-viewer_node_modules-4b02bd").then(next);
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;