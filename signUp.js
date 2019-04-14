var db = firebase.firestore();

function writeToFirebase() {
    var carModel = document.getElementById("model").value;
    var address = document.getElementById("address").value;
    var user = sessionStorage.getItem("username");
    user = "Ronak";
    var inUse = false;
    var pricePerHour = 14.50;

    console.log("Reached")


    db.collection("User").add({
    username: "works",
    carschedule: "works"
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

function delay (URL) {
    setTimeout( function() { window.location = URL }, 500 );
}