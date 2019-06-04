const express = require('express');
const recipe = require('./recipe.js');
const router = express.Router();


//middleware that is spec to this router that gives us a time
router.use(function timelog(req, res, next) {
  console.log('Time is now:', Date.now());
  next();
});

// routes for recipes
router.get('/recipes', recipe.get);
router.get('/recipes/:id', recipe.getById);
router.post('/recipes', recipe.post);
router.put('/recipes/:id', recipe.put);
router.delete('/recipes/:id', recipe.deleteById);




module.exports = router;