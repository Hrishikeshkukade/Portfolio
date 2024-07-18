import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "YOUR API KEY",
    authDomain: "---",
    projectId: "---",
    storageBucket: "---",
    messagingSenderId: "--",
    appId: "---"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
