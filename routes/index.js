const express = require('express');

const router = express.Router();

router.use('/public', require('./public'));
// router.use('/user', require('./user'));
// router.use('/projects', require('./projects'));
// router.use('/messages', require('./messages'));

module.exports = router;