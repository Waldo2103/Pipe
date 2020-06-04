const mongoose = require('mongoose');

const TurnosSchema = mongoose.Schema({
    turno: Number,
    cola: String,
    atendido: Boolean
});

module.exports = mongoose.model('Turnos', TurnosSchema);