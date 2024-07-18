const { body } = require('express-validator');

const messageValidations = [
	body('payload.contact')
        .trim()
        .notEmpty()
        .withMessage('Se requiere de un remitente para el mensaje')
        .isEmail()
        .withMessage('El remitente debe ser un email válido'),
    body('payload.message')
        .trim()
        .notEmpty()
        .withMessage('Se requiere de un cuerpo de mensaje')
]

module.exports = { messageValidations }