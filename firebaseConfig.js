import { initializeApp } from 'firebase/app';
import { getAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBfytiK0E8DGW1yJaLqO4jv4eOombAnJjQ',
  authDomain: 'meet495-2e135.firebaseapp.com',
  projectId: 'meet495-2e135',
  storageBucket: 'meet495-2e135.firebasestorage.app',
  messagingSenderId: '12844246609',
  appId: '1:12844246609:web:53172996166a934c50ba70',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const firebaseDb = getFirestore(firebaseApp);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
