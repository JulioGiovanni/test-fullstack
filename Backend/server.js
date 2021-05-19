const express = require('express');
const { dbConnection } = require('./database/config')
const cors = require('cors')
require('dotenv').config();

//Variables Globales
const PORT = process.env.port || 8080;

//Servidor
const app = express();

//Base de datos 
dbConnection();

//Middleware
    //Configurar cabeceras y cors
app.use(cors());
    //Body Parser
app.use(express.json());

//Rutas
app.use('/auth',require('./routes/users'))

//Puerto
app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`)
})