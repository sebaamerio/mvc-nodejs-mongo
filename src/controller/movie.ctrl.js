import movieService from "../services/movie.service.js";
import { responseCtrl } from "../utils/responseCtrl.js";

export const getById = async (req, res) => {
  const { id } = req.params;
  const data = await movieService.getById(id);
  if (data) responseCtrl(res, 200, data);
  else throw "Not Found";
};

export const getAll = async (req, res) => {
  const data = await movieService.getAll();
  responseCtrl(res, 200, data);
};

export const getAllv2 = async (req, res) => {
  const data = movieService.getAll();
  if (data.length == 0) throw "Not Found";
  responseCtrl(res, 200, data);
};

export const getFilterTitle = async (req, res) => {
  const { title } = req.query;
  const data = await movieService.getFilterTitle(title);

  /* Podemos devolver un 200 con un array vacio */
  responseCtrl(res, 200, data);

  // O bien un error
  // if (data.length == 0) throw "Not Found";
};

export const create = async (req, res) => {
  const movie = req.body;
  const data = await movieService.create({ movie });

  if (data) {
    responseCtrl(res, 201, data);
  } else throw "Not Found";
};

export const update = async (req, res) => {
  const movie = req.body;
  const data = await movieService.update({ movie });

  if (data) {
    responseCtrl(res, 200, data);
  } else throw "Not Found";
};

export const remove = async (req, res) => {
  const { id } = req.params;
  const data = await movieService.remove({ id });
  if (data) {
    responseCtrl(res, 200, data);
  } else throw "Not Found";
};
