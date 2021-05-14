import firebase from 'firebase';

const firebaseApp =  firebase.initializeApp({
    apiKey: "AIzaSyBy2t_GPu3EvFuHOTIOUn-yCdDKruU0CSU",
    authDomain: "twitter-clone-8248e.firebaseapp.com",
    projectId: "twitter-clone-8248e",
    storageBucket: "twitter-clone-8248e.appspot.com",
    messagingSenderId: "479179559739",
    appId: "1:479179559739:web:710f96bd93f8720d7a1d1e"
  });

  const db = firebaseApp.firestore();
  
  export default db;