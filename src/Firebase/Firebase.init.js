// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcsMD7othbaNJY3UPMoMUhl_L7q2UxOGM",
  authDomain: "auth-firebase-b93d1.firebaseapp.com",
  projectId: "auth-firebase-b93d1",
  storageBucket: "auth-firebase-b93d1.appspot.com",
  messagingSenderId: "964208688600",
  appId: "1:964208688600:web:5e8ce99eeec669c26606ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;