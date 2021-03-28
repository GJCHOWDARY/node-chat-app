const path = require("path"),
  fs = require("fs"),
  app = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  auth = require("./middleware/auth"),
  errorHandler = require("./middleware/error-handler"),
  requestHandler = require("./middleware/request-handler"),
  Config = require("./config/config"),
  Compression = require("compression"),
  Helmet = require("helmet");

const server = app();

server.get("/", (req, res) => {
  let io = req.app.get("socketio");
  io.emit("hi!");
  res.sendFile(__dirname + "/index.html");
});

server.use(bodyParser.json({ limit: "100mb" }));

server.use(bodyParser.urlencoded({ extended: false }));
server.use(Compression());
server.use(Helmet());

server.use(cors());

server.use(requestHandler);

var morgan = require("morgan");

//INFO: create a write stream (in append mode)

var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});

//INFO: setup the logger

server.use(morgan("combined", { stream: accessLogStream }));

//INFO: Serve Static Files/Images

server.use("/images", app.static(path.join(__dirname, "images")));
server.use("/files", app.static(path.join(__dirname, "files")));
server.use("/uploads", app.static(path.join(__dirname, "../uploads")));

server.use(app.static(path.resolve(__dirname, "dist/chat-app")));

server.use(auth);

server.use(errorHandler);

server.use("/api/auth", require("./routes/auth"));
server.use("/api/user", auth, require("./routes/user"));
server.use("/api/chat", auth, require("./routes/chat"));

server.get("/api/*", function (req, res) {
  res.status(404).json({
    status: false,
    message: "API not there",
  });
});

// server.all("/*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "dist/chat-app/index.html"));
// });

module.exports = server;
