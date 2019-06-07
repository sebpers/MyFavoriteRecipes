const express = require('express');
const recipe = require('./recipe');
const router = express.Router();


//middleware that is spec to this router that gives us a time
router.use(function timelog(req, res, next) {
  console.log('Time is now:', Date.now());
  next();
});

// routes for recipes
router.get('/favoriterecipes', recipe.get);
router.get('/favoriterecipes/:id', recipe.getById);
router.post('/favoriterecipes', recipe.post);
router.put('/favoriterecipes/:id', recipe.put);
router.delete('/favoriterecipes/:id', recipe.deleteById);




module.exports = router;