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
      ingredients: req.body.ingredients,
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
    title: req.body.title,
    ingredients: req.body.ingredients,
    description: req.body.description
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