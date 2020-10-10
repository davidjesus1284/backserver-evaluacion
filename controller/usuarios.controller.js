const { response } = require('express');

const getUsuarios = (req, res) => {
    res.json({
        ok: true,
        msg: 'Datos solicitados correctamente'
    });
};

module.exports = {
    getUsuarios
};