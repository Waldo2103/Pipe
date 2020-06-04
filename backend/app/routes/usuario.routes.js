module.exports = function(app) {
 
    const usuarios = require('../controllers/usuario.controller.js');
 
    // Create a new Usuario
    app.post('/api/usuarios', usuarios.create);
 
    // Retrieve all Usuario
    app.get('/api/usuarios', usuarios.findAll);
 
    // Retrieve a single Usuario by Id
    app.get('/api/usuarios/:usuarioId', usuarios.findOne);
 
    // Update a Usuario with Id
    app.put('/api/usuarios', usuarios.update);
 
    // Delete a Usuario with Id
    app.delete('/api/usuarios/:usuarioId', usuarios.delete);
}