var marko_template = module.exports = require("marko/html").t(__filename),
    foo = require("./foo");

function render(data, out) {
  foo();
}

marko_template._ = render;
