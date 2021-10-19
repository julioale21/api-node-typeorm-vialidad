import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.listen(3000)