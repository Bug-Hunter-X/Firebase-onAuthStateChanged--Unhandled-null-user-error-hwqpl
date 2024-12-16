```javascript
//Incorrect usage of Firebase's onAuthStateChanged
firebase.auth().onAuthStateChanged(user => {
  // Incorrect: Directly using user inside the callback without checking for null
  console.log(user.uid); // This will throw an error if the user is not logged in
});
```