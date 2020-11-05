import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAyI2LCeYh43pMCGCFy2J_fX_yChYw0Fsk",
    authDomain: "webappdatabase-33001.firebaseapp.com",
    databaseURL: "https://webappdatabase-33001.firebaseio.com",
    projectId: "webappdatabase-33001",
    storageBucket: "webappdatabase-33001.appspot.com",
    messagingSenderId: "744262161276",
    appId: "1:744262161276:web:77b3fdeccb902565ab0af9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;