get = (req, res, next) => {
  let test = {
    recipe: {
      title: 'Curry',
      ingredients: [{
        ingredient: ['Potatis'],
        amount: [6],
        unit: ['st'],
      }]
    },
  };

  res.append('Custom-response-header', "yep");
  res.send(test);
  // var query;
  // console.log(req.query.name);

  // if (req.query.name) {
  //   query = req.models.Recipe.findOne({
  //     "recipe.name": req.query.name
  //   });
  // } else {
  //   query = req.models.Recipe.find();
  // };
  // query.exec().then((recipe) => {
  //   return res.send(recipe);
  // }).catch((error) => next(error));
};

getById = (req, res, next) => {
  req.models.Recipe.findById(req.params.id).then((recipe) => {
    return res.send(recipe);
  }).catch((error) => next(error));
};


post = (req, res, next) => {
  req.models.Recipe.create(
    {
      // recipe: {
      //   address: {
      //     street: req.body.recipe.address.street,
      //     zipCode: req.body.recipe.address.zipCode,
      //     city: req.body.recipe.address.city
      //   },
      //   email: req.body.recipe.email,
      //   name: req.body.recipe.name
      // },
    }
  ).then((recipe) => {
    console.log(recipe);
    return res.status(201).send(recipe);
  }).catch((error) => next(error));
};


put = (req, res, next) => {
  req.models.Recipe.updateOne({
    _id: req.params.id
  }, {
      // recipe: {
      //   address: {
      //     street: req.body.recipe.address.street,
      //     zipCode: req.body.recipe.address.zipCode,
      //     city: req.body.recipe.address.city
      //   },
      //   email: req.body.recipe.email,
      //   name: req.body.recipe.name
      // },
    }, {
      new: true,
      upsert: true,
      runvalidators: true,

    }).then((status) => {
      console.log("status: ", status);
      if (status.upserted)
        res.status(201);
      else if (status.nModified)
        res.status(200);
      else
        res.status(204);
      res.send();
    }).catch((error) => next(error));
};


deleteById = (req, res, next) => {
  req.models.Recipe.findByIdAndDelete(req.params.id).then((deleted) => {
    if (deleted)
      return res.send(deleted).status(200);
    res.sendStatus(204);
  }).catch((error) => next(error));
};


module.exports = {
  get,
  post,
  put,
  getById,
  deleteById,
};