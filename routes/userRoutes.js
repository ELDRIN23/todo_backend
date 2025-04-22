import express from "express";
import {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
  getTaskId,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.use((req, res, next) => {
  console.log("Routes: user");
  next();
});
//create
userRouter.post("/create", createTask);

//fetch all tasks
userRouter.get("/fetch-all", getAllTasks);

//get single tasks
userRouter.get("/task/:taskId", getTaskId);

//update task
userRouter.post("/updateTask/:taskId", updateTask);

//delete task
userRouter.delete("/deleteTask/:taskId", deleteTask);


export default userRouter;
