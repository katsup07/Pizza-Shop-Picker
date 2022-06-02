import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAOME6QHV6V8729kVyXFU_YGh9X7-9m_DQ",
  authDomain: "pizza-shops-e5cfe.firebaseapp.com",
  databaseURL: "https://pizza-shops-e5cfe-default-rtdb.asia-southeast1.firebasedatabase.app",
  /* projectId: "pizza-shops-e5cfe",
  storageBucket: "pizza-shops-e5cfe.appspot.com",
  messagingSenderId: "260690186644",
  appId: "1:260690186644:web:4ad624b329e10b03223f81",
  measurementId: "G-FEL9FFR7L5" */
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;