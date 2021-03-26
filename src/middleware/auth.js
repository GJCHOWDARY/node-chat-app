const jwt = require("jsonwebtoken"),
  { Config: deafult } = require("../config/config");

module.exports = (req, res, next) => {
  try {
    const authHeader = req.get("Authorization");
    if (!authHeader) {
      req.isAuth = false;
      return next();
    }
    const token = authHeader.split(" ")[1];
    let decodedToken;
    decodedToken = jwt.verify(token, deafult.jwt);
    if (!decodedToken) {
      req.isAuth = false;
      return next();
    }
    req.userId = decodedToken.jwtData.userId;
    req.name = decodedToken.jwtData.name;
    req.email = decodedToken.jwtData.email;
    req.isAuth = true;
    next();
  } catch (err) {
    req.isAuth = false;
    return next();
  }
};
