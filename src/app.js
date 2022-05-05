import { config } from "dotenv";
import express from "express";
import userRouter from "./routes/user.js";

config()

const app = express()

app.use(express.json())

app.use("/user", userRouter)

export default app