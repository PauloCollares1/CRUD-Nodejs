const rota = require('express').Router();




rota.get('/cadastrados', (req, res) => {
    res.send("Entrei agora no /cadastrados");
})













module.exports = { rota }