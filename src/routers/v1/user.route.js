import { Router } from "express";
import { create, getAll, remove } from "../../controller/user.ctrl.js";
import { tryCatchCtrl } from "../../utils/tryCatchCtrl.js";

export const userRouter = Router();

userRouter.get("/", tryCatchCtrl(getAll));
userRouter.post("/", tryCatchCtrl(create));
userRouter.delete("/:id", tryCatchCtrl(remove));
