import { getDoc, getFirestore } from 'firebase/firestore';
import { doc } from 'firebase/firestore';

const FirestoreCheckIfUserExists= async (
  username: string,
) => {

  const db = getFirestore();

  //Get doc snapshop 
  const docSnap = getDoc(doc(db, 'users', username)).then((doc)=>{
   
    //Doc is the stuff we get back
    if(doc.exists())
    {
      return true;
    }

    return false;})
    
  return docSnap;
};

export default FirestoreCheckIfUserExists;
