const express = require('express');
const {verifyToken,verifyUser} = require('../middleware/authMiddleware');

const router = express.Router();

router.use('/public', require('./public'));
router.use('/user', require('./user'));

router.use(
    '/projects', 
    verifyToken,
    verifyUser, 
    require('./projects'));
    
router.use(
    '/messages', 
    verifyToken,
    verifyUser, 
    require('./messages'));

module.exports = router;