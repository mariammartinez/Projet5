
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

    },

    //totalPriceProduct : function (){
      //  let totalPrice = document.createElement('p')
        
    //}




    getCookie: function(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

}
