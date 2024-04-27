import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_APIKEY,
//   authDomain:import.meta.env.VITE_AUTHDOMAIN,
//   projectId:import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
//   appId:import.meta.env.VITE_APPID
// };



const firebaseConfig = {
  apiKey: "AIzaSyC3HVjUvZJyMMwc_QGqARDcw5eCn_xRrFM",
  authDomain: "b9-a10-asia-explorer-client.firebaseapp.com",
  projectId: "b9-a10-asia-explorer-client",
  storageBucket: "b9-a10-asia-explorer-client.appspot.com",
  messagingSenderId: "838088809601",
  appId: "1:838088809601:web:5f7bd0ee25484078754180"
};






// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth;