/*
    Ruta: /api/usuarios
*/

const { Router } = require('express');
const { getUsuarios, crearUsuarios, actualizarUsuarios, borrarUsuarios } = require('../controller/usuarios.controller');

const router = Router();

router.get('/', getUsuarios);
router.post('/', crearUsuarios);
router.put('/:id', actualizarUsuarios);
router.delete('/:id', borrarUsuarios);

module.exports = router;