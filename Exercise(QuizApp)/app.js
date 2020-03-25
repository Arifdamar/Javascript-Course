function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

// Question Prototype
Question.prototype.checkAnswer = function(answer) {
    return this.answer === answer;
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

console.log(q1.checkAnswer('C#'));
console.log(q1.checkAnswer('JavaScript'));

console.log(q3.checkAnswer('Java'));
console.log(q3.checkAnswer('Python'));