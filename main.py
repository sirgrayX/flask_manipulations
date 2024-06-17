from flask import Flask

# инициализация приложения Flask
app = Flask(__name__)

@app.route("/")
def main_page(environ, start_response):
    return ["hello world".encode('utf-8')]



# обработка ошибок
@app.errorhandler(404)
def page_not_found(e):
    return "Страница не найдена"
    
@app.errorhandler(500)
def page_not_found(e):
    return "Неправильный URL"