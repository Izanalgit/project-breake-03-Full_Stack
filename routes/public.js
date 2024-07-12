const express = require('express');
const getProjects = require('../controllers/projects/getProjects');
const reciveMessage = require('../controllers/messages/reciveMessage');

const routes = express.Router();

routes.get('/health', (req,res)=>{
    res.status(200).json({response:'server alive'});
});

//Send projects
routes.get('/projects',getProjects);

//Recive message  
routes.post('/contact',reciveMessage);

module.exports = routes;