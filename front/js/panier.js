const functions = require('../js/functions.js');

module.exports= {

    generateHTML: function(){
        
        let data = {};

        let cookie = functions.getCookie('data');
        if(cookie != ""){
             data = JSON.parse(cookie);
        }
console.log(data);

//creer boucle data et recuperer info produit du back 
    }
}
