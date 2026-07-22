let questions = JSON.parse(localStorage.getItem("questionBank"));

if (!questions || questions.length === 0) {

    questions = [
        {
            question: "भारत की राजधानी क्या है?",
            options: ["मुंबई", "कोलकाता", "नई दिल्ली", "चेन्नई"],
            answer: 2
        },
        {
            question: "2 + 2 = ?",
            options: ["3", "4", "5", "6"],
            answer: 1
        },
        {
            question: "RRB का पूर्ण रूप क्या है?",
            options: [
                "Railway Recruitment Board",
                "Road Recruitment Board",
                "Rail Recruitment Bureau",
                "Railway Road Board"
            ],
            answer: 0
        }
    ];

    localStorage.setItem("questionBank", JSON.stringify(questions));
}