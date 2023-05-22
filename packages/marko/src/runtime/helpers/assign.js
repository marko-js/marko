"use strict";

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Merges object properties
 */
module.exports = function assign() {
  var into = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    if (source != null) {
      for (var k in source) {
        if (hasOwnProperty.call(source, k)) {
          into[k] = source[k];
        }
      }
    }
  }
  return into;
};
