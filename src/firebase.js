import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfiguration = {
    apiKey: "AIzaSyCr2379AU9BBibrNzKPEqgslZ-xkKMgyfU",
    authDomain: "blog-motahhareh.firebaseapp.com",
    projectId: "blog-motahhareh",
    storageBucket: "blog-motahhareh.appspot.com",
    messagingSenderId: "611484903629",
    appId: "1:611484903629:web:7a9f51fab1ba82b51e6184"
};


 const App = initializeApp(firebaseConfiguration);  //! Initialize Firebase with the configuration object

const firestoreDB = getFirestore(App);  //! Get a Firestore instance from the app object

const auth = getAuth(App); //! Get an Auth instance for the app object

export{firestoreDB, auth}; //! Export the Firestore instance and the Auth instance so that they can be used in other files

