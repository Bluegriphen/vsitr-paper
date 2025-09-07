import { useContext, createContext } from "react";
import { db } from "../firebase/firebase";
import { getAuth } from "firebase/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const auth = getAuth();
const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  const addPaper = async (paperData) => {
    try {
      await addDoc(collection(db, "papers"), {
        ...paperData,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error adding paper:", error);
    }
  };

  return (
    <FirebaseContext.Provider value={{ auth, db, addPaper }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => useContext(FirebaseContext);
