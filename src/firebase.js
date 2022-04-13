import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAKyy-qau6T6LivYFHOafH66dCr7DH8SBg",
    authDomain: "disneyplus-hotstar-clone-110a2.firebaseapp.com",
    projectId: "disneyplus-hotstar-clone-110a2",
    storageBucket: "disneyplus-hotstar-clone-110a2.appspot.com",
    messagingSenderId: "155934204499",
    appId: "1:155934204499:web:a85530b709608b0cbc1ca6",
    measurementId: "G-GDZCCN8MY9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); //initializing the firebase 
  const db = firebaseApp.firestore();// connecting to database
  const auth = firebase.auth(); // for authenticating
  const provider = new firebase.auth.GoogleAuthProvider(); // for providing  google login popup for login
  const storage =  firebase.storage();  // for storing images and video in fiebase

  export {auth,provider,storage};
  export default db;