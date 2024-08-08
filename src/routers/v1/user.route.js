import { Router } from "express";
import { create } from "../../controller/user.ctrl.js";
import { tryCatchCtrl } from "../../utils/tryCatchCtrl.js";

const userRouter = new Router();

userRouter.get("/user", tryCatchCtrl(create));
