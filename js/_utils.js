function getPassword() {
	var password = $('#password').val();
	if (password.length < 4) {
		alert('Please enter a password.');
		return;
	}
	return password;
}

function getMail() {
	var email = $('#email').val();
	if (email.length < 4) {
		alert('Please enter an email address.');
		return;
	}
	return email;
}