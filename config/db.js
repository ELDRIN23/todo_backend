import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const dbpassword = process.env.DB_PASSWORD

export const connectDB = async()=>{
    try{
        await mongoose.connect(`mongodb+srv://eldrinjohnson230:${dbpassword}@todo23.kwte9.mongodb.net/?retryWrites=true&w=majority&appName=todo23`)
        console.log("DB connected sucsessfully")
    }catch(err){
            console.log(err);
            console.log("DB connection failled")
    }
}