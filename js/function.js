// pega o valor do input de link
var link = document.getElementById("link").value;
// pega o valor do select de resolução
var resolution = document.getElementById("resolution").value;
// pega o valor do radio button selecionado
var type = document.querySelector('input[name="type"]:checked').value;

//envia a solicitação POST para o endpoint "/download" do servidor Flask com o link, a resolução e o formato escolhido
// o método fetch envia uma requisição HTTP, neste caso é usado o método POST,
// O corpo da requisição é uma string JSON com os dados a serem enviados,
// e os headers "Content-Type" é configurado como "application/json"
fetch("/download", {
  method: "POST",
  body: JSON.stringify({link: link, resolution: resolution, type: type}),
  headers: {
    "Content-Type": "application/json"
  }
})
// espera a resposta do servidor
.then(function(response) {
  return response.text();
})
// atualiza a página com a resposta do servidor
.then(function(text) {
  document.getElementById("result").innerHTML = text;
});
