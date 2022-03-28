let nome_display = document.getElementById('nome_html');
let idade_display = document.getElementById('idade_html');
let email_display = document.getElementById('email_html');
let alerta_que_some = document.getElementById('alerta_div');


function isNumber(n) {
    return !isNaN(parseInt(n)) && isFinite(n);
}

function verificador(){

    if(nome_display.value == ""  || email_display.value == "" || idade_display.value == ""){
        return alert("Você esqueceu um campo vazio, favor verificar");
    }else if(idade_display.value < 5 || idade_display.value > 99){
        return alert("A idade permitida é entre 5 e 99 anos");
    }else if(isNumber(`${idade_display.value}`) == false || idade_display.value % 1 !== 0){
        return alert("Apenas numeros inteiros");
    }else{
        return pega_valores();
    }
}

async function pega_valores(){

    const credenciais = { 
        script_nome: nome_display.value,
        script_idade: idade_display.value,
        script_email: email_display.value
    }
    options = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(credenciais)
    }
    fetch('/api/cadastramento',options)
    document.getElementById('nome_html').value = "";
    document.getElementById('idade_html').value = "";
    document.getElementById('email_html').value = ""; 
   
    apagar_alerta();
}

function apagar_alerta(){

    let alerta_proprio = (`<div class="alerta_filho"> Pessoa cadastrada com sucesso !</div>`);

    alerta_que_some.insertAdjacentHTML('afterbegin', alerta_proprio);

    let filho = document.querySelector('.alerta_filho');
    setTimeout(() => {
        alerta_que_some.removeChild(filho);
    },3500) 
}

// ---- Darkmode ---- // 
let darkmode = document.getElementById('darkmode');

function dark_theme(){
    document.body.classList.toggle("dark");
}
    