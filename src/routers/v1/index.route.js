import { Router } from "express";
import { movieRouter } from "./movie.route.js";
import { typeRoutes } from "./type.route.js";
import { rolRoutes } from "./rol.route.js";
import { userRouter } from "./user.route.js";

export const routerV1 = Router();

routerV1.use("/movies", movieRouter);
routerV1.use("/type", typeRoutes);

routerV1.use("/rol", rolRoutes);

routerV1.use("/user", userRouter);
