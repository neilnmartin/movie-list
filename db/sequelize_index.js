const pg = require("pg");
const Sequelize = require("sequelize");
require("dotenv").config();

const connection = new Sequelize(
  "movielist",
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: true,
    operatorsAliases: false,
    define: {
      timestamps: false
    }
  }
);

connection
  .authenticate()
  .then(() => console.log(`connected to postgres`))
  .catch(err => console.error(`unable to connect: `, err));

module.exports = connection;
