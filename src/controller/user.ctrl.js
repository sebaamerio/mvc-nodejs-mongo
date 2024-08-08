import userService from "../services/user.serviceM.js";

export const getAll = async (req, res) => {
  const data = await userService.getAll();
};

export const create = async (req, res) => {
  const data = await userService.create();
};
