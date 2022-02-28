const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const rotas = require('./rotas');
const http = require('http');





// ---- Settings ---- //
const PORT = 5000;
const app = express();
const server = http.Server(app);
const mongo = 'Formulario_DB'

// ---- Conexão do Banco ---- //
    mongoose.connect(`mongodb://localhost/${mongo}`, {useNewUrlParser: true, useUnifiedTopology: true}) 
    .then(console.log(`Banco de dados Conectado: ${mongo}`)).catch(error => {console.log(error)})

// ---- Página estática ---- //
app.use('/', express.static('Public'));

// ---- Configurando EJS ---- //
app.use(bodyParser.urlencoded({extended:true}));
app.engine('ejs', require('ejs').renderFile); 
app.set('view engine', 'ejs');
app.set('views', 'views');



// ---- Setando as rotas ---- //
app.use('/api', rotas.rota)


// ---- Conectando o servidor ---- //
server.listen(PORT, () => {console.log(`Servidor rodando na porta: ${PORT}`)})