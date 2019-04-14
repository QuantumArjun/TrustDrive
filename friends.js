var config = {
    apiKey: "AIzaSyDu7MTm-N154EVmrgSV1722ELwe8qSJ220",
    authDomain: "trust-drive-8c229.firebaseapp.com",
    databaseURL: "https://trust-drive-8c229.firebaseio.com",
    projectId: "trust-drive-8c229",
    storageBucket: "trust-drive-8c229.appspot.com",
    messagingSenderId: "431444258807"
};
firebase.initializeApp(config);
var db = firebase.firestore();
var Users = db.collection("Users");
var email = sessionStorage.getItem("email");
console.log(email);
var thisUser = Users.doc(sessionStorage.getItem("email"));
var friends = thisUser.collection("friends");

<<<<<<< HEAD
function updateFriends() {
    // Create a reference to the cities collection
var doc_element = document.getElementById('deck');
    
    friends.get().then(function(result) {
        if (result.size > 0) {
          result.forEach(function (documentSnapshot) {
            var data = documentSnapshot.data();
            console.log(data);
            var card = "<div class=\"card\">\n" +
        "<h3 class=\"distance\">" + data.name + "</h3>\n"
        "   </div>";
        doc_element.innerHTML += card;
            });
        } else {
          console.log('no documents found');
        }
 
    });


    // Create a query against the collection.
    // var query = scheduleRef.where("username", "==", "undefined");

    // var qs = query.get().then(function(result) {
    //     result.forEach(function(e) {
    //         console.log(e);
    //     });
    //     console.log(result.size);
    // });



    // console.log(query.get());

}

function openModal1() {
    // Get the modal
    var modal = document.getElementById('create');

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
        if (event.target == modal && event.target == datePicker) {
            modal.style.display = "none";
        }
    }
}
function createFriend () {
    var friendName = document.getElementById("email").value;
    var email = sessionStorage.getItem("email");

    db.collection("Users").doc(email).collection("friends").add({
        name: friendName,
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });

}


/*
var db = firebase.firestore();
var Users = db.collection("Users");
var email = sessionStorage.getItem("email");
console.log(email);
var thisUser = Users.doc(sessionStorage.getItem("email"));
var scheduleRef = thisUser.collection("car_schedules");

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
=======

function updateFriends() {
    // Create a reference to the cities collection
    var doc_element = document.getElementById('deck');
    var db = firebase.firestore();
    var Users = db.collection("Users");
    var email = sessionStorage.getItem("email");
    var thisUser = Users.doc(sessionStorage.getItem("email"));
    var scheduleRef = thisUser.collection("friends");


    scheduleRef.get().then(function(result) {
        if (result.size > 0) {
            result.forEach(function (documentSnapshot) {
                var data = documentSnapshot.data();
                console.log(data);

>>>>>>> 5e967d6a73f942738d1a5e7597db5b9ad87a985a
                var card = "<div class=\"card\">\n" +
                    "<h3 class=\"distance\">" + data.name + "</h3>\n" +
                "   </div>";
                doc_element.innerHTML += card;
            });
        } else {
            console.log('no documents found');
        }

    });
<<<<<<< HEAD
        var elements = document.getElementsByClassName("friendName");
=======

    console.log(scheduleRef);

    // Create a query against the collection.
    // var query = scheduleRef.where("username", "==", "undefined");

    // var qs = query.get().then(function(result) {
    //     result.forEach(function(e) {
    //         console.log(e);
    //     });
    //     console.log(result.size);
    // });



    // console.log(query.get());

}

function updateCarInfo() {
    var elements = document.getElementsByClassName("friendName");
>>>>>>> 5e967d6a73f942738d1a5e7597db5b9ad87a985a
    console.log(elements);
    var emails= [];
    for (i = 0; i < elements.length; i++) {
        console.log(i);
        console.log(elements.item(i));
        emails += elements.item(i).innerText;
    }
    console.log(emails);
<<<<<<< HEAD

    //updateCarInfo();
}

function updateCarInfo() {
}

function openModal1() {
    // Get the modal
    var modal = document.getElementById('create');
    var datePicker = document.getElementById("dateAndTime");
=======
}

function openModal() {
    // Get the modal
    var modal = document.getElementById('create');
>>>>>>> 5e967d6a73f942738d1a5e7597db5b9ad87a985a

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
<<<<<<< HEAD
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
*/
=======
    var email = sessionStorage.getItem("email");
    var friendEmail = document.getElementById("submit").value;
    var db = firebase.firestore();
    db.collection("Users").doc(email).collection("friends").doc(friendEmail).set({
        name: name
    })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
}
>>>>>>> 5e967d6a73f942738d1a5e7597db5b9ad87a985a
