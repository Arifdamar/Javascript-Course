function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

// Question Prototype
Question.prototype.checkAnswer = function (answer) {
    return this.answer === answer;
}

// Quiz Constructor
function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
}

// Quiz Prototype
Quiz.prototype.getQuestion = function () {
    return this.questions[this.questionIndex];
}

// Quiz isFinished
Quiz.prototype.isFinished = function () {
    return this.questions.length === this.questionIndex;
}

// Quiz Guess
Quiz.prototype.guess = function (answer) {
    var question = this.getQuestion();

    if (question.checkAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}

var q1 = new Question(
    "What's the best programming language?",
    ["C#", "JavaScript", "Python", "Java", "C++"],
    "JavaScript");

var q2 = new Question(
    "What's the most popular programming language?",
    ["C#", "JavaScript", "Python", "Java", "C++"],
    "JavaScript");

var q3 = new Question(
    "What's the best modern programming language?",
    ["C#", "JavaScript", "Python", "Java", "C++"],
    "Python");

var questions = [q1, q2, q3];

// Start Quiz
var quiz = new Quiz(questions);

loadQuestion();

function loadQuestion() {
    document.querySelector('#progress').innerHTML = "";
    if (quiz.isFinished()) {
        showScore();
    } else {
        var question = quiz.getQuestion();
        var choices = question.choices;
        var choiceButtons = document.querySelector('#choiceButtons');
        choiceButtons.innerHTML = '';

        document.querySelector("#question").textContent = question.text;

        for (let i = 0; i < choices.length; i++) {
            // First we need to create all the choice buttons
            choiceButtons.innerHTML += "<button id='btn" + i + "' class='btn btn-primary mr-2'><span id='choice" + i + "'>" + choices[i] + "</span></button>";
        }

        for (let i = 0; i < choices.length; i++) {
            // After creating all the choice buttons we can now select them
            // and then add onclick events
            let button = document.getElementById('btn' + i);
            button.onclick = function () {
                quiz.guess(choices[i]);
                loadQuestion();
            }
        }
        showProgress();
    }
}

function showScore() {
    var html = `<h2>Score</h2><h4>${quiz.score}</h4>`;
    document.querySelector('.card-body').innerHTML = html
}

function showProgress() {
    var total = quiz.questions.length;
    var questionIndex = quiz.questionIndex + 1;

    document.querySelector('#progress').innerHTML = "Question " + questionIndex + "of " + total;
}