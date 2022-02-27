const express = require('express');
rota = express();



rota.get('/cadastrados', (req, res) => {
    res.send("Entrei agora no /cadastrados");
})













module.exports = { rota }