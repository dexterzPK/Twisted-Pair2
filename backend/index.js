import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcryptjs from "bcryptjs";
import bodyParser from "body-parser";
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
const mongoDBUrl = "mongodb://127.0.0.1:27017/sushiDB";
const port = 4000;

app.get('/',(req,res)=>{
    res.send("Dishes")
})

app.get('/About',(req,res)=>{
    res.send("About")
})

mongoose
  .connect(mongoDBUrl)
  .then(() => {
    console.log("Connected to the data-base");
    app.listen(port, () => {
      console.log("Connected to the port:" + port);
    });
  })
  .catch((err) => {
    console.log(err);
  });