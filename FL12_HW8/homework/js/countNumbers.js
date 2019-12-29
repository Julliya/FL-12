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
	// let numbers = '0123456789';
	let stringOfNumber = makeNumber(string);
	let stringArray = stringOfNumber.split('').sort();

	let oblectOfNumber = {};
	for (let i = 0; i < stringArray.length-1; i++) {
            	let counter = 0;
            	for (let j = 0; j < stringArray.length; j++) {
            		if (stringArray[i] === stringArray[j]) {
            			let key = stringOfNumber[i];
            			counter++;
            		}
            	}
            		let value = counter;
            
            		oblectOfNumber.key = 'value';
            	}
        oblectOfNumber[stringArray[i]];
	}

	return oblectOfNumber;
}
countNumbers('erer384jj4444666888jfd123');
// => {'1': 1, '2': 1, '3': 2, '4': 5, '6': 3, '8': 4}
countNumbers('jdjjka000466588kkkfs662555');
// => {'0': 3, '2': 1, '4': 1, '5': 4, '6': 4, '8': 2}
countNumbers(''); // => {}

// uniqueCount = ["a","b","c","d","d","e","a","b","c","f","g","h","h","h","e","a"];
//     var  count = {};
//     uniqueCount.forEach(function(i) { count[i] = (count[i]||0) + 1;});
//     console.log(count);

// let oblectOfNumber = {};
// 	for (let i = 0; i < numbers.length; i++) {
// 		let counter = 0;
// 		for (let j = 0; j < stringOfNumber.length; j++) {
// 			if (numbers[i] === stringOfNumber[j]) {
// 				let key = stringOfNumber[j];
// 				counter++;
// 			}
// 		}
// 		let value = counter;

// 		oblectOfNumber.key = 'value';
// 	}
