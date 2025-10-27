import app from "firebase/app"
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBdDs2O0SlMSEWPfIfcSG2CHMe5ifBXK4s",
    authDomain: "clasefirebasedemo.firebaseapp.com",
    projectId: "clasefirebasedemo",
    storageBucket: "clasefirebasedemo.firebasestorage.app",
    messagingSenderId: "803902314416",
    appId: "1:803902314416:web:d6372c147ac119d902e875"
  };
  app.initializeApp(firebaseConfig)

  export const auth = firebase.auth()
  export const storage = app.storage()
  export const db = app.firestore()
  