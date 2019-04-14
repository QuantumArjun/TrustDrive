var db = firebase.firestore();

function writeToFirebase() {

    var carModel = document.getElementById("model").value;
    var address = document.getElementById("address").value;
    var user = sessionStorage.getItem("username");
    user = "Ronak";
    var inUse = false;
    var pricePerHour = 14.50;

    db.collection("Users").add({
        model: carModel,
        address: address,
        inUse: inUse,
        pricePerHour: pricePerHour
    })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

}