class Dog {
	constructor(name) {
		this.name = name;
	}

	static makeJet() {
		return new Dog ("Jet");
	}

	changeName(newName) {
		return this.name = newName;
	}

	speak(word) {
		return `${this.name} says ${word}`;
	}
}

// let dog1 = Dog.makeJet();

// console.log(dog1.name);
// console.log(dog1.speak("hello"));
// console.log(dog1.changeName("Rufus"));
// console.log(dog1.name);
// console.log(dog1.speak("woof"));


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Dog;
} catch {
	module.exports = null;
}
