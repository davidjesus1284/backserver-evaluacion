const { response } = require('express');

const getUsuarios = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Datos solicitados correctamente'
    });
};

const crearUsuarios = async(req, res = response) => {
    res.json({
        ok: true,
        msg: 'Creando Usuarios'
    });
};

const actualizarUsuarios = async(req, res = response) => {
    const uid = req.params.id;
    res.json({
        ok: true,
        msg: 'Actualizando usuarios',
        uid
    });
};

const borrarUsuarios = async(req, res = response) => {
    const uid = req.params.id;
    res.json({
        ok: true,
        msg: 'Eliminando usuario',
        uid
    });
};

module.exports = {
    getUsuarios,
    crearUsuarios,
    actualizarUsuarios,
    borrarUsuarios
};