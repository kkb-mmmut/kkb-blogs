// Import the functions you need from the SDKs you need
// import firebase from "firebase/compat/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";  
const firebaseConfig = {
  apiKey: "AIzaSyCMT81_9K-0TTwXZ60M3IH0DGIeQntMAOk",
  authDomain: "kkb-blogs.firebaseapp.com",
  databaseURL:"https://kkb-blogs.firebaseapp.com",
  projectId: "kkb-blogs",
  storageBucket: "kkb-blogs.appspot.com",
  messagingSenderId: "243229947121",
  appId: "1:243229947121:web:482a244a645955d72ae550"
};
firebase.initializeApp(firebaseConfig); 
export const firestore = firebase.firestore();