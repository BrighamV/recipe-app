const axios = require('axios');
var express = require('express');
var router = express.Router();
console.log('ppo');

/* GET home page. */
router.get('/', function(req, res, next) {

    const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
  params: {
    ingredients: 'apples,flour,sugar',
    number: '5',
    ignorePantry: 'true',
    ranking: '1'
  },
  headers: {
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    'X-RapidAPI-Key': '3690f4a069msh828659ed19b8355p1ff8d6jsna6d3cf361d8e'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
    

    res.json({
        date: new Date().toISOString(),
    })




});

module.exports = router;
