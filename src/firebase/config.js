import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWZbL2KHkM3IhLOCPH4nTx_VqTMZHSD9s",
  authDomain: "firegram-my-first-project.firebaseapp.com",
  databaseURL: "https://firegram-my-first-project.firebaseio.com",
  projectId: "firegram-my-first-project",
  storageBucket: "firegram-my-first-project.appspot.com",
  messagingSenderId: "682504423026",
  appId: "1:682504423026:web:c185bed44cf7aa488564eb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp }