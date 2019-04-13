
function openTab(evt, tab_name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab_name).style.display = "block";
    evt.currentTarget.className += " active";
}

function login(who) {

  var username = document.getElementById('username' + who).value;
  var password = document.getElementById('password' + who).value;
  var fail = false;
  console.log(who);
  if(username == "") {
    document.getElementById('fail1' + who).innerHTML = "Error: Username can't be blank";
    fail = true;
  } else {
    document.getElementById('fail1' + who).innerHTML = "";
  }
  if(password == "") {
    document.getElementById('fail2' + who).innerHTML = "Error: Password can't be blank";
    fail = true;
  } else {
    document.getElementById('fail2' + who).innerHTML = "";
  }
  if(fail) return;
  saveUsername(username.value);
  if(who == 'rider') window.location.replace("rider.html");
  if(who == 'lender') window.location.replace("lender.html");
}

function saveUsername(username) {
    sessionStorage.setItem("username", username);
}
