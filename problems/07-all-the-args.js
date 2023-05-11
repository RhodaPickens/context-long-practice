function allTheArgs(func, ...args) {
   return func.bind(this, ...args); // make this the context
}



/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
