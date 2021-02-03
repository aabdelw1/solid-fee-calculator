module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! evergreen-ui */ "evergreen-ui");
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Ammar/Documents/coding-solution/components/Card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import { Icon } from "@blueprintjs/core";
// import CardPopover from './CardPopover'

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const Card = props => {
  const {
    data,
    index
  } = props;
  const {
    item,
    category,
    userType,
    adType,
    price,
    expiration,
    fee
  } = data; // const [visible, setVisible] = useState(false)

  const convertDate = date => {
    const year = date.split('-')[0];
    const month = months[date.split('-')[1] - 1];
    const day = date.split('-')[2];
    return `${month} ${day}, ${year}`;
  };

  return __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    marginRight: "2rem",
    marginLeft: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    border: "default",
    marginBottom: "2rem",
    display: "flex",
    margin: "1rem",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: "2rem",
    hoverElevation: 1,
    background: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    display: "flex",
    flexDirection: "row",
    paddingY: "0.1rem",
    margin: "1rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
    src: `/static/${category}.png`,
    name: category,
    size: 40,
    marginRight: '1rem',
    marginLeft: '1rem',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    marginY: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    display: "flex",
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    size: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, item), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    size: 300,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, convertDate(expiration)))))), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    display: "flex",
    flexDirection: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    display: "flex",
    flexDirection: "column",
    marginRight: '4rem',
    marginY: "auto",
    textAlign: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, " ", adType == 25 ? "Auction" : "Buy it Now", " $", price)), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    marginY: "0.1rem",
    marginRight: "0.5rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }))));
};

Card.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/Context.js":
/*!*******************************!*\
  !*** ./components/Context.js ***!
  \*******************************/
/*! exports provided: Context, ContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextProvider", function() { return ContextProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/Ammar/Documents/coding-solution/components/Context.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Context = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

const ContextProvider = props => {
  // const { children } = props
  var items = [{
    item: "IPad Pro",
    category: "Electronics",
    userType: "Person",
    adType: "Auction",
    price: 1200,
    expiration: "2021-1-29",
    fee: 25
  }, {
    item: "Yeezes",
    category: "Shoes",
    userType: "Person",
    adType: "Buy it Now",
    price: 300,
    expiration: "2021-3-1",
    fee: 25
  }, {
    item: "Diesel Jeans",
    category: "Clothes",
    userType: "Company",
    adType: "Auction",
    price: 60,
    expiration: "2020-12-09",
    fee: 25
  }];
  const {
    0: allItems,
    1: setAllItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  return __jsx(Context.Provider, {
    value: [allItems, setAllItems],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, props.children);
};



/***/ }),

/***/ "./components/Home.js":
/*!****************************!*\
  !*** ./components/Home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RegisterNewItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterNewItem */ "./components/RegisterNewItem.js");
/* harmony import */ var _Items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Items */ "./components/Items.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! evergreen-ui */ "evergreen-ui");
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/Ammar/Documents/coding-solution/components/Home.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Columns = ['Register ', 'Items'];
const DashboardContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
  display:flex;
  flex: 1;
  max-height: 70vh;
  min-height: 70vh;
`;
const Column = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
  flex: 1;
  background-color: #fafafa;
  border-radius: 2rem;
  margin-right: 5rem;
  margin-top: 10rem;
  margin-left:5rem;
  :last-of-type {
    margin-right: 5;
  }
  overflow: auto;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;

`;

