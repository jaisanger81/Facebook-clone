import firebase from "firebase";
import "firebase/storage";

  const firebaseConfig = {
    apiKey: "AIzaSyCrxu82-7IT8kZJ4bHhmc1l2osvtU1Vb6c",
    authDomain: "facebook-jai.firebaseapp.com",
    projectId: "facebook-jai",
    storageBucket: "facebook-jai.appspot.com",
    messagingSenderId: "606710763838",
    appId: "1:606710763838:web:7225f5f88a4ece4f371c6f"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  const db = app.firestore();
  const storage = firebase.storage();
  export { db, storage};
 
