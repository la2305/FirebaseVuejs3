import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyDWJ2ZpiQlnunEXKL42U_fARmyLrTUMHbQ",
    authDomain: "imoney-90c7b.firebaseapp.com",
    projectId: "imoney-90c7b",
    storageBucket: "imoney-90c7b.appspot.com",
    messagingSenderId: "249116298857",
    appId: "1:249116298857:web:5cb2145b1c1e98eaf65cf8",
    measurementId: "G-8FWH2C474R"
  };

// init firebase
initializeApp(firebaseConfig);

// init firestore service
export const db = getFirestore();
// generate & export auth object
export const auth = getAuth();