/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./front/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./front/index.js":
/*!************************!*\
  !*** ./front/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\n/*const functions = require('./js/functions.js');\r\n\r\n\r\nwindow.addEventListener('load', function () {\r\n    let link = functions.createLink('product.html', 'mon produit', 'bonjour');\r\n\r\n    document.getElementById('pp').appendChild(link);\r\n\r\nlet img = functions.createImage('https://www.w3schools.com/images/colorpicker.gif', 'popo');\r\ndocument.getElementById('pp').appendChild(img);\r\n\r\nlet mlgl = functions.createImageLink('product.html', 'mon produit', img);\r\nconsole.log(mlgl);\r\ndocument.getElementById('pp').appendChild(mlgl);\r\n\r\n});*/\r\n\r\n\r\n\r\nconst functions = __webpack_require__(/*! ./js/functions.js */ \"./front/js/functions.js\");\r\n\r\nconst home = __webpack_require__(/*! ./js/home.js */ \"./front/js/home.js\");\r\nconst product = __webpack_require__(/*! ./js/product.js */ \"./front/js/product.js\");\r\n\r\nwindow.addEventListener('load', function () {\r\n\r\n    let el = document.getElementById('listeDesProduits');\r\n    if(el !== null){\r\n        home.generateHtml();\r\n    }else{\r\n        product.generateHTML();\r\n    }\r\n\r\n    \r\n\r\n    //let productId = url.replace('html/product.html?id=', '');\r\n\r\n    //alert(productId);\r\n   \r\n   //if(window.location == index.html){\r\n\r\n   //}\r\n    //home.generateHtml();\r\n\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Zyb250L2luZGV4LmpzP2QzMzgiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qY29uc3QgZnVuY3Rpb25zID0gcmVxdWlyZSgnLi9qcy9mdW5jdGlvbnMuanMnKTtcclxuXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBsaW5rID0gZnVuY3Rpb25zLmNyZWF0ZUxpbmsoJ3Byb2R1Y3QuaHRtbCcsICdtb24gcHJvZHVpdCcsICdib25qb3VyJyk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BwJykuYXBwZW5kQ2hpbGQobGluayk7XHJcblxyXG5sZXQgaW1nID0gZnVuY3Rpb25zLmNyZWF0ZUltYWdlKCdodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2ltYWdlcy9jb2xvcnBpY2tlci5naWYnLCAncG9wbycpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHAnKS5hcHBlbmRDaGlsZChpbWcpO1xyXG5cclxubGV0IG1sZ2wgPSBmdW5jdGlvbnMuY3JlYXRlSW1hZ2VMaW5rKCdwcm9kdWN0Lmh0bWwnLCAnbW9uIHByb2R1aXQnLCBpbWcpO1xyXG5jb25zb2xlLmxvZyhtbGdsKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BwJykuYXBwZW5kQ2hpbGQobWxnbCk7XHJcblxyXG59KTsqL1xyXG5cclxuXHJcblxyXG5jb25zdCBmdW5jdGlvbnMgPSByZXF1aXJlKCcuL2pzL2Z1bmN0aW9ucy5qcycpO1xyXG5cclxuY29uc3QgaG9tZSA9IHJlcXVpcmUoJy4vanMvaG9tZS5qcycpO1xyXG5jb25zdCBwcm9kdWN0ID0gcmVxdWlyZSgnLi9qcy9wcm9kdWN0LmpzJyk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdGVEZXNQcm9kdWl0cycpO1xyXG4gICAgaWYoZWwgIT09IG51bGwpe1xyXG4gICAgICAgIGhvbWUuZ2VuZXJhdGVIdG1sKCk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBwcm9kdWN0LmdlbmVyYXRlSFRNTCgpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIC8vbGV0IHByb2R1Y3RJZCA9IHVybC5yZXBsYWNlKCdodG1sL3Byb2R1Y3QuaHRtbD9pZD0nLCAnJyk7XHJcblxyXG4gICAgLy9hbGVydChwcm9kdWN0SWQpO1xyXG4gICBcclxuICAgLy9pZih3aW5kb3cubG9jYXRpb24gPT0gaW5kZXguaHRtbCl7XHJcblxyXG4gICAvL31cclxuICAgIC8vaG9tZS5nZW5lcmF0ZUh0bWwoKTtcclxuXHJcbn0pO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./front/index.js\n");

/***/ }),

