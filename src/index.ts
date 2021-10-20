import "reflect-metadata";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { createConnection } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config({ path: __dirname + "/.env" });

import userRouter from "./routes/user.routes";

const app = express();
createConnection();

//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use(userRouter);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("server on port " + PORT)
})