var marko_template = require("marko/vdom").t(__filename);

module.exports = marko_template;

function render(data, out) {
  out.t("Hello ");

  out.t(name);

  out.t("! ");

  out.h(message);
}

marko_template._ = render;
