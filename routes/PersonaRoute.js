const express = require('express');
const router = express.Router();
const { PersonaController } = require('../controllers');
const { AuthMiddleware } = require('../middlewares');

router.get('/personas', AuthMiddleware.verificarToken, PersonaController.listarPersonas);

router.get('/token', PersonaController.generarToken)

module.exports = router;