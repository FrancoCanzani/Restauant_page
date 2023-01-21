/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var createContact = function createContact() {
  var addressText = document.createElement("h1");
  addressText.classList.add("addressText");
  addressText.innerHTML = "Our Locations";
  content.appendChild(addressText);
  var locationContainer = document.createElement("div");
  locationContainer.classList.add("locationContainer");
  content.appendChild(locationContainer);
  var createLocation = function createLocation(address, number) {
    var addressContainer = document.createElement("div");
    var location = document.createElement("h3");
    location.innerHTML = address;
    location.classList.add("location");
    addressContainer.appendChild(location);
    var phoneNumber = document.createElement("h3");
    phoneNumber.innerHTML = number;
    phoneNumber.classList.add("phoneNumber");
    addressContainer.appendChild(phoneNumber);
    addressContainer.classList.add("addressContainer");
    locationContainer.appendChild(addressContainer);
  };
  createLocation("8406 Evergreen Ave. Greenwood, SC 29646", "+1 202-918-2132");
  createLocation("757 Halifax Circle Erlanger, KY 41018", "+1 307-245-0596");
  createLocation("7319 Greystone Ave. West Palm Beach, FL 33404", "+1 209-902-1572");
  createLocation("883 Blackburn Drive Jersey City, NJ 07302", "+1 505-646-1711");
  createLocation("94 Sheffield Ave. Bonita Springs, FL 34135", "+1 405-776-1284");
  createLocation("8066 Fairground St. Green Bay, WI 54302", "+1 505-485-9892");
  createLocation("11 Vale Dr. Norcross, GA 30092", "+1 314-333-0452");
  createLocation("49 Primrose Road Port Saint Lucie, FL 34952", "+1 505-646-6459");
  createLocation("8558 South Bayport Lane Fernandina Beach, FL 32034", "+1 339-343-5225");
  createLocation("214 Miller St. Orange, NJ 07050", "+1 304-516-4843");
  createLocation("8632 Maple Street Canonsburg, PA 15317", "+1 618-791-0450");
  createLocation("60 Buckingham Ave. Delray Beach, FL 33445", "+1 804-390-4442");
  createLocation("665 South Vernon Dr. Depew, NY 14043", "+1 310-911-5164");
  createLocation("13 Meadow Avenue Marlton, NJ 08053", "+1 704-274-6094");
  createLocation("8967 Rockland Street Ocoee, FL 34761", "+1 346-414-7813");
  createLocation("7352 Mayflower St. Ronkonkoma, NY 11779", "+1 207-366-7935");
  createLocation("93 Bradford Road Rockledge, FL 32955", "+1 505-644-8788");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _assets_silverware_fork_knife_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/silverware-fork-knife.svg */ "./src/assets/silverware-fork-knife.svg");
/* harmony import */ var _assets_menu_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/menu.svg */ "./src/assets/menu.svg");
/* harmony import */ var _assets_phone_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/phone.svg */ "./src/assets/phone.svg");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/modules/menu.js");





