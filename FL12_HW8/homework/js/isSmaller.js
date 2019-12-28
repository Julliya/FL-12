function isBigger(a, b) {
	return a > b;
}

function isSmaller(a, b) {
	let f = isBigger(a, b);
	return !f;
}

console.log(isSmaller(5, -1));
