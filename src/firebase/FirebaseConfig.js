import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDbSHmnwvd2LU8xExFtErmFJeviT901Mq8',
	authDomain: 'mycollection-7c0d3.firebaseapp.com',
	projectId: 'mycollection-7c0d3',
	storageBucket: 'mycollection-7c0d3.appspot.com',
	messagingSenderId: '963787965719',
	appId: '1:963787965719:web:86f3a0b9e84312b36fa352',
}
// Initialize Cloud Firestore through Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const projectStorage = firebase.storage()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, projectStorage, timestamp }
