"use strict";

exports.d = function (value) {
  return escapeDoubleQuotes(value + "", 0);
};

exports.___escapeDoubleQuotes = escapeDoubleQuotes;

exports.___escapeSingleQuotes = escapeSingleQuotes;

function escapeSingleQuotes(value, startPos) {
  return escapeQuote(value, startPos, "'", "&#39;");
}

function escapeDoubleQuotes(value, startPos) {
  return escapeQuote(value, startPos, '"', "&#34;");
}

function escapeQuote(str, startPos, quote, escaped) {
  var result = "";
  var lastPos = 0;

  for (var i = startPos, len = str.length; i < len; i++) {
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
