const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    // Haven't token
    return res.status(401).json({ message: "Access denied" });
  }

  // Validate token request
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }

    req.userId = decoded.id; // decode id user request
    next();
  });
};

module.exports = authMiddleware;
