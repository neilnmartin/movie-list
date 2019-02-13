const router = require("express").Router();
const { movieController } = require("./controllers/movieController");
const { userController } = require("./controllers/userController");
const { authController } = require("./controllers/authController");

router
  .route("/movies")
  .get(movieController.get)
  .post(movieController.post)
  .patch(movieController.update)
  .delete(movieController.delete);

router
  .route("/users")
  .get(userController.authUser)
  .post(userController.createUser)
  // .patch(userController.update)
  .delete(userController.delete);

router
  .route("/auth")
  .get(authController.get)
  .post(authController.post)
  .patch(authController.update)
  .delete(authController.delete);

module.exports = router;
