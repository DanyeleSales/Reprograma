const inputTweet = document.getElementById("tweetComposerInput")
const button = document.querySelector(".tweet-composer__button")

button.addEventListener("click", function (event) {
    event.preventDefault();

    const date = new Date ();
    const month = date.toLocaleString("pt-br", {month: "short"})
    const day = date.getDate();

    const dateHTML = document.createElement("span");
    dateHTML.className = "tweets-timeline__username"
    dateHTML.innerHTML = ` ${day} de ${month}`;

    const div = document.createElement("div");
    div.className = "tweets-timeline__box"

    const header = document.createElement("div");
    header.className = "tweets-timeline__header"
    header.innerHTML = "";

    const name = document.createElement("span");
    name.className = "tweets-timeline__name"
    name.innerHTML = "Dany";

    const userName = document.createElement("span");
    userName.className = "tweets-timeline__username"
    userName.innerHTML = " @Danyeelsales ";

    const footer = document.createElement("div");
    footer.className = "tweets-timeline__delete-button"
    footer.innerHTML = `<button class = "tweets-timeline__delete-button">Excluir</button>`
     
    header.appendChild(name)
    header.appendChild(userName)
    header.appendChild(dateHTML)

    const newTweet = document.createElement("p");
    newTweet.innerHTML = inputTweet.value;

    div.appendChild(header)
    div.appendChild(newTweet)
    div.appendChild(footer)

    const tweetsTimeLine = document.querySelector(".tweets-timeline");
    tweetsTimeLine.insertBefore(div, tweetsTimeLine.childNodes[0]);

    const botaoExcluir = document.querySelector(".tweets-timeline__delete-button");
    botaoExcluir.addEventListener("click", function(evento){
        evento.preventDefault();
        div.remove();
    })
   
    inputTweet.value = null;

})

inputTweet.addEventListener("keyup", function (evento) {
    evento.preventDefault();
    const textBox = this;
    const maxLength = 280;
    const count = document.getElementById("tweetComposerCounter");

    count.innerHTML = maxLength-textBox.value.length;

    if (count.innerHTML <= 15){
        count.style.color = `red`;
    }
    else {
        count.style.color = "white"
    }

    if(count.innerHTML < 0 ){
        button.disabled = true;
    }
    else{
        button.disabled = false;
    }
    
})