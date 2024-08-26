import { auth } from "../config/firebase-config.js"; // Adjust path as needed
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

// Initialize Firestore
const db = getFirestore();

// Collect form data
function getFormData() {
  return {
    fullName: document.getElementById("fullName").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    section: document.getElementById("section").value,
    grade: document.getElementById("grade").value,
    rollNo: document.getElementById("rollNo").value,
  };
}
const alertDiv = document.querySelector(".alertDiv");
// Handle success
function handleSuccess() {
  alertDiv.classList.remove("hidden");
  alertDiv.classList.add("bg-green-50");
  alertDiv.innerHTML = ` <span class="font-medium">Success!</span> Account successfully created.`;

  setTimeout(() => {
    alertDiv.classList.add("hidden");
    window.location.href = "/pages/index.html";
  }, 2000); // Adjust time as needed
}

// Handle error
function handleError(error) {
  alertDiv.classList.remove("hidden");
  alertDiv.classList.add("bg-red-50");
  alertDiv.innerHTML = ` <span class="font-medium">Oops!</span> ${error.message}`;
  console.error(error.message);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const { email, password, fullName, section, grade, rollNo } = getFormData();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Save user data to Firestore
      await addDoc(collection(db, "users"), {
        uid: userCredential.user.uid,
        fullName,
        email,
        section,
        grade,
        rollNo,
        role: "member",
        status: "active", // Default status: active
        createdAt: new Date(),
      });

      handleSuccess();
    } catch (error) {
      handleError(error);
    }
  });
});
