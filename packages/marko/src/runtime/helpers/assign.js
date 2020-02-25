"use strict";

/**
 * Merges object properties
 */
module.exports = function assign() {
  var into = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    if (source != null) {
      for (var k in source) {
        if (source.hasOwnProperty(k)) {
          into[k] = source[k];
        }
      }
    }
  }
  return into;
};
