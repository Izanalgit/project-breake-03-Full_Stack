const User = require('../../models/User');

//Find user by login credentials
async function findUser(userName,password){
    try{
        const user = await User.findOne({name:userName,pswd:password});
        return user;
    }catch (err){
        console.error('DB-FIND USER BY LOG IN ERROR : ',err.errmsg);
        return null;
    }
}

//Find user by ID
async function findUserByID(userID){
    try{
        const user = await User.findById(userID);
        return user;
    }catch (err){
        console.error('DB-FIND USER BY ID ERROR : ',err.errmsg);
        return null;
    }
}

module.exports = {findUser,findUserByID};
