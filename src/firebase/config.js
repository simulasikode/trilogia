// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArDnoqzeB8i1UmZORA4WSZmEd5aMURT90",
  authDomain: "trilogi-87397.firebaseapp.com",
  projectId: "trilogi-87397",
  storageBucket: "trilogi-87397.appspot.com",
  messagingSenderId: "912641752020",
  appId: "1:912641752020:web:a67c9e20a594594d2a3441",
  measurementId: "G-EBSR5G5K30",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
