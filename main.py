from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def main_page():
    return render_template('main.html')

@app.route("/memo")
def get_memo():
    return render_template('memo.html')

@app.route("/questionnaire")
def start_questionnaire():
    return render_template('questionnaire.html')

@app.errorhandler(404)
def page_not_found(e):
    return "Страница не найдена"

@app.errorhandler(500)
def server_error(e):
    return "Неправильный URL"

if __name__ == '__main__':
    app.run(debug=True)