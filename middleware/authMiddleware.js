const jwt = require ('jsonwebtoken');
const {findUserByID} = require('./../config/dbFunctions/user');
const {findToken} = require('./../config/dbFunctions/tokens');

//Secret
const {createSecret} = require('../config/authConfig');
const hashSc = createSecret();

//Token generator
function genToken(user){
    return jwt.sign({user: user._id},hashSc,{expiresIn:'2h'});
}

//Middlewares

//Request Token
async function verifyToken(req,res,next){

    const token = req.body.authToken;

    if(!token)return res.status(401).json({message:'Token missing'});

    jwt.verify(token,hashSc,async (err,decoded)=>{
        if(err){
            return res
                .status(401)
                .json({message:'Invalid Token', error: err.message});
        }

        const sesToken = await findToken(decoded.user);

        if(!sesToken)return res.status(402).json({message:'Not logued'});
        if(token != sesToken.token)return res.status(401).json({message:'Invalid session'});

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
    req.userId = userId;
    next();
}


module.exports = { 
    genToken, 
    verifyToken,
    verifyUser,
 };