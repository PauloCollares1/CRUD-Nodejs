// Pegando os dados escritos no front
let lista_display = document.getElementById('lista');

// Construtores para a lista de cadastrados
var id = 0;
var lista_deletar=[];

// Chama a lista que tiver assim que entro na rota lista
entrega_valores();

// Cria a lista de acordo com o banco de dados
function entrega_valores(){ 

    fetch('/api/lista')
        .then(response => response.json())
        .then(data =>{
            // Esse if manda algo para o front caso a lista esteja vazia
            if(data.length <= 0){
                let sem_dados = (`<p>A lista está vazia!</p> <i class="fa-regular fa-face-sad-cry fa-2xl"></i><br> <p>clique em "Voltar" e cadastre alguem</p>`)
                lista_display.insertAdjacentHTML('beforeend', sem_dados) 
            }
            data.map((item) => {
                    let add_url = (
                        `<div class="estilo_lista2">
                            <p><b>Nome:</b>${item.nome}</p>
                            <p><b>Idade:</b>${item.idade}</p>
                            <p><b>E-mail:</b>${item.email}</p>
                                <button class="estilo_lista2_buttons_deletar" id="${id}" onclick="deletar(${id})"> Deletar </button>
                                <button class="estilo_lista2_buttons_editar" id="${id}" onclick="update(${id})"> Editar </button> 
                        </div>`
                    )
                lista_deletar.push(item.email);
                id = id + 1;
                lista_display.insertAdjacentHTML('beforeend', add_url) 
            }) 
        })
}

// Fetch para deletar uma pessoa
function deletar(pega_id){

    const credencial = {
        pegaemail : lista_deletar[pega_id]
    }
    options = {
        method: "DELETE",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(credencial)
    }
    fetch('/api/deletar',options)
    alert("Usuário deletado com sucesso!");
    location.reload();
}

// Verifico se o valor dentro do alert-prompt é numero
function isNumber(n) {
    return !isNaN(parseInt(n)) && isFinite(n);
}

// Função para editar dados do usuário
function update(pega_id){

    let update_nome = prompt(`Atualização de cadastro. Usuário(a): ${lista_deletar[pega_id]}\nDigite o novo nome:`);
    let update_idade = parseInt(prompt(`Atualização de cadastro. Usuário(a): ${lista_deletar[pega_id]}\nDigite a nova idade:`));   
    let update_email = lista_deletar[pega_id];

    if(update_nome == ""  || update_idade == ""){
        return alert("Você esqueceu de preencher um campo, favor verificar");
    }else if(update_nome.length > 30){
        return alert("Nome muito grande. máximo 30 letras");
    }else if(parseInt(update_idade) < 5 || parseInt(update_idade) > 99){
        return alert("A idade permitida é entre 5 e 99 anos");
    }else if(isNumber(`${update_idade}`) == false ){
        return alert("Apenas numeros inteiros");
    }else{
        atualizar_valores(update_email, update_nome, update_idade);
        location.reload()
    } 
}

// Fetch para editar dados lá no backend
function atualizar_valores(email, nome, idade){

    const credenciais = { 
        script_nome: nome,
        script_idade: idade,
        script_email: email
    }
    options = {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(credenciais)
    }
    fetch('/api/update',options)
}

// Alterar a classe body para a clarre body Darkmode
let darkmode = document.getElementById('darkmode');

function dark_theme(){
    document.body.classList.toggle("dark");
}
