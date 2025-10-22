import express from "express";
import {login, logout, signUp} from "../controllers/auth.controllers.js"
const authrouter = express.Router();

authrouter.post('/signup',signUp);
authrouter.post('/login',login);
authrouter.post('/logout',logout);

export default authrouter;