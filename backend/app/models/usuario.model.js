const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    usuario: String,
    contrasenia: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);