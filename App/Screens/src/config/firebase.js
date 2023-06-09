/* REFERENCES
    Tech, D. (2022). How to use React Native with Firebase.
    YouTube. Available at: https://www.youtube.com/watch?v=NFbMfVTtq10
    [Accessed 4 Jun. 2023].
*/

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { FIREBASE_API_KEY } from "../components/env";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "hyderproperties-test-database.firebaseapp.com",
  projectId: "hyderproperties-test-database",
  storageBucket: "hyderproperties-test-database.appspot.com",
  messagingSenderId: "227065771800",
  appId: "1:227065771800:web:a99061edb9f028f36b506d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const testDB = getFirestore()