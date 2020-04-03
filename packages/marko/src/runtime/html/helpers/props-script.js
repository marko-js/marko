"use strict";

var escapeDoubleQuotes = require("./escape-quotes").___escapeDoubleQuotes;
var escapeScript = require("./escape-script-placeholder");
var assignPropsFunction = `
    function ap_(p) {
        var s = document.currentScript;
        var ps = s.previousSibling;
        for (var k in p) ps[k] = p[k];
        s.parentNode.removeChild(s);
    }
`
  .replace(/\s+/g, " ")
  .replace(/([\W]) (.)/g, "$1$2")
  .replace(/(.) ([\W])/g, "$1$2")
  .trim();

module.exports = function propsForPreviousNode(props, out) {
  var cspNonce = out.global.cspNonce;
  var nonceAttr = cspNonce
    ? ' nonce="' + escapeDoubleQuotes(cspNonce) + '"'
    : "";

  out.w("<script" + nonceAttr + ">");

  if (!out.global.assignPropsFunction) {
    out.w(assignPropsFunction);
    out.global.assignPropsFunction = true;
  }

  out.w("ap_(" + escapeScript(JSON.stringify(props)) + ");</script>");
};
