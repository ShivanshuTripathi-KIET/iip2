var questions = [
    {
        q: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Tech Machine Language",
            "Home Tool Markup Language",
            "Hyperlink and Text Management Language"
        ],
        correct: 0
    },
    {
        q: "Which CSS property is used to change the text color?",
        options: [
            "font-color",
            "text-style",
            "color",
            "background"
        ],
        correct: 2
    },
    {
        q: "Which HTML tag links an external CSS file?",
        options: [
            "<style>",
            "<link>",
            "<script>",
            "<css>"
        ],
        correct: 1
    },
    {
        q: "Which language runs directly inside web browsers for interactivity?",
        options: [
            "C",
            "Java",
            "Python",
            "JavaScript"
        ],
        correct: 3
    }
];

var currentIndex = 0;
var score = 0;

showQuestion();

function toggleTheme() {
    document.body.classList.toggle("dark");
    var btn = document.getElementById("themeBtn");

    if (document.body.classList.contains("dark")) {
        btn.innerText = "☀️ Light Mode";
    } else {
        btn.innerText = "🌙 Dark Mode";
    }
}

function showQuestion() {
    var item = questions[currentIndex];
    document.getElementById("progress").innerText = "Question " + (currentIndex + 1) + " of " + questions.length;
    document.getElementById("questionText").innerText = item.q;
    document.getElementById("opt0").innerText = item.options[0];
    document.getElementById("opt1").innerText = item.options[1];
    document.getElementById("opt2").innerText = item.options[2];
    document.getElementById("opt3").innerText = item.options[3];

    var radios = document.getElementsByName("ans");
    for (var i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }
}

function nextQuestion() {
    var radios = document.getElementsByName("ans");
    var selected = -1;

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selected = parseInt(radios[i].value);
        }
    }

    if (selected === -1) {
        alert("Please choose an answer first!");
        return;
    }

    if (selected === questions[currentIndex].correct) {
        score = score + 1;
    }

    currentIndex = currentIndex + 1;

    if (currentIndex < questions.length) {
        showQuestion();
    } else {
        document.getElementById("optionsArea").style.display = "none";
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("questionText").style.display = "none";
        document.getElementById("progress").innerText = "Completed";
        document.getElementById("resultBox").style.display = "block";
        document.getElementById("resultText").innerText = "You scored " + score + " out of " + questions.length + "!";
    }
}

function restartQuiz() {
    currentIndex = 0;
    score = 0;
    document.getElementById("resultBox").style.display = "none";
    document.getElementById("optionsArea").style.display = "flex";
    document.getElementById("nextBtn").style.display = "block";
    document.getElementById("questionText").style.display = "block";
    showQuestion();
}