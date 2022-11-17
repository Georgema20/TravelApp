import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


const FirebaseLogIn = async (email:string, password:string) => {

  //Get auth
  const auth = getAuth();

  //Request to firebase
  const response = signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return {message:'success', data: user};
    })
    //Error Handling
    .catch((error) => {
      const errorMessage = error.message;
      switch (errorMessage) {
        case 'Firebase: Error (auth/user-not-found).':
          return {message:'User not found', data: null};
        case 'Firebase: Error (auth/wrong-password).':
          return { message: 'Wrong password', data: null };
        case 'Firebase: Error (auth/invalid-email).':
          return { message: 'Invalid email', data: null }
        default:
          return { message: 'An error has occured', data: null }
      }
    });
  return response;
}

export default FirebaseLogIn;