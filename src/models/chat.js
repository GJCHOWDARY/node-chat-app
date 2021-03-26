const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Inactive",
    },
    senderUserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    receiverUserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("chats", userSchema);
