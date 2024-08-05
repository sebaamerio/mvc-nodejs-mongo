import { request } from "express";
import rolService, { getbyId_serv } from "../services/rol.service.js";

import { responseCtrl } from "../utils/responseCtrl.js";

export const getbyId = (req, res) => {
	const resp = getbyId_serv("prueba");
	responseCtrl(res, 200, resp);
};

export const getAll = async (req, res) => {
	const resp = await rolService.getAll();
	responseCtrl(res, 200, resp);
};
