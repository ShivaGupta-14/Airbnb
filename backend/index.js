import express from "express"
import Dotenv from "dotenv"
import connectdb from "./config/db.js";
import authrouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

Dotenv.config();

let port = process.env.PORT || 6000;

const app = express()
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authrouter);

app.listen(port,()=>{
    connectdb();
    console.log(`Server is running at Port: ${port}.`)
})