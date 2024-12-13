"use strict";

// eslint-disable-next-line no-constant-binary-expression
var complain = "MARKO_DEBUG" && require("complain");
var dynamicAttrHelper = require("./_dynamic-attr");

/**
 * Merges attribute objects into a string.
 */
module.exports = function mergeAttrs() {
  var i = arguments.length;
  var last = arguments[--i];
  var seen = new Set();
  var result = "";
  var attrName;

  if (typeof last === "string") {
    // eslint-disable-next-line no-constant-condition
    if ("MARKO_DEBUG") {
      complain(
        "Passing a string as dynamic attributes ('<div ${string}>' or '<div ...string>') is deprecated, use an object instead.",
      );
    }

    result += last[0] === " " ? last : " " + last;
  } else {
    for (attrName in last) {
      result += dynamicAttrHelper(attrName, last[attrName]);
      seen.add(attrName);
    }
  }

  while (i) {
    var arg = arguments[--i];
    if (typeof arg === "string") {
      // eslint-disable-next-line no-constant-condition
      if ("MARKO_DEBUG") {
        complain(
          "Passing a string as dynamic attributes ('<div ${string}>' or '<div ...string>') is deprecated, use an object instead.",
        );
      }

      result += arg[0] === " " ? arg : " " + arg;
    } else {
      for (attrName in arg) {
        if (!seen.has(attrName)) {
          result += dynamicAttrHelper(attrName, arg[attrName]);
          seen.add(attrName);
        }
      }
    }
  }

  return result;
};
