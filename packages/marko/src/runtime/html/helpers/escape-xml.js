"use strict";

module.exports.x = function (value) {
  if (value == null) {
    return "";
  }

  if (value.toHTML) {
    return value.toHTML();
  }

  return escapeXML(value + "");
};

exports.___escapeXML = escapeXML;

function escapeXML(str) {
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
