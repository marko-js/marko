"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    target_template = marko_loadTemplate(require.resolve("./target.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out) {
  var data = input;

  include_tag({
      _target: target_template
    }, out);
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "./target.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
