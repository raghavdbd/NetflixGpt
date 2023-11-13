// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl7499SvruF04Z1_vPULouNBuELzWyqec",
  authDomain: "netflixgpt-1ca0e.firebaseapp.com",
  projectId: "netflixgpt-1ca0e",
  storageBucket: "netflixgpt-1ca0e.appspot.com",
  messagingSenderId: "127728682851",
  appId: "1:127728682851:web:e92fb76e1f590c950cb556",
  measurementId: "G-02F06B7EH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();