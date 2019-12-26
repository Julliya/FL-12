let email = prompt('Enter an e-mail');
let minLimit = 5;
let users = {
	'user@gmail.com': 'UserPass',
	'admin@gmail.com': 'AdminPass'
};
if (email === null || email === '') {
	alert('Canceled');
} else if (email.length < minLimit) {
	alert("I don't know any emails having name length less than 5 symbols");
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
	let password = prompt('Enter a password');
	if (password === null || password === '') {
		alert('Canceled');
	} else if (password === users[email]) {
		let changePass = confirm('Do you want to change your password?');
		if (changePass) {
			let oldPassword = prompt('Write the old password');
			if (oldPassword === users[email]) {
				let newPassword = prompt('Enter a new password');
				if (newPassword === null || newPassword === '') {
					alert('Canceled');
				} else if (newPassword.length < minLimit + 1) {
					alert('It’s too short password. Sorry.');
				} else {
					let confirmation = prompt('enter it again');
					if (confirmation === newPassword) {
						alert('You have successfully changed your password');
					} else {
						alert('You wrote the wrong password.');
					}
				}
			} else if (oldPassword === null || oldPassword === '') {
				alert('Canceled');
			} else {
				alert('Wrong password');
			}
		} else {
			alert('You have failed the change');
		}
	} else {
		alert('Wrong password');
	}
} else {
	alert('I don’t know you');
}
