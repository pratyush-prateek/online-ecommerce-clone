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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
