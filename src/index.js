const units = {
	1: 'one',
	2: 'two',
	3: 'three',
	4: 'four',
	5: 'five',
	6: 'six',
	7: 'seven',
	8: 'eight',
	9: 'nine',
};
const ten_twenty = {
	11: 'eleven',
	12: 'twelve',
	13: 'thirteen',
	14: 'fourteen',
	15: 'fifteen',
	16: 'sixteen',
	17: 'seventeen',
	18: 'eighteen',
	19: 'nineteen',
};
const tens = {
	10: 'ten',
	20: 'twenty',
	30: 'thirty',
	40: 'forty',
	50: 'fifty',
	60: 'sixty',
	70: 'seventy',
	80: 'eighty',
	90: 'ninety',
};

module.exports = function toReadable(number) {
	if (number == 0) {
		return 'zero';
	} else if (number < 10) {
		return units[number];
	} else if (number >= 10 && number < 100 && number % 10 == 0) {
		return tens[number];
	} else if (number > 10 && number < 20) {
		return ten_twenty[number];
	} else if (number > 20 && number < 100) {
		let a = number.toString().split("").slice(0, 1) * 10;
		let b = number % 10;
		return tens[a] + ' ' + units[b];
	} else if (number >= 100 && number < 1000 && number % 100 == 0) {
		return units[number / 100] + ' hundred';
	} else if (number > 100 && number < 1000) {
		let hundreds = +number.toString().split("").slice(0, 1);
		let rest = +number.toString().split("").splice(1, 2).join('');
		return units[hundreds] + ' hundred ' + toReadable(rest);
	}
}
