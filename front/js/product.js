const functions = require('../js/functions.js');

module.exports= {

    generateHTML: function(){

        let arr = window.location.href.split('id=');
        let productId = arr[1];
        let urlToBeRequested = 'http://localhost:3000/api/furniture/'+productId;
        let el = functions.createLink(urlToBeRequested, 'fdf', 'show data');
        document.getElementById('productPage').appendChild(el);

    }
}
