const router = require("express").Router();
const { movieController } = require("./controllers/movieController");
const { userController } = require("./controllers/userController");

router
  .route("/movielist")
  .get(movieController.get)
  .post(movieController.post)
  .patch(movieController.update)
  .delete(movieController.delete);

router
  .route("/users")
  .get(userController.get)
  .post(userController.post)
  .patch(userController.update)
  .delete(userController.delete);

module.exports = router;
