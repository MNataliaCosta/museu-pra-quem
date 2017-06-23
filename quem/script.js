//tentativa erro input email sem @
//function validarEmail(){
  // var formatoEmail = document.getElementById("email").value;
  // if (formatoEmail.checkValidity() == false){
    // alert("O email deve ter formato endereco@dominio.com[.br]");
  // }
// }

//querySelector('') pega o primeiro elemento indicado que aparece na página
// var botaoEnvio = document.getElementsByClassName("btn");

// botaoEnvio.onclick = alert('teste');
//


window.onload = function(){
  var enviar = document.getElementById("enviar");
  function change(){
    if (this.innerHTML == "Enviar") {
      this.innerHTML="Enviado";
      var nome = document.getElementById('nome');
      var email = document.getElementById('email');
      nome.value = "Nome";
      email.value = "Email";
    }
  }
  enviar.onclick = change;
}


/*
  var formatoEmail = document.forms["email"].value;
  if(email.value.includes("@"){
    console.log("email válido");
  }
  else {

  }

  getElementById('email').setCustomValidity("O email deve ter formato endereco@dominio.com[.br]");

  this.onclick = validarEmail;
}
}

/*
  function jogar(){
    var colocar;
    if(jogadas % 2 == 0){
      colocar = "X";
    }
    else {
      colocar = "O";
    }
    this.innerHTML = colocar;
    this.onclick = null;
    verificarGanhador();
    jogadas++;
  }
*/

/*tentativa limpar campos input

function limparEmail (){
  var sumir = document.getElementById('email');
  sumir.style.display === 'none';
}

*/
