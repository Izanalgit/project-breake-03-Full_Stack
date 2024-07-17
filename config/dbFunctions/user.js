const User = require('../../models/User');

//Find user by login credentials
async function findUser(userName,password){
    try{
        const user = await User.findOne({name:userName,pswd:password});
        return user;
    }catch (err){
        console.error('DB-FIND USER BY LOG IN ERROR : ',err);
        return null;
    }
}

module.exports = {findUser};
