const {genToken} = require('../../middleware/authMiddleware');
const {findUser} = require('../../config/dbFunctions/user');
const {saveToken,findToken} = require('../../config/dbFunctions/tokens');

// Error messages
const payNullMsg = 'Payload is required';
const payErrMsg = 'Incorrect login payload , required : {name,pswd}';
const sesErrMsg = 'Already loged';
const bdErrMsg = 'Incorrect user credentials';
const apiErrMsg = 'Server token error';

module.exports = async (req,res) => {

    const payload = req.body.payload;

    //No payload
    if(!payload)
        return res
            .status(400)
            .json({message:payNullMsg});

    const {name,pswd} = payload;

    //Incorrect payload
    if(!name || !pswd)
        return res
            .status(400)
            .json({message:payErrMsg});

        
    //User check
    const user = await findUser(name,pswd);
    if(!user)
        return res
            .status(401)
            .json({message:bdErrMsg});

    
    //Check if there is a token allready from the user
    const tokenSaved = await findToken (user._id);
    if(tokenSaved) 
        return res
            .status(409)
            .json({message:sesErrMsg});
    
    //Generate token
    const token = genToken(user._id);
    const tokenDB = await saveToken(user._id,token);
    if(!tokenDB) return res
            .status(500)
            .json({message:apiErrMsg}); 

    console.log('SESSION UPDATED - LOGIN : ',user.name);

    res
        .status(200)
        .json({
            user:user.name,
            message:'Succes on login!',
            authToken:token
        })

}