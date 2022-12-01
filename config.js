import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDYdGu7ep_jDnsm5HRMPlQhqdPx8dQIIZQ",
  authDomain: "projeto-71-440c7.firebaseapp.com",
  projectId: "projeto-71-440c7",
  storageBucket: "projeto-71-440c7.appspot.com",
  messagingSenderId: "918007715701",
  appId: "1:918007715701:web:0c1b0a238128192ba1253c"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
