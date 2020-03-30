"use strict";

exports.d = function(value) {
  return escapeQuote(value, '"', "&#34;");
};

exports.s = function(value) {
  return escapeQuote(value, "'", "&#39;");
};

exports.x = function(value) {
  if (value == null) {
    return "";
  }

  if (value.toHTML) {
    return value.toHTML();
  }

  return escapeBody(value + "");
};

function escapeQuote(str, quote, escaped) {
  var result = "";
  var lastPos = 0;

  for (var i = 0, len = str.length; i < len; i++) {
    if (str[i] === quote) {
      result += str.slice(lastPos, i) + escaped;
      lastPos = i + 1;
    }
  }

  if (lastPos) {
    return result + str.slice(lastPos);
  }

  return str;
}

function escapeBody(str) {
  var len = str.length;
  var result = "";
  var lastPos = 0;
  var i = 0;
  var replacement;

  for (; i < len; i++) {
    switch (str[i]) {
      case "<":
        replacement = "&lt;";
        break;
      case "&":
        replacement = "&amp;";
        break;
      default:
        continue;
    }

    result += str.slice(lastPos, i) + replacement;
    lastPos = i + 1;
  }

  if (lastPos) {
    return result + str.slice(lastPos);
  }

  return str;
}
