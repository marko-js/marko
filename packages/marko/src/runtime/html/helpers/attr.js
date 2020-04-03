"use strict";

var escapeQuoteHelpers = require("./escape-quotes");
var escapeDoubleQuotes = escapeQuoteHelpers.___escapeDoubleQuotes;
var escapeSingleQuotes = escapeQuoteHelpers.___escapeSingleQuotes;

module.exports = maybeEmptyAttr;

maybeEmptyAttr.___notEmptyAttr = notEmptyAttr;
maybeEmptyAttr.___isEmptyAttrValue = isEmpty;

function maybeEmptyAttr(name, value) {
  if (isEmpty(value)) {
    return "";
  }

  return notEmptyAttr(name, value);
}

function notEmptyAttr(name, value) {
  switch (typeof value) {
    case "string":
      return " " + name + guessQuotes(value);
    case "boolean":
      return " " + name;
    case "number":
      return " " + name + "=" + value;
    case "object":
      if (value instanceof RegExp) {
        return " " + name + doubleQuote(value.source);
      }
  }

  return " " + name + guessQuotes(value + "");
}

function isEmpty(value) {
  return value == null || value === false;
}

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
