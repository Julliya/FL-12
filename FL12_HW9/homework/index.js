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
});
