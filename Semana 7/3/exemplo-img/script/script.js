const links = document.querySelector(".gallery__nav")
const imagem = document.querySelector(".gallery__image")


for( let i = 0;  i < links.children.length; i++){

    //console.log(links.children.length)
    const filho = links.children[i];

    filho.addEventListener("click", function(){
        const img = this.dataset.image;
        //console.log (img);
        imagem.src = img;
    })

}