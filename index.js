const dotenv = require("dotenv").config(),
  Config = require("./src/config/config"),
  app = require("./src/server"),
  socket = require("socket.io"),
  Mongoose = require("mongoose"),
  Connection = require("./src/config/mongoose-connection"),
  port = process.env.PORT || Config.deafult.port;

let server = require("http").createServer(app);

Mongoose.Promise = Promise;

Mongoose.connection.on("connected", () => {
  console.log("Connection Established");

  //INFO: http server
  server = app.listen(port, function () {
    console.log(`Server is running on: http://localhost:${port}`);
  });

  //INFO: socket connection
  let io = socket(server);
  app.set("socketio", io);
  io.sockets.on("connection", function (socket) {
    console.log("connected");
  });
});

Mongoose.connection.on("reconnected", () => {
  console.log("Connection Reestablished");
});

Mongoose.connection.on("disconnected", () => {
  console.log("Connection Disconnected");
});

Mongoose.connection.on("close", () => {
  console.log("Connection Closed");
});

Mongoose.connection.on("error", (error) => {
  console.log("ERROR: " + error);
});

Connection();
