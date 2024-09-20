const express = require("express");
const authController = require("../controllers/authController");
const validationMiddleware = require("../shared/validators/auth/validationMiddleware");

const router = express.Router();

// Rutas de autenticación
router.post(
  "/register",
  validationMiddleware.register,
  authController.register
);
router.post("/login", authController.login);

module.exports = router;
