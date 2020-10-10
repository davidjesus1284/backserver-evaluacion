const { Schema, model } = require('mongoose');

const usuarioSchema = Schema({
    nombre: {
        type: String,
        require: true
    },
    dni: {
        type: Number,
        require: true
    },
    celular: {
        type: Number
    },
    email: {
        type: String,
        require: true,
        unique: true
    }
});

module.exports = model('Usuario', UsuariosSchema);