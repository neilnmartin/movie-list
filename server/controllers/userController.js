const { User } = require("../../db/sequelize_models");
const bcrypt = require("bcrypt-nodejs");

const userController = {
  get: (req, res) => {
    res.status(200).send("hello from get");
  },
  post: (req, res) => {
    res.status(201).send("hello from post");
  },
  update: (req, res) => {
    res.status(202).send("hello from update");
  },
  delete: (req, res) => {
    res.status(203).send("hello from delete");
  }
};

module.exports = { userController };
