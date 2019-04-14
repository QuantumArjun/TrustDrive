var db = firebase.firestore();

function updateFriends() {

    var email = sessionStorage.getItem("email");
    console.log(email);
    var doc_element = document.getElementById('deck');
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
    var elements = document.getElementsByClassName("friendName");
    console.log(elements);
    var emails= [];
    for (i = 0; i < elements.length; i++) {
        console.log(i);
        console.log(elements.item(i));
        emails += elements.item(i).innerText;
    }
    console.log(emails);
}

function openModal() {
    // Get the modal
    var modal = document.getElementById('create');
    var datePicker = document.getElementById("dateAndTime");

// Get the button that opens the modal
    var btn = document.getElementById("floating-button");

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
    modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function createFriend () {
    var doc_element = document.getElementById('deck');
    var friendName = document.getElementById("email").value;
    var card = "<div class=\"card\">\n" +
        "<h3 class=\"friendName\">" + friendName + "</h3>\n" +
        "   </div>";

    var email = sessionStorage.getItem("email");
    var documentReference = db.collection('Users').doc(email);
    documentReference.update({
        friends: firebase.firestore.FieldValue.arrayUnion(friendName)
    });

    doc_element.innerHTML += card;
}