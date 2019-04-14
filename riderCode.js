document.ready = function() {
}
var db = firebase.firestore();
var Users = db.collection("Users");
var email = sessionStorage.getItem("email");
var thisUser = Users.doc(sessionStorage.getItem("email"));  
var clientId = thisUser;
thisUser.get().then(function(doc) {
  clientId = doc.get('Client_ID');    
});

function updatePage() {
    // Create a reference to the cities collection
var doc_element = document.getElementById('overall_container');

var query = Users.where("lendsCar", "==", true);

    
    query.get().then(function(result) {
        if (result.size > 0) {
          result.forEach(function (documentSnapshot) {
            var data = documentSnapshot.data();
            console.log(data);

            var card = "<div class=\"container\">\n" +
        "    <h3 class=\"title\">Arjun Karanam</h3>\n" +
        "    <h3 class=\"distance\">" + data.carModel + "</h3>\n" +
        "<h3 class = \"carModel\" id = \"car-model\"> Toyota Camry </h3>" + 
        "   </div>";
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
// });