var createHeader = function createHeader() {
  var newHeader = document.createElement("header");
  document.querySelector("body").insertBefore(newHeader, _menu__WEBPACK_IMPORTED_MODULE_4__.content);

  //   Logo
  var logoImg = document.createElement("img");
  logoImg.setAttribute("src", _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  logoImg.classList.add("logo");
  newHeader.appendChild(logoImg);

  //   Buttons
  var buttonCreator = function buttonCreator(imgPath, btnText, idName) {
    var Btn = document.createElement("button");
    var BtnImg = document.createElement("img");
    BtnImg.setAttribute("src", imgPath);
    BtnImg.classList.add("btnImg");
    Btn.appendChild(BtnImg);
    Btn.setAttribute("id", idName);
    var BtnText = document.createElement("span");
    BtnText.textContent = btnText;
    Btn.appendChild(BtnText);
    newHeader.appendChild(Btn);
  };
  buttonCreator(_assets_silverware_fork_knife_svg__WEBPACK_IMPORTED_MODULE_1__["default"], "Home", "btnHome");
  buttonCreator(_assets_menu_svg__WEBPACK_IMPORTED_MODULE_2__["default"], "Menu", "btnMenu");
  buttonCreator(_assets_phone_svg__WEBPACK_IMPORTED_MODULE_3__["default"], "Contact", "btnPhone");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_burger_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/burger.png */ "./src/assets/burger.png");

var createHome = function createHome() {
  var homeContent = document.createElement("div");
  var leftContent = document.createElement("div");
  var rightContent = document.createElement("div");
  homeContent.classList.add("homeContent");
  leftContent.classList.add("leftContent");
  rightContent.classList.add("rightContent");
  content.appendChild(homeContent);
  homeContent.appendChild(leftContent);
  homeContent.appendChild(rightContent);

  //   Burger image on right content
  var burgerImg = document.createElement("img");
  burgerImg.setAttribute("src", _assets_burger_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  burgerImg.classList.add("burgerImg");
  rightContent.appendChild(burgerImg);

  //   Left text
  var mainText = document.createElement("h2");
  mainText.classList.add("mainText");
  mainText.innerHTML = "Hack Burger;";
  leftContent.appendChild(mainText);
  var secondText = document.createElement("h1");
  secondText.classList.add("secondText");
  secondText.innerHTML = "Burgers for Programmers";
  leftContent.appendChild(secondText);

  //   Div on left content
  var discount = document.createElement("div");
  discount.classList.add("discount");
  leftContent.appendChild(discount);
  var discountText = document.createElement("h1");
  discountText.classList.add("discountText");
  discountText.innerHTML = "Get 25% off if you can center a Div";
  discount.appendChild(discountText);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "content": () => (/* binding */ content),
/* harmony export */   "createMenu": () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _assets_8_burger_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/8_burger.png */ "./src/assets/8_burger.png");
/* harmony import */ var _assets_black_burger_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/black_burger.png */ "./src/assets/black_burger.png");
/* harmony import */ var _assets_chicken_burger_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/chicken_burger.png */ "./src/assets/chicken_burger.png");
/* harmony import */ var _assets_double_killer_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/double_killer.png */ "./src/assets/double_killer.png");
/* harmony import */ var _assets_pickles_burger_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/pickles_burger.png */ "./src/assets/pickles_burger.png");
/* harmony import */ var _assets_veggie_burger_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/veggie_burger.png */ "./src/assets/veggie_burger.png");
/* harmony import */ var _assets_super_cheese_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/super_cheese.png */ "./src/assets/super_cheese.png");
/* harmony import */ var _assets_crispy_long_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/crispy_long.png */ "./src/assets/crispy_long.png");








