const { sequelize } = require("../config/connectionDB");
const User = require("./userModel")(sequelize);
const Task = require("./taskModel")(sequelize);

const db = {
  sequelize,
  User,
  Task,
};

module.exports = db;
