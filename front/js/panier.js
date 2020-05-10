const functions = require('../js/functions.js');

module.exports= {

    generateHTML: function(){
        

        functions.getBackAllProducts()
        .then(function(backData){

            // get data from session storage
            let data = functions.getSessionStorageData("data");

            // generate html of this product
            let elementParent = document.getElementById('page_panier');
            let productAdded = document.getElementById("cartItem");
            //show total cart 
            let elementTotalCart = document.getElementById('display_price_panier');
            let elementTotalArticle = document.getElementById('display_articles_panier');
           

            // for each product
            for ( let productId in data){
            // let product = productId[data];

                let product = functions.getProductById(productId, backData)
                  
                // create element
                let article = document.createElement('article');
                article.classList.add('cart_product');
                let photo = document.createElement('img');
                let productName = document.createElement('p');
                let productPrice = document.createElement('p');
                let quantite = document.createElement('input');
                let totalProduct = document.createElement('p');
                let totalCart = document.createElement('p');                
                let buttonClean = document.createElement('button');
                buttonClean.classList.add('button_clean');
                let elTotalProductPrice = document.createElement('div');

                // add product in element

             
                // transform img url
                let urlImage = product.imageUrl;
                let image = urlImage.replace("http://localhost:3000","");
                photo.src =  "../"+ image;
                photo.classList.add("image_panier"); 

                productName.innerHTML = product.name;
                productPrice.innerHTML = product.price+"€";
                
                //get product qtt
                let productCount = data[productId];
            
                //display input qtt
                quantite.setAttribute("type", "number");
                quantite.setAttribute("value", productCount);
                quantite.setAttribute("min", "1");
                quantite.setAttribute("max", "10");
                quantite.addEventListener("change", function(){
                    //get value
                    let quantiteProduct = quantite.value;
                    //set session storage
                    functions.updateProductCount(productId,quantiteProduct);
                    //modif total price par produit 
                    let totalProductPrice = functions.getTotalPriceByProduct(productId, product.price);
                    elTotalProductPrice.innerHTML = "Sous-total: " + totalProductPrice + "€";
                    //total cart + modif
                    elementTotalCart.innerHTML = "Total cart: " + functions.getFinalPrice(backData) + "€";
                    //total article cart + modif
                    elementTotalArticle.innerHTML = "Total articles ="+functions.getTotalArticlesCount();
                    elementTotalCart.appendChild(elementTotalArticle);

                    //modif cart display
                    productAdded.innerHTML = functions.getTotalArticlesCount();

                })

                
                //button sup
                buttonClean.innerHTML = '<i class="fas fa-trash-alt"></i>';
                buttonClean.addEventListener('click', function(){
                    functions.updateProductCount(productId,0);
                    elementTotalCart.innerHTML = "Total cart: " + functions.getFinalPrice(backData) + "€";
                    productAdded.innerHTML = functions.getTotalArticlesCount();
                    elementTotalArticle.innerHTML = "Total articles ="+functions.getTotalArticlesCount();
                    
                    article.remove();

                });

                //link to product page 
                let linkProduct = document.createElement('a');
                linkProduct.href="./product.html?id="+product._id;
                linkProduct.classList.add("display_in_cart");
                linkProduct.appendChild(photo);

                //total price par product
                let totalProductPrice = functions.getTotalPriceByProduct(productId, product.price);
                elTotalProductPrice.innerHTML ="Sous-total: "+ totalProductPrice + "€";
                console.log(totalProductPrice);
                  
                // add child              
                elementParent.appendChild(article);
                article.appendChild(linkProduct);
                article.appendChild(productName);
                article.appendChild(productPrice);
                article.appendChild(quantite);
                article.appendChild(buttonClean);
                article.appendChild(elTotalProductPrice);
            }

            elementTotalCart.innerHTML = "Total :" + functions.getFinalPrice(backData) + "€";
            elementTotalArticle.innerHTML = "Total articles :"+functions.getTotalArticlesCount();

            //get form data
            let form = document.getElementById('contact_form');
            console.log(form);
            form.addEventListener('submit', function(e){
                e.preventDefault();

                // récupérer les données du contact
                let contact = {};
                contact.lastName = document.getElementById('lastName').value;
                contact.name = document.getElementById('name').value;
                contact.phone = document.getElementById('phoneNumber').value;
                contact.email = document.getElementById('email').value;
                contact.adresse = document.getElementById('adresse').value;
                contact.ville = document.getElementById('ville').value;
                
                // récupérer les données des articles
                let products = [];
                // faire une boucle pour mettre les product ids dans l'array products (products.push(productId))
                let data = functions.getSessionStorageData("data");
                for ( let productId in data){
                    products.push(productId);
                }


                // créer un objet json contenant les produits et le contact
                let objRequest = {
                    products: products,
                    contact: contact
                  
                };

                // evnoyer la requête au server (order)
                functions.getReference(objRequest)
                // faire le .then et le .catch
                .then(function(jsonReturn){
                    console.log(jsonReturn);

                    // stocker la réponse dans session storage
                    functions.setSessionStorageData('info', contact);
                    functions.setSessionStorageData('order', jsonReturn.orderId);


                 
                    // rediriger vers confirmation.html
                   // window.location.replace("./confirmation.html");

                 
                })
                /*.catch(function(request){
                    alert('error back unfound');
                })*/


            })

                        
        })
        /*.catch(function(request){
            alert('error back unfound');
        })*/


 
    
    }
}
