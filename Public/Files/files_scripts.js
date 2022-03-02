const lista_display = document.getElementById('lista');



function entrega_valores(){

    fetch('http://localhost:5000/api/lista')
        .then(response => response.json())
        .then(data =>{
            if(data.length <= 0){return alert("A lista não possui valores, favor cadastrar alguem")}
            data.map((item) => {
                const add_url =
                    `<div class="card mt-4">
                        <div class="card-header">
                            <div class="card-title"><b>Nome:</b>` + item.nome + `</div>
                        </div>
                        <div class="card-body">
                            <b>Idade:</b>` + item.idade +
                            `<b>Email:</b>` + item.email +
                            `<button id='delecao' onclick='teste2()'> Deletar </button>
                        </div>  
                    </div>`
                lista_display.insertAdjacentHTML('beforeend', add_url) 
            })  
        })
} 

function mostrar_lista(){   
    return entrega_valores();
}
function teste2(){
    return alert("DELETADO!!!");
}