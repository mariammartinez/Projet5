//functions
module.exports = {
    // get localStorage Data et return json
    getStorageData: function(key){
        let data;
        let panier = localStorage.getItem(key);
        if(panier != null){
            data = JSON.parse(panier);
        }
        else{
            data = {};
        }
        return data;
    },

    // set localStorage Data et return json
    setStorageData: function(key, value){
        let str = JSON.stringify(value);
        localStorage.setItem(key, str);
    },
   
    //get number of articles 
    getArticlesCount: function(productId){
        let data = this.getStorageData("data");
        let nb;
        if(typeof data[productId] !== "undefined"){
            nb = data[productId];
        }else{
            nb = 0;
        }
        return nb;
    },

    // total product price
    getTotalPriceByProduct: function(productId, price){
        //trouver la quantite de produits
        let numberProduct = this.getArticlesCount(productId);
        //multiplier par  le prix
        let totalprice = numberProduct * price;
        return totalprice;
    },

    //update product count in localStorage
    updateProductCount: function(productId, nb){
        // convert to number
        nb = parseInt(nb);

        // get data from session storage
        let data = this.getStorageData("data");
       
        // if no product, delete, else update
        if(nb === 0){
            delete data[productId];
        }else{
            data[productId] = nb;
        }

        // go back to session storage
        let str = JSON.stringify(data);
        localStorage.setItem("data", str);
    },

    // get total price
    getFinalPrice: function(backData){
        let totalCart = 0;
        //boucle pour trouver tous les produits
        let data = this.getStorageData("data");
        for ( let productId in data){
            let product = this.getProductById(productId,backData);
            let totalParProduct = this.getTotalPriceByProduct(productId, product.price);    
            //total car adition
            totalCart = totalCart + totalParProduct;
        }
        return totalCart;
    },

    //get number of articles in the cart
    getTotalArticlesCount: function(){
        let totalArticle = 0;
        //boucle pour trouver les articles
        let data = this.getStorageData("data");
        for ( let productId in data){
            totalArticle = totalArticle + data[productId];
        }
        return totalArticle;
    },

    //get back all products
    getBackAllProducts: function(){
        return new Promise(function(resolve, reject){
            let request = new XMLHttpRequest();
            request.onreadystatechange = function() {
                if (this.readyState == XMLHttpRequest.DONE){
                    if(this.status == 200){
                        let backData = JSON.parse(this.responseText);
                        resolve(backData);
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
    getReference: function(data){
        return new Promise(function(resolve, reject){
            let request = new XMLHttpRequest();
            request.onreadystatechange = function() {
                if (this.readyState == XMLHttpRequest.DONE){
                    if(this.status == 200 || this.status == 201){
                        let backData = JSON.parse(this.responseText);
                        resolve(backData);
                    }else{
                        reject(request);
                    }
                }
            }
            // todo trouver comment mettre data dans request pour envoyer en json
            request.open("POST", "http://localhost:3000/api/furniture/order");
            request.setRequestHeader("Content-Type", "application/json");
            request.send(JSON.stringify(data));
        });
    },

    deleteItems: function() {
        localStorage.clear();
      } 

       
        

}

