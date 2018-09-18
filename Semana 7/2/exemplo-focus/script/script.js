const inputNome = document.getElementById("cadastroInputNome");
const inputEmail = document.getElementById("cadastroInputEmail");
const inputEmailConfirm = document.getElementById("cadastroInputEmailConfirm");
const inputPassword = document.getElementById("cadastroInputPassword");
const inputPasswordConfirm = document.getElementById("cadastroInputPasswordConfirm");
const inputPhone = document.getElementById("cadastroInputPhone");
const inputArea = document.getElementById("cadastroInputArea");
const inputLevel = document.getElementsByName("level");
const button = document.querySelector(".cadastro__button");

button.addEventListener("click", function (evento) {
  evento.preventDefault();



   const optionSelect = inputArea.options 
  [inputArea.selectedIndex]

  if( optionSelect.value == "Front-End"){
      document.querySelector("body").style.backgroundColor = "blue";      
   }else if( optionSelect.value == "Back-End"){
    document.querySelector("body").style.backgroundColor = "green";      
   }else if( optionSelect.value == "UI Designer"){
    document.querySelector("body").style.backgroundColor = "red";      
   }else if( optionSelect.value == "UX Designer"){
    document.querySelector("body").style.backgroundColor = "violet";      
   }

   let radioItem;
   for( let i = 0; i < inputLevel.length; i++){
     if(inputLevel [i].cheked){
       console.log (inputLevel [i])
       radioItem = inputLevel[i]
     }
   }
   
  if(radioItem.value === "Junior"){
    console.log ("0-2 anos de experiencia")      
   }else if(radioItem.value === "Senior"){
    console.log ("2-5 anos de experiencia")      
   }else{
    console.log ("+5 anos de experiencia")       
   }



  if (inputNome.value === undefined || inputNome.value === null || inputNome.value === "" || inputNome.value === " "){
    inputNome.focus();
    return false;
  }  else if (inputEmail.value === undefined || inputEmail.value === null || inputEmail.value === "" || inputEmail.value === " ") {
    inputEmail.focus();
    return false;

  } else if (inputPassword.value === undefined || inputPassword.value === null || inputPassword.value === "" || inputPassword.value === " "|| inputPassword.value.length <8)
  {
    inputPassword.focus();  
    return false;
  }  
    else if (inputPassword.value.length <8)
    {
      inputPassword.focus();
      alert ("A senha precisa ter mais de 7 caracteres")
      return false;
  }  else if (inputPasswordConfirm.value === undefined || inputPasswordConfirm.value === null || inputPasswordConfirm.value === "" || inputPasswordConfirm.value === " " || inputPasswordConfirm.value !== inputPassword.value) {
    inputPasswordConfirm.focus();
    alert ("A senha e a confirmação de senha precisão ser iguais")
    return false;
  } else if (inputPhone.value === undefined || inputPhone === null || inputPhone.value === "" || inputPhone.value === " ")
  {
    inputPhone.focus();
    return false;
  }
 



});