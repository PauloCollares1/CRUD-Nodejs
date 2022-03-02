let nome_display = document.getElementById('nome_html');
let idade_display = document.getElementById('idade_html');
let email_display = document.getElementById('email_html');
let lista_display = document.getElementById('lista_html');


function verificador(){

    if(nome_display.value == "" || idade_display.value == "" ||email_display.value == ""){
        return alert("Você esqueceu um campo vazio, favor verificar");
    }
    else if(nome_display.value < "3" || idade_display.value > "99" || idade_display.value < "1"){
        return alert("Ou o nome ou a idade possuem a quantidade minima ou máxima permitida, favor verificar");
    }
    else if(nome_display.value > "99" || email_display.value < "5" || email_display.value > "99"){
        return alert("Ou o nome ou a idade ou o email possuem a quantidade minima ou máxima permitida, favor verificar");
    }
    else{
        return pega_valores();
    }
}


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



