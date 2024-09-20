const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    // Si no se encuentra el token
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  // El token puede estar en formato "Bearer <token>", así que lo dividimos
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access denied. Token missing." });
  }

  // Validar el token
  console.log('process.env.JWT_SECRET:', process.env.JWT_SECRET);
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log("Token validation error:", err);
      return res.status(403).json({ message: "Invalid token." });
    }

    req.userId = decoded.id; // Guardar el id del usuario decodificado en la solicitud
    next(); // Pasar al siguiente middleware o controlador
  });
};

module.exports = authMiddleware;
