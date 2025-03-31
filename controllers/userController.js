import User from "../models/userModel.js";



//create a new task
export const createTask = async(req,res)=>{
   try {
      // const {task} = req.body;
      // const newTask = new User({task})
      // await newTask.save();
      // res.status(201).json(newTask)

      const {task} = req.body;
     // console.log(req.body)

      if(!task){
         return res.status(400).json({err:"task is required"})
      }
      const newTask = new User({task})

     // console.log(task);
      await newTask.save();
      res.status(201).json(newTask)
   } catch (err) {
      res.status(500).json({err:"Internal server Error"})
      console.log(err)
   }
};


//read all task
export const getAllTasks = async(req,res)=>{
   try {
      await task.find().sort({createdAt: -1 });
      res.status(201).json(tasks)
   } catch (err) {
      res.status(500).json({err:"Internal server Error"})
   }
}


//update task
export const updateTask = async(req,res)=>{
   try {
      const {taskId} = req.params; //to get the id
      const {task} = req.body  //to get the content what to be changed
      const updatedTask = await task.findByIdAndUpdate(taskId, {task}, {new: true})

      res.status(201).json(updateTask)
   } catch (err) {
      res.status(500).json({err:"Internal server Error"})
   }
}


//delete task
export const deleteTask = async(res,req)=>{
   try {
      const {taskId} = req.params;
      await task.findByIdAndDelete(taskId);
   } catch (err) {
      res.status(500).json({err:"Internal server Error"})
   }
};