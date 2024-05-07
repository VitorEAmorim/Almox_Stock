import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAqvLTLfL-aLxopzdhsA4zfueYrTTTtz7I",
    authDomain: "mini-wms-f28ea.firebaseapp.com",
    projectId: "mini-wms-f28ea",
    storageBucket: "mini-wms-f28ea.appspot.com",
    messagingSenderId: "989791990100",
    appId: "1:989791990100:web:5b9620fa1c13331d6758c1",
    measurementId: "G-TCP2ZE70VT"
};

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
