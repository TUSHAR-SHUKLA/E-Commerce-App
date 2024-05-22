const express = require("express")
const app = express()
require("dotenv").config()

let port = process.env.PORT || 8080;

app.get("/",(req,res)=>{
    res.send("Welcome")
})


app.listen(port, ()=>{
    console.log(`app listening at port : ${port}`);
})