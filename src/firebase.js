import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCn1tSbM1az5-aqZWpYzN2ha2Xpy0ZKk0M",
  authDomain: "mmu-epilepsy-app.firebaseapp.com",
  projectId: "mmu-epilepsy-app",
  storageBucket: "mmu-epilepsy-app.appspot.com",
  messagingSenderId: "823906982132",
  appId: "1:823906982132:web:97f66d0fc0748b23cb66a1",
  measurementId: "G-4EZD3JZQ5S",
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
