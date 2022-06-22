// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//https://firebase.google.com/docs/auth/web/start
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACQeQvG6zTEAj5zkus671i3jZYRuhJ9zI",
  authDomain: "react-router--auth.firebaseapp.com",
  projectId: "react-router--auth",
  storageBucket: "react-router--auth.appspot.com",
  messagingSenderId: "758667168492",
  appId: "1:758667168492:web:6969b3175b81d52aad33c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
