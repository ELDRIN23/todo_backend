import mongoose from "mongoose";


const userShema = new mongoose.Schema({

    username:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true
    },

    
});

export default mongoose.model("User", userShema);
