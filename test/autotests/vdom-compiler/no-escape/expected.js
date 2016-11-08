var template = require("marko/vdom").c(__filename);

module.exports = template;

var marko_helpers = require("marko/runtime/vdom/helpers"),
    marko_str = marko_helpers.s;

function render(data, out) {
  out.t("Hello " +
    marko_str(name) +
    "! ");

  out.h(marko_str(message));
}

template._ = render;
