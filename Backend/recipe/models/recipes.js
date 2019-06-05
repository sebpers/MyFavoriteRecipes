const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
   title: String,
     ingredients: [
       {
       name: String,
       amount: Number,
       unit: String,
     }
    ]
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe; 








