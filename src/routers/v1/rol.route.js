import { Router } from "express";
import { getAll, create } from "../../controller/rol.ctrl.js";

export const rolRoutes = Router();

rolRoutes.get("/", getAll);

rolRoutes.post("/", create);
