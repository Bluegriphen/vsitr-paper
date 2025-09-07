import { useFirebase } from "./context/FirebaseContext";

const Test = () => {
  const { db, auth } = useFirebase();
  console.log("Firestore DB:", db);
  console.log("Auth:", auth);
  return <h1>Firebase Connected ✅</h1>;
};
export default Test;
