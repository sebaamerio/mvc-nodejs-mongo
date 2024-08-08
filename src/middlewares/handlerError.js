export function handlerError(err, req, res, next) {
  console.log("handlerError: ", err);
  let response = {
    code: err.code || 400, // si no hay un codigo de error, se asigna 500
    message: {
      error: true,
      data: err.message || "Internal server error", // si no hay un mensaje de error, se asigna 'Internal server error'
    },
  };

  if (err == "Not Found") {
    response.code = 404;
    response.message.data = "Not Found";
  }

  if (err == "Item exists") {
    response.code = 409;
    response.message.data = "Item exists";
  }

  // Errores de validacion Zod
  if (err.name === "ZodError") {
    // 422 Unprocessable Entity
    response.code = 422;
    response.message.data = JSON.parse(err.message);
  }

  return res.status(response.code).json(response.message);
}
