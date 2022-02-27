const banco = require('../Sistema/Database/banco.js');

// ---- Objeto auxiliar ---- //
let lista_pessoas = {
    nome:"",
    idade:"",
    email:""
}

// ---- Construtor ---- //
class Pessoa {

    constructor(nome, idade, email){
        nome = this.nome;
        idade = this.idade;
        email = this.email
    }
}

function imprime_pessoa(){
    return lista_pessoas;
}

function cadastro(nome, idade, email){

    const pessoa = new Pessoa;
    pessoa.nome = nome;
    pessoa.idade = idade;
    pessoa.email = email;

    lista_pessoas = {nome, idade, email}
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
    mostrar_banco();
}

async function mostrar_banco(){

    const teste = await banco.mongoose_model_cadastro.find({})
    console.log("----------------------------------")
    console.log("lista de Pessoas no banco"); 
    console.log(teste);

}

async function deletar_do_banco(email){

    await banco.mongoose_model_cadastro.findOneAndDelete({email:email})
    console.log("----------------------------------")
    console.log("usuário deletado: "+ email); 
}




module.exports = { cadastro, lista_pessoas, imprime_pessoa, salvar_no_banco, mostrar_banco, deletar_do_banco }