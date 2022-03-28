const mongoose = require('mongoose');
const express = require('express');
const rotas = require('./rotas');
const http = require('http');
const cors = require('cors');
require('dotenv').config();

// ---- Settings ---- //
const app = express();

const server = http.Server(app);
require('dotenv').config()


//`mongodb://localhost/${process.env.MEU_DB}`

// ---- Conexão do Banco ---- //
    mongoose.connect(process.env.MONGO_DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}) 
    .then(console.log(`Banco de dados Conectado: ${process.env.DB_NAME}`)).catch(error => {console.log(error)})

// ---- Página estática ---- //
app.use('/', express.static('Public'));
app.use('/lista',express.static('Public/Files'));

// ---- Setando as rotas ---- //
app.use('/api', rotas.rota)

// ---- Conectando o servidor ---- //
server.listen(process.env.PORT || 5000, () => {console.log("Servidor rodando...")})