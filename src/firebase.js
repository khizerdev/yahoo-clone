import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDc6OTtsSobAmN54BX4uu5O9FzTap15oko",
    authDomain: "mail-d82f7.firebaseapp.com",
    projectId: "mail-d82f7",
    storageBucket: "mail-d82f7.appspot.com",
    messagingSenderId: "59710252474",
    appId: "1:59710252474:web:d0e96041f08a1bab51a983",
    measurementId: "G-QJHKNXJN6D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebaseApp.auth()
  const provider = new firebase.auth.GoogleAuthProvider()


  export {db,auth,provider}