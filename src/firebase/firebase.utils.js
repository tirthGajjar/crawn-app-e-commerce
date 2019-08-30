import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB8ODse4yW7bCgq0uYFnp_H8JPqGNE2hTA",
  authDomain: "crwn-db-a41b5.firebaseapp.com",
  databaseURL: "https://crwn-db-a41b5.firebaseio.com",
  projectId: "crwn-db-a41b5",
  storageBucket: "",
  messagingSenderId: "906100927044",
  appId: "1:906100927044:web:3d5bf158222f9f3f",
};

firebase.initializeApp(config);

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
        createdAt,
        email,
        ...additionalData,
      });
    } catch (erorr) {
      console.log(erorr);
    }
  }
  return userRef;
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
