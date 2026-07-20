const palette = document.getElementById("palette");

for (let i = 1; i <= 100; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;
    btn.className = "palette-btn";
    btn.onclick = () => {
        alert("Question " + i + " will open here.");
    };
    palette.appendChild(btn);
}

// Show student details
document.getElementById("studentName").innerText =
localStorage.getItem("studentName") || "Student";

document.getElementById("studentRoll").innerText =
localStorage.getItem("studentRoll") || "0000";