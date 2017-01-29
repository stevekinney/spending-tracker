import firebase from 'firebase';
import moment from 'moment';

const config = {
  apiKey: "AIzaSyAiFDobN7hkPfbqRLKn4E5hvDKVrZDW6o4",
  authDomain: "spening-tracker.firebaseapp.com",
  databaseURL: "https://spening-tracker.firebaseio.com",
  storageBucket: "spening-tracker.appspot.com",
  messagingSenderId: "973100448978"
};

export default firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const getReference = () => {
  const week = moment().startOf('week').format('YYYY-MM-DD');
  return firebase.database().ref(`expenses/${week}`);
};
