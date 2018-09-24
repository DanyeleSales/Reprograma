
const botaoExcluir = document.querySelector(".select__button");
const inputArea = document.getElementById("selectInputArea")

botaoExcluir.addEventListener("click", function(events){
    
   events.preventDefault();

   inputArea[inputArea.selectedIndex].remove();

})