function sendPasswordReset() {

  var email = getMail();
  if (!email) return;

  function alertSent() {
    alert('Password Reset Email Sent!');
  }

  firebase.auth()
    .sendPasswordResetEmail(email)
    .then( alertSent )
    .catch( handleErrorPasswordReset );
}

function handleErrorPasswordReset(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // [START_EXCLUDE]
  if (errorCode == 'auth/invalid-email') {
    alert(errorMessage);
  } else if (errorCode == 'auth/user-not-found') {
    alert(errorMessage);
  }
  console.log(error);
  // [END_EXCLUDE]
}