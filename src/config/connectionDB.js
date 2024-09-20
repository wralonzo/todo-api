const { Sequelize } = require("sequelize");
require("dotenv").config();

//Congiguration of database to use in models
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    dialect: "mysql",
    dialectOptions: {
      charset: "utf8mb4",
    },
  }
);

//Init connection to DB
const connectDB = async () => {
  try {
    //Authentication DB
    await sequelize.authenticate();
    console.log("Info: Connection has been established successfully.");

    //Syncronize tables to DB, OR  force recreate tables
    // Production disable or define false enviroment
    await sequelize.sync({
      alter: Boolean(process.env.DB_SYNCRONIZE) || false,
    });
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Error: Unable to connect to the database:", error);
  }
};

module.exports = { sequelize, connectDB };
