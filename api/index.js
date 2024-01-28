import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();





mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to MongoDb!");
}).catch((err)=>{
    console.log("Not Connected!!")
});

const app = express();

app.listen(3004,()=>{
    console.log("Servefdr is sdfsrunning");
});