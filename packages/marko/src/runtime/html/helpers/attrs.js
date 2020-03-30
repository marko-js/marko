"use strict";

var attrHelper = require("./attr");
var classAttrHelper = require("./class-attr");
var styleAttrHelper = require("./style-attr");

// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
var invalidAttrNameCharacters = /[\s'"</=\\]/u;
var validAttrs = new Set();
var invalidAttrs = new Set();

module.exports = function attrs(attributes) {
  if (attributes != null) {
    // eslint-disable-next-line no-constant-condition
    if ("MARKO_DEBUG") {
      if (typeof attributes !== "object") {
        throw new Error(
          "A non object was passed as a dynamic attributes value."
        );
      }
    }

    var result = "";

    for (var attrName in attributes) {
      if (attrName === "style") {
        result += styleAttrHelper(attributes[attrName]);
      } else if (attrName === "class") {
        result += classAttrHelper(attributes[attrName]);
      } else if (attrName !== "renderBody" && isValidAttrName(attrName)) {
        result += attrHelper(attrName, attributes[attrName]);
      }
    }
    return result;
  }

  return "";
};

function isValidAttrName(attrName) {
  if (validAttrs.has(attrName)) return true;
  if (invalidAttrs.has(attrName)) return false;

  if (invalidAttrNameCharacters.test(attrName)) {
    invalidAttrs.add(attrName);
    return false;
  }

  validAttrs.add(attrName);
  return true;
}
