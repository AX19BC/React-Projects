import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyARuu1OGjPbPVAgayRZ4IVDrC-r02dtoCI",
  authDomain: "react-notes-c1c6b.firebaseapp.com",
  projectId: "react-notes-c1c6b",
  storageBucket: "react-notes-c1c6b.appspot.com",
  messagingSenderId: "439560295629",
  appId: "1:439560295629:web:896d22275a3e22722e8584"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")