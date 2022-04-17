// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjjPgpWtKZKg05JTCzsAWaKdY5X-FvnRA",
  authDomain: "photo-galleria-e2186.firebaseapp.com",
  projectId: "photo-galleria-e2186",
  storageBucket: "photo-galleria-e2186.appspot.com",
  messagingSenderId: "512701223706",
  appId: "1:512701223706:web:0fd959c0b5ac0d34cc92a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;