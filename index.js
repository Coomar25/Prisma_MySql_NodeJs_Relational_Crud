import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { userRouter } from "./routes/userRouter.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;
// !important!
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () =>
  console.log(
    `> Server is up and running on port : http://localhost:${port} ` + port
  )
);
app.use("/", userRouter);
