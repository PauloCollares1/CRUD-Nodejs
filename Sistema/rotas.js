const funcoes = require('../Programa/funcoes.js');
const express = require('express');
rota = express.Router();


// ---- Minhas rotas ---- //

rota.get('/lista', (req, res) => {
    res.send("Entrei agora no /cadastrados");
})

rota.post('/cadastramento', express.json(), (req, res) => {

    const nome = req.body.script_nome;
    const idade = req.body.script_idade;
    const email = req.body.script_email;

    
    funcoes.cadastro(nome,idade,email);

})















module.exports = { rota }