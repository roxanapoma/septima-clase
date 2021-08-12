const { app, constants } = require('../config');

const listarPersonas = (req, res) => {
  console.log('============_DESDE_CONTROLLER_====');
  console.log(req.nombreCompleto);
  res.status(200).json({
    finalizado: true,
    mensaje: 'Personas listadas correctamente',
    datos: []
  });
};

const generarToken = (req, res) => {
  console.log(constants);

  if (req.idRol === constants.ROL_ADMINISTRADOR) {
    
  }

  res.status(200).json({
    finalizado: true,
    mensaje: 'Token generado correctamente',
    datos: `e1e5wq61d56qw1dwq156dwq1655dwq6 TIEMPO ${app.expiracionToken}`
  });
};

module.exports = {
  listarPersonas,
  generarToken
};