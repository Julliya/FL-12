function pipe() {
	let x = arguments[0];
	for (let i = 1; i < arguments.length; i++) {
		let result = arguments[i](x);

		x = result;
	}
	return x;
}

function addOne(x) {
	return x + 1;
}

console.log(pipe(1, addOne)); //=> 2
console.log(pipe(1, addOne, addOne)); //=> 3
