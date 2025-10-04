import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js"; // Correct import
import TaskRouter from "./routes/taskRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
// const port = 3000;
const port = process.env.port || 3000;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://todo-frontend-ten-wine.vercel.app",
      "https://todo-frontend-git-main-eldrin-johnsons-projects.vercel.app/",
      "https://todo-frontend-e0ok4mxfa-eldrin-johnsons-projects.vercel.app/",
      "*"
      
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


// Routes
app.use("/tasks", TaskRouter);
app.use("/users", userRouter); // namespace for users

// Connect to DB
connectDB();

app.get("/", (req, res) => {
  res.send(`web is live, working at port: ${port}`);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
