import express from "express";
import {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
  toggleStatus,
} from "../controllers/taskController.js";

const userRouter = express.Router();

//create
userRouter.post("/create", createTask);

//fetch all tasks
userRouter.get("/fetch-all", getAllTasks);

//update task
userRouter.post("/updateTask/:taskId", updateTask);

//delete task
userRouter.delete("/deleteTask/:taskId", deleteTask);

toggleStatus;
userRouter.post("/toggleStatus/:id", toggleStatus);

export default userRouter;
