// =========================
// Rohit Exam Portal
// Home Page
// =========================

function studentLogin(){

    let name = document.getElementById("studentNameInput").value.trim();
    let roll = document.getElementById("studentRollInput").value.trim();

    if(name === "" || roll === ""){
        alert("Please enter your Name and Roll Number.");
        return;
    }

    localStorage.setItem("studentName", name);
    localStorage.setItem("studentRoll", roll);

    window.location.href = "exam.html";
}

function adminLogin(){

    let password = document.getElementById("adminPassword").value;

    if(password === "admin123"){
        alert("Admin Panel will be available in the next version.");
    }else{
        alert("Incorrect Admin Password.");
    }

}