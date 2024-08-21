import express from "express"
import cors from "cors"
import { connectDb } from "./config/db.js";
import foodRouter  from "./routes/foodRouter.js";
import userRouter from "./routes/userRouter.js";
import "dotenv/config"


const app = express()
const port=8080;

//Middelware
app.use(express.json())
app.use(cors())
connectDb()

//api calls
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)

app.get("/",(req,res)=>{
    res.send("Root Working!!")
})

app.listen(port,()=>{
    console.log("Listening on port 8080");
})