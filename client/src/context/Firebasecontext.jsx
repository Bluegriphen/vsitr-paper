import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyAjCJu7PHrDLDvYpIy_C3TSLbrQs9bnMW0",
  authDomain: "vsitr-paper.firebaseapp.com",
  projectId: "vsitr-paper",
  storageBucket: "vsitr-paper.firebasestorage.app",
  messagingSenderId: "52377845930",
  appId: "1:52377845930:web:c2b978b35a598de829d0d3",
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);

export const FirebaseProvider = (props) => {
  return <FirebaseContext.Provider>{props.children}</FirebaseContext.Provider>;
};
