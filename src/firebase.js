import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { getAuth } from "firebase/auth";
import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBRxuznw3K503oAopbhprRB6X6zI3ggcyw",
    authDomain: "fir-rtc-4768d.firebaseapp.com",
    projectId: "fir-rtc-4768d",
    storageBucket: "fir-rtc-4768d.appspot.com",
    messagingSenderId: "247638571490",
    appId: "1:247638571490:web:0d124c0d86272cd42961bb"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)

export { db, auth };
