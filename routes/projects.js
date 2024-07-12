const express = require('express');
const createProject = require('../controllers/projects/createProject');
const updateProject = require('../controllers/projects/updateProject');
const deleteProject = require('../controllers/projects/deleteProject');

const routes = express.Router();

//Create project 
routes.post('/',createProject);

//Update project by ID
routes.put('/:projectID',updateProject);

//Delete project by ID
routes.delete('/:projectID',deleteProject);

module.exports = routes;