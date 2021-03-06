const functions = require('../js/functions');

module.exports= {

    generateHTML: function(){

        let arr = window.location.href.split('id=');
        let productId = arr[1];
        let urlToBeRequested = 'http://localhost:3000/api/furniture/'+productId;

        
        let request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                let product = JSON.parse(this.responseText);
                console.log(product);

                
                let nameProduit = document.getElementById('name');
                let priceProduit = document.getElementById('price');
                let descriptionProduit = document.getElementById ('description');
                let photoProduit = document.getElementById('productImage');
        
                //Mettre le produit dans l'element
                nameProduit.innerHTML = product.name;
                priceProduit.innerHTML = "Prix: " + product.price + "€";
                descriptionProduit.innerHTML = product.description;

                //get img
                let urlImage = product.imageUrl;
                let image = urlImage.replace("http://localhost:3000", "");
                photoProduit.src =  "front/"+ image;
                photo.alt = 'photo';
                photoProduit.classList.add("productImage"); 
   
            }
        }

        request.open("GET", urlToBeRequested);
        request.send();

        //add button event
        let button = document.getElementById('buttonAdd');
        console.log(button);
        button.addEventListener('click', function(){
            let numberElement = parseInt(document.getElementById("produitNumber").value);

            //if more than 0 product added
            if(numberElement > 0){

                functions.updateProductCount(productId, numberElement);

                //add cart item
                let productAdded = document.getElementById("cartItem");
                productAdded.innerHTML = functions.getTotalArticlesCount();
        
                //alert("Produit ajouté");

                MessageEvent ('producto');
            }
        } ) 
    }
}