var content = document.getElementById("content");
var createMenu = function createMenu() {
  var topText = document.createElement("h1");
  topText.classList.add("topText");
  topText.innerHTML = "These are some of our famous burgers";
  content.appendChild(topText);
  var burgerContainer = document.createElement("div");
  burgerContainer.classList.add("burgerContainer");
  content.appendChild(burgerContainer);
  var burgerCreator = function burgerCreator(img, text, burgerPrice) {
    var burger = document.createElement("div");
    var burgerImg = document.createElement("img");
    burgerImg.setAttribute("src", img);
    burgerImg.classList.add("burgerImg");
    burger.appendChild(burgerImg);
    burger.classList.add("burger");
    var burgerText = document.createElement("p");
    burgerText.classList.add("burgerText");
    burgerText.textContent = text;
    burger.appendChild(burgerText);
    var price = document.createElement("h3");
    price.classList.add("price");
    price.textContent = "In store for ".concat(burgerPrice);
    burger.appendChild(price);
    burgerContainer.appendChild(burger);
  };
  burgerCreator(_assets_8_burger_png__WEBPACK_IMPORTED_MODULE_0__["default"], "Heart attack", "8$");
  burgerCreator(_assets_black_burger_png__WEBPACK_IMPORTED_MODULE_1__["default"], "Black Sabath", "4.5$");
  burgerCreator(_assets_chicken_burger_png__WEBPACK_IMPORTED_MODULE_2__["default"], "Fried chicken", "2.5$");
  burgerCreator(_assets_double_killer_png__WEBPACK_IMPORTED_MODULE_3__["default"], "2 is better than 1", "5.5$");
  burgerCreator(_assets_pickles_burger_png__WEBPACK_IMPORTED_MODULE_4__["default"], "Pickles? Really?", "4$");
  burgerCreator(_assets_veggie_burger_png__WEBPACK_IMPORTED_MODULE_5__["default"], "Veggie haha", "3$");
  burgerCreator(_assets_crispy_long_png__WEBPACK_IMPORTED_MODULE_7__["default"], "Crispy crispy crispy", "3.5$");
  burgerCreator(_assets_super_cheese_png__WEBPACK_IMPORTED_MODULE_6__["default"], "See a cardiologist", "5$");
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 2000 1500%27%3E%3Cdefs%3E%3CradialGradient id=%27a%27 gradientUnits=%27objectBoundingBox%27%3E%3Cstop offset=%270%27 stop-color=%27%23FF7E22%27/%3E%3Cstop offset=%271%27 stop-color=%27%23FFCF4A%27/%3E%3C/radialGradient%3E%3ClinearGradient id=%27b%27 gradientUnits=%27userSpaceOnUse%27 x1=%270%27 y1=%27750%27 x2=%271550%27 y2=%27750%27%3E%3Cstop offset=%270%27 stop-color=%27%23ffa736%27/%3E%3Cstop offset=%271%27 stop-color=%27%23FFCF4A%27/%3E%3C/linearGradient%3E%3Cpath id=%27s%27 fill=%27url%28%23b%29%27 d=%27M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z%27/%3E%3Cg id=%27g%27%3E%3Cuse href=%27%23s%27 transform=%27scale%280.12%29 rotate%2860%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.2%29 rotate%2810%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.25%29 rotate%2840%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.3%29 rotate%28-20%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.4%29 rotate%28-30%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.5%29 rotate%2820%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.6%29 rotate%2860%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.7%29 rotate%2810%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.835%29 rotate%28-40%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.9%29 rotate%2840%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.05%29 rotate%2825%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.2%29 rotate%288%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.333%29 rotate%28-60%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.45%29 rotate%28-30%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.6%29 rotate%2810%29%27/%3E%3C/g%3E%3C/defs%3E%3Cg transform=%27translate%281500 0%29%27%3E%3Cg transform=%27translate%280 525%29%27%3E%3Ccircle fill=%27url%28%23a%29%27 r=%273000%27/%3E%3Cg opacity=%270.5%27%3E%3Ccircle fill=%27url%28%23a%29%27 r=%272000%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271800%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271700%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271651%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271450%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271250%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271175%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27900%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27750%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27500%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27380%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27250%27/%3E%3C/g%3E%3Cg transform=%27rotate%28-162 0 0%29%27%3E%3Cuse href=%27%23g%27 transform=%27rotate%2810%29%27/%3E%3Cuse href=%27%23g%27 transform=%27rotate%28120%29%27/%3E%3Cuse href=%27%23g%27 transform=%27rotate%28240%29%27/%3E%3C/g%3E%3Ccircle fill-opacity=%270%27 fill=%27url%28%23a%29%27 r=%273000%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 2000 1500%27%3E%3Cdefs%3E%3CradialGradient id=%27a%27 gradientUnits=%27objectBoundingBox%27%3E%3Cstop offset=%270%27 stop-color=%27%23FF7E22%27/%3E%3Cstop offset=%271%27 stop-color=%27%23FFCF4A%27/%3E%3C/radialGradient%3E%3ClinearGradient id=%27b%27 gradientUnits=%27userSpaceOnUse%27 x1=%270%27 y1=%27750%27 x2=%271550%27 y2=%27750%27%3E%3Cstop offset=%270%27 stop-color=%27%23ffa736%27/%3E%3Cstop offset=%271%27 stop-color=%27%23FFCF4A%27/%3E%3C/linearGradient%3E%3Cpath id=%27s%27 fill=%27url%28%23b%29%27 d=%27M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z%27/%3E%3Cg id=%27g%27%3E%3Cuse href=%27%23s%27 transform=%27scale%280.12%29 rotate%2860%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.2%29 rotate%2810%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.25%29 rotate%2840%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.3%29 rotate%28-20%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.4%29 rotate%28-30%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.5%29 rotate%2820%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.6%29 rotate%2860%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.7%29 rotate%2810%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.835%29 rotate%28-40%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.9%29 rotate%2840%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.05%29 rotate%2825%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.2%29 rotate%288%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.333%29 rotate%28-60%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.45%29 rotate%28-30%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.6%29 rotate%2810%29%27/%3E%3C/g%3E%3C/defs%3E%3Cg transform=%27translate%281500 0%29%27%3E%3Cg transform=%27translate%280 525%29%27%3E%3Ccircle fill=%27url%28%23a%29%27 r=%273000%27/%3E%3Cg opacity=%270.5%27%3E%3Ccircle fill=%27url%28%23a%29%27 r=%272000%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271800%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271700%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271651%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271450%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271250%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271175%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27900%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27750%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27500%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27380%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27250%27/%3E%3C/g%3E%3Cg transform=%27rotate%28-162 0 0%29%27%3E%3Cuse href=%27%23g%27 transform=%27rotate%2810%29%27/%3E%3Cuse href=%27%23g%27 transform=%27rotate%28120%29%27/%3E%3Cuse href=%27%23g%27 transform=%27rotate%28240%29%27/%3E%3C/g%3E%3Ccircle fill-opacity=%270%27 fill=%27url%28%23a%29%27 r=%273000%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Kanit:ital,wght@1,200&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nbody {\n  background-color: #ffcf4a;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-attachment: fixed;\n  background-size: cover;\n  font-size: 16px;\n  font-family: \"Kanit\", sans-serif;\n}\n\nheader {\n  font-family: \"Kanit\", sans-serif;\n  height: 10vh;\n  background: whitesmoke;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\nheader .logo {\n  height: 7rem;\n  width: 7rem;\n  position: absolute;\n  left: 0;\n}\n\nheader::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 21px 21px 0 21px;\n  border-color: whitesmoke transparent transparent transparent;\n  left: 50%;\n  transform: translateX(-50%) translateY(100%);\n}\n\nbutton {\n  background: whitesmoke;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 1.5rem;\n  font-weight: bolder;\n  padding: 5px;\n  border: none;\n  margin: 1rem;\n  border-radius: 5px;\n  transition: all 0.1s;\n}\nbutton .btnImg {\n  width: 1.5rem;\n  margin-right: 2px;\n}\n\nbutton:hover {\n  border: 3px solid #ffcf4a;\n}\n\nbutton:active {\n  box-shadow: 0px 2px 0px #ffcf4a;\n  position: relative;\n  top: 2px;\n  background: #ffcf4a;\n}\n\n.homeContent {\n  height: 90vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.homeContent .leftContent {\n  width: 50%;\n  text-align: start;\n  text-transform: uppercase;\n}\n.homeContent .leftContent .mainText {\n  font-size: 4vw;\n  font-weight: 200;\n  margin-left: 4vw;\n}\n.homeContent .leftContent .secondText {\n  font-size: 7vw;\n  font-weight: bolder;\n  margin-left: 4vw;\n  color: white;\n}\n.homeContent .leftContent .discount {\n  margin: 0.5rem 0 0 4vw;\n  background: red;\n  border-radius: 5px;\n  box-shadow: 3px 3px 2px #ffffff;\n}\n.homeContent .leftContent .discount .discountText {\n  font-size: 2vw;\n  padding: 1rem;\n  color: white;\n  font-weight: bold;\n}\n.homeContent .rightContent {\n  width: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.homeContent .rightContent .burgerImg {\n  width: 80%;\n  height: 80%;\n}\n\n.topText {\n  text-align: center;\n  margin-top: 2rem;\n  font-size: 3rem;\n  font-weight: bolder;\n  text-transform: uppercase;\n}\n\n.burgerContainer {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: wrap;\n  margin: 2rem;\n}\n.burgerContainer .burger {\n  border-radius: 5px;\n  background-color: #ffcf4a;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-attachment: fixed;\n  background-size: cover;\n  box-shadow: -1px 1px 15px white, 1px -1px 1px white;\n  text-align: center;\n  margin: 1rem;\n}\n.burgerContainer .burger .burgerImg {\n  height: 200px;\n  width: 250px;\n  padding: 1rem;\n}\n.burgerContainer .burger .burgerText {\n  color: white;\n  font-size: 1.5rem;\n  font-weight: bolder;\n  text-transform: uppercase;\n}\n.burgerContainer .burger .price {\n  color: white;\n  font-weight: bold;\n  margin: 1rem;\n}\n\n.addressText {\n  text-align: center;\n  margin: 2rem;\n  font-size: 3rem;\n  font-weight: bolder;\n  text-transform: uppercase;\n}\n\n.locationContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.locationContainer .addressContainer {\n  color: white;\n  font-size: 1.5rem;\n  margin: 1rem;\n  font-weight: bolder;\n  text-decoration: underline;\n  line-height: 30px;\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;AAAF;;AAEA,gDAAA;AACA;;;;;;;;;;;EAWE,cAAA;AACF;;AACA;EACE,cAAA;AAEF;;AAAA;;EAEE,gBAAA;AAGF;;AADA;;EAEE,YAAA;AAIF;;AAFA;;;;EAIE,WAAA;EACA,aAAA;AAKF;;AAHA;EACE,yBAAA;EACA,iBAAA;AAMF;;AAGA;EACE,yBAHc;EAId,yDAAA;EACA,4BAAA;EACA,sBAAA;EACA,eAAA;EACA,gCATW;AASb;;AAKA;EACE,gCAfW;EAgBX,YAAA;EACA,sBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;AAFF;AAIE;EACE,YAAA;EACA,WAAA;EACA,kBAAA;EACA,OAAA;AAFJ;;AAMA;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,SAAA;EACA,mBAAA;EACA,8BAAA;EACA,4DAAA;EACA,SAAA;EACA,4CAAA;AAHF;;AAMA;EACE,sBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,oBAAA;EACA,iBAAA;EACA,mBAAA;EACA,YAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,oBAAA;AAHF;AAKE;EACE,aAAA;EACA,iBAAA;AAHJ;;AAOA;EACE,yBAAA;AAJF;;AAOA;EACE,+BAAA;EACA,kBAAA;EACA,QAAA;EACA,mBAxEc;AAoEhB;;AASA;EACE,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AANF;AAQE;EACE,UAAA;EACA,iBAAA;EACA,yBAAA;AANJ;AAQI;EACE,cAAA;EACA,gBAAA;EACA,gBAAA;AANN;AASI;EACE,cAAA;EACA,mBAAA;EACA,gBAAA;EACA,YAAA;AAPN;AAUI;EACE,sBAAA;EACA,eAAA;EACA,kBAAA;EACA,+BAAA;AARN;AAUM;EACE,cAAA;EACA,aAAA;EACA,YAAA;EACA,iBAAA;AARR;AAaE;EACE,UAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAXJ;AAaI;EACE,UAAA;EACA,WAAA;AAXN;;AAkBA;EACE,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,mBAAA;EACA,yBAAA;AAfF;;AAkBA;EACE,aAAA;EACA,6BAAA;EACA,mBAAA;EACA,eAAA;EACA,YAAA;AAfF;AAiBE;EACE,kBAAA;EACA,yBApJY;EAqJZ,yDAAA;EACA,4BAAA;EACA,sBAAA;EACA,mDAAA;EACA,kBAAA;EACA,YAAA;AAfJ;AAiBI;EACE,aAAA;EACA,YAAA;EACA,aAAA;AAfN;AAkBI;EACE,YAAA;EACA,iBAAA;EACA,mBAAA;EACA,yBAAA;AAhBN;AAmBI;EACE,YAAA;EACA,iBAAA;EACA,YAAA;AAjBN;;AAwBA;EACE,kBAAA;EACA,YAAA;EACA,eAAA;EACA,mBAAA;EACA,yBAAA;AArBF;;AAwBA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;AArBF;AAuBE;EACE,YAAA;EACA,iBAAA;EACA,YAAA;EACA,mBAAA;EACA,0BAAA;EACA,iBAAA;EACA,eAAA;AArBJ","sourcesContent":["// Reset\r\n\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n  display: block;\r\n}\r\nbody {\r\n  line-height: 1;\r\n}\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\nblockquote,\r\nq {\r\n  quotes: none;\r\n}\r\nblockquote:before,\r\nblockquote:after,\r\nq:before,\r\nq:after {\r\n  content: \"\";\r\n  content: none;\r\n}\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\n/////////////////////////////\r\n\r\n@import url(\"https://fonts.googleapis.com/css2?family=Kanit:ital,wght@1,200&display=swap\");\r\n$font-stack: \"Kanit\", sans-serif;\r\n$primary-color: #ffcf4a;\r\n\r\nbody {\r\n  background-color: $primary-color;\r\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23FF7E22'/%3E%3Cstop offset='1' stop-color='%23FFCF4A'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23ffa736'/%3E%3Cstop offset='1' stop-color='%23FFCF4A'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='translate(1500 0)'%3E%3Cg transform='translate(0 525)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(-162 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  font-size: 16px;\r\n  font-family: $font-stack;\r\n}\r\n\r\n// Header\r\n\r\nheader {\r\n  font-family: $font-stack;\r\n  height: 10vh;\r\n  background: whitesmoke;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n\r\n  .logo {\r\n    height: 7rem;\r\n    width: 7rem;\r\n    position: absolute;\r\n    left: 0;\r\n  }\r\n}\r\n\r\nheader::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n  border-width: 21px 21px 0 21px;\r\n  border-color: whitesmoke transparent transparent transparent;\r\n  left: 50%;\r\n  transform: translateX(-50%) translateY(100%);\r\n}\r\n\r\nbutton {\r\n  background: whitesmoke;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  font-family: inherit;\r\n  font-size: 1.5rem;\r\n  font-weight: bolder;\r\n  padding: 5px;\r\n  border: none;\r\n  margin: 1rem;\r\n  border-radius: 5px;\r\n  transition: all 0.1s;\r\n\r\n  .btnImg {\r\n    width: 1.5rem;\r\n    margin-right: 2px;\r\n  }\r\n}\r\n\r\nbutton:hover {\r\n  border: 3px solid $primary-color;\r\n}\r\n\r\nbutton:active {\r\n  box-shadow: 0px 2px 0px $primary-color;\r\n  position: relative;\r\n  top: 2px;\r\n  background: $primary-color;\r\n}\r\n\r\n// Home content\r\n\r\n.homeContent {\r\n  height: 90vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  .leftContent {\r\n    width: 50%;\r\n    text-align: start;\r\n    text-transform: uppercase;\r\n\r\n    .mainText {\r\n      font-size: 4vw;\r\n      font-weight: 200;\r\n      margin-left: 4vw;\r\n    }\r\n\r\n    .secondText {\r\n      font-size: 7vw;\r\n      font-weight: bolder;\r\n      margin-left: 4vw;\r\n      color: white;\r\n    }\r\n\r\n    .discount {\r\n      margin: 0.5rem 0 0 4vw;\r\n      background: red;\r\n      border-radius: 5px;\r\n      box-shadow: 3px 3px 2px #ffffff;\r\n\r\n      .discountText {\r\n        font-size: 2vw;\r\n        padding: 1rem;\r\n        color: white;\r\n        font-weight: bold;\r\n      }\r\n    }\r\n  }\r\n\r\n  .rightContent {\r\n    width: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    .burgerImg {\r\n      width: 80%;\r\n      height: 80%;\r\n    }\r\n  }\r\n}\r\n\r\n// Menu content\r\n\r\n.topText {\r\n  text-align: center;\r\n  margin-top: 2rem;\r\n  font-size: 3rem;\r\n  font-weight: bolder;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.burgerContainer {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  margin: 2rem;\r\n\r\n  .burger {\r\n    border-radius: 5px;\r\n    background-color: $primary-color;\r\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23FF7E22'/%3E%3Cstop offset='1' stop-color='%23FFCF4A'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23ffa736'/%3E%3Cstop offset='1' stop-color='%23FFCF4A'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='translate(1500 0)'%3E%3Cg transform='translate(0 525)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(-162 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    box-shadow: -1px 1px 15px white, 1px -1px 1px white;\r\n    text-align: center;\r\n    margin: 1rem;\r\n\r\n    .burgerImg {\r\n      height: 200px;\r\n      width: 250px;\r\n      padding: 1rem;\r\n    }\r\n\r\n    .burgerText {\r\n      color: white;\r\n      font-size: 1.5rem;\r\n      font-weight: bolder;\r\n      text-transform: uppercase;\r\n    }\r\n\r\n    .price {\r\n      color: white;\r\n      font-weight: bold;\r\n      margin: 1rem;\r\n    }\r\n  }\r\n}\r\n\r\n// Contact section\r\n\r\n.addressText {\r\n  text-align: center;\r\n  margin: 2rem;\r\n  font-size: 3rem;\r\n  font-weight: bolder;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.locationContainer {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n\r\n  .addressContainer {\r\n    color: white;\r\n    font-size: 1.5rem;\r\n    margin: 1rem;\r\n    font-weight: bolder;\r\n    text-decoration: underline;\r\n    line-height: 30px;\r\n    cursor: pointer;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/8_burger.png":
/*!*********************************!*\
  !*** ./src/assets/8_burger.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/8_burger.png");

/***/ }),

