// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore,} from 'firebase/firestore';
import { initializeFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBLWG2IQdlFeC4rv2gcuMde-iOU-FP73Vw',
  authDomain: 'travelapp-c7551.firebaseapp.com',
  projectId: 'travelapp-c7551',
  storageBucket: 'travelapp-c7551.appspot.com',
  messagingSenderId: '743263541625',
  appId: '1:743263541625:web:8e0ffbc8ea9fca14a477a8',
  measurementId: 'G-C8DE968LV2',
};



  const app = initializeApp(firebaseConfig);
  
  initializeFirestore(app, { experimentalForceLongPolling: true });
  
  //Initializing auth and firestore
  const db = getFirestore();
  const auth = getAuth();

export default db;



