// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSrXJyYNcUoxbKL4aetRiqCZQl_fiVOeY",
  authDomain: "netflixgpt-f8414.firebaseapp.com",
  projectId: "netflixgpt-f8414",
  storageBucket: "netflixgpt-f8414.firebasestorage.app",
  messagingSenderId: "715930009046",
  appId: "1:715930009046:web:6a5c7cab570365d0fcb877",
  measurementId: "G-F0R2EPK8R9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();