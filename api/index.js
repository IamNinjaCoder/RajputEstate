
// This code is written in JavaScript and is stored in a file named index.js.
// It imports the required modules and sets up a server using Express.js.
// It also establishes a connection to a MongoDB database using Mongoose.
// Additionally, it imports a user router from another file and uses it for routing.
// The code also loads environment variables from a .env file using dotenv.


import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js';

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
app.use(express.json());
//start the app
app.listen(3004,()=>{
    console.log("Server is running");
});

//add the user router
app.use("/api/user",userRouter);

app.use('/api/auth',authRouter);

//Creating a middleware and a functioin to handle possible errors
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Sever Error :(";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});