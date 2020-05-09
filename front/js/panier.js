const functions = require('../js/functions.js');

module.exports= {

    generateHTML: function(){
        
        let back = functions.getBack()
        .then(function(backData){

            // get data from session storage
            let data = functions.getSessionStorageData("data");

            // generate html of this product
            let elementParent = document.getElementById('page_panier');
            let elementTotalCart = document.createElement('p');
            elementTotalCart.classList.add('block-total-cart');
            let elementTotalArticle = document.createElement('p');
           

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
                    functions.setNumberProduct(productId,quantiteProduct);
                    //modif total price par produit 
                    let totalProductPrice = functions.totalProductCart(productId, product.price);
                    elTotalProductPrice.innerHTML = "Sous-total: " + totalProductPrice + "€";
                    //total cart + modif
                    elementTotalCart.innerHTML = "Total cart: " + functions.totalToPay(backData) + "€";
                    elementPage.appendChild(elementTotalCart);
                    //total article cart + modif
                    elementTotalArticle.innerHTML = "Total articles ="+functions.totalArticlesToPay();
                    elementTotalCart.appendChild(elementTotalArticle);

                    //modif cart display
                    let productAdded = document.getElementById("cartItem");
                    productAdded.innerHTML = functions.totalArticlesToPay();

                })

                
                //button sup
                buttonClean.innerHTML = '<i class="fas fa-trash-alt"></i>';
                buttonClean.addEventListener('click', function(){
                    // modifie objet data

                    // update session storage

                    // update html


                    delete data[productId];
                    let str = JSON.stringify(data);
                    sessionStorage.setItem("data", str);
                    article.remove();

                });

                //link to product page 
                let linkProduct = document.createElement('a');
                linkProduct.href="./product.html?id="+product._id;
                linkProduct.classList.add("display_in_cart");
                linkProduct.appendChild(photo);

                //total price par product
                let totalProductPrice = functions.totalProductCart(productId, product.price);
                elTotalProductPrice.innerHTML = totalProductPrice + "€";
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

                //show total cart 
            let elementPage = document.getElementById('display_total_panier');

            elementTotalCart.innerHTML = "Total :" + functions.totalToPay(backData) + "€";
            elementTotalArticle.innerHTML = "Total articles :"+functions.totalArticlesToPay();
                //add child
            elementPage.appendChild(elementTotalArticle);
            elementPage.appendChild(elementTotalCart);

            //get form data
            let form = document.getElementById('contact_form');
            console.log(form);
            form.addEventListener('submit', function(){
                let lastName = document.getElementById('lastName');
                let name = document.getElementById('name');
                let phone = document.getElementById('phoneNumber');
                let email = document.getElementById('email');
                let address = document.getElementById('address');

                let info = {};
                info.lastName = lastName.value;
                info.name = name.value;
                info.phone = phone.value;
                info.email = email.value;
                info.address= address.value;
                
                //set in session storage
                let str = JSON.stringify(info);
                console.log(str);
                sessionStorage.setItem("info", str);
                
                } )

                            


        })
        /*.catch(function(request){
            alert('error back unfound');
        })*/


 
    
    }
}
