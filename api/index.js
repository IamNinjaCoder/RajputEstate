import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
dotenv.config();





//connect to mongo db

//create a new express app

//connect to mongo db
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to MongoDb!");
}).catch((err)=>{
    console.log("Not Connected!!")
});

//create a new express app
const app = express();

//start the app
app.listen(3004,()=>{
    console.log("Servefdr is sdfsrunning");
});

//add the user router
app.use("/api/user",userRouter);