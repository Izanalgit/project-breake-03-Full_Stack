const Token = require('../../models/Token');

//Find Token
async function findToken(userId){
    try{
        const authToken = await Token.findOne({userId});
        return authToken;
    }catch (err){
        console.error('DB-FIND TOKEN ERROR : ',err.errmsg);
        return null;
    }
}

//Save token
async function saveToken(userId,token){
    try{
        const authToken = await Token.create({userId,token});
        return authToken;
    }catch (err){
        console.error('DB-SAVE TOKEN ERROR : ', err.errmsg);
        return null;
    }
}

//Clean Token
async function cleanToken(userId){
    try{
        const authToken = await Token.findOneAndDelete({userId});
        return authToken;
    }catch (err){
        console.error('DB-CLEAN TOKEN ERROR : ', err.errmsg);
        return null;
    }
}

//Init session tokens
async function initTokens(){
    try{
        const authToken = await Token.deleteMany();
        return authToken;
    }catch (err){
        console.error('DB-INIT SESSION TOKENS ERROR : ', err.errmsg);
        return null;
    }
}

module.exports = {findToken,saveToken,cleanToken,initTokens};