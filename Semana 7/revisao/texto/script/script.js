const texto = document.querySelector(".article")
const botaoAumentar = document.querySelector(".botao__aumentar")
const botaoDiminuir = document.querySelector(".botao__diminuir")

function resizeText(multiplier) {
    if (document.body.style.fontSize == ""){
        document.body.style.fontSize = "1.0em";
    }
    document.body.style.fontSize = parseFloat(document.body.style.fontSize)+(multiplier*0.2)+ "em";
    
}
botaoAumentar.addEventListener("click", function (increase) {
   increase.preventDefault();
    resizeText(1);
   
    })

botaoDiminuir.addEventListener("click", function (decrease) {
    decrease.preventDefault();
    resizeText(-1);
    
})






