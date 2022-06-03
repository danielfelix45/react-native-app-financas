import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCvaoUTY8LDRw117ZvZcglJwDkSZYDnpYY",
  authDomain: "meuapp-15b98.firebaseapp.com",
  databaseURL: "https://meuapp-15b98-default-rtdb.firebaseio.com",
  projectId: "meuapp-15b98",
  storageBucket: "meuapp-15b98.appspot.com",
  messagingSenderId: "208365258004",
  appId: "1:208365258004:web:dfca693ec9cbeb13a46e01",
  measurementId: "G-YYSKZY6CKJ"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
};

export default firebase;