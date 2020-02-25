"use strict";

var changeCase = require("../../helpers/_change-case");
var attrHelper = require("./attr");
var classAttrHelper = require("./class-attr");
var styleAttrHelper = require("./style-attr");

// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
var invalidAttrNameCharacters = /[\s'"</=\\]/u;
var validAttrs = Object.create(null);
var invalidAttrs = Object.create(null);

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
        result += attrHelper(
          changeCase.___camelToDashCase(attrName),
          attributes[attrName]
        );
      }
    }
    return result;
  }

  return "";
};

function isValidAttrName(attrName) {
  if (validAttrs[attrName]) return true;
  if (invalidAttrs[attrName]) return false;

  if (!invalidAttrNameCharacters.test(attrName)) {
    validAttrs[attrName] = true;
    return true;
  } else {
    invalidAttrs[attrName] = true;
    return false;
  }
}
