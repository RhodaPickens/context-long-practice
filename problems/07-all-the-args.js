function allTheArgs(func, ...args) {

}

// ## Phase 7: `allTheArgs(func, ...args)`

// Implement the following in the __problems/07-all-the-args.js__ file.

// Write a function named `allTheArgs(func, ...args)` that will accept a
// function `func` and any number of arguments. The `allTheArgs` function
// should return the passed-in function `func` modified to always be invoked with
// the passed-in arguments `args`. See code block below for further details.

// Test your implementation by running the test specs in the
// __test/07-all-the-args-spec.js__ file. Run the specs with the following
// command:

// ```shell
// npm test test/07-all-the-args-spec.js
// ```

// In addition to Mocha, you should test your code manually using Node.js. You can
// use the examples below at the bottom of the file run the file in Node.js.

// ```js
// function sum(...nums) {
//   return nums.reduce((acc, num) => acc + num);
// }

// const onePlusTwo = allTheArgs(sum, 1, 2);

// const onePlusTwoPlusThree = onePlusTwo(3);
// const onePlusTwoPlusFour = onePlusTwo(4);

// console.log(onePlusTwoPlusThree); // => 6
// console.log(onePlusTwoPlusFour);  // => 7
// ```

// ```js
// const bow = (...names) => {
//   return "You bowed to " + names.join(" and ");
// };

// console.log(bow("Sandy")) // prints "You bowed to Sandy"

// let bowSandy = allTheArgs(bow, "Sandy");
// console.log(bowSandy()); // prints "You bowed to Sandy"
// console.log(bowSandy("Joe", "Nico")); // prints "You bowed to Sandy and Joe and Nico"

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
