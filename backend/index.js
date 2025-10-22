import express from "express"
import Dotenv from "dotenv"
Dotenv.config();
let port = process.env.PORT || 6000

const app = express()

app.get("/",(req,res)=>{
    res.send("Hi")
})
app.listen(port,()=>{
    console.log(`Server is running at Port: ${port}.`)
})