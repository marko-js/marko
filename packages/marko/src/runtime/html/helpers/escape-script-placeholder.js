"use strict";
const unsafeCharsReg = /<\/script/g;
const replaceMatch = () => "\\x3C/script";
const escape = (str) =>
  unsafeCharsReg.test(str) ? str.replace(unsafeCharsReg, replaceMatch) : str;

/**
 * Escapes the '</' sequence in the body of a <script> body to avoid the `<script>` being
 * ended prematurely.
 *
 * For example:
 * var evil = {
 * 	name:  '</script><script>alert(1)</script>'
 * };
 *
 * <script>var foo = ${JSON.stringify(evil)}</script>
 *
 * Without escaping the ending '</script>' sequence the opening <script> tag would be
 * prematurely ended and a new script tag could then be started that could then execute
 * arbitrary code.
 */
module.exports = function escapeScriptHelper(value) {
  return escape(value + "");
};
