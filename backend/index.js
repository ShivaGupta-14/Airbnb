import express from "express"
import Dotenv from "dotenv"
import connectdb from "./config/db.js";
Dotenv.config();
let port = process.env.PORT || 6000;

const app = express()

app.get("/",(req,res)=>{
    res.send("Hi")
})
app.listen(port,()=>{
    connectdb();
    console.log(`Server is running at Port: ${port}.`)
})