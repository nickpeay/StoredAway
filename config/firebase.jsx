// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCt-due4Ds4c8L0QtDyKBYSp-beHC7giz0',
  authDomain: 'storedaway-73026.firebaseapp.com',
  projectId: 'storedaway-73026',
  storageBucket: 'storedaway-73026.appspot.com',
  messagingSenderId: '484863575632',
  appId: '1:484863575632:web:c9298bdc11579b25c73355',
  measurementId: 'G-ZKFFZY0474',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase;
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
