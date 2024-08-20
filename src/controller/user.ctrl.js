import userService from "../services/user.service.js";
import { responseCtrl } from "../utils/responseCtrl.js";
import { validateId } from "../validators/id.validator.js";
import { validatePagination } from "../validators/pagination.validator.js";
import { validateUser } from "../validators/user.schema.js";

export const getAll = async (req, res) => {
	const data = await userService.getAll();
	responseCtrl(res, 200, data);
};

export const getAllpagination = async (req, res) => {
	const payload = validateUser(req.query);

	if (!payload.success) {
		throw payload.error;
	}
	const pagination = payload.data;

	const limit = parseInt(payload.data.limit); // Asegúrate de parsear el límite a número
	const skip = parseInt(payload.data.skip);

	const data = await userService.getAllpagination({ limit, skip });
	responseCtrl(res, 200, data);
};

export const create = async (req, res) => {
	const payload = validateUser(req.body);

	if (!payload.success) {
		throw payload.error;
	}
	const user = payload.data;

	const data = await userService.create({ user });
	responseCtrl(res, 201, data);
};

export const remove = async (req, res) => {
	const payload = validateId(req.params);

	if (!payload.success) {
		throw payload.error;
	}
	const id = payload.data.id;
	const data = await userService.remove({ id });
	responseCtrl(res, 200, data);
};
