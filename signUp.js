var db = firebase.firestore();

    function writeToFirebase() {
    var carModel = document.getElementById("model").value;
    var address = document.getElementById("address").value;
    var user = sessionStorage.getItem("username");
    user = "Ronak";
    var inUse = false;
    var pricePerHour = 14.50;

    db.collection("User").add({
            username: "works5",
                carschedule: "works6"
                })
    .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
    .catch(function(error) {
            console.error("Error adding document: ", error);
        });
}

function delay (URL) {
    setTimeout( function() { window.location = URL }, 1000);
}