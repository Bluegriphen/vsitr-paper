import { useContext, createContext, useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  const [papers, setPapers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchPapers = async () => {
    const snapshot = await getDocs(collection(db, "papers"));
    setPapers(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchPapers();
  }, []);

  const getFilteredPapers = (department, semester, code) => {
    return papers.filter(
      (item) =>
        item.department === department &&
        String(item.semester) === String(semester) &&
        (!code || item.code.toLowerCase() === code.toLowerCase())
    );
  };

  return (
    <FirebaseContext.Provider
      value={{
        db,
        papers,
        fetchPapers,
        searchTerm,
        setSearchTerm,
        getFilteredPapers,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => useContext(FirebaseContext);
