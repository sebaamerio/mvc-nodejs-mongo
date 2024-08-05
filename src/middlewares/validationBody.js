export function validation(schema) {
  return (req, res, next) => {
    const result = schema.parse(req.body);
    if (result.error) {
      next(result.error); // envia el error al controlador
    } else {
      next(); // continua con la ejecucion del controlador
    }
  };
}
