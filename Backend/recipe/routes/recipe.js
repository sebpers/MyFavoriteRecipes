get = (req, res, next) => {
 req.models.Recipe.find().then((recipe) => {
    return res.send(recipe);
  }).catch((error) => next(error));
};

getById = (req, res, next) => {
  req.models.Recipe.findById(req.params.id).then((recipe) => {
    return res.send(recipe);
  }).catch((error) => next(error));
};


post = (req, res, next) => {
    req.models.Recipe.create({
      title: req.body.title,
      ingredients: [{
          name: req.body.ingredients[0].name,
          amount: req.body.ingredients[0].amount,
          unit: req.body.ingredients[0].unit
        },
        {
          name: req.body.ingredients[1].name,
          amount: req.body.ingredients[1].amount,
          unit: req.body.ingredients[1].unit
        },
         {
           name: req.body.ingredients[2].name,
           amount: req.body.ingredients[2].amount,
           unit: req.body.ingredients[2].unit
         },
          {
            name: req.body.ingredients[3].name,
            amount: req.body.ingredients[3].amount,
            unit: req.body.ingredients[3].unit
          },
           {
             name: req.body.ingredients[4].name,
             amount: req.body.ingredients[4].amount,
             unit: req.body.ingredients[4].unit
           }
      ],
      description: req.body.description
    }).then((recipe) => {
      console.log(recipe);
      return res.status(201).send(recipe);
    }).catch((error) => next(error));  
};


put = (req, res, next) => {
  req.models.Recipe.updateOne({
    _id: req.params.id
  }, {
      recipe: {
        address: {
          street: req.body.recipe.address.street,
          zipCode: req.body.recipe.address.zipCode,
          city: req.body.recipe.address.city
        },
        email: req.body.recipe.email,
        name: req.body.recipe.name
      },
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