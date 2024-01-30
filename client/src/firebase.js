// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAayrwSrx_o-u-upwYWr8b3vjZBQQSGqRY",
  authDomain: "mern---estate-3b999.firebaseapp.com",
  projectId: "mern---estate-3b999",
  storageBucket: "mern---estate-3b999.appspot.com",
  messagingSenderId: "544213619729",
  appId: "1:544213619729:web:85317c53f071cba164cdb0",
  measurementId: "G-CPKSF7JQ5L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);