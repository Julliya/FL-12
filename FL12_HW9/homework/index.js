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
	console.log(newArr);
	// return newArr;
}

filterArray([ 2, 5, 8 ], function(el) {
	return el % 2 === 0;
});
// returns [2, 8]