/***/ "./front/js/functions.js":
/*!*******************************!*\
  !*** ./front/js/functions.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nmodule.exports = {\r\n\r\n    createImage: function(src, alt){\r\n        let el = document.createElement('img');\r\n        el.src = src;\r\n        el.alt = alt;\r\n        return el;\r\n    },\r\n\r\n    createLink: function(href, title, innerHtml){\r\n        let button = document.createElement('a');\r\n        button.href = href;\r\n        button.title = title;\r\n        button.innerHTML = innerHtml;\r\n        return button;\r\n    },\r\n\r\n    createImageLink: function(href, title, img){\r\n        let button = document.createElement('a');\r\n        button.href = href;\r\n        button.title = title;\r\n        button.appendChild(img);\r\n        return button;\r\n    },\r\n\r\n    createProductPrice: function(){\r\n        let price = document.createElement('div');\r\n        price.innerHTML = 'Prix Total'+ productList[productIndex].price;\r\n\r\n        //comment recuperer la liste de produits du back,\r\n        //comment faire par page generé par produits? \r\n    }\r\n\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udC9qcy9mdW5jdGlvbnMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udC9qcy9mdW5jdGlvbnMuanM/MmVhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblxyXG4gICAgY3JlYXRlSW1hZ2U6IGZ1bmN0aW9uKHNyYywgYWx0KXtcclxuICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBlbC5zcmMgPSBzcmM7XHJcbiAgICAgICAgZWwuYWx0ID0gYWx0O1xyXG4gICAgICAgIHJldHVybiBlbDtcclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlTGluazogZnVuY3Rpb24oaHJlZiwgdGl0bGUsIGlubmVySHRtbCl7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBidXR0b24uaHJlZiA9IGhyZWY7XHJcbiAgICAgICAgYnV0dG9uLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGlubmVySHRtbDtcclxuICAgICAgICByZXR1cm4gYnV0dG9uO1xyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGVJbWFnZUxpbms6IGZ1bmN0aW9uKGhyZWYsIHRpdGxlLCBpbWcpe1xyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgYnV0dG9uLmhyZWYgPSBocmVmO1xyXG4gICAgICAgIGJ1dHRvbi50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICAgIHJldHVybiBidXR0b247XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZVByb2R1Y3RQcmljZTogZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwcmljZS5pbm5lckhUTUwgPSAnUHJpeCBUb3RhbCcrIHByb2R1Y3RMaXN0W3Byb2R1Y3RJbmRleF0ucHJpY2U7XHJcblxyXG4gICAgICAgIC8vY29tbWVudCByZWN1cGVyZXIgbGEgbGlzdGUgZGUgcHJvZHVpdHMgZHUgYmFjayxcclxuICAgICAgICAvL2NvbW1lbnQgZmFpcmUgcGFyIHBhZ2UgZ2VuZXLDqSBwYXIgcHJvZHVpdHM/IFxyXG4gICAgfVxyXG5cclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./front/js/functions.js\n");

/***/ }),

