const express = require("express");
const app = express();
const Port = 3000;

const usermodel = require('./userModel')

//  this code for testing server runing or not.
app.get('/', (req, res) => {
    res.send("hello world")
})

// this is for creation in database

app.get('/create', async (req, res) => {
    const userCreate = await usermodel.create({
        name : 'Sohail Dad',
        email : 'example@gmail.com',
        phone : '+*******0'
    })

    res.send(userCreate)
})

// this is for read all from database

app.get('/read', async (req, res) => {
    const userRead = await usermodel.find();

    res.send(userRead);
})

// this is for updation in database

app.get('/update',async (req, res) =>{
    const userUpdate = await usermodel.findOneAndUpdate({email:'example@gmail.com'},{email:'Example@gmail.com'},{new:true});

    res.send(userUpdate);
})

// this is for deletion in database

app.get('/delete',async (req, res) =>{
    const userDelete = await usermodel.findOneAndDelete({email:'example@gmail.com'});

    res.send(userDelete);
})

app.listen(Port, (req, res) => {
    console.log(`Server Running on port ${Port}.....`)
})