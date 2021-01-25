import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { config } from "../common/config";

const firebaseConfig = {
  apiKey: "AIzaSyAYVRM71AqY-s10k69wG1p2ILvqB034G-8",
  authDomain: "moodmap-76d85.firebaseapp.com",
  projectId: "moodmap-76d85",
  storageBucket: "moodmap-76d85.appspot.com",
  messagingSenderId: "253690246442",
  appId: "1:253690246442:web:5ef269703b9077b8d29a53",
  measurementId: "G-LV31BVET5Y"
};

export const fb = firebase.initializeApp(firebaseConfig);

export const firestore = fb.firestore();
export const auth = fb.auth();

export const provider = new firebase.auth.GoogleAuthProvider();

export const setConfigMoodFirestore = (setIsLoading) => {
  let squareList = [], index = 1;

  for (let i = 0; i < config.positions.length; i++) {
    for (let j = 1; j <= config.positions[i].days; j++) {
      const date = {
        'index': index,
        'mood': 'none',
        'date': {
          'month': config.positions[i].month,
          'day': j,
        },
      };
      squareList.push(date);
      firestore.collection("mood-registry").doc(`${index}`).set(date);
      index++;
    }
  }

  setIsLoading(true);
}

export const intDataFromFirestore = async(setIsLoading) => {
  // const moodRef = firestore.collection('mood-registry');
  // let moodDocs = await moodRef.get();

  // if (moodDocs.empty) {
  if (false) {
    setConfigMoodFirestore(setIsLoading);
  } else {
    setIsLoading(true);
  }
}