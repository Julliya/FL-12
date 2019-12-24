alert('Please, input 3 numbers (a, b, c) for triangle sides length');
let a = Number(prompt('Enter A'));
let b = Number(prompt('Enter B'));
let c = Number(prompt('Enter C'));

if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)) {
	alert('input values should be ONLY numbers');
} else {
	if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)) {
		if (a > 0 && b > 0 && c > 0) {
			let max = Math.max(a, b, c);
			if ((max === a && b + c > max) || (max === b && a + c > max) || (max === c && b + a > max)) {
				if (a === b && b === c) {
					console.log('Equilateral triangle');
				} else if (a === b || b === c || c === a) {
					console.log('Equilateral triangle');
				} else {
					console.log('Isosceles triangle');
				}
			} else {
				console.log('Triangle doesn’t exist');
			}
		} else {
			alert('A triangle must have 3 sides with a positive definite length');
		}
	} else {
		alert('input values should be ONLY INT numbers');
	}
}
