import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAEDHEFy9R3k0hKwqtnddM5POM-2V-ShpM",
  authDomain: "expensise-48540.firebaseapp.com",
  databaseURL: "https://expensise-48540.firebaseio.com",
  projectId: "expensise-48540",
  storageBucket: "expensise-48540.appspot.com",
  messagingSenderId: "765845536945",
  appId: "1:765845536945:web:6782aa6f7ccfd06d616290",
  measurementId: "G-X56NKVZ7MM"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
  name: 'Leo',
  age: 24,
  job: 'software developer',
  isSingle: true,
  location: {
    city: 'London',
    country: 'UK'
  }
}).then(() => {
  console.log('data is saved');
}).catch((e) => {
  console.log('this failed', e);
})

database.ref().update({
  job: 'legend',
  location: {
    city: 'San Fran'
  }
});




  // database.ref('isSingle')
  // .remove()
  // .then(() => {
  //   console.log('Data removed')
  // }).catch((e) => {
  //   console.log('fail')
  // })











// database.ref().set('This is my data');

// database.ref('age').set(27);
// database.ref('location/city').set('Paris')

// database.ref('attributes').set({
//     height: 180,
//     weight: 80
//   }).then(() => {
//     console.log('This worked');
//   }).catch((e) => {
//     console.log('failed', e)
//   });




