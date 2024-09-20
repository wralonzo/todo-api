const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Funtion generate token by idUser
const tokenAuthUser = (idUser) => {
  return jwt.sign({ id: idUser }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

module.exports = tokenAuthUser;
