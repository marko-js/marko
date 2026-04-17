"use strict";
const unsafeCharsReg = />/g;
const replaceMatch = () => "&gt;";
const escape = (str) =>
  unsafeCharsReg.test(str) ? str.replace(unsafeCharsReg, replaceMatch) : str;

/**
 * Escapes content placed inside an <html-comment> tag.
 *
 * For example:
 * <html-comment>${userInput}</html-comment>
 *
 * Without escaping, a value of `><script>alert(1)</script><!--` would close the comment early.
 */
module.exports = function escapeCommentHelper(value) {
  return escape(value + "");
};
