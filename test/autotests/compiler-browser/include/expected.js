"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    include_target_template = require("./include-target.marko"),
    marko_helpers = require("marko/src/runtime/vdom/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out) {
  var data = input;

  include_tag({
      _target: include_target_template,
      foo: "bar"
    }, out);
}

marko_template._ = render;
