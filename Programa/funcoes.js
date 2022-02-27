

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

    console.log(lista_pessoas);
}






module.exports = { cadastro, lista_pessoas, imprime_pessoa }