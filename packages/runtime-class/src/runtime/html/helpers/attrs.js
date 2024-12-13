"use strict";

// eslint-disable-next-line no-constant-binary-expression
var complain = "MARKO_DEBUG" && require("complain");
var dynamicAttrHelper = require("./_dynamic-attr");

module.exports = function attrs(arg) {
  switch (typeof arg) {
    case "object":
      var result = "";
      for (var attrName in arg) {
        result += dynamicAttrHelper(attrName, arg[attrName]);
      }
      return result;
    case "string":
      // eslint-disable-next-line no-constant-condition
      if ("MARKO_DEBUG") {
        complain(
          "Passing a string as a dynamic attribute value is deprecated - More details: https://github.com/marko-js/marko/wiki/Deprecation:-String-as-dynamic-attribute-value",
        );
      }
      return arg;
    default:
      return "";
  }
};
