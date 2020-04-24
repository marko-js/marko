"use strict";

var escapeQuoteHelpers = require("./escape-quotes");
var escapeDoubleQuotes = escapeQuoteHelpers.___escapeDoubleQuotes;
var escapeSingleQuotes = escapeQuoteHelpers.___escapeSingleQuotes;
var complain = "MARKO_DEBUG" && require("complain");

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
      switch (value.toString) {
        case Object.prototype.toString:
        case Array.prototype.toString:
          // eslint-disable-next-line no-constant-condition
          if ("MARKO_DEBUG") {
            complain(
              "Relying on JSON.stringify for attribute values is deprecated, in future versions of Marko these will be cast to strings instead.",
              { locationIndex: 2 }
            );
          }

          return " " + name + singleQuote(JSON.stringify(value), 2);
        case RegExp.prototype.toString:
          return " " + name + guessQuotes(value.source);
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
