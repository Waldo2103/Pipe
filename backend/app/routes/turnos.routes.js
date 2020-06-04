module.exports = function(app) {
 
    const turnos = require('../controllers/turnos.controller.js');
 
    // Create a new Turno
    app.post('/api/turnos', turnos.create);
 
    // Retrieve all Turnos
    app.get('/api/turnos', turnos.findAll);
 
    // Saca un nuevo turno para la cola indicada
    app.get('/api/sacar_turno/:colaId', turnos.sacarTurno);

    //Atiende al proximo
    app.get('/api/atender_proximo', turnos.findNext);
 
    // Update a Turnos with Id
    app.put('/api/turnos', turnos.update);
 
    // Delete a Turnos with Id
    app.delete('/api/turnos/:colaId', turnos.delete);
}