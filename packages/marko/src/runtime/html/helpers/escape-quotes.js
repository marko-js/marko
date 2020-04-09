"use strict";

exports.d = function(value) {
  return escapeDoubleQuotes(value + "");
};

exports.___escapeDoubleQuotes = escapeDoubleQuotes;

exports.___escapeSingleQuotes = escapeSingleQuotes;

function escapeSingleQuotes(value) {
  return escapeQuote(value, "'", "&#39;");
}

function escapeDoubleQuotes(value) {
  return escapeQuote(value, '"', "&#34;");
}

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
