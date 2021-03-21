import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyDoD_xGCWYNZMaraMsmQR6muBlpozZxG-s",
  authDomain: "pvt-ex3-firestore.firebaseapp.com",
  projectId: "pvt-ex3-firestore",
  storageBucket: "pvt-ex3-firestore.appspot.com",
  messagingSenderId: "726201134990",
  appId: "1:726201134990:web:094994f0cb20f019613edf",
  measurementId: "G-3QTZ348GRC"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();
