const express = require("express");
const authController = require("../controllers/authController");
const validationMiddleware = require("../shared/validators/auth/validationMiddleware");

const router = express.Router();

// Rutas de autenticación
/**
 * @swagger
 * /:
 *   POST:
 *     summary: LOGIN USER
 *     tags: [USER]
 *     responses:
 *       200:
 *         description: auth user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 */
router.post(
  "/register",
  validationMiddleware.register,
  authController.register
);

/**
 * @swagger
 * /:
 *   POST:
 *     summary: create new USER
 *     tags: [USER]
 *     responses:
 *       200:
 *         description: create user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 */
router.post("/login", authController.login);

module.exports = router;
