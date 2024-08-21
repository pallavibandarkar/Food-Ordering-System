import User from "../models/user.js";
import jwt from "jsonwebtoken"; //authentication
import validator from "validator";
import bcrypt from "bcrypt"

const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

const loginUser =async(req,res)=>{
    try{
    const {email,password} = req.body;

    const newUser = await User.findOne({email});

    if(!newUser){
        res.json({success:false,message:"User Doesn't Exist"})
    }

    const isPasswordMatch = await bcrypt.compare(password,newUser.password);

    if(!isPasswordMatch){
        res.json({success:false,message:"Invalid Credentials"})
    }

    const token = createToken(newUser._id);
    res.json({success:true,token})

    }catch(err){
        console.log(err);
        res.json({success:false,message:"Error"})
    }
    
    
}

const singUpUser = async(req,res)=>{
    const {username,email,password} = req.body
    const isExist = await User.findOne({email});
    try{
        if(isExist){
            return res.json({success:false,message:"User Already Exist"});
        }
    
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid email"});
        }
        if(password.length<8){
            return res.json({success:false,message:"Please create a strong password"});
        }

        //Hashing the password
        const salt = await bcrypt.genSalt(12);
        const hashPassword = await bcrypt.hash(password,salt)

        //creating User
        const newUser = new User({
            username:username,
            email:email,
            password:hashPassword,
        })

        const saveUser = await newUser.save();
        const token = createToken(saveUser._id);
        res.json({success:true,token});
    }catch(error){
       console.log(error);
       res.json({success:false,message:"Error"})
    }

    
}

export {loginUser,singUpUser};