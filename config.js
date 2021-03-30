import firebase from "firebase";
require("@firebase/firestore");
var firebaseConfig = {
    apiKey: "AIzaSyAYIKNcdDs5tWpOOyhdteH9laB9XkYrGwQ",
    authDomain: "programmer-hub.firebaseapp.com",
    projectId: "programmer-hub",
    storageBucket: "programmer-hub.appspot.com",
    messagingSenderId: "752360321356",
    appId: "1:752360321356:web:178dabf325a0869770dfe9"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
