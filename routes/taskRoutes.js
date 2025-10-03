import express from "express";
import {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
  toggleStatus,
} from "../controllers/taskController.js";
import { userMiddleware } from "../middleware/userMiddleware.js";

const TaskRouter = express.Router();

//create
TaskRouter.post("/create", userMiddleware, createTask);

//fetch all tasks
TaskRouter.get("/fetch-all", userMiddleware, getAllTasks);

//update task
TaskRouter.post("/updateTask/:id", userMiddleware, updateTask);

//delete task
TaskRouter.delete("/deleteTask/:id", userMiddleware, deleteTask);

// toggleStatus;
TaskRouter.post("/toggleStatus/:id", userMiddleware, toggleStatus);

export default TaskRouter;
