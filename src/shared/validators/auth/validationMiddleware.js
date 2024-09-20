const { body } = require("express-validator");

const validationMiddleware = {
  register: [
    body("user")
      .isString()
      .withMessage("User is required and must be a string")
      .isLength({ min: 3 })
      .withMessage("Username must be at least 3 characters long")
      .isAlphanumeric()
      .withMessage("User must be alphanumeric"),
    body("password")
      .isString()
      .withMessage("Password is required and must be a string")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("firstName")
      .isString()
      .withMessage("firstName is required and must be a string")
      .isLength({ min: 3 })
      .withMessage("firstName must be at least 3 characters long"),
    body("surname")
      .isString()
      .withMessage("surname is required and must be a string")
      .isLength({ min: 3 })
      .withMessage("surname must be at least 3 characters long"),
    body("idDevice")
      .isString()
      .withMessage("idDevice is required and must be a string")
      .withMessage("idDevice must be at least 3 characters long"),
    body("firstName"),
  ],

  login: [
    body("username")
      .isString()
      .withMessage("Username is required and must be a string"),
    body("password")
      .isString()
      .withMessage("Password is required and must be a string"),
  ],
};

module.exports = validationMiddleware;
