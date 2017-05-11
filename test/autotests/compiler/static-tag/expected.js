"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename);

var foo = 123;

function bar() {

}
var baz = 456;

function render(input, out) {
  var data = input;
}

marko_template._ = render;

marko_template.meta = {};
