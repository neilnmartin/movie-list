const mysql = require("mysql2");
const Sequelize = require("sequelize");
require("dotenv").config();

const connection = new Sequelize(
  "movielist",
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: true,
    operatorsAliases: false,
    define: {
      timestamps: false
    }
  }
);

connection
  .authenticate()
  .then(() => console.log(`connected to mysql`))
  .catch(err => console.error(`unable to connect: `, err));

module.exports = connection;
