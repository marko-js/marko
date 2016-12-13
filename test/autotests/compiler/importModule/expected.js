var marko_template = require("marko/html").t(__filename);

module.exports = marko_template;

var foo = require("./foo");

function render(data, out) {
  foo();
}

marko_template._ = render;
