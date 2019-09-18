(window["webpackJsonpstarwars"] = window["webpackJsonpstarwars"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/main.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/main.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".grid-container{\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: repeat(auto-fill,minmax(300px, 1fr));\n  grid-template-rows: 1fr;\n}\n\narticle:hover{\n  cursor: pointer;\n\n  box-shadow: 0px 0px 5px 2px rgba( 169,169,169, .2);\n}\n\ninput{\n  width: 50%;\n}\n\n\n/*\n.sw-bg{\nbackground-image: url('./img/sw_bg_1.jpg');\n}*/\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/containers/App.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/containers/App.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  animation: App-logo-spin infinite 20s linear;\n  height: 40vmin;\n  pointer-events: none;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/actions.js":
/*!************************!*\
  !*** ./src/actions.js ***!
  \************************/
/*! exports provided: setSearchfield, requestPeople */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSearchfield", function() { return setSearchfield; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestPeople", function() { return requestPeople; });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/constants.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_constants_js__WEBPACK_IMPORTED_MODULE_0__);

const setSearchfield = text => {
  return {
    type: _constants_js__WEBPACK_IMPORTED_MODULE_0__["CHANGE_SEARCH_FIELD"],
    payload: text
  };
};
const requestPeople = dispatch => {
  //requests all star wars characters
  dispatch({
    type: _constants_js__WEBPACK_IMPORTED_MODULE_0__["REQUEST_PEOPLE_PENDING"]
  });
  fetch("https://swapi.co/api/people").then(response => response.json()).then(data => console.log(data));
};

/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.css */ "./src/components/main.css");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ellahipah/Desktop/Udemy/The Complete WebDev 0-Mastery Course/starwars/src/components/Card.js";



const Card = prop => {
  //console.log(prop)
  //const species = prop.species;
  // console.log(test);
  return (//pa2 center bg-white pa4-ns mv3 ba b--black-10
    //<div class='fl w-100 w-25-ns pa2'>
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
      class: " ba b--black-10 pa4 bg-white ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "tc",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "http://tachyons.io/img/avatar_1.jpg",
      class: "br-100 h3 w3 dib",
      title: "Photo of a kitty staring at you",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      class: "f3 ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: undefined
    }, prop.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      class: "mw3 bb bw1 b--black-10",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: undefined
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "tl",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      class: "lh-copy measure center f5 black-70",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      class: "b",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: undefined
    }, "Species:"), "  ", prop.species), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      class: "lh-copy measure center f5 black-70",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      class: "b",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    }, "Gender:"), "   ", prop.gender), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      class: "lh-copy measure center f5 black-70",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      class: "b",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: undefined
    }, "Weight:"), "   ", prop.weight), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      class: "lh-copy measure center f5 black-70",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      class: "b",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: undefined
    }, "Height:"), "   ", prop.height))) //  </div>

  );
};

/* harmony default export */ __webpack_exports__["default"] = (Card); // import React from 'react';
//
// const Card = (prop)=>{
//   return(
//
//     <div className = 'bg-light-green dib br3 pa3 ma3 grow shadow-5'>
//       <img alt='robot' src={`https://robohash.org/${prop.id}?200x200`}/>
//       <div className='tc'>
//         <h2>{prop.name}</h2>
//         <p>{prop.email}</p>
//       </div>
//     </div>
//   );
// }
//
// export default Card;

/***/ }),

/***/ "./src/components/CardList.js":
/*!************************************!*\
  !*** ./src/components/CardList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "./src/components/Card.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.css */ "./src/components/main.css");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ellahipah/Desktop/Udemy/The Complete WebDev 0-Mastery Course/starwars/src/components/CardList.js";


 //card list --> Person -> Card

const CardList = ({
  people
}) => {
  console.log({
    people
  });
  const cardComponent = people.map((user, i) => {
    //  console.log(user[i] + '  ' + species[i])
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
      key: i,
      name: user.name,
      species: user.species,
      gender: user.gender,
      weight: user.weight,
      height: user.height,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "grid-container pa4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, " ", cardComponent, " ");
};

/* harmony default export */ __webpack_exports__["default"] = (CardList);

/***/ }),

