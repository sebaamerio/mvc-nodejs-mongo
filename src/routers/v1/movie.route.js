import { Router } from "express";
import { tryCatchCtrl } from "../../utils/tryCatchCtrl.js";
import {
  getAll,
  getById,
  getFilterTitle,
  create,
  update,
  remove,
} from "../../controller/movie.ctrl.js";

export const movieRouter = Router();

movieRouter.get("/", tryCatchCtrl(getAll));
movieRouter.get("/title", tryCatchCtrl(getFilterTitle));
movieRouter.get("/:id", tryCatchCtrl(getById)); // poner como ultima opcion

movieRouter.post("/", tryCatchCtrl(create));
movieRouter.put("/", tryCatchCtrl(update));
movieRouter.delete("/:id", tryCatchCtrl(remove));
