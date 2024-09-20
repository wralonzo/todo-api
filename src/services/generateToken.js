const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const tokenAuthUser = (idUser) => {
  // Validate sedret key
  if (!process.env.JWT_SECRET) {
    console.error("JWT_SECRET no está definido en el entorno");
    return null;
  }

  console.log("process.env.JWT_SECRET:", process.env.JWT_SECRET);

  // generate token expired one hour
  const token = jwt.sign({ id: idUser }, process.env.JWT_SECRET, {
    expiresIn: "1h", // expired token only hour
  });

  return token;
};

module.exports = tokenAuthUser;
