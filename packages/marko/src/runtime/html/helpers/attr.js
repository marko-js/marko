"use strict";

var escapeQuoteHelpers = require("./escape-quotes");
var escapeDoubleQuotes = escapeQuoteHelpers.___escapeDoubleQuotes;
var escapeSingleQuotes = escapeQuoteHelpers.___escapeSingleQuotes;

module.exports = function attr(name, value) {
  switch (typeof value) {
    case "string":
      return " " + name + guessQuotes(value);
    case "boolean":
      return value ? " " + name : "";
    case "number":
      return " " + name + "=" + value;
    case "undefined":
      return "";
    case "object":
      if (value === null) {
        return "";
      }

      if (value instanceof RegExp) {
        return " " + name + doubleQuote(value.source);
      }
  }

  return " " + name + guessQuotes(value + "");
};

function doubleQuote(value) {
  return '="' + escapeDoubleQuotes(value) + '"';
}

function singleQuote(value) {
  return "='" + escapeSingleQuotes(value) + "'";
}

function guessQuotes(value) {
  if (value.length) {
    if (value[0] === "{") {
      // Assume json.
      return singleQuote(value);
    }

    return doubleQuote(value);
  }

  return "";
}
