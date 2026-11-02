"use strict";
var attrHelper = require("./attr");
var notEmptyAttr = attrHelper.___notEmptyAttr;
var isEmptyAttrValue = attrHelper.___isEmptyAttrValue;
var classHelper = require("./class-attr");
var styleHelper = require("./style-attr");
// Characters that end or break an attribute name in the HTML parser.
var invalidAttrNameReg = /[\s/>"'=]/;

module.exports = function dynamicAttr(name, value) {
  switch (name) {
    case "class":
      return classHelper(value);
    case "style":
      return styleHelper(value);
    case "renderBody":
      return "";
    default:
      return isEmptyAttrValue(value) || invalidAttrNameReg.test(name)
        ? ""
        : notEmptyAttr(name, value);
  }
};
