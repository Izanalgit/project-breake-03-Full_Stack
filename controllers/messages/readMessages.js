const {allMessages} = require('../../config/dbFunctions/messages');

module.exports = async (req,res) => {
    const messages = await allMessages();
    const emptyMsg = {message:"There is no messages..."}

    const response = messages.length == 0
        ? emptyMsg
        : messages

    res 
        .status(200)
        .json(response)
};