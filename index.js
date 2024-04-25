function calcularConta(){
    const pegaValorConta = document.getElementById("valor-contaa");
    const pegaValorTaxa = document.getElementById("taxa-select");
    const pegaQuantidadePessoa = document.getElementById("pagantes-select");
    const calcValueF = 
    (parseInt(valor-conta.value) + parseInt(taxa-select.value)) / parseInt(pagantes-select.value)
   
    const resultado = document.getElementById("resultado")
    resultado.innerHTML = "O valor total da sua compra com a taxa é R$ " +calcValueF  
}

function formEvent(){
  const form = document.getElementById("form")
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    calcularConta()
  })
}