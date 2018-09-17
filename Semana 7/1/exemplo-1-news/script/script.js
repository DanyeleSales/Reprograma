//const titulo = document.getElementById("formTitle");
//const titulo2 = document.querySelector("News_title");
//console.log(titulo)
//console.log(titulo2)
//alert("titulo")

// const input = document.getElementById("newsInputEmail"); 
// const botao = document.querySelector(".news__button");

// botao.addEventListener("click", function (evento) {
//   evento.preventDefault();
//   const email = input.value;
 
//   alert (`Email ${email} foi cadastrado com sucesso!`);

  
// });

const botao = document.querySelector(".news__button")

botao.addEventListener("click", function(evento) {
  evento.preventDefault();

  const resposta = document.createElement("span"); 
  const respostaMensagem = document.createTextNode("Email cadastrado com sucesso!");

  resposta.appendChild(respostaMensagem);
  const newsForm = document.querySelector(".news__form");
 newsForm.insertBefore(resposta, newsForm.childNodes[0]);
  

  
});




const botao = document.querySelector(".login__button")

botao.addEventListener("click", function(evento) {
  evento.preventDefault();
  console.log ("shshdh")

  const resposta = document.createElement("span"); 
  const respostaMensagem = document.createTextNode("Email cadastrado com sucesso!");

  resposta.appendChild(respostaMensagem);
  const loginForm = document.querySelector(".login__form");
  loginForm.insertBefore(resposta, loginForm.childNodes[0]);
  

  
});