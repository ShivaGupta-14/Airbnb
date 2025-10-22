import express from "express";
import {signUp} from "../controllers/auth.controllers.js"
const authrouter = express.Router();

authrouter.post('/signup',signUp);

export default authrouter;