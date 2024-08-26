import { auth } from "../config/firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const alertDiv = document.querySelector(".alertDiv");
// Handle Login Form Submission
document
  .getElementById("loginForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      // Firebase Authentication: Sign In
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      alertDiv.classList.remove("hidden");
      alertDiv.classList.add("bg-green-50");
      alertDiv.innerHTML = ` <span class="font-medium">Success!</span> Account successfully created.`;

      setTimeout(() => {
        alertDiv.classList.add("hidden");
        window.location.href = "/pages/index.html";
      }, 2000);
    } catch (error) {
      console.error("Error signing in:", error.message);
      alertDiv.classList.remove("hidden");
      alertDiv.classList.add("bg-red-50");
      alertDiv.innerHTML = ` <span class="font-medium">Oops!</span> ${error.message}`;
      console.error(error.message);
    }
  });
