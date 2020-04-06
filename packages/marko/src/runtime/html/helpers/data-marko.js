"use strict";

var escapeQuoteHelpers = require("./escape-quotes");
var escapeSingleQuotes = escapeQuoteHelpers.___escapeSingleQuotes;
var escapeDoubleQuotes = escapeQuoteHelpers.___escapeDoubleQuotes;
var FLAG_WILL_RERENDER_IN_BROWSER = 1;
// var FLAG_HAS_RENDER_BODY = 2;

module.exports = function dataMarko(props, key, componentDef) {
  var result = "";
  var willNotRerender =
    !componentDef ||
    (componentDef.___renderBoundary &&
      (componentDef.___flags & FLAG_WILL_RERENDER_IN_BROWSER) === 0) ||
    componentDef.___componentsContext.___isPreserved;

  if (willNotRerender) {
    if (props) {
      // eslint-disable-next-line no-unused-vars
      for (var _ in props) {
        result +=
          " data-marko='" + escapeSingleQuotes(JSON.stringify(props)) + "'";
        break;
      }
    }

    if (key && key[0] === "@") {
      result +=
        ' data-marko-key="' +
        escapeDoubleQuotes(
          componentDef.___nextKey(key) + " " + componentDef.id
        ) +
        '"';
    }
  }

  return result;
};