const Home = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(DashboardContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx(Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx(_RegisterNewItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  })), __jsx(Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx(_Items__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./components/Items.js":
/*!*****************************!*\
  !*** ./components/Items.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! evergreen-ui */ "evergreen-ui");
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Context */ "./components/Context.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
var _jsxFileName = "/Users/Ammar/Documents/coding-solution/components/Items.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ColumnContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  flex: 1;
  background-color: #fafafa;
  border-radius: .5rem;
  margin-right: 1rem;
  :last-of-type {
    margin-right: 0;
  }
  overflow: auto;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
`;

const Items = () => {
  const {
    0: loading,
    1: setloading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: allItems,
    1: setAllItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_3__["Context"]);
  return __jsx(ColumnContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Pane"], {
    display: "flex",
    flexDirection: "row",
    marginTop: "2rem",
    marginLeft: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    marginLeft: "1rem",
    size: 800,
    flex: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "Items"), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    marginLeft: ".5rem",
    marginTop: "0.5rem",
    marginRight: 16,
    size: 600,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "Total: ", allItems && allItems.length)), loading && __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx(Spinner, {
    margin: "auto",
    marginTop: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  })), allItems.length == 0 && __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Pane"], {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "muted",
    size: 600,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "\uD83D\uDE25")), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "No Items in Listing"))), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Pane"], {
    marginTop: "2.5rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, allItems.length > 0 && allItems.map((item, index) => {
    return __jsx(_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
      index: index,
      data: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: undefined
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Items);

/***/ }),

/***/ "./components/RegisterNewItem.js":
/*!***************************************!*\
  !*** ./components/RegisterNewItem.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! evergreen-ui */ "evergreen-ui");
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reactions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reactions/component */ "@reactions/component");
/* harmony import */ var _reactions_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reactions_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Context */ "./components/Context.js");

var _jsxFileName = "/Users/Ammar/Documents/coding-solution/components/RegisterNewItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const RegisterNewItem = () => {
  const {
    0: allItems,
    1: setAllItems,
    2: test,
    3: setTest
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_4__["Context"]); // const copyItems = allItems

  const date = new Date();
  const {
    0: item,
    1: setItem
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: category,
    1: setCategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('Electronics');
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: ad,
    1: setAd
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(25);
  const {
    0: price,
    1: setPrice
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);
  const {
    0: fee,
    1: setFee
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: day,
    1: setDay
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(date.getDate());
  const {
    0: month,
    1: setMonth
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(date.getMonth() + 1);
  const {
    0: year,
    1: setYear
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(date.getFullYear());
  const {
    0: priceError,
    1: setPriceError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: dayError,
    1: setDayError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: yearError,
    1: setYearError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const calculateFee = () => {
    var discount = user;

    if (date.getDate() == day && date.getMonth() + 1 == month && date.getFullYear() == year) {
      discount = discount + 10;
    }

    return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(price) + ad - discount;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (price < 0 || isNaN(price)) {
      setPriceError(true);
      evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["toaster"].warning('Price must be positive integer');
    } else {
      setPriceError(false);
    }
  }, [price]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (day < 1 || day > 31 || day == null) {
      setDayError(true);
      evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["toaster"].warning('Day must be inbetween 1 and 31');
    } else {
      setDayError(false);
    }
  }, [day]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (year < date.getFullYear() || year == null) {
      setYearError(true);
      evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["toaster"].warning('Expiration cannot be in the past');
    } else {
      setYearError(false);
    }
  }, [year]);

  const toogleSave = () => {
    const newItem = {
      item: item,
      category: category,
      userType: user,
      adType: ad,
      price: price,
      expiration: `${year}-${month}-${day}`,
      fee: setFee(calculateFee())
    };
    allItems.push(newItem);
    const newArr = [...allItems];
    setAllItems(newArr);
    evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["toaster"].success('Successfully Added Item!');
    setItem('');
    setPrice(0);
  };

  return __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    display: "flex",
    flex: 1,
    marginY: "2rem",
    marginLeft: "2rem",
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    size: 800,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, "Register New Item"), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    marginLeft: "3rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    display: "flex",
    marginY: "3.5rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    flex: 1,
    alignItems: "center",
    display: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    size: 600,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, "Item Name:")), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["TextInput"], {
    name: "Price",
    width: 175,
    required: true,
    marginRight: "8rem",
    placeholder: "IPad Pro 100in",
    validationMessage: "Invalid Input",
    value: item,
    onChange: e => setItem(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }))), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    display: "flex",
    marginTop: "-1rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    flex: 1,
    alignItems: "center",
    display: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    size: 600,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, "Category:")), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["SelectField"], {
    marginRight: "8rem",
    marginY: "auto",
    value: category,
    width: "17.6rem",
    onChange: e => setCategory(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, __jsx("option", {
    value: "Electronics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, "Electronics"), __jsx("option", {
    value: "Clothing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, "Clothing"), __jsx("option", {
    value: "Shoes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, "Shoes"), __jsx("option", {
    value: "Home",
    defaultValue: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, "Home"), __jsx("option", {
    value: "Outdoors",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, "Outdoors"), __jsx("option", {
    value: "Automotive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, "Automotive"), __jsx("option", {
    value: "Other",
    defaultValue: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, "Other")))), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    display: "flex",
    marginY: "3rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    flex: 1,
    alignItems: "center",
    display: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    size: 600,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, "User Type:")), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, __jsx(_reactions_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
    initialState: {
      options: [{
        label: 'Person',
        value: 0
      }, {
        label: 'Company',
        value: 5
      }],
      value: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, ({
    state,
    setState
  }) => __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["SegmentedControl"], {
    name: "switch",
    width: 175,
    height: 30,
    marginRight: "8rem",
    options: state.options,
    value: state.value,
    onChange: value => {
      setUser(value);
      setState({
        value
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  })))), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    display: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    flex: 1,
    alignItems: "center",
    display: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    size: 600,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, "Ad Type:")), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, __jsx(_reactions_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
    initialState: {
      options: [{
        label: 'Auction',
        value: 25
      }, {
        label: 'Buy it Now',
        value: 35
      }],
      value: 25
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, ({
    state,
    setState
  }) => __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["SegmentedControl"], {
    name: "switch",
    width: 175,
    height: 30,
    marginRight: "8rem" // marginY="auto"
    ,
    options: state.options,
    value: state.value,
    onChange: value => {
      setAd(value);
      setState({
        value
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  })))), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    display: "flex",
    marginY: "3.5rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    flex: 1,
    alignItems: "center",
    display: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    size: 600,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: undefined
  }, "Price:")), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["TextInput"], {
    name: "Price",
    width: 150,
    required: true,
    textAlign: "right",
    isInb: true,
    marginRight: "1.5rem",
    isInvalid: priceError,
    validationMessage: "Price must be positive numeric",
    value: price,
    onChange: e => !isNaN(e.target.value) && setPrice(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  })), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    marginY: "auto",
    marginRight: "8rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    size: 600,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, "$"))), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    display: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    flex: 1,
    alignItems: "center",
    display: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    size: 600,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: undefined
  }, "Expiration Date:")), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["TextInput"], {
    name: "Day",
    width: 45,
    required: true,
    placeholder: "Day",
    isInvalid: dayError,
    marginRight: 10,
    validationMessage: "Day has to be between 1 and 31",
    value: day,
    onChange: e => !isNaN(e.target.value) && setDay(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: undefined
  })), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["SelectField"], {
    marginRight: "1rem",
    width: "6rem",
    marginY: "-0.4rem",
    value: month,
    onChange: e => setMonth(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: undefined
  }, __jsx("option", {
    value: "1",
    defaultValue: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: undefined
  }, "January"), __jsx("option", {
    value: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: undefined
  }, "Febraury"), __jsx("option", {
    value: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: undefined
  }, "March"), __jsx("option", {
    value: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: undefined
  }, "April"), __jsx("option", {
    value: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: undefined
  }, "May"), __jsx("option", {
    value: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: undefined
  }, "June"), __jsx("option", {
    value: "7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: undefined
  }, "July"), __jsx("option", {
    value: "8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: undefined
  }, "August"), __jsx("option", {
    value: "9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: undefined
  }, "September"), __jsx("option", {
    value: "10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: undefined
  }, "October"), __jsx("option", {
    value: "11",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: undefined
  }, "November"), __jsx("option", {
    value: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: undefined
  }, "December"))), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["SelectField"], {
    marginRight: "8rem",
    width: "7rem",
    marginY: "-0.4rem",
    value: year,
    onChange: e => setYear(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: undefined
  }, __jsx("option", {
    value: "2020",
    defaultValue: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: undefined
  }, "2020"), __jsx("option", {
    value: "2021",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: undefined
  }, "2021"), __jsx("option", {
    value: "2022",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: undefined
  }, "2022"), __jsx("option", {
    value: "2023",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: undefined
  }, "2023")))))), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    display: "flex",
    flexDirection: "row",
    marginTop: "3rem",
    marginLeft: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    display: "flex",
    flex: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    marginLeft: "1rem",
    size: 600,
    color: "muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: undefined
  }, "Item Fee:"), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    marginLeft: ".5rem",
    fontWeight: "bold",
    size: 600,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: undefined
  }, "$", calculateFee())), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Pane"], {
    marginRight: 26,
    marginY: "-1rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: undefined
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    appearance: "primary",
    disabled: priceError || dayError || yearError || item == '',
    onClick: () => toogleSave(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: undefined
  }, "Submit"))));
};

/* harmony default export */ __webpack_exports__["default"] = (RegisterNewItem);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/parse-int.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/parse-int.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/parse-int.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.parse-int */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.parse-int.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").parseInt;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_parse-int.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_parse-int.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").parseInt;
var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-trim.js").trim;
var ws = __webpack_require__(/*! ./_string-ws */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-ws.js");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-trim.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-trim.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
var spaces = __webpack_require__(/*! ./_string-ws */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-ws.js");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-ws.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-ws.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.parse-int.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.parse-int.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_parse-int.js");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home */ "./components/Home.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Context */ "./components/Context.js");
var _jsxFileName = "/Users/Ammar/Documents/coding-solution/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const home = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(_components_Context__WEBPACK_IMPORTED_MODULE_3__["ContextProvider"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Solid Fee Calculator"), __jsx("link", {
  rel: "icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
})), __jsx(_components_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Ammar/Documents/coding-solution/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@reactions/component":
/*!***************************************!*\
  !*** external "@reactions/component" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reactions/component");

/***/ }),

/***/ "evergreen-ui":
/*!*******************************!*\
  !*** external "evergreen-ui" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("evergreen-ui");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map