var template = require("marko/html").c(__filename);

var component = require("./component");

var template = template;

module.exports = require("marko-widgets").c(component, template);

function render(data, out) {}

template._ = render;
