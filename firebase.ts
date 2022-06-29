import { getApp, getApps, initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCWBgPTL0vM_3XaIBawhHDOLp2fGhvD2UM",
  authDomain: "netflix-clone-72348.firebaseapp.com",
  projectId: "netflix-clone-72348",
  storageBucket: "netflix-clone-72348.appspot.com",
  messagingSenderId: "603908276350",
  appId: "1:603908276350:web:ddc0f4cee6d0db77ac982f"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export {auth, db};