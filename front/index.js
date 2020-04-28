
/*const functions = require('./js/functions.js');


window.addEventListener('load', function () {
    let link = functions.createLink('product.html', 'mon produit', 'bonjour');

    document.getElementById('pp').appendChild(link);

let img = functions.createImage('https://www.w3schools.com/+images/colorpicker.gif', 'popo');
document.getElementById('pp').appendChild(img);

let mlgl = functions.createImageLink('product.html', 'mon produit', img);
console.log(mlgl);
document.getElementById('pp').appendChild(mlgl);

});*/



const functions = require('./js/functions.js');

const home = require('./js/home.js');
const product = require('./js/product.js');
const panier = require('./js/panier.js');

 //window event
window.addEventListener('load', function () {

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
