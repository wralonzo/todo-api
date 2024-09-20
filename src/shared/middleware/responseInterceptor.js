const responseInterceptor = (req, res, next) => {
  // response origin in format json
  const originalJson = res.json; // Asegúrate de enlazar el contexto

  // override principa method json
  res.json = function (body) {
    let response = {
      success: true,
      message: null,
      data: null,
      timestamp: new Date().toISOString(),
    };

    switch (res.statusCode) {
      case 200:
        response.data = body;
        response.message =
          response.message || "Recurso consutaldo correctamente.";
        break;
      case 201:
        response.data = body;
        response.message =
          response.message || "Recurso almacenado correctamente.";
        break;

      case 400:
        response.data = body;
        response.message =
          response.message || "Completa todos los campos requeridos.";
        break;

      case 401:
        response.data = body;
        response.message = response.message || "No tienes autorización.";
        break;

      case 403:
        response.data = body;
        response.message = response.message || "Solicita autorización.";
        break;
      default:
        response.message =
          response.message || "Ha ocurrido un error, intenta de nuevo.";
        break;
    }

    originalJson.call(this, response);
  };

  next();
};

module.exports = responseInterceptor;
