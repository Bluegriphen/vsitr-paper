import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./firebase";
export const getPapers = async () => {
  const snapshot = await getDocs(collection(db, "papers"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const addPaper = async (paper) => {
  await addDoc(collection(db, "papers"), paper);
};

