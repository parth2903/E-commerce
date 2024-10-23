import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const app = express();

//middelwares
app.use(express.json());
app.use(morgan("dev"));


app.get("/", (req, res) => {
    res.send("<h1>Welcome to ecommerce app</h1>");
  });

const PORT = process.env.PORT;


app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});