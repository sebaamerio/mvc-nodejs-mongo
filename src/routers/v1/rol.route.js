import { Router } from "express";
import { getAll, create } from "../../controller/rol.ctrl.js";
import { tryCatchCtrl } from "../../utils/tryCatchCtrl.js";

export const rolRoutes = Router();

rolRoutes.get("/", tryCatchCtrl(getAll));

rolRoutes.post("/", tryCatchCtrl(create));
