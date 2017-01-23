var marko_template = module.exports = require("marko/html").t(__filename),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    custom_tag_data_tag = marko_loadTag(require("./custom-tag-data-tag")),
    marko_merge = require("marko/runtime/helper-merge");

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
