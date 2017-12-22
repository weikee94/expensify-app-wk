import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// 把object变成array method1
// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// 把object变成array method2
// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
// })


//update data
// database.ref('notes/-L0JR24oogioenze_dOu').update({
//     body: 'Buy Food'
// });

// database.ref('expenses').push({
//     description: 'A',
//     note: 'Note A',
//     amount: 1,
//     createdAt: 2017
// });

// database.ref('expenses').push({
//     description: 'B',
//     note: 'Note B',
//     amount: 2,
//     createdAt: 2018
// });

// database.ref('notes').push({
//     title: 'C',
//     body: 'React'
// });

// const firebaseNotes = {
//     notes: {
//         a: {
//             title: 'A',
//             body: 'Body A'
//         },
//         b: {
//             title: 'B',
//             body: 'Body B'
//         }
//     }
// };

// subscription method
// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('stressLevel').set(10);
// }, 3500);

// unsubscribe by using off method
// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('stressLevel').set(30);
// }, 10500);

// database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// 删除data 1
// database.ref('isSingle')
//         .remove()
//         .then(() => {
//             console.log('removed');
//         }).catch((e) => {
//             console.log('Error', e);
//         });
// 删除data 2
// database.ref('age').set(null);

// database.ref().set({
//     stressLevel: 6,
//     job: {
//         title: 'Software Engineer',
//         company: 'Google'
//     },
//     location: {
//         country: 'England'
//     }
// });

// update data
// database.ref().update({
//     stressLevel: 9,
    // update object 时候要使用/
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref().set({
//     name: 'Wei Kee',
//     age: 23,
//     isSingle: true,
//     location: {
//         city: 'Johor Bahru',
//         country: 'Malaysia'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('Failed', e);
// });

// database.ref('age').set(24);
// database.ref('location/city').set('New York');

// attributes
// height and weight

// setup then and catch
// make sure catch actually works
// switch rules to be open
// make sure then runs

// database.ref('attr/height').set({
//     height: 173,
//     weight: 55
// }).then(() => {
//     console.log('Success');
// }).catch((e) => {
//     console.log('Failed');
// });
