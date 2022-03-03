const funcoes = require('../Programa/funcoes.js');
const express = require('express');
rota = express.Router();


// ---- Minhas rotas ---- //

// Enviando ao front usando o EJS
rota.get('/lista', (req, res) => {

    res.json(funcoes.mostrar_lista());  
});

rota.get('/update', (req, res) => {

    
})

rota.post('/deletar', express.json() , (req,res) => {

    const pega_email = req.body.pegaemail;
    funcoes.deletar_do_banco(pega_email);
})
// Cadastrando usando a página estática 
rota.post('/cadastramento', express.json(), (req, res) => {

    const nome = req.body.script_nome;
    const idade = req.body.script_idade;
    const email = req.body.script_email;

    funcoes.cadastro(nome,idade,email);
})



















module.exports = { rota }