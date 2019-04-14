var db = firebase.firestore();

function writeToFirebase() {
    var carModel = document.getElementById("model").value;
    var address = document.getElementById("address").value;
    var email = sessionStorage.getItem("email");
    var name = sessionStorage.getItem("name");
    var pricePerHour = 7.50;

    db.collection("Users").doc("email").set({
        name: name,
        has_account: true,
        carModel: carModel,
        pricePerHour: 8
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
