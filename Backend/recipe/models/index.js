const mongoose = require('mongoose');
const Recipe = require('./recipe.js');

//comment 
const uri = process.env.DATABASE_URL || 'mongodb://localhost:27017/recipes'; 

//comment 
const connectDb = () => {
  return mongoose.connect(uri, {useFindAndModify: false});
};

//comment 
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', true);
mongoose.set('useCreateIndex', true);

module.exports = {
  connectDb,
  models: {
    Recipe
  }
};