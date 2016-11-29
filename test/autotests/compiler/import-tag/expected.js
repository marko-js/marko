var template = require("marko/html").c(__filename);

module.exports = template;

var bar = require("./bar"),
    foo = bar.f;

require("./foo");

function render(data, out) {}

template._ = render;
