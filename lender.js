var db = firebase.firestore();
var Users = db.collection("Users");
var email = sessionStorage.getItem("email");
console.log(email);
var thisUser = Users.doc(sessionStorage.getItem("email"));
var scheduleRef = thisUser.collection("car_schedules");
 document.getElementById('user').innerHTML = 'Your Contact: '+email;

function updatePage() {
    // Create a reference to the cities collection
var doc_element = document.getElementById('modal_cards');
    
    scheduleRef.get().then(function(result) {
        if (result.size > 0) {
          result.forEach(function (documentSnapshot) {
            var data = documentSnapshot.data();
            console.log(data);

            var card = "<div class=\"card\">\n" +
        "<h3 class=\"distance\">" + data.carschedule + "</h3>\n"
        "   </div>";
        doc_element.innerHTML += card;
            });
        } else {
          console.log('no documents found');
        }
 
    });

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
        if (event.target == modal && event.target == datePicker) {
            modal.style.display = "none";
        }
    }
}

function createTimeSlot() {
    var doc_element = document.getElementById('modal_cards');

  //  modal.append("Testing");
    //modal.style.display = "none";
    console.log("here");
    var form_data = document.getElementById("dateAndTime").value;
    var username = sessionStorage.getItem("email");
    console.log(username);
    //doc_element.innerHTML += card;
    document.getElementById('create').style.display = "none";
    document.location.href = 'http://localhost:1337/lender.html';
    thisUser.collection("car_schedules").add({
    username: username,
    carschedule: form_data
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

function clearSession() {
    sessionStorage.clear();
}


