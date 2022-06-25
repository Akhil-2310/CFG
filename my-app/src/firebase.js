import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBSMd7MqyCfGHAKkGtWmDxcN0xpna9pY7I",
    authDomain: "foodbank-a78c2.firebaseapp.com",
    projectId: "foodbank-a78c2",
    storageBucket: "foodbank-a78c2.appspot.com",
    messagingSenderId: "629830209940",
    appId: "1:629830209940:web:f70dc20ab15ed77d4d7f81",
    measurementId: "G-K0L6X1MJ2E"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);