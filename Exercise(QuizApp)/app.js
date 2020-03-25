function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

// Question Prototype
Question.prototype.checkAnswer = function(answer) {
    return this.answer === answer;
}

// Quiz Constructor
function Quiz(questions){
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
}

// Quiz Prototype
Quiz.prototype.getQuestion = function(){
    return this.questions[this.questionIndex];
}

// Quiz isFinished
Quiz.prototype.isFinished = function(){
    return this.questions.length === this.questionIndex;
}

// Quiz Guess
Quiz.prototype.guess = function(answer){
    var question = this.getQuestion();

    if(question.checkAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}

var q1 = new Question(
    "What's the best programming language?",
    ["C#","JavaScript","Python","Java","C++"],
    "JavaScript");

var q2 = new Question(
    "What's the most popular programming language?",
    ["C#","JavaScript","Python","Java","C++"],
    "JavaScript");

var q3 = new Question(
    "What's the best modern programming language?",
    ["C#","JavaScript","Python","Java","C++"],
    "Python");

var questions = [q1, q2, q3];

// Start Quiz
var quiz = new Quiz(questions);

console.log(quiz.isFinished());

console.log(quiz.getQuestion());
quiz.guess("JavaScript");

console.log(quiz.getQuestion());
quiz.guess("Java");

console.log(quiz.getQuestion());
quiz.guess("Python");

console.log(quiz.score);

console.log(quiz.isFinished());