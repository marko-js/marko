"use strict";

var escape = require("./escape-xml");
var escapeDoubleQuotes = escape.d;

module.exports = function attr(name, value) {
  if (value == null || value === false) {
    return "";
  }

  var result = " " + name;

  if (value === true) {
    return result;
  }

  result += "=";

  if (typeof value === "number") {
    return result + value;
  }

  if (value instanceof RegExp) {
    return result + doubleQuote(value.source);
  }

  return result + doubleQuote(value);
};

function doubleQuote(value) {
  return '"' + escapeDoubleQuotes(value) + '"';
}
