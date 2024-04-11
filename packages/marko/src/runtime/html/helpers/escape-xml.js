"use strict";
const unsafeCharsRegExp = /[<&]/g;
const replaceMatch = (c) => (c === "&" ? "&amp;" : "&lt;");
const escape = (str) =>
  unsafeCharsRegExp.test(str)
    ? str.replace(unsafeCharsRegExp, replaceMatch)
    : str;

module.exports.x = function (value) {
  if (value == null) {
    return "";
  }

  if (value.toHTML) {
    return value.toHTML();
  }

  return escape(value + "");
};

exports.___escapeXML = escape;
