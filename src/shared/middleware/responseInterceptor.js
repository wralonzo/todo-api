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
        response.message = body.res || "Recurso consutaldo correctamente.";
        break;
      case 201:
        response.data = body;
        response.message = body.res || "Recurso almacenado correctamente.";
        break;

      case 400:
        response.data = body;
        response.success = false;
        response.message =
          response.message || "Completa todos los campos requeridos.";
        break;

      case 401:
        response.data = body;
        response.success = false;
        response.message = body.message || "No tienes autorización.";
        break;

      case 403:
        response.data = body;
        response.success = false;
        response.message = body.message || "Solicita autorización.";
        break;

      case 404:
        response.data = body;
        response.success = false;
        response.message = body.message || "Recurso no encontrado";
        break;
      default:
        response.success = false;
        response.message =
          response.body || "Ha ocurrido un error, intenta de nuevo.";
        break;
    }

    originalJson.call(this, response);
  };

  next();
};

module.exports = responseInterceptor;
