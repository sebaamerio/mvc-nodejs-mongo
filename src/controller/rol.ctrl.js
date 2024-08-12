import rolService from "../services/rol.service.js";
import { validateRol } from "../validators/rol.schema.js";
import { validateId } from "../validators/id.validator.js";
import { responseCtrl } from "../utils/responseCtrl.js";

export const create = async (req, res) => {
	const payload = validateRol(req.body);

	if (!payload.success) {
		throw payload.error;
	}
	const rol = payload.data;

	const data = await rolService.create({ rol });
	responseCtrl(res, 201, data);
};

export const edit = async (req, res) => {
	console.log("body : ", req.body);

	console.log("params : ", req.params);
	const payload_body = validateRol(req.body);

	const payload_id = validateId(req.params);

	if (!payload_body.success) {
		throw payload_body.error;
	}
	if (!payload_id.success) {
		throw payload_id.error;
	}

	const rol = payload_body.data;
	const id = payload_id.data.id;

	const data = await rolService.edit({ id, rol });
	responseCtrl(res, 200, data);
};

export const getAll = async (req, res) => {
	const data = await rolService.getAll();
	responseCtrl(res, 200, data);
};

export const remove = async (req, res) => {
	const payload = validateId(req.params);

	if (!payload.success) {
		throw payload.error;
	}
	const id = payload.data.id;
	const data = await rolService.remove({ id });
	responseCtrl(res, 200, data);
};
