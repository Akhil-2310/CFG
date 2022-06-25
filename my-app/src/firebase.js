import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCGRtkKKqC88bhZoQIrrXNPt9Cidw0U3Ns",
    authDomain: "foodbank-f1ea5.firebaseapp.com",
    projectId: "foodbank-f1ea5",
    storageBucket: "foodbank-f1ea5.appspot.com",
    messagingSenderId: "396010090736",
    appId: "1:396010090736:web:4aa8aa56d89025f9a9d235",
    measurementId: "G-XY1KLTVCL8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);