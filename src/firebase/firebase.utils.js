import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDx9oaOm8CHL1Lb4MtOeY_Sw1xYmLz_-Hg",
  authDomain: "online-ecommerce-db.firebaseapp.com",
  projectId: "online-ecommerce-db",
  storageBucket: "online-ecommerce-db.appspot.com",
  messagingSenderId: "108909781359",
  appId: "1:108909781359:web:09b5092fa1f838fdde089a",
  measurementId: "G-QVJBN1YJL5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
