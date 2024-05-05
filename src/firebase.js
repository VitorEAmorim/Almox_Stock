import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
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
    console.log("Firebase inicializado");
} else {
    app = getApps()[0];
    console.log("Firebase já inicializado");
}

const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db };