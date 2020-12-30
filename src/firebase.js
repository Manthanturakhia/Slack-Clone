// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBafuIR_gZhJ2WCzm4aH9ToNeVm9RN9T2I",
    authDomain: "slack-clone-9196d.firebaseapp.com",
    projectId: "slack-clone-9196d",
    storageBucket: "slack-clone-9196d.appspot.com",
    messagingSenderId: "206549710018",
    appId: "1:206549710018:web:238a8fd24882ae1338375b",
    measurementId: "G-Q2TWE9FXYZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider}
  export default db; 