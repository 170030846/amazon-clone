import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDHSnMKWm_514ew1uCComY1ZZ_TUDyY4go",
        authDomain: "clone-1-9d1c3.firebaseapp.com",
        databaseURL: "https://clone-1-9d1c3.firebaseio.com",
        projectId: "clone-1-9d1c3",
        storageBucket: "clone-1-9d1c3.appspot.com",
        messagingSenderId: "78865336266",
        appId: "1:78865336266:web:048a0701b6eb9bed4d7133",
        measurementId: "G-9T09BF22GW"
});


const auth = firebase.auth();

export{auth};