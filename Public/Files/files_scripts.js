const lista_display = document.getElementById('lista');



function entrega_valores(){

    fetch('http://localhost:5000/api/lista')
        .then(response => response.json())
        .then(data =>{
            data.map((item) => {
                const add_url =
                    `<div class="card mt-4">
                        <div class="card-header">
                            <div class="card-title"><b>Nome:</b>` + item.nome + `</div>
                        </div>
                        <div class="card-body">
                            <b>Idade:</b>` + item.idade +
                            `<b>Email:</b>` + item.email +
                            `<button id='delecao'> Deletar </button>
                        </div>  
                    </div>`
                lista_display.insertAdjacentHTML('beforeend', add_url) 
            })  
        })
} 

function teste(){
    
    entrega_valores();
}
