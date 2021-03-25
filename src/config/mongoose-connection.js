const mongoose = require("mongoose"),
  Config = require("./config");

const connection_url = (
  process.env.DB_CONNECTION_URL ||
  "mongodb+srv://chowdary:r7p2ZfVMNc2DOkfg@cluster0-h8j8p.mongodb.net/smartML1?retryWrites=true&w=majority"
).trim();

const connect = async () => {
  try {
    await mongoose.connect(connection_url, {
      w: 'majority',
      j: true,
      haInterval: 3000,
      poolSize: 10,
      keepAlive: true,
      connectTimeoutMS: 30000,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = connect;
