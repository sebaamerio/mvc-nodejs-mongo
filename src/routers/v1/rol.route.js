import { Router } from "express";
import { getbyId, getAll } from "../../controller/rol.ctrl.js";

export const rolRoutes = Router();

rolRoutes.get("/", getbyId);
rolRoutes.get("/all", getAll);
