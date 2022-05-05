import { Router } from "express";
import UserControllers from "../controllers/user.js";

const userRouter = Router()

userRouter.post("", (req, res) => UserControllers.createUser(req, res))

export default userRouter