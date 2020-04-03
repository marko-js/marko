"use strict";

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
      return arg;
    default:
      return "";
  }
};
