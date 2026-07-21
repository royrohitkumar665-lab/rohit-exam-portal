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
`Question ${currentQuestion + 1} of ${questions.length}`;

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
radios[i].checked = selectedAnswers[currentQuestion] === i;
}

updatePalette();
}

// Save Answer
function saveAnswer(){
let radios = document.getElementsByName("answer");

for(let i=0;i<4;i++){
if(radios[i].checked){
selectedAnswers[currentQuestion]=i;
}
}
}

// Next
document.getElementById("nextBtn").onclick=function(){
saveAnswer();

if(currentQuestion<questions.length-1){
currentQuestion++;
loadQuestion();
}
};

// Previous
document.getElementById("previousBtn").onclick=function(){
saveAnswer();

if(currentQuestion>0){
currentQuestion--;
loadQuestion();
}
};

// Palette
function createPalette(){

let palette=document.getElementById("palette");

for(let i=0;i<questions.length;i++){

let btn=document.createElement("button");

btn.innerText=i+1;

btn.className="palette-btn";

btn.onclick=function(){

saveAnswer();

currentQuestion=i;

loadQuestion();

};

palette.appendChild(btn);

}

}

function updatePalette(){

let buttons=document.getElementsByClassName("palette-btn");

for(let i=0;i<buttons.length;i++){

buttons[i].style.background="#2563eb";

if(selectedAnswers[i]!=null){
buttons[i].style.background="green";
}

}

buttons[currentQuestion].style.background="orange";

}

// Submit
document.getElementById("submitExam").onclick=function(){

saveAnswer();

let score=0;

for(let i=0;i<questions.length;i++){

if(selectedAnswers[i]===questions[i].answer){
score++;
}

}

alert(
"Exam Submitted!\n\nScore : "+score+" / "+questions.length
);

};

// Timer
let time=60*60;

function startTimer(){

let timer=document.getElementById("timer");

setInterval(function(){

let min=Math.floor(time/60);

let sec=time%60;

timer.innerText=
String(min).padStart(2,"0")+":"+
String(sec).padStart(2,"0");

if(time<=0){

document.getElementById("submitExam").click();

}

time--;

},1000);

}

createPalette();
loadQuestion();
startTimer();