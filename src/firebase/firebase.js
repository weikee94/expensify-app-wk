import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAmtTH9TWpGTCbtPC3F3j8gFCHKRu9CPyw",
    authDomain: "expensify-a1201.firebaseapp.com",
    databaseURL: "https://expensify-a1201.firebaseio.com",
    projectId: "expensify-a1201",
    storageBucket: "expensify-a1201.appspot.com",
    messagingSenderId: "640617989524"
};

firebase.initializeApp(config);

firebase.database().ref().set({
    name: 'Wei Kee'
});