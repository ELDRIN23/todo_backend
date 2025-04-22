import express from "express"
import { connectDB } from "./config/db.js";
// import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import cors from 'cors'
dotenv.config();
    
const app = express()
const port = 3000

app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))


app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


app.use((req, res, next) => {
  console.log('\nreq.method :>> ', req.method);
  console.log('req.path :>> ', req.path);
    next()
})

// Routes
app.use("/api", userRouter);

connectDB();

app.get('/', (req, res) => {
  res.send(`web is live, working at port: ${port}`)
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})