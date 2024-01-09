"use strict";

var classHelper = require("../../helpers/class-value");
var attr = require("./attr");

module.exports = function classAttr(value) {
  return attr("class", classHelper(value));
};
