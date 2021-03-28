const express = require("express"),
  UserController = require("../controllers/user");

const router = express.Router();

router.post("/signup", UserController.createUser);

router.post("/login", UserController.userLogin);

router.post("/logout", UserController.logout);

module.exports = router;
