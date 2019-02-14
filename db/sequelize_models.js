const connection = require("./sequelize_index");
const Sequelize = require("sequelize");

const User = connection.define("user", {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: Sequelize.STRING, require: true },
  pw_hash: { type: Sequelize.STRING, require: true }
});

const Movie = connection.define("movie", {
  title: { type: Sequelize.STRING },
  img_url: { type: Sequelize.STRING },
  rating: { type: Sequelize.INTEGER },
  description: { type: Sequelize.STRING }
});

User.hasMany(Movie);
Movie.belongsTo(User);

connection
  .sync({ force: false })
  .then(() => console.log(`synced with mysql database`))
  .catch(err => console.error(err));

module.exports = { User, Movie };
