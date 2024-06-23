const questions = [
    {
        question: "Какой из ответов ниже выберет большинство людей?",
        options: [
            ["Выберите этот вариант", -1], 
            ["Не выбирайте этот вариант", 0], 
            ["Решать вам", 1]
        ]
    },

    {
        question: "Руководитель говорит, что вакансии нужно закрыть до конца недели, иначе вы сорвете план продаж в этом месяце. Ваш ответ?",
        options: [
            ["Я понимаю. Буду стараться", -1],
            ["Мы не договаривались с вами на такие условия. Я постараюсь ускориться, но обещаний не даю.", 1],
            ["А причём тут план продаж? Его и без новичков могут выполнить.", 0]
        ]
    },

    {
        question: "Коллега просит вас доделать за него отчет, потому что ему срочно нужно навестить больную бабушку. Ваш ответ?",
        options: [
            ["Сочувствую. Что именно нужно доделать?", -1],
            ["Нет, сожалею. У меня сейчас много своей работы.", 1],
            ["Ты действительно хочешь, чтобы я поставил(-а) себя под удар, делая твою работу вместо своей?", 0]
        ]
    },

    {
        question: "Начальник: «Вы всегда уходите с работы вовремя и на прошлой неделе отказались выйти в выходной, чтобы закрыть хвосты… Не о таком сотруднике я мечтал!» Вы:",
        options: [
            ["Простите, Иван Иваны! Я исправлюсь.", -1],
            ["«Да, я не готов(-а) работать сверхурочно. А на субботу у меня планы. И в следующий раз могу отказаться от переработок — я за баланс».", 1],
            ["«Иван Иваныч, какие конкретно замечания у вас есть к моей работе?»", 0]
        ]
    },

    {
        question: "Подруга зовет вас на концерт и намекает, что ей очень-очень скучно идти одной… А вы не хотите. Как откажетесь?",
        options: [
            ["«Прости, я что-то плохо себя чувствую».", -1],
            ["«Прости, но я не хочу идти на этот концерт».", 1],
            ["«Уверена, ты найдешь себе другого компаньона».", 0]
        ]
    },

    {
        question: "Соискатель на собеседовании: «Скажу вам по секрету, давно мечтал о работе в вашей компании — и не хотел бы соглашаться на предложение от конкурентов». Вы: ",
        options: [
            ["«О, здорово, что вы такой мотивированный кандидат! Нам такие нужны».", -1],
            ["«Ваше право соглашаться на то, что вы хотите. Поясните, почему мечтаете о работе именно у нас?»", 0],
            ["«Понятно. Давайте вернемся к вашим достижениям на прежней работе».", 1]
        ]
    },
    
    {
        question: "Сотрудник обсуждает с вами перспективы повышения: «Как профессионал, имеющий огромный опыт работы с людьми, вы согласитесь: мне давно пора занимать более ответственную должность».",
        options: [
            ["«Ну да, опыт большой — и я вас понимаю: вы переросли свою работу».", -1],
            ["«Спасибо. И именно мой опыт подсказывает, что нельзя обещать повышение, когда нет вакансии».", 0],
            ["«Спасибо за такие слова. Но я не могу с вами согласиться: ваши показатели работы за последнее полугодие не назовешь идеальными…»", 1]
        ]
    },
    
    {
        question: "Коллега возмущается: «Черная неблагодарность! Я же тебе недавно помог! Тебе что, сложно провести онбординг вместо меня?»",
        options: [
            ["«Ну ладно, сделаю… Только больше мне не помогай, я легко справляюсь с профилями».", -1],
            ["«Ты что, с самого начала это спланировал(-а)?»", 0],
            ["«Да, мне сейчас сложно провести онбординг. Кроме того, это твоя задача».", 1]
        ]
    },

    {
        question: "Руководитель: «Ну ты понимаешь, в отделе еще два претендента на повышение… Вот если бы вы согласились на меньшую зарплату, со временем я бы убедил руководство повысить ее такому эффективному сотруднику». Вы:",
        options: [
            ["«Ну, если это повысит мою конкурентоспособность…»", -1],
            ["«Вы знаете, что я заслуживаю зарплату, которую прошу. Готов(-а) это аргументировать…»", 1],
            ["«Иван Иваныч, вы хотите получить премию за экономию на моей зарплате?»", 0]
        ]
    },

    {
        question: "Коллега сокрушается: «У меня никогда не получится делать такие крутые презентации, как у тебя! А завтра к клиенту идти… Эх!» Ваша реакция?",
        options: [
            ["«Ну давай тогда вместе посмотрим твою презентацию».", -1],
            ["«Спасибо, мне приятно». (Поможете, только если коллега прямо попросит о помощи и у вас есть возможность его/ее поддержать.)", 1],
            ["«Ну, у меня никогда не получится так блестяще выступать на защитах! На презентацию никто и не посмотрит».", 0]
        ]
    }
];

