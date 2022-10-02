import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUbGkaoqZd_LiEkJXHPIzKdcu7N3MtuoM",
  authDomain: "realtor-clone-react-app.firebaseapp.com",
  projectId: "realtor-clone-react-app",
  storageBucket: "realtor-clone-react-app.appspot.com",
  messagingSenderId: "190621102605",
  appId: "1:190621102605:web:967e2adcd90face2d81b44",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
