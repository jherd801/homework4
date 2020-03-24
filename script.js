let docElID = document.getElementById

// DOM Elements
let start = document.getElementById("btnStart");
let quiz = document.getElementById("quiz");
let question = document.getElementById("question");
let buttons = document.getElementById("buttons");
let btn1 = document.getElementById("1");
let btn2 = document.getElementById("2");
let btn3 = document.getElementById("3");
let btn4 = document.getElementById("4");
let choice1 = document.getElementById("choice1");
let choice2 = document.getElementById("choice2");
let choice3 = document.getElementById("choice3");
let choice4 = document.getElementById("choice4");
let counter = document.getElementById("counter");
let timeGauge = document.getElementById("timeGauge");
let progress = document.getElementById("progress");
let scoreDiv = document.getElementById("scoreContainer");

// Array with questions and answers structured as separate items
let questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choice1: "1. Strings",
        choice2: "2. Booleans",
        choice3: "3. Alerts",
        choice4: "4. Numbers",
        correct: "3"
    },
    {
        question: "The condition in an if / else statement is enclosed within ___",
        choice1: "1. Quotes",
        choice2: "2. Curly brackets",
        choice3: "3. Parentheses",
        choice4: "4. Square brackets",
        correct: "3"
    },
    {
        question: "Arrays in JavaScript can be used to store ___.",
        choice1: "1. Numbers and strings",
        choice2: "2. Other arrays",
        choice3: "3. Booleans",
        choice4: "4. All of the above",
        correct: "4"
    },
    {
        question: "String values must be enclosed within ___ when being assigned to variables",
        choice1: "1. Commas",
        choice2: "2. Curly brackets",
        choice3: "3. Quotes",
        choice4: "4. Parentheses",
        correct: "3"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "1. JavaScript",
        choice2: "2. Terminal / Bash",
        choice3: "3. For loops",
        choice4: "4. Console.log",
        correct: "4"
    }
]

// Create questions
let lastQuestion = questions.length -1;
let runningQuestion = 0;
let quizTime = 75;
let timer;

// Begin quiz and hide quiz title and descrition
start.addEventListener("click", renderQuestions());

// Render and display questions
function renderQuestions() {
    let q = questions[runningQuestion];
    question.innerText = q.question;
    choice1.innerText = q.choice1;
    choice2.innerText = q.choice2;
    choice3.innerText = q.choice3;
    choice4.innerText = q.choice4;
}

// Begin quiz
function startQuiz () {
    quiz.style.display = "none";
    renderQuestions();
    quiz.style.display = "block";
    timer = setInterval(1000);
}

startQuiz();

console.log(question);
console.log(choice1);
console.log(choice2);
console.log(choice3);
console.log(choice4);
console.log(timer);
console.log(quizTime);
