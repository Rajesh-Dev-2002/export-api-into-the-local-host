const express = require("express")
const data= require('./data.json');
const app = express();

app.get("/",(req,res)=>{
    res.send("Hey Engineers");
    
    
})

app.get("/data",(req,res)=>{
    res.json(data);
    
    
})



app.listen(5000,()=>{
    console.log("Server started You are welcome 👍");
})