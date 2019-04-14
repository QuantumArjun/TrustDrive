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
this.ui = firebaseui.auth.AuthUI.getInstance() 
|| new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      console.log("TEST");
      login();
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


ui.start('#firebaseui-auth-container-lender', {

  signInSuccessUrl: 'http://localhost:1337/lender.html',
  signInOptions: [
 // List of OAuth providers supported.
  firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  // Other config options... 
});

window.onload = function() {
  alert("hi");
  var db = firebase.firestore(app);
  var docRef = db.collection("Users").doc("michaelhanyy");
  docRef.get().then(function(doc) {
    console.log(doc.data());
    alert(doc.get('has_account'));
  });
};

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
