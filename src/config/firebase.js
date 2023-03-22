import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBln2113fHOHYliAdGa3mG8S3qllOL8zR8",
  authDomain: "aulafirebase-65de4.firebaseapp.com",
  projectId: "aulafirebase-65de4",
  storageBucket: "aulafirebase-65de4.appspot.com",
  messagingSenderId: "1022180181973",
  appId: "1:1022180181973:web:0e5b2db3a67c1ee1955f5c"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth }