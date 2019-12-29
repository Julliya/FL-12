function makeNumber(string) {
	let numbers = '0123456789';
	let arrayOfString = [];
	for (let i = 0; i < string.length; i++) {
		for (let j = 0; j < numbers.length; j++) {
			if (string[i] === numbers[j]) {
				arrayOfString.push(string[i]);
			}
		}
	}
	return arrayOfString.join('');
}

console.log(makeNumber('erer384jjjfd123'));
console.log(makeNumber('123098h76gfdd'));
console.log(makeNumber('ijifjgdj'));
