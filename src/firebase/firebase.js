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

const database = firebase.database();

database.ref().set({
    name: 'Wei Kee',
    age: 23,
    isSingle: true,
    location: {
        city: 'Johor Bahru',
        country: 'Malaysia'
    }
}).then(() => {
    console.log('Data is saved!');
}).catch((e) => {
    console.log('Failed', e);
});

// database.ref('age').set(24);
// database.ref('location/city').set('New York');

// attributes
// height and weight

// setup then and catch
// make sure catch actually works
// switch rules to be open
// make sure then runs

database.ref('attr/height').set({
    height: 173,
    weight: 55
}).then(() => {
    console.log('Success');
}).catch((e) => {
    console.log('Failed');
});
