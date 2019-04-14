document.ready = function() {
}
    var db = firebase.firestore();
var Users = db.collection("Users");
var email = sessionStorage.getItem("email");
var thisUser = Users.doc(sessionStorage.getItem("email"));
var clientId = thisUser;
// thisUser.get().then(function(doc) {
//         clientId = doc.get('Client_ID');
//     });

//   clientId = doc.get('Client_ID'); 
//   sessionStorage.setItem("clientId", clientId);
// });


function updatePage() {
    // Create a reference to the cities collection
    var doc_element = document.getElementById('overall_container');

    var query = Users.where("lendsCar", "==", true);

    query.get().then(function(result) {
            if (result.size > 0) {
                result.forEach(function (documentSnapshot) {
                        var data = documentSnapshot.data();
                        console.log(data);
        var card = '<div class="container"><button class="card">' +
        '<h3 class="title">Arjun Karanam</h3>' +
        '<h3 class="distance">' + data.carModel + '</h3>' +
        '<h3 class = "carModel" id = "car-model"> Toyota Camry </h3>' +
            +'</button></div>';
        //
        //     var card = "<div class=\"container\">\n" +
        // "    <h3 class=\"title\">Arjun Karanam</h3>\n" +
        // "    <h3 class=\"distance\">" + data.carModel + "</h3>\n" +
        // "<h3 class = \"carModel\" id = \"car-model\"> Toyota Camry </h3>" +
        // "   </div>";
        doc_element.innerHTML += card;
                    });
            } else {
                console.log('no documents found');
            }

        });


    // Create a query against the collection.
    // var query = scheduleRef.where("lendCar", "==", true);

    // var qs = query.get().then(function(result) {
    //     result.forEach(function(e) {
    //         console.log(e);
    //     });
    //     console.log(result.size);
    // });



    // console.log(query.get());

}

<<<<<<< HEAD
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
=======
//const smartcar = new Smartcar({
//   clientId: clientId,
//   redirectUri: '<your-redirect-uri>',
//   scope: ['read_vehicle_info', 'read_odometer'],
//   onComplete: function(err, code) {
//     if (err) {
//       // handle errors from the authorization flow (i.e. user denies access)
//     }
//     // handle the returned code by sending it to your back-end server
//     sendToBackend(code);
//   },
<<<<<<< HEAD
// });
=======
// });
>>>>>>> 97496eb3aa6d96b335cc5a24c1211a62c63d6d4c
>>>>>>> 91e4e164dcc5e0875ba507a1981d21886202bcf8
