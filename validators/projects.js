const { body } = require('express-validator');

const projectValidations = [
	body('payload.name')
        .trim()
        .isAlphanumeric() 
        .withMessage('El nombre debe ser alphanumerico')
        .isLength({ min: 3})
		.withMessage('El nombre debe ser de almenos 3 carácteres')
        .isLength({ max: 50})
		.withMessage('El nombre no debe superar los 50 carácteres'),
    body('payload.link')
        .trim()
        .isURL() 
        .withMessage('El enlace debe ser valido'),
    body('payload.description')
        .trim()
        .isLength({ min: 10})
        .withMessage('La descripción ha de contener almenos 10 caracteres')
        .isLength({ max: 200})
        .withMessage('La descripción no debe sobrepasar los 200 caracteres')
]

const newProjectValidations = [
	body('payload.name')
        .notEmpty()
        .withMessage('Se requiere el nombre del proyecto'),
    body('payload.link')
        .notEmpty()
        .withMessage('Se requiere de un enlace al proyecto'),
    body('payload.description')
        .notEmpty()
        .withMessage('Se requiere una descripción del proyecto')
]

module.exports = { projectValidations , newProjectValidations}