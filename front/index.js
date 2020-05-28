const functions = require('./js/functions.js');
const home = require('./js/home.js');
const product = require('./js/product.js');
const panier = require('./js/panier.js');
const confirmation = require('./js/confirmation.js')

 //window event
window.addEventListener('load', function () {
    
    console.log(document.domain);

    if (document.getElementById("confirmation_product") === null){
        document.getElementById("cartItem").innerHTML = functions.getTotalArticlesCount();
    }

    let el = document.getElementById('listeDesProduits');
    if(el !== null){
        home.generateHtml();
  
          document.getElementById("cartItem").innerHTML = functions.getTotalArticlesCount();

 
    }
    else if(document.getElementById('page_panier')!== null){
        panier.generateHTML();
    }
    else if(document.getElementById("productPage")!== null){
        product.generateHTML();
    }
    else if (document.getElementById("confirmation_product")!== null){
        confirmation.generateHTML();
    }
    

    
});
