import express from "express";
import morgan from "morgan";
import cors from "cors";

import userRouter from "./routes/user.routes";

const app = express();

//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use(userRouter);


app.listen(3000)