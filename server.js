import express from "express"
import { connectDB } from "./config/db.js";
// import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
dotenv.config();
    
const app = express()
const port = 3000
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", userRouter);

connectDB();

app.get('/', (req, res) => {
  res.send(`web is live, working at port: ${port}`)
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})