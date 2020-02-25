"use strict";

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
var escapeEndingScriptTagRegExp = /<\/script/g;
module.exports = function escapeScriptHelper(val) {
  return typeof val === "string"
    ? val.replace(escapeEndingScriptTagRegExp, "\\u003C/script")
    : val + "";
};
