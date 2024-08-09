import rolService from "../services/rol.service.js";
import { validateRol } from "../validators/rol.schema.js";
import { responseCtrl } from "../utils/responseCtrl.js";

export const create = async (req, res) => {
  const payload = validateRol(req.body);

  if (!payload.success) {
    throw payload.error;
  }

  const rol = payload.data;
  //const rol = payload.data;
  console.log("ctrl rol: ", rol);

  const data = await rolService.create(payload.data);
  responseCtrl(res, 200, data);

  // const data = await rolService.create();

  //	const data = [];
  //responseCtrl(res, 201, data);
  /*
	if (data) {
		responseCtrl(res, 201, data);
	} else throw "Not Found";*/
};

export const getAll = async (req, res) => {
  const data = await rolService.getAll();
  responseCtrl(res, 200, data);
};
