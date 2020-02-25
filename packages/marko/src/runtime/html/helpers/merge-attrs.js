"use strict";

var attrsHelper = require("./attrs");
var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Merges attribute objects into a string.
 */
module.exports = function mergeAttrs() {
  var result = "";
  var finalAttributes = {};
  for (var i = 0; i < arguments.length; i++) {
    var attributes = arguments[i];
    if (attributes != null) {
      // eslint-disable-next-line no-constant-condition
      if ("MARKO_DEBUG") {
        if (typeof attributes !== "object") {
          throw new Error(
            "A non object was passed as a dynamic attributes value."
          );
        }
      }

      for (var k in attributes) {
        if (hasOwnProperty.call(attributes, k)) {
          finalAttributes[k] = attributes[k];
        }
      }
    }
  }

  return result + attrsHelper(finalAttributes);
};
