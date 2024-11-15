const express = require("express");
const app = express();
const Port = 3000;

const usermodel = require('./userModel')

//  this code for testing server runing or not.
app.get('/', (req, res) =>{
    res.send("hello world")
})


app.get('/read', async (req, res) =>{
    const userRead = await res.find();

    res.send(userRead);
})



app.listen(Port, (req, res) =>{
    console.log(`Server Running on port ${Port}.....`)
})