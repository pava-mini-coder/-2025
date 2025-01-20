import asyncio
from flask import Flask, render_template, request, jsonify
from g4f.client import Client
from googletrans import Translator
import re

from flask import Flask, render_template

app = Flask(__name__)


@app.route("/7class-algebra")
def algebra7():
    return render_template("7class-algebra.html")

@app.route("/7class-geometry")
def geometry7():
    return render_template("7class-geometry.html")


@app.route("/8class-algebra")
def algebra8():
    return render_template("8class-algebra.html")

@app.route("/8class-geometry")
def geometry8():
    return render_template("8class-geometry.html")


@app.route("/9class-algebra")
def algebra9():
    return render_template("9class-algebra.html")

@app.route("/9class-geometry")
def geometry9():
    return render_template("9class-geometry.html")


@app.route("/10class-algebra")
def algebra10():
    return render_template("10class-algebra.html")

@app.route("/10class-geometry")
def geometry10():
    return render_template("10class-geometry.html")



client = Client()
translator = Translator()

def format_response(response_text):
    """Форматує текст GPT у читабельний вигляд."""
    formatted_text = response_text.replace("\n", "<br>")
    return formatted_text

def clean_text(text):

    text = re.sub(r'\\frac|\\quad|\\cdot', '', text)
    text = re.sub(r'[{}]', '', text)
    text = text.replace(r'\pm', '±')
    text = text.replace(r'\sqrt', '√')
    text = re.sub(r'\\[\(\)\[\]]', '', text)
    text = re.sub(r'\s+', ' ', text).strip()
    text = text.replace('\n', '<br>')
    text = re.sub(r'Du musst das Kästchen anklicken!', '', text)
    

    text = re.sub(r"\*\*(.*?)\*\*", r"<b>\1</b>", text)
    
    return text



topics = {
    "7": {
        "Алгебра": [
            "Одночлени та многочлени",
            "Дії з многочленами",
            "Формули скороченого множення",
            "Розв'язування рівнянь",
            "Розв'язування задач за допомогою рівнянь",
            "Поняття функції",
            "Лінійна функція, її графік і властивості"
        ],
        "Геометрія": [
            "Точки, прямі, промені, кути",
            "Вимірювання відрізків і кутів",
            "Види трикутників",
            "Ознаки рівності трикутників",
            "Паралельні прямі та кути: властивості та ознаки"
        ],
    },
    "8": {
        "Алгебра": [
            "Дробові вирази, їх спрощення",
            "Дії з дробовими виразами",
            "Арифметичний квадратний корінь",
            "Дії з ірраціональними числами",
            "Квадратична функція, її графік і властивості"
        ],
        "Геометрія": [
            "Паралелограми, трапеції, ромби",
            "Теорема Фалеса",
            "Ознаки подібності трикутників",
            "Теорема Піфагора та її застосування"
        ],
    },
    "9": {
        "Алгебра": [
            "Арифметична та геометрична прогресії",
            "Основні поняття ймовірності",
            "Квадратні нерівності",
            "Системи рівнянь другого ступеня"
        ],
        "Геометрія": [
            "Дотичні, хорди",
            "Правильні многокутники",
            "Вписані та описані фігури",
            "Основи векторної алгебри"
        ],
    },
    "10": {
        "Алгебра": [
            "Степеневі, показникові та логарифмічні функції",
            "Розв'язування рівнянь і нерівностей",
            "Основні тригонометричні функції",
            "Тригонометричні рівняння та нерівності"
        ],
        "Геометрія": [
            "Циліндр, конус, куля",
            "Обчислення площ і об'ємів",
            "Точки, вектори в просторі",
            "Рівняння площини та прямої",
        ],
    },
}

@app.route("/")
def home():
    
    return render_template("index.html", topics=topics)

@app.route("/class/<class_id>/<subject>/<topic>")
def topic_page(class_id, subject, topic):
    
    if class_id not in topics or subject not in topics[class_id]:
        return "Тема не знайдена.", 404
    return render_template(
        "topic.html",
        class_id=class_id,
        subject=subject,
        topic=topic
    )

@app.route("/ask", methods=["POST"])
def ask():
    
    user_message = request.json.get("message", "")
    topic_context = request.json.get("topic", "")

    user_message_with_context = (
        f"Тема: {topic_context}. Заборонено відповідати не по темі. "
        f"Якщо запит не стосується теми {topic_context}, скажіть, що це не по темі. "
        f"Запит: {user_message}"
    )

    try:
        # Запит до GPT
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": user_message_with_context}],
        )
        response_text = response.choices[0].message.content
        cleaned_response = clean_text(response_text)

        return jsonify({"response": cleaned_response})
    except RuntimeError as e:
        print(f"Помилка: {e}")
        restart_function()

def restart_function():
    try:
        loop = asyncio.get_event_loop()
        if loop.is_closed():
            
            loop = asyncio.new_event_loop()
            asyncio.set_event_loop(loop)
        loop.run_until_complete(ask())
    except Exception as e:
        print(f"Помилка під час перезапуску: {e}")

if __name__ == "__main__":
    app.run(debug=True)


#python app.py