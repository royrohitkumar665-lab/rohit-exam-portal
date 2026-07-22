let questionBank =
JSON.parse(localStorage.getItem("questionBank")) || [];

function addQuestion(){

let q={

question:document.getElementById("question").value,

options:[
document.getElementById("option1").value,
document.getElementById("option2").value,
document.getElementById("option3").value,
document.getElementById("option4").value
],

answer:Number(document.getElementById("answer").value)-1

};

questionBank.push(q);

localStorage.setItem(
"questionBank",
JSON.stringify(questionBank)
);

showQuestions();

alert("Question Added!");

}

function showQuestions(){

let html="";

questionBank.forEach((q,index)=>{

html+=`
<div style="padding:10px;border:1px solid #ccc;margin:10px 0;">
<b>Q${index+1}:</b> ${q.question}
</div>
`;

});

document.getElementById("questionList").innerHTML=html;

}

showQuestions();