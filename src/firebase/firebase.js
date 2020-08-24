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


//child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

//child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

//child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((child) => {
//       expenses.push({
//         id: child.key,
//         ...child.val()
//       })
//     });
//     console.log(expenses);
//   });


// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((child) => {
//       expenses.push({
//         id: child.key,
//         ...child.val()
//       })
//     });
//     console.log(expenses);
//   });










// database.ref('notes').push({
//   title: 'Course topics',
//   body: 'React native'
// });


// database.ref('expenses').push({
//   description: 'Bus',
//   note: 'Was fun',
//   amount: 30,
//   createdAt: 1
// })










// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().job.company}.` )
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// }, (e) => {
//   console.log('error with data fetching', e);
// })

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val)
//   })
//   .catch((e) => {
//     console.log('error', e)
//   })



// database.ref().set({
//   name: 'Leo',
//   age: 24,
//   stressLevel: 5,
//   job: {
//     title: 'Software Developer',
//     company: 'JoinIn'
//   },
//   isSingle: true,
//   location: {
//     city: 'London',
//     country: 'UK'
//   }
// }).then(() => {
//   console.log('data is saved');
// }).catch((e) => {
//   console.log('this failed', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Manchester'
// });




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




