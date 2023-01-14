from flask import Flask, request
from pytube import YouTube

# cria um objeto Flask
app = Flask(__name__)

# define o endpoint '/download' com o método POST
@app.route('/download', methods=['POST'])
def download():
    # pega os valores do formulário enviado pelo javascript
    link = request.form['link']
    resolution = request.form['resolution']
    type = request.form['type']
    try:
        # cria um objeto YouTube com o link
        video = YouTube(link)
        # verifica a resolução escolhida e seleciona o stream correspondente
        video = video.streams.get_highest_resolution()
        # verifica o tipo escolhido e filtra somente o audio, caso seja escolhido
        if type=='audio':
            video = video.filter(only_audio=True)
        # faz o download do video
        video.download()
        return "Download concluído com sucesso!"
    except Exception as e:
        # caso ocorra algum erro, retorna uma mensagem de erro
        return "Erro, algo aconteceu. Verifique seu link!"+str(e)

# inicia o servidor
if __name__ == '__main__':
    app.run(debug=True)
