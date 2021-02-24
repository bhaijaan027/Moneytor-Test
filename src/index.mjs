import express, { json } from "express";
import mongoose from "mongoose";
import { serverRouter } from "./server/routes.mjs";

var app = express();
app.use(express.json({}));
app.use("/", serverRouter);

//In models folder, I have create a Server Model
//In controller.mjs, I have written Logic
//In routes.mjs, I have created Routes for my API where i called functions from controller.mjs

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
    app.listen(8080, () => {
      console.log("SERVER STARTED");
    });
  })
  .catch((err) => {
    console.log("SERVER STARTUP ERROR.");
    Console.log(err);
  });
