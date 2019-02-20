const connection = require("./sequelize_index");
const Sequelize = require("sequelize");

const User = connection.define("user", {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: Sequelize.STRING, require: true },
  pw_hash: { type: Sequelize.STRING, require: true }
});

const Movie = connection.define("movie", {
  tmdbId: { type: Sequelize.INTEGER },
  title: { type: Sequelize.STRING },
  img_url: { type: Sequelize.STRING },
  vote_average: { type: Sequelize.DECIMAL },
  overview: { type: Sequelize.STRING },
  poster_path: { type: Sequelize.STRING },
  backdrop_path: { type: Sequelize.STRING },
  release_date: { type: Sequelize.STRING }
});

User.hasMany(Movie);
Movie.belongsTo(User);

connection
  .sync({ force: false })
  .then(() => console.log(`synced with pg database`))
  .catch(err => console.error(err));

module.exports = { User, Movie };
