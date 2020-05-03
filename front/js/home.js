const functions = require('./functions.js');

module.exports = {

    generateHtml: function(){

        let request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                let productList = JSON.parse(this.responseText);
                console.log(productList);
                
            /* var elementParent = document.getElementById('listeDesProduits');
                elementParent.innerHTML = '<name>' +productList[0].name;*/
                
                let elementParent = document.getElementById('listeDesProduits');
            

                for ( let productIndex in productList){

                    let product = productList[productIndex];

                    //let mpmp = generateProductelement(product);

                    
                    // create element
                    let el=document.createElement('div');
                    console.log(el);
                    let text=document.createElement('p');
                    console.log(text);
                    let photo=document.createElement('img');
                    console.log(photo);

                    let description=document.createElement('div');
                    console.log (description);

                    // mettre produit dans element
                    description.innerHTML = 'Prix total' +productList[productIndex].price ;
                    el.classList.add("productDisplay");
                
                    text.innerHTML = productList[productIndex].name;

                    let urlImage = productList[productIndex].imageUrl;
                    let image = urlImage.replace("http://localhost:3000","front");
                    photo.src =  image;
                    photo.classList.add("image"); 
                    
                    let button=document.createElement('a');
                    button.href="front/html/product.html?id="+productList[productIndex]._id;
                    
                    button.appendChild(text);
                    console.log(button);
                            
                    // ajouter l'élément dans le parent
                    elementParent.appendChild(el);
                    el.appendChild(photo);
                    el.appendChild(description);
                    description.appendChild(text);

                    el.appendChild(button);
                    button.appendChild(photo);
                    

                    //elementParent.innerHTML += 'Prix' +productList[productIndex].price;
                    console.log ('Prix' +productList[productIndex].price+productList[productIndex].name);

                }
            }
        }

        request.open("GET", "http://localhost:3000/api/furniture");
        request.send();

    }

}
