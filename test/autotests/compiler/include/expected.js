var template = require("marko/html").c(__filename);

module.exports = template;

var marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTemplate = marko_helpers.l,
    target_template = marko_loadTemplate(require.resolve("./target.marko"));

function render(data, out) {
  target_template.render({}, out);
}

template._ = render;
