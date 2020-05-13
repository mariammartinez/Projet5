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

            let orderRefer = functions.getSessionStorageData("order");
            console.log(orderRefer);

            //get element html
            let elementParent = document.getElementById('confirmation_display');
            let emailConfirmation = document.getElementById('confirmationEmail');
            let nameClient = document.getElementById('thanks');
            let articlesTotal = document.getElementById('articles_total');
            let priceTotal = document.getElementById('price_total');
            let orderReference = document.getElementById('orderRef');
            let contactId = document.getElementById('contact_name');
            let contactAdresse = document.getElementById('contact_adresse');
            let buttonReturn = document.getElementById('retourner');
            
    
            //add to element
            nameClient.innerHTML = "Merci " + formSession.name;
            emailConfirmation.innerHTML = "Un e-mail vous a été envoyé à l'adresse " + formSession.email;
            articlesTotal.innerHTML = "Total articles :"+functions.getTotalArticlesCount();
            priceTotal.innerHTML = "Total : " + functions.getFinalPrice(backData) + "€";
            orderReference.innerHTML = "Votre numero de commande: "+ orderRefer;
            contactId.innerHTML = formSession.name + " " + formSession.lastName;
            contactAdresse.innerHTML = formSession.adresse + " " + formSession.CodePostal + " " + formSession.ville;

        
        
            // for each product
            for ( let productId in dataSession){
                // let product = productId[data]; 

                let product = functions.getProductById(productId, backData)

                //get elements id
                let elementPanier = document.getElementById('confirmation_product');


                //create elements
                let divProduct = document.createElement('div');
                divProduct.classList.add('product_display');
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
                elementPanier.appendChild(divProduct);
                divProduct.appendChild(photo);
                divProduct.appendChild(productName);
                divProduct.appendChild(productPrice);
                divProduct.appendChild(elementArticle); 
                divProduct.appendChild(elTotalProductPrice);
            }


           localStorage.clear();

        })
        /*.catch(function(req){

        })*/
    }
}
