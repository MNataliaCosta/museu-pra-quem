var botao = document.querySelector('button');

function validarEmail(){
    var entradaEmail = document.getElementsByClassName('msgemail')[0].value;
    var padrao = document.getElementsByClassName('msgemail')[0].pattern;
    var alertaInvalido = document.getElementsByClassName('emailInvalido')[0];

    if(entradaEmail.match(padrao)){
        alertaInvalido.innerHTML = '';
        setTimeout(function() {
            alert('Obrigado por entrar em contato! Retornaremos em breve.');
        }, 300);
    }
    else {
        alertaInvalido.innerHTML = 'E-mail inválido.';
    }
}

botao.onclick = validarEmail;
