import mongoose from "mongoose";

const mongoDB=async ()=>{
    try{
        await mongoose.connect(`${process.env.mongoDB}`)

    }catch(error){
        console.log("Mongo connection error",error);
        process.exit(1)
    }
}