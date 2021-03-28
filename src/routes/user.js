const express = require("express"),
  UserController = require("../controllers/user");

const router = express.Router();
 
router.get("/get_user_detials/:id", UserController.getUserDetails);

router.get("/search", UserController.searchUsers);

router.get("/get_users", UserController.getUsers);

router.get("/:id", UserController.getUser);

router.put("/:id", UserController.updateUser);

router.delete("/:id", UserController.deleteUser);

module.exports = router;
