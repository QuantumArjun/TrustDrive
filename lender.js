function openModal() {
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
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function createTimeSlot() {
    var time = document.getElementById("durationExample").value;
    var modal = document.getElementById('create');

    modal.style.display = "none";

    var card = "<div class=\"card\">\n" +
        "    <h3 class=\"title\">Arjun Karanam</h3>\n" +
        "    <h3 class=\"distance\">0.5 miles away</h3>\n" +
        "    <h3 class = \"carModel\" > Toyota Camry</h3>\n" +
        "    <h3 class = \"Ownernotes\" >  Special Notes: Hey the Trunk does not work</h3>\n" +
        "   </div>";

    ("openTimes").append("<p>created</p>" );
}