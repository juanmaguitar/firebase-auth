function toggleSignIn() {

	if ( firebase.auth().currentUser ) {
		firebase.auth().signOut();
	}
	else {

		var email = getMail();
		if (!email) return;

		var password = getPassword();
		if (!password) return;

		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.catch( handleErrorSignIn );
	}

	$('#quickstart-sign-in').prop( "disabled", true );

}

function handleErrorSignIn(error) {
	// Handle Errors here.
	var errorCode = error.code;
	var errorMessage = error.message;
	if (errorCode === 'auth/wrong-password') {
		alert('Wrong password.');
	}
	else {
		alert(errorMessage);
	}
	console.log(error);
	$('#quickstart-sign-in').prop( "disabled", false );
}