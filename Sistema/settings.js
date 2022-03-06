const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const rotas = require('./rotas');
const http = require('http');
const cors = require('cors');
require('dotenv').config();

// ---- Settings ---- //
const app = express();

const server = http.Server(app);
require('dotenv').config()


//`mongodb://localhost/${process.env.MEU_DB}`

// ---- Conexão do Banco ---- //
    mongoose.connect(process.env.MONGO_DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}) 
    .then(console.log(`Banco de dados Conectado: ${process.env.DB_NAME}`)).catch(error => {console.log(error)})

// ---- Página estática ---- //
app.use('/', express.static('Public'));
app.use('/lista',express.static('Public/Files'));
app.use('/lista/update',express.static('Public/Updates'));


// ---- Configurando EJS ---- //
app.use(bodyParser.urlencoded({extended:true}));
app.engine('ejs', require('ejs').renderFile); 
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(cors());



// ---- Setando as rotas ---- //
app.use('/api', rotas.rota)


// ---- Conectando o servidor ---- //
server.listen(process.env.PORT ? () => {console.log("Servidor rodando na porta local -> localhost:5000")} : () => {console.log("Servidor rodando na porta do Heroku")})