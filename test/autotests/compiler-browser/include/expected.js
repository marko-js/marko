var marko_template = module.exports = require("marko/vdom").t(__filename),
    include_target_template = require("./include-target.marko"),
    marko_helpers = require("marko/runtime/vdom/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/taglibs/core/include-tag"));

function render(data, out) {
  include_tag({
      _target: include_target_template,
      foo: "bar"
    }, out);
}

marko_template._ = render;
