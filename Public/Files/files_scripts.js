const lista_display = document.getElementById('lista');


var id = 0;
var teste=[];

function entrega_valores(){

    fetch('http://localhost:5000/api/lista')
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
                            `<button id='`+ id +`' onclick='teste2(${id})' value='`+item._id+`'> Deletar </button>
                            <button id='`+ id +`' onclick='teste2(${id})' value='`+item._id+`'> Editar </button>
                        </div>  
                    </div>`)
                teste.push(item.email);
                id = id + 1;
                lista_display.insertAdjacentHTML('beforeend', add_url) 
            }) 
        })

    
        
} 

function mostrar_lista(){  
    return entrega_valores();
}

function teste2(pega_id){
    
    const credencial = {
        pegaemail : teste[pega_id]
    }

    options = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(credencial)
    }
    fetch('http://localhost:5000/api/deletar',options)
} 