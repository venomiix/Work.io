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

/***/ "./WORK/app.js":
/*!*********************!*\
  !*** ./WORK/app.js ***!
  \*********************/
/***/ (() => {

eval("// WORK/app.js\n\nconsole.log('JS працює');\ndocument.addEventListener('DOMContentLoaded', function () {\n  console.log('Сторінка повністю завантажена!');\n});\n\n//Vinitsia\nvar map = L.map('map').setView([49.2331, 28.4682], 13);\nL.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}@2x.png?key=r1J4dbqT4CFQR11lLe9T#15.6/48.45092/27.80513', {\n  tileSize: 512,\n  zoomOffset: -1,\n  attribution: 'Юрченко Валерій'\n}).addTo(map);\nL.marker([49.2331, 28.4682]).addTo(map).bindPopup('Вінниця.').openPopup();\nL.marker([49.2434, 28.4815]).addTo(map).bindPopup('*');\nwindow.addEventListener('resize', function () {\n  map.invalidateSize();\n});\n\n// Карта могилів подільськ\nvar map2 = L.map('map2').setView([48.4587, 27.7924], 13);\nL.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}@2x.png?key=r1J4dbqT4CFQR11lLe9T#15.6/48.45092/27.80513', {\n  tileSize: 512,\n  zoomOffset: -1,\n  attribution: 'Могилів Подільський'\n}).addTo(map2);\nL.marker([48.4587, 27.7924]).addTo(map2).bindPopup('Могилів – Подільськ.').openPopup();\nwindow.addEventListener('resize', function () {\n  map2.invalidateSize();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9XT1JLL2FwcC5qcyIsIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYXAiLCJMIiwic2V0VmlldyIsInRpbGVMYXllciIsInRpbGVTaXplIiwiem9vbU9mZnNldCIsImF0dHJpYnV0aW9uIiwiYWRkVG8iLCJtYXJrZXIiLCJiaW5kUG9wdXAiLCJvcGVuUG9wdXAiLCJ3aW5kb3ciLCJpbnZhbGlkYXRlU2l6ZSIsIm1hcDIiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL3RhaWx3aW5kLXRlc3QvLi9XT1JLL2FwcC5qcz8zZTQ0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFdPUksvYXBwLmpzXG5cbmNvbnNvbGUubG9nKCdKUyDQv9GA0LDRhtGO0ZQnKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygn0KHRgtC+0YDRltC90LrQsCDQv9C+0LLQvdGW0YHRgtGOINC30LDQstCw0L3RgtCw0LbQtdC90LAhJyk7XG59KTtcblxuXG5cblxuXG4gIC8vVmluaXRzaWFcbnZhciBtYXAgPSBMLm1hcCgnbWFwJykuc2V0VmlldyhbNDkuMjMzMSwgMjguNDY4Ml0sIDEzKTtcblxuTC50aWxlTGF5ZXIoJ2h0dHBzOi8vYXBpLm1hcHRpbGVyLmNvbS9tYXBzL3N0cmVldHMtdjIve3p9L3t4fS97eX1AMngucG5nP2tleT1yMUo0ZGJxVDRDRlFSMTFsTGU5VCMxNS42LzQ4LjQ1MDkyLzI3LjgwNTEzJywge1xuICAgIHRpbGVTaXplOiA1MTIsXG4gICAgem9vbU9mZnNldDogLTEsXG4gICAgYXR0cmlidXRpb246ICfQrtGA0YfQtdC90LrQviDQktCw0LvQtdGA0ZbQuSdcbn0pLmFkZFRvKG1hcCk7XG5cblxuXG5MLm1hcmtlcihbNDkuMjMzMSwgMjguNDY4Ml0pLmFkZFRvKG1hcClcbiAgICAuYmluZFBvcHVwKCfQktGW0L3QvdC40YbRjy4nKVxuICAgIC5vcGVuUG9wdXAoKTtcblxuICAgIEwubWFya2VyKFs0OS4yNDM0LCAyOC40ODE1XSkuYWRkVG8obWFwKVxuICAgICAgICAuYmluZFBvcHVwICgnKicpO1xuICAgICAgICBcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbWFwLmludmFsaWRhdGVTaXplKCk7XG4gICAgfSk7XG5cbiAgICBcblxuICAgIC8vINCa0LDRgNGC0LAg0LzQvtCz0LjQu9GW0LIg0L/QvtC00ZbQu9GM0YHRjNC6XG4gICAgdmFyIG1hcDIgPSBMLm1hcCgnbWFwMicpLnNldFZpZXcoWzQ4LjQ1ODcsIDI3Ljc5MjRdLCAxMyk7XG5cbiAgICBMLnRpbGVMYXllcignaHR0cHM6Ly9hcGkubWFwdGlsZXIuY29tL21hcHMvc3RyZWV0cy12Mi97en0ve3h9L3t5fUAyeC5wbmc/a2V5PXIxSjRkYnFUNENGUVIxMWxMZTlUIzE1LjYvNDguNDUwOTIvMjcuODA1MTMnLCB7XG4gICAgICAgIHRpbGVTaXplOiA1MTIsXG4gICAgICAgIHpvb21PZmZzZXQ6IC0xLFxuICAgIGF0dHJpYnV0aW9uOiAn0JzQvtCz0LjQu9GW0LIg0J/QvtC00ZbQu9GM0YHRjNC60LjQuSdcbn0pLmFkZFRvKG1hcDIpO1xuXG5MLm1hcmtlcihbNDguNDU4NywgMjcuNzkyNF0pLmFkZFRvKG1hcDIpXG4gICAgLmJpbmRQb3B1cCgn0JzQvtCz0LjQu9GW0LIg4oCTINCf0L7QtNGW0LvRjNGB0YzQui4nKVxuICAgIC5vcGVuUG9wdXAoKTtcblxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBtYXAyLmludmFsaWRhdGVTaXplKCk7XG4gICAgfSk7Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO0FBRXhCQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07RUFDaERILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdDQUFnQyxDQUFDO0FBQ2pELENBQUMsQ0FBQzs7QUFNQTtBQUNGLElBQUlHLEdBQUcsR0FBR0MsQ0FBQyxDQUFDRCxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUNFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUM7QUFFdERELENBQUMsQ0FBQ0UsU0FBUyxDQUFDLDZHQUE2RyxFQUFFO0VBQ3ZIQyxRQUFRLEVBQUUsR0FBRztFQUNiQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0VBQ2RDLFdBQVcsRUFBRTtBQUNqQixDQUFDLENBQUMsQ0FBQ0MsS0FBSyxDQUFDUCxHQUFHLENBQUM7QUFJYkMsQ0FBQyxDQUFDTyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQ0QsS0FBSyxDQUFDUCxHQUFHLENBQUMsQ0FDbENTLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FDckJDLFNBQVMsQ0FBQyxDQUFDO0FBRVpULENBQUMsQ0FBQ08sTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUNELEtBQUssQ0FBQ1AsR0FBRyxDQUFDLENBQ2xDUyxTQUFTLENBQUUsR0FBRyxDQUFDO0FBR3BCRSxNQUFNLENBQUNaLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFXO0VBQ3pDQyxHQUFHLENBQUNZLGNBQWMsQ0FBQyxDQUFDO0FBQ3hCLENBQUMsQ0FBQzs7QUFJRjtBQUNBLElBQUlDLElBQUksR0FBR1osQ0FBQyxDQUFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUNFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUM7QUFFeERELENBQUMsQ0FBQ0UsU0FBUyxDQUFDLDZHQUE2RyxFQUFFO0VBQ3ZIQyxRQUFRLEVBQUUsR0FBRztFQUNiQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0VBQ2xCQyxXQUFXLEVBQUU7QUFDakIsQ0FBQyxDQUFDLENBQUNDLEtBQUssQ0FBQ00sSUFBSSxDQUFDO0FBRWRaLENBQUMsQ0FBQ08sTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUNELEtBQUssQ0FBQ00sSUFBSSxDQUFDLENBQ25DSixTQUFTLENBQUMsc0JBQXNCLENBQUMsQ0FDakNDLFNBQVMsQ0FBQyxDQUFDO0FBR1pDLE1BQU0sQ0FBQ1osZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQVc7RUFDekNjLElBQUksQ0FBQ0QsY0FBYyxDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDIiwiaWdub3JlTGlzdCI6W119\n//# sourceURL=webpack-internal:///./WORK/app.js\n");

/***/ }),

/***/ "./WORK/scss/style.scss":
/*!******************************!*\
  !*** ./WORK/scss/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9XT1JLL3Njc3Mvc3R5bGUuc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWlsd2luZC10ZXN0Ly4vV09SSy9zY3NzL3N0eWxlLnNjc3M/YWY2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./WORK/scss/style.scss\n");

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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktailwind_test"] = self["webpackChunktailwind_test"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./WORK/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./WORK/scss/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;