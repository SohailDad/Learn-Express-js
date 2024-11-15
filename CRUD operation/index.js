const express = require("express");
const app = express();
const Port = 3000;

const usermodel = require('./userModel')

//  this code for testing server runing or not.
app.get('/', (req, res) => {
    res.send("hello world")
})

app.get('/create', async (req, res) => {
    const userCreate = await usermodel.create({
        name : 'Sohail Dad',
        email : 'example@gmail.com',
        phone : '+*******0'
    })

    res.send(userCreate)
})

app.get('/read', async (req, res) => {
    const userRead = await usermodel.find();

    res.send(userRead);
})



app.listen(Port, (req, res) => {
    console.log(`Server Running on port ${Port}.....`)
})