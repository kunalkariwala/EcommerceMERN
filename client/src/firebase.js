import * as firebase from "firebase";



// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdwncYJDQJNnRzQBqR8hAfPGkDl0SaBWg",
  authDomain: "ecommerce-fe9a3.firebaseapp.com",
  projectId: "ecommerce-fe9a3",
  storageBucket: "ecommerce-fe9a3.appspot.com",
  messagingSenderId: "526072157042",
  appId: "1:526072157042:web:5f8fed9f63aed1d194c3eb",
  measurementId: "G-S8J2WM8SCZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
