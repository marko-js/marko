"use strict";

var changeCase = require("./_change-case");

/**
 * Helper for generating the string for a style attribute
 */
module.exports = function styleHelper(style) {
  if (!style) {
    return null;
  }

  var type = typeof style;

  if (type !== "string") {
    var styles = "";

    if (Array.isArray(style)) {
      for (var i = 0, len = style.length; i < len; i++) {
        var next = styleHelper(style[i]);
        if (next) styles += next + (next[next.length - 1] !== ";" ? ";" : "");
      }
    } else if (type === "object") {
      for (var name in style) {
        var value = style[name];
        if (value != null && value !== false) {
          if (typeof value === "number" && value) {
            value += "px";
          }

          styles += changeCase.___camelToDashCase(name) + ":" + value + ";";
        }
      }
    }

    return styles || null;
  }

  return style;
};
