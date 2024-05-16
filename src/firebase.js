import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.NEXT_API_KEY,
    authDomain: process.env.NEXT_AUTH_DOMAIN,
    projectId: process.env.NEXT_PROJECT_ID,
    storageBucket: process.env.NEXT_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_APP_ID,
    measurementId: process.env.NEXT_MEASUREMENT_ID
};

let app;

if (!getApps().length) {
    app = initializeApp(firebaseConfig);
    console.log("Firebase initialized");
} else {
    app = getApps()[0];
    console.log(firebaseConfig)
    console.log("Firebase already initialized");
}

const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db };
