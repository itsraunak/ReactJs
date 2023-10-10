// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDiaIrp4DGZ-o4A_UU_ZnRw5Kc7p3eECps",
    authDomain: "blogging-app-728e8.firebaseapp.com",
    projectId: "blogging-app-728e8",
    storageBucket: "blogging-app-728e8.appspot.com",
    messagingSenderId: "280757401321",
    appId: "1:280757401321:web:fc9e20bfea3e5d7e766278",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
