"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    custom_tag_data_tag = marko_loadTag(require("./custom-tag-data-tag"));

function render(input, out) {
  var data = input;

  custom_tag_data_tag({
      name: "Frank",
      age: 32
    }, out);

  custom_tag_data_tag({
      name: "Frank".toUpperCase(),
      age: 32
    }, out);

  custom_tag_data_tag({
      name: "Frank",
      age: 10
    }, out);
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "./custom-tag-data-tag"
    ]
  };
