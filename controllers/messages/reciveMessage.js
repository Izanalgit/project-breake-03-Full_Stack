const {createMessage} = require('../../config/dbFunctions/messages');

// Error messages
const payNullMsg = 'Payload is required';
const payErrMsg = 'Incorrect message payload , remember : {contact,message}';
const bdErrMsg = 'Data base do not accept that query';


module.exports = async (req,res) => {
    
    const payload = req.body.payload;

    //No payload
    if(!payload)
        return res
            .status(400)
            .json({message:payNullMsg});

    const {contact,message} = payload;

    //Incorrect payload
    if(!contact || !message)
        return res
            .status(400)
            .json({message:payErrMsg});

    //DB query
    const newMessage = await createMessage(contact,message);
    
    if (newMessage)
        //Correct result send 
        return res
            .status(200)
            .json(newMessage);
    else 
        //Null result on DB
        return res
            .status(400)
            .json({message:bdErrMsg});
    
};