"use strict";

var styleHelper = require("../../helpers/style-value");
var attr = require("./attr");

module.exports = function styleAttr(value) {
  return attr("style", styleHelper(value));
};
