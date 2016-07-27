function sendEmailVerification() {

  firebase.auth()
    .currentUser
    .sendEmailVerification()
    .then(function() {
      alert('Email Verification Sent!');
    });

}