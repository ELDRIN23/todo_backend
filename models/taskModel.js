import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    task: {
        type:String,
        required: true 
    },
    createdAt: {
         type: Date,
         default: Date.now 
    },
    status: {
        type:String,
        enum: ["pending","completed"],
        default: "pending"
    },  
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }   
});
export default mongoose.model("Task", taskSchema);