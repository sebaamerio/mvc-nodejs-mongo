import userService from "../services/user.service.js";
import { responseCtrl } from "../utils/responseCtrl.js";

export const getAll = async (req, res) => {
	const data = await userService.getAll();
	responseCtrl(res, 200, data);
};

export const create = async (req, res) => {
	const data = await userService.create();
};
