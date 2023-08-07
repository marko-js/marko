"use strict";

var classHelper = require("../../helpers/class-value");
var styleHelper = require("../../helpers/style-value");
var parseHTML = require("../parse-html");

/**
 * Helper for processing dynamic attributes
 */
module.exports = function (attributes) {
  if (typeof attributes === "string") {
    return parseAttrs(attributes);
  }

  if (attributes) {
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

function parseAttrs(str) {
  if (str === "") {
    return {};
  }

  var attrs = parseHTML("<a " + str + ">").attributes;
  var result = {};
  var attr;

  for (var len = attrs.length, i = 0; i < len; i++) {
    attr = attrs[i];
    result[attr.name] = attr.value;
  }

  return result;
}
