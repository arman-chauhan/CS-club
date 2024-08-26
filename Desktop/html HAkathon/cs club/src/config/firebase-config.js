// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIRnvz53IJR-bkMZ4TNVBVo0JCEDmQGmo",
  authDomain: "cs-arniko2081.firebaseapp.com",
  projectId: "cs-arniko2081",
  storageBucket: "cs-arniko2081.appspot.com",
  messagingSenderId: "999205541098",
  appId: "1:999205541098:web:142ce55ace9a56babdb393",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
