const functions = require('./functions.js');

module.exports = {

    generateHtml: function(){

        let request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                let productList = JSON.parse(this.responseText);
                console.log(productList);
                               
                let elementParent = document.getElementById('listeDesProduits');
            

                for ( let productIndex in productList){

                    let product = productList[productIndex];

                    // create element
                    let el=document.createElement('div');
                    el.classList.add("productDisplay");
                    let name=document.createElement('p');
                    let photo=document.createElement('img');
                    let price=document.createElement('p');

                    // mettre produit dans element
                    let urlImage = productList[productIndex].imageUrl;
                    let image = urlImage.replace("http://localhost:3000","front");
                    photo.src =  image;
                    photo.classList.add("image"); 
                    //create link product
                    let button=document.createElement('a');
                    button.href="front/html/product.html?id="+productList[productIndex]._id;
                    button.appendChild(name);

                    name.innerHTML = productList[productIndex].name;
                    price.innerHTML = 'Prix total' +productList[productIndex].price ;
               
                            
                    // ajouter l'élément dans le parent
                    elementParent.appendChild(el);
                    el.appendChild(photo);
                    el.appendChild(button);
                    button.appendChild(photo);
                    el.appendChild(name);
                    el.appendChild(price);
                    
                }
            }
        }

        request.open("GET", "http://localhost:3000/api/furniture");
        request.send();

    }

}
