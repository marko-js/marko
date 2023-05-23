"use strict";

var complain = "MARKO_DEBUG" && require("complain");
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
      // eslint-disable-next-line no-constant-condition
      if ("MARKO_DEBUG") {
        complain(
          "Passing a string as dynamic attributes ('<div ${string}>' or '<div ...string>') is deprecated, use an object instead."
        );
      }

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
