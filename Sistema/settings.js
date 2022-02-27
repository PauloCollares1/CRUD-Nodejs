const bodyParser = require('body-parser');
const rotas = require('./rotas');
const express = require('express');
const http = require('http');
const path = require('path');


// ---- Settings ---- //
const PORT = 5000;
const app = express();
const server = http.Server(app);

// ---- Setando as rotas ---- //
app.get('/', (req, res) => {
    res.send('Rota barra iniciada');
})

app.use('/api', rotas.rota, (req, res) => {
    res.send('Rota /api');
})




// ---- Conectando o servidor ---- //
server.listen(PORT, () => {console.log(`Servidor rodando na porta: ${PORT}`)})