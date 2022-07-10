const mongoose = require('mongoose');

const userAccount = new mongoose.Schema({
 
    username : String,
    order : String,
    email : {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
    },
    address : String

})

module.exports = mongoose.model('Useraccount',userAccount);