import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAAg1j2QWFMZ9ZGgXGGg-guOAWT-e9wMBs",
    authDomain: "goalcoach-24726.firebaseapp.com",
    databaseURL: "https://goalcoach-24726.firebaseio.com",
    projectId: "goalcoach-24726",
    storageBucket: "",
    messagingSenderId: "846254622700"
  };
  
 export  const firebaseApp = firebase.initializeApp(config);
 export  const goalRef = firebase.database().ref('goals');
 export const completeGoalRef = firebase.database().ref('completeGoals');
  