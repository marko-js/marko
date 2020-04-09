"use strict";

var complain = "MARKO_DEBUG" && require("complain");
var dynamicAttrHelper = require("./_dynamic-attr");

module.exports = function attrs(arg) {
  switch (typeof arg) {
    case "object":
      var out = "";
      for (var attrName in arg) {
        out += dynamicAttrHelper(attrName, arg[attrName]);
      }
      return out;
    case "string":
      // eslint-disable-next-line no-constant-condition
      if ("MARKO_DEBUG") {
        complain(
          "Passing a string as a dynamic attribute value is deprecated - More details: https://github.com/marko-js/marko/wiki/Deprecation:-String-as-dynamic-attribute-value"
        );
      }
      return arg;
    default:
      return "";
  }
};
