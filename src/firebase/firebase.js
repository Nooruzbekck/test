import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBg18h3Pch0CUl_Fd7HWRyKE1LzeITRs6M",
  authDomain: "todo-redux-5a84c.firebaseapp.com",
  databaseURL: "https://todo-redux-5a84c-default-rtdb.firebaseio.com",
  projectId: "todo-redux-5a84c",
  storageBucket: "todo-redux-5a84c.appspot.com",
  messagingSenderId: "348634847959",
  appId: "1:348634847959:web:383457ce25a05269d4ee92",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const fireStore = getFirestore(app);
export const storage = getStorage(app);
