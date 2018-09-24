//cria o botão
const button = document.querySelector(".feedback__button")

//cria o evento do botão
button.addEventListener("click", function(evento){
    evento.preventDefault();//previne o evento padrão
   
    //Seleciona tabela
    const respostas = document.querySelector (".respostas__table")  

    //pega o input do documento
    const inputName = document.getElementById("feedbackInputName")
    const inputCidade = document.getElementById("feedbackInputMoney")
    const inputComentario = document.getElementById("feedbackInputDate")
    
    //cria linha
    const linha = document.createElement("tr")
    //cria coluna
    const colunaEmpresa =  document.createElement("td");
    //cria texto para coluna
    const colunaEmpresaTexto = document.createTextNode(inputName.value);   
    //coloca o valor do texto dentro da coluna
    colunaEmpresa.appendChild(colunaEmpresaTexto);

    //cria linha
    const colunaCidade =  document.createElement("td");
    //cria coluna
    const colunaCidadeTexto = document.createTextNode(inputCidade.value);
    //coloca o valor do texto dentro da coluna
    colunaCidade.appendChild(colunaCidadeTexto);

    //cria linha
    const colunaComentario =  document.createElement("td");
    //cria coluna
    const colunaComentarioTexto = document.createTextNode(inputComentario.value);
    //coloca o valor do texto dentro da coluna
    colunaComentario.appendChild(colunaComentarioTexto)

    //inserir colunas na linha
    linha.appendChild(colunaEmpresa);
    linha.appendChild(colunaCidade);
    linha.appendChild(colunaComentario);

    //adiciona linha a tabela
    respostas.appendChild(linha);

})