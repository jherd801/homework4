// DOM Elements
let welcomeScreen = document.getElementById("start");
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
let selection = document.getElementsByClassName("choices");

// Hide quiz when page initially loads
function hideQuiz () {
    quiz.setAttribute("class", "hide")
};

hideQuiz();

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
let quizTime = questions.length * 15;
let timer;

// Event listener to start timer and hide quiz title and description
start.addEventListener("click", function() {
    setTime();
    startQuiz();
});

// Function to start the quiz timer with an initial time of 15 seconds per question
function setTime() {
    var timerInterval = setInterval(function() {
        quizTime--;
        timeGauge.textContent = quizTime;

        if(quizTime === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

function sendMessage() {
    timeGauge.textContent = "Time's up!"
}



// Render and display questions, starting with index 0 in the questions array
function renderQuestions() {
    let q = questions[runningQuestion];
    question.innerText = q.question;
    choice1.innerText = q.choice1;
    choice2.innerText = q.choice2;
    choice3.innerText = q.choice3;
    choice4.innerText = q.choice4;

// +++++++++++++++++++++++ Why is this adding more than 1 to runningQuestion on subsequent clicks? +++++++++++++++
    btn1.addEventListener("click", function() {
        runningQuestion++;
        console.log(runningQuestion);
        renderQuestions();
    })
};

// Begin quiz
function startQuiz () {
    // Hide welcome screen
    welcomeScreen.setAttribute("class", "hide")
    // Display questions
    renderQuestions();
    quiz.setAttribute("class", "display")
};





