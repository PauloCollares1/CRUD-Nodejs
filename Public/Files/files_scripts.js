const lista_display = document.getElementById('lista');


var id = 0;
var lista_deletar=[];

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
                            <button id='`+ id +`' onclick='tela_update(${id})' value='`+item._id+`'> Editar </button>
                        </div>  
                    </div>`
                )

                lista_deletar.push(item.email);

                id = id + 1;

                lista_display.insertAdjacentHTML('beforeend', add_url) 
            }) 
        })
} 

function mostrar_lista(){  
    return entrega_valores();
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
}

function tela_update(pega_id){

    update(pega_id);
    const URL="https://crud-in-node.herokuapp.com/update";
    let meu_popup = window.open(URL, 'janela', 'width=660, height=510, top=100, left=699,scrollbars=yes, status=no, toolbar=no, location=no, directories=no, menubar=no,resizable=no, fullscreen=no')
}

function update(pega_id){
    var email_storage = lista_deletar[pega_id]
    localStorage.setItem('emailKey', email_storage);
}



