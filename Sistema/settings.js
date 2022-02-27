const bodyParser = require('body-parser');
const express = require('express');
const rotas = require('./rotas');
const http = require('http');
const path = require('path');


// ---- Settings ---- //
const PORT = 5000;
const app = express();
const server = http.Server(app);

// ---- Página estática ---- //
app.use('/', express.static('Public'));

// ---- Setando as rotas ---- //
app.use('/api', rotas.rota)



// ---- Conectando o servidor ---- //
server.listen(PORT, () => {console.log(`Servidor rodando na porta: ${PORT}`)})