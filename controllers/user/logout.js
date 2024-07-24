
// Error messages
const payNullMsg = 'Payload is required';
const payErrMsg = 'Incorrect logout payload , required : {name}';
const sesErrMsg = 'Not loged yet';
const userErrMsg = 'Incorrect user credentials';

module.exports = async (req,res) => {

    const payload = req.body.payload;

    //No session
    if(req.session.token == null)
        return res
            .status(400)
            .json({message:sesErrMsg});

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

    
    //Delete session token
    req.session.destroy();

    console.log('SESSION UPDATED - LOGOUT : ', name);

    res
        .status(200)
        .json({
            message:'Succes on logout!'
        })

}