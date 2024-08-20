import { Router } from "express";
import { create, getAll, getAllpagination, remove } from "../../controller/user.ctrl.js";
import { tryCatchCtrl } from "../../utils/tryCatchCtrl.js";

export const userRouter = Router();

userRouter.get("/pagination", tryCatchCtrl(getAllpagination));
userRouter.get("/", tryCatchCtrl(getAll));
userRouter.post("/", tryCatchCtrl(create));
userRouter.delete("/:id", tryCatchCtrl(remove));
