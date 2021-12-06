import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import mongoose from "mongoose";
const app = express();
import dataRouter from "./api/dataRouter.js";
import { variables } from "./config.js";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is OK." });
});
app.use("/api/data", dataRouter);

app.use((error, req, res, next) => {
  res.status(500).send({ message: error.message });
  next();
});

const port = process.env.PORT || variables.port;
const DBconnect = process.env.DB_URI || variables.db;
const start = async () => {
  await mongoose.connect(
    DBconnect,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
    () => {
      console.log(`Data base is connected`);
    }
  );
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
};
start();
