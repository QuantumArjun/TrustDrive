var db = firebase.firestore();

function updateFriends() {

    var email = sessionStorage.getItem("email");
    var doc_element = document.getElementById('deck');
    alert(email);
    var documentReference = db.collection('Users').doc(email);
    documentReference.get().then(function(documentSnapshot) {
        if (documentSnapshot.exists) {
            var data = documentSnapshot.data();
            var friends = data.friends;
            friends.forEach(function(element) {
                var card = "<div class=\"card\">\n" +
                "<h3 class=\"friendName\">" + element + "</h3>\n" +
                "   </div>";
                doc_element.innerHTML += card;
            });
        } else {
            console.log('document not found');
        }
    });
    updateCarInfo();
}

function updateCarInfo() {
    var emails = document.getElementsByClassName("friendName");
    alert("we mde it");
    console.log(emails);
}