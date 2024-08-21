import express from "express"
import Food from "../models/food.js"
import fs from "fs"

//add food-item
const addFood = async (req,res)=>{
    let image_filename = `${req.file.filename}`
    
    const newfood = new Food({...req.body,image:image_filename})
    try{
        const result = await newfood.save();
        console.log("Succesful",result)
        res.json({success:true,message:"Food Added"})
    }catch(err){
        console.log(err)
    }
}
//display all food items
const listFood = async (req,res)=>{
    try{
        const result = await Food.find({});
        res.json({success:true,message:"Food listed",data:result})
    }catch(err){
        res.json({success:true,message:"Food Not Found"})
    }
    
}

// remove food item
const removeItem = async(req,res)=>{
    let {id} = req.params;
    try{
        let food = await Food.findById(id);
        fs.unlink(`uploads/${food.image}`,()=>{})
        let result = await Food.findByIdAndDelete(id);
        res.json({success:true,message:"Food Removed"})
    }catch(err){
        console.log(err)
        res.json({success:false,message:"Food Not Remove"})
    }
} 

export {addFood,listFood,removeItem}

