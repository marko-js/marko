var template = require("marko/html").c(__filename);

module.exports = template;

var foo = require("./foo");

function render(data, out) {
  foo();
}

template._ = render;