let currentQuestionIndex = 0;
const results = [];
const questionElement = document.querySelector('.question');
const optionsElement = document.querySelector('.options');
const resultElement = document.querySelector('.result');
const resultTitleElement = document.querySelector('.result-title');
const resultContentElement = document.querySelector('.result-content');
const nextButton = document.getElementById('next-btn');
const finishButton = document.getElementById('finish-btn');


function loadQuestion() {
    nextButton.style.display = 'none';
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option[0];
        optionElement.id = option[1];
        optionsElement.appendChild(optionElement);
    });
}


function checkAnswer() {
    const selectedOption = optionsElement.querySelector('.option.selected');
    if (selectedOption && currentQuestionIndex < questions.length-1) {
        nextButton.style.display = 'block';
    } else if (selectedOption && currentQuestionIndex == questions.length-1){
        finishButton.style.display = 'block';
    } else {
        resultElement.textContent = "Выберите вариант ответа!";
    }
}

function findMaxField(obj) {
    let maxField = null;
    let maxValue = Number.MIN_SAFE_INTEGER;
  
    for (const field in obj) {
      if (typeof obj[field] === 'number') {
        if (obj[field] > maxValue) {
          maxValue = obj[field];
          maxField = field;
        }
      }
    }
  
    return maxField;
  }

// загрузка первого вопроса
loadQuestion(); 

// обработка кликов по вариантам
optionsElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('option')) {
        // удаление класса 'selected' у предыдущего выбранного варианта
        optionsElement.querySelectorAll('.option').forEach(option => {
            option.classList.remove('selected')
            option.style.backgroundColor = '';
        });
        // добавление класса 'selected' к выбранному варианту
        event.target.classList.add('selected');
        // добавление стиля для темнения при клике
        event.target.style.backgroundColor = '#ddd'; // Измените цвет на желаемый
        checkAnswer();
    }
});

nextButton.addEventListener('click', (event) => {
    const selectedOption = optionsElement.querySelector('.option.selected');
    const userAnswer = selectedOption.id;
    results.push(userAnswer);
    nextButton.style.display = 'block';
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    }else {
        // конец викторины
        finishButton.style.display = 'block';
    }
});

finishButton.addEventListener('click', (event) => {
    const selectedOption = optionsElement.querySelector('.option.selected');
    const userAnswer = selectedOption.id;
    results.push(userAnswer);
    optionsElement.innerHTML = '';
    questionElement.innerHTML = '';
    finishButton.style.display = 'none'

    const res = results.reduce((acc, i) => {
        if (acc.hasOwnProperty(i)) {
          acc[i] += 1;
        } else {
          acc[i] = 1;
        }
        return acc;
      },{})
    let result = Number(findMaxField(res));
    resultElement.style.display = 'block';
    if (result > 0){
        resultTitleElement.textContent = "Манипулировать вами почти невозможно";
        resultContentElement.innerHTML = "<br><p>Вы раскусываете манипуляции мгновенно и поддаетесь на них, только если сами хотите этого. <ul>Удержитесь от двух вещей:</ul> <li>использования своих талантов, чтобы манипулировать другими;</li> <li>высокомерия.Автор книги «Я манипулирую тобой» Никита Непряхин утверждает: «Если вам кажется, что вами никто не манипулирует, то вы в руках профессионала».</li><br><br> <b>P.S.</b> Помните первый вопрос теста? Вопреки стереотипам о том, что в людях силен дух противоречия, три человека из пяти послушно выберут ответ «Выберите этот вариант». Такая ирония!</p>"
        
    } else if (result == 0){
        resultTitleElement.textContent = "Вы склонны поддаваться";
        resultContentElement.innerHTML = "<br><p>При хорошей погоде Вы способны распознавать чужие попытки управлять Вами. Однако не всегда успешно, а если и замечаете, то пытаетесь неаккуратно защититься.</p><br><br> "
    } else {
        resultTitleElement.textContent = "Вы совершенно не умеете сопротивляться";
        resultContentElement.innerHTML = "<p>Даже школьник способен вынудить вас сделать то, чего вы не хотите. Возможно, этим успешно пользуются дети, родители, супруг/супруга, заклятые друзья, начальник, подчиненные или кандидаты на собеседованиях.<br><br>Не расстраивайтесь! Причина — в вашей доброте, прямолинейности, открытости миру, в желании видеть хорошее… и в нехватке информации. Предлагаем почитать книгу «Психология влияния» Роберта Чалдини или «Я манипулирую тобой» Никиты Непряхина, чтобы чужие манипуляции вам не вредили.</p>";
    }
});



