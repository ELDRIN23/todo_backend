// import { Router } from "express";
import Task from "../models/taskModel.js";

//create a new task
export const createTask = async (req, res) => {
  try {
    const { task } = req.body;

    if (!task || !task.trim()) {
      return res.status(400).json({ error: "Task is required" });
    }

    const newTask = await Task.create({
      task: task.trim(),
      user: req.user.id  // Set the user ID during creation
    });

    res.status(201).json({ newTask, message: "Task added successfully" });
  } catch (err) {
    console.error('Error in createTask:', err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//fetch all task
export const getAllTasks = async (req, res) => {
  try {
    
    const tasks = await Task.find({ user: req.user.id }).sort({
      createdAt: -1,
    });
    console.log('Found tasks:', tasks);
    
    if (!tasks || tasks.length === 0) {
      return res.status(200).json([]);
    }
    res.status(200).json(tasks);
  } catch (err) {
    console.error('Error in getAllTasks:', err);
    res.status(500).json({ message: "Internal server Error" });
  }
};

// update task
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { task } = req.body;

    if (!id) return res.status(404).json({ message: "Task ID not found!" });
    if (!task || !task.trim())
      return res.status(400).json({ message: "Task cannot be empty!" });

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { task: task.trim() }, // update the task
      { new: true } // return the updated document
    );
    //   1st parameter => taskid which is from the req.params written in the Router
    //   2nd parameter => {task} here is a key that matches the field name in your schema.
    //   3rd parameter =>to send the new updated data to change in the DB

    if (!updatedTask)
      return res.status(404).json({ message: "Task not found!" });

    res
      .status(200)
      .json({ updatedTask, message: "Task updated successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//delete task
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    //console.log(id);

    if (!id) {
      return res.status(404).json({ message: "task id not found" });
    }

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res
        .status(400)
        .json({ message: "task not found || already deleted" });
    }

    res.status(201).json({ message: "task deleted succesfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal server Error" });
  }
};

// toggleStatus
export const toggleStatus = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id); // <--- MongoDB _id here
    if (!task) return res.status(404).json({ message: "Task not found" });

    task.status = task.status === "pending" ? "completed" : "pending";
    await task.save();

    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//eldrinTodo//
