"use strict";

var attr = require("./attr");
var styleHelper = require("../../helpers/style-value");

module.exports = function styleAttr(value) {
  return attr("style", styleHelper(value));
};
