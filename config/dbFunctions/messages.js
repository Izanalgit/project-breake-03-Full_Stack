const Message = require('../../models/Message');

//Trow all messages
async function allMessages(){
    try{
        const messages = await Message.find();
        return messages;
    }catch (err){
        console.error('DB-FIND MESSAGES ERROR : ',err);
    }
}

//Create new message by values
async function createMessage(contact,message){
    const newMessage = {contact,message}

    try{
        const newMsg = await Message.create(newMessage);
        return newMsg;
    }catch (err){
        console.error('DB-CREATE MESSAGE ERROR : ',err);
    }
}

//Delete message by id
async function deleteMessage(idMessage){
    try{
        const delMsg = await Message.findByIdAndDelete(idMessage);
        return delMsg;
    }catch (err){
        console.error('DB-DELETE MESSAGE BY ID ERROR : ',err);
    }
}

module.exports = {
    allMessages,
    createMessage,
    deleteMessage
};