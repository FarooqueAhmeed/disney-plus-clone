import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA09gdCuLI0Zi5-CdrfbYV8RU5eSmtfu6o",
  authDomain: "zizo-disney-clone-2b468.firebaseapp.com",
  projectId: "zizo-disney-clone-2b468",
  storageBucket: "zizo-disney-clone-2b468.appspot.com",
  messagingSenderId: "604299743609",
  appId: "1:604299743609:web:6141c42561eff0aa33dfa8",
  measurementId: "G-KYXR5N3JR0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
