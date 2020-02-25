"use strict";

exports.d = function(value) {
  return escape(value, '"', "&#34;");
};

exports.s = function(value) {
  return escape(value, "'", "&#39;");
};

exports.x = function(value) {
  if (value && value.toHTML) {
    return value.toHTML();
  }

  return escape(value, "<", "&lt;");
};

function escape(str, match, escaped) {
  if (str == null) {
    return "";
  }

  str = str + "";
  var len = str.length;
  var result = "";
  var lastPos = 0;
  var i = 0;
  var replacement;

  for (; i < len; i++) {
    switch (str[i]) {
      case match:
        replacement = escaped;
        break;
      case "&":
        replacement = "&amp;";
        break;
      //   case "\n":
      //       // Preserve new lines so that they don't get normalized as space.
      //       replacement = "&#10;";
      //       break;
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
