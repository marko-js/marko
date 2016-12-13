var marko_template = require("marko/html").t(__filename);

module.exports = marko_template;

var bar = require("./bar"),
    foo = bar.f;

require("./foo");

function render(data, out) {}

marko_template._ = render;
