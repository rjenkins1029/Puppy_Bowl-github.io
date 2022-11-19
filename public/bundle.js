/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/ajaxHelpers.js":
/*!*******************************!*\
  !*** ./client/ajaxHelpers.js ***!
  \*******************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (40:53)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n|   try {\n|     \n>     const response = await fetch(`${APIURL}players/` {\n|       method: \"POST\",\n|       body: JSON.stringify(playerObj),");

/***/ }),

/***/ "./client/renderHelpers.js":
/*!*********************************!*\
  !*** ./client/renderHelpers.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAllPlayers": () => (/* binding */ renderAllPlayers),
/* harmony export */   "renderNewPlayerForm": () => (/* binding */ renderNewPlayerForm),
/* harmony export */   "renderSinglePlayer": () => (/* binding */ renderSinglePlayer)
/* harmony export */ });
/* harmony import */ var _ajaxHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajaxHelpers */ "./client/ajaxHelpers.js");
/* harmony import */ var _ajaxHelpers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ajaxHelpers__WEBPACK_IMPORTED_MODULE_0__);


const playerContainer = document.getElementById('all-players-container');
const newPlayerFormContainer = document.getElementById('new-player-form');

const renderAllPlayers = (playerList) => {
  // First check if we have any data before trying to render it!
  if (!playerList || !playerList.length) {
    playerContainer.innerHTML = '<h3>No players to display!</h3>';
    return;
  }

  // Loop through the list of players, and construct some HTML to display each one
  let playerContainerHTML = '';
  for (let i = 0; i < playerList.length; i++) {
    const pup = playerList[i];
    let pupHTML = `
      <div class="single-player-card">
        <div class="header-info">
          <p class="pup-title">${pup.name}</p>
          <p class="pup-number">#${pup.id}</p>
        </div>
        <img src="${pup.imageUrl}" alt="photo of ${pup.name} the puppy">
        <button class="detail-button" data-id=${pup.id}>See details</button>
      </div>
    `;
    playerContainerHTML += pupHTML;
  }

  // After looping, fill the `playerContainer` div with the HTML we constructed above
  playerContainer.innerHTML = playerContainerHTML;

  // Now that the HTML for all players has been added to the DOM,
  // we want to grab those "See details" buttons on each player
  // and attach a click handler to each one
  let detailButtons = [...document.getElementsByClassName('detail-button')];
  for (let i = 0; i < detailButtons.length; i++) {
    const button = detailButtons[i];

    button.addEventListener('click', async () => {

      const player = await (0,_ajaxHelpers__WEBPACK_IMPORTED_MODULE_0__.fetchSinglePlayer)(button.dataset.id);
      //console.log(player);
      renderSinglePlayer(player)
    });
  }
};

const renderSinglePlayer = (playerObj) => {
  if (!playerObj || !playerObj.id) {
    playerContainer.innerHTML = "<h3>Couldn't find data for this player!</h3>";
    return;
  }

  let pupHTML = `
    <div class="single-player-view">
      <div class="header-info">
        <p class="pup-title">${playerObj.name}</p>
        <p class="pup-number">#${playerObj.id}</p>
      </div>
      <p>Team: ${playerObj.team ? playerObj.team.name : 'Unassigned'}</p>
      <p>Breed: ${playerObj.breed}</p>
      <img src="${playerObj.imageUrl}" alt="photo of ${playerObj.name
    } the puppy">
      <button id="see-all">Back to all players</button>
    </div>
  `;

  playerContainer.innerHTML = pupHTML;

  let seeAll = document.getElementById('see-all');


  seeAll.addEventListener('click', async () => {

    const players = await (0,_ajaxHelpers__WEBPACK_IMPORTED_MODULE_0__.fetchAllPlayers)(seeAll.dataset.id);
    //console.log(players);
    renderAllPlayers(players);
  });
};


const renderNewPlayerForm = () => {
  let formHTML = `
    <form>
      <label for="name">Name:</label>
      <input type="text" name="name" />
      <label for="breed">Breed:</label>
      <input type="text" name="breed" />
      <button type="submit">Submit</button>
    </form>
  `;
  newPlayerFormContainer.innerHTML = formHTML;

  let form = document.querySelector('#new-player-form > form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const addPlayers = await (0,_ajaxHelpers__WEBPACK_IMPORTED_MODULE_0__.fetchAllPlayers)();
    renderAllPlayers(addPlayers);

    renderNewPlayerForm();
  });

};



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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ajaxHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajaxHelpers */ "./client/ajaxHelpers.js");
/* harmony import */ var _ajaxHelpers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ajaxHelpers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _renderHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderHelpers */ "./client/renderHelpers.js");



const init = async () => {
  const players = await (0,_ajaxHelpers__WEBPACK_IMPORTED_MODULE_0__.fetchAllPlayers)()
  ;(0,_renderHelpers__WEBPACK_IMPORTED_MODULE_1__.renderAllPlayers)(players)

  ;(0,_renderHelpers__WEBPACK_IMPORTED_MODULE_1__.renderNewPlayerForm)()
}

