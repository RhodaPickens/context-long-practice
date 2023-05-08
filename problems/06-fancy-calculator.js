const Calculator = require("./02-calculator.js");

class FancyCalculator extends Calculator {
	setTotal(newTotal) {
		this.total = newTotal;
		return this.total;
	}

	modulo(num) {
		let remainder = this.total % num
		this.total = remainder;
		return this.total;
	}

	squared() {
		return this.total *= this.total;
	}
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = FancyCalculator;
} catch {
	module.exports = null;
}
