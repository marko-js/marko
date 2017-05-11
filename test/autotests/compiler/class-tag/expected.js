"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        onCreate: function() {}
      };

function render(input, out) {
  var data = input;

  var foo = new Foo();
}

marko_template._ = render;

marko_template.meta = {};
