const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../config/connectionDB");

module.exports = (sequelize) => {
  class Task extends Model {
    static associate(models) {
      // relation to user created task
      Task.belongsTo(models.User, { foreignKey: "userId" });
    }
  }

  // Define model to manage task in db task properties or columns
  Task.init(
    {
      title: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      dueDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "tbl_users", // Nombre de la tabla en la base de datos
          key: "id",
        },
        allowNull: false,
      },
      order: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
      status: {
        type: DataTypes.ENUM,
        values: ["pending", "completed", "progress"], //Posible values
        defaultValue: "pending", // default  value
      },
    },
    {
      sequelize,
      deletedAt: true,
      updatedAt: true,
      createdAt: true,
      modelName: "tbl_task",
      comment: "This table storage data about tasks",
    }
  );
  return Task;
};
