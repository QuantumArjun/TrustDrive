var firebase = require("firebase");
var db = firebase.firestore();


function writeToFirebase() {
    var carModel = document.getElementById("model").value;
    var address = document.getElementById("address").value;
    var user = sessionStorage.getItem("username");
    user = "Ronak";
    var inUse = false;
    var pricePerHour = 14.50;
    alert("Point1");


    db.collection("Users").doc("michaelhanyy").set({
        model: "EOGIN",
        address: "sldgn",
        inUse: false,
        pricePerHour: 8
    })

        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    alert("Point1");
}