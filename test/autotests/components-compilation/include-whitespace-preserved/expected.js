var marko_template = module.exports = require("marko/html").t(__filename),
    marko_component = {},
    marko_components = require("marko/components"),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/autotests/components-compilation/include-whitespace-preserved/index.marko", function() {
      return module.exports;
    }),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/components/taglib/include-tag")),
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  var __componentId0 = __component.id;

  out.w("<div" +
    marko_attr("id", __componentId0) +
    ">");

  include_tag({
      _target: data.renderBody,
      _elId: __componentId0
    }, out);

  out.w("</div>");
}

marko_template._ = marko_components.r(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_components.c(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "require",
          path: "./"
        }
    ],
    tags: [
      "marko/components/taglib/include-tag"
    ]
  };
