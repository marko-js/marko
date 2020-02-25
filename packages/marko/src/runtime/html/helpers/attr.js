"use strict";

var escape = require("./escape-xml");
var escapeDoubleQuotes = escape.d;
var escapeSingleQuotes = escape.s;
var complain = "MARKO_DEBUG" && require("complain");

module.exports = function attr(name, value) {
  if (value == null || value === false) {
    return "";
  }

  var result = " " + name;

  if (value === true) {
    return result;
  }

  var type = typeof value;
  result += "=";

  if (type === "number") {
    return result + value;
  }

  if (type == "object") {
    switch (value.toString) {
      case Object.prototype.toString:
      case Array.prototype.toString:
        // eslint-disable-next-line no-constant-condition
        if ("MARKO_DEBUG") {
          complain(
            "Relying on JSON.stringify for attribute values is deprecated, in future versions of Marko these will be cast to strings instead."
          );
        }

        return result + singleQuote(JSON.stringify(value));
      case RegExp.prototype.toString:
        return result + doubleQuote(value.source);
    }
  }

  return result + doubleQuote(value);
};

function doubleQuote(value) {
  return '"' + escapeDoubleQuotes(value) + '"';
}

function singleQuote(value) {
  return "'" + escapeSingleQuotes(value) + "'";
}
