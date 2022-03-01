const funcoes = require('../Programa/funcoes.js');
const express = require('express');
rota = express.Router();


// ---- Minhas rotas ---- //

// Enviando ao front usando o EJS
rota.get('/lista', (req, res) => {
    
    funcoes.mostrar_banco();
    let myVar = funcoes.lista_pessoas;
    let condicao = true;
    res.render('lista', { myVar_html : myVar, condicao:condicao });
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