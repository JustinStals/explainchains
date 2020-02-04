import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
        apiKey: "AIzaSyBQsJvoFwyouB02XozQb372cXkN9cDeKps",
        authDomain: "explainchains.firebaseapp.com",
        databaseURL: "https://explainchains.firebaseio.com",
        projectId: "explainchains",
        storagBucket: "explainchains.appspot.com",
        messagingSenderId: "748527846272",
        appId: "1:748527846272:web:6b3296c45b063a67cdb765",
};

firebase.initializeApp(config)
firebase.firestore()

export default firebase;