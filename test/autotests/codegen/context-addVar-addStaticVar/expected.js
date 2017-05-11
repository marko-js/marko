"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    fooStatic = "Hello Foo",
    barStatic = "Hello Bar";

function render(input, out) {
  var data = input;

  var foo = "Hello Foo",
      bar = "Hello Bar";

  out.w("<div></div>");
}

marko_template._ = render;

marko_template.meta = {};
