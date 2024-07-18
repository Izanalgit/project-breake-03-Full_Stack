const express = require('express');
const getProjects = require('../controllers/projects/getProjects');
const reciveMessage = require('../controllers/messages/reciveMessage');

const {validate} = require('../middleware/validator');
const {messageValidations} = require('../validators/messages');
 
const routes = express.Router();

routes.get('/health', (req,res)=>{
    res.status(200).json({message:'server alive'});
});

//Send projects
routes.get('/projects',getProjects);

//Recive message  
routes.post('/contact',
    messageValidations,
    validate,
    reciveMessage);

module.exports = routes;