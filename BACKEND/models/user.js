import mongoose from "mongoose";

const userModel = mongoose.Schema({
    username:{
        type:String,
        required:true,
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
    cartData:{
        type:Object,
        default:{},
    }
},{minimize:false})

const User = mongoose.models.User || mongoose.model("User",userModel)

export default User;