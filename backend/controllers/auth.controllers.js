import User from "../models/user.model.js";
import generateToken from "../config/token.js";
import bcrypt from "bcrypt"

export const signUp = async(req,res)=>{
    try {
        const {name,email,password} = req.body;
        const existUser = await User.findOne({email});
        if(existUser){
            return res.status(400).json({message : "User is already exist"})
        }
        let hashpassword = await bcrypt.hash(password,10);
        let user = await User.create({name,email,password:hashpassword});
        let token = await generateToken(user._id);
        res.cookie("token",token,{
            httpOnly:true,
            secure:process.env.NODE_ENVIRONMENT === "production",
            sameSite:"strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        res.status(201).json({user})
    } catch (error) {
        return res.status(500).json({message:`Signup error: ${error}`})
    }
}
export default signUp;