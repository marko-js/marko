var template = require("marko/html").c(__filename);

module.exports = template;

var bar = require("./bar");

require("./foo");

function render(data, out) {}

template._ = render;
