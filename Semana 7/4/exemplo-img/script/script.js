const links = document.querySelector(".gallery__nav");
const imagem = document.querySelector(".gallery__image");
const titulo = document.querySelector(".gallery__caption");

for(let i = 0; i< links.children.length; i++){
    const filho = links.children[i];

    filho.addEventListener("click", function(evento){
        evento.preventDefault();
        const img = this.dataset.image;
        const legenda = this.dataset.title;
        imagem.src = img;
        titulo.innerHTML = legenda;
    })
}