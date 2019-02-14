const { Movie } = require("../../db/sequelize_models");

const movieController = {
  get: (req, res) => {
    const { userId } = req.body;
    Movie.findAll({
      userId
    })
      .then(data => res.status(200).send(data))
      .catch(err => console.error(err));
  },
  post: (req, res) => {
    const { title, img_url, rating, description, userId } = req.body;
    Movie.findAll({ where: { title, userId } }).then(data => {
      if (!data.length) {
        Movie.create({
          title,
          img_url,
          rating,
          description,
          userId
        })
          .then(data => res.status(201).send("successfully posted"))
          .catch(err => console.error(err));
      } else {
        res.status(403).send("movie is already in user's collection");
      }
    });
  },
  update: (req, res) => {
    res.status(200).send("hello from update");
  },
  delete: (req, res) => {
    const { title, userId } = req.query;
    Movie.destroy({
      where: { title, userId }
    }).then(data => res.status(202).send("successfully deleted!"));
  }
};

module.exports = { movieController };
