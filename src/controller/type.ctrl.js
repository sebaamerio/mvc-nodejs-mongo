import typeService from "../services/type.service.js";
import { responseCtrl } from "../utils/responseCtrl.js";

export const getAll = async (req, res) => {
  const resp = await typeService.getAll();
  responseCtrl(res, 200, resp);
};

export const getById = async (req, res) => {
  const { id } = req.params;
  const resp = await typeService.getById({ id });
  responseCtrl(res, 200, resp);
};
