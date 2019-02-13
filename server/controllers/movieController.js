const { Movie } = require("../../db/sequelize_models");

const movieController = {
  get: (req, res) => {
    Movie.findAll({
      user: req.query.user
    })
      .then(data => res.status(200).send(data))
      .catch(err => console.error(err));
  },
  post: (req, res) => {
    const { name, img_url, rating, description, userId } = req.body;
    Movie.create({
      name,
      img_url,
      rating,
      description,
      userId
    })
      .then(data => res.status(201).send("successfully posted"))
      .catch(err => console.error(err));
  },
  update: (req, res) => {
    res.status(200).send("hello from update");
  },
  delete: (req, res) => {
    const { name } = req.query;
    Movie.destroy({
      where: { name }
    }).then(data => res.status(202).send("successfully deleted!"));
  }
};

module.exports = { movieController };
