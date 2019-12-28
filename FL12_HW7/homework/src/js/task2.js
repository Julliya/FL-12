let start = confirm('Do you want to play a game?');
let min = 0;
let max = 8;
let delta = 4;
let totalPrize = 0;
let counter = 0;
let finish = false;
let attempts = 3;

if (start) {
	while (counter < 5) {
		let number = Math.round(Math.random() * (max - min) + min);
		for (; attempts >= 1; ) {
			let prize;
			if (attempts === 3) {
				prize = 100;
			} else if (attempts === 2) {
				prize = 50;
			} else {
				prize = 25;
			}
			let userNum = prompt(
				'Choose a roulette pocket number from ' +
					min +
					' to ' +
					max +
					' \n Attempts left: ' +
					attempts +
					'\n Total prize ' +
					totalPrize +
					'$ \n Possible prize on current attempt: ' +
					prize +
					'$'
			);
			if (Number.isNaN(Number(userNum))) {
				alert('Invalid input data');
				attempts--;
			} else if (userNum === null) {
				attempts--;
			} else if (Number(userNum) != number) {
				attempts--;
			} else if (Number(userNum) === number) {
				totalPrize += prize;
				finish = confirm(
					'Congratulation, you won! \n Your prize is: ' + totalPrize + '$. \n Do you want to continue?'
				);
			}
		}
		if (finish) {
			max = max + delta;
			counter++;
		} else {
			counter++;
		}
	}
} else {
	alert('You did not become a billionaire, but can');
}