/***/ "./src/components/SearchBox.js":
/*!*************************************!*\
  !*** ./src/components/SearchBox.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.css */ "./src/components/main.css");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ellahipah/Desktop/Udemy/The Complete WebDev 0-Mastery Course/starwars/src/components/SearchBox.js";



const SearchBox = searchField => {
  console.log(searchField.onChange);
  const change = searchField.onChange;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    class: "w-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Search: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    class: "ba b--light-gray br4 h2 f3",
    onChange: change,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBox);

/***/ }),

/***/ "./src/components/main.css":
/*!*********************************!*\
  !*** ./src/components/main.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./main.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/main.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./main.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/main.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./main.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/main.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';

/***/ }),

/***/ "./src/containers/App.css":
/*!********************************!*\
  !*** ./src/containers/App.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/containers/App.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/containers/App.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/containers/App.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/containers/App.js":
/*!*******************************!*\
  !*** ./src/containers/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logo.svg */ "./src/logo.svg");
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_logo_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/containers/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CardList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CardList */ "./src/components/CardList.js");
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SearchBox */ "./src/components/SearchBox.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./src/actions.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apiCall__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apiCall */ "./src/containers/apiCall.js");
var _jsxFileName = "/Users/ellahipah/Desktop/Udemy/The Complete WebDev 0-Mastery Course/starwars/src/containers/App.js";






 // function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends react__WEBPACK_IMPORTED_MODULE_5__["Component"] {
  constructor() {
    super();

    this.getPeople = async link => {
      const peopleObj = [];
      const obj = await Object(_apiCall__WEBPACK_IMPORTED_MODULE_6__["apiCall"])(link); //gets all people

      const tmpPpl = obj.results; //actual array of people

      console.log(obj);

      for (var i = 0; i < tmpPpl.length; i++) {
        //console.log(obj[i].name)
        const person = tmpPpl[i];
        const speciesObj = await Object(_apiCall__WEBPACK_IMPORTED_MODULE_6__["apiCall"])(tmpPpl[i].species);
        const spec = speciesObj.name;
        const weight_conv = person.mass * 2.205;
        const weight_in_lbs = weight_conv.toFixed(1).toString().concat(' lbs');
        let m = {
          name: person.name,
          species: spec,
          gender: person.gender,
          height: person.height,
          weight: weight_in_lbs
        };
        peopleObj.push(m);
      }

      this.setState({
        people: peopleObj
      });
      console.log(peopleObj);
    };

    this.searchHandle = event => {
      console.log(event.target.value);
      this.setState({
        search: event.target.value
      });
    };

    this.state = {
      people: [],
      search: '' // species: [],
      // fullInfo:[],
      // const getPeople =>user{
      //   this.setState({getPeople:user})
      // }
      // const setPeople=> (){
      //
      // }

    };
  } //---------APPROACH #2--------------//


  componentDidMount() {
    this.getPeople('https://swapi.co/api/people/');
  }

  //---------------------------------APPROACH #1-------------------------//
  // componentDidMount(){
  //   this.setRoot()
  //   //this.setSpecies()
  //
  // //  characters = []
  // //
  // // console.log(characters)
  // // // const speciesLinks = characters.map( (person) =>{
  // // //   return person.species
  // // // })
  // // //const species = getSpeciesData(characters)
  // // this.state.people = characters
  // //
  // // console.log(this.state.people.resolv)
  //
  // }
  //
  // setRoot = async () =>{
  //   // const arr1 = await getPeopleData('https://swapi.co/api/people/')
  //   // //console.log(arr1);
  //   // const species = []
  //   // for(var i =0; i < arr1.length; i++){
  //   //   species.push(arr1[i].species[0])
  //   // //  console.log(species)
  //   // //  console.log(i)
  //   // }
  //   // const  obj = await getSpeciesData(species)
  //   // console.log(arr1)
  //
  //   this.setState({people:await getPeopleData('https://swapi.co/api/people/')})
  //   console.log(this.state)
  //   const tmp = this.state.people
  //   console.log(tmp)
  //   const species = []
  //   for(var i =0; i < tmp.length; i++){
  //     species.push(tmp[i].species[0])
  //   //  console.log(species)
  //   //  console.log(i)
  //   }
  //   console.log(species)
  //   this.setState({species: await getSpeciesData(species)})
  //   console.log(this.state)
  //   this.setSpecies()
  // }
  //
  //
  // setSpecies =  ()=>{
  //   const people = this.state.people
  //   const species = this.state.species
  //   console.log(species)
  //   for(var i = 0; i < people.length; i++){
  //     //console.log(species[i])
  //     people[i].species = species[i]
  //   }
  //   this.setState({fullInfo: people})
  // //  console.log(people)
  //
  // }
  render() {
    //const {fullInfo}= this.state
    const _this$state = this.state,
          people = _this$state.people,
          search = _this$state.search; //CREATES AN ARRAY OF PEOPLE THAT INCLUDE THE FILTERED TEXT

    const filtered = people.filter(person => {
      return person.name.toLowerCase().includes(search.toLowerCase());
    });
    console.log(filtered);
    console.log({
      people
    }); //   const b = {...people, ...species}
    //   console.log(b)
    //console.log("render 104 " +this.state.people)

    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      class: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("nav", {
      class: "flex justify-between bb b--black-10 bg-blue",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
      class: "link white-70 hover-white no-underline flex items-center pa3",
      href: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("svg", {
      class: "dib h1 w1",
      "data-icon": "grid",
      viewBox: "0 0 32 32",
      style: {
        fill: "black"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, "Super Normal Icon Mark"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
      d: "M2 2 L10 2 L10 10 L2 10z M12 2 L20 2 L20 10 L12 10z M22 2 L30 2 L30 10 L22 10z M2 12 L10 12 L10 20 L2 20z M12 12 L20 12 L20 20 L12 20z M22 12 L30 12 L30 20 L22 20z M2 22 L10 22 L10 30 L2 30z M12 22 L20 22 L20 30 L12 30z M22 22 L30 22 L30 30 L22 30z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      class: "flex-grow pa3 flex items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
      class: "f6 link dib white dim mr3 mr4-ns",
      href: "#0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, "About"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
      class: "f6 link dib white dim mr3 mr4-ns",
      href: "#0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, "Sign In"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
      class: "f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20",
      href: "#0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, "Sign Up"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      class: "w-100 sw-bg ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      class: "flex justify-center ma3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_SearchBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onChange: this.searchHandle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CardList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      people: filtered,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }))) // <Card
    //   name = {people.name}
    //   height = {people.height}
    //   hair = {people.hair_color}
    // />
    ;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/containers/apiCall.js":
/*!***********************************!*\
  !*** ./src/containers/apiCall.js ***!
  \***********************************/
/*! exports provided: apiCall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiCall", function() { return apiCall; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const apiCall = async link => {
  const fetchResponse = await fetch(link);
  const getObject = await fetchResponse.json();
  return getObject;
}; // export const getPeopleData = async (link) =>{
//   console.log(link)
//   const object = await apiCall(link)
// //  console.log(object)
//   const arr = []
//   const arr1 = arr.concat(object.results)
// //  console.log(arr1)
//   return arr1
// }
//
// export const getSpeciesData = async (links) =>{
//   const speciesObject= []
//   for(var i =0; i<links.length;i++){
//     //console.log(i)
//     const obj = await apiCall(links[i])
//     speciesObject.push(obj.name)
//   }
//   console.log(speciesObject)
//   return speciesObject
//
// }
//
// export const getSpeciesLinks = (people) =>{
//   const links = people.map((person)=>{
//     return person.species
//   })
//   return links
// }

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _containers_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/App */ "./src/containers/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tachyons */ "./node_modules/tachyons/css/tachyons.css");
/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tachyons__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/ellahipah/Desktop/Udemy/The Complete WebDev 0-Mastery Course/starwars/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/logo.svg":
/*!**********************!*\
  !*** ./src/logo.svg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.5d5d9eef.svg";

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/ellahipah/Desktop/Udemy/The Complete WebDev 0-Mastery Course/starwars/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/ellahipah/Desktop/Udemy/The Complete WebDev 0-Mastery Course/starwars/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map