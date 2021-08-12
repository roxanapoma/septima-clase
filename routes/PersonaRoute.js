const express = require('express');
const router = express.Router();
const { PersonaController } = require('../controllers');
const { AuthMiddleware } = require('../middlewares');

router.get('/personas', AuthMiddleware.verificarToken, PersonaController.listarPersonas);


module.exports = router;