let nome_display = document.getElementById('nome_html');
let idade_display = document.getElementById('idade_html');
let email_display = document.getElementById('email_html');

function pega_valores(){

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
    fetch('http://localhost:5000/api/cadastramento',options)
    document.getElementById('nome_html').value = "";
    document.getElementById('idade_html').value = "";
    document.getElementById('email_html').value = "";   
}
