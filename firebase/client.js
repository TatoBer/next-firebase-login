import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { doc, collection, addDoc, getFirestore, query, where, getDocs, deleteDoc } from "firebase/firestore";

import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvQ8CtU_GB3gMSnjT9SoIIN6E5Sv41J1Q",
  authDomain: "prueba-login-f6a89.firebaseapp.com",
  projectId: "prueba-login-f6a89",
  storageBucket: "prueba-login-f6a89.appspot.com",
  messagingSenderId: "172074214535",
  appId: "1:172074214535:web:f59dd4c34112cdd6634422",
  measurementId: "G-M2E48T8VVG",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const mapUserFromFirebaseAuth = (userIn) => {
  if (!userIn) {
    return null;
  } else if (userIn.user) {
    const { user } = userIn;
    const { displayName, email, photoURL } = user;
    return {
      displayName,
      email,
      photoURL,
    };
  } else {
    const { _delegate } = userIn;
    const { photoURL, email, displayName } = _delegate;
    return {
      displayName,
      email,
      photoURL,
    };
  }
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = mapUserFromFirebaseAuth(user);
    onChange(normalizedUser);
  });
};

export const logOut = () => {
  firebase.auth().signOut();
};

export const loginWithGitHub = () => {
  const githubProvider = new GithubAuthProvider();
  githubProvider.setCustomParameters(firebaseConfig);
  const auth = getAuth();
  return signInWithPopup(auth, githubProvider).then(mapUserFromFirebaseAuth);
};

const db = getFirestore(app);

export const addNewNote =  ({ title, description, icon, userEmail }) => {
   addDoc(collection(db, "notes"), {
    title: title,
    description: description,
    icon: String(icon),
    userEmail: userEmail,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
  });
};

export const getNotes = async (user)=>{
  const q = query(collection(db, "notes"), where("userEmail", "==" , user.email))
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map(doc=>{
    return {id: doc.id, ...doc.data()}
  })
}

export const getUniqueNote = async (note)=>{
  try {
    const q = query(collection(db, "notes"), where(firebase.firestore.FieldPath.documentId(), "==", note))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc=>{
      return {id: doc.id, ...doc.data()}
    })
  }catch {(err=>console.log(err))}
  
}

export const deleteNote = async (note)=>{
  await deleteDoc(doc(db, "notes", note))
}