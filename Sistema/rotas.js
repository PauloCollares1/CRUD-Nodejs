const funcoes = require('../Programa/funcoes.js');
const express = require('express');
rota = express.Router();


// ---- Minhas rotas ---- //

// Enviando ao front usando o EJS
rota.get('/lista', async(req, res) => {

    res.json(await funcoes.mostrar_lista());  
});

rota.post('/update', express.json(), (req, res) => {

    const email = req.body.script_email;
    const nome = req.body.script_nome;
    const idade = req.body.script_idade;
    
    console.log("esse é meu email para update: " + email);
    funcoes.update_banco(email, nome, idade);
    res.end();
}) 

rota.post('/deletar', express.json(), (req,res) => {

    const pega_email = req.body.pegaemail;
    funcoes.deletar_do_banco(pega_email);
    res.end();
})
// Cadastrando usando a página estática 
rota.post('/cadastramento', express.json(), (req, res) => {

    const nome = req.body.script_nome;
    const idade = req.body.script_idade;
    const email = req.body.script_email;

    funcoes.cadastro(nome,idade,email);
    res.end();
})



















module.exports = { rota }