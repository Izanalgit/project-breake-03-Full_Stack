const express = require('express');
const readMessages = require('../controllers/messages/readMessages');
const deleteMessage = require('../controllers/messages/deleteMessage');

const routes = express.Router();

//Read all messages 
routes.get('/',readMessages);

//Delete message by ID
routes.delete('/:mesgID',deleteMessage);

module.exports = routes;