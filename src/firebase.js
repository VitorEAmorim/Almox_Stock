import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

console.log("Firebase Config:", firebaseConfig);

let app;

if (!getApps().length) {
    app = initializeApp(firebaseConfig);
    console.log("Firebase initialized");
} else {
    app = getApps()[0];
    console.log("Firebase already initialized");
}

const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
