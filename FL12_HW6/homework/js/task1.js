let a = Number(prompt('Enter A'));
let b = Number(prompt('Enter B'));
let c = Number(prompt('Enter C'));

if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)) {
	console.log('Invalid input data');
} else if (a === 0) {
	console.log('Invalid input data’');
} else {
	let d = Math.pow(b, 2) - 4 * a * c;
	let result;

	if (d > 0) {
		result = 'x1 = ' + Math.round((-b - Math.sqrt(d)) / (2 * a));
		result += ' x2 = ' + Math.round((-b + Math.sqrt(d)) / (2 * a));
	} else if (d === 0) {
		result = 'x1,2 = ' + Math.round(-b / (2 * a));
	} else if (d < 0) {
		result = 'no solution';
	}
	console.log(result);
}
