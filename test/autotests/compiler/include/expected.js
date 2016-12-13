var marko_template = module.exports = require("marko/html").t(__filename),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTemplate = marko_helpers.l,
    target_template = marko_loadTemplate(require.resolve("./target.marko")),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/taglibs/core/include-tag"));

function render(data, out) {
  include_tag({
      _target: target_template
    }, out);
}

marko_template._ = render;
