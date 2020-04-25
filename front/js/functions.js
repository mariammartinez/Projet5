
module.exports = {

    createImage: function(src, alt){
        let el = document.createElement('img');
        el.src = src;
        el.alt = alt;
        return el;
    },

    createLink: function(href, title, innerHtml){
        let button = document.createElement('a');
        button.href = href;
        button.title = title;
        button.innerHTML = innerHtml;
        return button;
    },

    createImageLink: function(href, title, img){
        let button = document.createElement('a');
        button.href = href;
        button.title = title;
        button.appendChild(img);
        return button;
    },

    createProductPrice: function(){
        let price = document.createElement('div');
        price.innerHTML = 'Prix Total'+ productList[productIndex].price;

        //comment recuperer la liste de produits du back,
        //comment faire par page generé par produits? 
    }

}
