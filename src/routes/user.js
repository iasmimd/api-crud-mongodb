import { Router } from "express";
import UserControllers from "../controllers/user.js";

const userRouter = Router()

userRouter.post("", (req, res) => UserControllers.createUser(req, res))
userRouter.get("", (req, res) => UserControllers.findAll(req, res))

export default userRouter