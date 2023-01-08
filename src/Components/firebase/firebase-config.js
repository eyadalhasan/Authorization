import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyB5JSSe1L-ejkRbJ4pfcgeF9L1vqvtQf-c",
    authDomain: "auth-be737.firebaseapp.com",
    projectId: "auth-be737",
    storageBucket: "auth-be737.appspot.com",
    messagingSenderId: "104718460075",
    appId: "1:104718460075:web:5fc5a8c1484dedead703ee",
    measurementId: "G-YNWB7YWX14"
  };
  const app=initializeApp(firebaseConfig);
export const auth=getAuth(app);