import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
    }
});
export default mongoose.model("User", userSchema);