let start = confirm('Do you want to play a game?');
let counter = 0;

if (start) {
	while (counter < 10) {
		for (let attempts = 3; attempts >= 1; attempts--) {
			prompt('Choose an integer number in range [0; 8] \n Attempts left:' + attempts);
		}
		counter++;
	}
} else {
	alert('You did not become a billionaire, but can');
}
