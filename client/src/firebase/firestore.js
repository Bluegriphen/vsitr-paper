import {db} from "./firebase";

export const getPapers = async () =>{
    const snapshot = await getDocs(collection(db, "papers"));
    return snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()}));
};