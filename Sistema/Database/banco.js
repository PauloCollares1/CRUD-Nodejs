const mongoose = require('mongoose');

// ---- Modelo da tabela ---- //
const mongoose_schema_cadastro = mongoose.Schema({
    nome      :{type: String, minlength:1, maxlength:25, require},
    idade     :{type: Number, minlength:6, maxlength:200, require},
    email     :{type: String, minlength:1, maxlength:45, require},
    createdAt :{type: Date, default: Date.now}
})


// ---- Configurações ---- //
const mongoose_model_cadastro = mongoose.model('crud', mongoose_schema_cadastro);



// ---- Exports ---- //
module.exports = {mongoose_schema_cadastro, mongoose_model_cadastro}