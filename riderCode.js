function updateCars() {

    var car_name = document.getElementById("car-name");
    car_name.innerHTML = "db";

    var car_model = document.getElementById("car-model");
    car_name.innerHTML = "db";

    var car_distance = document.getElementById("car-distance");
    car_name.innerHTML = "db";

}

const smartcar = new Smartcar({
  clientId: '<your-client-id>',
  redirectUri: '<your-redirect-uri>',
  scope: ['read_vehicle_info', 'read_odometer'],
  onComplete: function(err, code) {
    if (err) {
      // handle errors from the authorization flow (i.e. user denies access)
    }
    // handle the returned code by sending it to your back-end server
    sendToBackend(code);
  },
});