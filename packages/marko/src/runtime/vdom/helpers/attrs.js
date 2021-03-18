"use strict";

var classHelper = require("../../helpers/class-value");
var styleHelper = require("../../helpers/style-value");

/**
 * Helper for processing dynamic attributes
 */
module.exports = function (attributes) {
  if (attributes != null) {
    // eslint-disable-next-line no-constant-condition
    if ("MARKO_DEBUG") {
      if (typeof attributes !== "object") {
        throw new Error(
          "A non object was passed as a dynamic attributes value."
        );
      }
    }

    var newAttributes = {};

    for (var attrName in attributes) {
      var val = attributes[attrName];
      if (attrName === "renderBody") {
        continue;
      }

      if (attrName === "class") {
        val = classHelper(val);
      } else if (attrName === "style") {
        val = styleHelper(val);
      }

      newAttributes[attrName] = val;
    }

    return newAttributes;
  }

  return attributes;
};
