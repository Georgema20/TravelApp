import {
  getAuth,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import FirestoreAddUser from './FirestoreAddUser';

const FirebaseSignIn = async (
  name: string,
  username: string,
  email: string,
  password: string,
  birthday: Date
) => {
  //Get Auth bc we need auth in next function
  const auth = getAuth();
  //Request to firebase
  const response = await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //Signed in
      const user = userCredential.user;
      
      //Adding to firestore
      FirestoreAddUser(name, username, email, password,birthday, user.uid);
  
      return { message: 'success', data: user };
    })
    .catch((error) => {
      const errorMessage = error.message;
      //Error Handling
      switch (errorMessage) {
        case 'Firebase: Error (auth/email-already-in-use).':
          return { message: 'Email already in use', data: null };
        case 'Firebase: Error (auth/invalid-email).':
          return { message: 'Invalid email', data: null };
        case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
          return {
            message: 'Weak password! Needs to be 6+ characters!',
            data: null,
          };
        default:
          return {
            message: 'Account could not be made',
            data: null,
          };
      }
    });
  return response;
};

export default FirebaseSignIn;