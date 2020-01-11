function convert(...args) {
	for (let i = 0; i < args.length; i++) {
		if (typeof args[i] === 'string') {
			args[i] = +args[i];
		} else {
			args[i] = '' + args[i];
		}
	}
	console.log(...args);
}
convert('1', 2, 3, '4'); // [1, '2', '3', 4]

function executeforEach(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		callback(arr[i]);
	}
}
executeforEach([ 1, 2, 3 ], function(el) {
	console.log(el * 2);
}); // logs 2 4 6

function mapArray(arr, callback) {
	let newArr = [];
	executeforEach(arr, function(el) {
		newArr.push(callback(el));
	});
	return newArr;
}
mapArray([ 2, '5', 8 ], function(el) {
	return +el + 3;
}); // returns [5, 8, 11]

function filterArray(arr, callback) {
	let newArr = [];
	executeforEach(arr, function(el) {
		if (callback(el) === true) {
			newArr.push(el);
		}
	});
	return newArr;
}
filterArray([ 2, 5, 8 ], function(el) {
	return el % 2 === 0;
}); // returns [2, 8]

function flipOver(string) {
	let reverseString = '';
	for (let i = string.length - 1; i >= 0; i--) {
		reverseString += string[i];
	}
	console.log(reverseString);
}
flipOver('hey world'); // 'dlrow yeh'

function makeListFromRange(range) {
	let newArr = [];
	for (let i = range[0]; i <= range[1]; i++) {
		newArr.push(i);
	}
	console.log(newArr);
}
makeListFromRange([ 2, 7 ]); // [2, 3, 4, 5, 6, 7]
