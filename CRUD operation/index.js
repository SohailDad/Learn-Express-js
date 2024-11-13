const express = require("express");
const app = express();
const Port = 3000;


//  this code for testing server runing or not.
app.get('/', (req, res) =>{
    res.send("hello world")
})

app.listen(Port, (req, res) =>{
    console.log(`Server Running on port ${Port}.....`)
})