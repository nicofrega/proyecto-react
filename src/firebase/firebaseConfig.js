
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


export const firebaseConfig = {
    apiKey: import.meta.env.VITE_FS_APIKEY,
    authDomain: "wakeboard-react.firebaseapp.com",
    projectId: import.meta.env.VITE_FS_PROJECT_ID,
    storageBucket: "wakeboard-react.firebasestorage.app",
    messagingSenderId: "185423120953",
    appId: import.meta.env.VITE_FS_APP_ID
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
