import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBieRXknsBHsWpo2kXuz2eYT_qAz3FBgXg",
  authDomain: "laundryapp-b95e7.firebaseapp.com",
  projectId: "laundryapp-b95e7",
  storageBucket: "laundryapp-b95e7.appspot.com",
  messagingSenderId: "898811663846",
  appId: "1:898811663846:web:170c76ad47a75337873227",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
