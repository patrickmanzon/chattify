import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCSAtebgnsulLJ6cw-G7gKLnkC17S3_a5I",
    authDomain: "chattify-16c95.firebaseapp.com",
    databaseURL: "https://chattify-16c95.firebaseio.com",
    projectId: "chattify-16c95",
    storageBucket: "chattify-16c95.appspot.com",
    messagingSenderId: "175472127229",
    appId: "1:175472127229:web:ee3469daa6fa2592"
  }
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  export default firebaseApp.firestore()