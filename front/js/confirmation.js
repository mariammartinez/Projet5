const functions = require('../js/functions.js');

module.exports= {

    generateHTML: function(){
        //get back
        let back = functions.getBack()
        .then(function(backData){
            console.log(backData);

        //get form
        let formSession = functions.getInfo();
        console.log(formSession);
         
        //get data
        let dataSession = functions.getData();
        console.log(dataSession);

        //get element html
        let elementParent = document.getElementById('confirmation_display');

        let emailConfirmation = document.getElementById('confirmationEmail');
        let nameClient = document.getElementById('thanks');

        //create element
        


        //add to element
        nameClient.innerHTML = "Merci " + formSession.name + " " + formSession.lastName;
        
        
        emailConfirmation.innerHTML = "Un e-mail vous a été envoyé à l'adresse " + formSession.email;
       
         // for each product
         for ( let productId in dataSession){
            // let product = productId[data]; 

            let product = functions.getProductById(productId, backData)

            //get elements id
            let elementPanier = document.getElementById('confirmation_product');


            //create elements
            let productName = document.createElement('p');
            let photo = document.createElement('img');
            let productPrice = document.createElement('p');
                

            let urlImage = product.imageUrl;
            let image = urlImage.replace("http://localhost:3000","");
            photo.src =  "../"+ image;
            photo.classList.add("image_panier"); 

            productName.innerHTML = product.name;
            productPrice.innerHTML = product.price+"€";

            //add child
            elementPanier.appendChild(photo);
            elementPanier.appendChild(productName);
            elementPanier.appendChild(productPrice);
         }






    }   
        )
    }
}
