const express = require("express"),
  ChatController = require("../controllers/chat");

const router = express.Router();
 
router.post("/send_message", ChatController.saveMessage);

router.get("/:receiverId", ChatController.getChats);

router.delete("/:userId", ChatController.deleteUserChat);

module.exports = router;
