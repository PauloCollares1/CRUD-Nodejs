const funcoes = require('../Programa/funcoes.js');
const express = require('express');
rota = express.Router();


// ---- Minhas rotas ---- //

// Enviando ao front usando o EJS
rota.get('/lista', (req, res) => {
    
    funcoes.mostrar_banco();
    res.json(funcoes.lista_pessoas);
});

rota.get('/update', (req, res) => {

    
})


// Cadastrando usando a página estática 
rota.post('/cadastramento', express.json(), (req, res) => {

    const nome = req.body.script_nome;
    const idade = req.body.script_idade;
    const email = req.body.script_email;

    funcoes.cadastro(nome,idade,email);
})



















module.exports = { rota }