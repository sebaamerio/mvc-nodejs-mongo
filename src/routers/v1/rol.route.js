import { Router } from "express";
import { getAll, create, remove, edit } from "../../controller/rol.ctrl.js";
import { tryCatchCtrl } from "../../utils/tryCatchCtrl.js";

export const rolRoutes = Router();

rolRoutes.get("/", tryCatchCtrl(getAll));

rolRoutes.post("/", tryCatchCtrl(create));
rolRoutes.patch("/:id", tryCatchCtrl(edit));
rolRoutes.delete("/:id", tryCatchCtrl(remove));
