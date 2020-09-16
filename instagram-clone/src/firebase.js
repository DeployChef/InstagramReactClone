import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDr7cjk2HrB5JpkdOSn7XwVd33qMU0Yrh0",
    authDomain: "instagramreactclone.firebaseapp.com",
    databaseURL: "https://instagramreactclone.firebaseio.com",
    projectId: "instagramreactclone",
    storageBucket: "instagramreactclone.appspot.com",
    messagingSenderId: "532219025893",
    appId: "1:532219025893:web:6339489be194b3bd2db70c",
    measurementId: "G-RPSL9JYCWH"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage }