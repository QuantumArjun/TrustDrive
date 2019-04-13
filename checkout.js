  const smartcar = new Smartcar({
    clientId: '7d7efd95-a9f3-4d50-b34a-9fb99ac4c1a5',
    redirectUri: 'https://javascript-sdk.smartcar.com/redirect-2.1.1?app_origin=http://localhost:1337',
    scope: ['read_vehicle_info', 'read_odometer'],
    onComplete: function(err, code) {
      if (err) {
        // handle errors from the authorization flow (i.e. user denies access)
      }
      // handle the returned code by sending it to your back-end server
      sendToBackend(code);
      addClickHandler({id:"#checkout"});
    },
  });
const url = smartcar.getAuthUrl();