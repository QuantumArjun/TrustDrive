 var config = {
    apiKey: "AIzaSyDu7MTm-N154EVmrgSV1722ELwe8qSJ220",
    authDomain: "trust-drive-8c229.firebaseapp.com",
    databaseURL: "https://trust-drive-8c229.firebaseio.com",
    projectId: "trust-drive-8c229",
    storageBucket: "trust-drive-8c229.appspot.com",
    messagingSenderId: "431444258807"
  };
  firebase.initializeApp(config);
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      console.log(redirectUrl);
      return false;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.

      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: 'http://localhost:1337/rider.html',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>'
};


   var app = firebase.initializeApp(config);
   var db = firebase.firestore(app);
  var docRef = db.collection("Users").doc("michaelhanyy");
  console.log(docRef);

function login(who) {
   var app = firebase.initializeApp(config);
   var db = firebase.firestore(app);
  var docRef = db.collection("Users").doc("michaelhanyy");
  console.log(docRef);
  docRef.get().then(function(doc) {
    if (doc.exists) {
      document.location.href = 'http://localhost:1337/rider.html';
    } else {
        // doc.data() will be undefined in this case
      document.location.href = 'http://localhost:1337/home.html';
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
  if (metadata.getCreationTimestamp() == metadata.getLastSignInTimestamp()) {
    // The user is new, show them a fancy intro screen!
    console.log("NEWWW");
    document.location.href = 'http://localhost:1337/lender.html';
  } else {
    console.log("OLD");

    document.location.href = 'http://localhost:1337/lender.html';

    // This is an existing user, show them a welcome back screen.
  }
  var username = document.getElementById('username' + who).value;
  var password = document.getElementById('password' + who).value;
  var fail = false;
  
  console.log(who);
  if(username == "") {
    document.getElementById('fail1' + who).innerHTML = "Error: Username can't be blank";
    fail = true;
  } else {
    document.getElementById('fail1' + who).innerHTML = "";
  }
  if(password == "") {
    document.getElementById('fail2' + who).innerHTML = "Error: Password can't be blank";
    fail = true;
  } else {
    document.getElementById('fail2' + who).innerHTML = "";
  }
  if(fail) return;
  saveUsername(username.value);
  if(who == 'rider') window.location.replace("rider.html");
  if(who == 'lender') window.location.replace("lender.html");
}

function saveUsername(username) {
    sessionStorage.setItem("username", username);
}
