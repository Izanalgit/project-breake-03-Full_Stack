const {genToken} = require('../../middleware/authMiddleware');
const {findUser} = require('../../config/dbFunctions/user');

// Error messages
const payNullMsg = 'Payload is required';
const payErrMsg = 'Incorrect login payload , required : {name,pswd}';
const sesErrMsg = 'Already loged';
const bdErrMsg = 'Incorrect user credentials';

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

    // Check if session allready exists
    if(req.session.token) 
        return res
            .status(409)
            .json({message:sesErrMsg}) 

    
    //User check

    const user = await findUser(name,pswd);
    if(!user)
        return res
            .status(401)
            .json({message:bdErrMsg});

    
    //Generate session token
    const token = genToken(user._id);
    req.session.token = token;

    console.log('SESSION UPDATED - LOGIN : ',user.name);

    res
        .status(200)
        .json({
            user:user.name,
            message:'Succes on login!',
            authToken:token
        })

}