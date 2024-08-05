import { Router } from "express";
import { tryCatchCtrl } from "../../utils/tryCatchCtrl.js";
import { getAllv2 } from "../../controller/movie.ctrl.js";

export const movieRouter = Router();

movieRouter.get("/", tryCatchCtrl(getAllv2));
