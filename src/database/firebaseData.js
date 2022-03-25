import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBivl-t7o4tivvuUzjfpGvuxQESTzE63Qo",
    authDomain: "chatapp-e0650.firebaseapp.com",
    databaseURL: "https://chatapp-e0650-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chatapp-e0650",
    storageBucket: "chatapp-e0650.appspot.com",
    messagingSenderId: "165978143089",
    appId: "1:165978143089:web:2287e26b0787d52c4fded0",
    measurementId: "G-EZN3X0GNR2"
  };
  firebase.initializeApp(firebaseConfig);
  const data=firebase.firestore();
  export {data}