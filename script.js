// =========================
// Rohit Exam Portal
// Homepage Script
// =========================

function studentLogin(){

    let name = document.getElementById("studentNameInput").value.trim();
    let roll = document.getElementById("studentRollInput").value.trim();

    if(name==="" || roll===""){
        alert("Please enter your Name and Roll Number.");
        return;
    }

    localStorage.setItem("studentName",name);
    localStorage.setItem("studentRoll",roll);

    window.location.href="exam.html";
}

function adminLogin(){

    let password=document.getElementById("adminPassword").value;

    if(password==="admin123"){
        alert("Admin login successful.\n(Admin Panel will be built in the next phase.)");
        // Later:
        // window.location.href="admin.html";
    }else{
        alert("Incorrect Admin Password.");
    }

}