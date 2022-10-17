// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgivHg3TWJtI-8bd3Kjpk1kUBoeoyA_KU",
  authDomain: "netflix-clone-f7288.firebaseapp.com",
  projectId: "netflix-clone-f7288",
  storageBucket: "netflix-clone-f7288.appspot.com",
  messagingSenderId: "202751583452",
  appId: "1:202751583452:web:dd9f6f62edc5b629054019",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
