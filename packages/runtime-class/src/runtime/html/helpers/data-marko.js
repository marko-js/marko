"use strict";

var attr = require("./attr");
var escapeSingleQuotes = attr.s;
var escapeDoubleQuotes = attr.d;
var FLAG_WILL_RERENDER_IN_BROWSER = 1;
// var FLAG_HAS_RENDER_BODY = 2;

module.exports = function dataMarko(out, componentDef, props, key) {
  var result = "";
  var willNotRerender =
    out.___components.___isPreserved ||
    (componentDef.___renderBoundary &&
      (componentDef.___flags & FLAG_WILL_RERENDER_IN_BROWSER) === 0);

  if (willNotRerender) {
    if (props) {
      for (var _ in props) {
        result +=
          " data-marko='" + escapeSingleQuotes(JSON.stringify(props)) + "'";
        break;
      }
    }

    if (key) {
      result +=
        ' data-marko-key="' +
        escapeDoubleQuotes(
          componentDef.___nextKey(key) + " " + componentDef.id,
        ) +
        '"';
    }
  }

  return result;
};
