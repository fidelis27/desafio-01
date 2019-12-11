const projects = require('../src/projects');

function validarIdExistente(req, res, next) {
    const projeto = projects.find(d => d.id == req.params.id);
  
    if (projeto) {
      return next();
    }
  
    return res.status(400).json({ error: "ID inexistente" });
  }

  module.exports = validarIdExistente;