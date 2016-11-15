var template = require("marko/vdom").c(__filename);

module.exports = template;

function render(data, out) {
  out.t("Hello ");

  out.t(name);

  out.t("! ");

  out.h(message);
}

template._ = render;
