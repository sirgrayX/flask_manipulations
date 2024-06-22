from flask import Flask, render_template

# инициализация приложения Flask
app = Flask(__name__)
app.app_context().push()

@app.route("/")
def main_page(environ, start_response):
    status = '200 OK'
    response_headers = [
        ('Content-type', 'text/html; charset=utf-8'),
    ]
    start_response(status, response_headers)
    return [render_template('main.html').encode('utf-8')]

# здесь будет памятка
@app.route("/memo")
def get_memo():
    
    return [render_template('memo.html').encode('utf-8')]

# здесь должна быть обработка опросника
@app.route("/questionnaire")
def start_questionnaire():
    return [bytes(render_template('questionnaire.html'), 'utf8')]

# обработка ошибок
@app.errorhandler(404)
def page_not_found(e):
    return "Страница не найдена"
    
@app.errorhandler(500)
def page_not_found(e):
    return "Неправильный URL"