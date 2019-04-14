document.ready = function() {
}
var db = firebase.firestore();
var Users = db.collection("Users");
var email = sessionStorage.getItem("email");
var thisUser = Users.doc(sessionStorage.getItem("email"));  
var clientId = thisUser;
thisUser.get().then(function(doc) {

  clientId = doc.get('Client_ID'); 
  sessionStorage.setItem("clientId", clientId);
});

function updateCars() {

    var car_name = document.getElementById("car-name");
    car_name.innerHTML = "db";

    var car_model = document.getElementById("car-model");
    car_name.innerHTML = "db";

    var car_distance = document.getElementById("car-distance");
    car_name.innerHTML = "db";

}

const smartcar = new Smartcar({
  clientId: clientId,
  redirectUri: 'https://javascript-sdk.smartcar.com/redirect-2.1.1?app_origin=http://localhost:1337 ',
  scope: ['read_vehicle_info', 'read_odometer'],
  onComplete: function(err, code) {
    if (err) {
      // handle errors from the authorization flow (i.e. user denies access)
    }
    // handle the returned code by sending it to your back-end server
    alert(code);
    sendToBackend(code);
  },
});