/**
 * Handles registering callbacks for the auth status.
 *
 * This method registers a listener with firebase.auth().onAuthStateChanged. This listener is called when
 * the user is signed in or out, and that is where we update the UI.
 *
 * When signed in, we also authenticate to the Firebase Realtime Database.
 */

(function() {
  // Listening for auth state changes.
  console.log ("init...")
  firebase.auth()
    .onAuthStateChanged(handlerAuthStateChanged);

  $('#quickstart-sign-in').on('click', toggleSignIn);
  $('#quickstart-sign-up').on('click', handleSignUp);
  $('#quickstart-verify-email').on('click', sendEmailVerification);
  $('#quickstart-password-reset').on('click', sendPasswordReset);

})()

function handlerAuthStateChanged(user) {

  $('#quickstart-verify-email')[0].disabled = true;

  if (user) {
      // User is signed in.

      var emailVerified = user.emailVerified;
      var oUserData = {
        displayName: user.displayName,
        email: user.email,
        emailVerified: emailVerified,
        photoURL: user.photoURL,
        isAnonymous: user.isAnonymous,
        uid:  user.uid,
        refreshToken: user.refreshToken,
        providerData: user.providerData
      };

      var sUserData = JSON.stringify( oUserData, null, '  ')

      $('#quickstart-sign-in-status').text('Signed in');
      $('#quickstart-sign-in').text('Sign out');
      $('#quickstart-account-details').text( sUserData );

      if (!emailVerified) {
        $('#quickstart-verify-email')[0].disabled = false;
      }

    } else {
      // User is signed out.
      $('#quickstart-sign-in-status').text( 'Signed out' );
      $('#quickstart-sign-in').text('Sign in');
      $('#quickstart-account-details').text('null');
    }

    $('#quickstart-sign-in')[0].disabled = false;
  }
