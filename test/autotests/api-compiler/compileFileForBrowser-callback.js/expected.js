var marko_template = module.exports = require("marko/vdom").t();

function render(data, out) {
  out.t("Hello ");

  out.t(data.name);

  out.t("!");
}

marko_template._ = render;
