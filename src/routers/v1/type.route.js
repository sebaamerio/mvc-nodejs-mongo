import { Router } from "express";
import { tryCatchCtrl } from "../../utils/tryCatchCtrl.js";
import { getAll, getById } from "../../controller/type.ctrl.js";

export const typeRoutes = Router();

typeRoutes.get("/", tryCatchCtrl(getAll));
typeRoutes.get("/:id", tryCatchCtrl(getById));
