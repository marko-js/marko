"use strict";

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
var escapeEndingStyleTagRegExp = /<\/style/g;
module.exports = function escapeScriptHelper(val) {
  return typeof val === "string"
    ? val.replace(escapeEndingStyleTagRegExp, "\\003C/style")
    : val + "";
};
