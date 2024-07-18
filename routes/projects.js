const express = require('express');
const createProject = require('../controllers/projects/createProject');
const updateProject = require('../controllers/projects/updateProject');
const deleteProject = require('../controllers/projects/deleteProject');

const {validate} = require('../middleware/validator');
const {projectValidations,newProjectValidations} = require('../validators/projects');

const routes = express.Router();

//Create project 
routes.post(
    '/',
    projectValidations,
    newProjectValidations,
    validate,
    createProject
);

//Update project by ID
routes.put(
    '/:projectID',
    projectValidations,
    validate,    
    updateProject
);

//Delete project by ID
routes.delete('/:projectID',deleteProject);

module.exports = routes;