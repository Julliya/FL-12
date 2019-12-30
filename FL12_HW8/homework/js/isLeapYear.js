function isLeapYear(date) {
	let d = new Date(date);
	if (!isNaN(d.getTime())) {
		let year = d.getFullYear();
		if (new Date(year, 1, 29).getDate() === 29) {
			return year + ' is a leap year';
		} else {
			return year + ' is not a leap year';
		}
	} else {
		return 'Invalid Date';
	}
}

console.log(isLeapYear('2020-01-01 00:00:00')); // =>  ‘2020 is a leap year’
console.log(isLeapYear('2020-01-01 00:00:00777')); // =>  ‘Invalid Date’
console.log(isLeapYear('2021-01-15 13:00:00')); // =>  ‘2021 is not a leap year’
console.log(isLeapYear('2200-01-15 13:00:00')); // =>  ‘2200 is not a leap year’
console.log(isLeapYear(1213131313135465656654564646542132132131)); // =>  ‘Invalid Date’
console.log(isLeapYear(1213131313));
