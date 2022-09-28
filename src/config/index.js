// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA-dYJYjyJWGOMpmV6MtGu_MRC5jgaLHU",
  authDomain: "todolist-a28f1.firebaseapp.com",
  projectId: "todolist-a28f1",
  storageBucket: "todolist-a28f1.appspot.com",
  messagingSenderId: "955110733083",
  appId: "1:955110733083:web:d789ff608b8fe478f48fbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;