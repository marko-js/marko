"use strict";

var complain = "MARKO_DEBUG" && require("complain");

/**
 * Internal helper method to handle <for of> loops.
 */
module.exports = function forOf(array, callback) {
  var i;

  if (array == null) {
    // eslint-disable-next-line no-constant-condition
    if ("MARKO_DEBUG") {
      complain(
        "Passing a non iterable to a <for> loop is deprecated. Prefer to use an <if> around the loop instead."
      );
    }
  } else if (Array.isArray(array)) {
    for (i = 0; i < array.length; i++) {
      callback(array[i], i, array);
    }
    // eslint-disable-next-line no-constant-condition
  } else if (typeof array.forEach === "function") {
    array.forEach(callback);
  } else if (typeof array.next === "function") {
    i = 0;
    do {
      var result = array.next();
      callback(result.value, i++, array);
    } while (!result.done);
  } else if (typeof array == "function") {
    // eslint-disable-next-line no-constant-condition
    if ("MARKO_DEBUG") {
      complain(
        "Passing a function as the iterable in a <for> loop is deprecated and will be removed in a future version of Marko"
      );
    }
    // Also allow the first argument to be a custom iterator function
    array(callback);
  }
};
