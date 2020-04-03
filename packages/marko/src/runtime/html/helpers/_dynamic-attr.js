"use strict";
var attrHelper = require("./attr");
var notEmptyAttr = attrHelper.___notEmptyAttr;
var isEmptyAttrValue = attrHelper.___isEmptyAttrValue;
var classHelper = require("./class-attr");
var styleHelper = require("./style-attr");

module.exports = function dynamicAttr(name, value) {
  switch (name) {
    case "class":
      return classHelper(value);
    case "style":
      return styleHelper(value);
    case "renderBody":
      return "";
    default:
      return isEmptyAttrValue(value) || isInvalidAttrName(name)
        ? ""
        : notEmptyAttr(name, value);
  }
};

// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// Technically the above includes more invalid characters for attributes.
// In practice however the only character that does not become an attribute name
// is when there is a >.
function isInvalidAttrName(name) {
  for (let i = name.length; i--; ) {
    if (name[i] === ">") {
      return true;
    }
  }

  return false;
}
