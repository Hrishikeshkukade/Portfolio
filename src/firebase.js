import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { getAuth } from "firebase/auth";
import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "YOUR API KEY",
    authDomain: "---",
    projectId: "---",
    storageBucket: "---",
    messagingSenderId: "--",
    appId: "---"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)

export { db, auth };
