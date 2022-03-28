const funcoes = require('../Programa/funcoes.js');
const express = require('express');
rota = express.Router();


// ---- Minhas rotas ---- //

// Chama a lista de usuários
rota.get('/lista', async(req, res) => {

    res.json(await funcoes.mostrar_lista());  
});

// Cadastrando usando a página estática 
rota.post('/cadastramento', express.json(), (req, res) => {

    const nome = req.body.script_nome;
    const idade = req.body.script_idade;
    const email = req.body.script_email;

    funcoes.cadastro(nome,idade,email);
    res.end();
})

// Edita um usuário
rota.put('/update', express.json(), (req, res) => {

    const email = req.body.script_email;
    const nome = req.body.script_nome;
    const idade = req.body.script_idade;
    
    console.log("esse é meu email para update: " + email);
    funcoes.update_banco(email, nome, idade);
    res.end();
}) 

// Deletar um usuário
rota.delete('/deletar', express.json(), (req,res) => {

    const pega_email = req.body.pegaemail;
    funcoes.deletar_do_banco(pega_email);
    res.end();
})




















module.exports = { rota }