

// ---- Lista auxiliar ---- //
let lista_pessoas = [];

// ---- Construtor ---- //
class Pessoa {

    constructor(nome, idade, email){
        nome = this.nome;
        idade = this.idade;
        email = this.email
    }
}

function cadastro(nome, idade, email){

    const pessoa = new Pessoa;

    pessoa.nome = nome;
    pessoa.idade = idade;
    pessoa.email = email;

    lista_pessoas.push(pessoa);

    console.log(lista_pessoas);
}






module.exports = { cadastro }