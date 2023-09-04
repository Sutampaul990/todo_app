import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmhc0c0Le91h0FJs6nuohoawuMHXrDAPE",
  authDomain: "fir-todo-app-78208.firebaseapp.com",
  projectId: "fir-todo-app-78208",
  storageBucket: "fir-todo-app-78208.appspot.com",
  messagingSenderId: "1009599132315",
  appId: "1:1009599132315:web:0f80effc855bfac263cc3e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);