init()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFNBQVM7QUFDMUMsbUNBQW1DLE9BQU87QUFDMUM7QUFDQSxvQkFBb0IsYUFBYSxrQkFBa0IsVUFBVTtBQUM3RCxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMEJBQTBCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLCtEQUFpQjtBQUM1QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixlQUFlO0FBQzlDLGlDQUFpQyxhQUFhO0FBQzlDO0FBQ0EsaUJBQWlCLG9EQUFvRDtBQUNyRSxrQkFBa0IsZ0JBQWdCO0FBQ2xDLGtCQUFrQixtQkFBbUIsa0JBQWtCO0FBQ3ZELE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZEQUFlO0FBQ3pDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNkRBQWU7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7OztVQ3pHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTitDO0FBQ3dCO0FBQ3ZFO0FBQ0E7QUFDQSx3QkFBd0IsNkRBQWU7QUFDdkMsRUFBRSxpRUFBZ0I7QUFDbEI7QUFDQSxFQUFFLG9FQUFtQjtBQUNyQjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdXBweWJvd2wtd29ya3Nob3AvLi9jbGllbnQvcmVuZGVySGVscGVycy5qcyIsIndlYnBhY2s6Ly9wdXBweWJvd2wtd29ya3Nob3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHVwcHlib3dsLXdvcmtzaG9wL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3B1cHB5Ym93bC13b3Jrc2hvcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHVwcHlib3dsLXdvcmtzaG9wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHVwcHlib3dsLXdvcmtzaG9wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHVwcHlib3dsLXdvcmtzaG9wLy4vY2xpZW50L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkZE5ld1BsYXllciwgZmV0Y2hBbGxQbGF5ZXJzLCBmZXRjaFNpbmdsZVBsYXllciB9IGZyb20gJy4vYWpheEhlbHBlcnMnO1xyXG5cclxuY29uc3QgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbC1wbGF5ZXJzLWNvbnRhaW5lcicpO1xyXG5jb25zdCBuZXdQbGF5ZXJGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1wbGF5ZXItZm9ybScpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckFsbFBsYXllcnMgPSAocGxheWVyTGlzdCkgPT4ge1xyXG4gIC8vIEZpcnN0IGNoZWNrIGlmIHdlIGhhdmUgYW55IGRhdGEgYmVmb3JlIHRyeWluZyB0byByZW5kZXIgaXQhXHJcbiAgaWYgKCFwbGF5ZXJMaXN0IHx8ICFwbGF5ZXJMaXN0Lmxlbmd0aCkge1xyXG4gICAgcGxheWVyQ29udGFpbmVyLmlubmVySFRNTCA9ICc8aDM+Tm8gcGxheWVycyB0byBkaXNwbGF5ITwvaDM+JztcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgbGlzdCBvZiBwbGF5ZXJzLCBhbmQgY29uc3RydWN0IHNvbWUgSFRNTCB0byBkaXNwbGF5IGVhY2ggb25lXHJcbiAgbGV0IHBsYXllckNvbnRhaW5lckhUTUwgPSAnJztcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllckxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IHB1cCA9IHBsYXllckxpc3RbaV07XHJcbiAgICBsZXQgcHVwSFRNTCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cInNpbmdsZS1wbGF5ZXItY2FyZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItaW5mb1wiPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJwdXAtdGl0bGVcIj4ke3B1cC5uYW1lfTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwicHVwLW51bWJlclwiPiMke3B1cC5pZH08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGltZyBzcmM9XCIke3B1cC5pbWFnZVVybH1cIiBhbHQ9XCJwaG90byBvZiAke3B1cC5uYW1lfSB0aGUgcHVwcHlcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGV0YWlsLWJ1dHRvblwiIGRhdGEtaWQ9JHtwdXAuaWR9PlNlZSBkZXRhaWxzPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgIHBsYXllckNvbnRhaW5lckhUTUwgKz0gcHVwSFRNTDtcclxuICB9XHJcblxyXG4gIC8vIEFmdGVyIGxvb3BpbmcsIGZpbGwgdGhlIGBwbGF5ZXJDb250YWluZXJgIGRpdiB3aXRoIHRoZSBIVE1MIHdlIGNvbnN0cnVjdGVkIGFib3ZlXHJcbiAgcGxheWVyQ29udGFpbmVyLmlubmVySFRNTCA9IHBsYXllckNvbnRhaW5lckhUTUw7XHJcblxyXG4gIC8vIE5vdyB0aGF0IHRoZSBIVE1MIGZvciBhbGwgcGxheWVycyBoYXMgYmVlbiBhZGRlZCB0byB0aGUgRE9NLFxyXG4gIC8vIHdlIHdhbnQgdG8gZ3JhYiB0aG9zZSBcIlNlZSBkZXRhaWxzXCIgYnV0dG9ucyBvbiBlYWNoIHBsYXllclxyXG4gIC8vIGFuZCBhdHRhY2ggYSBjbGljayBoYW5kbGVyIHRvIGVhY2ggb25lXHJcbiAgbGV0IGRldGFpbEJ1dHRvbnMgPSBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGV0YWlsLWJ1dHRvbicpXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRldGFpbEJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRldGFpbEJ1dHRvbnNbaV07XHJcblxyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgICAgY29uc3QgcGxheWVyID0gYXdhaXQgZmV0Y2hTaW5nbGVQbGF5ZXIoYnV0dG9uLmRhdGFzZXQuaWQpO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKHBsYXllcik7XHJcbiAgICAgIHJlbmRlclNpbmdsZVBsYXllcihwbGF5ZXIpXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyU2luZ2xlUGxheWVyID0gKHBsYXllck9iaikgPT4ge1xyXG4gIGlmICghcGxheWVyT2JqIHx8ICFwbGF5ZXJPYmouaWQpIHtcclxuICAgIHBsYXllckNvbnRhaW5lci5pbm5lckhUTUwgPSBcIjxoMz5Db3VsZG4ndCBmaW5kIGRhdGEgZm9yIHRoaXMgcGxheWVyITwvaDM+XCI7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBsZXQgcHVwSFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJzaW5nbGUtcGxheWVyLXZpZXdcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1pbmZvXCI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJwdXAtdGl0bGVcIj4ke3BsYXllck9iai5uYW1lfTwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cInB1cC1udW1iZXJcIj4jJHtwbGF5ZXJPYmouaWR9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHA+VGVhbTogJHtwbGF5ZXJPYmoudGVhbSA/IHBsYXllck9iai50ZWFtLm5hbWUgOiAnVW5hc3NpZ25lZCd9PC9wPlxyXG4gICAgICA8cD5CcmVlZDogJHtwbGF5ZXJPYmouYnJlZWR9PC9wPlxyXG4gICAgICA8aW1nIHNyYz1cIiR7cGxheWVyT2JqLmltYWdlVXJsfVwiIGFsdD1cInBob3RvIG9mICR7cGxheWVyT2JqLm5hbWVcclxuICAgIH0gdGhlIHB1cHB5XCI+XHJcbiAgICAgIDxidXR0b24gaWQ9XCJzZWUtYWxsXCI+QmFjayB0byBhbGwgcGxheWVyczwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgcGxheWVyQ29udGFpbmVyLmlubmVySFRNTCA9IHB1cEhUTUw7XHJcblxyXG4gIGxldCBzZWVBbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VlLWFsbCcpO1xyXG5cclxuXHJcbiAgc2VlQWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHBsYXllcnMgPSBhd2FpdCBmZXRjaEFsbFBsYXllcnMoc2VlQWxsLmRhdGFzZXQuaWQpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhwbGF5ZXJzKTtcclxuICAgIHJlbmRlckFsbFBsYXllcnMocGxheWVycyk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlck5ld1BsYXllckZvcm0gPSAoKSA9PiB7XHJcbiAgbGV0IGZvcm1IVE1MID0gYFxyXG4gICAgPGZvcm0+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTo8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIC8+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJicmVlZFwiPkJyZWVkOjwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJicmVlZFwiIC8+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gIGA7XHJcbiAgbmV3UGxheWVyRm9ybUNvbnRhaW5lci5pbm5lckhUTUwgPSBmb3JtSFRNTDtcclxuXHJcbiAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXBsYXllci1mb3JtID4gZm9ybScpO1xyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGFkZFBsYXllcnMgPSBhd2FpdCBmZXRjaEFsbFBsYXllcnMoKTtcclxuICAgIHJlbmRlckFsbFBsYXllcnMoYWRkUGxheWVycyk7XHJcblxyXG4gICAgcmVuZGVyTmV3UGxheWVyRm9ybSgpO1xyXG4gIH0pO1xyXG5cclxufTtcclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBmZXRjaEFsbFBsYXllcnMgfSBmcm9tICcuL2FqYXhIZWxwZXJzJ1xyXG5pbXBvcnQgeyByZW5kZXJBbGxQbGF5ZXJzLCByZW5kZXJOZXdQbGF5ZXJGb3JtIH0gZnJvbSAnLi9yZW5kZXJIZWxwZXJzJ1xyXG5cclxuY29uc3QgaW5pdCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBwbGF5ZXJzID0gYXdhaXQgZmV0Y2hBbGxQbGF5ZXJzKClcclxuICByZW5kZXJBbGxQbGF5ZXJzKHBsYXllcnMpXHJcblxyXG4gIHJlbmRlck5ld1BsYXllckZvcm0oKVxyXG59XHJcblxyXG5pbml0KClcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9