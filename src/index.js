// ----------------------------------------------
// IMPORT FIREBASE
// ----------------------------------------------
import { auth } from "../firebase_config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



const navPic = document.getElementById("navPic");
const dropdown = document.getElementById("profileDropdown");
const dropdownEmail = document.getElementById("dropdownEmail");
const dropdownPic = document.getElementById("dropdownPic");
const logoutBtn = document.getElementById("logoutBtn");

// ----------------------------------------------
// USER DISPLAY
// ----------------------------------------------
onAuthStateChanged(auth, (user) => {
    if (user) {
        dropdownEmail.textContent = user.email;

        const savedPic = localStorage.getItem("profileImage");

        navPic.src = savedPic || user.photoURL || "default_profile.png";
        dropdownPic.src = savedPic || user.photoURL || "default_profile.png";
    }
});


// ----------------------------------------------
// PROFILE DROPDOWN TOGGLE
// ----------------------------------------------
navPic.addEventListener("click", () => {
    dropdown.classList.toggle("hidden");
});

// Close if clicking outside
document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target) && e.target !== navPic) {
        dropdown.classList.add("hidden");
    }
});

// ----------------------------------------------
// LOGOUT
// ----------------------------------------------
logoutBtn.addEventListener("click", () => {
    signOut(auth).then(() => {
        window.location.href = "../login.html";
    });
});
// ---------------------------
// QUIZ DATA
// ---------------------------
const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks Text Model Line"],
        answer: 0
    },
    {
        question: "Which language runs in a web browser?",
        options: ["C++", "JavaScript", "Python"],
        answer: 1
    },
    {
        question: "Which is a backend framework?",
        options: ["Django", "React", "Vue"],
        answer: 0
    },
    {
        question: "What does CSS control?",
        options: ["Structure", "Styling", "Database"],
        answer: 1
    }
];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

let currentQuestion = 0;
let selectedAnswer = null;
let score = 0;
let answered = false;

// ---------------------------
// LOAD A QUESTION
// ---------------------------
function loadQuestion() {
    answered = false;
    nextBtn.disabled = true;
    nextBtn.textContent = "Next";

    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.className = "option-btn";
        btn.onclick = () => selectOption(btn, idx);
        optionsEl.appendChild(btn);
    });
}

loadQuestion();

// ---------------------------
// HANDLE ANSWER SELECTION
// ---------------------------
function selectOption(button, idx) {
    if (answered) return; // prevent changing after answer

    answered = true;
    selectedAnswer = idx;

    const buttons = document.querySelectorAll(".option-btn");
    const correctAnswer = quizData[currentQuestion].answer;

    // Highlight correct & incorrect answers
    buttons.forEach((btn, bIdx) => {
        btn.classList.remove("selected");
        if (bIdx === correctAnswer) {
            btn.classList.add("correct");
        }
        if (bIdx === idx && idx !== correctAnswer) {
            btn.classList.add("incorrect");
        }
    });

    // Update score
    if (idx === correctAnswer) {
        score++;
    }

    nextBtn.disabled = false;
}

// ---------------------------
// NEXT QUESTION
// ---------------------------
nextBtn.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

// ---------------------------
// FINAL RESULT
// ---------------------------
function showResult() {
    questionEl.textContent = "Quiz Completed!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    resultEl.textContent = `Your score: ${score} / ${quizData.length}`;
}

//Picture Upload
window.onload = () => {

    const navPic = document.getElementById("navPic");
    const dropdownPic = document.getElementById("dropdownPic");
    const uploadBtn = document.getElementById("uploadBtn");
    const uploadInput = document.getElementById("uploadInput");

    // ----------------- LOAD SAVED IMAGE -----------------
    const savedPic = localStorage.getItem("profileImage");

    if (savedPic) {
        navPic.src = savedPic;
        dropdownPic.src = savedPic;
    } else {
        navPic.src = "default_profile.png";
        dropdownPic.src = "default_profile.png";
    }

    // ----------------- OPEN FILE SELECTOR -----------------
    uploadBtn.addEventListener("click", () => {
        uploadInput.click();
    });

    // ----------------- UPLOAD HANDLER --------------------
    uploadInput.addEventListener("change", function () {
        const file = this.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (e) {
            const data = e.target.result;

            // Update UI
            navPic.src = data;
            dropdownPic.src = data;

            // Save to localStorage
            localStorage.setItem("profileImage", data);

            console.log("Saved to localStorage!");
        };

        reader.readAsDataURL(file);
    });
};