/***/ "./src/assets/black_burger.png":
/*!*************************************!*\
  !*** ./src/assets/black_burger.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/black_burger.png");

/***/ }),

/***/ "./src/assets/burger.png":
/*!*******************************!*\
  !*** ./src/assets/burger.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/burger.png");

/***/ }),

/***/ "./src/assets/chicken_burger.png":
/*!***************************************!*\
  !*** ./src/assets/chicken_burger.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/chicken_burger.png");

/***/ }),

/***/ "./src/assets/crispy_long.png":
/*!************************************!*\
  !*** ./src/assets/crispy_long.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/crispy_long.png");

/***/ }),

/***/ "./src/assets/double_killer.png":
/*!**************************************!*\
  !*** ./src/assets/double_killer.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/double_killer.png");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/logo.png");

/***/ }),

/***/ "./src/assets/menu.svg":
/*!*****************************!*\
  !*** ./src/assets/menu.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu.svg");

/***/ }),

/***/ "./src/assets/phone.svg":
/*!******************************!*\
  !*** ./src/assets/phone.svg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/phone.svg");

/***/ }),

/***/ "./src/assets/pickles_burger.png":
/*!***************************************!*\
  !*** ./src/assets/pickles_burger.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/pickles_burger.png");

/***/ }),

/***/ "./src/assets/silverware-fork-knife.svg":
/*!**********************************************!*\
  !*** ./src/assets/silverware-fork-knife.svg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/silverware-fork-knife.svg");

/***/ }),

