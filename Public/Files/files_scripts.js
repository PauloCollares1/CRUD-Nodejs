

const lista_display = document.getElementById('lista');


var id = 0;
var lista_deletar=[];

entrega_valores();

function entrega_valores(){

    fetch('/api/lista')
        .then(response => response.json())
        .then(data =>{
            //if(data.length <= 0){return alert("A lista não possui valores, favor cadastrar alguem")}
            data.map((item) => {

                let add_url =(
                    `<div class="card mt-4">
                        <div class="card-header">
                            <div class="card-title"><b>Nome:</b>` + item.nome + `</div>
                        </div>
                        <div class="card-body">
                            <b>Idade:</b>` + item.idade +
                            `<b>Email:</b>` + item.email +
                            `<button id='`+ id +`' onclick='deletar(${id})' value='`+item._id+`'> Deletar </button>
                            <button id='`+ id +`' onclick='update(${id})' value='`+item._id+`'> Editar </button>
                        </div>  
                    </div>`
                )
                lista_deletar.push(item.email);
                id = id + 1;
                lista_display.insertAdjacentHTML('beforeend', add_url) 
            }) 
        })
}



function limpar_lista(){
    lista_display.remove();
}

function deletar(pega_id){

    const credencial = {
        pegaemail : lista_deletar[pega_id]
    }
    options = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(credencial)
    }
    fetch('/api/deletar',options)
    alert("Usuário deletado com sucesso!");
    location.reload();
}

function verificador(email ,nome, idade){

    if(nome == ""  || idade == ""){
        return alert("Você esqueceu um campo vazio, favor verificar");
    }else if(idade < 5 || idade > 99){
        return alert("A idade permitida é entre 5 e 99 anos");
    }else{
        return atualizar_valores(email, nome, idade)();
    }
}
function isNumber(n) {
    return !isNaN(parseInt(n)) && isFinite(n);
}
function update(pega_id){

    let update_nome = prompt("Digite o novo valor do nome:");
    let update_idade = parseInt(prompt("Digite o novo valor da idade:"));   
    let update_email = lista_deletar[pega_id];

     if(update_nome == ""  || update_idade == ""){
        return alert("Você esqueceu de preencher um campo, favor verificar");
    }else if(parseInt(update_idade) < 5 || parseInt(update_idade) > 99){
        return alert("A idade permitida é entre 5 e 99 anos");
    }else if(isNumber(`${update_idade}`) == false ){
        return alert("Apenas numeros inteiros");
    }else{
        atualizar_valores(update_email, update_nome, update_idade);
        location.reload()
    } 
}

function atualizar_valores(email, nome, idade){

    const credenciais = { 
        script_nome: nome,
        script_idade: idade,
        script_email: email
    }
    options = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(credenciais)
    }
    fetch('/api/update',options)
}




// ---- Darkmode ---- // 
let darkmode = document.getElementById('darkmode');

function dark_theme(){
    document.body.classList.toggle("dark");
}
