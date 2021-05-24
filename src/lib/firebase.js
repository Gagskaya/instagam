import Firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyDpdc7ivHIHIeYHSSYTZQoTa8ejW9kj-5o",
  authDomain: "instagram-yt-34d29.firebaseapp.com",
  projectId: "instagram-yt-34d29",
  storageBucket: "instagram-yt-34d29.appspot.com",
  messagingSenderId: "991983088876",
  appId: "1:991983088876:web:b656b0202c5514b19061c9",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;
// seedDatabase(firebase);

export { firebase, FieldValue };
