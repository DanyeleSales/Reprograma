const inputTwuit = document.getElementById("tweetComposerInput")
const button = document.querySelector(".tweet-composer__button")

button.addEventListener("click", function (event) {
    event.preventDefault();

    const div = document.createElement("div")
    div.className = "tweets-timeline__box"

    const header = document.createElement("div");
    header.className = "tweets-timeline__header"
    header.innerHTML = "";

    const name = document.createElement("span");
    name.className = "tweets-timeline__name"
    name.innerHTML = "Dany";

    const userName = document.createElement("span");
    userName.className = "tweets-timeline__username"
    userName.innerHTML = " @Danysales";


     const footer = document.createElement("div");
     footer.className = "tweets-timeline__delete-button"
     footer.innerHTML = `<button class = "tweets-timeline__delete-button">Excluir</button>`
     
    header.appendChild(name)
    header.appendChild(userName)
    

    const newTweet = document.createElement("p");
    newTweet.innerHTML = inputTwuit.value;

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
   

    inputTwuit.value = null;

})


//newTweet.className = "tweets-timeline__box";