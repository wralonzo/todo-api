const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models");
const { validationResult } = require("express-validator");
const tokenAuthUser = require("../services/generateToken");

const authController = {
  /**
   * Register user
   * @param {Object} items for define user
   * @returns {object} user has been created.
   */
  register: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, surname, password, user, idDevice } = req.body;

    try {
      // Hashear password
      const hashedPassword = await bcrypt.hash(password, 10);

      // register User
      const payload = {
        firstName: firstName,
        surname: surname,
        user: user,
        password: hashedPassword,
        idDevice: idDevice,
        lastLogin: new Date(),
      };
      console.log(payload);
      const userSave = await User.create(payload);

      res.status(201).json({ id: userSave.id, username: userSave.user });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  },

  /**
   * Login user for authenticate to API
   * @param {Object} items json user
   * @returns {object} user has been authenticated.
   */
  login: async (req, res) => {
    const { user, password } = req.body;

    try {
      // find user
      const findUser = await User.findOne({ where: { user } });
      if (!findUser) {
        return res.status(404).json({ message: "User not found" });
      }

      // compare passwords
      const isMatch = await bcrypt.compare(password, findUser.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // create token: JWT
      const token = tokenAuthUser(findUser.id);

      // response object user
      res.status(201).json({
        user: findUser.user,
        firstName: findUser.firstName,
        surname: findUser.surname,
        lastLogin: findUser.lastLogin,
        token,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = authController;
