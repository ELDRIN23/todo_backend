import userModel from "../models/userModel";

//create a new task
export const createTask = async(req,res)=>{
   try {
      const {task} = req.body;
      const newTask = new User({task})
      await newTask.save();
      res.status(201).json(newTask)
   } catch (err) {
      res.status(500).json({err:"failed to create task"})
   }
};

//read all task
export const getAllTasks = async(req,res)=>{
   try {
      await task.find().sort({createdAt: -1 });
      res.status(201).json(tasks)
   } catch (err) {
      res.status(500).json({err:"failed to display tasks"})
   }
}

//update task
export const updateTask = async(req,res)=>{
   try {
      const {id} = req.params; //to get the id
      const {task} = req.body  //to get the content what to be changed
      const updatedTask = await task.findByIdAndUpdate

      res.status(201).json(updateTask)
   } catch (err) {
      res.status(500).json({err:"failed to update tasks"})
   }
}