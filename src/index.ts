import express from "express";
import morgan from "morgan";
import cors from "cors";
import { createConnection } from "typeorm";
import "reflect-metadata";

import userRouter from "./routes/user.routes";

const app = express();
createConnection();

//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use(userRouter);


app.listen(3000)
console.log("server on port " + 3000)