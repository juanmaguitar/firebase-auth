/**
 * Handles the sign up button press.
 */
function handleSignUp() {

  var email = getMail();
  if (!email) return;

  var password = getPassword();
  if (!password) return;

  // Sign in with email and pass.
  // [START createwithemail]
  firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .catch( handleErrorSignUp );
  // [END createwithemail]
}

// handle Error
function handleErrorSignUp(error) {

  var errorCode = error.code;
  var errorMessage = error.message;

  if (errorCode == 'auth/weak-password') {
    alert('The password is too weak.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
}