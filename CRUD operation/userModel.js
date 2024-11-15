const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/mydatabase";

mongoose.connect(url);

const userSchema = mongoose.Schema({
    // name : 'Sohail Dad',
    // email : 'example@gmail.com',
    // phone : '+923*******0'

    name : String,
    email : String,
    phone : String
})

module.exports = mongoose.model('beginnerUser', userSchema);