🚀 Programming Quiz Web App

A simple interactive web application that allows users to:

✅ Take a multiple-choice programming quiz
✅ See correct/incorrect answers instantly
✅ View their final score
✅ Log in using Firebase Authentication
✅ Upload a local profile picture
✅ Profile picture appears in both navbar and dropdown
✅ Image is saved in browser (localStorage) — survives refresh

📸 Features
👤 User Login

Firebase Authentication (Email & Password)

Shows the logged-in user's email

Logout button inside profile dropdown

🖼 Profile Picture Upload

User can upload an image from their device

Picture instantly updates:

Navbar profile picture

Dropdown big profile picture

Saved using localStorage, so it remains even after refresh

No server / cloud upload needed

🧠 Quiz Functionality

Displays questions one by one

Highlights:

🟩 Correct answer (green)

🟥 Selected wrong answer (red)

Prevents changing answer after selection

Next button loads the next question

Final score shown at the end

🛠 Technologies Used

HTML – Structure

CSS – Styling

JavaScript – Logic + quiz system

Firebase

Authentication

LocalStorage – Save profile photo

📂 Project Structure
/project
│
└── src/
    │
    ├── index.html          # Main UI (quiz + profile dropdown)
    ├── index.js            # Quiz logic + profile upload + Firebase auth
    ├── style.css           # Styles for quiz & UI components
    └── default_profile.png # Fallback profile picture
├── login.html
├── firebase_config.js



⚙️ Setup Instructions
1. Clone or Download the Project
git clone <your-repo-url>

2. Set Up Firebase

Inside firebase_config.js, keep your Firebase config:

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig =  {
   apiKey: "...",
   authDomain: "...",
   projectId: "...",
   storageBucket: "...",
   messagingSenderId: "...",
   appId: "..."
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth so your index.js can import it
export const auth = getAuth(app);

export default firebaseConfig; 


3. Open the App

Just open login.html in your browser and register with credential info.

🎯 How Profile Upload Works

When the user picks a photo, it is converted to Base64 using FileReader

Stored in browser using:

localStorage.setItem("profileImage", base64Data);


On page load, app checks:

localStorage.getItem("profileImage");


If found → used as navbar & dropdown image

If not → fallback to Firebase photoURL → fallback to default image
