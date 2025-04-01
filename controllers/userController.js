// import { Router } from "express";
import User from "../models/userModel.js";



//create a new task
export const createTask = async(req,res)=>{
   try {
      const {task} = req.body;
      if(!task.trim()){
         return res.status(400).json({err:"task is required"})
      }
      const newTask = await User.create({
         task: task.trim()
      })
      res.status(201).json({newTask,message:"task added succesfully"})
   } catch (err) {
      res.status(500).json({meaasage:"Internal server Error"})

   }
};


//fetch all task
export const getAllTasks = async(req,res)=>{
   try {
      const tasks = await User.find().sort({createdAt: -1 });
      //console.log(tasks);
      res.status(200).json(tasks)
   } catch (err) {
      res.status(500).json({meaasage:"Internal server Error"})
   }
}


//update task
export const updateTask = async(req,res)=>{
   try {
      const {taskId} = req.params; //to get the id
      // console.log(req.params)

      const {task, status} = req.body  //to get the content what to be changed
      // console.log(req.body)

      if(!taskId){
         res.status(404).send({message:"task id not found!"})
      }
      const updatedTask = await User.findByIdAndUpdate(taskId, {task}, {new: true})
      //   1st parameter => taskid which is from the req.params written in the Router
      //   2nd parameter => {task} here is a key that matches the field name in your schema.
      //   3rd parameter =>to send the new updated data to change in the DB

      if(!updatedTask){
         res.status(404).json({message:"task not found"})
      }
      
      if(status.trim()){
         updatedTask.status.trim()
      }

      if(task.trim()){
         updatedTask.task.trim()
      }

      updatedTask.save()

      res.status(201).json({updatedTask,message:"task updated succesfully"})
   } catch (err) {
      res.status(500).json({message:"Internal server Error"})
   }
}


//delete task
export const deleteTask = async(req,res)=>{
   try {
      const {taskId} = req.params;
      //console.log(taskId)

      if(!taskId){
        return res.status(404).json({message:"task id not found"})
      }

      const deletedTask = await User.findByIdAndDelete(taskId);

      if(!deletedTask){
       return  res.status(400).json({message:"task not found || already deleted" })
      }

      res.status(201).json({message:"task deleted succesfully"})
   } catch (err) {
      res.status(500).json({message:"Internal server Error"})
   }
};



//eldrinTodo//