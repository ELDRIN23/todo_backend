import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import userRouter from "./routes/taskRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// CORS setup - must be before routes
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Routes
app.use("/api", userRouter);

// Connect to DB
connectDB();

app.get('/', (req, res) => {
  res.send(`web is live, working at port: ${port}`);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
