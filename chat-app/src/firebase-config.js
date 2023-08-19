// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgvrCzj1KvU0i5FBahaDG2jp0aThAjCMY",
  authDomain: "basechat-873e1.firebaseapp.com",
  projectId: "basechat-873e1",
  storageBucket: "basechat-873e1.appspot.com",
  messagingSenderId: "673026311829",
  appId: "1:673026311829:web:f9ff38e9607d39d052bd9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);