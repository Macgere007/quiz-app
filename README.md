# 🚀 Programming Quiz Web App

A simple interactive web application that allows users to:

- ✔️ Take a multiple-choice programming quiz  
- ✔️ See correct/incorrect answers instantly  
- ✔️ View their final score  
- ✔️ Log in with Firebase Authentication  
- ✔️ Upload a local profile picture  
- ✔️ Profile picture appears in both navbar and dropdown  
- ✔️ Image saved in `localStorage` (survives refresh)

---

## 📸 Features

### 👤 User Login
- Firebase Authentication (Email & Password)
- Shows logged-in user's email
- Logout button inside the profile dropdown

### 🖼 Profile Picture Upload
- Upload image from device
- Updates instantly on:
  - Navbar profile picture
  - Dropdown large profile picture
- Saves to `localStorage` so it persists after refresh
- No backend or cloud upload needed

### 🧠 Quiz Functionality
- Shows questions one at a time
- Highlights:
  - 🟩 Correct = Green  
  - 🟥 Wrong = Red  
- Prevents changing answers
- Next button loads the next question
- Shows final score at the end

---

## 🛠 Technologies Used
- **HTML** — Structure  
- **CSS** — UI Styling  
- **JavaScript** — Quiz logic, events  
- **Firebase Authentication**  
- **localStorage** — Save profile photo  

---

<!--
## 📂 Project Structure

/project
│
└── src/
    ├── index.html
    ├── index.js
    ├── style.css
    └── default_profile.png
│
├── login.html
└── firebase_config.js
-->

---

## ⚙️ Setup Instructions

### 1. Download the Project
Download or copy the files to your workspace.

```git clone ...``` 

### 2. Configure Firebase 
- npm install firebase
- Edit `firebase_config.js` and insert your Firebase configuration:
```
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
   apiKey: "...",
   authDomain: "...",
   projectId: "...",
   storageBucket: "...",
   messagingSenderId: "...",
   appId: "..."
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default firebaseConfig;
```

3. run ./login.html

