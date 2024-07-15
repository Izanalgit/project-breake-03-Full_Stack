const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required:[true, 'Name is required'],
        unique:true
    },
    pswd : {
        type:String,
        require: [true, 'Password is required']
    },
})

const User = mongoose.model('user',userSchema);

module.exports = User;