import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from './initializeFirebase';

const firebaseLogIn = async (email, password) => {
  //Get auth
  const auth = getAuth();

  //request to firebase
  const response = signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      return 'success';
    })
    //Error Handling
    .catch((error) => {
      const errorMessage = error.message;
      switch (errorMessage) {
        case 'Firebase: Error (auth/user-not-found).':
          return 'User not found';
        case 'Firebase: Error (auth/wrong-password).':
          return 'Wrong password';
        case 'Firebase: Error (auth/invalid-email).':
          return 'Invalid email';
        default:
          return 'An error has occured';
      }
    });

  return response;
}

export default firebaseLogIn;