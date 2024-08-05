export function handlerError(err, req, res, next) {
	console.log("handlerError");
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

	// Errores de Zod
	if (err == "ZodError") console.log("zooooo");
	/*
    // Errores de Joi
    if (err.isJoi) {
      let validationErrorType = err.details[0].type; // obtener el tipo de error de validacion
      let errorKey = "ValidationError";
      if (validationErrorType === "any.required") {
        // si el error es de validacion de campos requeridos
        errorKey = "FaltanCampos";
      }
      response.error.code = errors[errorKey].code; // asignar el codigo de error correspondiente
      response.error.message = errors[errorKey].message; // asignar el mensaje de error correspondiente
    }
  */
	return res.status(response.code).json(response.message);
}
