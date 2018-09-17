
const botao = document.querySelector(".transacao__button")

botao.addEventListener("click", function(evento) {
  evento.preventDefault();
//   console.log ("shshdh")

  const tabela = document.querySelector(".extrato__table");
//   console.log("tabela");

    const inputNome = document.getElementById("transacaoInputName"); 
    const inputValor = document.getElementById("transacaoInputMoney");
    const inputData = document.getElementById("transacaoInputDate");

  const linha = document.createElement("tr");  
 
//cria colunas
  const colunaNome = document.createElement("td");  
  const colunaNometexto= document.createTextNode(inputNome.value);
  
  const colunaValor = document.createElement("td");   
  const colunaValortexto = document.createTextNode(inputValor.value); 

  const colunaData = document.createElement("td");   
  const colunaDatatexto = document.createTextNode(inputData.value);

 
//inserir colunas na linha 
  linha.appendChild(colunaNome);
  linha.appendChild(colunaValor);

  linha.appendChild(colunaData);
  colunaNome.appendChild(colunaNometexto);
  colunaValor.appendChild(colunaValortexto);
  colunaData.appendChild(colunaDatatexto);
//adicionar linha a tabela
  tabela.appendChild(linha);

  

//   const resposta = document.createElement("span"); 
//   const respostaMensagem = document.createTextNode("Email cadastrado com sucesso!");

//   resposta.appendChild(respostaMensagem);
//   const loginForm = document.querySelector(".login__form");
//   loginForm.insertBefore(resposta, loginForm.childNodes[0]);
  

  
});