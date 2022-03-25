const banco = require('../Sistema/Database/banco.js');

// ---- lista auxiliar ---- //
let lista_pessoas = [];

async function mostrar_lista(){
    lista_pessoas = [];
    await mostrar_banco();
    console.log(lista_pessoas)
    return lista_pessoas;
}

function cadastro(nome, idade, email){

    salvar_no_banco(nome, idade, email)
}

async function salvar_no_banco(nome, idade,email){

    let ADD_DB = new banco.mongoose_model_cadastro({
        nome  :nome,
        idade :idade,
        email :email
    })
    await ADD_DB.save();
    console.log("----------------------------------")
    console.log("Novo usuário cadastrado: "+ nome, idade); 
}

async function mostrar_banco(){
    // não da pra trazer direto do banco, por isso a lista
    let lista = await banco.mongoose_model_cadastro.find({}) 
        lista.map((item) => {
                lista_pessoas.push(item);
        })
}

async function deletar_do_banco(email){

    await banco.mongoose_model_cadastro.findOneAndDelete({email:email})
    console.log("----------------------------------")
    console.log("usuário deletado: "+ email); 
}

async function update_banco(email, nome, idade){
    await banco.mongoose_model_cadastro.findOneAndUpdate({email:email},{nome:nome})
    await banco.mongoose_model_cadastro.findOneAndUpdate({email:email},{idade:idade})
    
    console.log("----------------------------------")
    console.log("usuário editado: "+ nome, idade); 
}



module.exports = {update_banco ,cadastro, lista_pessoas, salvar_no_banco, mostrar_banco, deletar_do_banco, mostrar_lista }