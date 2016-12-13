var marko_template = require("marko/html").t(__filename);

module.exports = marko_template;

var marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    custom_tag_data_tag = marko_loadTag(require("./custom-tag-data-tag")),
    marko_merge = marko_helpers.m;

function render(data, out) {
  custom_tag_data_tag({
      name: "Frank",
      age: 32
    }, out);

  custom_tag_data_tag({
      name: "Frank".toUpperCase(),
      age: 32
    }, out);

  custom_tag_data_tag(marko_merge({
      age: 10
    }, {
      name: "Frank",
      age: 32
    }), out);
}

marko_template._ = render;
