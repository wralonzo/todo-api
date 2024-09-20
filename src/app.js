const express = require("express");
const morgan = require("morgan");
const taskRoutes = require("./routes/taskRoutes");
const authRoutes = require("./routes/authRoutes");
const { connectDB } = require("./config/connectionDB");
const swaggerUi = require("swagger-ui-express");
const specs = require("./shared/swagger/swaggerOptions");
const responseInterceptor = require("./shared/middleware/responseInterceptor");

const app = express();

// Logger morgan
app.use(morgan("combined"));
app.use(express.json());

app.use(responseInterceptor);
//Routes to manage task
app.use("/api/tasks", taskRoutes);

//Routes to manage auth
app.use("/api/auth", authRoutes);

//Swagger Docs
// Configurar Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

//PORT BACKEND
const PORT = process.env.PORT_API || 3000;

//Register DB in project
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
module.exports = app;
