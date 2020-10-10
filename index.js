require('dotenv').config();
const express = require('express');
const { dbConnection } = require('./database/config');


// Creacion del inicio del servidor
const app = express();

// Inicio de conexion DB
const db = dbConnection();

// Rutas del servidor
app.use('/api/usuarios', require('./routes/usuarios'));

app.listen(process.env.PORT, () => {
    console.log('Servidor iniciado en el puerto: ' + process.env.PORT);
});