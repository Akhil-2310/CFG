import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAMmOmI8Sr3j3p0TkhFptTUlBIb50J60YY",
    authDomain: "foodbank-cf654.firebaseapp.com",
    projectId: "foodbank-cf654",
    storageBucket: "foodbank-cf654.appspot.com",
    messagingSenderId: "662839805386",
    appId: "1:662839805386:web:7903363b50fbde3032fb33",
    measurementId: "G-08XX8N5R45"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);