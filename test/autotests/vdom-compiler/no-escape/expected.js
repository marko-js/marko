var marko_template = module.exports = require("marko/vdom").t();

function render(data, out) {
  out.t("Hello ");

  out.t(name);

  out.t("! ");

  out.h(message);
}

marko_template._ = render;
