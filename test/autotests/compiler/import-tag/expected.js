var template = require("marko/html").c(__filename);

module.exports = template;

var __bar = require.resolve("./bar"),
    bar = require(__bar);

function render(data, out) {}

template._ = render;
