"use strict";

var attrs = require("./attrs");

/**
 * Merges attribute objects into a object.
 */
module.exports = function mergeAttrs() {
  var len = arguments.length;
  var result = {};
  for (var i = 0; i < len; i++) {
    Object.assign(result, attrs(arguments[i]));
  }

  return result;
};
