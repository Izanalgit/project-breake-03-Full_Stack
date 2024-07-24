const {cleanToken,findToken} = require('../../config/dbFunctions/tokens');

// Error messages
const payNullMsg = 'Payload is required';
const payErrMsg = 'Incorrect logout payload , required : {name}';
const sesErrMsg = 'Not loged yet';
const userErrMsg = 'Incorrect user credentials';
const apiErrMsg = 'Server token error';

module.exports = async (req,res) => {

    const payload = req.body.payload;  

    //No payload
    if(!payload)
        return res
            .status(400)
            .json({message:payNullMsg});

    const {name} = payload;

    //Incorrect payload
    if(!name)
        return res
            .status(400)
            .json({message:payErrMsg});

    //User check
    if(name != req.user)
        return res
            .status(401)
            .json({message:userErrMsg});

    //Check if there is a token from the user
    const tokenSaved = await findToken (req.userId);
    if(!tokenSaved) 
        return res
            .status(409)
            .json({message:sesErrMsg});

    //Delete session token
    const tokenClean = await cleanToken (req.userId);
    if(!tokenClean) 
        return res
            .status(500)
            .json({message:apiErrMsg});

    console.log('SESSION UPDATED - LOGOUT : ', name);

    res
        .status(200)
        .json({
            message:'Succes on logout!'
        })

}