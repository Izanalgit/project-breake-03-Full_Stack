const { deleteMessage} = require('../../config/dbFunctions/messages');

// Error messages
const bdErrMsg = 'Incorrect ID';

module.exports = async (req,res) => {
    
    const idMessage = req.params['mesgID'];

    //DB query
    const delMessage = await deleteMessage(idMessage);
    
    if (delMessage)
        //Correct result send 
        return res
            .status(200)
            .json(delMessage);
    else 
        //Null result on DB
        return res
            .status(400)
            .json({message:bdErrMsg});
    
};