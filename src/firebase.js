import firebase from 'firebase';
import config from '../env.js';
import moment from 'moment';

export default firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const getReference = () => {
  const week = moment().startOf('week').format('YYYY-MM-DD');
  return firebase.database().ref(`expenses/${week}`);
};
