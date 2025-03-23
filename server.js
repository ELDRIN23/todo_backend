import express from "express"
import { connectDB } from "./config/db.js";
// import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
    
const app = express()
const port = 3000


connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})