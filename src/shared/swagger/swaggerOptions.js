const swaggerJsDoc = require("swagger-jsdoc");

// config by swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Task API",
      version: "1.0.0",
      description: "API para gestionar tareas",
    },
    servers: [
      {
        url: `${process.env.HOST_API}:${process.env.PORT_API}`,
      },
    ],
  },
  apis: ["./src/routes/*.js"], // Path routes to docs
};

const specs = swaggerJsDoc(swaggerOptions);

module.exports = specs;
