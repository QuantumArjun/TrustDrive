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
    var card = "<div class=\"card\">\n" +
        "    <h3 class=\"title\">" + sessionStorage.getItem("username") + "</h3>\n" +
        "    <h3 class=\"time\">" + form_data + "</h3>\n" +
        // "    <h3 class=\"distance\">0.5 miles away</h3>\n" +
        // "    <h3 class = \"carModel\" > Toyota Camry</h3>\n" +
        // "    <h3 class = \"Ownernotes\" >  Special Notes: Hey the Trunk does not work</h3>\n" +
        "   </div>";
    doc_element.innerHTML += card;
    document.getElementById('create').style.display = "none";
}

function clearSession() {
    sessionStorage.clear();
}
