import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDdrSskrieyRVMhUGFo-iGxQ1e6G8YCoWo",
  authDomain: "final-project-426-afeee.firebaseapp.com",
  projectId: "final-project-426-afeee",
  storageBucket: "final-project-426-afeee.appspot.com",
  messagingSenderId: "672107981085",
  appId: "1:672107981085:web:fc9d78e9b438617014d9f4",
  measurementId: "G-VZSG83SR4E",
});

export default app;
