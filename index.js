const express = require('express');
const app = express()
const port = process.env.port || 8000

app.get("/", (req,res)=>{
    res.send("Welcome to home page")
})

app.get("/about", (req,res)=>{
    res.send("Welcome to about page")
})

app.get("/weather", (req,res)=>{
    res.send("Welcome to About weather page")
})

app.get("*", (req,res)=>{
    res.send("Error 404 page not found")
})

app.listen(port , () =>{
    console.log(`Buddy aapke request listen ho rhe hai buddy ${port} is port parr`)
})

//20:06 to start
