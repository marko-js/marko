"use strict";
const unsafeCharsReg = /<\/style/g;
const replaceMatch = () => "\\3C/style";
const escape = (str) =>
  unsafeCharsReg.test(str) ? str.replace(unsafeCharsReg, replaceMatch) : str;

/**
 * Escapes the '</' sequence in the body of a <style> body to avoid the `<style>` being
 * ended prematurely.
 *
 * For example:
 * var color = '</style><script>alert(1)</script>';
 *
 * <style>#foo { background-color:${color} }</style>
 *
 * Without escaping the ending '</style>' sequence the opening <style> tag would be
 * prematurely ended and a script tag could then be started that could then execute
 * arbitrary code.
 */
module.exports = function escapeScriptHelper(value) {
  return escape(value + "");
};
