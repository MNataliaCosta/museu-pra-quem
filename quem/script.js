
window.onload = function(){

  var botao = document.querySelector('button');

  function validarEmail(){
      var entradaEmail = document.getElementsByClassName('msgemail')[0].value;
      var padrao = document.getElementsByClassName('msgemail')[0].pattern;
      var alertaInvalido = document.getElementsByClassName('emailInvalido')[0];

      if(entradaEmail.match(padrao)){
          alertaInvalido.innerHTML = '';

          var enviar = document.getElementById("enviar");
          if (this.innerHTML == "Enviar") {
            this.innerHTML="Enviado";
            var nome = document.getElementById('nome');
            var email = document.getElementById('email');
            nome.value = "Nome";
            email.value = "Email";
          }
        
      }
      else {
          alertaInvalido.innerHTML = 'E-mail inválido.';
      }
  }
  botao.onclick = validarEmail;

}
