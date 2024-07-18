import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBRxuznw3K503oAopbhprRB6X6zI3ggcyw",
    authDomain: "fir-rtc-4768d.firebaseapp.com",
    projectId: "fir-rtc-4768d",
    storageBucket: "fir-rtc-4768d.appspot.com",
    messagingSenderId: "247638571490",
    appId: "1:247638571490:web:0d124c0d86272cd42961bb"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
