"use strict";

var attr = require("./attr");
var classHelper = require("../../helpers/class-value");

module.exports = function classAttr(value) {
  return attr("class", classHelper(value));
};
