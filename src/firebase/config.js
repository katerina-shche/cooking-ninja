import firebase from "firebase/app"
import 'firebase/firestore' 



const firebaseConfig = {
  apiKey: "AIzaSyDMqialLCoA1Q9Jl9_NF-AbmAXCq6oMilI",
  authDomain: "cooking-ninja-site-kate.firebaseapp.com",
  projectId: "cooking-ninja-site-kate",
  storageBucket: "cooking-ninja-site-kate.appspot.com",
  messagingSenderId: "771893717283",
  appId: "1:771893717283:web:c0125eb83582bd39f94496"
}

  // init firebase

  firebase.initializeApp(firebaseConfig)

  //init services

  const projectFirestore = firebase.firestore()

  export { projectFirestore }
