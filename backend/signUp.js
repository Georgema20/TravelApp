import {
  getAuth,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
//Need to be in here for this function to work 
import app from './initializeFirebase';

const firebaseSignIn = async (email, password, username) => {
  const auth = getAuth();
  //request to firebase 
  const response = await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
      return 'success';
    })
    .catch((error) => {
      const errorMessage = error.message;
      //Error Handling
      switch (errorMessage) {
        case 'Firebase: Error (auth/email-already-in-use).':
          return 'Email already in use';
        case 'Firebase: Error (auth/invalid-email).':
          return 'Invalid email';
        case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
          return 'Weak password! Needs to be 6+ characters!';
        default:
          return 'Account could not be made';
      }
    });

  return response;
};

export default firebaseSignIn;