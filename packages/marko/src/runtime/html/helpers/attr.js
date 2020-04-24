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

function doubleQuote(value, startPos) {
  return '="' + escapeDoubleQuotes(value, startPos) + '"';
}

function singleQuote(value, startPos) {
  return "='" + escapeSingleQuotes(value, startPos) + "'";
}

function guessQuotes(value) {
  for (var i = 0, len = value.length; i < len; i++) {
    switch (value[i]) {
      case '"':
        return singleQuote(value, i + 1);
      case "'":
      case ">":
      case " ":
      case "\t":
      case "\n":
      case "\r":
      case "\f":
        return doubleQuote(value, i + 1);
    }
  }

  return value && "=" + (value[len - 1] === "/" ? value + " " : value);
}
