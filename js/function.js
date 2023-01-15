// Obtém o elemento HTML do botão pelo seu ID (nesse caso é o botão de pesquisar)
const botao_pesq = document.getElementById('botao_pesq');
// Obtem o elemento HTML do botão pelo seu ID (nesse caso é o botão de download)
const botao_download = document.getElementById('botao_download');
// Obtém o elemento HTML do input de link pelo seu ID
const linkInput = document.getElementById('link');
// Obtém o elemento HTML do input de título pelo seu ID
const tituloInput = document.getElementById('titulo');
// Obtém o elemento HTML do radio button de tipo de download
const typeInput = document.getElementsByName('type');

// Adiciona um evento de clique ao botão
botao_pesq.addEventListener('click', () => {
// Obtém o valor do input de link
const link = linkInput.value;
// Separa o ID do vídeo usando o método split
const videoId = link.split('v=')[1];
// Define a chave API
const apiKey = 'YOUR_API_KEY'
// Constrói a URL da API do YouTube com o ID do vídeo e a chave API
const url = https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey};

// Faz uma chamada à API usando o método fetch
fetch(url)
// Transforma a resposta em JSON
.then(response => response.json())
    // Obtém o título do vídeo e atualiza o valor do input de título
    .then(data => {
      const titulo = data.items[0].snippet.title;
      tituloInput.value = titulo;
    });
});

// parte download
// adiciona o evendo do botão de download
botao_download.addEventListener("click", async function(){
  // pega o valor do input de link
  const link = linkInput.value;
  // pega o valor do tipo de download
  let type = "";
  for (let i = 0; i < typeInput.length; i++) {
    if (typeInput[i].checked) {
        type = typeInput[i].value;
        break;
    }
  }
  // cria um objeto FormData para armazenar os dados
  const formData = new FormData();
  // adiciona o link e o tipo ao objeto FormData
  formData.append("link", link);
  formData.append("type", type);

  // faz uma solicitação POST para o servidor
  const response = await fetch("http://localhost:5500/download", {
     botao_download.addEventListener("click", async function(){
  // pega o valor do input de link
  const link = linkInput.value;
  // pega o valor do radio button selecionado
  const type = document.querySelector('input[name="type"]:checked').value;

  // cria um objeto FormData para armazenar os dados
  const formData = new FormData();
  // adiciona o link e o type ao objeto FormData
  formData.append("link", link);
  formData.append("type", type);

// faz uma solicitação POST para o servidor
const response = await fetch("http://localhost:5500/download", {
  method: "POST",
  body: formData
  });

if (response.status === 200) {
// pega o texto da resposta e exibe-o
  const responseText = await response.text();
  console.log(responseText);
  } 
  else {
  alert("Ocorreu um erro ao fazer o download, por favor tente novamente mais tarde.");
        }
  });