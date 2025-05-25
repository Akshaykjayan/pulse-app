const firebaseConfig = {
  apiKey: "AIzaSyDzp7dTMTnMyFrNk-grwB-lCa7CHCnd09o",
  authDomain: "pulseapp-2abd7.firebaseapp.com",
  projectId: "pulseapp-2abd7",
  storageBucket: "pulseapp-2abd7.appspot.com",
  messagingSenderId: "119459540649",
  appId: "1:119459540649:web:696cb61adcc4c6a455c3b8",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");
const toggleMode = document.getElementById("toggleMode");
const errorMsg = document.getElementById("errorMsg");

let isLogin = true;

toggleMode.addEventListener("click", () => {
  isLogin = !isLogin;
  submitBtn.textContent = isLogin ? "Login" : "Sign Up";
  toggleMode.innerHTML = isLogin
    ? "Don't have an account? <span>Sign Up</span>"
    : "Already have an account? <span>Login</span>";
  errorMsg.textContent = "";
});

submitBtn.addEventListener("click", () => {
  const email = emailEl.value.trim();
  const password = passwordEl.value.trim();
  errorMsg.textContent = "";

  if (isLogin) {
    auth.signInWithEmailAndPassword(email, password)
      .then(() => location.href = "home.html")
      .catch(err => errorMsg.textContent = err.message);
  } else {
    auth.createUserWithEmailAndPassword(email, password)
      .then(() => location.href = "home.html")
      .catch(err => errorMsg.textContent = err.message);
  }
});
