import express from "express"
import { loginUser,singUpUser } from "../controllers/userController.js"

const userRouter = express.Router();

userRouter.post("/login",loginUser);
userRouter.post("/signUp",singUpUser);

export default userRouter;