/***/ "./src/assets/super_cheese.png":
/*!*************************************!*\
  !*** ./src/assets/super_cheese.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/super_cheese.png");

/***/ }),

/***/ "./src/assets/veggie_burger.png":
/*!**************************************!*\
  !*** ./src/assets/veggie_burger.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/veggie_burger.png");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 2000 1500%27%3E%3Cdefs%3E%3CradialGradient id=%27a%27 gradientUnits=%27objectBoundingBox%27%3E%3Cstop offset=%270%27 stop-color=%27%23FF7E22%27/%3E%3Cstop offset=%271%27 stop-color=%27%23FFCF4A%27/%3E%3C/radialGradient%3E%3ClinearGradient id=%27b%27 gradientUnits=%27userSpaceOnUse%27 x1=%270%27 y1=%27750%27 x2=%271550%27 y2=%27750%27%3E%3Cstop offset=%270%27 stop-color=%27%23ffa736%27/%3E%3Cstop offset=%271%27 stop-color=%27%23FFCF4A%27/%3E%3C/linearGradient%3E%3Cpath id=%27s%27 fill=%27url%28%23b%29%27 d=%27M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z%27/%3E%3Cg id=%27g%27%3E%3Cuse href=%27%23s%27 transform=%27scale%280.12%29 rotate%2860%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.2%29 rotate%2810%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.25%29 rotate%2840%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.3%29 rotate%28-20%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.4%29 rotate%28-30%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.5%29 rotate%2820%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.6%29 rotate%2860%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.7%29 rotate%2810%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.835%29 rotate%28-40%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.9%29 rotate%2840%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.05%29 rotate%2825%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.2%29 rotate%288%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.333%29 rotate%28-60%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.45%29 rotate%28-30%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.6%29 rotate%2810%29%27/%3E%3C/g%3E%3C/defs%3E%3Cg transform=%27translate%281500 0%29%27%3E%3Cg transform=%27translate%280 525%29%27%3E%3Ccircle fill=%27url%28%23a%29%27 r=%273000%27/%3E%3Cg opacity=%270.5%27%3E%3Ccircle fill=%27url%28%23a%29%27 r=%272000%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271800%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271700%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271651%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271450%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271250%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271175%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27900%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27750%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27500%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27380%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27250%27/%3E%3C/g%3E%3Cg transform=%27rotate%28-162 0 0%29%27%3E%3Cuse href=%27%23g%27 transform=%27rotate%2810%29%27/%3E%3Cuse href=%27%23g%27 transform=%27rotate%28120%29%27/%3E%3Cuse href=%27%23g%27 transform=%27rotate%28240%29%27/%3E%3C/g%3E%3Ccircle fill-opacity=%270%27 fill=%27url%28%23a%29%27 r=%273000%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 2000 1500%27%3E%3Cdefs%3E%3CradialGradient id=%27a%27 gradientUnits=%27objectBoundingBox%27%3E%3Cstop offset=%270%27 stop-color=%27%23FF7E22%27/%3E%3Cstop offset=%271%27 stop-color=%27%23FFCF4A%27/%3E%3C/radialGradient%3E%3ClinearGradient id=%27b%27 gradientUnits=%27userSpaceOnUse%27 x1=%270%27 y1=%27750%27 x2=%271550%27 y2=%27750%27%3E%3Cstop offset=%270%27 stop-color=%27%23ffa736%27/%3E%3Cstop offset=%271%27 stop-color=%27%23FFCF4A%27/%3E%3C/linearGradient%3E%3Cpath id=%27s%27 fill=%27url%28%23b%29%27 d=%27M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z%27/%3E%3Cg id=%27g%27%3E%3Cuse href=%27%23s%27 transform=%27scale%280.12%29 rotate%2860%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.2%29 rotate%2810%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.25%29 rotate%2840%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.3%29 rotate%28-20%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.4%29 rotate%28-30%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.5%29 rotate%2820%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.6%29 rotate%2860%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.7%29 rotate%2810%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.835%29 rotate%28-40%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.9%29 rotate%2840%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.05%29 rotate%2825%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.2%29 rotate%288%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.333%29 rotate%28-60%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.45%29 rotate%28-30%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.6%29 rotate%2810%29%27/%3E%3C/g%3E%3C/defs%3E%3Cg transform=%27translate%281500 0%29%27%3E%3Cg transform=%27translate%280 525%29%27%3E%3Ccircle fill=%27url%28%23a%29%27 r=%273000%27/%3E%3Cg opacity=%270.5%27%3E%3Ccircle fill=%27url%28%23a%29%27 r=%272000%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271800%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271700%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271651%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271450%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271250%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271175%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27900%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27750%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27500%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27380%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27250%27/%3E%3C/g%3E%3Cg transform=%27rotate%28-162 0 0%29%27%3E%3Cuse href=%27%23g%27 transform=%27rotate%2810%29%27/%3E%3Cuse href=%27%23g%27 transform=%27rotate%28120%29%27/%3E%3Cuse href=%27%23g%27 transform=%27rotate%28240%29%27/%3E%3C/g%3E%3Ccircle fill-opacity=%270%27 fill=%27url%28%23a%29%27 r=%273000%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 2000 1500%27%3E%3Cdefs%3E%3CradialGradient id=%27a%27 gradientUnits=%27objectBoundingBox%27%3E%3Cstop offset=%270%27 stop-color=%27%23FF7E22%27/%3E%3Cstop offset=%271%27 stop-color=%27%23FFCF4A%27/%3E%3C/radialGradient%3E%3ClinearGradient id=%27b%27 gradientUnits=%27userSpaceOnUse%27 x1=%270%27 y1=%27750%27 x2=%271550%27 y2=%27750%27%3E%3Cstop offset=%270%27 stop-color=%27%23ffa736%27/%3E%3Cstop offset=%271%27 stop-color=%27%23FFCF4A%27/%3E%3C/linearGradient%3E%3Cpath id=%27s%27 fill=%27url%28%23b%29%27 d=%27M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z%27/%3E%3Cg id=%27g%27%3E%3Cuse href=%27%23s%27 transform=%27scale%280.12%29 rotate%2860%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.2%29 rotate%2810%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.25%29 rotate%2840%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.3%29 rotate%28-20%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.4%29 rotate%28-30%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.5%29 rotate%2820%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.6%29 rotate%2860%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.7%29 rotate%2810%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.835%29 rotate%28-40%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.9%29 rotate%2840%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.05%29 rotate%2825%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.2%29 rotate%288%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.333%29 rotate%28-60%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.45%29 rotate%28-30%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.6%29 rotate%2810%29%27/%3E%3C/g%3E%3C/defs%3E%3Cg transform=%27translate%281500 0%29%27%3E%3Cg transform=%27translate%280 525%29%27%3E%3Ccircle fill=%27url%28%23a%29%27 r=%273000%27/%3E%3Cg opacity=%270.5%27%3E%3Ccircle fill=%27url%28%23a%29%27 r=%272000%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271800%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271700%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271651%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271450%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271250%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271175%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27900%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27750%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27500%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27380%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27250%27/%3E%3C/g%3E%3Cg transform=%27rotate%28-162 0 0%29%27%3E%3Cuse href=%27%23g%27 transform=%27rotate%2810%29%27/%3E%3Cuse href=%27%23g%27 transform=%27rotate%28120%29%27/%3E%3Cuse href=%27%23g%27 transform=%27rotate%28240%29%27/%3E%3C/g%3E%3Ccircle fill-opacity=%270%27 fill=%27url%28%23a%29%27 r=%273000%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

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
/******/ 			id: moduleId,
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _modules_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header.js */ "./src/modules/header.js");
/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home.js */ "./src/modules/home.js");
/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu.js */ "./src/modules/menu.js");
/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/contact.js */ "./src/modules/contact.js");





(0,_modules_header_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
var btnHome = document.getElementById("btnHome");
var btnPhone = document.getElementById("btnPhone");
var btnMenu = document.getElementById("btnMenu");
var cleanContent = function cleanContent() {
  _modules_menu_js__WEBPACK_IMPORTED_MODULE_3__.content.innerHTML = "";
};
btnHome.addEventListener("click", function () {
  btnHome.style.backgroundColor = "#ffcf4a";
  btnPhone.style.backgroundColor = "whitesmoke";
  btnMenu.style.backgroundColor = "whitesmoke";
  cleanContent();
  (0,_modules_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
btnMenu.addEventListener("click", function () {
  btnHome.style.backgroundColor = "whitesmoke";
  btnPhone.style.backgroundColor = "whitesmoke";
  btnMenu.style.backgroundColor = "#ffcf4a";
  cleanContent();
  (0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_3__.createMenu)();
});
btnPhone.addEventListener("click", function () {
  btnHome.style.backgroundColor = "whitesmoke";
  btnPhone.style.backgroundColor = "#ffcf4a";
  btnMenu.style.backgroundColor = "whitesmoke";
  cleanContent();
  (0,_modules_contact_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map