import { Router } from "express";
import { movieRouter } from "./movie.route.js";
import { rolRoutes } from "./rol.route.js";

export const routerV1 = Router();

routerV1.use("/movies", movieRouter);

routerV1.use("/roles", rolRoutes);
