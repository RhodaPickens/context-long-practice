/* Implement the following in the problems/01-car-drive.js file.

Create a Car class.
A newly instantiated instance should have its speed property initialized to 0.
Add an instance method called drive(newSpeed) that takes in a newSpeed 
and sets it to the instance's speed property. 
It should also return the present speed of the instance.
Test your implementation by running the test specs in the test/01-car-drive-spec.js file. 
Run the specs with the following command:

npm test test/01-car-drive-spec.js
In addition to Mocha, you should test your code manually using Node.js. 
You can use the examples below at the bottom of the file run the file in Node.js.

Examples:

let car = new Car();
car.drive(0);     // => returns 0
console.log(car); // => { speed: 0 }

car.drive(10);    // => returns 10
console.log(car); // => { speed: 10, }

car.drive(50);    // => returns 50
console.log(car); // -> { speed: 50 }

car.drive(100);   // => returns 100
console.log(car); // -> { speed: 100 } */

class Car {
	constructor() {
		speed = 0;
	}

	drive = (newSpeed) => {
		speed = newSpeed;
		return this.speed;
	}
}

let car = new Car();
car.drive(0);     // => returns 0
console.log(car); // => { speed: 0 }

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Car;
} catch {
	module.exports = null;
}