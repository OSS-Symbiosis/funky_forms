import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAaeBho9jR8iPTPA2eneqittiSSNUFUwWw",
  authDomain: "funky-forms.firebaseapp.com",
  projectId: "funky-forms",
  storageBucket: "funky-forms.appspot.com",
  messagingSenderId: "522857204470",
  appId: "1:522857204470:web:a8050421b7622405543ad7",
  databaseURL: "https://funky-forms.asia-southeast2.firebaseio.com",
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();

export default firebase;