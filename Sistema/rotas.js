const funcoes = require('../Programa/funcoes.js');
const express = require('express');
rota = express.Router();


// ---- Minhas rotas ---- //

rota.get('/lista', (req, res) => {

    funcoes.mostrar_banco();
    res.json(funcoes.lista_pessoas)
})

rota.post('/cadastramento', express.json(), (req, res) => {

    const nome = req.body.script_nome;
    const idade = req.body.script_idade;
    const email = req.body.script_email;

    funcoes.cadastro(nome,idade,email);
})

rota.get('/update', (req, res) => {

    res.send(funcoes.update_banco("zé doido", 99, "zzzzz@zzzz"))
})

















module.exports = { rota }