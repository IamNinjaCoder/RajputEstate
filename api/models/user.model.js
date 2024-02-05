import mongoose from "mongoose";

// In this section we are creating some rules that user need to follow while creating data Like creating username...
//rules are called as Schema 
const userSchema = new mongoose.Schema({
    username:{
        type:String, // only String is required.
        required:true, //It is must to provide 
        unique:true, // Only unique Username is allowed
    },

    email:{
        type:String, 
        required:true, 
        unique:true, 
    },
    password:{
        type:String, 
        required:true, 
    
    },
    avatar:{
        type:String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyXHo361IB4rmJehXrc3f1dH-5aBsTUpAOeA&usqp=CAU",
    }
    
},{timestamps:true},);

const User = mongoose.model('User',userSchema);

export default User;
