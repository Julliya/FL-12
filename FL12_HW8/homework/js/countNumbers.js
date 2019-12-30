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
function countNumbers(string) {
	let stringOfNumber = makeNumber(string);
	let stringArray = stringOfNumber.split('').sort();

	let oblectOfNumber = {};

	stringArray.forEach(function(i) {
		oblectOfNumber[i] = (oblectOfNumber[i] || 0) + 1;
	});

	return oblectOfNumber;
}
console.log(countNumbers('erer384jj4444666888jfd123'));
// => {'1': 1, '2': 1, '3': 2, '4': 5, '6': 3, '8': 4}
console.log(countNumbers('jdjjka000466588kkkfs662555'));
// => {'0': 3, '2': 1, '4': 1, '5': 4, '6': 4, '8': 2}
console.log(countNumbers('')); // => {}
