const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../config/connectionDB");

module.exports = (sequelize) => {
  class User extends Model {
    static associate(models) {
      Task.belongsTo(models.User, { foreignKey: "userId" });
    }
  }

  // Definition about user for use to auth access api
  User.init(
    {
      firstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      surname: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      user: {
        type: DataTypes.STRING(50),
        allowNull: true,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(250),
        allowNull: true,
      },
      idDevice: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      lastLogin: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      createdAt: true,
      updatedAt: true,
      deletedAt: true,
      modelName: "tbl_user",
      comment: "This table storage data about users and auth",
    }
  );
  return User;
};
