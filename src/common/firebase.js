import firebase from 'firebase/app'
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYVRM71AqY-s10k69wG1p2ILvqB034G-8",
  authDomain: "moodmap-76d85.firebaseapp.com",
  projectId: "moodmap-76d85",
  storageBucket: "moodmap-76d85.appspot.com",
  messagingSenderId: "253690246442",
  appId: "1:253690246442:web:5ef269703b9077b8d29a53",
  measurementId: "G-LV31BVET5Y"
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const firestore = fb.firestore();
