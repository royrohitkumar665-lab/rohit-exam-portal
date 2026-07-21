// Student Information
document.getElementById("studentName").innerText =
localStorage.getItem("studentName") || "Student";

document.getElementById("studentRoll").innerText =
localStorage.getItem("studentRoll") || "0000";

let currentQuestion = 0;
let selectedAnswers = [];

// Load Question
function loadQuestion() {

document.getElementById("questionNumber").innerText =
"Question " + (currentQuestion + 1) + " of " + questions.length;

document.getElementById("questionBox").innerText =
questions[currentQuestion].question;

document.getElementById("optionA").innerText =
questions[currentQuestion].options[0];

document.getElementById("optionB").innerText =
questions[currentQuestion].options[1];

document.getElementById("optionC").innerText =
questions[currentQuestion].options[2];

document.getElementById("optionD").innerText =
questions[currentQuestion].options[3];

let radios = document.getElementsByName("answer");

for(let i=0;i<4;i++){
radios[i].checked = selectedAnswers[currentQuestion]===i;
}

}

// Next Button
document.getElementById("nextBtn").onclick=function(){

let radios=document.getElementsByName("answer");

for(let i=0;i<4;i++){
if(radios[i].checked){
selectedAnswers[currentQuestion]=i;
}
}

if(currentQuestion<questions.length-1){
currentQuestion++;
loadQuestion();
}

};

// Previous Button
document.getElementById("previousBtn").onclick=function(){

if(currentQuestion>0){
currentQuestion--;
loadQuestion();
}

};

// First Question
loadQuestion();