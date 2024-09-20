const responseInterceptor = (req, res, next) => {
  // Guardamos la respuesta original
  const originalJson = res.json; // Asegúrate de enlazar el contexto

  // Sobrescribimos el método send
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

    // // Si la respuesta es un objeto y tiene una propiedad de error, la consideramos como un error
    // if (res.statusCode >= 400) {
    //   const errorResponse = {
    //     success: false,
    //     message: body.message || "An error occurred",
    //     timestamp: new Date().toISOString(),
    //   };

    //   // Llamamos al método original con el nuevo cuerpo de respuesta
    //   originalJson.call(this, errorResponse); // Retorna aquí para evitar más llamadas
    // } else {
    //   // Aquí tratamos las respuestas de éxito
    //   const successResponse = {
    //     success: true,
    //     data: body,
    //     timestamp: new Date().toISOString(),
    //   };

    // Llamamos al método original con el nuevo cuerpo de respuesta
    //   originalJson.call(this, successResponse); // Retorna aquí también
    // }
  };

  next();
};

module.exports = responseInterceptor;
