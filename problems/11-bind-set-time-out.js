function boundFuncTimer(obj, func, delay) {
  setTimeout(() => func.call(obj), delay); // use arrow function to make sure context is correct
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;
