import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBx869m25jIjK4KpMPLawY6Z3rnHQL4bE4",
  authDomain: "devlink-35e6e.firebaseapp.com",
  projectId: "devlink-35e6e",
  storageBucket: "devlink-35e6e.appspot.com",
  messagingSenderId: "768492837850",
  appId: "1:768492837850:web:4b0f9f7ab36d8d9eb37ee3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const storageRef = ref(storage);

export {
  app,
  db,
  collection,
  addDoc,
  doc,
  setDoc,
  getDoc,
  storage,
  ref,
  uploadBytes,
};
