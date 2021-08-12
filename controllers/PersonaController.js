const listarPersonas = (req, res) => {
  console.log('============_DESDE_CONTROLLER_====');
  console.log(req.nombreCompleto);
  res.status(200).json({
    finalizado: true,
    mensaje: 'Personas listadas correctamente',
    datos: []
  });
};

module.exports = {
  listarPersonas
};