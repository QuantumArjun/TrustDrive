var db = firebase.firestore();

function writeToFirebase() {
    var carModel = document.getElementById("model").value;
    var address = document.getElementById("address").value;
    var user = sessionStorage.getItem("user").email;
    var name = sessionStorage.getItem("user").displayName;
    user = "Ronak";
    var inUse = false;
    var pricePerHour = 7.50;

    db.collection("Users").doc("Ronak").set({
            carModel: carModel,
            inUse: inUse,
            pricePerHour: pricePerHour
                })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
}

function delay (URL) {
    setTimeout( function() { window.location = URL }, 1000);
}
