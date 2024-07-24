const jwt = require ('jsonwebtoken');
const {findUserByID} = require('./../config/dbFunctions/user');

//Secret
const {createSecret} = require('../config/authConfig');
const hashSc = createSecret();

//Session config
const createSession = () => {
    return {
        name:"user",
        secret: hashSc,
        saveUninitialized: true,
        resave: false,
        proxy: true,
    }
}

//Token generator
function genToken(user){
    return jwt.sign({user: user._id},hashSc,{expiresIn:'2h'});
}

//Middlewares

//Request Token
function verifyToken(req,res,next){

    const token = req.body.authToken;
    const sesToken = req.session.token;

    if(!token)return res.status(401).json({message:'Token missing'});
    if(!sesToken)return res.status(402).json({message:'Not logued'});
    if(token != sesToken)return res.status(401).json({message:'Invalid session'}); 

    jwt.verify(token,hashSc,(err,decoded)=>{
        if(err){
            return res
                .status(401)
                .json({message:'Invalid Token', error: err.message});
        }

        req.user = decoded.user;

        next();
    })
}

//Verify user ID
async function verifyUser(req,res,next){
    const userId = req.user;
    const user = await findUserByID(userId);

    if(!user) 
        return res
            .status(401)
            .json({message:'User not found'})

    req.user = user.name;
    next();
}


module.exports = {
    createSession, 
    genToken, 
    verifyToken,
    verifyUser,
 };