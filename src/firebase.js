import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNetx1pKEkik1DFMX04CJepavS4EdHbjs",
  authDomain: "barangay-complaint-syste-c6310.firebaseapp.com",
  projectId: "barangay-complaint-syste-c6310",
  storageBucket: "barangay-complaint-syste-c6310.firebasestorage.app",
  messagingSenderId: "218754104679",
  appId: "1:218754104679:web:f57380dc02bcef7e3f83c2",
  measurementId: "G-XFY4F4QGX0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);