var marko_template = module.exports = require("marko/html").t(__filename),
    bar = require("./bar"),
    foo = bar.f;

require("./foo");

function render(data, out) {}

marko_template._ = render;
