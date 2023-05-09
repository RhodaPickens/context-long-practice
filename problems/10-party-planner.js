class PartyPlanner {
	constructor () {
		this.guestList = [];
	}

	addToGuestList(name) {
		this.guestList.push(name);
	}

	throwParty() {
		if (this.guestList = []) {
			return "Gotta add people to the guest list";
		} else {
			let guests = this.guestList.join(" and ");
			console.log(this.guestList);
			console.log(guests);
			return `Welcome to the party ${guests}.`;
		}
	}
}

// ## Phase 10: `PartyPlanner`

// Implement the following in the __problems/10-party-planner.js__ file.

// 1. Create a `PartyPlanner` class.
// 2. A newly instantiated instance should have its `guestList` property
//    initialized to an empty array.
// 3. Add two instance methods:
//    a. `addToGuestList(name)` - add the `name` to the `guestList`
//    b. `throwParty()` - return a different string depending on the length of the
//       `guestList`:
//       * If there are no guests, return "Gotta add people to the guest list"
//       * If there are guests in the `guestList`, return the guests' names. For
//         example, if there are two guests, return "Welcome to the party
//         ${name1} and ${name2}".

// Test your implementation by running the test specs in the
// __test/10-party-planner-spec.js__ file. Run the specs with the following
// command:

// ```shell
// npm test test/10-party-planner-spec.js
// ```

// In addition to Mocha, you should test your code manually using Node.js. You can
// use the examples below at the bottom of the file run the file in Node.js.

// Example 1:

const party = new PartyPlanner();

console.log(party.throwParty()); // prints "Gotta add people to the guest list"

party.addToGuestList("James");
console.log(party.throwParty()); // prints "Welcome to the party James"

party.addToGuestList("Alvin");
console.log(party.throwParty()); // prints "Welcome to the party James and Alvin"


const party2 = new PartyPlanner();
console.log(party2.throwParty()); // prints "Gotta add people to the guest list"

party2.addToGuestList("Lucy");
console.log(party2.throwParty()); // prints "Welcome to the party Lucy"

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
