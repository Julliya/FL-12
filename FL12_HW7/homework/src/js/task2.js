let min = 0;
let defaulMax = 8;
let max = 8;
let delta = 4;
let finish = true;
let totalPrize = 0;

let prize = {
	3: 100,
	2: 50,
	1: 25
};
let start = confirm('Do you want to play a game?');

if (start) {
	while (finish === true) {
		let number = Math.round(Math.random() * (max - min) + min);
		let attempts = 3;
		while (attempts > 0) {
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
					prize[attempts] +
					'$'
			);
			if (Number.isNaN(Number(userNum))) {
				alert('Invalid input data');
				attempts--;
			} else if (userNum === null || userNum === '') {
				attempts--;
			} else if (Number(userNum) !== number) {
				attempts--;
			} else if (Number(userNum) === number) {
				totalPrize += prize[attempts];
				// win = true;
				break;
			}
			if (attempts === 0) {
				totalPrize = 0;
			}
		}

		if (totalPrize !== 0) {
			finish = confirm(
				'Congratulation, you won! \n Your prize is: ' + totalPrize + '$. \n Do you want to continue?'
			);
			max += delta;
		} else {
			alert('Thank you for your participation. Your prize is: ' + totalPrize + ' $');
			finish = confirm('Do you want to play again?');
			max = defaulMax;
		}
	}
} else {
	alert('You did not become a billionaire, but can');
}
