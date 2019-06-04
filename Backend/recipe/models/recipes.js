const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
recipe: {
   title: String,
     ingredients: [{
       ingredient: Array,
       amount: Array,
       unit: Array,
     }]
}
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe; 








