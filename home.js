 var config = {
    apiKey: "AIzaSyDu7MTm-N154EVmrgSV1722ELwe8qSJ220",
    authDomain: "trust-drive-8c229.firebaseapp.com",
    databaseURL: "https://trust-drive-8c229.firebaseio.com",
    projectId: "trust-drive-8c229",
  storageBucket: "trust-drive-8c229.appspot.com",
  messagingSenderId: "431444258807"
};

if( !firebase.apps.length){
  var app = firebase.initializeApp(config);
}

var provider = new firebase.auth.GoogleAuthProvider();

function fb_login() {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    login(user);
    console.log(user.email);
    console.log(user.displayName);
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

//
// window.onload = function() {
//   alert("hi");
//   var db = firebase.firestore(app);
//   var docRef = db.collection("Users").doc("michaelhanyy");
//   docRef.get().then(function(doc) {
//     console.log(doc.data());
//     alert(doc.get('has_account'));
//   });
// };

function login() {
  alert("hi");
  var db = firebase.firestore(app);
  var docRef = db.collection("Users").doc("michaelhanyy");
  docRef.get().then(function(doc) {
    console.log(doc.data());
    alert(doc.get('has_account'));
  });
}

function saveUsername(username) {
    sessionStorage.setItem("username", username);
}
