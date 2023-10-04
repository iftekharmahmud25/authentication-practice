// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCICZuBm9PZQGGv4fO0vcbcv9T1q63uDRM",
  authDomain: "moha-auth.firebaseapp.com",
  projectId: "moha-auth",
  storageBucket: "moha-auth.appspot.com",
  messagingSenderId: "490054169321",
  appId: "1:490054169321:web:35e8bf5e0e5427f6b5b678"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;