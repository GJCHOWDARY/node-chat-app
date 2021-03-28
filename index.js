const dotenv = require("dotenv").config(),
  Config = require("./src/config/config"),
  app = require("./src/server"),
  socket = require("socket.io"),
  Mongoose = require("mongoose"),
  Connection = require("./src/config/mongoose-connection"),
  port = process.env.PORT || Config.deafult.port;

let server = require("http").createServer(app);

Connection();

//INFO: http server
server = app.listen(port, function () {
  console.log(`Server is running on: http://localhost:${port}`);
});

//INFO: socket connection
let io = socket(server, {
  cors: {
    origin: "http://localhost:4200",
    credentials: true,
  },
});

app.set("socketio", io);

io.sockets.on("connection", function (socket) {
  // console.log("connected");
  socket.on('message', function (data) {
      console.log(data);
      io.emit('message', data);
    });
});

module.exports = server;
