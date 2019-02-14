const { User } = require("../../db/sequelize_models");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const userController = {
  authUser: (req, res) => {
    const { username, pw } = req.query;
    console.log(req.query);
    User.findOne({ where: { username } })
      .then(data => {
        if (data !== null) {
          let existingHash = data.dataValues.pw_hash;
          bcrypt
            .compare(pw, existingHash)
            .then(verified => {
              let { username, id } = data.dataValues;
              verified
                ? res.status(200).send(JSON.stringify({ username, id }))
                : res.status(203).send("not authenticated");
            })
            .catch(err => console.log(err));
        } else {
          res.status(203).send("no such user, reroute to signup");
        }
      })
      .catch(err => console.log(err));
  },
  createUser: (req, res) => {
    const { username, pw } = req.body;
    User.findAll({ where: { username } }).then(data => {
      if (data.length) {
        res.status(203).send("User already exists, reroute to login");
      } else {
        bcrypt.hash(pw, saltRounds).then(hash => {
          User.create({ username, pw_hash: hash }).then(newUser => {
            console.log(newUser.dataValues);
            res.status(201).send(JSON.stringify({ id: newUser.dataValues.id }));
          });
        });
      }
    });
  },
  // update: (req, res) => {
  //   // TODO: update password
  // },
  delete: (req, res) => {
    const { username } = req.body;
    User.destroy({ where: { username } }).then(data =>
      res.status(203).send("user removed")
    );
  }
};

module.exports = { userController };
