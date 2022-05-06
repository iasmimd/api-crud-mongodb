import express from "express";
import cors from "cors"
import { config } from "dotenv";
import userRouter from "./routes/user.js";

config()
const app = express()

app.use(express.json())
app.use(cors())

app.use("/user", userRouter)

export default app