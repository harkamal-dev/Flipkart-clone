import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCWu-_-aVCPZyMguK_hi1i-53coLx7X1zg",
    authDomain: "flipkart-clone-976034.firebaseapp.com",
    projectId: "flipkart-clone-976034",
    storageBucket: "flipkart-clone-976034.appspot.com",
    messagingSenderId: "773581058596",
    appId: "1:773581058596:web:a9283c8357864a2df01eb1",
    measurementId: "G-W364WZL4GE"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

// database and auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth };