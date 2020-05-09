//functions
module.exports = {
    //create dom element image
    createImage: function(src, alt){
        let el = document.createElement('img');
        el.src = src;
        el.alt = alt;
        return el;
    },

    //create dom link
    createLink: function(href, title, innerHtml){
        let link = document.createElement('a');
        link.href = href;
        link.title = title;
        link.innerHTML = innerHtml;
        return link;
    },

    // get sessionStorage Data et return json
    getSessionStorageData: function(key){
        let data;
        let panier = sessionStorage.getItem(key);
        if(panier != null){
            data = JSON.parse(panier);
        }
        else{
            data = {};
        }
        return data;
    },
   

    displayCart: function(){
        // update panier count
        let data = this.getSessionStorageData("data");
        let productCount = 0;
        for ( let productId in data){
            productCount = productCount+ data[productId];
        }
        let productAdded = document.getElementById("cartItem");
        productAdded.innerHTML = productCount;
    },

    //get number products 
    getNumberProduct: function(productId){
        let data = this.getSessionStorageData("data");
        let nb;
        if(typeof data[productId] !== "undefined"){
            nb = data[productId];
        }else{
            nb = 0;
        }
        return nb;
    },

        //function total product price
        totalProductCart: function(productId, price){
            //trouver la quantite de produits
            let numberProduct = this.getNumberProduct(productId);
            //multiplier par  le prix
            let totalprice = numberProduct * price;
            return totalprice;
        },

        setNumberProduct: function(productId, nb){
            // convert to number
            nb = parseInt(nb);

            // get data from session storage
            let panier = sessionStorage.getItem('data');
            if(panier != null){
                data = JSON.parse(panier);
            }
            else{
                data = {};
            }

            // if no product, delete, else update
            if(nb === 0){
                delete data[productId];
            }else{
                data[productId] = nb;
            }

            // go back to session storage
            let str = JSON.stringify(data);
            sessionStorage.setItem("data", str);
        },

        // function total panier
        totalToPay: function(backData){

            let totalCart = 0;
            //boucle pour trouver tous les produits
            let data = this.getSessionStorageData("data");
            for ( let productId in data){
                let product = this.getProductById(productId,backData);
                let totalParProduct = this.totalProductCart(productId, product.price);
                   
                //total car adition
                totalCart = totalCart + totalParProduct;
            }
            return totalCart;

        },

        totalArticlesToPay: function(){
            let totalArticle = 0;
            //boucle pour trouver les articles
            let data = this.getSessionStorageData("data");
            for ( let productId in data){
               totalArticle = totalArticle + data[productId];
            }
            return totalArticle;
        },

        getBack: function(){
            return new Promise(function(resolve, reject){
                let request = new XMLHttpRequest();
                request.onreadystatechange = function() {
                    if (this.readyState == XMLHttpRequest.DONE){
                        if(this.status == 200){
                            let productList = JSON.parse(this.responseText);
                            resolve(productList);
                        }else{
                            //reject(request);
                        }
                    }
                }
                request.open("GET", "http://localhost:3000/api/furniture");
                request.send();
            });
        },

        // get product from backdata
        getProductById: function(id, backData){
            for(product of backData){
                if(product._id == id){
                    return product;
                }
            }
            return false;
        },

       
        

}

