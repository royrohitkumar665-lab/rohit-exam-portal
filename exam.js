// ===============================
// Rohit Exam Portal - Exam Engine
// Part 1: Initialize & Load Questions
// ===============================

// Student Details
const studentName = localStorage.getItem("studentName") || "Student";
const studentRoll = localStorage.getItem("studentRoll") || "0000";

document.getElementById("studentName").innerText = studentName;
document.getElementById("studentRoll").innerText = studentRoll;

// Exam Variables
let currentQuestion = 0;
let selectedAnswers = new Array(questions.length).fill(null);

// Load Question
function loadQuestion() {

    const q = questions[currentQuestion];

    document.getElementById("questionNumber").innerText =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    document.getElementById("questionBox").innerText = q.question;

    document.getElementById("optionA").innerText = q.options[0];
    document.getElementById("optionB").innerText = q.options[1];
    document.getElementById("optionC").innerText = q.options[2];
    document.getElementById("optionD").innerText = q.options[3];

    const radios = document.getElementsByName("answer");

    for (let i = 0; i < 4; i++) {
        radios[i].checked = (selectedAnswers[currentQuestion] === i);
    }
}

// Save Current Answer
function saveAnswer() {

    const radios = document.getElementsByName("answer");

    for (let i = 0; i < 4; i++) {
        if (radios[i].checked) {
            selectedAnswers[currentQuestion] = i;
        }
    }

}

// Next Button
document.getElementById("nextBtn").onclick = function () {

    saveAnswer();

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }

};

// Previous Button
document.getElementById("previousBtn").onclick = function () {

    saveAnswer();

    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }

};

// Load First Question
loadQuestion();