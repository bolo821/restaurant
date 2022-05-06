import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { getStorage, ref} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyD2hi71KZkX9V-W7ZxJNYIUhBP2vz7n8wk",
  authDomain: "clienttyapp-94d49.firebaseapp.com",
  databaseURL: "https://clienttyapp-94d49-default-rtdb.firebaseio.com",
  projectId: "clienttyapp-94d49",
  storageBucket: "clienttyapp-94d49.appspot.com",
  messagingSenderId: "633904808818",
  appId: "1:633904808818:web:5ba4996f1631ec4ab853eb",
  measurementId: "G-9PQSB5XHCJ"
};
const ref1 = ref
const app = initializeApp(firebaseConfig);

const storage1 = getStorage(app);
const db = getDatabase(app);;

export {db, storage1, ref1}