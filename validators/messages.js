const { body } = require('express-validator');

const messageValidations = [
	body('payload.contact')
        .trim()
        .notEmpty()
        .withMessage('Se requiere de un remitente para el mensaje'),
    body('payload.message')
        .trim()
        .notEmpty()
        .withMessage('Se requiere de un cuerpo de mensaje')
]

module.exports = { messageValidations }