
 const loginButton = document.querySelector(".login__button");
 const loginModal = document.querySelector (".login-modal");

    loginButton.addEventListener("click",function(evento) {
     evento.preventDefault();
     document.querySelector(".login-modal").style.display="flex";

 })

 loginModal.addEventListener("click", function (event) {
     event.preventDefault();
     document.querySelector(".login-modal").style.display="none";
     
 })




 