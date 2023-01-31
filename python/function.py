from flask import Flask, request
from pytube import YouTube
from flask_cors import CORS


# cria um objeto Flask
app = Flask(__name__)
CORS(app)

# define o endpoint '/download' com o método POST
@app.route('/download/python', methods=['POST'])
def download(link):
    # pega os valores do formulário enviado pelo javascript
    link = request.form['link']
    type = request.form['type']
    try:
        # cria um objeto YouTube com o link
        video = YouTube(link)
        # pega a melhor resolução possível
        video = video.streams.get_highest_resolution()
        # verifica o tipo escolhido e filtra somente o audio, caso seja escolhido
        if type=='audio':
            video = video.filter(only_audio=True)
            video.download()
        else:
            video.download()
        # faz o download do video
        return "Download concluído com sucesso!"
    except Exception as e:
        # caso ocorra algum erro, retorna uma mensagem de erro
        return "Erro, algo aconteceu. Verifique seu link!"+str(e)

print(app.url_map)

# inicia o servidor
if __name__ == '__main__':
    # definindo a porta
    app.run(debug=True, port=5500)