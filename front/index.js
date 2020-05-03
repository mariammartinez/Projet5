

const functions = require('./js/functions.js');

const home = require('./js/home.js');
const product = require('./js/product.js');
const panier = require('./js/panier.js');

 //window event
window.addEventListener('load', function () {
    
    functions.displayCart();

    let el = document.getElementById('listeDesProduits');
    if(el !== null){
        home.generateHtml();
    }
    else if(document.getElementById('page_panier')!== null){
        panier.generateHTML();
    }
    else if(document.getElementById("productPage")!== null){
        product.generateHTML();
    }
    

    

    //let productId = url.replace('html/product.html?id=', '');

    //alert(productId);
   
   //if(window.location == index.html){

   //}
    //home.generateHtml();

});
