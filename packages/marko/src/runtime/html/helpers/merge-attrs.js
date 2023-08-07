"use strict";

var dynamicAttrHelper = require("./_dynamic-attr");

/**
 * Merges attribute objects into a string.
 */
module.exports = function mergeAttrs() {
  var result = "";
  var seen = new Set();

  for (var i = arguments.length, last = i - 1; i--; ) {
    var source = arguments[i];
    if (typeof source === "string") {
      if (source[0] !== " ") {
        result += " " + source;
      } else {
        result += source;
      }
    } else {
      for (var k in source) {
        if (i === last || !seen.has(k)) {
          result += dynamicAttrHelper(k, source[k]);
          seen.add(k);
        }
      }
    }
  }

  return result;
};
