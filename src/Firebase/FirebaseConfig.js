import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBMRap9QQ6d_JXvMCp2uLOGTK7-Blo4bFs",
  authDomain: "proyecto-petonets.firebaseapp.com",
  projectId: "proyecto-petonets",
  storageBucket: "proyecto-petonets.appspot.com",
  messagingSenderId: "454419457487",
  appId: "1:454419457487:web:f655d37f9a130d6278deba",
  measurementId: "G-RX2FJN3QN7",
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore(app);
