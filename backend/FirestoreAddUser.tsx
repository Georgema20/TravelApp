import { setDoc, doc} from 'firebase/firestore';
import db from './InitializeFirebase';

const FirestoreAddUser = async (name : string, username: string, email:string, password: string, birthday : Date, id: string) => {

  //Setting a document 
 await setDoc(doc(db, 'users', username), {
   name: name,
   username: username, 
   email: email, 
   password: password,
   birthday: birthday, 
   uid: id
 });
};

export default FirestoreAddUser;
