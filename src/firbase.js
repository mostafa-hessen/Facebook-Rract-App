// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
// import sin
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getDatabase, ref, push, set } from "firebase/database";
import { getAuth,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyByMHiCZzpFvl9eZgYnk92PYWLwqzHBhuo",
    authDomain: "facebook-bc751.firebaseapp.com",
    projectId: "facebook-bc751",
    storageBucket: "facebook-bc751.appspot.com",
    messagingSenderId: "79047808538",
    appId: "1:79047808538:web:f9a429965f1245b6cbe3a3",
    measurementId: "G-Y5PLKTZ4JW"
  };
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const db = getDatabase(app);
const auth = getAuth(app)     
const provider = new GoogleAuthProvider();
export {auth,provider,signInWithPopup}
  export default  getFirestore() ; 
// const analytics = getAnalytics(app);