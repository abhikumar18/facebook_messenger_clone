import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

        apiKey: "AIzaSyCiA0XDFHzU8RfLMZEES5Yx-jH8fk1mMW0",
        authDomain: "facebook-messenger-clone-71562.firebaseapp.com",
        databaseURL: "https://facebook-messenger-clone-71562-default-rtdb.firebaseio.com",
        projectId: "facebook-messenger-clone-71562",
        storageBucket: "facebook-messenger-clone-71562.appspot.com",
        messagingSenderId: "679204510544",
        appId: "1:679204510544:web:d4c74134c791bad4882a55",
        measurementId: "G-EP6JP74YLC"
});

const db = firebaseApp.firestore();

export default db;