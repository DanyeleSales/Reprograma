const botao = document.querySelector(".feedback__button")

const inputFeed = document.getElementById("feedbackInputMessage");

botao.addEventListener("click", function(evento) {
  evento.preventDefault();
  console.log ("shshdh")

  const feed = document.createElement("p");
  const feedTexto = document.createTextNode(inputFeed.value)

  feed.appendChild(feedTexto);

  const feedForm = document.querySelector(".testimonials");
  feedForm.appendChild(feedTexto);
})

