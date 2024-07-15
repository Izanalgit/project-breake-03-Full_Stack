const mongoose = require ('mongoose');
const Message = require('../models/Message');

const {
    allMessages,
    createMessage,
    deleteMessage
} = require ('../config/dbFunctions/messages');

require('dotenv').config();

const db = process.env.DB_TEST_MESG || 'PB03-Messages-test';
const url = process.env.DB_TEST_URI || 'mongodb://127.0.0.1:27017/';

beforeAll(async () => await mongoose
    .connect(url + db)
    .catch(err=>console.error(err)));

beforeEach(async () => await Message.deleteMany({}));
afterEach(async () => await Message.deleteMany({}));

afterAll(async () => await mongoose.connection.close());

describe('TEST OF MESSAGESS FUNCTIONS DB',()=>{

    const contact = "Contact 01";
    const message = "Message 01";

    const msgTest = {
        contact: "Contact test",
        message: "Message test"
    }
    
    describe('Create :', () => {

		it('create a new message function', async () => {
            
			const newMessage = await createMessage(
                contact,
                message
            )
            const msgId = newMessage._id;
			const match = await Message.findById(msgId).exec();

			expect(match._id).toEqual(newMessage._id);
            expect(match.contact).toEqual(newMessage.contact);
            expect(match.message).toEqual(newMessage.message);
		});
	});

    describe('Delete :', () => {

		it('delete Message by id function', async () => {

            await Message.create({
                _id:'6654fe076f82c1ea05763f6e',
                contact,
                message
            })
            await Message.create(msgTest)

            await deleteMessage("6654fe076f82c1ea05763f6e");

            const Messages = await Message.countDocuments({}).exec();

            expect(Messages).toBe(1);
			
		});

	});

    describe('Find Messages :', () => {
		it('trow all Messages function', async () => {

			await Message.create({
                contact,
                message
            })
            await Message.create(msgTest)

            const allMsgs = await allMessages();

			expect(allMsgs.length).toEqual(2);

		});
        
	});


    

})