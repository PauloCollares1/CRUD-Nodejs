let nome_display = document.getElementById('nome_html');
let idade_display = document.getElementById('idade_html');
function verificador(){

    if(nome_display.value == "" || idade_display.value == ""){
        return alert("Você esqueceu um campo vazio, favor verificar");
    }
    else{
        return pega_valores();
    }
}

function pega_valores(){

    const credenciais = { 
        script_nome: nome_display.value,
        script_idade: idade_display.value,
        script_email: localStorage.getItem('emailKey')
    }
    options = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(credenciais)
    }
    fetch('/api/update',options)
    document.getElementById('nome_html').value = "";
    document.getElementById('idade_html').value = "";
    alert(`${localStorage.getItem('emailKey')} foi atualizado(a) com sucesso!`);
    window.close();
}

