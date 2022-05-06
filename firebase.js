import firebase from 'firebase';

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
if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
} 
 const storage1 = firebase.storage();
 const db = firebase.database(); 
export default storage1;