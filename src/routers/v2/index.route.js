import { Router } from "express";
import { movieRouter } from "./movie.route.js";

export const routerV2 = Router();

routerV2.use("/movies", movieRouter);
