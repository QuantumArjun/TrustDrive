client_Id = sessionStorage.getItem("clientId");

const smartcar = new Smartcar({
    clientId: client_Id,
    redirectUri: 'https://javascript-sdk.smartcar.com/redirect-2.1.1?app_origin=http://localhost:1337',
    scope: ['read_vehicle_info', 'read_odometer',
    'control_security', "control_security:unlock",
    "control_security:lock"],
    testMode: true,
    onComplete: function(err, code) {
      if (err) {
        // handle errors from the authorization flow (i.e. user denies access)
      }
      // handle the returned code by sending it to your back-end server
      //sendToBackend(code);
    },
  });
// smartcar.odometer().then(function(response) {
//   console.log(response);
// });

function authorize() {
  // TODO: Authorization Step 2a: Launch the authorization flow
}
function checkout(){
  //smartcar.openDialog({forcePrompt: true});
    //.exchangeCode(client_Id);
  var doc_element = document.getElementById('check-card');
  //  modal.append("Testing");
  //modal.style.display = "none";
  console.log("here");
  var card = '<div class="card"><div><button id= "checkout" type="button" onclick="unlock()">Unlock</button>' +
      '<button id= "checkout" type="button" onclick="lock()">Lock</button></div></div>';
  doc_element.innerHTML = card;
}

function lock(){

}

function unlock(){
  //   var xmlhttp = new XMLHttpRequest();
  //   var url = "https://api.smartcar.com/v1.0/vehicles/"+client_Id+"/security";
  //   xmlhttp.open("POST", url, true);
  //   smartcar.unlock().then(function(response) {
  //     console.log(response);
  // });
}