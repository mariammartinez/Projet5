const functions = require('../js/functions.js');

module.exports= {

    generateHTML: function(){



        //get back
        let back = functions.getBackAllProducts()
        .then(function(backData){
            console.log(backData);

        //get form
        let formSession = functions.getSessionStorageData("info");
        console.log(formSession);
         
        //get data
        let dataSession = functions.getSessionStorageData("data");
        console.log(dataSession);

        //get element html
        let elementParent = document.getElementById('confirmation_display');

        let emailConfirmation = document.getElementById('confirmationEmail');
        let nameClient = document.getElementById('thanks');
        let articlesTotal = document.getElementById('articles_total');
        let priceTotal = document.getElementById('price_total');
        
        //create element
        


        //add to element
        nameClient.innerHTML = "Merci " + formSession.name + " " + formSession.lastName;
        emailConfirmation.innerHTML = "Un e-mail vous a été envoyé à l'adresse " + formSession.email;
        articlesTotal.innerHTML = "Total articles :"+functions.getTotalArticlesCount();
        priceTotal.innerHTML = "Total cart: " + functions.getFinalPrice(backData) + "€";
       
        // for each product
        for ( let productId in dataSession){
            // let product = productId[data]; 

            let product = functions.getProductById(productId, backData)

            //get elements id
            let elementPanier = document.getElementById('confirmation_product');


            //create elements
            let elementProduct = document.createElement('div');
            elementProduct.classList.add('confirmation_product_display');
            let productName = document.createElement('p');
            let photo = document.createElement('img');
            let productPrice = document.createElement('p');
            let elementArticle = document.createElement('p');
            let elTotalProductPrice = document.createElement('p');
                

            let urlImage = product.imageUrl;
            let image = urlImage.replace("http://localhost:3000","");
            photo.src =  "../"+ image;
            photo.classList.add("image_confirmation"); 

            productName.innerHTML = product.name;
            productPrice.innerHTML = product.price+"€";
            elementArticle.innerHTML = functions.getArticlesCount(productId);
            let totalProductPrice = functions.getTotalPriceByProduct(productId, product.price);
            elTotalProductPrice.innerHTML = "Sous-total: " + totalProductPrice + "€";

            //add child
            elementPanier.appendChild(elementProduct);
            elementProduct.appendChild(photo);
            elementProduct.appendChild(productName);
            elementProduct.appendChild(productPrice);
            elementProduct.appendChild(elementArticle); 
            elementProduct.appendChild(elTotalProductPrice);
         }

         /*details achat
        */






    }   
        )
    }
}
