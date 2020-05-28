const functions = require('./functions.js');

module.exports = {



    generateHtml: function(){

        functions.getBackAllProducts()
        .then(function(backData){
              
            let elementParent = document.getElementById('listeDesProduits');
            

        

            for ( let productIndex in backData){

                let product = backData[productIndex];


                // create element
                let el=document.createElement('div');
                el.classList.add("productDisplay");
                let name=document.createElement('p');
                let photo=document.createElement('img');
                let price=document.createElement('p');

                // mettre produit dans element
                let urlImage = backData[productIndex].imageUrl;
                let image = urlImage.replace("http://localhost:3000","front");
                photo.src =  image;
                photo.classList.add("image"); 
                photo.alt = 'photo';
                //create link product
                let button=document.createElement('a');
                button.href="./product.html?id="+backData[productIndex]._id;
                button.appendChild(name);

                name.innerHTML = backData[productIndex].name;
                price.innerHTML = "Prix total: " +backData[productIndex].price + "€" ;
           
                        
                // ajouter l'élément dans le parent
                elementParent.appendChild(el);
                el.appendChild(photo);
                el.appendChild(button);
                button.appendChild(photo);
                el.appendChild(name);
                el.appendChild(price);
            }
        })

            /*.catch(function(request){
            alert('error back unfound');
        })*/


       
    }

}
