# Youtube Downloader Html

> Status: Em desenvolvimento

## Objetivo

Construção de um site que vise facilitar o download de vídeos do youtube de forma mais visualmente intuitiva e atrativa.<br>
Já fiz um script em python que faz download de vídeo e audio<br>
Como aprendizado, gostaria que essa idéia saísse do terminal e se transformasse numa página web.<br>
> Caso tenha interesse e deseje ver o projeto rodando em um ternimal python:<br>
> <a href = "https://github.com/JhonatanLop/Youtube-Download" title="Youtube Downloader Python Terminal">
    Youtube Downloader GitHub
    </a>

Para isso, prentendo usar as seguintes tecnologias:<br>
> <img align="center" alt="Python" height="40" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg">
> <img align="center" alt="HTML" height="40" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
> <img align="center" alt="CSS" height="40" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
> <img align="center" alt="Javascript" height="40" width="50" src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg">

Para o desenho do site:<br>
> <img alt="API-Csharp" height="40" width="50" src="https://api.iconify.design/ph/figma-logo-light.svg?color=%23ff4000&width=40&height=50"/>

<!-- ## Link para o site

### <a href = "http://127.0.0.1:5500/index.html" title="Youtube Downloader"> ***Youtube Downloader*** </a>

Caso o link não esteja funcionando, entre em contato.<br>
<a href="mailto:jhooliveira.lopes@gmail.com?subject=Site apresenta mau funcionamento" title="Você será redirecionado para uma página para contatar o suporte">Envie um e-mail para o suporte</a> -->

## Design no Figma:
<img align="center" alt="Projeto no Figma" height="800px" width="auto" src="https://imgcloud.s3.us-east-1.wasabisys.com/6jq4iiWgdw.png">


## Estado atual do projeto:
<img align="center" alt="Youtube Downloader" height="800px" width="auto" src="https://imgcloud.s3.us-east-1.wasabisys.com/Hw4bqrk7wP.png">

> Todos os componetens já estão posicionados e as funções foram criadas.<br>
> Alguns ajustes ainda devem ser feitos para o pleno funcionamento da aplicação
> 

O botão já está funcionando. A função que retorna o titulo do vídeo já existe e funciona perfeitamente bem.<br>

> Porém, caso você baixe, o site não irá funcionar, pois a função que existe dentro do botão (no script em javascript), precisa de uma chave de api do google.<br>
> Criei uma especificamente para esse projeto, mas não posso compartilha-la publicamente.<br>

<p>
Você vai precisar inserir sua própria API Key do YouTube no lugar de "YOUR_API_KEY". Você pode obter uma API Key do YouTube seguindo estas etapas:
</p>

1. Vá para o console de desenvolvedor do Google: https://console.developers.google.com/
2. Clique em "Selecionar um projeto" e crie um novo projeto
3. Clique em "Habilitar APIs e serviços"
4. Busque por "YouTube Data API" e selecione a opção "YouTube Data API v3"
5. Clique em "Habilitar"
6. Clique em "Credenciais" na barra lateral esquerda
7. Clique em "Criar credenciais" e selecione "Chave da API"
8. Selecione "Server key" como o tipo de chave e clique em "Criar"
9. Copie a chave gerada e cole-a no código HTML no lugar de "YOUR_API_KEY"
