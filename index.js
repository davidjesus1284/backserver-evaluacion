require('dotenv').config();
const express = require('express');


// Creacion del inicio del servidor
const app = express();

// Rutas del servidor
app.use('/api/usuarios', require('./routes/usuarios'));

app.listen(process.env.PORT, () => {
    console.log('Servidor iniciado en el puerto: ' + process.env.PORT);
});