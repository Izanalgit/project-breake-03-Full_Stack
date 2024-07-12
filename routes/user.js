const express = require('express');
const userLogin = require('../controllers/user/login');
const userLogout = require('../controllers/user/logout');

const routes = express.Router();

//Log in 
routes.post('/login',userLogin);

//Log out 
routes.post('/logout',userLogout);

module.exports = routes;