const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    userId : {
        type:mongoose.Schema.ObjectId,
        required:[true, 'User Id is required'],
        unique:true
    },
    token : {
        type:String,
        require: [true, 'Token is required'],
        unique:true
    },
})

const Token = mongoose.model('token',tokenSchema);

module.exports = Token;