/***/ "./front/js/home.js":
/*!**************************!*\
  !*** ./front/js/home.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nmodule.exports = {\r\n\r\n    generateHtml: function(){\r\n\r\n\r\n        let request = new XMLHttpRequest();\r\n        request.onreadystatechange = function() {\r\n            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {\r\n                let productList = JSON.parse(this.responseText);\r\n                console.log(productList);\r\n                \r\n            /* var elementParent = document.getElementById('listeDesProduits');\r\n                elementParent.innerHTML = '<name>' +productList[0].name;*/\r\n                \r\n                let elementParent = document.getElementById('listeDesProduits');\r\n            \r\n\r\n                for ( let productIndex in productList){\r\n\r\n                    let product = productList[productIndex];\r\n\r\n                    //let mpmp = generateProductelement(product);\r\n\r\n                    \r\n                    // create element\r\n                    let el=document.createElement('div');\r\n                    console.log(el);\r\n                    let text=document.createElement('p');\r\n                    console.log(text);\r\n                    let photo=document.createElement('img');\r\n                    console.log(photo);\r\n\r\n                    let description=document.createElement('div');\r\n                    console.log (description);\r\n\r\n                /* let button=document.createElement('a');\r\n                    console.log (button);*/\r\n\r\n\r\n                    // mettre produit dans element\r\n                    description.innerHTML = 'Prix total' +productList[productIndex].price ;\r\n                    el.classList.add(\"productDisplay\");\r\n                \r\n                    text.innerHTML = '<name>'+productList[productIndex].name;\r\n\r\n                \r\n\r\n                    let urlImage = productList[productIndex].imageUrl;\r\n                    let image = urlImage.replace(\"http://localhost:3000\",\"front\");\r\n                    photo.src =  image;\r\n                    photo.classList.add(\"image\"); \r\n                    \r\n                    let button=document.createElement('a');\r\n                    button.href=\"front/html/product.html?id=\"+productList[productIndex]._id;\r\n                    \r\n                    button.appendChild(text);\r\n                    console.log(button);\r\n                            \r\n                    // ajouter l'élément dans le parent\r\n                    elementParent.appendChild(el);\r\n                    el.appendChild(photo);\r\n                    el.appendChild(description);\r\n                    description.appendChild(text);\r\n\r\n                    el.appendChild(button);\r\n                    button.appendChild(photo);\r\n                    \r\n\r\n                    //elementParent.innerHTML += 'Prix' +productList[productIndex].price;\r\n                    console.log ('Prix' +productList[productIndex].price+productList[productIndex].name);\r\n\r\n                }\r\n            }\r\n        }\r\n\r\n        request.open(\"GET\", \"http://localhost:3000/api/furniture\");\r\n        request.send();\r\n\r\n    }\r\n\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udC9qcy9ob21lLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZnJvbnQvanMvaG9tZS5qcz9kOGQ5Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHJcbiAgICBnZW5lcmF0ZUh0bWw6IGZ1bmN0aW9uKCl7XHJcblxyXG5cclxuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSAmJiB0aGlzLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBwcm9kdWN0TGlzdCA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdExpc3QpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8qIHZhciBlbGVtZW50UGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RlRGVzUHJvZHVpdHMnKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRQYXJlbnQuaW5uZXJIVE1MID0gJzxuYW1lPicgK3Byb2R1Y3RMaXN0WzBdLm5hbWU7Ki9cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRQYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdGVEZXNQcm9kdWl0cycpO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKCBsZXQgcHJvZHVjdEluZGV4IGluIHByb2R1Y3RMaXN0KXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb2R1Y3QgPSBwcm9kdWN0TGlzdFtwcm9kdWN0SW5kZXhdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2xldCBtcG1wID0gZ2VuZXJhdGVQcm9kdWN0ZWxlbWVudChwcm9kdWN0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY3JlYXRlIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGhvdG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGhvdG8pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cgKGRlc2NyaXB0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvKiBsZXQgYnV0dG9uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyAoYnV0dG9uKTsqL1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWV0dHJlIHByb2R1aXQgZGFucyBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gJ1ByaXggdG90YWwnICtwcm9kdWN0TGlzdFtwcm9kdWN0SW5kZXhdLnByaWNlIDtcclxuICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKFwicHJvZHVjdERpc3BsYXlcIik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LmlubmVySFRNTCA9ICc8bmFtZT4nK3Byb2R1Y3RMaXN0W3Byb2R1Y3RJbmRleF0ubmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVybEltYWdlID0gcHJvZHVjdExpc3RbcHJvZHVjdEluZGV4XS5pbWFnZVVybDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW1hZ2UgPSB1cmxJbWFnZS5yZXBsYWNlKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIsXCJmcm9udFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBwaG90by5zcmMgPSAgaW1hZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcGhvdG8uY2xhc3NMaXN0LmFkZChcImltYWdlXCIpOyBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYnV0dG9uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24uaHJlZj1cImZyb250L2h0bWwvcHJvZHVjdC5odG1sP2lkPVwiK3Byb2R1Y3RMaXN0W3Byb2R1Y3RJbmRleF0uX2lkO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhidXR0b24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWpvdXRlciBsJ8OpbMOpbWVudCBkYW5zIGxlIHBhcmVudFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRQYXJlbnQuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKHBob3RvKTtcclxuICAgICAgICAgICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQodGV4dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHBob3RvKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9lbGVtZW50UGFyZW50LmlubmVySFRNTCArPSAnUHJpeCcgK3Byb2R1Y3RMaXN0W3Byb2R1Y3RJbmRleF0ucHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cgKCdQcml4JyArcHJvZHVjdExpc3RbcHJvZHVjdEluZGV4XS5wcmljZStwcm9kdWN0TGlzdFtwcm9kdWN0SW5kZXhdLm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9mdXJuaXR1cmVcIik7XHJcbiAgICAgICAgcmVxdWVzdC5zZW5kKCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./front/js/home.js\n");

/***/ }),

/***/ "./front/js/product.js":
/*!*****************************!*\
  !*** ./front/js/product.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const functions = __webpack_require__(/*! ../js/functions.js */ \"./front/js/functions.js\");\r\n\r\nmodule.exports= {\r\n\r\n    generateHTML: function(){\r\n\r\n        let arr = window.location.href.split('id=');\r\n        let productId = arr[1];\r\n        let urlToBeRequested = 'http://localhost:3000/api/furniture/'+productId;\r\n        let el = functions.createLink(urlToBeRequested, 'fdf', 'show data');\r\n        document.getElementById('productPage').appendChild(el);\r\n\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udC9qcy9wcm9kdWN0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZnJvbnQvanMvcHJvZHVjdC5qcz9kYTIxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZ1bmN0aW9ucyA9IHJlcXVpcmUoJy4uL2pzL2Z1bmN0aW9ucy5qcycpO1xyXG5cclxubW9kdWxlLmV4cG9ydHM9IHtcclxuXHJcbiAgICBnZW5lcmF0ZUhUTUw6IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGxldCBhcnIgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnaWQ9Jyk7XHJcbiAgICAgICAgbGV0IHByb2R1Y3RJZCA9IGFyclsxXTtcclxuICAgICAgICBsZXQgdXJsVG9CZVJlcXVlc3RlZCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2Z1cm5pdHVyZS8nK3Byb2R1Y3RJZDtcclxuICAgICAgICBsZXQgZWwgPSBmdW5jdGlvbnMuY3JlYXRlTGluayh1cmxUb0JlUmVxdWVzdGVkLCAnZmRmJywgJ3Nob3cgZGF0YScpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0UGFnZScpLmFwcGVuZENoaWxkKGVsKTtcclxuXHJcbiAgICB9XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./front/js/product.js\n");

/***/ })

/******/ });