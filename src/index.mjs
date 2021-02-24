import express, { json } from "express";
import mongoose from "mongoose";
import { serverRouter } from "./server/endPoints.mjs";

var app = express();
app.use(express.json({}));
app.use("/", serverRouter);

mongoose
  .connect(
    "mongodb+srv://root:root@cluster0.y2dw9.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then((res) => {
    console.log("DATABASE CONNECTED");
    app.listen(3000, () => {
      console.log("SERVER STARTED AT http://localhost:3000/");
    });
  })
  .catch((err) => {
    console.log("SERVER STARTUP ERROR.");
    Console.log(err);
  });
