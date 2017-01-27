var marko_template = module.exports = require("marko/html").t(__filename),
    foo = require("./foo");

function render(input, out) {
  var data = input;

  foo();
}

marko_template._ = render;
