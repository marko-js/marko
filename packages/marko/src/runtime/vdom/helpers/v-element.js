"use strict";

var VElement = require("../vdom").___VElement;

module.exports = function (
  tagName,
  attrs,
  key,
  component,
  childCount,
  flags,
  props
) {
  return new VElement(tagName, attrs, key, component, childCount, flags, props);
};
